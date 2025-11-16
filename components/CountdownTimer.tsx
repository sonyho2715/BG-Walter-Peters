'use client';

import { useCountdown } from '@/hooks/useCountdown';
import { Clock, Bell } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/locales';

export default function CountdownTimer() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const { hours, minutes, seconds } = useCountdown();

  // Fixed EST trading times
  const tradingTimes = [
    { label: language === 'en' ? 'Session 1' : 'Phiên 1', time: '1:20 PM EST' },
    { label: language === 'en' ? 'Session 2' : 'Phiên 2', time: '7:20 PM EST' }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700">
      <div className="flex items-start gap-3">
        <Clock className="text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" size={24} />
        <div className="flex-1">
          <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">{t.dashboard.nextSession}</h3>

          <div className="mb-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm text-indigo-900 dark:text-indigo-100">
                {t.dashboard.timeUntil}
              </div>
              <div className="text-lg font-mono font-bold text-indigo-600 dark:text-indigo-400">
                {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
              <Bell size={14} />
              <span>{language === 'en' ? 'Trading Times (EST):' : 'Giờ Giao Dịch (EST):'}</span>
            </div>
            <div className="space-y-1">
              {tradingTimes.map((session, idx) => (
                <div
                  key={idx}
                  className="text-sm flex items-center justify-between px-3 py-1.5 bg-gray-50 dark:bg-gray-700/50 rounded border border-gray-200 dark:border-gray-600"
                >
                  <span className="text-gray-700 dark:text-gray-300">{session.label}:</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    {session.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 italic">
            {language === 'en'
              ? '⏰ Set alarms for 1:15 PM and 7:15 PM EST (5 minutes before each session)'
              : '⏰ Đặt báo thức cho 1:15 PM và 7:15 PM EST (5 phút trước mỗi phiên)'}
          </p>
        </div>
      </div>
    </div>
  );
}
