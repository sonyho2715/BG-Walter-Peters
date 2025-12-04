'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Clock, AlertTriangle, TrendingUp, DollarSign, Globe, Shield, Lightbulb, Layers, Wallet, Bell } from 'lucide-react';

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
      guarantee: 'Capital Fund:',
      partnership: 'SEC RIA Licensed (Aug 2025)',
      compliance: 'Compliance & Licensing',
      secLicense: 'SEC RIA License:',
      secDate: 'Aug 15, 2025',
      coloradoInc: 'Colorado Inc:',
      coloradoDate: 'Apr 13, 2025',
      ceo: 'CEO:',
      ceoName: 'Stephen Beard (PhD, Oxford Brookes)',
      dividendDates: 'Dividend Dates',
      dividendSchedule: '9th, 19th, 29th monthly',
      fivePhases: '5-Phase Recovery System',
      phase1: 'Signal Analysis',
      phase1desc: 'Advanced AI analyzes market trends 24/7',
      phase2: 'Signal Generation',
      phase2desc: 'High-probability signals sent to members',
      phase3: 'Execution',
      phase3desc: 'Members execute within 10-minute window',
      phase4: 'Monitoring',
      phase4desc: 'Team monitors all trades in real-time',
      phase5: 'Recovery',
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
      guarantee: 'Quỹ Vốn:',
      partnership: 'Giấy Phép SEC RIA (T8/2025)',
      compliance: 'Tuân Thủ & Giấy Phép',
      secLicense: 'Giấy Phép SEC RIA:',
      secDate: '15/08/2025',
      coloradoInc: 'Đăng Ký Colorado:',
      coloradoDate: '13/04/2025',
      ceo: 'CEO:',
      ceoName: 'Stephen Beard (Tiến Sĩ, Oxford Brookes)',
      dividendDates: 'Ngày Cổ Tức',
      dividendSchedule: 'Ngày 9, 19, 29 hàng tháng',
      fivePhases: 'Hệ Thống Phục Hồi 5 Giai Đoạn',
      phase1: 'Phân Tích Tín Hiệu',
      phase1desc: 'AI tiên tiến phân tích xu hướng thị trường 24/7',
      phase2: 'Tạo Tín Hiệu',
      phase2desc: 'Tín hiệu xác suất cao được gửi cho thành viên',
      phase3: 'Thực Hiện',
      phase3desc: 'Thành viên thực hiện trong khung 10 phút',
      phase4: 'Giám Sát',
      phase4desc: 'Team giám sát tất cả giao dịch theo thời gian thực',
      phase5: 'Phục Hồi',
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

  const phases = [
    { num: 1, title: t.phase1, desc: t.phase1desc, color: 'from-cyan-500 to-blue-500' },
    { num: 2, title: t.phase2, desc: t.phase2desc, color: 'from-blue-500 to-indigo-500' },
    { num: 3, title: t.phase3, desc: t.phase3desc, color: 'from-indigo-500 to-purple-500' },
    { num: 4, title: t.phase4, desc: t.phase4desc, color: 'from-purple-500 to-pink-500' },
    { num: 5, title: t.phase5, desc: t.phase5desc, color: 'from-pink-500 to-rose-500' }
  ];

  const tips = [t.tip1, t.tip2, t.tip3, t.tip4, t.tip5, t.tip6];
  const fees = [t.fee1, t.fee2, t.fee3, t.fee4, t.fee5, t.fee6];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl shadow-lg">
          <Lightbulb className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">{t.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{t.subtitle}</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Trading Schedule */}
        <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-5 border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white">{t.tradingSchedule}</h4>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300 text-sm">{t.regular1}</span>
              <span className="font-bold text-gray-900 dark:text-white bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-lg text-sm">{t.time1}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300 text-sm">{t.regular2}</span>
              <span className="font-bold text-gray-900 dark:text-white bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-lg text-sm">{t.time2}</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">
              ⏱️ {t.window}
            </p>
          </div>
        </div>

        {/* Critical Deadlines */}
        <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-5 border border-red-200/50 dark:border-red-700/30 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-gradient-to-br from-red-500 to-rose-500 rounded-xl">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white">{t.criticalDeadlines}</h4>
          </div>
          <div className="space-y-3">
            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-3">
              <p className="font-bold text-red-900 dark:text-red-100 text-sm">{t.dividendClaiming}</p>
              <p className="text-xs text-red-700 dark:text-red-300 mt-1">{t.dividendNote}</p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-3">
              <p className="font-bold text-amber-900 dark:text-amber-100 text-sm">{t.earlyWithdrawal}</p>
              <p className="text-xs text-amber-700 dark:text-amber-300 mt-1">{t.penaltyNote}</p>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-5 border border-green-200/50 dark:border-green-700/30 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white">{t.successMetrics}</h4>
          </div>
          <div className="space-y-2.5">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300 text-sm">{t.winRate}</span>
              <span className="font-bold text-green-600 dark:text-green-400">99.6%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300 text-sm">{t.dailyReturn}</span>
              <span className="font-bold text-green-600 dark:text-green-400">1.3-1.8%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300 text-sm">{t.doubleTime}</span>
              <span className="font-bold text-green-600 dark:text-green-400">57 {language === 'en' ? 'days' : 'ngày'}</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">{t.growth}</p>
          </div>
        </div>

        {/* Fees */}
        <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-5 border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white">{t.fees}</h4>
          </div>
          <div className="space-y-2.5">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300 text-sm">{t.withdrawalFee}</span>
              <span className="font-bold text-gray-900 dark:text-white">12%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300 text-sm">{t.minWithdrawal}</span>
              <span className="font-bold text-gray-900 dark:text-white">35 USDT</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300 text-sm">{t.bonusThreshold}</span>
              <span className="font-bold text-gray-900 dark:text-white">$500+</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">{t.gasNote}</p>
          </div>
        </div>

        {/* BG Global */}
        <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-5 border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white">{t.bgGlobal}</h4>
          </div>
          <div className="space-y-2.5">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300 text-sm">{t.members}</span>
              <span className="font-bold text-purple-600 dark:text-purple-400">500,000+</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300 text-sm">{t.countries}</span>
              <span className="font-bold text-purple-600 dark:text-purple-400">100+</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300 text-sm">{t.guarantee}</span>
              <span className="font-bold text-purple-600 dark:text-purple-400">$70M</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">{t.partnership}</p>
          </div>
        </div>

        {/* Compliance */}
        <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-5 border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white">{t.compliance}</h4>
          </div>
          <div className="space-y-2.5 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">{t.secLicense}</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">{t.secDate}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">{t.coloradoInc}</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">{t.coloradoDate}</span>
            </div>
            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400">{t.ceo} {t.ceoName}</p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">{t.dividendDates}: {t.dividendSchedule}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5-Phase Recovery System */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-6 md:p-8 text-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-white/10 rounded-xl">
            <Layers className="w-6 h-6" />
          </div>
          <h4 className="text-xl font-bold">{t.fivePhases}</h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {phases.map((phase) => (
            <div key={phase.num} className="bg-white/5 backdrop-blur rounded-2xl p-4 text-center border border-white/10 hover:bg-white/10 transition-colors">
              <div className={`w-10 h-10 mx-auto bg-gradient-to-br ${phase.color} rounded-xl flex items-center justify-center mb-3 text-lg font-bold`}>
                {phase.num}
              </div>
              <h5 className="font-bold text-sm mb-1">{phase.title}</h5>
              <p className="text-xs text-gray-400">{phase.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trading Tips & Fees Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tips */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-indigo-200/50 dark:border-indigo-700/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white">{t.tradingTips}</h4>
          </div>
          <div className="space-y-2">
            {tips.map((tip, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white dark:bg-gray-800/50 rounded-xl p-3">
                <span className="w-6 h-6 flex-shrink-0 bg-indigo-600 text-white rounded-lg flex items-center justify-center text-xs font-bold">
                  {idx + 1}
                </span>
                <span className="text-sm text-gray-700 dark:text-gray-300">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fees */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-6 border border-emerald-200/50 dark:border-emerald-700/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white">{t.importantFees}</h4>
          </div>
          <div className="space-y-2">
            {fees.map((fee, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800/50 rounded-xl p-3 flex items-center gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 text-sm">✓</span>
                <span className="text-sm text-gray-700 dark:text-gray-300">{fee}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Warning */}
      <div className="relative overflow-hidden bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl p-6 text-white">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative flex gap-4">
          <div className="p-3 bg-white/20 rounded-2xl h-fit">
            <Bell className="w-6 h-6" />
          </div>
          <div>
            <p className="font-bold text-lg mb-1">{t.bottomWarning}</p>
            <p className="text-sm text-red-100">{t.bottomWarningText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
