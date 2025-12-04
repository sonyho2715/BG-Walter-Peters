'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PasswordProtectionProps {
  children: React.ReactNode;
}

export default function PasswordProtection({ children }: PasswordProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useLanguage();

  // Check if already authenticated on mount
  useEffect(() => {
    const authStatus = sessionStorage.getItem('bg_auth');
    if (authStatus === 'authenticated') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Password: Wealth2025
    if (password === 'Wealth2025') {
      setIsAuthenticated(true);
      sessionStorage.setItem('bg_auth', 'authenticated');
      setError('');
    } else {
      setError(language === 'en' ? 'Incorrect password. Please try again.' : 'Mật khẩu không đúng. Vui lòng thử lại.');
      setPassword('');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🔒</div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {language === 'en' ? 'BG Wealth Sharing' : 'BG Chia Sẻ Tài Sản'}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {language === 'en'
                ? 'Enter password to access dashboard'
                : 'Nhập mật khẩu để truy cập bảng điều khiển'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {language === 'en' ? 'Password' : 'Mật khẩu'}
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                placeholder={language === 'en' ? 'Enter password' : 'Nhập mật khẩu'}
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-2">
                  <span>⚠️</span> {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              {language === 'en' ? 'Access Dashboard' : 'Truy Cập Bảng Điều Khiển'}
            </button>
          </form>

          <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
            <div className="flex gap-2 items-start">
              <span className="text-lg flex-shrink-0">ℹ️</span>
              <p className="text-xs text-yellow-800 dark:text-yellow-200">
                {language === 'en'
                  ? 'If you don\'t have the password, please contact your referrer or BG support team.'
                  : 'Nếu bạn không có mật khẩu, vui lòng liên hệ người giới thiệu hoặc nhóm hỗ trợ BG.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
