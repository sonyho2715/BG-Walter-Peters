'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function ResourcesSection() {
  const { language } = useLanguage();

  const resources = [
    {
      title: language === 'en' ? 'BG Wealth Sharing Complete Presentation' : 'Bài Thuyết Trình Đầy Đủ BG Chia Sẻ Tài Sản',
      description: language === 'en'
        ? 'Comprehensive 33-page presentation covering all aspects of BG Wealth Sharing including referral bonuses, projection tables, and team building strategy'
        : 'Bài thuyết trình 33 trang toàn diện bao gồm tất cả khía cạnh của BG Chia Sẻ Tài Sản bao gồm thưởng giới thiệu, bảng dự báo và chiến lược xây dựng team',
      icon: '📊',
      url: '/docs/BG-PPT11.pdf',
      color: 'emerald',
      topics: language === 'en'
        ? ['Referral Bonuses', '30-Day Projections', 'Team Building', 'Bonus Signals']
        : ['Thưởng Giới Thiệu', 'Dự Báo 30 Ngày', 'Xây Dựng Team', 'Tín Hiệu Thưởng']
    },
    {
      title: language === 'en' ? 'Understanding BG Wealth Sharing Principles' : 'Hiểu Các Nguyên Tắc BG Chia Sẻ Tài Sản',
      description: language === 'en'
        ? 'Core principles, dividend claiming process, and enhanced communication benefits'
        : 'Các nguyên tắc cốt lõi, quy trình claim cổ tức và lợi ích giao tiếp nâng cao',
      icon: '📚',
      url: '/docs/Understanding BG Wealth Sharing Principles.pdf',
      color: 'indigo',
      topics: language === 'en'
        ? ['Core Principles', 'Dividend Claiming', 'Communication']
        : ['Nguyên Tắc Cốt Lõi', 'Claim Cổ Tức', 'Giao Tiếp']
    }
  ];

  const videos = [
    {
      title: language === 'en' ? 'How to Get DSJ Referral Link' : 'Cách Lấy Link Giới Thiệu DSJ',
      description: language === 'en'
        ? 'Learn how to obtain your referral link to invite new members'
        : 'Học cách lấy link giới thiệu để mời thành viên mới',
      icon: '🔗',
      url: 'https://www.youtube.com/watch?v=Mp4QjtqXDLA',
      duration: '2 min'
    },
    {
      title: language === 'en' ? 'Check Account Before Withdrawal' : 'Kiểm Tra Tài Khoản Trước Khi Rút',
      description: language === 'en'
        ? 'Avoid the 20% penalty by checking if your account has doubled (2x)'
        : 'Tránh phạt 20% bằng cách kiểm tra tài khoản đã nhân đôi (2x) chưa',
      icon: '⚠️',
      url: 'https://www.youtube.com/watch?v=i796UUCaCGY',
      duration: '2 min'
    },
    {
      title: language === 'en' ? 'How to Follow Trading Signal' : 'Cách Làm Theo Tín Hiệu Giao Dịch',
      description: language === 'en'
        ? 'Execute daily trading signals correctly for consistent profits'
        : 'Thực hiện tín hiệu giao dịch hàng ngày đúng cách để có lợi nhuận ổn định',
      icon: '📊',
      url: 'https://www.youtube.com/watch?v=yF9BGqn-JO4',
      duration: '3 min'
    },
    {
      title: language === 'en' ? 'How to Follow Bonus Signal' : 'Cách Làm Theo Tín Hiệu Thưởng',
      description: language === 'en'
        ? 'Use your earned bonus signals to maximize returns'
        : 'Sử dụng tín hiệu thưởng đã kiếm được để tối đa hóa lợi nhuận',
      icon: '🎁',
      url: 'https://www.youtube.com/watch?v=nbittfIr6Yk',
      duration: '3 min'
    },
    {
      title: language === 'en' ? 'How to Withdraw from DSJ' : 'Cách Rút Tiền Từ DSJ',
      description: language === 'en'
        ? 'Complete guide to withdrawing your profits safely'
        : 'Hướng dẫn đầy đủ để rút lợi nhuận an toàn',
      icon: '💰',
      url: 'https://www.youtube.com/watch?v=dA42P1SNqao',
      duration: '4 min'
    },
    {
      title: language === 'en' ? 'Complete BG & DSJ Tutorial' : 'Hướng Dẫn Đầy Đủ BG & DSJ',
      description: language === 'en'
        ? 'Comprehensive guide covering all steps from account creation to trading'
        : 'Hướng dẫn toàn diện bao gồm tất cả các bước từ tạo tài khoản đến giao dịch',
      icon: '🎥',
      url: 'https://www.youtube.com/watch?v=_68YSwkVbiE',
      duration: '47 min'
    },
    {
      title: language === 'en' ? 'BonChat Setup Guide' : 'Hướng Dẫn Thiết Lập BonChat',
      description: language === 'en'
        ? 'Step-by-step guide to setting up BonChat and connecting with the community'
        : 'Hướng dẫn từng bước để thiết lập BonChat và kết nối với cộng đồng',
      icon: '💬',
      url: 'https://www.youtube.com/watch?v=YUu-bGnu5SI',
      duration: '8 min'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; border: string; text: string; hover: string } } = {
      indigo: {
        bg: 'bg-indigo-50 dark:bg-indigo-900/20',
        border: 'border-indigo-200 dark:border-indigo-700',
        text: 'text-indigo-900 dark:text-indigo-100',
        hover: 'hover:bg-indigo-100 dark:hover:bg-indigo-900/30'
      },
      emerald: {
        bg: 'bg-emerald-50 dark:bg-emerald-900/20',
        border: 'border-emerald-200 dark:border-emerald-700',
        text: 'text-emerald-900 dark:text-emerald-100',
        hover: 'hover:bg-emerald-100 dark:hover:bg-emerald-900/30'
      }
    };
    return colors[color];
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">📖</span>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {language === 'en' ? 'Learning Resources' : 'Tài Liệu Học Tập'}
        </h3>
      </div>

      {/* PDF Documents */}
      <div className="mb-8">
        <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <span>📄</span> {language === 'en' ? 'Reference Documents' : 'Tài Liệu Tham Khảo'}
        </h4>
        <div className="grid grid-cols-1 gap-4">
          {resources.map((resource, idx) => {
            const colors = getColorClasses(resource.color);
            return (
              <a
                key={idx}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${colors.bg} border ${colors.border} ${colors.hover} rounded-lg p-5 transition-all duration-200 hover:shadow-md`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{resource.icon}</span>
                  <div className="flex-1">
                    <h5 className={`font-bold ${colors.text} mb-2`}>
                      {resource.title}
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {resource.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {resource.topics.map((topic, topicIdx) => (
                        <span
                          key={topicIdx}
                          className="text-xs bg-white dark:bg-gray-700 px-2 py-1 rounded text-gray-700 dark:text-gray-300"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      <span>{language === 'en' ? 'Download PDF' : 'Tải PDF'}</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Video Tutorials */}
      <div>
        <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <span>🎬</span> {language === 'en' ? 'Video Tutorials' : 'Video Hướng Dẫn'}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {videos.map((video, idx) => (
            <a
              key={idx}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900/70 rounded-lg p-4 transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{video.icon}</span>
                <div className="flex-1">
                  <h5 className="font-bold text-gray-900 dark:text-gray-100 mb-1">
                    {video.title}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-2 py-1 rounded">
                      ⏱️ {video.duration}
                    </span>
                    <span className="text-sm font-medium text-red-600 dark:text-red-400">
                      {language === 'en' ? 'Watch on YouTube' : 'Xem trên YouTube'} →
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* BonChat Download */}
      <div className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700 rounded-lg p-5">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💬</span>
          <div className="flex-1">
            <h5 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
              {language === 'en' ? 'Download BonChat App' : 'Tải Ứng Dụng BonChat'}
            </h5>
            <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
              {language === 'en'
                ? 'Essential for receiving daily trading codes and community support'
                : 'Cần thiết để nhận mã giao dịch hàng ngày và hỗ trợ cộng đồng'}
            </p>
            <a
              href="https://www.bonchat.live/?id=d333666"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              <span>{language === 'en' ? 'Download BonChat' : 'Tải BonChat'}</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
