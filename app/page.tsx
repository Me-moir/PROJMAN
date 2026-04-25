'use client';

import { useCallback, useMemo, useState } from 'react';
import { wbsData } from '../lib/wbsData';
import { WBSTree } from '../components/WBSTree';
import type { WBSNode } from '../lib/wbsData';

interface GraphMeta {
  byNodeId: Map<string, WBSNode>;
  parentByNodeId: Map<string, string | null>;
  activityByActivityId: Map<string, WBSNode>;
  numberByNodeId: Map<string, string>;
}

const buildGraphMeta = (root: WBSNode): GraphMeta => {
  const byNodeId = new Map<string, WBSNode>();
  const parentByNodeId = new Map<string, string | null>();
  const activityByActivityId = new Map<string, WBSNode>();
  const numberByNodeId = new Map<string, string>();

  const walk = (node: WBSNode, parentId: string | null, path: number[]) => {
    byNodeId.set(node.id, node);
    parentByNodeId.set(node.id, parentId);
    numberByNodeId.set(node.id, path.join('.'));
    if (node.activity?.id) activityByActivityId.set(node.activity.id, node);
    (node.children ?? []).forEach((child, index) => walk(child, node.id, [...path, index + 1]));
  };

  byNodeId.set(root.id, root);
  parentByNodeId.set(root.id, null);
  numberByNodeId.set(root.id, '0');
  (root.children ?? []).forEach((child, index) => walk(child, root.id, [index + 1]));

  return { byNodeId, parentByNodeId, activityByActivityId, numberByNodeId };
};

const getAncestors = (nodeId: string, parentByNodeId: Map<string, string | null>) => {
  const chain: string[] = [];
  let current: string | null | undefined = nodeId;
  while (current) {
    chain.push(current);
    current = parentByNodeId.get(current) ?? null;
  }
  return chain;
};

const getPhaseHeader = (
  selectedNode: WBSNode,
  byNodeId: Map<string, WBSNode>,
  parentByNodeId: Map<string, string | null>
) => {
  const chain = getAncestors(selectedNode.id, parentByNodeId)
    .map((id) => byNodeId.get(id))
    .filter((node): node is WBSNode => !!node);
  const phaseNode = chain.find((node) => node.type === 'phase' && /PHASE\s+\d+/i.test(node.name));
  if (!phaseNode) return 'PROJECT OVERVIEW';
  const match = phaseNode.name.match(/PHASE\s+(\d+)/i);
  return `PHASE ${match ? match[1] : '?'}`;
};

const buildFlowLinks = (
  selectedNode: WBSNode,
  graphMeta: GraphMeta
): { predecessors: Array<{ id: string; label: string }>; successors: Array<{ id: string; label: string }> } => {
  const { byNodeId, parentByNodeId, activityByActivityId, numberByNodeId } = graphMeta;

  if (selectedNode.type === 'activity') {
    const dependencies = selectedNode.activity?.dependencies ?? [];
    const predecessors = dependencies.map((depId) => {
      const depNode = activityByActivityId.get(depId);
      return { id: depNode ? (numberByNodeId.get(depNode.id) ?? depId) : depId, label: depNode?.name ?? 'Linked activity' };
    });
    const successors: Array<{ id: string; label: string }> = [];
    const currentActivityId = selectedNode.activity?.id;
    if (currentActivityId) {
      byNodeId.forEach((node) => {
        if (node.type !== 'activity' || !node.activity?.id) return;
        if ((node.activity.dependencies ?? []).includes(currentActivityId)) {
          successors.push({ id: numberByNodeId.get(node.id) ?? node.activity.id, label: node.name });
        }
      });
    }
    return { predecessors, successors };
  }

  const parentId = parentByNodeId.get(selectedNode.id);
  if (!parentId) return { predecessors: [], successors: [] };
  const parent = byNodeId.get(parentId);
  const siblings = parent?.children ?? [];
  const idx = siblings.findIndex((n) => n.id === selectedNode.id);
  return {
    predecessors: idx > 0 ? [{ id: numberByNodeId.get(siblings[idx - 1].id) ?? siblings[idx - 1].id, label: siblings[idx - 1].name }] : [],
    successors: idx >= 0 && idx < siblings.length - 1 ? [{ id: numberByNodeId.get(siblings[idx + 1].id) ?? siblings[idx + 1].id, label: siblings[idx + 1].name }] : [],
  };
};

