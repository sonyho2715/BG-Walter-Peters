'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function QuickReferenceCard() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Quick Reference Guide',
      subtitle: 'Essential information at a glance',
      tradingSchedule: 'Trading Schedule (EST)',
      regular1: 'Regular Trading 1:',
      regular2: 'Regular Trading 2:',
      time1: '1:20 PM',
      time2: '7:20 PM',
      window: 'You have 10 minutes to execute each trade',
      criticalDeadlines: 'Critical Deadlines',
      dividendClaiming: 'Dividend Claiming',
      dividendNote: 'Must claim within 48 hours or forfeit!',
      earlyWithdrawal: 'Early Withdrawal Penalty',
      penaltyNote: '20% penalty if withdraw before account doubles (2x)',
      successMetrics: 'Success Metrics',
      winRate: 'Win Rate:',
      dailyReturn: 'Daily Return:',
      doubleTime: 'Double Time:',
      growth: '1,000 USDT → 100,000 USDT in 12 months',
      fees: 'Fees & Minimums',
      withdrawalFee: 'Withdrawal Fee:',
      minWithdrawal: 'Min Withdrawal:',
      bonusThreshold: 'Bonus Threshold:',
      gasNote: 'Add $50 extra for gas fees',
      bgGlobal: 'BG Global',
      members: 'Members:',
      countries: 'Countries:',
      guarantee: 'Guarantee Fund:',
      partnership: '10-year partnership (6.5 years remaining)',
      fivePhases: '5-Phase Recovery System',
      phase1: 'Phase 1: Signal Analysis',
      phase1desc: 'Advanced AI analyzes market trends 24/7',
      phase2: 'Phase 2: Signal Generation',
      phase2desc: 'High-probability signals sent to members',
      phase3: 'Phase 3: Execution',
      phase3desc: 'Members execute within 10-minute window',
      phase4: 'Phase 4: Monitoring',
      phase4desc: 'Team monitors all trades in real-time',
      phase5: 'Phase 5: Recovery',
      phase5desc: 'If loss occurs, recovery signals deployed',
      tradingTips: 'Essential Trading Tips',
      tip1: 'Set 2 alarms daily: 1:15 PM and 7:15 PM EST',
      tip2: 'Keep app open 5 minutes before signal time',
      tip3: 'Screenshot every trade for your records',
      tip4: 'Follow signal EXACTLY - no modifications',
      tip5: 'If error occurs, screenshot and contact support',
      tip6: 'Never share your password with anyone',
      importantFees: 'All Fees & Thresholds',
      fee1: 'Withdrawal Fee: 12% (deducted automatically)',
      fee2: 'Early Withdrawal Penalty: 20% (before 2x)',
      fee3: 'Minimum Withdrawal: 35 USDT',
      fee4: 'Referral Bonus Threshold: $500 minimum',
      fee5: 'Gas Fee Reserve: Add $50 extra to withdrawal',
      fee6: 'No trading fees or monthly charges',
      bottomWarning: 'NEVER MISS A TRADE!',
      bottomWarningText: 'Set alarms for your local timezone. Missed signals cannot be recovered. If you encounter technical errors, screenshot and send to Elena/Stephen immediately.'
    },
    vi: {
      title: 'Hướng Dẫn Tham Khảo Nhanh',
      subtitle: 'Thông tin thiết yếu trong nháy mắt',
      tradingSchedule: 'Lịch Giao Dịch (EST)',
      regular1: 'Giao Dịch Thường 1:',
      regular2: 'Giao Dịch Thường 2:',
      time1: '1:20 PM',
      time2: '7:20 PM',
      window: 'Bạn có 10 phút để thực hiện mỗi giao dịch',
      criticalDeadlines: 'Thời Hạn Quan Trọng',
      dividendClaiming: 'Claim Cổ Tức',
      dividendNote: 'Phải claim trong vòng 48 giờ hoặc sẽ mất!',
      earlyWithdrawal: 'Phạt Rút Tiền Sớm',
      penaltyNote: 'Phạt 20% nếu rút trước khi tài khoản nhân đôi (2x)',
      successMetrics: 'Chỉ Số Thành Công',
      winRate: 'Tỷ Lệ Thắng:',
      dailyReturn: 'Lợi Nhuận Ngày:',
      doubleTime: 'Thời Gian Nhân Đôi:',
      growth: '1,000 USDT → 100,000 USDT trong 12 tháng',
      fees: 'Phí & Mức Tối Thiểu',
      withdrawalFee: 'Phí Rút Tiền:',
      minWithdrawal: 'Rút Tối Thiểu:',
      bonusThreshold: 'Ngưỡng Thưởng:',
      gasNote: 'Thêm $50 cho phí gas',
      bgGlobal: 'BG Global',
      members: 'Thành Viên:',
      countries: 'Quốc Gia:',
      guarantee: 'Quỹ Đảm Bảo:',
      partnership: 'Hợp tác 10 năm (còn 6.5 năm)',
      fivePhases: 'Hệ Thống Phục Hồi 5 Giai Đoạn',
      phase1: 'Giai Đoạn 1: Phân Tích Tín Hiệu',
      phase1desc: 'AI tiên tiến phân tích xu hướng thị trường 24/7',
      phase2: 'Giai Đoạn 2: Tạo Tín Hiệu',
      phase2desc: 'Tín hiệu xác suất cao được gửi cho thành viên',
      phase3: 'Giai Đoạn 3: Thực Hiện',
      phase3desc: 'Thành viên thực hiện trong khung 10 phút',
      phase4: 'Giai Đoạn 4: Giám Sát',
      phase4desc: 'Team giám sát tất cả giao dịch theo thời gian thực',
      phase5: 'Giai Đoạn 5: Phục Hồi',
      phase5desc: 'Nếu thua lỗ xảy ra, tín hiệu phục hồi được triển khai',
      tradingTips: 'Mẹo Giao Dịch Thiết Yếu',
      tip1: 'Đặt 2 báo thức hàng ngày: 1:15 PM và 7:15 PM EST',
      tip2: 'Mở app sẵn 5 phút trước giờ tín hiệu',
      tip3: 'Chụp màn hình mọi giao dịch để lưu trữ',
      tip4: 'Làm theo tín hiệu CHÍNH XÁC - không sửa đổi',
      tip5: 'Nếu có lỗi, chụp màn hình và liên hệ support',
      tip6: 'Không bao giờ chia sẻ mật khẩu với bất kỳ ai',
      importantFees: 'Tất Cả Phí & Ngưỡng',
      fee1: 'Phí Rút Tiền: 12% (tự động trừ)',
      fee2: 'Phạt Rút Sớm: 20% (trước khi 2x)',
      fee3: 'Rút Tối Thiểu: 35 USDT',
      fee4: 'Ngưỡng Thưởng Giới Thiệu: Tối thiểu $500',
      fee5: 'Dự Trữ Phí Gas: Thêm $50 vào số rút',
      fee6: 'Không phí giao dịch hoặc phí hàng tháng',
      bottomWarning: 'KHÔNG BAO GIỜ BỎ LỠ GIAO DỊCH!',
      bottomWarningText: 'Đặt báo thức cho múi giờ địa phương của bạn. Tín hiệu bỏ lỡ không thể khôi phục. Nếu gặp lỗi kỹ thuật, chụp màn hình và gửi cho Elena/Stephen ngay lập tức.'
    }
  };

  const t = content[language];

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800 rounded-xl p-6 md:p-8 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">⚡</span>
        <div>
          <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100">{t.title}</h3>
          <p className="text-sm text-amber-700 dark:text-amber-300">{t.subtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Trading Schedule */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-amber-200 dark:border-amber-700">
          <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3 flex items-center gap-2">
            <span>📊</span> {t.tradingSchedule}
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">{t.regular1}</span>
              <span className="font-bold text-amber-900 dark:text-amber-100">{t.time1}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">{t.regular2}</span>
              <span className="font-bold text-amber-900 dark:text-amber-100">{t.time2}</span>
            </div>
            <div className="mt-3 pt-3 border-t border-amber-200 dark:border-amber-700">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                ⏱️ {t.window}
              </p>
            </div>
          </div>
        </div>

        {/* Critical Deadlines */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-red-200 dark:border-red-700">
          <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
            <span>⚠️</span> {t.criticalDeadlines}
          </h4>
          <div className="space-y-2 text-sm">
            <div className="bg-red-50 dark:bg-red-900/20 rounded p-2">
              <p className="font-bold text-red-900 dark:text-red-100">{t.dividendClaiming}</p>
              <p className="text-xs text-red-700 dark:text-red-300 mt-1">
                {t.dividendNote}
              </p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded p-2">
              <p className="font-bold text-yellow-900 dark:text-yellow-100">{t.earlyWithdrawal}</p>
              <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
                {t.penaltyNote}
              </p>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-green-200 dark:border-green-700">
          <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
            <span>📈</span> {t.successMetrics}
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">{t.winRate}</span>
              <span className="font-bold text-green-600 dark:text-green-400">99.6%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">{t.dailyReturn}</span>
              <span className="font-bold text-green-600 dark:text-green-400">1.3-1.8%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">{t.doubleTime}</span>
              <span className="font-bold text-green-600 dark:text-green-400">57 {language === 'en' ? 'days' : 'ngày'}</span>
            </div>
            <div className="mt-3 pt-3 border-t border-green-200 dark:border-green-700">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {t.growth}
              </p>
            </div>
          </div>
        </div>

        {/* Important Fees */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
          <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
            <span>💵</span> {t.fees}
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">{t.withdrawalFee}</span>
              <span className="font-bold text-blue-900 dark:text-blue-100">12%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">{t.minWithdrawal}</span>
              <span className="font-bold text-blue-900 dark:text-blue-100">35 USDT</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">{t.bonusThreshold}</span>
              <span className="font-bold text-blue-900 dark:text-blue-100">$500+</span>
            </div>
            <div className="mt-3 pt-3 border-t border-blue-200 dark:border-blue-700">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {t.gasNote}
              </p>
            </div>
          </div>
        </div>

        {/* BG Global Stats */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
          <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
            <span>🌍</span> {t.bgGlobal}
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">{t.members}</span>
              <span className="font-bold text-purple-900 dark:text-purple-100">400,000+</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">{t.countries}</span>
              <span className="font-bold text-purple-900 dark:text-purple-100">100+</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">{t.guarantee}</span>
              <span className="font-bold text-purple-900 dark:text-purple-100">£30M</span>
            </div>
            <div className="mt-3 pt-3 border-t border-purple-200 dark:border-purple-700">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {t.partnership}
              </p>
            </div>
          </div>
        </div>

        {/* Essential Trading Tips */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-indigo-200 dark:border-indigo-700">
          <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3 flex items-center gap-2">
            <span>💡</span> {t.tradingTips}
          </h4>
          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 dark:text-indigo-400 mt-0.5">1.</span>
              <span className="text-gray-700 dark:text-gray-300">{t.tip1}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 dark:text-indigo-400 mt-0.5">2.</span>
              <span className="text-gray-700 dark:text-gray-300">{t.tip2}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 dark:text-indigo-400 mt-0.5">3.</span>
              <span className="text-gray-700 dark:text-gray-300">{t.tip3}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 dark:text-indigo-400 mt-0.5">4.</span>
              <span className="text-gray-700 dark:text-gray-300">{t.tip4}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 dark:text-indigo-400 mt-0.5">5.</span>
              <span className="text-gray-700 dark:text-gray-300">{t.tip5}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 dark:text-indigo-400 mt-0.5">6.</span>
              <span className="text-gray-700 dark:text-gray-300">{t.tip6}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5-Phase Recovery System - Full Width */}
      <div className="mt-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-2 border-cyan-200 dark:border-cyan-700 rounded-lg p-6">
        <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-4 flex items-center gap-2 text-lg">
          <span>🛡️</span> {t.fivePhases}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">1</div>
            <h5 className="font-bold text-sm text-gray-900 dark:text-gray-100 mb-1">{t.phase1}</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">{t.phase1desc}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">2</div>
            <h5 className="font-bold text-sm text-gray-900 dark:text-gray-100 mb-1">{t.phase2}</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">{t.phase2desc}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">3</div>
            <h5 className="font-bold text-sm text-gray-900 dark:text-gray-100 mb-1">{t.phase3}</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">{t.phase3desc}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">4</div>
            <h5 className="font-bold text-sm text-gray-900 dark:text-gray-100 mb-1">{t.phase4}</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">{t.phase4desc}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">5</div>
            <h5 className="font-bold text-sm text-gray-900 dark:text-gray-100 mb-1">{t.phase5}</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">{t.phase5desc}</p>
          </div>
        </div>
      </div>

      {/* All Fees & Thresholds - Full Width */}
      <div className="mt-6 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 border-2 border-teal-200 dark:border-teal-700 rounded-lg p-6">
        <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-4 flex items-center gap-2 text-lg">
          <span>💰</span> {t.importantFees}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm">
            <span className="text-gray-700 dark:text-gray-300">✓ {t.fee1}</span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm">
            <span className="text-gray-700 dark:text-gray-300">✓ {t.fee2}</span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm">
            <span className="text-gray-700 dark:text-gray-300">✓ {t.fee3}</span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm">
            <span className="text-gray-700 dark:text-gray-300">✓ {t.fee4}</span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm">
            <span className="text-gray-700 dark:text-gray-300">✓ {t.fee5}</span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded p-3 text-sm">
            <span className="text-gray-700 dark:text-gray-300">✓ {t.fee6}</span>
          </div>
        </div>
      </div>

      {/* Bottom Warning */}
      <div className="mt-6 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg p-4">
        <div className="flex gap-3">
          <span className="text-xl">🚨</span>
          <div className="flex-1">
            <p className="font-bold text-red-900 dark:text-red-100 text-sm mb-1">
              {t.bottomWarning}
            </p>
            <p className="text-xs text-red-800 dark:text-red-200">
              {t.bottomWarningText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
