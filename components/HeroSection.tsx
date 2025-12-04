'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import VideoErrorBoundary from './VideoErrorBoundary';
import { TrendingUp, Clock, Zap, Play } from 'lucide-react';

export default function HeroSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'What Makes BG Wealth Sharing So Trusted?',
      subtitle: 'Watch this comprehensive guide to understand why thousands trust BG Wealth Sharing',
      successRate: '99.6% Success Rate',
      doubleTime: 'Double in 57 days',
      steps: 'Comprehensive Steps',
      dailyReturns: 'Daily Returns',
      signals: 'Trading Signals',
      videoUrl: 'https://www.youtube.com/embed/JpGzpr9AjXA',
      watchNow: 'Watch Tutorial'
    },
    vi: {
      title: 'Hướng Dẫn Đầy Đủ BG Chia Sẻ Tài Sản',
      subtitle: 'Xem hướng dẫn toàn diện này để bắt đầu với BG Chia Sẻ Tài Sản và Sàn Giao Dịch DSJ',
      successRate: 'Tỷ Lệ Thành Công 99.6%',
      doubleTime: 'Tăng Gấp Đôi Trong 57 Ngày',
      steps: 'Các Bước Toàn Diện',
      dailyReturns: 'Lợi Nhuận Hàng Ngày',
      signals: 'Tín Hiệu Giao Dịch',
      videoUrl: 'https://www.youtube.com/embed/bVgYBNDY0gA',
      watchNow: 'Xem Hướng Dẫn'
    }
  };

  const t = content[language];

  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-800 dark:via-purple-900 dark:to-indigo-950" />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
            <Play className="w-4 h-4" />
            {t.watchNow}
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.title}
          </h2>
          <p className="text-indigo-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          {/* Stats Pills */}
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/20">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="font-semibold">{t.successRate}</span>
            </span>
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/20">
              <Clock className="w-4 h-4 text-amber-400" />
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
            <div className="relative group">
              {/* Video Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={t.videoUrl}
                  title="BG Wealth Sharing Complete Tutorial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </VideoErrorBoundary>
        </div>

        {/* Quick Stats Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 text-center border border-white/20 hover:bg-white/15 transition-colors duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-3">
              <span className="text-2xl">📚</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">10</div>
            <div className="text-indigo-200 text-sm font-medium">{t.steps}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 text-center border border-white/20 hover:bg-white/15 transition-colors duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-3">
              <span className="text-2xl">💰</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">1.3-1.8%</div>
            <div className="text-indigo-200 text-sm font-medium">{t.dailyReturns}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 text-center border border-white/20 hover:bg-white/15 transition-colors duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-3">
              <Zap className="w-6 h-6 text-amber-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">2/{language === 'en' ? 'day' : 'ngày'}</div>
            <div className="text-indigo-200 text-sm font-medium">{t.signals}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
