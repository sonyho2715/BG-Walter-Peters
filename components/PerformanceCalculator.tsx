'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
      title: 'Comprehensive Earnings Calculator',
      subtitle: 'Detailed projections and earning potential analysis',
      tabs: {
        trading: 'Trading Calculator',
        referral: 'Referral Bonuses',
        projection: '30-Day Projection',
        comparison: 'Dynamic vs Static',
        compare: 'Scenario Comparison',
        team: 'Team Builder'
      },
      tradingCalc: {
        title: 'Trading Earnings Calculator',
        description: 'Calculate your potential earnings with daily compounding',
        startingAmount: 'Starting Amount (USDT)',
        tradingDays: 'Trading Days',
        dailyReturn: 'Daily Return Rate',
        standard: 'Standard (2 signals/day)',
        withTeam: 'With Team (3 signals/day)',
        projections: 'Growth Projections',
        balance: 'Projected Balance',
        profit: 'Total Profit',
        growth: 'Growth',
        breakdown: 'Standard Timeframe Breakdown',
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
        description: 'See the power of compounding (dynamic) vs simple interest (static)',
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
      disclaimer: '⚠️ This is a projection tool only. Actual results may vary based on market conditions, trading execution, and individual discipline.'
    },
    vi: {
      title: 'Máy Tính Lợi Nhuận Toàn Diện',
      subtitle: 'Dự báo chi tiết và phân tích tiềm năng thu nhập',
      tabs: {
        trading: 'Máy Tính Giao Dịch',
        referral: 'Thưởng Giới Thiệu',
        projection: 'Dự Báo 30 Ngày',
        comparison: 'Dynamic vs Static',
        compare: 'So Sánh Kịch Bản',
        team: 'Xây Dựng Team'
      },
      tradingCalc: {
        title: 'Máy Tính Thu Nhập Giao Dịch',
        description: 'Tính toán lợi nhuận tiềm năng với lãi kép hàng ngày',
        startingAmount: 'Số Tiền Bắt Đầu (USDT)',
        tradingDays: 'Số Ngày Giao Dịch',
        dailyReturn: 'Tỷ Lệ Lợi Nhuận Hàng Ngày',
        standard: 'Standard (2 tín hiệu/ngày)',
        withTeam: 'Có Team (3 tín hiệu/ngày)',
        projections: 'Dự Báo Tăng Trưởng',
        balance: 'Số Dư Dự Kiến',
        profit: 'Tổng Lợi Nhuận',
        growth: 'Tăng Trưởng',
        breakdown: 'Phân Tích Khung Thời Gian Chuẩn',
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
        description: 'Xem sức mạnh của lãi kép (dynamic) vs lãi đơn (static)',
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
      disclaimer: '⚠️ Đây chỉ là công cụ dự báo. Kết quả thực tế có thể khác nhau dựa trên điều kiện thị trường, thực hiện giao dịch và kỷ luật cá nhân.'
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

  // Calculate referral bonuses (CORRECTED based on PDF)
  const getRefBonus = (amount: number) => {
    if (amount < 500) {
      return { yourBonus: 0, newInvestorBonus: 0, yourSignals: 0, investorSignals: 0 };
    } else if (amount >= 500 && amount < 1000) {
      // $500-$999: Both get $25 + 6 signals
      return { yourBonus: 25, newInvestorBonus: 25, yourSignals: 6, investorSignals: 6 };
    } else {
      // $1000+: Percentage-based - Referrer gets 10%, Investor gets 5%
      return {
        yourBonus: amount * 0.10, // 10% for you (referrer)
        newInvestorBonus: amount * 0.05, // 5% for new investor
        yourSignals: 12, // 12-16 signals for referrer
        investorSignals: 6 // 6 signals for investor
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

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6 md:p-8 shadow-lg border-2 border-emerald-200 dark:border-emerald-800">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">📊</span>
        <div>
          <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">{t.title}</h3>
          <p className="text-sm text-emerald-700 dark:text-emerald-300">{t.subtitle}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <button
          onClick={() => setSelectedTab('trading')}
          className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all text-sm ${
            selectedTab === 'trading'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30'
          }`}
        >
          💰 {t.tabs.trading}
        </button>
        <button
          onClick={() => setSelectedTab('referral')}
          className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all text-sm ${
            selectedTab === 'referral'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30'
          }`}
        >
          🎁 {t.tabs.referral}
        </button>
        <button
          onClick={() => setSelectedTab('projection')}
          className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all text-sm ${
            selectedTab === 'projection'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30'
          }`}
        >
          📅 {t.tabs.projection}
        </button>
        <button
          onClick={() => setSelectedTab('comparison')}
          className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all text-sm ${
            selectedTab === 'comparison'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30'
          }`}
        >
          ⚖️ {t.tabs.comparison}
        </button>
        <button
          onClick={() => setSelectedTab('compare')}
          className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all text-sm ${
            selectedTab === 'compare'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30'
          }`}
        >
          🔄 {t.tabs.compare}
        </button>
        <button
          onClick={() => setSelectedTab('team')}
          className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all text-sm ${
            selectedTab === 'team'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30'
          }`}
        >
          👥 {t.tabs.team}
        </button>
      </div>

      {/* Trading Calculator Tab */}
      {selectedTab === 'trading' && (
        <div>
          <h4 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">{t.tradingCalc.title}</h4>
          <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-6">{t.tradingCalc.description}</p>

          {/* Input Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border border-emerald-200 dark:border-emerald-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Starting Amount */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t.tradingCalc.startingAmount}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="1000"
                    min="0"
                    step="100"
                  />
                  <span className="absolute right-4 top-3 text-gray-500 dark:text-gray-400 font-semibold">
                    USDT
                  </span>
                </div>
              </div>

              {/* Trading Days */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t.tradingCalc.tradingDays}
                </label>
                <input
                  type="number"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="30"
                  min="1"
                  step="1"
                />
              </div>
            </div>

            {/* Daily Return Rate */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                {t.tradingCalc.dailyReturn}
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setRate('1.3')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    rate === '1.3'
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 shadow-md'
                      : 'border-gray-300 dark:border-gray-600 hover:border-emerald-300 dark:hover:border-emerald-700'
                  }`}
                >
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">1.3%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t.tradingCalc.standard}</div>
                </button>
                <button
                  onClick={() => setRate('1.8')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    rate === '1.8'
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 shadow-md'
                      : 'border-gray-300 dark:border-gray-600 hover:border-emerald-300 dark:hover:border-emerald-700'
                  }`}
                >
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">1.8%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t.tradingCalc.withTeam}</div>
                </button>
              </div>
            </div>
          </div>

          {/* Custom Calculation Result */}
          {principal > 0 && tradingDays > 0 && (
            <>
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg p-6 mb-6 shadow-lg">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-semibold mb-2">{t.tradingCalc.projections}</h4>
                  <div className="text-sm opacity-90">
                    {formatNumber(principal)} USDT × {dailyRate}% × {tradingDays} {language === 'en' ? 'days' : 'ngày'}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-sm opacity-90 mb-1">{t.tradingCalc.balance}</div>
                    <div className="text-2xl font-bold">{formatNumber(customProjection)} USDT</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-sm opacity-90 mb-1">{t.tradingCalc.profit}</div>
                    <div className="text-2xl font-bold">+{formatNumber(customProfit)} USDT</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-sm opacity-90 mb-1">{t.tradingCalc.growth}</div>
                    <div className="text-2xl font-bold">+{formatNumber(customGrowthPercent)}%</div>
                  </div>
                </div>
              </div>

              {/* Growth Chart */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border border-emerald-200 dark:border-emerald-700">
                <h5 className="font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <span>📈</span> {language === 'en' ? 'Balance Growth Over Time' : 'Tăng Trưởng Số Dư Theo Thời Gian'}
                </h5>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart
                    data={(() => {
                      const chartData = [];
                      let balance = principal;
                      for (let day = 0; day <= tradingDays; day++) {
                        chartData.push({
                          day,
                          balance: parseFloat(balance.toFixed(2)),
                          profit: parseFloat((balance - principal).toFixed(2))
                        });
                        balance = balance * (1 + dailyRate / 100);
                      }
                      return chartData;
                    })()}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="day" stroke="#6b7280" label={{ value: language === 'en' ? 'Days' : 'Ngày', position: 'insideBottom', offset: -5 }} />
                    <YAxis stroke="#6b7280" tickFormatter={(value) => `$${formatInteger(value)}`} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                      labelFormatter={(day) => `${language === 'en' ? 'Day' : 'Ngày'} ${day}`}
                      formatter={(value: any, name: string) => {
                        if (name === 'balance') return [`$${formatNumber(value)}`, language === 'en' ? 'Balance' : 'Số Dư'];
                        if (name === 'profit') return [`$${formatNumber(value)}`, language === 'en' ? 'Profit' : 'Lợi Nhuận'];
                        return [value, name];
                      }}
                    />
                    <Area type="monotone" dataKey="balance" stroke="#10b981" fillOpacity={1} fill="url(#colorBalance)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </>
          )}

          {/* Standard Projections */}
          {principal > 0 && (
            <div className="mb-6">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                <span>📈</span> {t.tradingCalc.breakdown}
              </h4>
              <div className="space-y-3">
                {projections.map((projection, idx) => {
                  const projected = calculateGrowth(principal, dailyRate, projection.days);
                  const profit = projected - principal;
                  const growthPercent = ((projected - principal) / principal) * 100;

                  return (
                    <div
                      key={idx}
                      className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 dark:text-gray-100">
                            {projection.label}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {formatNumber(projected)} USDT
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-emerald-600 dark:text-emerald-400 font-bold">
                            +{formatNumber(profit)} USDT
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            +{formatNumber(growthPercent)}%
                          </div>
                        </div>
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
        <div>
          <h4 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">{t.referralCalc.title}</h4>
          <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-6">{t.referralCalc.description}</p>

          {/* Input Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border border-emerald-200 dark:border-emerald-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t.referralCalc.referralAmount}
                </label>
                <select
                  value={referralAmount}
                  onChange={(e) => setReferralAmount(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="500">$500</option>
                  <option value="1000">$1,000</option>
                  <option value="3000">$3,000</option>
                  <option value="5000">$5,000</option>
                  <option value="10000">$10,000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t.referralCalc.numReferrals}
                </label>
                <input
                  type="number"
                  value={numReferrals}
                  onChange={(e) => setNumReferrals(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="1"
                  min="1"
                  step="1"
                />
              </div>
            </div>

            {/* Bonus Structure Table */}
            <div className="mt-6">
              <h5 className="font-bold text-gray-900 dark:text-gray-100 mb-3">{t.referralCalc.bonusStructure}</h5>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                        {language === 'en' ? 'Investment Amount' : 'Số Tiền Đầu Tư'}
                      </th>
                      <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                        {language === 'en' ? 'Your Bonus (Referrer)' : 'Thưởng Của Bạn (Người Giới Thiệu)'}
                      </th>
                      <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                        {language === 'en' ? 'New Investor Bonus' : 'Thưởng Người Đầu Tư'}
                      </th>
                      <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                        {language === 'en' ? 'Your Signals' : 'Tín Hiệu Của Bạn'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className={refAmount >= 500 && refAmount < 1000 ? 'bg-emerald-50 dark:bg-emerald-900/20' : ''}>
                      <td className="px-4 py-2 text-gray-900 dark:text-gray-100">$500 - $999</td>
                      <td className="px-4 py-2 text-green-600 dark:text-green-400 font-bold">$25</td>
                      <td className="px-4 py-2 text-blue-600 dark:text-blue-400">$25</td>
                      <td className="px-4 py-2 text-purple-600 dark:text-purple-400 font-bold">6</td>
                    </tr>
                    <tr className={refAmount >= 1000 ? 'bg-emerald-50 dark:bg-emerald-900/20' : ''}>
                      <td className="px-4 py-2 text-gray-900 dark:text-gray-100">$1,000+</td>
                      <td className="px-4 py-2 text-green-600 dark:text-green-400 font-bold">
                        10% <span className="text-xs opacity-75">({language === 'en' ? 'of investment' : 'của vốn'})</span>
                      </td>
                      <td className="px-4 py-2 text-blue-600 dark:text-blue-400">
                        5% <span className="text-xs opacity-75">({language === 'en' ? 'of investment' : 'của vốn'})</span>
                      </td>
                      <td className="px-4 py-2 text-purple-600 dark:text-purple-400 font-bold">12-16</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded">
                <p className="text-xs text-yellow-800 dark:text-yellow-200">
                  💡 <strong>{language === 'en' ? 'Note:' : 'Lưu ý:'}</strong> {language === 'en'
                    ? 'For $1000+ investments, bonuses are calculated as percentages: You get 10%, the new investor gets 5%.'
                    : 'Với vốn $1000+, thưởng được tính theo tỷ lệ phần trăm: Bạn nhận 10%, người đầu tư mới nhận 5%.'}
                </p>
              </div>
            </div>
          </div>

          {/* Results */}
          {numRefs > 0 && (
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg p-6 mb-6 shadow-lg">
              <h5 className="text-lg font-semibold mb-4">{t.referralCalc.totalEarnings}</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-sm opacity-90 mb-1">{language === 'en' ? 'Direct Bonus' : 'Thưởng Trực Tiếp'}</div>
                  <div className="text-3xl font-bold">${formatInteger(totalRefEarnings)}</div>
                  <div className="text-xs opacity-75 mt-1">
                    {numRefs} × ${formatInteger(refBonus.yourBonus)}
                    {refAmount >= 1000 && (
                      <span className="ml-1">(10%)</span>
                    )}
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-sm opacity-90 mb-1">{language === 'en' ? 'Bonus Signals' : 'Tín Hiệu Thưởng'}</div>
                  <div className="text-3xl font-bold">{totalBonusSignals}</div>
                  <div className="text-xs opacity-75 mt-1">
                    {numRefs} × {refBonus.yourSignals} {language === 'en' ? 'signals' : 'tín hiệu'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bonus Signals Section */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-700 rounded-lg p-6 mb-6">
            <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
              <span>🎁</span> {t.referralCalc.bonusSignals}
            </h5>
            <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
              {t.referralCalc.bonusSignalsDesc}
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h6 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">{t.referralCalc.bonusSchedule}</h6>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {t.referralCalc.signals.map((sig, idx) => (
                  <div key={idx} className="bg-blue-50 dark:bg-blue-900/20 rounded p-2 text-center">
                    <div className="text-xs text-gray-600 dark:text-gray-400">{language === 'en' ? 'Signal' : 'Tín hiệu'} {sig.signal}</div>
                    <div className="font-bold text-blue-900 dark:text-blue-100">{sig.time}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 text-xs text-blue-700 dark:text-blue-300 italic">
              {t.referralCalc.note}
            </div>
          </div>

          {/* Unlock 3rd Signal */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-700 rounded-lg p-6">
            <h5 className="font-bold text-amber-900 dark:text-amber-100 mb-3 flex items-center gap-2">
              <span>🔓</span> {t.referralCalc.unlockThirdSignal}
            </h5>
            <p className="text-sm text-amber-800 dark:text-amber-200">
              {t.referralCalc.unlockDesc}
            </p>
          </div>
        </div>
      )}

      {/* 30-Day Projection Table Tab */}
      {selectedTab === 'projection' && (
        <div>
          <h4 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">{t.projectionTable.title}</h4>
          <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-6">{t.projectionTable.description}</p>

          {/* Rate Selection */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6 border border-emerald-200 dark:border-emerald-700">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              {t.projectionTable.selectRate}
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setRate('1.3')}
                className={`p-3 rounded-lg border-2 transition-all ${
                  rate === '1.3'
                    ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30'
                    : 'border-gray-300 dark:border-gray-600 hover:border-emerald-300'
                }`}
              >
                <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">1.3%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">2 {language === 'en' ? 'signals' : 'tín hiệu'}</div>
              </button>
              <button
                onClick={() => setRate('1.8')}
                className={`p-3 rounded-lg border-2 transition-all ${
                  rate === '1.8'
                    ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30'
                    : 'border-gray-300 dark:border-gray-600 hover:border-emerald-300'
                }`}
              >
                <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">1.8%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">3 {language === 'en' ? 'signals' : 'tín hiệu'}</div>
              </button>
            </div>
          </div>

          {principal > 0 && doubleDay > 0 && (
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg p-4 mb-4 text-center">
              <div className="text-sm opacity-90">{t.projectionTable.doubleDay}</div>
              <div className="text-3xl font-bold">{language === 'en' ? 'Day' : 'Ngày'} {doubleDay}</div>
              <div className="text-sm opacity-75 mt-1">
                ${formatInteger(principal)} → ${formatInteger(principal * 2)}
              </div>
            </div>
          )}

          {/* 30-Day Chart */}
          {principal > 0 && thirtyDayTable.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border border-emerald-200 dark:border-emerald-700">
              <h5 className="font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                <span>📊</span> {language === 'en' ? '30-Day Balance Progression' : 'Tiến Trình Số Dư 30 Ngày'}
              </h5>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart
                  data={thirtyDayTable}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="day"
                    stroke="#6b7280"
                    label={{ value: language === 'en' ? 'Day' : 'Ngày', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis stroke="#6b7280" tickFormatter={(value) => `$${formatInteger(value)}`} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                    labelFormatter={(day) => `${language === 'en' ? 'Day' : 'Ngày'} ${day}`}
                    formatter={(value: any, name: string) => {
                      if (name === 'balance') return [`$${formatNumber(value)}`, language === 'en' ? 'Balance' : 'Số Dư'];
                      if (name === 'totalProfit') return [`$${formatNumber(value)}`, language === 'en' ? 'Total Profit' : 'Tổng Lợi Nhuận'];
                      return [value, name];
                    }}
                  />
                  <Legend
                    formatter={(value) => {
                      if (value === 'balance') return language === 'en' ? 'Balance' : 'Số Dư';
                      if (value === 'totalProfit') return language === 'en' ? 'Total Profit' : 'Tổng Lợi Nhuận';
                      return value;
                    }}
                  />
                  <Line type="monotone" dataKey="balance" stroke="#10b981" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="totalProfit" stroke="#8b5cf6" strokeWidth={2} dot={false} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Table */}
          {principal > 0 && thirtyDayTable.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-emerald-200 dark:border-emerald-700">
              <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
                <table className="w-full text-sm">
                  <thead className="bg-emerald-600 text-white sticky top-0">
                    <tr>
                      <th className="px-4 py-3 text-left">{t.projectionTable.day}</th>
                      <th className="px-4 py-3 text-right">{t.projectionTable.balance}</th>
                      <th className="px-4 py-3 text-right">{t.projectionTable.dailyProfit}</th>
                      <th className="px-4 py-3 text-right">{t.projectionTable.totalProfit}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {thirtyDayTable.map((row, idx) => (
                      <tr
                        key={idx}
                        className={`${
                          row.day === doubleDay
                            ? 'bg-yellow-100 dark:bg-yellow-900/30 font-bold'
                            : idx % 2 === 0
                            ? 'bg-gray-50 dark:bg-gray-700/50'
                            : 'bg-white dark:bg-gray-800'
                        }`}
                      >
                        <td className="px-4 py-2 text-gray-900 dark:text-gray-100">{row.day}</td>
                        <td className="px-4 py-2 text-right text-gray-900 dark:text-gray-100">
                          ${formatNumber(row.balance)}
                        </td>
                        <td className="px-4 py-2 text-right text-green-600 dark:text-green-400">
                          +${formatNumber(row.dailyProfit)}
                        </td>
                        <td className="px-4 py-2 text-right text-emerald-600 dark:text-emerald-400 font-semibold">
                          +${formatNumber(row.totalProfit)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {principal === 0 && (
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                {language === 'en'
                  ? 'Enter a starting amount in the Trading Calculator tab to see 30-day projections'
                  : 'Nhập số tiền bắt đầu trong tab Máy Tính Giao Dịch để xem dự báo 30 ngày'}
              </p>
            </div>
          )}

          <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              💡 {t.projectionTable.note}
            </p>
          </div>
        </div>
      )}

      {/* Dynamic vs Static Comparison Tab */}
      {selectedTab === 'comparison' && (
        <div>
          <h4 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">{t.comparison.title}</h4>
          <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-6">{t.comparison.description}</p>

          {/* Explanation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-lg p-6">
              <h5 className="font-bold text-lg mb-2">💹 {t.comparison.dynamic}</h5>
              <p className="text-sm opacity-90">{t.comparison.dynamicDesc}</p>
            </div>
            <div className="bg-gradient-to-br from-gray-500 to-slate-600 text-white rounded-lg p-6">
              <h5 className="font-bold text-lg mb-2">📊 {t.comparison.static}</h5>
              <p className="text-sm opacity-90">{t.comparison.staticDesc}</p>
            </div>
          </div>

          {/* Comparison Chart */}
          {principal > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border border-emerald-200 dark:border-emerald-700">
              <h5 className="font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                <span>⚖️</span> {language === 'en' ? 'Dynamic vs Static Comparison' : 'So Sánh Dynamic vs Static'}
              </h5>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart
                  data={comparisons}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="days"
                    stroke="#6b7280"
                    label={{ value: language === 'en' ? 'Days' : 'Ngày', position: 'insideBottom', offset: -5 }}
                    tickFormatter={(value) => `${value}d`}
                  />
                  <YAxis stroke="#6b7280" tickFormatter={(value) => `$${formatInteger(value)}`} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                    labelFormatter={(days) => `${days} ${language === 'en' ? 'Days' : 'Ngày'}`}
                    formatter={(value: any, name: string) => {
                      if (name === 'dynamic') return [`$${formatNumber(value)}`, language === 'en' ? 'Dynamic (Compounding)' : 'Dynamic (Lãi Kép)'];
                      if (name === 'static') return [`$${formatNumber(value)}`, language === 'en' ? 'Static (Simple)' : 'Static (Lãi Đơn)'];
                      return [value, name];
                    }}
                  />
                  <Legend
                    formatter={(value) => {
                      if (value === 'dynamic') return language === 'en' ? 'Dynamic (Compounding)' : 'Dynamic (Lãi Kép)';
                      if (value === 'static') return language === 'en' ? 'Static (Simple)' : 'Static (Lãi Đơn)';
                      return value;
                    }}
                  />
                  <Bar dataKey="dynamic" fill="#10b981" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="static" fill="#6b7280" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Comparison Table */}
          {principal > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-emerald-200 dark:border-emerald-700 mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-emerald-600 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">{t.comparison.afterDays}</th>
                      <th className="px-4 py-3 text-right">{t.comparison.dynamic}</th>
                      <th className="px-4 py-3 text-right">{t.comparison.static}</th>
                      <th className="px-4 py-3 text-right">{t.comparison.difference}</th>
                      <th className="px-4 py-3 text-right">{t.comparison.advantage}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {comparisons.map((comp, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700/50' : 'bg-white dark:bg-gray-800'}>
                        <td className="px-4 py-3 text-gray-900 dark:text-gray-100 font-semibold">
                          {comp.days} {language === 'en' ? 'days' : 'ngày'}
                        </td>
                        <td className="px-4 py-3 text-right text-green-600 dark:text-green-400 font-bold">
                          ${formatNumber(comp.dynamic)}
                        </td>
                        <td className="px-4 py-3 text-right text-gray-600 dark:text-gray-400">
                          ${formatNumber(comp.static)}
                        </td>
                        <td className="px-4 py-3 text-right text-emerald-600 dark:text-emerald-400 font-semibold">
                          +${formatNumber(comp.difference)}
                        </td>
                        <td className="px-4 py-3 text-right text-purple-600 dark:text-purple-400 font-bold">
                          +{formatNumber(comp.advantage)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {principal === 0 && (
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                {language === 'en'
                  ? 'Enter a starting amount in the Trading Calculator tab to see dynamic vs static comparison'
                  : 'Nhập số tiền bắt đầu trong tab Máy Tính Giao Dịch để xem so sánh dynamic vs static'}
              </p>
            </div>
          )}

          {/* Compounding Power Explanation */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-700 rounded-lg p-6">
            <h5 className="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
              <span>⚡</span> {t.comparison.compoundingPower}
            </h5>
            <p className="text-sm text-purple-800 dark:text-purple-200">
              {t.comparison.compoundingExplain}
            </p>
          </div>
        </div>
      )}

      {/* Scenario Comparison Tab */}
      {selectedTab === 'compare' && (
        <div>
          <h4 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">
            {language === 'en' ? 'Compare Investment Scenarios' : 'So Sánh Các Kịch Bản Đầu Tư'}
          </h4>
          <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-6">
            {language === 'en'
              ? 'Compare up to 3 different investment amounts side-by-side to make informed decisions'
              : 'So sánh tối đa 3 số tiền đầu tư khác nhau cùng lúc để đưa ra quyết định sáng suốt'}
          </p>

          {/* Scenario Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { amount: scenario1Amount, setAmount: setScenario1Amount, label: language === 'en' ? 'Scenario 1' : 'Kịch Bản 1', color: 'blue' },
              { amount: scenario2Amount, setAmount: setScenario2Amount, label: language === 'en' ? 'Scenario 2' : 'Kịch Bản 2', color: 'purple' },
              { amount: scenario3Amount, setAmount: setScenario3Amount, label: language === 'en' ? 'Scenario 3' : 'Kịch Bản 3', color: 'pink' }
            ].map((scenario, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-4 border-2 border-emerald-200 dark:border-emerald-700">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  {scenario.label}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={scenario.amount}
                    onChange={(e) => scenario.setAmount(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-lg font-bold"
                    placeholder="1000"
                    min="0"
                    step="100"
                  />
                  <span className="absolute right-4 top-3 text-gray-500 dark:text-gray-400 font-semibold">
                    USDT
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Results */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border border-emerald-200 dark:border-emerald-700">
            <h5 className="font-bold text-gray-900 dark:text-gray-100 mb-4">
              {language === 'en' ? '30-Day Projections Comparison' : 'So Sánh Dự Báo 30 Ngày'}
            </h5>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-4 py-3 text-left text-gray-700 dark:text-gray-300">
                      {language === 'en' ? 'Metric' : 'Chỉ Số'}
                    </th>
                    <th className="px-4 py-3 text-right text-blue-600 dark:text-blue-400">
                      {language === 'en' ? 'Scenario 1' : 'Kịch Bản 1'}
                    </th>
                    <th className="px-4 py-3 text-right text-purple-600 dark:text-purple-400">
                      {language === 'en' ? 'Scenario 2' : 'Kịch Bản 2'}
                    </th>
                    <th className="px-4 py-3 text-right text-pink-600 dark:text-pink-400">
                      {language === 'en' ? 'Scenario 3' : 'Kịch Bản 3'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {(() => {
                    const scenarios = [
                      { amount: parseFloat(scenario1Amount) || 0, color: 'blue' },
                      { amount: parseFloat(scenario2Amount) || 0, color: 'purple' },
                      { amount: parseFloat(scenario3Amount) || 0, color: 'pink' }
                    ];

                    const metrics = [
                      { label: language === 'en' ? 'Starting Amount' : 'Số Tiền Ban Đầu', days: 0, format: 'currency' },
                      { label: language === 'en' ? 'After 7 Days' : 'Sau 7 Ngày', days: 7, format: 'balance' },
                      { label: language === 'en' ? 'After 30 Days' : 'Sau 30 Ngày', days: 30, format: 'balance' },
                      { label: language === 'en' ? 'After 60 Days' : 'Sau 60 Ngày', days: 60, format: 'balance' },
                      { label: language === 'en' ? '30-Day Profit' : 'Lợi Nhuận 30 Ngày', days: 30, format: 'profit' },
                      { label: language === 'en' ? 'Days to Double (2x)' : 'Số Ngày Nhân Đôi', days: 0, format: 'double' }
                    ];

                    return metrics.map((metric, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700/50'}>
                        <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                          {metric.label}
                        </td>
                        {scenarios.map((scenario, sidx) => {
                          let value = '';
                          if (metric.format === 'currency') {
                            value = `$${formatInteger(scenario.amount)}`;
                          } else if (metric.format === 'balance') {
                            const balance = calculateGrowth(scenario.amount, dailyRate, metric.days);
                            value = `$${formatNumber(balance)}`;
                          } else if (metric.format === 'profit') {
                            const balance = calculateGrowth(scenario.amount, dailyRate, metric.days);
                            const profit = balance - scenario.amount;
                            value = `+$${formatNumber(profit)}`;
                          } else if (metric.format === 'double') {
                            let balance = scenario.amount;
                            let day = 0;
                            while (balance < scenario.amount * 2 && day < 365) {
                              day++;
                              balance = balance * (1 + dailyRate / 100);
                            }
                            value = `${day} ${language === 'en' ? 'days' : 'ngày'}`;
                          }

                          const colorClass = sidx === 0 ? 'text-blue-600 dark:text-blue-400' : sidx === 1 ? 'text-purple-600 dark:text-purple-400' : 'text-pink-600 dark:text-pink-400';

                          return (
                            <td key={sidx} className={`px-4 py-3 text-right font-bold ${colorClass}`}>
                              {value}
                            </td>
                          );
                        })}
                      </tr>
                    ));
                  })()}
                </tbody>
              </table>
            </div>
          </div>

          {/* Comparison Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border border-emerald-200 dark:border-emerald-700">
            <h5 className="font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
              <span>📊</span> {language === 'en' ? 'Visual Comparison' : 'So Sánh Trực Quan'}
            </h5>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart
                data={(() => {
                  const chartData = [];
                  const scenarios = [
                    parseFloat(scenario1Amount) || 0,
                    parseFloat(scenario2Amount) || 0,
                    parseFloat(scenario3Amount) || 0
                  ];

                  for (let day = 0; day <= 60; day++) {
                    chartData.push({
                      day,
                      scenario1: calculateGrowth(scenarios[0], dailyRate, day),
                      scenario2: calculateGrowth(scenarios[1], dailyRate, day),
                      scenario3: calculateGrowth(scenarios[2], dailyRate, day)
                    });
                  }
                  return chartData;
                })()}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="day"
                  stroke="#6b7280"
                  label={{ value: language === 'en' ? 'Days' : 'Ngày', position: 'insideBottom', offset: -5 }}
                />
                <YAxis stroke="#6b7280" tickFormatter={(value) => `$${formatInteger(value)}`} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                  labelFormatter={(day) => `${language === 'en' ? 'Day' : 'Ngày'} ${day}`}
                  formatter={(value: any, name: string) => {
                    if (name === 'scenario1') return [`$${formatNumber(value)}`, language === 'en' ? 'Scenario 1' : 'Kịch Bản 1'];
                    if (name === 'scenario2') return [`$${formatNumber(value)}`, language === 'en' ? 'Scenario 2' : 'Kịch Bản 2'];
                    if (name === 'scenario3') return [`$${formatNumber(value)}`, language === 'en' ? 'Scenario 3' : 'Kịch Bản 3'];
                    return [value, name];
                  }}
                />
                <Legend
                  formatter={(value) => {
                    if (value === 'scenario1') return language === 'en' ? 'Scenario 1' : 'Kịch Bản 1';
                    if (value === 'scenario2') return language === 'en' ? 'Scenario 2' : 'Kịch Bản 2';
                    if (value === 'scenario3') return language === 'en' ? 'Scenario 3' : 'Kịch Bản 3';
                    return value;
                  }}
                />
                <Line type="monotone" dataKey="scenario1" stroke="#3b82f6" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="scenario2" stroke="#a855f7" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="scenario3" stroke="#ec4899" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Key Insights */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-2 border-indigo-200 dark:border-indigo-700 rounded-lg p-6">
            <h5 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3 flex items-center gap-2">
              <span>💡</span> {language === 'en' ? 'Key Insights' : 'Thông Tin Chính'}
            </h5>
            <ul className="space-y-2 text-sm text-indigo-800 dark:text-indigo-200">
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 dark:text-indigo-400 mt-0.5">✓</span>
                <span>
                  {language === 'en'
                    ? 'Higher starting amounts lead to significantly larger absolute profits, even with the same percentage returns'
                    : 'Số tiền ban đầu cao hơn dẫn đến lợi nhuận tuyệt đối lớn hơn đáng kể, ngay cả với tỷ lệ lợi nhuận giống nhau'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 dark:text-indigo-400 mt-0.5">✓</span>
                <span>
                  {language === 'en'
                    ? 'The time to double (2x) your investment remains the same regardless of starting amount due to compounding'
                    : 'Thời gian để nhân đôi (2x) vốn đầu tư giữ nguyên bất kể số tiền ban đầu nhờ lãi kép'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 dark:text-indigo-400 mt-0.5">✓</span>
                <span>
                  {language === 'en'
                    ? 'Consider your financial goals and risk tolerance when choosing your investment amount'
                    : 'Xem xét mục tiêu tài chính và khả năng chấp nhận rủi ro khi chọn số tiền đầu tư'}
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Team Builder Tab */}
      {selectedTab === 'team' && (
        <div>
          <h4 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">
            {language === 'en' ? 'Team Building Calculator' : 'Máy Tính Xây Dựng Team'}
          </h4>
          <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-6">
            {language === 'en'
              ? 'Calculate your potential earnings from building a multi-level team (F1, F2, F3)'
              : 'Tính toán tiềm năng thu nhập từ xây dựng team nhiều cấp (F1, F2, F3)'}
          </p>

          {/* Team Structure Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Team Size Inputs */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-2 border-emerald-200 dark:border-emerald-700">
              <h5 className="font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                <span>👥</span> {language === 'en' ? 'Team Structure' : 'Cấu Trúc Team'}
              </h5>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {language === 'en' ? 'F1 (Direct Referrals)' : 'F1 (Người Giới Thiệu Trực Tiếp)'}
                  </label>
                  <input
                    type="number"
                    value={teamF1Count}
                    onChange={(e) => setTeamF1Count(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="5"
                    min="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {language === 'en' ? 'F2 (Your F1\'s Referrals)' : 'F2 (Giới Thiệu Của F1)'}
                  </label>
                  <input
                    type="number"
                    value={teamF2Count}
                    onChange={(e) => setTeamF2Count(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="25"
                    min="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {language === 'en' ? 'F3 (Your F2\'s Referrals)' : 'F3 (Giới Thiệu Của F2)'}
                  </label>
                  <input
                    type="number"
                    value={teamF3Count}
                    onChange={(e) => setTeamF3Count(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="125"
                    min="0"
                  />
                </div>
              </div>
            </div>

            {/* Average Investment */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-2 border-emerald-200 dark:border-emerald-700">
              <h5 className="font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                <span>💰</span> {language === 'en' ? 'Average Investment' : 'Vốn Trung Bình'}
              </h5>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {language === 'en' ? 'Avg Team Member Investment' : 'Vốn Trung Bình Mỗi Thành Viên'}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={teamAvgInvestment}
                    onChange={(e) => setTeamAvgInvestment(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-lg font-bold"
                    placeholder="1000"
                    min="0"
                    step="100"
                  />
                  <span className="absolute right-4 top-3 text-gray-500 dark:text-gray-400 font-semibold">
                    USDT
                  </span>
                </div>
              </div>

              {/* Visual Team Pyramid */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-4 border border-indigo-200 dark:border-indigo-700">
                <div className="text-center space-y-3">
                  <div className="flex items-center justify-center">
                    <div className="bg-indigo-600 dark:bg-indigo-700 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                      YOU
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(Math.min(parseInt(teamF1Count) || 0, 5))].map((_, i) => (
                      <div key={i} className="bg-blue-500 dark:bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                        F1
                      </div>
                    ))}
                    {(parseInt(teamF1Count) || 0) > 5 && (
                      <div className="text-xs text-gray-600 dark:text-gray-400 ml-1">
                        +{(parseInt(teamF1Count) || 0) - 5}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(Math.min(parseInt(teamF2Count) || 0, 8))].map((_, i) => (
                      <div key={i} className="bg-purple-500 dark:bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        F2
                      </div>
                    ))}
                    {(parseInt(teamF2Count) || 0) > 8 && (
                      <div className="text-xs text-gray-600 dark:text-gray-400 ml-1">
                        +{(parseInt(teamF2Count) || 0) - 8}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(Math.min(parseInt(teamF3Count) || 0, 12))].map((_, i) => (
                      <div key={i} className="bg-pink-500 dark:bg-pink-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
                        F3
                      </div>
                    ))}
                    {(parseInt(teamF3Count) || 0) > 12 && (
                      <div className="text-xs text-gray-600 dark:text-gray-400 ml-1">
                        +{(parseInt(teamF3Count) || 0) - 12}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Earnings Summary */}
          {(() => {
            const f1 = parseInt(teamF1Count) || 0;
            const f2 = parseInt(teamF2Count) || 0;
            const f3 = parseInt(teamF3Count) || 0;
            const avgInv = parseFloat(teamAvgInvestment) || 0;

            // Calculate referral bonuses (using the corrected formula)
            const f1Bonus = avgInv >= 1000 ? avgInv * 0.10 : (avgInv >= 500 ? 25 : 0);
            const f2Bonus = avgInv >= 1000 ? avgInv * 0.05 : (avgInv >= 500 ? 25 : 0); // F2 gets what new investor would get
            const f3Bonus = avgInv >= 1000 ? avgInv * 0.025 : (avgInv >= 500 ? 12.5 : 0); // F3 gets half of F2

            const totalF1Earnings = f1 * f1Bonus;
            const totalF2Earnings = f2 * f2Bonus;
            const totalF3Earnings = f3 * f3Bonus;
            const totalReferralBonus = totalF1Earnings + totalF2Earnings + totalF3Earnings;

            const totalTeamSize = f1 + f2 + f3;
            const totalTeamVolume = totalTeamSize * avgInv;

            // Calculate bonus signals
            const f1Signals = avgInv >= 1000 ? 12 : (avgInv >= 500 ? 6 : 0);
            const totalBonusSignals = f1 * f1Signals;

            return totalTeamSize > 0 ? (
              <>
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg p-6 mb-6 shadow-lg">
                  <h5 className="text-lg font-semibold mb-4">
                    {language === 'en' ? 'Your Team Earnings Potential' : 'Tiềm Năng Thu Nhập Từ Team'}
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-sm opacity-90 mb-1">{language === 'en' ? 'Total Team Size' : 'Tổng Thành Viên'}</div>
                      <div className="text-3xl font-bold">{totalTeamSize}</div>
                      <div className="text-xs opacity-75 mt-1">
                        F1:{f1} | F2:{f2} | F3:{f3}
                      </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-sm opacity-90 mb-1">{language === 'en' ? 'Team Volume' : 'Tổng Vốn Team'}</div>
                      <div className="text-3xl font-bold">${formatInteger(totalTeamVolume)}</div>
                      <div className="text-xs opacity-75 mt-1">
                        {totalTeamSize} × ${formatInteger(avgInv)}
                      </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-sm opacity-90 mb-1">{language === 'en' ? 'Referral Bonuses' : 'Thưởng Giới Thiệu'}</div>
                      <div className="text-3xl font-bold">${formatInteger(totalReferralBonus)}</div>
                      <div className="text-xs opacity-75 mt-1">
                        {language === 'en' ? 'From all levels' : 'Từ tất cả cấp'}
                      </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-sm opacity-90 mb-1">{language === 'en' ? 'Bonus Signals' : 'Tín Hiệu Thưởng'}</div>
                      <div className="text-3xl font-bold">{totalBonusSignals}</div>
                      <div className="text-xs opacity-75 mt-1">
                        {language === 'en' ? 'From F1 only' : 'Chỉ từ F1'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Earnings Breakdown */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border border-emerald-200 dark:border-emerald-700">
                  <h5 className="font-bold text-gray-900 dark:text-gray-100 mb-4">
                    {language === 'en' ? 'Earnings Breakdown by Level' : 'Phân Tích Thu Nhập Theo Cấp'}
                  </h5>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                          <th className="px-4 py-3 text-left text-gray-700 dark:text-gray-300">
                            {language === 'en' ? 'Level' : 'Cấp'}
                          </th>
                          <th className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">
                            {language === 'en' ? 'People' : 'Người'}
                          </th>
                          <th className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">
                            {language === 'en' ? 'Per Person' : 'Mỗi Người'}
                          </th>
                          <th className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">
                            {language === 'en' ? 'Total Bonus' : 'Tổng Thưởng'}
                          </th>
                          <th className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">
                            {language === 'en' ? '% of Total' : '% Tổng'}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        <tr className="bg-blue-50 dark:bg-blue-900/20">
                          <td className="px-4 py-3 font-semibold text-blue-900 dark:text-blue-100">
                            F1 ({language === 'en' ? 'Direct' : 'Trực Tiếp'})
                          </td>
                          <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{f1}</td>
                          <td className="px-4 py-3 text-right text-blue-600 dark:text-blue-400 font-bold">
                            ${formatNumber(f1Bonus)}
                          </td>
                          <td className="px-4 py-3 text-right text-green-600 dark:text-green-400 font-bold">
                            ${formatInteger(totalF1Earnings)}
                          </td>
                          <td className="px-4 py-3 text-right text-gray-600 dark:text-gray-400">
                            {totalReferralBonus > 0 ? formatNumber((totalF1Earnings / totalReferralBonus) * 100) : 0}%
                          </td>
                        </tr>
                        <tr className="bg-purple-50 dark:bg-purple-900/20">
                          <td className="px-4 py-3 font-semibold text-purple-900 dark:text-purple-100">
                            F2 ({language === 'en' ? 'Indirect' : 'Gián Tiếp'})
                          </td>
                          <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{f2}</td>
                          <td className="px-4 py-3 text-right text-purple-600 dark:text-purple-400 font-bold">
                            ${formatNumber(f2Bonus)}
                          </td>
                          <td className="px-4 py-3 text-right text-green-600 dark:text-green-400 font-bold">
                            ${formatInteger(totalF2Earnings)}
                          </td>
                          <td className="px-4 py-3 text-right text-gray-600 dark:text-gray-400">
                            {totalReferralBonus > 0 ? formatNumber((totalF2Earnings / totalReferralBonus) * 100) : 0}%
                          </td>
                        </tr>
                        <tr className="bg-pink-50 dark:bg-pink-900/20">
                          <td className="px-4 py-3 font-semibold text-pink-900 dark:text-pink-100">
                            F3 ({language === 'en' ? '3rd Level' : 'Cấp 3'})
                          </td>
                          <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{f3}</td>
                          <td className="px-4 py-3 text-right text-pink-600 dark:text-pink-400 font-bold">
                            ${formatNumber(f3Bonus)}
                          </td>
                          <td className="px-4 py-3 text-right text-green-600 dark:text-green-400 font-bold">
                            ${formatInteger(totalF3Earnings)}
                          </td>
                          <td className="px-4 py-3 text-right text-gray-600 dark:text-gray-400">
                            {totalReferralBonus > 0 ? formatNumber((totalF3Earnings / totalReferralBonus) * 100) : 0}%
                          </td>
                        </tr>
                        <tr className="bg-emerald-100 dark:bg-emerald-900/30 font-bold">
                          <td className="px-4 py-3 text-emerald-900 dark:text-emerald-100">
                            {language === 'en' ? 'TOTAL' : 'TỔNG CỘNG'}
                          </td>
                          <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">{totalTeamSize}</td>
                          <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">-</td>
                          <td className="px-4 py-3 text-right text-emerald-600 dark:text-emerald-400 text-lg">
                            ${formatInteger(totalReferralBonus)}
                          </td>
                          <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">100%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Team Growth Projection Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 border border-emerald-200 dark:border-emerald-700">
                  <h5 className="font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                    <span>📊</span> {language === 'en' ? 'Team Earnings vs Personal Trading' : 'Thu Nhập Team vs Giao Dịch Cá Nhân'}
                  </h5>
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart
                      data={[
                        {
                          name: language === 'en' ? 'Personal Trading\n(30 days)' : 'Giao Dịch\nCá Nhân',
                          value: calculateGrowth(avgInv, dailyRate, 30) - avgInv,
                          type: 'personal'
                        },
                        {
                          name: language === 'en' ? 'Referral\nBonuses' : 'Thưởng\nGiới Thiệu',
                          value: totalReferralBonus,
                          type: 'referral'
                        },
                        {
                          name: language === 'en' ? 'Combined\nTotal' : 'Tổng\nCộng',
                          value: (calculateGrowth(avgInv, dailyRate, 30) - avgInv) + totalReferralBonus,
                          type: 'combined'
                        }
                      ]}
                      margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="name" stroke="#6b7280" angle={0} textAnchor="middle" height={80} />
                      <YAxis stroke="#6b7280" tickFormatter={(value) => `$${formatInteger(value)}`} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                        formatter={(value: any) => [`$${formatNumber(value)}`, language === 'en' ? 'Earnings' : 'Thu Nhập']}
                      />
                      <Bar dataKey="value" fill="#10b981" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Power of Duplication */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-700 rounded-lg p-6">
                  <h5 className="font-bold text-amber-900 dark:text-amber-100 mb-3 flex items-center gap-2">
                    <span>⚡</span> {language === 'en' ? 'The Power of Duplication' : 'Sức Mạnh Nhân Bản'}
                  </h5>
                  <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-200">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 dark:text-amber-400 mt-0.5">✓</span>
                      <span>
                        {language === 'en'
                          ? `If each F1 brings just 5 people (F2), you'll have ${f1 * 5} people in F2`
                          : `Nếu mỗi F1 giới thiệu 5 người (F2), bạn sẽ có ${f1 * 5} người ở F2`}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 dark:text-amber-400 mt-0.5">✓</span>
                      <span>
                        {language === 'en'
                          ? 'Team building creates passive income streams that compound over time'
                          : 'Xây dựng team tạo dòng thu nhập thụ động tăng theo thời gian'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 dark:text-amber-400 mt-0.5">✓</span>
                      <span>
                        {language === 'en'
                          ? 'Your team members earn while you earn - true win-win collaboration'
                          : 'Thành viên team kiếm tiền trong khi bạn cũng kiếm - hợp tác cùng thắng thực sự'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 dark:text-amber-400 mt-0.5">✓</span>
                      <span>
                        {language === 'en'
                          ? 'Focus on helping your F1 succeed, and they will build your F2 and F3'
                          : 'Tập trung giúp F1 thành công, họ sẽ xây dựng F2 và F3 cho bạn'}
                      </span>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  {language === 'en'
                    ? 'Enter your team structure above to see earnings projections'
                    : 'Nhập cấu trúc team ở trên để xem dự báo thu nhập'}
                </p>
              </div>
            );
          })()}
        </div>
      )}

      {/* Bottom Info Sections - Always Visible */}
      <div className="mt-8 pt-6 border-t-2 border-emerald-200 dark:border-emerald-700">
        {/* Critical Success Factors */}
        <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-700 rounded-lg p-6 mb-6">
          <h5 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
            <span>🚨</span> {t.notes}
          </h5>
          <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
            {t.notesList.map((note, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-red-600 dark:text-red-400 mt-0.5">⚠️</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Assumptions */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
          <h5 className="font-bold text-gray-900 dark:text-gray-100 mb-3">{t.assumptions}</h5>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {t.assumptionsList.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="text-center">
          <p className="text-xs text-gray-600 dark:text-gray-400 italic">
            {t.disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
}
