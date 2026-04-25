'use client';

import React from 'react';
import { Activity } from '../lib/wbsData';

interface ActivityModalProps {
  activity: Activity | null;
  onClose: () => void;
}

export const ActivityModal: React.FC<ActivityModalProps> = ({
  activity,
  onClose,
}) => {
  if (!activity) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div
          className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-screen overflow-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold">{activity.name}</h2>
                <p className="text-green-100 mt-1">Activity Details</p>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:bg-green-700 p-2 rounded-full transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Activity ID */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Activity ID
              </label>
              <p className="text-gray-600 bg-gray-50 p-3 rounded font-mono text-sm">
                {activity.id}
              </p>
            </div>

            {/* Description */}
            {activity.description && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description
                </label>
                <p className="text-gray-600 bg-gray-50 p-3 rounded">
                  {activity.description}
                </p>
              </div>
            )}

            {/* Duration */}
            {activity.duration && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Duration
                </label>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 2m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-gray-600">{activity.duration}</p>
                </div>
              </div>
            )}

            {/* Resources */}
            {activity.resources && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Resources Assigned
                </label>
                <div className="bg-blue-50 p-3 rounded">
                  <div className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="text-gray-600">{activity.resources}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Risks */}
            {activity.risks && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Associated Risks
                </label>
                <div className="bg-red-50 p-3 rounded">
                  <div className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4v2m0 4v2M9 3h6a2 2 0 012 2v16a2 2 0 01-2 2H9a2 2 0 01-2-2V5a2 2 0 012-2z"
                      />
                    </svg>
                    <p className="text-gray-600">{activity.risks}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Dependencies */}
            {activity.dependencies && activity.dependencies.length > 0 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Dependencies
                </label>
                <div className="bg-orange-50 p-3 rounded">
                  <div className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                    <div>
                      {activity.dependencies.map((dep, idx) => (
                        <div key={idx} className="text-gray-600 font-mono text-sm">
                          {dep}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 border-t border-gray-200 p-4 flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              Close
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
              Edit Activity
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
