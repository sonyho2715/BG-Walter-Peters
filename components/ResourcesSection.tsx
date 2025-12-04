'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

export default function ResourcesSection() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const officialDocuments = [
    {
      src: '/documents/colorado-incorporation-certificate.png',
      title: language === 'en' ? 'Colorado Incorporation Certificate' : 'Giấy Chứng Nhận Thành Lập Colorado',
      description: language === 'en'
        ? 'BG Wealth Sharing LTD - Colorado Corporation (April 2025)'
        : 'BG Wealth Sharing LTD - Tập Đoàn Colorado (Tháng 4/2025)'
    },
    {
      src: '/documents/bg-sec-ria-license.png',
      title: language === 'en' ? 'SEC RIA License' : 'Giấy Phép SEC RIA',
      description: language === 'en'
        ? 'U.S. Securities and Exchange Commission RIA Permission (Aug 2025)'
        : 'Giấy phép RIA Ủy Ban Chứng Khoán Hoa Kỳ (Tháng 8/2025)'
    },
    {
      src: '/documents/dsj-exchange-sec-registration.png',
      title: language === 'en' ? 'DSJ Exchange SEC Registration' : 'Đăng Ký SEC Sàn DSJ',
      description: language === 'en'
        ? 'DSJ Exchange PTY Ltd - SEC Registered (CIK: 0002076856)'
        : 'DSJ Exchange PTY Ltd - Đăng Ký SEC (CIK: 0002076856)'
    },
    {
      src: '/documents/dsj-exchange-sec-certificate.png',
      title: language === 'en' ? 'DSJ SEC Certificate' : 'Chứng Nhận SEC DSJ',
      description: language === 'en'
        ? 'Official SEC certificate for DSJ Exchange (July 2025)'
        : 'Chứng nhận SEC chính thức cho Sàn DSJ (Tháng 7/2025)'
    },
    {
      src: '/documents/bg-stock-certificate.png',
      title: language === 'en' ? 'BG Stock Certificate' : 'Chứng Nhận Cổ Phiếu BG',
      description: language === 'en'
        ? 'BG Wealth Sharing LTD - 70 Million Shares Stock Certificate'
        : 'BG Wealth Sharing LTD - Chứng Nhận 70 Triệu Cổ Phiếu'
    },
    {
      src: '/documents/investment-partnership-commitment.png',
      title: language === 'en' ? 'Investment Partnership Commitment' : 'Cam Kết Đối Tác Đầu Tư',
      description: language === 'en'
        ? '10-year commitment letter from BG Wealth Sharing LTD'
        : 'Thư cam kết 10 năm từ BG Wealth Sharing LTD'
    },
    {
      src: '/documents/agent-team-bonus-structure.png',
      title: language === 'en' ? 'Agent Team Bonus Structure' : 'Cơ Cấu Thưởng Đội Đại Lý',
      description: language === 'en'
        ? 'Manager bonuses and promotion rewards (LV1-LV12)'
        : 'Thưởng quản lý và phần thưởng thăng cấp (LV1-LV12)'
    },
    {
      src: '/documents/trading-phases-profit-chart.png',
      title: language === 'en' ? 'Trading Phases & Profit Chart' : 'Biểu Đồ Giai Đoạn & Lợi Nhuận',
      description: language === 'en'
        ? 'Unit levels and profit phases breakdown'
        : 'Phân tích cấp đơn vị và giai đoạn lợi nhuận'
    }
  ];

  const resources = [
    {
      title: language === 'en' ? 'BG Wealth Sharing Complete Presentation' : 'Bài Thuyết Trình Đầy Đủ BG Chia Sẻ Tài Sản',
      description: language === 'en'
        ? 'Comprehensive presentation covering all aspects of BG Wealth Sharing including referral bonuses, projection tables, and team building strategy'
        : 'Bài thuyết trình toàn diện bao gồm tất cả khía cạnh của BG Chia Sẻ Tài Sản bao gồm thưởng giới thiệu, bảng dự báo và chiến lược xây dựng team',
      icon: '📊',
      url: '/docs/BG-Presentation-ENG.pdf',
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
      title: language === 'en' ? '⭐ START HERE: Complete BG & DSJ Tutorial' : '⭐ BẮT ĐẦU TẠI ĐÂY: Hướng Dẫn Đầy Đủ BG & DSJ',
      description: language === 'en'
        ? '⚡ IMPORTANT: Watch this first to fully understand the system. Comprehensive guide covering all steps from account creation to trading'
        : '⚡ QUAN TRỌNG: Xem video này trước để hiểu đầy đủ hệ thống. Hướng dẫn toàn diện bao gồm tất cả các bước từ tạo tài khoản đến giao dịch',
      icon: '🎥',
      url: 'https://www.youtube.com/watch?v=_68YSwkVbiE',
      duration: '47 min',
      featured: true
    },
    {
      title: language === 'en' ? 'BG Wealth 2025 USA Annual Meeting' : 'Hội Nghị Thường Niên BG Wealth 2025 USA',
      description: language === 'en'
        ? 'CEO Stephen Beard unveils exciting plans and prizes for 2025'
        : 'CEO Stephen Beard công bố kế hoạch và giải thưởng hấp dẫn cho năm 2025',
      icon: '🎯',
      url: 'https://www.youtube.com/watch?v=dhCKfcre90k',
      duration: '15 min'
    },
    {
      title: language === 'en' ? 'BG Wealth Sharing Annual Meeting Las Vegas' : 'Hội Nghị Thường Niên BG Wealth Sharing Las Vegas',
      description: language === 'en'
        ? 'Highlights from the BG Wealth Sharing annual meeting in Las Vegas'
        : 'Những điểm nổi bật từ hội nghị thường niên BG Wealth Sharing tại Las Vegas',
      icon: '🎰',
      url: 'https://www.youtube.com/watch?v=XuBZ7iimYT4',
      duration: '12 min'
    },
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
    <>
      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-4xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              width={1200}
              height={800}
              className="object-contain max-h-[85vh] w-auto rounded-lg"
            />
            <p className="text-center text-white mt-4 font-medium">{selectedImage.title}</p>
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">📖</span>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {language === 'en' ? 'Learning Resources' : 'Tài Liệu Học Tập'}
          </h3>
        </div>

        {/* Official Documents Gallery */}
        <div className="mb-8">
          <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
            <span>🏛️</span> {language === 'en' ? 'Official Documents & Certificates' : 'Tài Liệu & Chứng Nhận Chính Thức'}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {language === 'en'
              ? 'Click any document to view full size'
              : 'Nhấp vào bất kỳ tài liệu nào để xem kích thước đầy đủ'}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {officialDocuments.map((doc, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage({ src: doc.src, title: doc.title })}
                className="group relative bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 hover:border-indigo-300 dark:hover:border-indigo-600"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={doc.src}
                    alt={doc.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-2">
                  <p className="text-xs font-medium text-gray-900 dark:text-gray-100 truncate">
                    {doc.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {doc.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
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
    </>
  );
}
