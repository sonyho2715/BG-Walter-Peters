'use client';

interface ComprehensiveDisclaimerProps {
  language: 'en' | 'vi';
}

export default function ComprehensiveDisclaimer({ language }: ComprehensiveDisclaimerProps) {
  const content = {
    en: {
      title: 'Legal Disclaimer & Risk Warning',
      sections: [
        {
          heading: 'Educational Purpose Only',
          text: 'This website and all materials contained herein are provided solely for educational and informational purposes. Nothing on this website constitutes professional financial advice, investment advice, trading advice, or any other form of advice.'
        },
        {
          heading: 'No Financial Advice',
          text: 'The website owner, operators, and content creators are NOT financial advisors, licensed brokers, or registered investment advisors. We do not provide personalized investment advice or recommendations. All content is general information only.'
        },
        {
          heading: 'Investment Risks',
          text: 'Cryptocurrency and trading activities involve substantial risk of loss. You may lose some or all of your invested capital. Only invest money you can afford to lose. Past performance does not guarantee future results. The high degree of leverage in trading can work against you as well as for you.'
        },
        {
          heading: 'No Guarantees',
          text: 'While success rates and projections may be mentioned, these are not guarantees of future performance. Individual results will vary based on your knowledge, experience, dedication, and market conditions. No specific results are promised or guaranteed.'
        },
        {
          heading: 'Independent Verification',
          text: 'You are responsible for conducting your own due diligence and consulting with qualified professionals (financial advisors, tax advisors, legal counsel) before making any investment or trading decisions. Do not rely solely on information from this website.'
        },
        {
          heading: 'Third-Party Platforms',
          text: 'References to third-party platforms, exchanges, or services are for informational purposes only. We are not affiliated with, endorsed by, or responsible for any third-party platforms. Use of such platforms is at your own risk.'
        },
        {
          heading: 'Regulatory Compliance',
          text: 'It is your responsibility to ensure compliance with all applicable laws and regulations in your jurisdiction. Cryptocurrency regulations vary by country. Some jurisdictions prohibit or restrict cryptocurrency trading.'
        },
        {
          heading: 'Limitation of Liability',
          text: 'The website owner, operators, and content creators shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website or any investment decisions you make. You use this website entirely at your own risk.'
        },
        {
          heading: 'No Endorsement',
          text: 'Mention of specific strategies, platforms, or opportunities does not constitute an endorsement or recommendation. We receive no compensation for any references made on this website unless explicitly disclosed.'
        },
        {
          heading: 'User Responsibility',
          text: 'By using this website, you acknowledge that you are solely responsible for your investment decisions and outcomes. You agree to hold harmless the website owner, operators, and content creators from any losses or damages you may incur.'
        }
      ],
      footer: 'Last Updated: October 2025 | By using this website, you acknowledge that you have read, understood, and agreed to this disclaimer.'
    },
    vi: {
      title: 'Tuyên Bố Pháp Lý & Cảnh Báo Rủi Ro',
      sections: [
        {
          heading: 'Chỉ Phục Vụ Mục Đích Giáo Dục',
          text: 'Website này và tất cả tài liệu trong đó chỉ được cung cấp cho mục đích giáo dục và thông tin. Không có nội dung nào trên website này cấu thành lời khuyên tài chính chuyên nghiệp, lời khuyên đầu tư, lời khuyên giao dịch hoặc bất kỳ hình thức lời khuyên nào khác.'
        },
        {
          heading: 'Không Phải Lời Khuyên Tài Chính',
          text: 'Chủ sở hữu website, người vận hành và người tạo nội dung KHÔNG phải là cố vấn tài chính, nhà môi giới được cấp phép hoặc cố vấn đầu tư đã đăng ký. Chúng tôi không cung cấp lời khuyên đầu tư hoặc khuyến nghị cá nhân hóa. Mọi nội dung chỉ là thông tin chung.'
        },
        {
          heading: 'Rủi Ro Đầu Tư',
          text: 'Hoạt động tiền điện tử và giao dịch liên quan đến rủi ro thua lỗ đáng kể. Bạn có thể mất một phần hoặc toàn bộ vốn đầu tư. Chỉ đầu tư số tiền bạn có thể chấp nhận mất. Hiệu suất trong quá khứ không đảm bảo kết quả trong tương lai. Mức độ đòn bẩy cao trong giao dịch có thể gây bất lợi cũng như có lợi cho bạn.'
        },
        {
          heading: 'Không Có Đảm Bảo',
          text: 'Mặc dù có thể đề cập đến tỷ lệ thành công và dự báo, đây không phải là đảm bảo về hiệu suất trong tương lai. Kết quả cá nhân sẽ khác nhau dựa trên kiến thức, kinh nghiệm, sự tận tâm và điều kiện thị trường của bạn. Không có kết quả cụ thể nào được hứa hẹn hoặc đảm bảo.'
        },
        {
          heading: 'Xác Minh Độc Lập',
          text: 'Bạn có trách nhiệm tiến hành thẩm định riêng và tham khảo ý kiến các chuyên gia có trình độ (cố vấn tài chính, cố vấn thuế, cố vấn pháp lý) trước khi đưa ra bất kỳ quyết định đầu tư hoặc giao dịch nào. Không chỉ dựa vào thông tin từ website này.'
        },
        {
          heading: 'Nền Tảng Bên Thứ Ba',
          text: 'Tham chiếu đến các nền tảng, sàn giao dịch hoặc dịch vụ của bên thứ ba chỉ cho mục đích thông tin. Chúng tôi không liên kết, được xác nhận bởi hoặc chịu trách nhiệm cho bất kỳ nền tảng bên thứ ba nào. Sử dụng các nền tảng đó là rủi ro của riêng bạn.'
        },
        {
          heading: 'Tuân Thủ Quy Định',
          text: 'Bạn có trách nhiệm đảm bảo tuân thủ tất cả các luật và quy định áp dụng trong khu vực pháp lý của bạn. Quy định về tiền điện tử khác nhau tùy theo quốc gia. Một số khu vực pháp lý cấm hoặc hạn chế giao dịch tiền điện tử.'
        },
        {
          heading: 'Giới Hạn Trách Nhiệm Pháp Lý',
          text: 'Chủ sở hữu website, người vận hành và người tạo nội dung sẽ không chịu trách nhiệm về bất kỳ thiệt hại trực tiếp, gián tiếp, ngẫu nhiên, hậu quả hoặc tr징phạt nào phát sinh từ việc sử dụng website này hoặc bất kỳ quyết định đầu tư nào bạn đưa ra. Bạn sử dụng website này hoàn toàn tự chịu rủi ro.'
        },
        {
          heading: 'Không Có Xác Nhận',
          text: 'Đề cập đến các chiến lược, nền tảng hoặc cơ hội cụ thể không cấu thành sự xác nhận hoặc khuyến nghị. Chúng tôi không nhận bất kỳ khoản bồi thường nào cho bất kỳ tham chiếu nào được thực hiện trên website này trừ khi được tiết lộ rõ ràng.'
        },
        {
          heading: 'Trách Nhiệm Người Dùng',
          text: 'Bằng cách sử dụng website này, bạn xác nhận rằng bạn hoàn toàn chịu trách nhiệm về các quyết định và kết quả đầu tư của mình. Bạn đồng ý miễn trừ trách nhiệm cho chủ sở hữu website, người vận hành và người tạo nội dung khỏi bất kỳ thua lỗ hoặc thiệt hại nào bạn có thể gánh chịu.'
        }
      ],
      footer: 'Cập Nhật Lần Cuối: Tháng 10 năm 2025 | Bằng cách sử dụng website này, bạn xác nhận rằng bạn đã đọc, hiểu và đồng ý với tuyên bố miễn trừ trách nhiệm này.'
    }
  };

  const t = content[language];

  return (
    <div className="bg-red-50 dark:bg-red-900/10 border-2 border-red-200 dark:border-red-800 rounded-xl p-6 md:p-8 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">⚖️</span>
        <h3 className="text-2xl font-bold text-red-900 dark:text-red-100">{t.title}</h3>
      </div>

      <div className="space-y-6">
        {t.sections.map((section, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-red-200 dark:border-red-700">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
              <span className="text-red-600 dark:text-red-400">▸</span>
              {section.heading}
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {section.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg p-4">
        <p className="text-xs text-red-800 dark:text-red-200 text-center italic">
          {t.footer}
        </p>
      </div>

      <div className="mt-6 bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded-lg p-4">
        <div className="flex gap-3">
          <span className="text-2xl flex-shrink-0">⚠️</span>
          <div>
            <p className="font-bold text-yellow-900 dark:text-yellow-100 mb-2 text-sm">
              {language === 'en' ? 'IMPORTANT NOTICE' : 'THÔNG BÁO QUAN TRỌNG'}
            </p>
            <p className="text-xs text-yellow-800 dark:text-yellow-200">
              {language === 'en'
                ? 'Cryptocurrency trading carries a high level of risk and may not be suitable for all investors. Before deciding to trade cryptocurrency, you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment. Therefore, you should not invest money that you cannot afford to lose.'
                : 'Giao dịch tiền điện tử mang mức độ rủi ro cao và có thể không phù hợp với tất cả các nhà đầu tư. Trước khi quyết định giao dịch tiền điện tử, bạn nên xem xét kỹ lưỡng mục tiêu đầu tư, mức độ kinh nghiệm và khả năng chấp nhận rủi ro của mình. Khả năng thua lỗ một phần hoặc toàn bộ khoản đầu tư ban đầu có thể xảy ra. Do đó, bạn không nên đầu tư số tiền mà bạn không thể chấp nhận mất.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
