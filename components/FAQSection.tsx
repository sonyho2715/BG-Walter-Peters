'use client';

import { useState } from 'react';
import { FAQ } from '@/types';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQSectionProps {
  faqs: FAQ[];
  title: string;
}

export default function FAQSection({ faqs, title }: FAQSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
        <HelpCircle className="text-indigo-600 dark:text-indigo-400" size={28} />
        {title}
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all hover:border-indigo-300 dark:hover:border-indigo-600"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="text-left font-semibold text-gray-800 dark:text-gray-100 pr-4">
                {faq.question}
              </span>
              {expandedIndex === index ? (
                <ChevronUp className="flex-shrink-0 text-indigo-600 dark:text-indigo-400" size={20} />
              ) : (
                <ChevronDown className="flex-shrink-0 text-gray-500 dark:text-gray-400" size={20} />
              )}
            </button>
            {expandedIndex === index && (
              <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