// ── Count all nodes by type from the full data tree (static, computed once) ──
const countNodeTypes = (root: WBSNode) => {
  let phase = 0, workpackage = 0, activity = 0;
  const walk = (node: WBSNode) => {
    if (node.type === 'phase') phase++;
    else if (node.type === 'workpackage') workpackage++;
    else if (node.type === 'activity') activity++;
    node.children?.forEach(walk);
  };
  // Don't count the root project node itself
  root.children?.forEach(walk);
  return { phase, workpackage, activity, total: phase + workpackage + activity };
};

const NODE_COUNTS = countNodeTypes(wbsData);

// ── Icon-only round button ────────────────────────────────────────────────────
const IconBtn: React.FC<{
  onClick: () => void;
  title?: string;
  children: React.ReactNode;
  active?: boolean;
}> = ({ onClick, title, children, active }) => (
  <button
    type="button"
    onClick={onClick}
    title={title}
    className={`inline-flex h-8 w-8 items-center justify-center rounded-lg border transition-all duration-150 select-none cursor-pointer
      ${active
        ? 'border-[#75c8ef]/40 bg-[#75c8ef]/10 text-[#75c8ef]'
        : 'border-white/[0.08] bg-white/[0.04] text-white/45 hover:bg-white/[0.09] hover:text-white/80'
      }`}
  >
    {children}
  </button>
);

// ── Toggle pill ───────────────────────────────────────────────────────────────
const TogglePill: React.FC<{
  checked: boolean;
  onChange: () => void;
  label: string;
}> = ({ checked, onChange, label }) => (
  <button
    type="button"
    onClick={onChange}
    className="flex w-full items-center justify-between rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-2.5 transition-all duration-150 hover:bg-white/[0.06] cursor-pointer select-none"
  >
    <span className="text-[12px] font-medium text-white/60">{label}</span>
    <span
      className={`relative inline-flex items-center rounded-full border transition-all duration-200
        ${checked ? 'border-[#4ade80]/50 bg-[#4ade80]/20' : 'border-white/15 bg-white/[0.06]'}`}
      style={{ width: 32, height: 18 }}
    >
      <span
        className={`absolute h-3 w-3 rounded-full shadow transition-all duration-200
          ${checked ? 'translate-x-[14px] bg-[#4ade80]' : 'translate-x-[2px] bg-white/30'}`}
      />
    </span>
  </button>
);

