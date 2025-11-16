'use client';

import { useNotifications } from '@/hooks/useNotifications';
import { Bell, BellOff } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/locales';

export default function AlarmSettings() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const { permission, alarmsEnabled, toggleAlarms, requestPermission } = useNotifications();

  const handleToggle = async () => {
    if (permission === 'default') {
      await requestPermission();
    } else {
      toggleAlarms();
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`p-3 rounded-lg shadow-md hover:shadow-lg transition-all border ${
        alarmsEnabled
          ? 'bg-green-500 dark:bg-green-600 border-green-600 dark:border-green-700 text-white'
          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
      }`}
      title={alarmsEnabled ? (language === 'vi' ? 'Báo thức đang bật' : 'Alarms enabled') : (language === 'vi' ? 'Bật báo thức' : 'Enable alarms')}
    >
      <div className="flex items-center gap-2">
        {alarmsEnabled ? (
          <Bell className="text-white" size={20} />
        ) : (
          <BellOff className="text-gray-600 dark:text-gray-400" size={20} />
        )}
        <span className={`text-sm font-semibold hidden sm:inline ${alarmsEnabled ? 'text-white' : 'text-gray-700 dark:text-gray-200'}`}>
          {alarmsEnabled ? (language === 'vi' ? 'Báo thức' : 'Alarms') : (language === 'vi' ? 'Báo thức' : 'Alarms')}
        </span>
      </div>
    </button>
  );
}
