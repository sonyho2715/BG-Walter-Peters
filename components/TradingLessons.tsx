'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  TrendingUp, AlertTriangle, Target, Cpu, Footprints,
  XCircle, Landmark, ChevronRight, CheckCircle, BookOpen
} from 'lucide-react';

interface Lesson {
  id: string;
  icon: React.ReactNode;
  title: { en: string; vi: string };
  description: { en: string; vi: string };
  content: { en: React.ReactNode; vi: React.ReactNode };
}

export default function TradingLessons() {
  const { language } = useLanguage();
  const [activeLesson, setActiveLesson] = useState('what-is-trading');

  const lessons: Lesson[] = [
    {
      id: 'what-is-trading',
      icon: <TrendingUp className="w-5 h-5" />,
      title: { en: 'What is Trading?', vi: 'Giao Dịch Là Gì?' },
      description: { en: 'Learn the fundamentals', vi: 'Tìm hiểu cơ bản' },
      content: {
        en: (
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Trading is the act of buying and selling financial instruments like stocks, currencies, or cryptocurrencies with the goal of making a profit. Unlike long-term investing, trading typically involves shorter time frames and more frequent transactions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-3 sm:p-4">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1 sm:mb-2 text-sm sm:text-base">Day Trading</h4>
                <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-300">Buying and selling within the same day. Positions are not held overnight.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-3 sm:p-4">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-1 sm:mb-2 text-sm sm:text-base">Swing Trading</h4>
                <p className="text-xs sm:text-sm text-green-700 dark:text-green-300">Holding positions for days to weeks, capturing medium-term price movements.</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-3 sm:p-4">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-1 sm:mb-2 text-sm sm:text-base">Position Trading</h4>
                <p className="text-xs sm:text-sm text-purple-700 dark:text-purple-300">Long-term approach, holding for months based on fundamental analysis.</p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-3 sm:p-4">
                <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-1 sm:mb-2 text-sm sm:text-base">AI Trading</h4>
                <p className="text-xs sm:text-sm text-amber-700 dark:text-amber-300">Using algorithms and AI to analyze markets and execute trades automatically.</p>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-3 sm:p-4">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Key Concepts</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> <span><strong>Market Orders:</strong> Execute immediately at current price</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> <span><strong>Limit Orders:</strong> Execute only at your specified price or better</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> <span><strong>Stop Loss:</strong> Automatically sells if price drops to protect from losses</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> <span><strong>Take Profit:</strong> Automatically sells when target profit is reached</span></li>
              </ul>
            </div>
          </div>
        ),
        vi: (
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Giao dịch là hành động mua và bán các công cụ tài chính như cổ phiếu, tiền tệ hoặc tiền điện tử với mục tiêu kiếm lợi nhuận. Không giống như đầu tư dài hạn, giao dịch thường liên quan đến khung thời gian ngắn hơn và các giao dịch thường xuyên hơn.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-3 sm:p-4">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1 sm:mb-2 text-sm sm:text-base">Giao Dịch Trong Ngày</h4>
                <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-300">Mua và bán trong cùng một ngày. Không giữ vị thế qua đêm.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-3 sm:p-4">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-1 sm:mb-2 text-sm sm:text-base">Giao Dịch Swing</h4>
                <p className="text-xs sm:text-sm text-green-700 dark:text-green-300">Giữ vị thế từ vài ngày đến vài tuần, nắm bắt biến động giá trung hạn.</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-3 sm:p-4">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-1 sm:mb-2 text-sm sm:text-base">Giao Dịch Vị Thế</h4>
                <p className="text-xs sm:text-sm text-purple-700 dark:text-purple-300">Phương pháp dài hạn, giữ trong nhiều tháng dựa trên phân tích cơ bản.</p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-3 sm:p-4">
                <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-1 sm:mb-2 text-sm sm:text-base">Giao Dịch AI</h4>
                <p className="text-xs sm:text-sm text-amber-700 dark:text-amber-300">Sử dụng thuật toán và AI để phân tích thị trường và thực hiện giao dịch tự động.</p>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-3 sm:p-4">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Khái Niệm Chính</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> <span><strong>Lệnh Thị Trường:</strong> Thực hiện ngay lập tức với giá hiện tại</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> <span><strong>Lệnh Giới Hạn:</strong> Chỉ thực hiện ở mức giá bạn chỉ định hoặc tốt hơn</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> <span><strong>Cắt Lỗ:</strong> Tự động bán nếu giá giảm để bảo vệ khỏi thua lỗ</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> <span><strong>Chốt Lời:</strong> Tự động bán khi đạt mục tiêu lợi nhuận</span></li>
              </ul>
            </div>
          </div>
        )
      }
    },
    {
      id: 'understanding-risk',
      icon: <AlertTriangle className="w-5 h-5" />,
      title: { en: 'Understanding Risk', vi: 'Hiểu Về Rủi Ro' },
      description: { en: 'Manage your exposure', vi: 'Quản lý rủi ro' },
      content: {
        en: (
          <div className="space-y-6">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
              <p className="text-red-800 dark:text-red-200 font-medium">
                All trading involves risk. You can lose some or all of your invested capital. Never trade with money you cannot afford to lose.
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Risk management is the most important skill in trading. Professional traders focus more on managing risk than finding profitable trades. Here are the key types of risk you need to understand:
            </p>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Market Risk</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">The risk of losses due to market price movements. Markets can move against your position unexpectedly.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Liquidity Risk</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">The risk of not being able to exit a position at your desired price due to lack of market participants.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Leverage Risk</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Using borrowed funds amplifies both gains AND losses. High leverage can wipe out your account quickly.</p>
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Risk Management Rules</h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                <li>• Never risk more than 1-2% of your account on a single trade</li>
                <li>• Always use stop-loss orders</li>
                <li>• Diversify across different assets</li>
                <li>• Keep emotions out of trading decisions</li>
                <li>• Have a clear exit strategy before entering</li>
              </ul>
            </div>
          </div>
        ),
        vi: (
          <div className="space-y-6">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
              <p className="text-red-800 dark:text-red-200 font-medium">
                Tất cả giao dịch đều có rủi ro. Bạn có thể mất một phần hoặc toàn bộ vốn đầu tư. Không bao giờ giao dịch với số tiền bạn không thể chấp nhận mất.
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Quản lý rủi ro là kỹ năng quan trọng nhất trong giao dịch. Các nhà giao dịch chuyên nghiệp tập trung vào quản lý rủi ro nhiều hơn là tìm kiếm giao dịch có lợi nhuận.
            </p>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Rủi Ro Thị Trường</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Rủi ro thua lỗ do biến động giá thị trường. Thị trường có thể di chuyển ngược với vị thế của bạn.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Rủi Ro Thanh Khoản</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Rủi ro không thể thoát vị thế ở mức giá mong muốn do thiếu người tham gia thị trường.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Rủi Ro Đòn Bẩy</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Sử dụng vốn vay khuếch đại cả lãi VÀ lỗ. Đòn bẩy cao có thể xóa sổ tài khoản nhanh chóng.</p>
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Quy Tắc Quản Lý Rủi Ro</h4>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                <li>• Không bao giờ rủi ro hơn 1-2% tài khoản cho một giao dịch</li>
                <li>• Luôn sử dụng lệnh cắt lỗ</li>
                <li>• Đa dạng hóa qua các tài sản khác nhau</li>
                <li>• Loại bỏ cảm xúc khỏi quyết định giao dịch</li>
                <li>• Có chiến lược thoát rõ ràng trước khi vào lệnh</li>
              </ul>
            </div>
          </div>
        )
      }
    },
    {
      id: 'potential-rewards',
      icon: <Target className="w-5 h-5" />,
      title: { en: 'Potential Rewards', vi: 'Phần Thưởng Tiềm Năng' },
      description: { en: 'Understand the upside', vi: 'Hiểu về lợi nhuận' },
      content: {
        en: (
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              While trading carries significant risks, it also offers potential rewards that attract millions of participants worldwide. Understanding realistic expectations is crucial for long-term success.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-5 text-white text-center">
                <div className="text-3xl font-bold mb-1">1.3-1.8%</div>
                <div className="text-sm opacity-90">Daily Return Target</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-5 text-white text-center">
                <div className="text-3xl font-bold mb-1">57 Days</div>
                <div className="text-sm opacity-90">Account Double Time</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-5 text-white text-center">
                <div className="text-3xl font-bold mb-1">99.6%</div>
                <div className="text-sm opacity-90">AI Signal Accuracy</div>
              </div>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3">Compound Growth Example</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-amber-800 dark:text-amber-200">
                      <th className="pb-2">Starting</th>
                      <th className="pb-2">3 Months</th>
                      <th className="pb-2">6 Months</th>
                      <th className="pb-2">12 Months</th>
                    </tr>
                  </thead>
                  <tbody className="text-amber-700 dark:text-amber-300">
                    <tr>
                      <td className="py-1">$1,000</td>
                      <td className="py-1">$2,000</td>
                      <td className="py-1">$4,000</td>
                      <td className="py-1 font-bold">$16,000</td>
                    </tr>
                    <tr>
                      <td className="py-1">$5,000</td>
                      <td className="py-1">$10,000</td>
                      <td className="py-1">$20,000</td>
                      <td className="py-1 font-bold">$80,000</td>
                    </tr>
                    <tr>
                      <td className="py-1">$10,000</td>
                      <td className="py-1">$20,000</td>
                      <td className="py-1">$40,000</td>
                      <td className="py-1 font-bold">$160,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-amber-600 dark:text-amber-400 mt-3">*Based on consistent 1.5% daily returns with compound growth. Results may vary.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Key Benefits</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Daily passive income potential</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Compound growth over time</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> AI does the analysis for you</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Only 10 minutes per trade session</li>
              </ul>
            </div>
          </div>
        ),
        vi: (
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Mặc dù giao dịch mang rủi ro đáng kể, nó cũng mang lại phần thưởng tiềm năng thu hút hàng triệu người tham gia trên toàn thế giới. Hiểu kỳ vọng thực tế là rất quan trọng cho thành công lâu dài.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-5 text-white text-center">
                <div className="text-3xl font-bold mb-1">1.3-1.8%</div>
                <div className="text-sm opacity-90">Mục Tiêu Lợi Nhuận Ngày</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-5 text-white text-center">
                <div className="text-3xl font-bold mb-1">57 Ngày</div>
                <div className="text-sm opacity-90">Thời Gian Nhân Đôi</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-5 text-white text-center">
                <div className="text-3xl font-bold mb-1">99.6%</div>
                <div className="text-sm opacity-90">Độ Chính Xác Tín Hiệu AI</div>
              </div>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3">Ví Dụ Tăng Trưởng Kép</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-amber-800 dark:text-amber-200">
                      <th className="pb-2">Bắt Đầu</th>
                      <th className="pb-2">3 Tháng</th>
                      <th className="pb-2">6 Tháng</th>
                      <th className="pb-2">12 Tháng</th>
                    </tr>
                  </thead>
                  <tbody className="text-amber-700 dark:text-amber-300">
                    <tr>
                      <td className="py-1">$1,000</td>
                      <td className="py-1">$2,000</td>
                      <td className="py-1">$4,000</td>
                      <td className="py-1 font-bold">$16,000</td>
                    </tr>
                    <tr>
                      <td className="py-1">$5,000</td>
                      <td className="py-1">$10,000</td>
                      <td className="py-1">$20,000</td>
                      <td className="py-1 font-bold">$80,000</td>
                    </tr>
                    <tr>
                      <td className="py-1">$10,000</td>
                      <td className="py-1">$20,000</td>
                      <td className="py-1">$40,000</td>
                      <td className="py-1 font-bold">$160,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-amber-600 dark:text-amber-400 mt-3">*Dựa trên lợi nhuận 1.5% hàng ngày với tăng trưởng kép. Kết quả có thể thay đổi.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Lợi Ích Chính</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Tiềm năng thu nhập thụ động hàng ngày</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Tăng trưởng kép theo thời gian</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> AI phân tích thay cho bạn</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Chỉ 10 phút mỗi phiên giao dịch</li>
              </ul>
            </div>
          </div>
        )
      }
    },
    {
      id: 'how-ai-works',
      icon: <Cpu className="w-5 h-5" />,
      title: { en: 'How AI Trading Works', vi: 'AI Giao Dịch Hoạt Động' },
      description: { en: 'Technology behind signals', vi: 'Công nghệ đằng sau' },
      content: {
        en: (
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our AI trading system uses advanced machine learning algorithms to analyze market data and generate high-probability trading signals. Here is how it works:
            </p>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500" />
              <div className="space-y-6 pl-10">
                <div className="relative">
                  <div className="absolute -left-10 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                    <h4 className="font-bold text-blue-900 dark:text-blue-100">Data Collection</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">AI monitors 1000+ data points including price, volume, news, and market sentiment 24/7.</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-10 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4">
                    <h4 className="font-bold text-indigo-900 dark:text-indigo-100">Pattern Recognition</h4>
                    <p className="text-sm text-indigo-700 dark:text-indigo-300 mt-1">Machine learning identifies profitable patterns from historical data spanning years.</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-10 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
                    <h4 className="font-bold text-purple-900 dark:text-purple-100">Signal Generation</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">When high-probability opportunities are found, signals are sent to all members simultaneously.</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-10 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
                    <h4 className="font-bold text-green-900 dark:text-green-100">Execution Window</h4>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">Members have a 10-minute window to execute the trade following the exact signal parameters.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 dark:bg-black rounded-xl p-4 text-white">
              <h4 className="font-bold mb-2">Why AI Outperforms Human Traders</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• No emotional decisions or fear/greed bias</li>
                <li>• Processes millions of data points instantly</li>
                <li>• Never sleeps, monitors markets 24/7</li>
                <li>• Consistent execution without hesitation</li>
              </ul>
            </div>
          </div>
        ),
        vi: (
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Hệ thống giao dịch AI của chúng tôi sử dụng thuật toán học máy tiên tiến để phân tích dữ liệu thị trường và tạo tín hiệu giao dịch xác suất cao. Đây là cách hoạt động:
            </p>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500" />
              <div className="space-y-6 pl-10">
                <div className="relative">
                  <div className="absolute -left-10 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                    <h4 className="font-bold text-blue-900 dark:text-blue-100">Thu Thập Dữ Liệu</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">AI theo dõi hơn 1000 điểm dữ liệu bao gồm giá, khối lượng, tin tức và tâm lý thị trường 24/7.</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-10 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4">
                    <h4 className="font-bold text-indigo-900 dark:text-indigo-100">Nhận Dạng Mẫu</h4>
                    <p className="text-sm text-indigo-700 dark:text-indigo-300 mt-1">Học máy xác định các mẫu có lợi nhuận từ dữ liệu lịch sử trong nhiều năm.</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-10 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
                    <h4 className="font-bold text-purple-900 dark:text-purple-100">Tạo Tín Hiệu</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">Khi tìm thấy cơ hội xác suất cao, tín hiệu được gửi đến tất cả thành viên đồng thời.</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-10 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
                    <h4 className="font-bold text-green-900 dark:text-green-100">Khung Thực Hiện</h4>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">Thành viên có 10 phút để thực hiện giao dịch theo đúng các tham số tín hiệu.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 dark:bg-black rounded-xl p-4 text-white">
              <h4 className="font-bold mb-2">Tại Sao AI Vượt Trội Hơn Con Người</h4>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>• Không có quyết định cảm xúc hay thiên kiến sợ hãi/tham lam</li>
                <li>• Xử lý hàng triệu điểm dữ liệu ngay lập tức</li>
                <li>• Không bao giờ ngủ, theo dõi thị trường 24/7</li>
                <li>• Thực hiện nhất quán không do dự</li>
              </ul>
            </div>
          </div>
        )
      }
    },
    {
      id: 'getting-started',
      icon: <Footprints className="w-5 h-5" />,
      title: { en: 'Getting Started', vi: 'Bắt Đầu' },
      description: { en: 'Step by step guide', vi: 'Hướng dẫn từng bước' },
      content: {
        en: (
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Follow these steps to start your AI trading journey. Make sure to complete each step before moving to the next.
            </p>
            <div className="space-y-4">
              {[
                { step: 1, title: 'Create Your Account', desc: 'Register on DSJ Exchange using the invitation code provided in your dashboard.' },
                { step: 2, title: 'Complete KYC Verification', desc: 'Submit your ID documents for verification. This usually takes 24-48 hours.' },
                { step: 3, title: 'Fund Your Account', desc: 'Deposit USDT to your trading account. Minimum recommended starting amount is $500.' },
                { step: 4, title: 'Set Up Alarms', desc: 'Configure daily alarms for 1:15 PM and 7:15 PM EST to never miss a signal.' },
                { step: 5, title: 'Join Signal Group', desc: 'Connect to the Telegram group where trading signals are broadcasted.' },
                { step: 6, title: 'Execute Your First Trade', desc: 'When signal arrives, follow the exact instructions within the 10-minute window.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
              <p className="text-green-800 dark:text-green-200 font-medium text-sm">
                Pro Tip: Start with a smaller amount to get comfortable with the process before scaling up your investment.
              </p>
            </div>
          </div>
        ),
        vi: (
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Làm theo các bước này để bắt đầu hành trình giao dịch AI. Đảm bảo hoàn thành từng bước trước khi chuyển sang bước tiếp theo.
            </p>
            <div className="space-y-4">
              {[
                { step: 1, title: 'Tạo Tài Khoản', desc: 'Đăng ký trên DSJ Exchange bằng mã mời được cung cấp trong bảng điều khiển.' },
                { step: 2, title: 'Hoàn Tất Xác Minh KYC', desc: 'Gửi giấy tờ tùy thân để xác minh. Thường mất 24-48 giờ.' },
                { step: 3, title: 'Nạp Tiền Tài Khoản', desc: 'Nạp USDT vào tài khoản giao dịch. Số tiền khởi đầu tối thiểu được khuyến nghị là $500.' },
                { step: 4, title: 'Cài Đặt Báo Thức', desc: 'Cấu hình báo thức hàng ngày lúc 1:15 PM và 7:15 PM EST để không bỏ lỡ tín hiệu.' },
                { step: 5, title: 'Tham Gia Nhóm Tín Hiệu', desc: 'Kết nối với nhóm Telegram nơi các tín hiệu giao dịch được phát.' },
                { step: 6, title: 'Thực Hiện Giao Dịch Đầu Tiên', desc: 'Khi tín hiệu đến, làm theo hướng dẫn chính xác trong khung 10 phút.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
              <p className="text-green-800 dark:text-green-200 font-medium text-sm">
                Mẹo Pro: Bắt đầu với số tiền nhỏ hơn để làm quen với quy trình trước khi tăng quy mô đầu tư.
              </p>
            </div>
          </div>
        )
      }
    },
    {
      id: 'common-mistakes',
      icon: <XCircle className="w-5 h-5" />,
      title: { en: 'Common Mistakes', vi: 'Lỗi Thường Gặp' },
      description: { en: 'What to avoid', vi: 'Những điều cần tránh' },
      content: {
        en: (
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Learning from others mistakes can save you time and money. Here are the most common mistakes new traders make:
            </p>
            <div className="space-y-4">
              {[
                { title: 'Missing Trading Windows', desc: 'Not being ready when signals come. Always have alarms set and app open 5 minutes before.', severity: 'high' },
                { title: 'Modifying Signals', desc: 'Changing the signal parameters thinking you know better. Follow signals EXACTLY as given.', severity: 'high' },
                { title: 'Not Claiming Dividends', desc: 'Forgetting to claim dividends within 48 hours. Set reminders for dividend dates (9th, 19th, 29th).', severity: 'medium' },
                { title: 'Early Withdrawal', desc: 'Withdrawing before account doubles (2x) and paying 20% penalty. Be patient.', severity: 'medium' },
                { title: 'Emotional Trading', desc: 'Making decisions based on fear or greed. Trust the AI system.', severity: 'medium' },
                { title: 'Sharing Credentials', desc: 'Never share your password or account details with anyone.', severity: 'high' },
              ].map((item, idx) => (
                <div key={idx} className={`rounded-xl p-4 border ${
                  item.severity === 'high'
                    ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                    : 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800'
                }`}>
                  <div className="flex items-start gap-3">
                    <XCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      item.severity === 'high' ? 'text-red-500' : 'text-amber-500'
                    }`} />
                    <div>
                      <h4 className={`font-bold ${
                        item.severity === 'high'
                          ? 'text-red-900 dark:text-red-100'
                          : 'text-amber-900 dark:text-amber-100'
                      }`}>{item.title}</h4>
                      <p className={`text-sm mt-1 ${
                        item.severity === 'high'
                          ? 'text-red-700 dark:text-red-300'
                          : 'text-amber-700 dark:text-amber-300'
                      }`}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
        vi: (
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Học từ lỗi của người khác có thể tiết kiệm thời gian và tiền bạc cho bạn. Đây là những lỗi phổ biến nhất mà nhà giao dịch mới mắc phải:
            </p>
            <div className="space-y-4">
              {[
                { title: 'Bỏ Lỡ Khung Giao Dịch', desc: 'Không sẵn sàng khi tín hiệu đến. Luôn đặt báo thức và mở app 5 phút trước.', severity: 'high' },
                { title: 'Sửa Đổi Tín Hiệu', desc: 'Thay đổi tham số tín hiệu nghĩ rằng bạn biết tốt hơn. Làm theo tín hiệu CHÍNH XÁC.', severity: 'high' },
                { title: 'Không Claim Cổ Tức', desc: 'Quên claim cổ tức trong vòng 48 giờ. Đặt nhắc nhở cho ngày cổ tức (9, 19, 29).', severity: 'medium' },
                { title: 'Rút Tiền Sớm', desc: 'Rút trước khi tài khoản nhân đôi (2x) và trả phạt 20%. Hãy kiên nhẫn.', severity: 'medium' },
                { title: 'Giao Dịch Cảm Xúc', desc: 'Đưa ra quyết định dựa trên sợ hãi hoặc tham lam. Tin tưởng hệ thống AI.', severity: 'medium' },
                { title: 'Chia Sẻ Thông Tin', desc: 'Không bao giờ chia sẻ mật khẩu hoặc chi tiết tài khoản với bất kỳ ai.', severity: 'high' },
              ].map((item, idx) => (
                <div key={idx} className={`rounded-xl p-4 border ${
                  item.severity === 'high'
                    ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                    : 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800'
                }`}>
                  <div className="flex items-start gap-3">
                    <XCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      item.severity === 'high' ? 'text-red-500' : 'text-amber-500'
                    }`} />
                    <div>
                      <h4 className={`font-bold ${
                        item.severity === 'high'
                          ? 'text-red-900 dark:text-red-100'
                          : 'text-amber-900 dark:text-amber-100'
                      }`}>{item.title}</h4>
                      <p className={`text-sm mt-1 ${
                        item.severity === 'high'
                          ? 'text-red-700 dark:text-red-300'
                          : 'text-amber-700 dark:text-amber-300'
                      }`}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      }
    },
    {
      id: 'building-wealth',
      icon: <Landmark className="w-5 h-5" />,
      title: { en: 'Building Wealth', vi: 'Xây Dựng Tài Sản' },
      description: { en: 'Long-term strategy', vi: 'Chiến lược dài hạn' },
      content: {
        en: (
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Building lasting wealth requires patience, discipline, and a long-term mindset. Here is how to maximize your success with AI trading:
            </p>
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-xl mb-4">The Power of Compound Growth</h4>
              <p className="text-indigo-100 mb-4">
                With consistent 1.5% daily returns, your money doubles approximately every 57 days. This means in one year, your initial investment could grow 16x or more.
              </p>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="font-mono text-lg">$1,000 → $16,000+ in 12 months</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Reinvest Profits</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Let your earnings compound. The more you reinvest, the faster your wealth grows.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Diversify Income</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Build referral network for additional passive income through recruitment bonuses.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Claim All Dividends</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Never miss dividend claims on 9th, 19th, 29th. This is free additional income.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Stay Consistent</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Execute every trade. Consistency is the key to maximizing long-term returns.</p>
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">Your Wealth Building Timeline</h4>
              <div className="space-y-2 text-sm text-green-700 dark:text-green-300">
                <div className="flex justify-between"><span>Month 1-2:</span><span>Learn the system, build confidence</span></div>
                <div className="flex justify-between"><span>Month 3-6:</span><span>First account double, start scaling</span></div>
                <div className="flex justify-between"><span>Month 6-12:</span><span>Multiple doubles, significant growth</span></div>
                <div className="flex justify-between"><span>Year 2+:</span><span>Financial freedom potential</span></div>
              </div>
            </div>
          </div>
        ),
        vi: (
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Xây dựng tài sản lâu dài đòi hỏi sự kiên nhẫn, kỷ luật và tư duy dài hạn. Đây là cách tối đa hóa thành công với giao dịch AI:
            </p>
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-xl mb-4">Sức Mạnh Của Tăng Trưởng Kép</h4>
              <p className="text-indigo-100 mb-4">
                Với lợi nhuận 1.5% hàng ngày ổn định, tiền của bạn nhân đôi khoảng mỗi 57 ngày. Điều này có nghĩa trong một năm, khoản đầu tư ban đầu có thể tăng 16 lần hoặc hơn.
              </p>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="font-mono text-lg">$1,000 → $16,000+ trong 12 tháng</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Tái Đầu Tư Lợi Nhuận</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Để thu nhập của bạn sinh lời kép. Càng tái đầu tư nhiều, tài sản càng tăng nhanh.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Đa Dạng Hóa Thu Nhập</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Xây dựng mạng lưới giới thiệu để có thu nhập thụ động bổ sung qua thưởng tuyển dụng.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Claim Tất Cả Cổ Tức</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Không bao giờ bỏ lỡ claim cổ tức ngày 9, 19, 29. Đây là thu nhập bổ sung miễn phí.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Duy Trì Nhất Quán</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Thực hiện mọi giao dịch. Sự nhất quán là chìa khóa để tối đa hóa lợi nhuận dài hạn.</p>
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">Lộ Trình Xây Dựng Tài Sản</h4>
              <div className="space-y-2 text-sm text-green-700 dark:text-green-300">
                <div className="flex justify-between"><span>Tháng 1-2:</span><span>Học hệ thống, xây dựng tự tin</span></div>
                <div className="flex justify-between"><span>Tháng 3-6:</span><span>Nhân đôi lần đầu, bắt đầu mở rộng</span></div>
                <div className="flex justify-between"><span>Tháng 6-12:</span><span>Nhiều lần nhân đôi, tăng trưởng đáng kể</span></div>
                <div className="flex justify-between"><span>Năm 2+:</span><span>Tiềm năng tự do tài chính</span></div>
              </div>
            </div>
          </div>
        )
      }
    }
  ];

  const activeContent = lessons.find(l => l.id === activeLesson);

  return (
    <div className="space-y-6 w-full overflow-hidden">
      {/* Lesson Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        {lessons.map((lesson) => (
          <button
            key={lesson.id}
            onClick={() => setActiveLesson(lesson.id)}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl font-medium text-xs sm:text-sm whitespace-nowrap transition-all ${
              activeLesson === lesson.id
                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
            }`}
          >
            <span className={activeLesson === lesson.id ? 'text-white dark:text-gray-900' : 'text-gray-500'}>
              {lesson.icon}
            </span>
            <span className="hidden sm:inline">{lesson.title[language]}</span>
          </button>
        ))}
      </div>

      {/* Active Lesson Content */}
      {activeContent && (
        <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="p-2.5 sm:p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white flex-shrink-0">
              {activeContent.icon}
            </div>
            <div className="min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">
                {activeContent.title[language]}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                {activeContent.description[language]}
              </p>
            </div>
          </div>
          <div className="overflow-x-hidden">
            {activeContent.content[language]}
          </div>
        </div>
      )}

      {/* Navigation Hint */}
      <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center px-4">
        <BookOpen className="w-4 h-4 flex-shrink-0" />
        <span>{language === 'en' ? 'Swipe tabs to explore lessons' : 'Vuốt tab để khám phá bài học'}</span>
        <ChevronRight className="w-4 h-4 flex-shrink-0" />
      </div>
    </div>
  );
}
