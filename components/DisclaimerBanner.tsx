'use client';

import { useState } from 'react';

interface DisclaimerBannerProps {
  language: 'en' | 'vi';
}

export default function DisclaimerBanner({ language }: DisclaimerBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const content = {
    en: {
      title: 'Important Legal Disclaimer',
      text: 'This website is for educational and informational purposes only. The content does not constitute financial, investment, legal, or tax advice. All trading involves risk. Past performance does not guarantee future results. Please consult with qualified professionals before making any investment decisions.',
      button: 'I Understand'
    },
    vi: {
      title: 'Tuyên Bố Pháp Lý Quan Trọng',
      text: 'Website này chỉ phục vụ mục đích giáo dục và cung cấp thông tin. Nội dung không cấu thành lời khuyên tài chính, đầu tư, pháp lý hoặc thuế. Mọi giao dịch đều có rủi ro. Hiệu suất trong quá khứ không đảm bảo kết quả trong tương lai. Vui lòng tham khảo ý kiến chuyên gia có trình độ trước khi đưa ra bất kỳ quyết định đầu tư nào.',
      button: 'Tôi Hiểu'
    }
  };

  const t = content[language];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-yellow-50 dark:bg-yellow-900/90 border-t-4 border-yellow-400 dark:border-yellow-600 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <span className="text-3xl">⚠️</span>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">
              {t.title}
            </h4>
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              {t.text}
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
          >
            {t.button}
          </button>
        </div>
      </div>
    </div>
  );
}
