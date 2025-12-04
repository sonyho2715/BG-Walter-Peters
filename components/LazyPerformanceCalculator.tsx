'use client';

import dynamic from 'next/dynamic';
import SkeletonLoader from './SkeletonLoader';

// Lazy load the heavy PerformanceCalculator component
const PerformanceCalculator = dynamic(
  () => import('./PerformanceCalculator'),
  {
    loading: () => (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
        {/* Tab Skeleton */}
        <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700 p-2 gap-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"
            />
          ))}
        </div>

        {/* Content Skeleton */}
        <div className="p-6 space-y-6">
          {/* Title skeleton */}
          <div className="space-y-2">
            <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="h-4 w-96 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          </div>

          {/* Input fields skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
              </div>
            ))}
          </div>

          {/* Results skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-4 bg-gray-100 dark:bg-gray-700/50 rounded-xl space-y-2"
              >
                <div className="h-4 w-20 bg-gray-200 dark:bg-gray-600 rounded animate-pulse" />
                <div className="h-8 w-32 bg-gray-200 dark:bg-gray-600 rounded animate-pulse" />
              </div>
            ))}
          </div>

          {/* Chart skeleton */}
          <div className="h-64 w-full bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse mt-6" />
        </div>
      </div>
    ),
    ssr: false // Disable SSR for this heavy component
  }
);

export default function LazyPerformanceCalculator() {
  return <PerformanceCalculator />;
}