export default function Home() {
  const [selectedNode, setSelectedNode] = useState<WBSNode>(wbsData);
  const [nodeViewMode, setNodeViewMode] = useState(false);
  const [zoom, setZoom] = useState(0.58);
  const [externalExpanded, setExternalExpanded] = useState<Set<string> | undefined>(undefined);
  const [recenterTrigger, setRecenterTrigger] = useState(0);

  const graphMeta = useMemo(() => buildGraphMeta(wbsData), []);

  const phaseHeader = useMemo(
    () => getPhaseHeader(selectedNode, graphMeta.byNodeId, graphMeta.parentByNodeId),
    [graphMeta.byNodeId, graphMeta.parentByNodeId, selectedNode]
  );

  const flowLinks = useMemo(
    () => buildFlowLinks(selectedNode, graphMeta),
    [graphMeta, selectedNode]
  );

  const handleExpandAll = useCallback(() => {
    const all = new Set<string>();
    const walk = (n: WBSNode) => { all.add(n.id); n.children?.forEach(walk); };
    walk(wbsData);
    setExternalExpanded(new Set(all));
  }, []);

  const handleResetTree = useCallback(() => {
    const initial = new Set<string>([wbsData.id]);
    wbsData.children?.forEach((child) => initial.add(child.id));
    setExternalExpanded(initial);
  }, []);

  const handleRecenter = useCallback(() => {
    setRecenterTrigger((prev) => prev + 1);
  }, []);

  const itemId =
    selectedNode.id === wbsData.id
      ? '0'
      : graphMeta.numberByNodeId.get(selectedNode.id) ?? selectedNode.id;
  const shortDescription =
    selectedNode.activity?.description ||
    (selectedNode.type !== 'phase' ? selectedNode.name : 'Top-level planning and delivery stage.');

  const zoomPct = Math.round(zoom * 100);
  const activityPct = NODE_COUNTS.total > 0
    ? Math.round((NODE_COUNTS.activity / NODE_COUNTS.total) * 100)
    : 0;

  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-100">
      <main className="flex h-full w-full">
        {/* ── Canvas ── */}
        <div className="h-full flex-1">
          <WBSTree
            data={wbsData}
            onNodeSelect={setSelectedNode}
            nodeViewMode={nodeViewMode}
            zoom={zoom}
            onZoomChange={setZoom}
            externalExpanded={externalExpanded}
            recenterTrigger={recenterTrigger}
          />
        </div>

        {/* ── Sidebar ── */}
        <aside className="flex h-full w-[360px] shrink-0 flex-col border-l border-white/10 bg-[linear-gradient(180deg,#0a1828,#0f2237)] text-[#eaf7ff]">

          {/* ── Scrollable info content ── */}
          <div className="flex-1 overflow-auto px-6 pb-6 pt-7">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-[#8fb6cd]">
              {phaseHeader}
            </p>

            <h2 className="mt-2 text-[21px] font-semibold leading-snug text-white">
              {selectedNode.id === wbsData.id ? 'Parkee' : selectedNode.name}
            </h2>

            <p className="mt-2 text-xs font-medium text-[#aacfe0]">
              ID: <span className="text-[#e1f4ff]">{itemId}</span>
            </p>

            <div className="mt-6 h-px w-full bg-gradient-to-r from-[#75c8ef]/45 via-[#ffffff1f] to-transparent" />

            <section className="mt-5">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#86aec4]">Short Description</p>
              <p className="mt-2 text-sm leading-relaxed text-[#e5f6ff]">{shortDescription}</p>
            </section>

            <section className="mt-7">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#86aec4]">Predecessor</p>
              {flowLinks.predecessors.length === 0 ? (
                <p className="mt-2 text-sm text-[#9ec1d3]">None</p>
              ) : (
                <ul className="mt-3 space-y-2.5">
                  {flowLinks.predecessors.map((item) => (
                    <li key={`pred-${item.id}`} className="rounded-md border border-white/10 bg-white/5 px-3 py-2">
                      <p className="text-xs font-semibold text-[#dff3ff]">{item.id}</p>
                      <p className="mt-0.5 text-xs text-[#a9c9d8]">{item.label}</p>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <section className="mt-6">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#86aec4]">Successors</p>
              {flowLinks.successors.length === 0 ? (
                <p className="mt-2 text-sm text-[#9ec1d3]">None</p>
              ) : (
                <ul className="mt-3 space-y-2.5">
                  {flowLinks.successors.map((item) => (
                    <li key={`succ-${item.id}`} className="rounded-md border border-white/10 bg-white/5 px-3 py-2">
                      <p className="text-xs font-semibold text-[#dff3ff]">{item.id}</p>
                      <p className="mt-0.5 text-xs text-[#a9c9d8]">{item.label}</p>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>

          {/* ── Pinned bottom panel ── */}
          <div className="shrink-0 border-t border-white/[0.07] bg-[#071525]/60">

            {/* ── Node summary ── */}
            <div className="px-5 pt-4 pb-3 space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/25">
                Project Summary
              </p>

              {/* 2×2 stat grid */}
              <div className="grid grid-cols-4 gap-1.5">
                {(
                  [
                    { label: 'Phases',    count: NODE_COUNTS.phase,       color: '#f59e0b' },
                    { label: 'Packages',  count: NODE_COUNTS.workpackage,  color: '#22d3ee' },
                    { label: 'Activities',count: NODE_COUNTS.activity,     color: '#4ade80' },
                    { label: 'Total',     count: NODE_COUNTS.total,        color: null      },
                  ] as Array<{ label: string; count: number; color: string | null }>
                ).map(({ label, count, color }) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1 rounded-lg border border-white/[0.07] bg-white/[0.04] px-2 py-2"
                  >
                    <span className="font-mono text-[17px] font-semibold leading-none text-white/85 tabular-nums">
                      {count}
                    </span>
                    <span className="flex items-center gap-1 leading-none">
                      {color && (
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: color, boxShadow: `0 0 4px ${color}88` }}
                        />
                      )}
                      <span className="text-[9px] text-white/30 truncate">{label}</span>
                    </span>
                  </div>
                ))}
              </div>

              {/* Activities-of-total bar */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[9.5px] text-white/25">Activities of total nodes</span>
                  <span className="font-mono text-[9.5px] tabular-nums text-white/35">{activityPct}%</span>
                </div>
                <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/[0.07]">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${activityPct}%`,
                      background: 'linear-gradient(90deg, #22d3ee55, #4ade80)',
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mx-5 h-px bg-white/[0.06]" />

            {/* ── View settings ── */}
            <div className="px-5 py-4 space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/25">
                View Settings
              </p>

              {/* Zoom row */}
              <div className="flex items-center gap-2">
                <span className="w-[52px] text-[11px] font-medium text-white/45 shrink-0">Zoom</span>
                <div className="flex flex-1 items-center gap-1.5">
                  <IconBtn onClick={() => setZoom((z) => Math.max(0.1, z - 0.1))} title="Zoom out">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <circle cx="5" cy="5" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
                      <path d="M3.2 5h3.6M8.5 8.5l1.8 1.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  </IconBtn>
                  <div className="relative flex-1 h-1.5 rounded-full bg-white/[0.08] overflow-visible">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-[#75c8ef]/60 transition-all"
                      style={{ width: `${Math.min(100, ((zoom - 0.1) / 4.9) * 100)}%` }}
                    />
                    <input
                      type="range"
                      min={10} max={300} step={5}
                      value={Math.round(zoom * 100)}
                      onChange={(e) => setZoom(Number(e.target.value) / 100)}
                      className="absolute inset-0 w-full opacity-0 cursor-pointer"
                      style={{ margin: 0 }}
                    />
                  </div>
                  <IconBtn onClick={() => setZoom((z) => Math.min(5, z + 0.1))} title="Zoom in">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <circle cx="5" cy="5" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
                      <path d="M5 3.2v3.6M3.2 5h3.6M8.5 8.5l1.8 1.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  </IconBtn>
                  <span className="min-w-[36px] rounded-md bg-white/[0.05] px-1.5 py-0.5 text-center font-mono text-[10px] text-white/35 tabular-nums">
                    {zoomPct}%
                  </span>
                </div>
              </div>

              {/* Tree controls row */}
              <div className="flex items-center gap-2">
                <span className="w-[52px] text-[11px] font-medium text-white/45 shrink-0">Tree</span>
                <div className="flex flex-1 gap-2">
                  <button
                    type="button"
                    onClick={handleExpandAll}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-[11px] font-semibold text-white/50 transition-all hover:bg-white/[0.09] hover:text-white/80 cursor-pointer select-none"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <rect x="0.75" y="0.75" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                      <rect x="7.25" y="0.75" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                      <rect x="0.75" y="7.25" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                      <rect x="7.25" y="7.25" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                    </svg>
                    Expand All
                  </button>
                  <button
                    type="button"
                    onClick={handleResetTree}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-[11px] font-semibold text-white/50 transition-all hover:bg-white/[0.09] hover:text-white/80 cursor-pointer select-none"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1.5v2M6 8.5v2M1.5 6h2M8.5 6h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                      <circle cx="6" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.4"/>
                    </svg>
                    Reset
                  </button>
                  <button
                    type="button"
                    onClick={handleRecenter}
                    title="Recenter canvas"
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#f59e0b]/30 bg-[#f59e0b]/10 text-[#f59e0b]/70 transition-all hover:bg-[#f59e0b]/20 hover:text-[#f59e0b] cursor-pointer select-none"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1.5v2M6 8.5v2M1.5 6h2M8.5 6h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                      <circle cx="6" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.4"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Node view toggle */}
              <TogglePill
                checked={nodeViewMode}
                onChange={() => setNodeViewMode((prev) => !prev)}
                label="Compact Node View"
              />
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}