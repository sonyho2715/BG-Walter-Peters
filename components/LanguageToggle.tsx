'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Languages } from 'lucide-react';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="p-3 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700 group relative"
      aria-label="Toggle language"
      title={`Switch to ${language === 'en' ? 'Vietnamese' : 'English'}`}
    >
      <div className="flex items-center gap-2">
        <Languages className="text-indigo-600 dark:text-indigo-400" size={20} />
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase">
          {language}
        </span>
      </div>
    </button>
  );
}
