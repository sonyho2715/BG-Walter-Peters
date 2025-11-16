'use client';

import { useState, useEffect } from 'react';

interface LanguageSelectorProps {
  onLanguageSelected: (lang: 'en' | 'vi') => void;
}

export default function LanguageSelector({ onLanguageSelected }: LanguageSelectorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'vi' | null>(null);

  useEffect(() => {
    // Check if language was already selected
    const savedLang = localStorage.getItem('bg_initial_language');
    if (savedLang === 'en' || savedLang === 'vi') {
      onLanguageSelected(savedLang);
    }
  }, [onLanguageSelected]);

  const handleLanguageSelect = (lang: 'en' | 'vi') => {
    setSelectedLanguage(lang);
    localStorage.setItem('bg_initial_language', lang);
    localStorage.setItem('language', lang); // Also set the main language preference

    // Add slight delay for visual feedback
    setTimeout(() => {
      onLanguageSelected(lang);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Logo/Title Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full p-6 mb-6">
            <span className="text-6xl">🚀</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            BG Wealth Sharing
          </h1>
          <p className="text-xl text-indigo-200">
            Select Your Language / Chọn Ngôn Ngữ
          </p>
        </div>

        {/* Language Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* English Option */}
          <button
            onClick={() => handleLanguageSelect('en')}
            className={`group relative bg-white/95 hover:bg-white rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
              selectedLanguage === 'en' ? 'ring-4 ring-green-500 scale-105' : ''
            }`}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">🇺🇸</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">English</h2>
              <p className="text-gray-600 mb-4">
                Access the platform in English
              </p>
              <div className="flex flex-col gap-2 text-sm text-gray-500">
                <div className="flex items-center justify-center gap-2">
                  <span>✓</span>
                  <span>Comprehensive Tutorials</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>✓</span>
                  <span>Video Guides</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>✓</span>
                  <span>Progress Tracking</span>
                </div>
              </div>
            </div>

            {selectedLanguage === 'en' && (
              <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </button>

          {/* Vietnamese Option */}
          <button
            onClick={() => handleLanguageSelect('vi')}
            className={`group relative bg-white/95 hover:bg-white rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
              selectedLanguage === 'vi' ? 'ring-4 ring-green-500 scale-105' : ''
            }`}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">🇻🇳</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Tiếng Việt</h2>
              <p className="text-gray-600 mb-4">
                Truy cập nền tảng bằng tiếng Việt
              </p>
              <div className="flex flex-col gap-2 text-sm text-gray-500">
                <div className="flex items-center justify-center gap-2">
                  <span>✓</span>
                  <span>Hướng Dẫn Chi Tiết</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>✓</span>
                  <span>Video Hướng Dẫn</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>✓</span>
                  <span>Theo Dõi Tiến Độ</span>
                </div>
              </div>
            </div>

            {selectedLanguage === 'vi' && (
              <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </button>
        </div>

        {/* Footer Info */}
        <div className="text-center text-indigo-200 text-sm">
          <p>
            Welcome to BG Wealth Sharing Onboarding Platform
          </p>
          <p className="mt-2">
            Chào mừng đến với Nền tảng Hướng dẫn BG Wealth Sharing
          </p>
        </div>
      </div>
    </div>
  );
}
