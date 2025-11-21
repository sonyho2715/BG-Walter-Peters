'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import VideoErrorBoundary from './VideoErrorBoundary';

export default function HeroSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'What Makes BG Wealth Sharing So Trusted?',
      subtitle: 'Watch this comprehensive guide to understand why thousands trust BG Wealth Sharing',
      successRate: '99.6% Success Rate',
      doubleTime: 'Double in 57 Days',
      steps: 'Comprehensive Steps',
      dailyReturns: 'Daily Returns',
      signals: 'Trading Signals',
      videoUrl: 'https://www.youtube.com/embed/JpGzpr9AjXA'
    },
    vi: {
      title: 'Hướng Dẫn Đầy Đủ BG Chia Sẻ Tài Sản',
      subtitle: 'Xem hướng dẫn toàn diện này để bắt đầu với BG Chia Sẻ Tài Sản và Sàn Giao Dịch DSJ',
      successRate: 'Tỷ Lệ Thành Công 99.6%',
      doubleTime: 'Tăng Gấp Đôi Trong 57 Ngày',
      steps: 'Các Bước Toàn Diện',
      dailyReturns: 'Lợi Nhuận Hàng Ngày',
      signals: 'Tín Hiệu Giao Dịch',
      videoUrl: 'https://www.youtube.com/embed/V44Vatup9mE'
    }
  };

  const t = content[language];

  return (
    <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 dark:from-indigo-800 dark:via-purple-800 dark:to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-indigo-100 text-lg md:text-xl max-w-3xl mx-auto">
            {t.subtitle}
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white">
              <span className="text-xl">✅</span>
              <span className="font-semibold">{t.successRate}</span>
            </span>
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white">
              <span className="text-xl">💰</span>
              <span className="font-semibold">{t.doubleTime}</span>
            </span>
          </div>
        </div>

        {/* Main Tutorial Video */}
        <div className="max-w-4xl mx-auto">
          <VideoErrorBoundary
            fallbackTitle={language === 'en' ? 'Video Failed to Load' : 'Video Không Tải Được'}
            fallbackMessage={
              language === 'en'
                ? 'Unable to load the tutorial video. Please check your internet connection and try again.'
                : 'Không thể tải video hướng dẫn. Vui lòng kiểm tra kết nối internet và thử lại.'
            }
          >
            <div className="relative w-full rounded-xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={t.videoUrl}
                title="BG Wealth Sharing Complete Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </VideoErrorBoundary>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-white">10</div>
            <div className="text-indigo-100 text-sm mt-1">{t.steps}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-white">1.3-1.8%</div>
            <div className="text-indigo-100 text-sm mt-1">{t.dailyReturns}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-white">2/{language === 'en' ? 'day' : 'ngày'}</div>
            <div className="text-indigo-100 text-sm mt-1">{t.signals}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
