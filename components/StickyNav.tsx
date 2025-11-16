'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface StickyNavProps {
  tutorials: any[];
  completedSteps: number[];
}

export default function StickyNav({ tutorials, completedSteps }: StickyNavProps) {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('quick-start');

  const sections = [
    {
      id: 'quick-start',
      icon: '🚀',
      label: language === 'en' ? 'Quick Start' : 'Bắt Đầu',
      labelFull: language === 'en' ? 'Quick Start Guide' : 'Hướng Dẫn Bắt Đầu'
    },
    {
      id: 'progress',
      icon: '📈',
      label: language === 'en' ? 'Progress' : 'Tiến Độ',
      labelFull: language === 'en' ? 'Track Your Journey' : 'Theo Dõi Hành Trình'
    },
    {
      id: 'wealth',
      icon: '💰',
      label: language === 'en' ? 'Calculator' : 'Máy Tính',
      labelFull: language === 'en' ? 'Earnings Calculator' : 'Máy Tính Lợi Nhuận'
    },
    {
      id: 'support',
      icon: '🎓',
      label: language === 'en' ? 'Resources' : 'Tài Liệu',
      labelFull: language === 'en' ? 'Learn & Get Support' : 'Học Tập & Hỗ Trợ'
    },
    {
      id: 'steps',
      icon: '✅',
      label: language === 'en' ? 'Steps' : 'Các Bước',
      labelFull: language === 'en' ? 'Onboarding Steps' : 'Các Bước Hướng Dẫn'
    },
    {
      id: 'info',
      icon: '📋',
      label: language === 'en' ? 'Info' : 'Thông Tin',
      labelFull: language === 'en' ? 'Important Information' : 'Thông Tin Quan Trọng'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(`section-${s.id}`));
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [language]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  // Calculate overall progress
  const completionPercentage = tutorials.length > 0
    ? Math.round((completedSteps.length / tutorials.length) * 100)
    : 0;

  return (
    <div className="sticky top-0 z-30 bg-white dark:bg-gray-800 shadow-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4 overflow-x-auto py-3 scrollbar-hide">
          {/* Navigation Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg font-semibold transition text-sm ${
                  section.id === activeSection
                    ? 'bg-indigo-600 dark:bg-indigo-700 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                title={section.labelFull}
              >
                <span>{section.icon}</span>
                <span className="whitespace-nowrap">{section.label}</span>
              </button>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="flex-shrink-0 flex items-center gap-3 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
            <div className="hidden sm:block text-xs text-gray-600 dark:text-gray-400">
              {language === 'en' ? 'Progress' : 'Tiến độ'}
            </div>
            <div className="flex items-center gap-2">
              <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                {completionPercentage}%
              </div>
              <div className="w-16 h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
