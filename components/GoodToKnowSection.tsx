'use client';

import { GoodToKnowItem } from '@/types';
import { Lightbulb } from 'lucide-react';

interface GoodToKnowSectionProps {
  items: GoodToKnowItem[];
  title: string;
}

export default function GoodToKnowSection({ items, title }: GoodToKnowSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
        <Lightbulb className="text-yellow-500 dark:text-yellow-400" size={28} />
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800 hover:shadow-md transition-shadow"
          >
            <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2 flex items-center gap-2">
              <span className="text-yellow-600 dark:text-yellow-400">💡</span>
              {item.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
