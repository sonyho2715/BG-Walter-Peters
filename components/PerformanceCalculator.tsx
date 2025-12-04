'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calculator, Gift, Calendar, Scale, BarChart3, Users, TrendingUp, Sparkles, Info, Clock, DollarSign, Percent, Zap, ChevronRight } from 'lucide-react';

export default function PerformanceCalculator() {
  const { language } = useLanguage();
  const [selectedTab, setSelectedTab] = useState<'trading' | 'referral' | 'projection' | 'comparison' | 'compare' | 'team'>('trading');
  const [amount, setAmount] = useState<string>('1000');
  const [days, setDays] = useState<string>('30');
  const [rate, setRate] = useState<'1.3' | '1.8'>('1.3');
  const [referralAmount, setReferralAmount] = useState<string>('500');
  const [numReferrals, setNumReferrals] = useState<string>('1');

  // Scenario comparison states
  const [scenario1Amount, setScenario1Amount] = useState<string>('1000');
  const [scenario2Amount, setScenario2Amount] = useState<string>('3000');
  const [scenario3Amount, setScenario3Amount] = useState<string>('5000');

  // Team builder states
  const [teamF1Count, setTeamF1Count] = useState<string>('5');
  const [teamF2Count, setTeamF2Count] = useState<string>('25');
  const [teamF3Count, setTeamF3Count] = useState<string>('125');
  const [teamAvgInvestment, setTeamAvgInvestment] = useState<string>('1000');

  const content = {
    en: {
      title: 'Earnings Calculator',
      subtitle: 'Calculate your potential growth with compound returns',
      tabs: {
        trading: 'Calculator',
        referral: 'Referral Bonus',
        projection: '30-Day View',
        comparison: 'Compare Returns',
        compare: 'Scenarios',
        team: 'Team Builder'
      },
      tradingCalc: {
        title: 'Trading Calculator',
        description: 'See how daily compounding grows your investment',
        startingAmount: 'Starting Amount',
        tradingDays: 'Trading Days',
        dailyReturn: 'Daily Return Rate',
        standard: 'Standard (2 signals/day)',
        withTeam: 'With Team (3 signals/day)',
        projections: 'Your Projections',
        balance: 'Projected Balance',
        profit: 'Total Profit',
        growth: 'Growth',
        breakdown: 'Timeframe Breakdown',
        daily: 'Daily',
        weekly: 'Weekly (7 days)',
        monthly: 'Monthly (30 days)',
        twoMonths: '60 Days (2x target)',
        yearly: 'Yearly (365 days)'
      },
      referralCalc: {
        title: 'Referral Bonus Calculator',
        description: 'Calculate your earnings from direct referrals (F1)',
        referralAmount: 'Referral Investment Amount',
        numReferrals: 'Number of Referrals',
        bonusStructure: 'Referral Bonus Structure',
        yourBonus: 'Your Bonus (Per Person)',
        uplineBonus: 'Upline Bonus (Per Person)',
        totalEarnings: 'Total Your Earnings',
        bonusTiers: [
          { min: 500, max: 999, yourBonus: 25, uplineBonus: 25 },
          { min: 1000, max: 2999, yourBonus: 100, uplineBonus: 50 },
          { min: 3000, max: 4999, yourBonus: 300, uplineBonus: 150 },
          { min: 5000, max: 999999, yourBonus: 500, uplineBonus: 250 }
        ],
        bonusSignals: 'Bonus Signals',
        bonusSignalsDesc: 'When you refer someone who invests $500+, you receive 6 BONUS trading signals spread over 1.5 days',
        bonusSchedule: 'Bonus Signal Schedule (EST)',
        signals: [
          { time: '2:00 PM', signal: 1 },
          { time: '2:30 PM', signal: 2 },
          { time: '7:00 PM', signal: 3 },
          { time: '8:00 PM', signal: 4 },
          { time: '8:30 PM', signal: 5 },
          { time: '9:00 PM', signal: 6 }
        ],
        unlockThirdSignal: 'Unlock 3rd Daily Signal',
        unlockDesc: 'To permanently unlock the 3rd signal (1.8% daily): Need 5 direct F1 referrals AND all 5 must reach Level 1',
        note: 'Note: Bonus signals are in addition to your regular daily signals and significantly boost your earnings'
      },
      projectionTable: {
        title: '30-Day Growth Projection',
        description: 'Day-by-day breakdown showing exact balance progression',
        selectRate: 'Select Daily Rate',
        day: 'Day',
        balance: 'Balance',
        dailyProfit: 'Daily Profit',
        totalProfit: 'Total Profit',
        note: 'This table shows how your balance grows day by day with compounding. Each day\'s profit is added to your balance and earns returns the next day.',
        doubleDay: 'Doubles at'
      },
      comparison: {
        title: 'Dynamic vs Static Returns',
        description: 'See the power of compounding vs simple interest',
        dynamic: 'Dynamic (Compounding)',
        static: 'Static (Simple Interest)',
        dynamicDesc: 'Returns are reinvested daily, creating exponential growth',
        staticDesc: 'Returns are not reinvested, linear growth only',
        afterDays: 'After Days',
        difference: 'Difference',
        advantage: 'Dynamic Advantage',
        compoundingPower: 'The Power of Compounding',
        compoundingExplain: 'With dynamic compounding, your earnings generate additional earnings. The longer you compound, the greater your advantage over static returns.'
      },
      scenarioCompare: {
        title: 'Compare Investment Scenarios',
        description: 'See how different starting amounts grow over time',
        scenario: 'Scenario',
        startingCapital: 'Starting Capital',
        after30: 'After 30 Days',
        after60: 'After 60 Days',
        after90: 'After 90 Days'
      },
      teamBuilder: {
        title: 'Team Builder Calculator',
        description: 'Calculate earnings from building your team network',
        f1Count: 'Direct Referrals (F1)',
        f2Count: 'F1\'s Referrals (F2)',
        f3Count: 'F2\'s Referrals (F3)',
        avgInvestment: 'Average Investment',
        monthlyTeamEarnings: 'Monthly Team Earnings',
        f1Earnings: 'F1 Earnings (10%)',
        f2Earnings: 'F2 Earnings (5%)',
        f3Earnings: 'F3 Earnings (2%)',
        totalMonthly: 'Total Monthly'
      },
      assumptions: 'Important Assumptions',
      assumptionsList: [
        'Daily compounding of all returns',
        'Consistent trading execution every single day',
        '99.6% success rate (0.4% risk of loss)',
        '12% withdrawal fee applies when withdrawing funds',
        '20% penalty if withdrawing before account doubles (2x)',
        'Protected by £30M ($40M USD) guarantee fund'
      ],
      notes: 'Critical Success Factors',
      notesList: [
        'NEVER miss a trading signal - Set alarms for 1:20 PM and 7:20 PM EST',
        'Claim dividends within 48 hours or they are forfeited',
        'Follow signals exactly as provided - No modifications',
        'Screenshot any technical errors immediately',
        'Double your account (2x) before withdrawing to avoid 20% penalty',
        'Build your team to unlock 3rd signal for faster growth'
      ],
      disclaimer: 'This is a projection tool only. Actual results may vary based on market conditions, trading execution, and individual discipline.'
    },
    vi: {
      title: 'Máy Tính Lợi Nhuận',
      subtitle: 'Tính toán tiềm năng tăng trưởng với lãi kép',
      tabs: {
        trading: 'Tính Toán',
        referral: 'Thưởng F1',
        projection: '30 Ngày',
        comparison: 'So Sánh',
        compare: 'Kịch Bản',
        team: 'Xây Team'
      },
      tradingCalc: {
        title: 'Máy Tính Giao Dịch',
        description: 'Xem cách lãi kép hàng ngày tăng trưởng đầu tư của bạn',
        startingAmount: 'Số Tiền Bắt Đầu',
        tradingDays: 'Số Ngày Giao Dịch',
        dailyReturn: 'Tỷ Lệ Lợi Nhuận Hàng Ngày',
        standard: 'Standard (2 tín hiệu/ngày)',
        withTeam: 'Có Team (3 tín hiệu/ngày)',
        projections: 'Dự Báo Của Bạn',
        balance: 'Số Dư Dự Kiến',
        profit: 'Tổng Lợi Nhuận',
        growth: 'Tăng Trưởng',
        breakdown: 'Phân Tích Khung Thời Gian',
        daily: 'Hàng Ngày',
        weekly: 'Hàng Tuần (7 ngày)',
        monthly: 'Hàng Tháng (30 ngày)',
        twoMonths: '60 Ngày (mục tiêu 2x)',
        yearly: 'Hàng Năm (365 ngày)'
      },
      referralCalc: {
        title: 'Máy Tính Thưởng Giới Thiệu',
        description: 'Tính toán thu nhập từ giới thiệu trực tiếp (F1)',
        referralAmount: 'Số Tiền Đầu Tư Của F1',
        numReferrals: 'Số Lượng F1',
        bonusStructure: 'Cấu Trúc Thưởng Giới Thiệu',
        yourBonus: 'Thưởng Của Bạn (Mỗi Người)',
        uplineBonus: 'Thưởng Upline (Mỗi Người)',
        totalEarnings: 'Tổng Thu Nhập Của Bạn',
        bonusTiers: [
          { min: 500, max: 999, yourBonus: 25, uplineBonus: 25 },
          { min: 1000, max: 2999, yourBonus: 100, uplineBonus: 50 },
          { min: 3000, max: 4999, yourBonus: 300, uplineBonus: 150 },
          { min: 5000, max: 999999, yourBonus: 500, uplineBonus: 250 }
        ],
        bonusSignals: 'Tín Hiệu Thưởng',
        bonusSignalsDesc: 'Khi bạn giới thiệu người đầu tư từ $500+, bạn nhận 6 tín hiệu giao dịch THƯỞNG trong 1.5 ngày',
        bonusSchedule: 'Lịch Tín Hiệu Thưởng (EST)',
        signals: [
          { time: '2:00 PM', signal: 1 },
          { time: '2:30 PM', signal: 2 },
          { time: '7:00 PM', signal: 3 },
          { time: '8:00 PM', signal: 4 },
          { time: '8:30 PM', signal: 5 },
          { time: '9:00 PM', signal: 6 }
        ],
        unlockThirdSignal: 'Mở Khóa Tín Hiệu Thứ 3 Hàng Ngày',
        unlockDesc: 'Để mở khóa vĩnh viễn tín hiệu thứ 3 (1.8% hàng ngày): Cần 5 F1 trực tiếp VÀ cả 5 phải đạt Level 1',
        note: 'Lưu ý: Tín hiệu thưởng là ngoài tín hiệu hàng ngày thông thường và tăng thu nhập đáng kể'
      },
      projectionTable: {
        title: 'Dự Báo Tăng Trưởng 30 Ngày',
        description: 'Phân tích từng ngày cho thấy số dư tăng chính xác như thế nào',
        selectRate: 'Chọn Tỷ Lệ Hàng Ngày',
        day: 'Ngày',
        balance: 'Số Dư',
        dailyProfit: 'Lợi Nhuận Ngày',
        totalProfit: 'Tổng Lợi Nhuận',
        note: 'Bảng này cho thấy số dư của bạn tăng từng ngày với lãi kép. Lợi nhuận mỗi ngày được cộng vào số dư và sinh lợi ngày hôm sau.',
        doubleDay: 'Nhân đôi vào'
      },
      comparison: {
        title: 'So Sánh Dynamic vs Static',
        description: 'Xem sức mạnh của lãi kép vs lãi đơn',
        dynamic: 'Dynamic (Lãi Kép)',
        static: 'Static (Lãi Đơn)',
        dynamicDesc: 'Lợi nhuận được tái đầu tư hàng ngày, tạo tăng trưởng theo cấp số nhân',
        staticDesc: 'Lợi nhuận không được tái đầu tư, chỉ tăng trưởng tuyến tính',
        afterDays: 'Sau Số Ngày',
        difference: 'Chênh Lệch',
        advantage: 'Ưu Thế Dynamic',
        compoundingPower: 'Sức Mạnh Của Lãi Kép',
        compoundingExplain: 'Với lãi kép dynamic, thu nhập của bạn tạo ra thu nhập bổ sung. Càng ghép lãi lâu, ưu thế của bạn so với static càng lớn.'
      },
      scenarioCompare: {
        title: 'So Sánh Kịch Bản Đầu Tư',
        description: 'Xem các mức đầu tư khác nhau tăng trưởng theo thời gian',
        scenario: 'Kịch Bản',
        startingCapital: 'Vốn Bắt Đầu',
        after30: 'Sau 30 Ngày',
        after60: 'Sau 60 Ngày',
        after90: 'Sau 90 Ngày'
      },
      teamBuilder: {
        title: 'Máy Tính Xây Dựng Team',
        description: 'Tính toán thu nhập từ xây dựng mạng lưới team',
        f1Count: 'Giới Thiệu Trực Tiếp (F1)',
        f2Count: 'F1 Giới Thiệu (F2)',
        f3Count: 'F2 Giới Thiệu (F3)',
        avgInvestment: 'Đầu Tư Trung Bình',
        monthlyTeamEarnings: 'Thu Nhập Team Hàng Tháng',
        f1Earnings: 'Thu Nhập F1 (10%)',
        f2Earnings: 'Thu Nhập F2 (5%)',
        f3Earnings: 'Thu Nhập F3 (2%)',
        totalMonthly: 'Tổng Hàng Tháng'
      },
      assumptions: 'Giả Định Quan Trọng',
      assumptionsList: [
        'Lãi kép hàng ngày cho tất cả lợi nhuận',
        'Thực hiện giao dịch nhất quán mỗi ngày',
        'Tỷ lệ thành công 99.6% (0.4% rủi ro thua lỗ)',
        'Phí rút tiền 12% khi rút tiền',
        'Phạt 20% nếu rút trước khi tài khoản nhân đôi (2x)',
        'Được bảo vệ bởi quỹ đảm bảo £30M ($40M USD)'
      ],
      notes: 'Các Yếu Tố Thành Công Quan Trọng',
      notesList: [
        'KHÔNG BAO GIỜ bỏ lỡ tín hiệu giao dịch - Đặt báo thức cho 1:20 PM và 7:20 PM EST',
        'Claim cổ tức trong vòng 48 giờ hoặc sẽ bị mất',
        'Làm theo tín hiệu chính xác như được cung cấp - Không sửa đổi',
        'Chụp màn hình bất kỳ lỗi kỹ thuật nào ngay lập tức',
        'Nhân đôi tài khoản (2x) trước khi rút để tránh phạt 20%',
        'Xây dựng team để mở khóa tín hiệu thứ 3 cho tăng trưởng nhanh hơn'
      ],
      disclaimer: 'Đây chỉ là công cụ dự báo. Kết quả thực tế có thể khác nhau dựa trên điều kiện thị trường, thực hiện giao dịch và kỷ luật cá nhân.'
    }
  };

  const t = content[language];

  // Helper functions
  const calculateGrowth = (principal: number, dailyRate: number, days: number) => {
    return principal * Math.pow(1 + dailyRate / 100, days);
  };

  const calculateStaticGrowth = (principal: number, dailyRate: number, days: number) => {
    return principal + (principal * (dailyRate / 100) * days);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num);
  };

  const formatInteger = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num);
  };

  // Calculate referral bonuses
  const getRefBonus = (amount: number) => {
    if (amount < 500) {
      return { yourBonus: 0, newInvestorBonus: 0, yourSignals: 0, investorSignals: 0 };
    } else if (amount >= 500 && amount < 1000) {
      return { yourBonus: 25, newInvestorBonus: 25, yourSignals: 6, investorSignals: 6 };
    } else {
      return {
        yourBonus: amount * 0.10,
        newInvestorBonus: amount * 0.05,
        yourSignals: 12,
        investorSignals: 6
      };
    }
  };

  const refAmount = parseFloat(referralAmount) || 0;
  const numRefs = parseInt(numReferrals) || 0;
  const refBonus = getRefBonus(refAmount);
  const totalRefEarnings = refBonus.yourBonus * numRefs;
  const totalBonusSignals = refBonus.yourSignals * numRefs;

  // Trading calculations
  const principal = parseFloat(amount) || 0;
  const tradingDays = parseInt(days) || 0;
  const dailyRate = parseFloat(rate);

  const projections = [
    { label: t.tradingCalc.daily, days: 1 },
    { label: t.tradingCalc.weekly, days: 7 },
    { label: t.tradingCalc.monthly, days: 30 },
    { label: t.tradingCalc.twoMonths, days: 60 },
    { label: t.tradingCalc.yearly, days: 365 }
  ];

  const customProjection = tradingDays > 0 ? calculateGrowth(principal, dailyRate, tradingDays) : 0;
  const customProfit = customProjection - principal;
  const customGrowthPercent = principal > 0 ? ((customProjection - principal) / principal) * 100 : 0;

  // 30-day projection table
  const generate30DayTable = () => {
    const table = [];
    let balance = principal;
    for (let day = 1; day <= 30; day++) {
      const prevBalance = balance;
      balance = balance * (1 + dailyRate / 100);
      const dailyProfit = balance - prevBalance;
      const totalProfit = balance - principal;
      table.push({ day, balance, dailyProfit, totalProfit });
    }
    return table;
  };

  const thirtyDayTable = principal > 0 ? generate30DayTable() : [];

  // Find when account doubles
  const findDoubleDay = () => {
    let balance = principal;
    let day = 0;
    while (balance < principal * 2 && day < 365) {
      day++;
      balance = balance * (1 + dailyRate / 100);
    }
    return day;
  };

  const doubleDay = principal > 0 ? findDoubleDay() : 0;

  // Dynamic vs Static comparison
  const comparisonPoints = [7, 30, 60, 90, 180, 365];
  const comparisons = comparisonPoints.map((days) => {
    const dynamic = calculateGrowth(principal, dailyRate, days);
    const static_ = calculateStaticGrowth(principal, dailyRate, days);
    return {
      days,
      dynamic,
      static: static_,
      difference: dynamic - static_,
      advantage: static_ > 0 ? ((dynamic - static_) / static_) * 100 : 0
    };
  });

  // Team builder calculations
  const f1Count = parseInt(teamF1Count) || 0;
  const f2Count = parseInt(teamF2Count) || 0;
  const f3Count = parseInt(teamF3Count) || 0;
  const avgInvestment = parseFloat(teamAvgInvestment) || 0;

  const f1MonthlyEarnings = f1Count * avgInvestment * 0.013 * 30 * 0.10;
  const f2MonthlyEarnings = f2Count * avgInvestment * 0.013 * 30 * 0.05;
  const f3MonthlyEarnings = f3Count * avgInvestment * 0.013 * 30 * 0.02;
  const totalTeamMonthly = f1MonthlyEarnings + f2MonthlyEarnings + f3MonthlyEarnings;

  // Scenario comparison
  const s1 = parseFloat(scenario1Amount) || 0;
  const s2 = parseFloat(scenario2Amount) || 0;
  const s3 = parseFloat(scenario3Amount) || 0;

  const tabs = [
    { id: 'trading', label: t.tabs.trading, icon: Calculator },
    { id: 'referral', label: t.tabs.referral, icon: Gift },
    { id: 'projection', label: t.tabs.projection, icon: Calendar },
    { id: 'comparison', label: t.tabs.comparison, icon: Scale },
    { id: 'compare', label: t.tabs.compare, icon: BarChart3 },
    { id: 'team', label: t.tabs.team, icon: Users },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 px-6 py-8 text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-white/20 rounded-xl">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">{t.title}</h3>
            <p className="text-indigo-100 text-sm">{t.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700 px-4 py-3 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as typeof selectedTab)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                  selectedTab === tab.id
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Trading Calculator Tab */}
        {selectedTab === 'trading' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{t.tradingCalc.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">{t.tradingCalc.description}</p>
            </div>

            {/* Input Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Starting Amount */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t.tradingCalc.startingAmount}
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-12 pr-16 py-3.5 bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-900 dark:text-white font-medium transition-all"
                    placeholder="1000"
                    min="0"
                    step="100"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold text-sm">
                    USDT
                  </span>
                </div>
              </div>

              {/* Trading Days */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t.tradingCalc.tradingDays}
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <input
                    type="number"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                    className="w-full pl-12 pr-16 py-3.5 bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-900 dark:text-white font-medium transition-all"
                    placeholder="30"
                    min="1"
                    step="1"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold text-sm">
                    {language === 'en' ? 'days' : 'ngày'}
                  </span>
                </div>
              </div>
            </div>

            {/* Daily Return Rate */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                {t.tradingCalc.dailyReturn}
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setRate('1.3')}
                  className={`relative p-5 rounded-2xl border-2 transition-all ${
                    rate === '1.3'
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 shadow-lg shadow-indigo-500/20'
                      : 'border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 bg-white dark:bg-slate-800'
                  }`}
                >
                  {rate === '1.3' && (
                    <div className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      Selected
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-1">
                    <Percent className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">1.3%</span>
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{t.tradingCalc.standard}</div>
                </button>
                <button
                  onClick={() => setRate('1.8')}
                  className={`relative p-5 rounded-2xl border-2 transition-all ${
                    rate === '1.8'
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 shadow-lg shadow-purple-500/20'
                      : 'border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700 bg-white dark:bg-slate-800'
                  }`}
                >
                  {rate === '1.8' && (
                    <div className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      Selected
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">1.8%</span>
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{t.tradingCalc.withTeam}</div>
                </button>
              </div>
            </div>

            {/* Results */}
            {principal > 0 && tradingDays > 0 && (
              <>
                {/* Main Results Card */}
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 text-white">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-3">
                      <Sparkles className="w-4 h-4" />
                      {t.tradingCalc.projections}
                    </div>
                    <div className="text-sm opacity-80">
                      ${formatNumber(principal)} × {dailyRate}% × {tradingDays} {language === 'en' ? 'days' : 'ngày'}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-white/70 text-sm mb-1">{t.tradingCalc.balance}</div>
                      <div className="text-2xl font-bold">${formatNumber(customProjection)}</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-white/70 text-sm mb-1">{t.tradingCalc.profit}</div>
                      <div className="text-2xl font-bold text-green-300">+${formatNumber(customProfit)}</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-white/70 text-sm mb-1">{t.tradingCalc.growth}</div>
                      <div className="text-2xl font-bold">+{formatNumber(customGrowthPercent)}%</div>
                    </div>
                  </div>
                </div>

                {/* Chart */}
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                  <h5 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    {language === 'en' ? 'Balance Growth Over Time' : 'Tăng Trưởng Số Dư Theo Thời Gian'}
                  </h5>
                  <ResponsiveContainer width="100%" height={280}>
                    <AreaChart
                      data={(() => {
                        const chartData = [];
                        let balance = principal;
                        const interval = tradingDays > 60 ? Math.ceil(tradingDays / 30) : 1;
                        for (let day = 0; day <= tradingDays; day += interval) {
                          chartData.push({
                            day,
                            balance: parseFloat(balance.toFixed(2)),
                            profit: parseFloat((balance - principal).toFixed(2))
                          });
                          for (let i = 0; i < interval && day + i <= tradingDays; i++) {
                            balance = balance * (1 + dailyRate / 100);
                          }
                        }
                        return chartData;
                      })()}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} />
                      <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={(value) => `$${formatInteger(value)}`} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff' }}
                        labelFormatter={(day) => `${language === 'en' ? 'Day' : 'Ngày'} ${day}`}
                        formatter={(value: number, name: string) => {
                          if (name === 'balance') return [`$${formatNumber(value)}`, language === 'en' ? 'Balance' : 'Số Dư'];
                          if (name === 'profit') return [`$${formatNumber(value)}`, language === 'en' ? 'Profit' : 'Lợi Nhuận'];
                          return [value, name];
                        }}
                      />
                      <Area type="monotone" dataKey="balance" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorBalance)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </>
            )}

            {/* Standard Projections */}
            {principal > 0 && (
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  {t.tradingCalc.breakdown}
                </h4>
                <div className="space-y-3">
                  {projections.map((projection, idx) => {
                    const projected = calculateGrowth(principal, dailyRate, projection.days);
                    const profit = projected - principal;
                    const growthPercent = ((projected - principal) / principal) * 100;

                    return (
                      <div
                        key={idx}
                        className="group bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-700 transition-all cursor-default"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="font-semibold text-slate-900 dark:text-white">
                              {projection.label}
                            </div>
                            <div className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                              ${formatNumber(projected)} USDT
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-green-600 dark:text-green-400 font-bold">
                              +${formatNumber(profit)}
                            </div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                              +{formatNumber(growthPercent)}%
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-slate-300 dark:text-slate-600 ml-4 group-hover:text-indigo-500 transition-colors" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Referral Calculator Tab */}
        {selectedTab === 'referral' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{t.referralCalc.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">{t.referralCalc.description}</p>
            </div>

            {/* Input Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t.referralCalc.referralAmount}
                </label>
                <select
                  value={referralAmount}
                  onChange={(e) => setReferralAmount(e.target.value)}
                  className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-900 dark:text-white font-medium transition-all"
                >
                  <option value="500">$500</option>
                  <option value="1000">$1,000</option>
                  <option value="3000">$3,000</option>
                  <option value="5000">$5,000</option>
                  <option value="10000">$10,000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t.referralCalc.numReferrals}
                </label>
                <input
                  type="number"
                  value={numReferrals}
                  onChange={(e) => setNumReferrals(e.target.value)}
                  className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-900 dark:text-white font-medium transition-all"
                  placeholder="1"
                  min="1"
                  step="1"
                />
              </div>
            </div>

            {/* Bonus Structure Table */}
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-900 dark:text-white mb-4">{t.referralCalc.bonusStructure}</h5>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <th className="px-4 py-3 text-left text-slate-600 dark:text-slate-400 font-semibold">
                        {language === 'en' ? 'Investment' : 'Đầu Tư'}
                      </th>
                      <th className="px-4 py-3 text-left text-slate-600 dark:text-slate-400 font-semibold">
                        {language === 'en' ? 'Your Bonus' : 'Thưởng Của Bạn'}
                      </th>
                      <th className="px-4 py-3 text-left text-slate-600 dark:text-slate-400 font-semibold">
                        {language === 'en' ? 'Investor Bonus' : 'Thưởng Người Đầu Tư'}
                      </th>
                      <th className="px-4 py-3 text-left text-slate-600 dark:text-slate-400 font-semibold">
                        {language === 'en' ? 'Your Signals' : 'Tín Hiệu'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    <tr className={refAmount >= 500 && refAmount < 1000 ? 'bg-indigo-50 dark:bg-indigo-900/20' : ''}>
                      <td className="px-4 py-3 text-slate-900 dark:text-white font-medium">$500 - $999</td>
                      <td className="px-4 py-3 text-green-600 dark:text-green-400 font-bold">$25</td>
                      <td className="px-4 py-3 text-indigo-600 dark:text-indigo-400">$25</td>
                      <td className="px-4 py-3 text-purple-600 dark:text-purple-400 font-bold">6</td>
                    </tr>
                    <tr className={refAmount >= 1000 ? 'bg-indigo-50 dark:bg-indigo-900/20' : ''}>
                      <td className="px-4 py-3 text-slate-900 dark:text-white font-medium">$1,000+</td>
                      <td className="px-4 py-3 text-green-600 dark:text-green-400 font-bold">10%</td>
                      <td className="px-4 py-3 text-indigo-600 dark:text-indigo-400">5%</td>
                      <td className="px-4 py-3 text-purple-600 dark:text-purple-400 font-bold">12-16</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Results */}
            {numRefs > 0 && refAmount >= 500 && (
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-6 text-white">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                    <Gift className="w-4 h-4" />
                    {t.referralCalc.totalEarnings}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-white/70 text-sm mb-1">{language === 'en' ? 'Cash Bonus' : 'Thưởng Tiền'}</div>
                    <div className="text-3xl font-bold">${formatNumber(totalRefEarnings)}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-white/70 text-sm mb-1">{language === 'en' ? 'Bonus Signals' : 'Tín Hiệu Thưởng'}</div>
                    <div className="text-3xl font-bold">{totalBonusSignals}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Unlock 3rd Signal Info */}
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-5 border border-amber-200 dark:border-amber-800">
              <div className="flex gap-3">
                <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-xl h-fit">
                  <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h5 className="font-bold text-amber-900 dark:text-amber-100 mb-1">{t.referralCalc.unlockThirdSignal}</h5>
                  <p className="text-sm text-amber-700 dark:text-amber-300">{t.referralCalc.unlockDesc}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 30-Day Projection Tab */}
        {selectedTab === 'projection' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{t.projectionTable.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">{t.projectionTable.description}</p>
            </div>

            {/* Rate Selection */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t.projectionTable.selectRate}:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setRate('1.3')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    rate === '1.3'
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  1.3%
                </button>
                <button
                  onClick={() => setRate('1.8')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    rate === '1.8'
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  1.8%
                </button>
              </div>
            </div>

            {/* Double Day Info */}
            {principal > 0 && (
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{t.projectionTable.doubleDay}:</span>
                  <span className="text-2xl font-bold">{language === 'en' ? `Day ${doubleDay}` : `Ngày ${doubleDay}`}</span>
                </div>
              </div>
            )}

            {/* Table */}
            {principal > 0 && (
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="overflow-x-auto max-h-96">
                  <table className="w-full text-sm">
                    <thead className="sticky top-0 bg-slate-100 dark:bg-slate-800">
                      <tr>
                        <th className="px-4 py-3 text-left text-slate-600 dark:text-slate-400 font-semibold">{t.projectionTable.day}</th>
                        <th className="px-4 py-3 text-right text-slate-600 dark:text-slate-400 font-semibold">{t.projectionTable.balance}</th>
                        <th className="px-4 py-3 text-right text-slate-600 dark:text-slate-400 font-semibold">{t.projectionTable.dailyProfit}</th>
                        <th className="px-4 py-3 text-right text-slate-600 dark:text-slate-400 font-semibold">{t.projectionTable.totalProfit}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                      {thirtyDayTable.map((row, idx) => (
                        <tr key={idx} className={row.day === doubleDay ? 'bg-green-50 dark:bg-green-900/20' : 'hover:bg-white dark:hover:bg-slate-800'}>
                          <td className="px-4 py-3 text-slate-900 dark:text-white font-medium">
                            {row.day === doubleDay ? `🎯 ${row.day}` : row.day}
                          </td>
                          <td className="px-4 py-3 text-right text-slate-900 dark:text-white font-mono">${formatNumber(row.balance)}</td>
                          <td className="px-4 py-3 text-right text-green-600 dark:text-green-400 font-mono">+${formatNumber(row.dailyProfit)}</td>
                          <td className="px-4 py-3 text-right text-indigo-600 dark:text-indigo-400 font-mono">+${formatNumber(row.totalProfit)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Note */}
            <div className="bg-slate-100 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
              <div className="flex gap-3">
                <Info className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-600 dark:text-slate-400">{t.projectionTable.note}</p>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Tab */}
        {selectedTab === 'comparison' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{t.comparison.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">{t.comparison.description}</p>
            </div>

            {/* Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-5 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5" />
                  <h5 className="font-bold">{t.comparison.dynamic}</h5>
                </div>
                <p className="text-sm text-white/80">{t.comparison.dynamicDesc}</p>
              </div>
              <div className="bg-slate-200 dark:bg-slate-700 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Scale className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  <h5 className="font-bold text-slate-800 dark:text-slate-200">{t.comparison.static}</h5>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{t.comparison.staticDesc}</p>
              </div>
            </div>

            {/* Comparison Chart */}
            {principal > 0 && (
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={comparisons}>
                    <defs>
                      <linearGradient id="colorDynamic" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorStatic" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="days" stroke="#94a3b8" fontSize={12} />
                    <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={(value) => `$${formatInteger(value)}`} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff' }}
                      formatter={(value: number, name: string) => {
                        const label = name === 'dynamic' ? t.comparison.dynamic : t.comparison.static;
                        return [`$${formatNumber(value)}`, label];
                      }}
                    />
                    <Legend />
                    <Area type="monotone" dataKey="dynamic" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorDynamic)" name={t.comparison.dynamic} />
                    <Area type="monotone" dataKey="static" stroke="#94a3b8" strokeWidth={2} fillOpacity={1} fill="url(#colorStatic)" name={t.comparison.static} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            )}

            {/* Comparison Table */}
            {principal > 0 && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                      <th className="px-4 py-3 text-left text-slate-600 dark:text-slate-400 font-semibold">{t.comparison.afterDays}</th>
                      <th className="px-4 py-3 text-right text-indigo-600 dark:text-indigo-400 font-semibold">{t.comparison.dynamic}</th>
                      <th className="px-4 py-3 text-right text-slate-500 font-semibold">{t.comparison.static}</th>
                      <th className="px-4 py-3 text-right text-green-600 dark:text-green-400 font-semibold">{t.comparison.advantage}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {comparisons.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                        <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">{row.days} {language === 'en' ? 'days' : 'ngày'}</td>
                        <td className="px-4 py-3 text-right font-mono text-indigo-600 dark:text-indigo-400">${formatNumber(row.dynamic)}</td>
                        <td className="px-4 py-3 text-right font-mono text-slate-500">${formatNumber(row.static)}</td>
                        <td className="px-4 py-3 text-right font-bold text-green-600 dark:text-green-400">+{formatNumber(row.advantage)}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Scenario Comparison Tab */}
        {selectedTab === 'compare' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{t.scenarioCompare.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">{t.scenarioCompare.description}</p>
            </div>

            {/* Scenario Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: `${t.scenarioCompare.scenario} 1`, value: scenario1Amount, setter: setScenario1Amount, color: 'indigo' },
                { label: `${t.scenarioCompare.scenario} 2`, value: scenario2Amount, setter: setScenario2Amount, color: 'purple' },
                { label: `${t.scenarioCompare.scenario} 3`, value: scenario3Amount, setter: setScenario3Amount, color: 'pink' },
              ].map((scenario, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{scenario.label}</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                    <input
                      type="number"
                      value={scenario.value}
                      onChange={(e) => scenario.setter(e.target.value)}
                      className="w-full pl-8 pr-4 py-2.5 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-900 dark:text-white font-medium"
                      min="100"
                      step="100"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Scenario Results */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                    <th className="px-4 py-3 text-left text-slate-600 dark:text-slate-400 font-semibold">{t.scenarioCompare.scenario}</th>
                    <th className="px-4 py-3 text-right text-slate-600 dark:text-slate-400 font-semibold">{t.scenarioCompare.startingCapital}</th>
                    <th className="px-4 py-3 text-right text-slate-600 dark:text-slate-400 font-semibold">{t.scenarioCompare.after30}</th>
                    <th className="px-4 py-3 text-right text-slate-600 dark:text-slate-400 font-semibold">{t.scenarioCompare.after60}</th>
                    <th className="px-4 py-3 text-right text-slate-600 dark:text-slate-400 font-semibold">{t.scenarioCompare.after90}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {[s1, s2, s3].map((amount, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">{t.scenarioCompare.scenario} {idx + 1}</td>
                      <td className="px-4 py-3 text-right font-mono text-slate-700 dark:text-slate-300">${formatNumber(amount)}</td>
                      <td className="px-4 py-3 text-right font-mono text-indigo-600 dark:text-indigo-400">${formatNumber(calculateGrowth(amount, dailyRate, 30))}</td>
                      <td className="px-4 py-3 text-right font-mono text-purple-600 dark:text-purple-400">${formatNumber(calculateGrowth(amount, dailyRate, 60))}</td>
                      <td className="px-4 py-3 text-right font-mono text-green-600 dark:text-green-400">${formatNumber(calculateGrowth(amount, dailyRate, 90))}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Chart */}
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={[
                  { name: '30 days', s1: calculateGrowth(s1, dailyRate, 30), s2: calculateGrowth(s2, dailyRate, 30), s3: calculateGrowth(s3, dailyRate, 30) },
                  { name: '60 days', s1: calculateGrowth(s1, dailyRate, 60), s2: calculateGrowth(s2, dailyRate, 60), s3: calculateGrowth(s3, dailyRate, 60) },
                  { name: '90 days', s1: calculateGrowth(s1, dailyRate, 90), s2: calculateGrowth(s2, dailyRate, 90), s3: calculateGrowth(s3, dailyRate, 90) },
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={(value) => `$${formatInteger(value)}`} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff' }}
                    formatter={(value: number) => [`$${formatNumber(value)}`, '']}
                  />
                  <Bar dataKey="s1" fill="#6366f1" radius={[4, 4, 0, 0]} name={`$${formatInteger(s1)}`} />
                  <Bar dataKey="s2" fill="#a855f7" radius={[4, 4, 0, 0]} name={`$${formatInteger(s2)}`} />
                  <Bar dataKey="s3" fill="#ec4899" radius={[4, 4, 0, 0]} name={`$${formatInteger(s3)}`} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Team Builder Tab */}
        {selectedTab === 'team' && (
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{t.teamBuilder.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">{t.teamBuilder.description}</p>
            </div>

            {/* Team Inputs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: t.teamBuilder.f1Count, value: teamF1Count, setter: setTeamF1Count, color: 'indigo' },
                { label: t.teamBuilder.f2Count, value: teamF2Count, setter: setTeamF2Count, color: 'purple' },
                { label: t.teamBuilder.f3Count, value: teamF3Count, setter: setTeamF3Count, color: 'pink' },
                { label: t.teamBuilder.avgInvestment, value: teamAvgInvestment, setter: setTeamAvgInvestment, color: 'green', prefix: '$' },
              ].map((input, idx) => (
                <div key={idx}>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{input.label}</label>
                  <div className="relative">
                    {input.prefix && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">{input.prefix}</span>}
                    <input
                      type="number"
                      value={input.value}
                      onChange={(e) => input.setter(e.target.value)}
                      className={`w-full ${input.prefix ? 'pl-8' : 'pl-4'} pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-900 dark:text-white font-medium`}
                      min="0"
                      step="1"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Team Results */}
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-6 text-white">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  <Users className="w-4 h-4" />
                  {t.teamBuilder.monthlyTeamEarnings}
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-white/70 text-sm mb-1">{t.teamBuilder.f1Earnings}</div>
                  <div className="text-xl font-bold">${formatNumber(f1MonthlyEarnings)}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-white/70 text-sm mb-1">{t.teamBuilder.f2Earnings}</div>
                  <div className="text-xl font-bold">${formatNumber(f2MonthlyEarnings)}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-white/70 text-sm mb-1">{t.teamBuilder.f3Earnings}</div>
                  <div className="text-xl font-bold">${formatNumber(f3MonthlyEarnings)}</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center border-2 border-white/30">
                  <div className="text-white/70 text-sm mb-1">{t.teamBuilder.totalMonthly}</div>
                  <div className="text-2xl font-bold">${formatNumber(totalTeamMonthly)}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
          <div className="flex gap-3 items-start">
            <Info className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-slate-500 dark:text-slate-400">{t.disclaimer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
