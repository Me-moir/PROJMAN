'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { WBSNode } from '../lib/wbsData';

// ─────────────────────────────────────────────────────────────────────────────
// Public props
// ─────────────────────────────────────────────────────────────────────────────

export interface WBSTreeProps {
  data: WBSNode;
  onNodeSelect: (node: WBSNode) => void;
  nodeViewMode?: boolean;
  zoom: number;
  onZoomChange: (z: number) => void;
  externalExpanded?: Set<string>;
  recenterTrigger?: number;
}

export interface WBSLegendPanelProps {
  nodeViewMode?: boolean;
  phaseCt: number;
  workpackageCt: number;
  activityCt: number;
  selectedNode?: WBSNode | null;
}

// ─────────────────────────────────────────────────────────────────────────────
// Internal types
// ─────────────────────────────────────────────────────────────────────────────

interface PositionedNode {
  node: WBSNode;
  parentId?: string;
  depth: number;
  x: number;
  y: number;
}

interface ViewportSize {
  width: number;
  height: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

const BASE_RING = 180;
const RING_GAP = 160;
const BRANCH_CHILD_GAP = 0.1;
const MIN_CHILD_SPAN = 0.24;

// ─────────────────────────────────────────────────────────────────────────────
// Design tokens
// ─────────────────────────────────────────────────────────────────────────────

const NODE_STYLES = {
  phase: {
    card: 'bg-[#1a1a0f] border-[#f59e0b]/60 text-[#fef3c7]',
    activeGlow:    '0 0 0 2px #f59e0b, 0 0 22px rgba(245,158,11,0.5)',
    ancestorGlow:  '0 0 0 1.5px rgba(245,158,11,0.65), 0 4px 16px rgba(0,0,0,0.4)',
    successorGlow: '0 0 0 1px rgba(245,158,11,0.35), 0 4px 10px rgba(0,0,0,0.3)',
    accent:             '#f59e0b',
    edgeColor:          'rgba(245,158,11,0.35)',
    activeEdgeColor:    '#f59e0b',
    successorEdgeColor: 'rgba(245,158,11,0.5)',
    label: 'Phase',
  },
  workpackage: {
    card: 'bg-[#08161e] border-[#22d3ee]/45 text-[#e0f9ff]',
    activeGlow:    '0 0 0 2px #22d3ee, 0 0 22px rgba(34,211,238,0.45)',
    ancestorGlow:  '0 0 0 1.5px rgba(34,211,238,0.6), 0 4px 16px rgba(0,0,0,0.4)',
    successorGlow: '0 0 0 1px rgba(34,211,238,0.3), 0 4px 10px rgba(0,0,0,0.3)',
    accent:             '#22d3ee',
    edgeColor:          'rgba(34,211,238,0.28)',
    activeEdgeColor:    '#22d3ee',
    successorEdgeColor: 'rgba(34,211,238,0.45)',
    label: 'Work package',
  },
  activity: {
    card: 'bg-[#08150d] border-[#4ade80]/40 text-[#dcfce7]',
    activeGlow:    '0 0 0 2px #4ade80, 0 0 22px rgba(74,222,128,0.4)',
    ancestorGlow:  '0 0 0 1.5px rgba(74,222,128,0.55), 0 4px 16px rgba(0,0,0,0.4)',
    successorGlow: '0 0 0 1px rgba(74,222,128,0.28), 0 4px 10px rgba(0,0,0,0.3)',
    accent:             '#4ade80',
    edgeColor:          'rgba(74,222,128,0.25)',
    activeEdgeColor:    '#4ade80',
    successorEdgeColor: 'rgba(74,222,128,0.38)',
    label: 'Activity',
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Pure helpers
// ─────────────────────────────────────────────────────────────────────────────

const countLeaves = (node: WBSNode): number =>
  !node.children?.length
    ? 1
    : node.children.reduce((s, c) => s + countLeaves(c), 0);

const getNodeSize = (type: WBSNode['type']): number => {
  switch (type) {
    case 'phase':       return 110;
    case 'workpackage': return 88;
    case 'activity':    return 68;
    default:            return 80;
  }
};

const hashToUnit = (value: string): number => {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return ((hash >>> 0) % 10000) / 10000;
};

/**
 * Walk upward from a node to the root using the PositionedNode map.
 * Returns the set of all ancestor IDs (not including the node itself).
 */
const collectAncestorIds = (
  startId: string,
  nodeById: Map<string, PositionedNode>,
): Set<string> => {
  const ids = new Set<string>();
  let cur = nodeById.get(startId);
  while (cur?.parentId) {
    ids.add(cur.parentId);
    cur = nodeById.get(cur.parentId);
  }
  return ids;
};

/**
 * Recursively collect ALL descendant node IDs from the data tree,
 * regardless of whether nodes are expanded/visible.
 * This ensures successor highlighting works even for collapsed subtrees.
 */
const collectAllDescendantIds = (root: WBSNode): Set<string> => {
  const ids = new Set<string>();
  const walk = (node: WBSNode) => {
    if (!node.children?.length) return;
    for (const child of node.children) {
      ids.add(child.id);
      walk(child);
    }
  };
  walk(root);
  return ids;
};

// ─────────────────────────────────────────────────────────────────────────────
// Layout engine
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Returns the ID of the single non-root expanded node, or null when multiple
 * branches are open (normal multi-branch layout mode).
 */
const getSingleActiveId = (expanded: Set<string>, rootId: string): string | null => {
  const nonRoot = [...expanded].filter((id) => id !== rootId);
  return nonRoot.length === 1 ? nonRoot[0] : null;
};

/**
 * Compute the minimum ring radius so that `count` nodes of `nodeSize` px
 * fit around the circle without touching, with at least `gap` px clearance.
 *
 *   circumference  ≥  count × (nodeSize + gap)
 *   2π × r         ≥  count × (nodeSize + gap)
 *   r              ≥  count × (nodeSize + gap) / (2π)
 */
const safeRadius = (count: number, nodeSize: number, gap = 24): number => {
  if (count <= 1) return BASE_RING;
  const minFromGeometry = (count * (nodeSize + gap)) / (2 * Math.PI);
  return Math.max(BASE_RING, minFromGeometry);
};

/**
 * After placing nodes on their rings, push apart any pair that overlap.
 * Works in polar space: nudge angles outward until the chord distance between
 * every pair of siblings exceeds their combined half-sizes plus a margin.
 * Runs iteratively (like a spring solver) until stable or max iterations hit.
 */
const resolveOverlaps = (
  nodes: PositionedNode[],
  parentX: number,
  parentY: number,
  nodeSize: number,
  margin = 16,
  maxIter = 40,
): PositionedNode[] => {
  if (nodes.length <= 1) return nodes;

  // Convert to polar relative to the parent centre
  let polar = nodes.map((n) => ({
    r: Math.hypot(n.x - parentX, n.y - parentY),
    a: Math.atan2(n.y - parentY, n.x - parentX),
    orig: n,
  }));

  const minDist = nodeSize + margin;

  for (let iter = 0; iter < maxIter; iter++) {
    let moved = false;
    for (let i = 0; i < polar.length; i++) {
      for (let j = i + 1; j < polar.length; j++) {
        const pi = polar[i];
        const pj = polar[j];
        const dx = pj.r * Math.cos(pj.a) - pi.r * Math.cos(pi.a);
        const dy = pj.r * Math.sin(pj.a) - pi.r * Math.sin(pi.a);
        const dist = Math.hypot(dx, dy);
        if (dist < minDist && dist > 0.01) {
          const overlap = (minDist - dist) / 2;
          // Push each node's angle away from the other
          const chord = 2 * Math.asin(Math.min(1, overlap / (2 * pi.r)));
          const chordJ = 2 * Math.asin(Math.min(1, overlap / (2 * pj.r)));
          const dir = pj.a > pi.a || (pj.a - pi.a + 2 * Math.PI) % (2 * Math.PI) < Math.PI ? 1 : -1;
          polar[i] = { ...pi, a: pi.a - dir * chord };
          polar[j] = { ...pj, a: pj.a + dir * chordJ };
          moved = true;
        }
      }
    }
    if (!moved) break;
  }

  return polar.map(({ r, a, orig }) => ({
    ...orig,
    x: parentX + r * Math.cos(a),
    y: parentY + r * Math.sin(a),
  }));
};

const buildLayout = (
  root: WBSNode,
  expanded: Set<string>,
  startAngle: number,
  endAngle: number,
  depth: number,
  parent?: PositionedNode,
  singleActiveId?: string | null,
): PositionedNode[] => {
  const isSingleActive = !!singleActiveId && root.id === singleActiveId;

  const span = endAngle - startAngle;
  let centerAngle = (startAngle + endAngle) / 2;
  let radius =
    depth === 0
      ? 0
      : BASE_RING +
        (depth - 1) * RING_GAP +
        depth * depth * 20 +
        (depth >= 3 ? (depth - 2) * 120 : 0);

  // Suppress jitter for the single-active node and its direct children so they
  // sit on clean computed positions (no random offsets fighting the geometry).
  const isChildOfSingleActive = !!singleActiveId && parent?.node.id === singleActiveId;
  const suppressJitter = isSingleActive || isChildOfSingleActive;

  if (depth > 0 && !suppressJitter) {
    const angleJitterRange = Math.min(0.18, span * 0.28);
    const angleJitter = (hashToUnit(`${root.id}-angle`) - 0.5) * angleJitterRange;
    const radialJitter = (hashToUnit(`${root.id}-radius`) - 0.5) * Math.min(40, RING_GAP * 0.4);
    centerAngle += angleJitter;
    radius = Math.max(36, radius + radialJitter);
  }

  const x = radius * Math.cos(centerAngle);
  const y = radius * Math.sin(centerAngle);
  const current: PositionedNode = { node: root, parentId: parent?.node.id, depth, x, y };
  const nodes: PositionedNode[] = [current];

  if (!root.children?.length || !expanded.has(root.id)) return nodes;

  const childCount = root.children.length;
  const fullSpan = endAngle - startAngle;

  // ── Single-active mode: place children on a geometry-derived ring ──────────
  if (isSingleActive) {
    // Use the largest possible child node size to compute a safe radius
    const maxChildSize = Math.max(...root.children.map((c) => getNodeSize(c.type)));
    const ringR = safeRadius(childCount, maxChildSize, 28);
    const angleStep = (Math.PI * 2) / childCount;

    // Place each child at exact clock positions (no jitter, no arc truncation)
    let childNodes: PositionedNode[] = root.children.map((child, i) => {
      const angle = -Math.PI / 2 + i * angleStep;
      const cx = x + ringR * Math.cos(angle);
      const cy = y + ringR * Math.sin(angle);
      return { node: child, parentId: root.id, depth: depth + 1, x: cx, y: cy };
    });

    // Post-process: push apart any siblings that still overlap after placement
    childNodes = resolveOverlaps(childNodes, x, y, maxChildSize, 24);

    // For each positioned child, recurse into its own subtree if expanded.
    // Pass a narrow arc centred on the child's actual angle so grandchildren
    // fan away from the child rather than the whole circle.
    for (const cn of childNodes) {
      nodes.push(cn);
      if (cn.node.children?.length && expanded.has(cn.node.id)) {
        const childAngle = Math.atan2(cn.y - y, cn.x - x);
        const halfArc = Math.min(Math.PI * 0.55, Math.PI / Math.max(2, childCount * 0.6));
        nodes.push(
          ...buildLayout(
            cn.node,
            expanded,
            childAngle - halfArc,
            childAngle + halfArc,
            depth + 1,
            current,
            singleActiveId,
          ).slice(1), // skip the root re-emit; use cn position instead
        );
      }
    }
    return nodes;
  }

  // ── Normal mode ────────────────────────────────────────────────────────────
  const segments: Array<{ start: number; end: number }> = [];

  if (depth === 0) {
    const angleStep = (Math.PI * 2) / childCount;
    const perChild = angleStep * 0.7;
    for (let i = 0; i < childCount; i++) {
      const center = -Math.PI / 2 + i * angleStep;
      segments.push({ start: center - perChild / 2, end: center + perChild / 2 });
    }
  } else {
    const leaves = root.children.map((c) => countLeaves(c));
    const totalLeaves = leaves.reduce((s, l) => s + l, 0);
    const rawSpans = leaves.map((l) => (fullSpan * l) / totalLeaves);
    const depthMinSpan =
      depth >= 2 ? MIN_CHILD_SPAN + Math.min(0.26, depth * 0.06) : MIN_CHILD_SPAN;
    const minSpan = Math.min(depthMinSpan, fullSpan / Math.max(1, childCount));
    let weightedSpans = rawSpans.map((s) => Math.max(minSpan, s));
    const maxUsable = fullSpan * 0.75;
    const spanSum = weightedSpans.reduce((s, w) => s + w, 0);
    if (spanSum > maxUsable) {
      const scale = maxUsable / spanSum;
      weightedSpans = weightedSpans.map((s) => s * scale);
    }
    const adjSum = weightedSpans.reduce((s, w) => s + w, 0);
    const remaining = Math.max(0, fullSpan - adjSum);
    const reqGap =
      BRANCH_CHILD_GAP +
      Math.min(0.09, depth * 0.015) +
      (depth >= 2 ? Math.min(0.2, depth * 0.045) : 0);
    const gap = Math.min(reqGap, remaining / Math.max(1, childCount - 1));
    const used = adjSum + gap * (childCount - 1);
    let cursor = startAngle + (fullSpan - used) / 2;
    for (const s of weightedSpans) {
      segments.push({ start: cursor, end: cursor + s });
      cursor += s + gap;
    }
  }

  root.children.forEach((child, i) => {
    nodes.push(
      ...buildLayout(child, expanded, segments[i].start, segments[i].end, depth + 1, current, singleActiveId),
    );
  });
  return nodes;
};

// ─────────────────────────────────────────────────────────────────────────────
// WBSLegendPanel — rendered in the sidebar
// ─────────────────────────────────────────────────────────────────────────────

export const WBSLegendPanel: React.FC<WBSLegendPanelProps> = ({
  nodeViewMode,
  phaseCt,
  workpackageCt,
  activityCt,
  selectedNode,
}) => {
  const entries = [
    { key: 'phase',       color: NODE_STYLES.phase.accent,       label: 'Phase',        count: phaseCt },
    { key: 'workpackage', color: NODE_STYLES.workpackage.accent,  label: 'Work package', count: workpackageCt },
    { key: 'activity',    color: NODE_STYLES.activity.accent,     label: 'Activity',     count: activityCt },
  ];

  return (
    <div className="flex flex-col gap-4 select-none">

      {/* Node type legend */}
      {!nodeViewMode && (
        <>
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/30">
              Legend
            </p>
            {entries.map(({ key, color, label, count }) => (
              <div key={key} className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2">
                  <span
                    className="h-2 w-2 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: color, boxShadow: `0 0 5px ${color}` }}
                  />
                  <span className="text-[12px] font-medium text-white/60">{label}</span>
                </span>
                <span className="rounded-md bg-white/[0.06] px-1.5 py-0.5 font-mono text-[10px] text-white/35">
                  {count}
                </span>
              </div>
            ))}
          </div>
          <div className="h-px bg-white/[0.07]" />
        </>
      )}

      {/* Selection path */}
      <div className="flex flex-col gap-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/30">
          Selection
        </p>
        {selectedNode ? (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.04] px-2.5 py-1.5">
              <span
                className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                style={{
                  backgroundColor:
                    NODE_STYLES[selectedNode.type as keyof typeof NODE_STYLES]?.accent ?? 'white',
                  boxShadow: `0 0 6px ${NODE_STYLES[selectedNode.type as keyof typeof NODE_STYLES]?.accent ?? 'white'}`,
                }}
              />
              <span className="text-[11px] font-medium text-white/75 truncate leading-snug">
                {selectedNode.name}
              </span>
            </div>
            <div className="flex flex-col gap-1.5 pl-0.5">
              {(
                [
                  { opacity: 1,    dash: false, label: 'Predecessor path', sub: 'Solid — ancestors to root' },
                  { opacity: 0.7,  dash: true,  label: 'Successor path',   sub: 'Dashed — all descendants'  },
                  { opacity: 0.18, dash: false, label: 'Unrelated',        sub: 'Dimmed out'                },
                ] as Array<{ opacity: number; dash: boolean; label: string; sub: string }>
              ).map(({ opacity, dash, label, sub }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <svg width="14" height="10" className="flex-shrink-0 overflow-visible">
                    <line
                      x1="0" y1="5" x2="14" y2="5"
                      stroke="white" strokeWidth="1.5" strokeLinecap="round"
                      strokeDasharray={dash ? '3 3' : undefined}
                      opacity={opacity}
                    />
                  </svg>
                  <div className="flex flex-col leading-none gap-0.5">
                    <span className="text-[11px] text-white/55 font-medium">{label}</span>
                    <span className="text-[9.5px] text-white/25">{sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-[11px] text-white/25 leading-relaxed">
            Click any node to highlight its predecessor and successor paths.
          </p>
        )}
      </div>

      {/* Summary counts */}
      <div className="h-px bg-white/[0.07]" />
      <div className="flex flex-col gap-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/30">
          Summary
        </p>
        <div className="grid grid-cols-2 gap-1.5">
          {(
            [
              { label: 'Phases',       count: phaseCt,       color: NODE_STYLES.phase.accent },
              { label: 'Work packages', count: workpackageCt, color: NODE_STYLES.workpackage.accent },
              { label: 'Activities',   count: activityCt,    color: NODE_STYLES.activity.accent },
              { label: 'Total nodes',  count: phaseCt + workpackageCt + activityCt, color: null },
            ] as Array<{ label: string; count: number; color: string | null }>
          ).map(({ label, count, color }) => (
            <div
              key={label}
              className="flex flex-col gap-0.5 rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-2"
            >
              <span className="font-mono text-[15px] font-semibold leading-none text-white/80">
                {count}
              </span>
              <span className="flex items-center gap-1.5 text-[9.5px] text-white/30 leading-none mt-0.5">
                {color && (
                  <span
                    className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: color, boxShadow: `0 0 4px ${color}` }}
                  />
                )}
                {label}
              </span>
            </div>
          ))}
        </div>
        {/* Activity completion bar — activities are the smallest unit */}
        <div className="flex flex-col gap-1 mt-0.5">
          <div className="flex items-center justify-between">
            <span className="text-[9.5px] text-white/25">Activities of total</span>
            <span className="font-mono text-[9.5px] text-white/35">
              {phaseCt + workpackageCt + activityCt > 0
                ? Math.round((activityCt / (phaseCt + workpackageCt + activityCt)) * 100)
                : 0}%
            </span>
          </div>
          <div className="h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${phaseCt + workpackageCt + activityCt > 0
                  ? Math.round((activityCt / (phaseCt + workpackageCt + activityCt)) * 100)
                  : 0}%`,
                background: `linear-gradient(90deg, ${NODE_STYLES.workpackage.accent}55, ${NODE_STYLES.activity.accent})`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="h-px bg-white/[0.07]" />
      <div className="flex flex-col gap-1.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/30">
          Controls
        </p>
        {(
          [
            ['Scroll',       'Zoom in / out'],
            ['Drag',         'Pan canvas'],
            ['Click node',   'Select · expand'],
            ['Click canvas', 'Deselect'],
          ] as [string, string][]
        ).map(([key, desc]) => (
          <div key={key} className="flex items-center justify-between gap-3">
            <span className="rounded border border-white/[0.1] bg-white/[0.04] px-1.5 py-px text-[9px] font-mono text-white/40 flex-shrink-0">
              {key}
            </span>
            <span className="text-[10.5px] text-white/30 text-right">{desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// WBSTree
// ─────────────────────────────────────────────────────────────────────────────

export const WBSTree: React.FC<WBSTreeProps> = ({
  data,
  onNodeSelect,
  nodeViewMode = false,
  zoom,
  onZoomChange,
  externalExpanded,
  recenterTrigger = 0,
}) => {
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [expanded, setExpanded] = useState<Set<string>>(() => {
    const s = new Set<string>([data.id]);
    data.children?.forEach((c) => s.add(c.id));
    return s;
  });
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [viewport, setViewport] = useState<ViewportSize>({ width: 1200, height: 720 });

  const viewportRef  = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const panStartRef  = useRef({ x: 0, y: 0 });
  // ── FIX: track whether the pointer actually moved during a press ──────────
  // React fires onClick after every pointerup, even at the end of a pan.
  // We set this flag as soon as onPointerMove fires while dragging, and reset
  // it on every pointerdown. The canvas click handler bails out when it is
  // true, so panning never clears the active selection.
  const didDragRef   = useRef(false);

  useEffect(() => {
    if (externalExpanded) setExpanded(externalExpanded);
  }, [externalExpanded]);

  useEffect(() => {
    setPan({ x: 0, y: 0 });
  }, [recenterTrigger]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const update = () => setViewport({ width: el.clientWidth, height: el.clientHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const activeExpanded = expanded;

  // Detect when exactly one non-root node is expanded so the layout engine
  // can spread its children evenly across the full 360° instead of cramming
  // them into an arc derived from the parent's angular slice.
  const singleActiveId = useMemo(
    () => getSingleActiveId(activeExpanded, data.id),
    [activeExpanded, data.id],
  );

  const nodes = useMemo(
    () => buildLayout(data, activeExpanded, -Math.PI, Math.PI, 0, undefined, singleActiveId),
    [data, activeExpanded, singleActiveId],
  );

  const nodeById = useMemo(() => {
    const m = new Map<string, PositionedNode>();
    nodes.forEach((n) => m.set(n.node.id, n));
    return m;
  }, [nodes]);

  const edges = useMemo(
    () => nodes.filter((n) => !!n.parentId && nodeById.has(n.parentId!)),
    [nodes, nodeById],
  );

  // ── Predecessor IDs ───────────────────────────────────────────────────────
  const ancestorIds = useMemo<Set<string>>(
    () => (!selectedId ? new Set() : collectAncestorIds(selectedId, nodeById)),
    [selectedId, nodeById],
  );

  // ── Successor IDs ─────────────────────────────────────────────────────────
  const successorIds = useMemo<Set<string>>(() => {
    if (!selectedId) return new Set();
    const sel = nodeById.get(selectedId);
    if (!sel) return new Set();
    return collectAllDescendantIds(sel.node);
  }, [selectedId, nodeById]);

  const hasSelection = selectedId !== null;

  const nodeCounts = useMemo(() => {
    const c = { phase: 0, workpackage: 0, activity: 0 };
    nodes.forEach((n) => {
      if (n.node.type === 'phase') c.phase++;
      else if (n.node.type === 'workpackage') c.workpackage++;
      else if (n.node.type === 'activity') c.activity++;
    });
    return c;
  }, [nodes]);

  // ── Interaction ───────────────────────────────────────────────────────────

  const toggleNode = useCallback(
    (node: WBSNode) => {
      const wasSelected = selectedId === node.id;
      onNodeSelect(node);
      setSelectedId(wasSelected ? null : node.id);
      if (!node.children?.length) return;
      setExpanded((prev) => {
        const next = new Set(prev);
        // First click on a branch selects it and keeps it expanded.
        // Clicking the same selected branch again toggles expand/collapse.
        if (wasSelected) {
          next.has(node.id) ? next.delete(node.id) : next.add(node.id);
        } else {
          next.add(node.id);
        }
        return next;
      });
    },
    [onNodeSelect, selectedId],
  );

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      onZoomChange(Math.max(0.1, Math.min(5, zoom + (e.deltaY > 0 ? -0.05 : 0.05))));
    },
    [zoom, onZoomChange],
  );

  const startDrag = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if ((e.target as HTMLElement).closest('[data-node-button]')) return;
      setIsDragging(true);
      dragStartRef.current = { x: e.clientX, y: e.clientY };
      panStartRef.current  = pan;
      didDragRef.current   = false; // reset on every new press
      e.currentTarget.setPointerCapture(e.pointerId);
    },
    [pan],
  );

  const onDrag = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      didDragRef.current = true; // pointer moved → this is a drag, not a tap
      setPan({
        x: panStartRef.current.x + e.clientX - dragStartRef.current.x,
        y: panStartRef.current.y + e.clientY - dragStartRef.current.y,
      });
    },
    [isDragging],
  );

  const endDrag = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.hasPointerCapture(e.pointerId) &&
      e.currentTarget.releasePointerCapture(e.pointerId);
    setIsDragging(false);
  }, []);

  // ── FIX: only deselect when the user genuinely clicked the canvas ─────────
  // Without the didDragRef guard, every pan gesture fired onClick on release
  // and cleared the active selection.
  const handleCanvasClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (didDragRef.current) return; // drag-release → don't deselect
    if (!(e.target as HTMLElement).closest('[data-node-button]')) setSelectedId(null);
  }, []);

  // ── Edge classification ───────────────────────────────────────────────────

  type EdgeKind = 'predecessor' | 'successor' | 'neutral' | 'dimmed';

  const classifyEdge = useCallback(
    (edgeNodeId: string, parentId: string): EdgeKind => {
      if (!hasSelection) return 'neutral';
      if (edgeNodeId === selectedId) return 'predecessor';
      if (ancestorIds.has(edgeNodeId)) return 'predecessor';
      if (parentId === selectedId) return 'successor';
      if (successorIds.has(parentId)) return 'successor';
      return 'dimmed';
    },
    [hasSelection, selectedId, ancestorIds, successorIds],
  );

  // ─────────────────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────────────────

  return (
    <section className="relative h-full w-full overflow-hidden" style={{ background: '#07090f' }}>

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #22d3ee22 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-24 right-0 h-80 w-80 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #f59e0b22 0%, transparent 70%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      {/* Canvas */}
      <div
        ref={viewportRef}
        className={`relative h-full w-full touch-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onWheel={handleWheel}
        onPointerDown={startDrag}
        onPointerMove={onDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClick={handleCanvasClick}
      >
        <div
          style={{
            position: 'absolute',
            left: 0, top: 0, width: 1, height: 1,
            overflow: 'visible',
            transform: `translate(${viewport.width / 2 + pan.x}px, ${viewport.height / 2 + pan.y}px) scale(${zoom})`,
            transformOrigin: '0 0',
          }}
        >

          {/* Edges */}
          <svg
            className="pointer-events-none"
            style={{ position: 'absolute', overflow: 'visible', left: 0, top: 0, width: 1, height: 1 }}
          >
            {edges.map((edge) => {
              const parent = nodeById.get(edge.parentId!);
              if (!parent) return null;

              const ns = edge.node.type
                ? NODE_STYLES[edge.node.type as keyof typeof NODE_STYLES]
                : null;

              const kind = classifyEdge(edge.node.id, edge.parentId!);

              const stroke =
                kind === 'predecessor' ? (ns?.activeEdgeColor    ?? 'rgba(255,255,255,0.7)')
                : kind === 'successor'  ? (ns?.successorEdgeColor ?? 'rgba(255,255,255,0.4)')
                :                         (ns?.edgeColor          ?? 'rgba(255,255,255,0.15)');

              const strokeWidth =
                kind === 'predecessor' ? 2
                : kind === 'successor'  ? 1.6
                : nodeViewMode          ? 1.1
                :                        1.6;

              const strokeDasharray =
                kind === 'successor' ? '5 4'
                : nodeViewMode && kind === 'neutral' ? '3 7'
                : undefined;

              const opacity = kind === 'dimmed' ? 0.09 : 1;

              return (
                <line
                  key={`${edge.parentId}-${edge.node.id}`}
                  x1={parent.x} y1={parent.y}
                  x2={edge.x}   y2={edge.y}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                  strokeDasharray={strokeDasharray}
                  strokeLinecap="round"
                  opacity={opacity}
                  style={{ transition: 'opacity 0.18s, stroke 0.18s, stroke-width 0.18s' }}
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((item) => {
            const isCenterHub = item.node.id === data.id;
            const isSelected  = selectedId === item.node.id;
            const isAncestor  = ancestorIds.has(item.node.id);
            const isSuccessor = successorIds.has(item.node.id);

            const dimmed =
              hasSelection && !isSelected && !isAncestor && !isSuccessor && !isCenterHub;

            const ds =
              item.depth >= 4 ? 0.54
              : item.depth === 3 ? 0.66
              : item.depth === 2 ? 0.84
              : 1;

            const baseSize = (isCenterHub ? 146 : getNodeSize(item.node.type)) * ds;
            const ns = !isCenterHub && item.node.type
              ? NODE_STYLES[item.node.type as keyof typeof NODE_STYLES]
              : null;
            const displayName = isCenterHub ? data.name : item.node.name;
            const fs = Math.max(
              7,
              baseSize * 0.108 * (item.depth >= 4 ? 0.8 : item.depth === 3 ? 0.88 : 1),
            );

            // ── Dot mode ────────────────────────────────────────────────────
            if (nodeViewMode && !isCenterHub) {
              const dotPx =
                item.node.type === 'phase' ? 26
                : item.node.type === 'workpackage' ? 17
                : 12;

              return (
                <button
                  key={item.node.id}
                  type="button"
                  data-node-button="true"
                  onClick={(e) => { e.stopPropagation(); toggleNode(item.node); }}
                  title={item.node.name}
                  className="absolute rounded-full border-2 transition-all duration-200 hover:brightness-125"
                  style={{
                    left: item.x, top: item.y,
                    width: dotPx, height: dotPx,
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: ns?.accent,
                    borderColor: isSelected ? '#fff' : ns?.accent,
                    boxShadow: isSelected
                      ? `0 0 0 2px ${ns?.accent}, 0 0 ${dotPx * 1.4}px ${ns?.accent}88`
                      : `0 0 ${dotPx}px ${ns?.accent}55`,
                    opacity: dimmed ? 0.18 : isSuccessor ? 0.62 : 1,
                    transition: 'opacity 0.18s, box-shadow 0.18s',
                  }}
                >
                  {item.node.type === 'phase' && (
                    <span
                      className="pointer-events-none absolute left-1/2 top-full whitespace-nowrap rounded-md border border-white/[0.08] bg-[#0d1119]/95 px-2 py-0.5 font-bold uppercase tracking-[0.14em] text-white/55 backdrop-blur-sm"
                      style={{ fontSize: 9, marginTop: 8, transform: 'translateX(-50%)' }}
                    >
                      {displayName}
                    </span>
                  )}
                </button>
              );
            }

            // ── Centre hub ──────────────────────────────────────────────────
            if (isCenterHub) {
              return (
                <button
                  key={item.node.id}
                  type="button"
                  data-node-button="true"
                  onClick={(e) => { e.stopPropagation(); toggleNode(item.node); }}
                  className="absolute rounded-full border transition-all duration-200 hover:brightness-110"
                  style={{
                    left: item.x, top: item.y,
                    width: baseSize, height: baseSize,
                    transform: 'translate(-50%, -50%)',
                    fontSize: fs,
                    background: 'radial-gradient(circle at 38% 36%, #2a2010, #1a1408 60%, #100e06)',
                    borderColor: isSelected ? 'rgba(245,158,11,0.9)' : 'rgba(245,158,11,0.55)',
                    boxShadow: isSelected
                      ? '0 0 0 2px #f59e0b, 0 0 36px rgba(245,158,11,0.4), 0 8px 32px rgba(0,0,0,0.7)'
                      : '0 0 0 1px rgba(245,158,11,0.2), 0 0 48px rgba(245,158,11,0.18), 0 8px 32px rgba(0,0,0,0.7)',
                    transition: 'box-shadow 0.18s',
                  }}
                >
                  <div className="flex h-full flex-col items-center justify-center gap-0.5 px-3">
                    <span
                      style={{ fontSize: Math.max(6, fs * 0.72) }}
                      className="font-semibold uppercase tracking-[0.16em] text-[#f59e0b]/55"
                    >
                      Project
                    </span>
                    <span className="font-bold leading-snug text-[#fef3c7] line-clamp-2">
                      {displayName}
                    </span>
                  </div>
                </button>
              );
            }

            // ── Card node ───────────────────────────────────────────────────
            const nodeW = Math.max(40, baseSize);
            const nodeH = Math.max(24, baseSize * 0.48);

            const boxShadow = isSelected
              ? ns?.activeGlow
              : isAncestor
              ? ns?.ancestorGlow
              : isSuccessor
              ? ns?.successorGlow
              : undefined;

            const nodeOpacity = dimmed ? 0.2 : (isSuccessor && !isSelected ? 0.68 : 1);

            return (
              <button
                key={item.node.id}
                type="button"
                data-node-button="true"
                onClick={(e) => { e.stopPropagation(); toggleNode(item.node); }}
                className={`absolute rounded-xl border text-center transition-all duration-200 hover:brightness-[1.12] ${ns?.card ?? ''}`}
                style={{
                  left: item.x, top: item.y,
                  width: nodeW, minHeight: nodeH,
                  transform: 'translate(-50%, -50%)',
                  fontSize: fs,
                  boxShadow,
                  opacity: nodeOpacity,
                  transition: 'opacity 0.18s, box-shadow 0.18s',
                }}
              >
                <div
                  className={`flex h-full flex-col items-center justify-center px-2.5 py-1.5 ${
                    item.depth <= 1 ? 'gap-1' : 'gap-0.5'
                  }`}
                >
                  <span className={`font-semibold leading-tight ${item.depth >= 4 ? 'line-clamp-1' : 'line-clamp-2'}`}>
                    {displayName}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
