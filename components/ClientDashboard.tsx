'use client';

import { useState, useEffect } from 'react';
import { CompletedItems } from '@/types';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/locales';
import LanguageSelector from '@/components/LanguageSelector';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import ComprehensiveDisclaimer from '@/components/ComprehensiveDisclaimer';
import HeroSection from '@/components/HeroSection';
import DashboardSidebar from '@/components/DashboardSidebar';
import QuickReferenceCard from '@/components/QuickReferenceCard';
import LazyPerformanceCalculator from '@/components/LazyPerformanceCalculator';
import AllStepsView from '@/components/AllStepsView';
import CountdownTimer from '@/components/CountdownTimer';
import ImportantContacts from '@/components/ImportantContacts';
import ResourcesSection from '@/components/ResourcesSection';
import FAQSection from '@/components/FAQSection';
import GoodToKnowSection from '@/components/GoodToKnowSection';
import {
  Rocket, Calculator, GraduationCap, CheckSquare, Info,
  ArrowRight, Sparkles, BookOpen
} from 'lucide-react';
import TradingLessons from '@/components/TradingLessons';

interface ClientDashboardProps {
  userName?: string;
  userEmail?: string;
}

export default function ClientDashboard({ userName, userEmail }: ClientDashboardProps) {
  const { language, setLanguage } = useLanguage();
  const [languageSelected, setLanguageSelected] = useState(false);
  const [activeSection, setActiveSection] = useState('quick-start');
  const [completedSteps, setCompletedSteps] = useLocalStorage<number[]>('completedSteps', []);
  const [completedItems, setCompletedItems] = useLocalStorage<CompletedItems>('completedItems', {});

  const t = getTranslations(language);
  const tutorials = t.tutorials;

  useEffect(() => {
    const initialLang = localStorage.getItem('bg_initial_language');
    if (initialLang === 'en' || initialLang === 'vi') {
      setLanguageSelected(true);
      setLanguage(initialLang);
    }
  }, [setLanguage]);

  const handleLanguageSelected = (lang: 'en' | 'vi') => {
    setLanguage(lang);
    setLanguageSelected(true);
  };

  if (!languageSelected) {
    return <LanguageSelector onLanguageSelected={handleLanguageSelected} />;
  }

  const handleStepComplete = (stepIdx: number) => {
    if (!completedSteps.includes(stepIdx)) {
      setCompletedSteps([...completedSteps, stepIdx]);
    }
  };

  const handleItemComplete = (stepIdx: number, sectionIdx: number, itemIdx: number) => {
    const key = `${stepIdx}-${sectionIdx}-${itemIdx}`;
    setCompletedItems({
      ...completedItems,
      [key]: !completedItems[key]
    });
  };

  const sectionConfig: Record<string, {
    en: string;
    vi: string;
    icon: React.ElementType;
    gradient: string;
    subtitle: { en: string; vi: string };
  }> = {
    'quick-start': {
      en: 'Quick Start Guide',
      vi: 'Hướng Dẫn Bắt Đầu Nhanh',
      icon: Rocket,
      gradient: 'from-blue-500 to-cyan-500',
      subtitle: { en: 'Everything you need to get started', vi: 'Mọi thứ bạn cần để bắt đầu' }
    },
    'wealth': {
      en: 'Earnings Calculator',
      vi: 'Máy Tính Lợi Nhuận',
      icon: Calculator,
      gradient: 'from-green-500 to-emerald-500',
      subtitle: { en: 'Calculate your potential returns', vi: 'Tính toán lợi nhuận tiềm năng' }
    },
    'support': {
      en: 'Learn & Get Support',
      vi: 'Học Tập & Nhận Hỗ Trợ',
      icon: GraduationCap,
      gradient: 'from-purple-500 to-pink-500',
      subtitle: { en: 'Resources and contacts', vi: 'Tài liệu và liên hệ' }
    },
    'learn': {
      en: 'Trading Lessons',
      vi: 'Bài Học Giao Dịch',
      icon: BookOpen,
      gradient: 'from-cyan-500 to-teal-500',
      subtitle: { en: 'Learn trading fundamentals', vi: 'Học kiến thức giao dịch cơ bản' }
    },
    'steps': {
      en: 'Complete Onboarding Steps',
      vi: 'Hoàn Thành Các Bước Hướng Dẫn',
      icon: CheckSquare,
      gradient: 'from-orange-500 to-amber-500',
      subtitle: { en: 'Follow the steps to get started', vi: 'Làm theo các bước để bắt đầu' }
    },
    'info': {
      en: 'Important Information',
      vi: 'Thông Tin Quan Trọng',
      icon: Info,
      gradient: 'from-indigo-500 to-violet-500',
      subtitle: { en: 'Key details and FAQs', vi: 'Chi tiết quan trọng và câu hỏi thường gặp' }
    }
  };

  const currentSection = sectionConfig[activeSection];
  const SectionIcon = currentSection.icon;

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'quick-start':
        return (
          <>
            <HeroSection />
            <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-6xl mx-auto">
              <div className="mb-8">
                <CountdownTimer />
              </div>
              <QuickReferenceCard />
            </div>
          </>
        );

      case 'wealth':
        return (
          <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-6xl mx-auto">
            <LazyPerformanceCalculator />
          </div>
        );

      case 'support':
        return (
          <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ResourcesSection />
              <ImportantContacts />
            </div>
          </div>
        );

      case 'learn':
        return (
          <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-6xl mx-auto">
            <TradingLessons />
          </div>
        );

      case 'steps':
        return (
          <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-6xl mx-auto">
            <AllStepsView
              tutorials={tutorials}
              completedItems={completedItems}
              completedSteps={completedSteps}
              handleItemComplete={handleItemComplete}
              handleStepComplete={handleStepComplete}
              t={t}
            />
          </div>
        );

      case 'info':
        return (
          <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-6xl mx-auto space-y-6">
            {/* Important Reminder */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 md:p-8 text-white">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative flex gap-4">
                <div className="p-3 bg-white/20 rounded-2xl h-fit">
                  <span className="text-2xl">⏰</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">
                    {t.dashboard.importantReminder}
                  </h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {t.dashboard.reminderText}
                  </p>
                </div>
              </div>
            </div>

            {/* Good to Know */}
            <GoodToKnowSection items={t.goodToKnow} title={t.common.goodToKnow} />

            {/* FAQs */}
            <FAQSection faqs={t.faqs} title={t.common.faqs} />

            {/* Comprehensive Legal Disclaimer */}
            <ComprehensiveDisclaimer language={language} />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <DisclaimerBanner language={language} />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex">
        {/* Sidebar */}
        <DashboardSidebar
          completedSteps={completedSteps}
          totalSteps={tutorials.length}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          userName={userName}
          userEmail={userEmail}
        />

        {/* Main Content Area */}
        <main className="flex-1 min-h-screen">
          {/* Section Header - only show for non-quick-start sections */}
          {activeSection !== 'quick-start' && (
            <div className="sticky top-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50">
              <div className="px-4 sm:px-6 lg:px-8 py-6">
                <div className="max-w-6xl mx-auto">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-gradient-to-br ${currentSection.gradient} rounded-2xl shadow-lg`}>
                      <SectionIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                          {currentSection[language as 'en' | 'vi']}
                        </h1>
                        <Sparkles className="w-5 h-5 text-amber-500" />
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                        {currentSection.subtitle[language as 'en' | 'vi']}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section Content */}
          <div className="pb-20">
            {renderSectionContent()}
          </div>

          {/* Footer */}
          <footer className="bg-gray-900 dark:bg-black text-gray-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              {/* CTA Section */}
              <div className="text-center mb-10 pb-10 border-b border-gray-800">
                <p className="text-sm font-semibold text-indigo-400 mb-2 tracking-wide uppercase">
                  Pacific Pulse Growth Lab
                </p>
                <p className="text-lg text-white mb-4">
                  {language === 'en'
                    ? 'Interested in a website like this with your name?'
                    : 'Quan tâm đến một website như thế này với tên của bạn?'}
                </p>
                <a
                  href="mailto:mrsonyho@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {language === 'en' ? 'Contact Us' : 'Liên Hệ'}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Legal */}
              <div className="text-center space-y-3">
                <p className="text-sm text-gray-400">
                  © 2025 AI Trading Platform. For educational and informational purposes only.
                </p>
                <p className="text-xs text-gray-500">
                  Success depends on individual focus, determination, and understanding of the crypto industry.
                </p>
                <p className="text-xs text-gray-600 max-w-2xl mx-auto">
                  {language === 'en'
                    ? 'This website and its operators are not financial advisors and do not provide investment advice. All trading involves risk.'
                    : 'Website này và những người vận hành không phải là cố vấn tài chính và không cung cấp lời khuyên đầu tư. Tất cả giao dịch đều có rủi ro.'}
                </p>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
