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
import StickyNav from '@/components/StickyNav';
import QuickReferenceCard from '@/components/QuickReferenceCard';
import ProgressDashboard from '@/components/ProgressDashboard';
import PerformanceCalculator from '@/components/PerformanceCalculator';
import AllStepsView from '@/components/AllStepsView';
import CountdownTimer from '@/components/CountdownTimer';
import CompactCountdown from '@/components/CompactCountdown';
import DarkModeToggle from '@/components/DarkModeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import AlarmSettings from '@/components/AlarmSettings';
import ImportantContacts from '@/components/ImportantContacts';
import ResourcesSection from '@/components/ResourcesSection';
import FAQSection from '@/components/FAQSection';
import GoodToKnowSection from '@/components/GoodToKnowSection';

export default function ClientDashboard() {
  const { language, setLanguage } = useLanguage();
  const [languageSelected, setLanguageSelected] = useState(false);
  const [completedSteps, setCompletedSteps] = useLocalStorage<number[]>('completedSteps', []);
  const [completedItems, setCompletedItems] = useLocalStorage<CompletedItems>('completedItems', {});

  const t = getTranslations(language);
  const tutorials = t.tutorials;

  useEffect(() => {
    // Check if user has already selected a language
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

  // Show language selector if language not yet selected
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

  return (
    <>
      <DisclaimerBanner language={language} />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        {/* Compact Header with Countdown */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 dark:from-indigo-700 dark:to-indigo-800 text-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                  🚀 {t.dashboard.title}
                </h1>
                <div className="hidden md:block">
                  <CompactCountdown />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="block md:hidden">
                  <CompactCountdown />
                </div>
                <AlarmSettings />
                <LanguageToggle />
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </div>

      {/* Hero Section with Main Video */}
      <HeroSection />

      {/* Sticky Navigation */}
      <StickyNav tutorials={tutorials} completedSteps={completedSteps} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Section 1: Getting Started - Quick Info */}
        <div id="section-quick-start" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
            <span className="text-4xl">🚀</span>
            {language === 'en' ? 'Quick Start Guide' : 'Hướng Dẫn Bắt Đầu Nhanh'}
          </h2>

          {/* Countdown Timer */}
          <div className="mb-8">
            <CountdownTimer />
          </div>

          {/* Quick Reference Card */}
          <div className="mb-8">
            <QuickReferenceCard />
          </div>
        </div>

        {/* Section 2: Your Progress */}
        <div id="section-progress" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
            <span className="text-4xl">📈</span>
            {language === 'en' ? 'Track Your Journey' : 'Theo Dõi Hành Trình'}
          </h2>

          {/* Progress Dashboard */}
          <ProgressDashboard
            completedSteps={completedSteps}
            totalSteps={tutorials.length}
            tutorials={tutorials}
          />
        </div>

        {/* Section 3: Earnings Calculator */}
        <div id="section-wealth" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
            <span className="text-4xl">💰</span>
            {language === 'en' ? 'Earnings Calculator' : 'Máy Tính Lợi Nhuận'}
          </h2>

          {/* Unified Calculator */}
          <PerformanceCalculator />
        </div>

        {/* Section 4: Learn & Get Support */}
        <div id="section-support" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
            <span className="text-4xl">🎓</span>
            {language === 'en' ? 'Learn & Get Support' : 'Học Tập & Nhận Hỗ Trợ'}
          </h2>

          {/* Learning Resources & Important Contacts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ResourcesSection />
            <ImportantContacts />
          </div>
        </div>

        {/* Section 5: Complete Onboarding Steps */}
        <div id="section-steps" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
            <span className="text-4xl">✅</span>
            {language === 'en' ? 'Complete Onboarding Steps' : 'Hoàn Thành Các Bước Hướng Dẫn'}
          </h2>

          <AllStepsView
            tutorials={tutorials}
            completedItems={completedItems}
            completedSteps={completedSteps}
            handleItemComplete={handleItemComplete}
            handleStepComplete={handleStepComplete}
            t={t}
          />
        </div>

        {/* Section 6: Important Information */}
        <div id="section-info" className="mb-12 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-3">
            <span className="text-4xl">📋</span>
            {language === 'en' ? 'Important Information' : 'Thông Tin Quan Trọng'}
          </h2>

          {/* Important Reminder */}
          <div className="mb-8 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 md:p-8">
            <div className="flex gap-4">
              <span className="text-2xl">⏰</span>
              <div>
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2 text-lg">{t.dashboard.importantReminder}</h4>
                <p className="text-blue-800 dark:text-blue-200">
                  {t.dashboard.reminderText}
                </p>
              </div>
            </div>
          </div>

          {/* Good to Know */}
          <div className="mb-8">
            <GoodToKnowSection items={t.goodToKnow} title={t.common.goodToKnow} />
          </div>

          {/* FAQs */}
          <div className="mb-8">
            <FAQSection faqs={t.faqs} title={t.common.faqs} />
          </div>

          {/* Comprehensive Legal Disclaimer */}
          <div>
            <ComprehensiveDisclaimer language={language} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-950 text-gray-300 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-indigo-400 mb-2">
            {language === 'en' ? 'Created by Pacific Pulse Growth Lab' : 'Được tạo bởi Pacific Pulse Growth Lab'}
          </p>
          <p className="text-sm mb-4">
            {language === 'en'
              ? 'Interested in a website like this with your name?'
              : 'Quan tâm đến một website như thế này với tên của bạn?'}
          </p>
          <p className="text-sm mb-6">
            {language === 'en' ? 'Contact ' : 'Liên hệ '}
            <a href="mailto:mrsonyho@gmail.com" className="text-indigo-400 hover:text-indigo-300 font-semibold underline">
              mrsonyho@gmail.com
            </a>
            {language === 'en' ? ' today.' : ' ngay hôm nay.'}
          </p>
          <div className="border-t border-gray-700 pt-6 mt-6">
            <p className="text-sm">
              © 2025 AI Trading Platform. For educational and informational purposes only.
            </p>
            <p className="text-xs mt-2 text-gray-500">
              Success depends on individual focus, determination, and understanding of the crypto industry.
            </p>
            <p className="text-xs mt-4 text-gray-600">
              {language === 'en'
                ? 'This website and its operators are not financial advisors and do not provide investment advice. All trading involves risk.'
                : 'Website này và những người vận hành không phải là cố vấn tài chính và không cung cấp lời khuyên đầu tư. Tất cả giao dịch đều có rủi ro.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
