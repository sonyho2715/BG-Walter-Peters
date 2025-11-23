'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, TrendingUp, Shield, Users, Clock, DollarSign, Target, CheckCircle2, Star, BarChart3, Zap, Lock, Award, Globe, ChevronDown, Play, Calculator } from 'lucide-react';
import AuthModal from '@/components/AuthModal';
import { checkAuth } from '@/app/actions/auth';

function InteractiveCalculator({ onGetStarted }: { onGetStarted: () => void }) {
  const [investment, setInvestment] = useState(1000);
  const [days, setDays] = useState(30);
  const [dailyRate] = useState(1.3);
  const [compounding, setCompounding] = useState(true);

  const calculateReturns = () => {
    if (compounding) {
      // Compound interest formula: A = P(1 + r)^t
      const rate = dailyRate / 100;
      const finalAmount = investment * Math.pow(1 + rate, days);
      return {
        final: finalAmount,
        profit: finalAmount - investment,
        roi: ((finalAmount - investment) / investment) * 100
      };
    } else {
      // Simple interest: A = P(1 + rt)
      const profit = investment * (dailyRate / 100) * days;
      return {
        final: investment + profit,
        profit: profit,
        roi: (profit / investment) * 100
      };
    }
  };

  const results = calculateReturns();

  return (
    <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-10 rounded-3xl border border-white/10 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">Earnings Calculator</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Controls */}
          <div className="space-y-8">
            {/* Investment Amount */}
            <div>
              <div className="flex justify-between mb-4">
                <label className="text-gray-300 font-semibold">Initial Investment</label>
                <span className="text-indigo-400 font-bold text-lg">
                  ${investment.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="10000"
                step="100"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, rgb(99, 102, 241) 0%, rgb(168, 85, 247) ${((investment - 500) / (10000 - 500)) * 100}%, rgb(51, 65, 85) ${((investment - 500) / (10000 - 500)) * 100}%, rgb(51, 65, 85) 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>$500</span>
                <span>$10,000</span>
              </div>
            </div>

            {/* Time Period */}
            <div>
              <div className="flex justify-between mb-4">
                <label className="text-gray-300 font-semibold">Time Period</label>
                <span className="text-purple-400 font-bold text-lg">
                  {days} days
                </span>
              </div>
              <input
                type="range"
                min="7"
                max="365"
                step="1"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(236, 72, 153) ${((days - 7) / (365 - 7)) * 100}%, rgb(51, 65, 85) ${((days - 7) / (365 - 7)) * 100}%, rgb(51, 65, 85) 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>1 week</span>
                <span>1 year</span>
              </div>
            </div>

            {/* Daily Rate Display */}
            <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm p-4 rounded-2xl border border-indigo-500/30">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 font-semibold">Daily Return Rate</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {dailyRate}%
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-2">Based on 99.6% success rate</p>
            </div>

            {/* Compounding Toggle */}
            <div className="flex items-center justify-between bg-slate-700/30 p-4 rounded-2xl">
              <div>
                <div className="text-white font-semibold">Compound Returns</div>
                <div className="text-gray-400 text-sm">Reinvest profits daily</div>
              </div>
              <button
                onClick={() => setCompounding(!compounding)}
                className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                  compounding ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-slate-600'
                }`}
              >
                <div
                  className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-all duration-300 ${
                    compounding ? 'left-7' : 'left-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Right: Results */}
          <div className="flex flex-col justify-center">
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm p-8 rounded-3xl border border-indigo-500/30">
              <div className="text-center mb-6">
                <div className="text-gray-400 text-sm mb-2">Projected Balance After {days} Days</div>
                <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
                  ${results.final.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-slate-700/30 rounded-2xl">
                  <span className="text-gray-300">Total Profit</span>
                  <span className="text-2xl font-bold text-green-400">
                    +${results.profit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>

                <div className="flex justify-between items-center p-4 bg-slate-700/30 rounded-2xl">
                  <span className="text-gray-300">ROI</span>
                  <span className="text-2xl font-bold text-indigo-400">
                    {results.roi.toFixed(2)}%
                  </span>
                </div>

                <div className="flex justify-between items-center p-4 bg-slate-700/30 rounded-2xl">
                  <span className="text-gray-300">Strategy</span>
                  <span className="text-sm font-semibold text-purple-400">
                    {compounding ? 'Compounding' : 'Simple Returns'}
                  </span>
                </div>
              </div>

              <button
                onClick={onGetStarted}
                className="mt-8 w-full block text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105"
              >
                Start Trading Now
              </button>
            </div>

            <p className="text-gray-500 text-xs text-center mt-4">
              * Projections based on historical {dailyRate}% daily returns. Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [visibleStats, setVisibleStats] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'register' | 'login'>('register');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  // Check if user is logged in
  useEffect(() => {
    checkAuth().then((result) => {
      setIsLoggedIn(result.isLoggedIn);
      setAuthLoading(false);
    });
  }, []);

  // Animated counter
  const [stats, setStats] = useState({
    successRate: 0,
    members: 0,
    countries: 0,
    dailyReturn: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Check if stats are in viewport
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible && !visibleStats) {
          setVisibleStats(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleStats]);

  // Animate stats when visible
  useEffect(() => {
    if (visibleStats) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setStats({
          successRate: Math.min(99.6, progress * 99.6),
          members: Math.min(400000, progress * 400000),
          countries: Math.min(100, progress * 100),
          dailyReturn: Math.min(1.3, progress * 1.3)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [visibleStats]);

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Win 99.6% of Your Trades',
      description: 'Get exact entry and exit points delivered straight to your phone. Just copy, paste, and profit. No guessing, no analysis needed.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Your Money Stays Safe',
      description: 'Sleep soundly knowing your funds are protected with the same security banks use. We never touch your money.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Earn While You Share',
      description: 'Invite friends and earn generous commissions on their profits. Build passive income while helping others succeed.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Trade in Under 60 Seconds',
      description: 'Get alerted the moment a signal drops. Execute trades in seconds, then get back to your life. Trading made simple.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'See Your Wealth Grow Daily',
      description: 'Watch your portfolio climb in real-time. Track every win, see your total profits, and celebrate your progress.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: '400,000+ Traders Trust Us',
      description: 'Join a proven system with years of consistent wins. Real people making real profits, day after day.',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah L.',
      location: 'Singapore',
      rating: 5,
      text: 'Started with $1,000 and saw incredible results in just 60 days. The AI signals are remarkably accurate and the platform is easy to use.',
      avatar: 'SL',
      profit: '+127%'
    },
    {
      name: 'Michael R.',
      location: 'United States',
      rating: 5,
      text: 'The analytics dashboard gives me complete visibility into my performance. Support team is responsive and professional.',
      avatar: 'MR',
      profit: '+89%'
    },
    {
      name: 'Chen W.',
      location: 'Hong Kong',
      rating: 5,
      text: 'Building my network has been incredible. The community aspect adds another dimension of value beyond just the trading signals.',
      avatar: 'CW',
      profit: '+156%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl top-0 left-0 animate-pulse" />
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-0 right-0 animate-pulse delay-1000" />
        <div className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-indigo-500/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur-lg opacity-50" />
                <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                AI Trading Platform
              </span>
            </div>
            <div className="flex items-center gap-4">
              {!authLoading && (
                <>
                  {isLoggedIn ? (
                    <Link
                      href="/dashboard"
                      className="group relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Dashboard
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setAuthMode('login');
                          setIsAuthModalOpen(true);
                        }}
                        className="text-white hover:text-indigo-300 transition-colors font-medium"
                      >
                        Log In
                      </button>
                      <button
                        onClick={() => {
                          setAuthMode('register');
                          setIsAuthModalOpen(true);
                        }}
                        className="group relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Get Started
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-indigo-500/30 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-fade-in">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="hidden sm:inline">Trusted by 400,000+ Traders •</span> 99.6% Win Rate
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Turn $500 into
                <br />
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 blur-2xl opacity-50" />
                  <span className="relative bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    $1,000+ in 60 days
                  </span>
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                No Experience Required. Start Today.
              </p>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                Our AI does the hard work for you. Just follow the signals, execute trades in minutes, and watch your portfolio grow. Backed by proven 99.6% accuracy.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={() => {
                    if (isLoggedIn) {
                      router.push('/dashboard');
                    } else {
                      setAuthMode('register');
                      setIsAuthModalOpen(true);
                    }
                  }}
                  disabled={authLoading}
                  className="group relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50 disabled:opacity-0"
                >
                  <span className="relative z-10 flex items-center gap-2 justify-center">
                    {isLoggedIn ? 'Go to Dashboard' : 'Get Started Free'}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>

                <button
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group border-2 border-white/30 hover:border-white/50 text-white px-10 py-5 rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-2 justify-center"
                >
                  <Play className="w-5 h-5" />
                  See How It Works
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-2 text-gray-400">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Bank-Level Security</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">400K+ Active Users</span>
                </div>
              </div>
            </div>

            {/* Right: Visual Dashboard Mockup */}
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

              {/* Dashboard Preview Card */}
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl">
                {/* Mini Chart Header */}
                <div className="mb-6">
                  <div className="text-gray-400 text-sm mb-1">Portfolio Value</div>
                  <div className="text-3xl font-bold text-white">$24,567.89</div>
                  <div className="text-green-400 text-sm font-semibold">+12.4% Today</div>
                </div>

                {/* Simplified Chart Visualization */}
                <div className="relative h-48 mb-6">
                  <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: 'rgb(99, 102, 241)', stopOpacity: 0.5 }} />
                        <stop offset="100%" style={{ stopColor: 'rgb(99, 102, 241)', stopOpacity: 0 }} />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 120 Q 50 100, 100 80 T 200 60 T 300 40 T 400 20"
                      stroke="url(#chartGradient)"
                      strokeWidth="2"
                      fill="url(#chartGradient)"
                    />
                    <path
                      d="M 0 120 Q 50 100, 100 80 T 200 60 T 300 40 T 400 20"
                      stroke="rgb(99, 102, 241)"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>

                  {/* Data points */}
                  {[20, 35, 50, 70, 85].map((x, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 bg-indigo-400 rounded-full border-2 border-white animate-pulse"
                      style={{
                        left: `${x}%`,
                        top: `${30 + i * 5}%`,
                        animationDelay: `${i * 200}ms`
                      }}
                    />
                  ))}
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-700/30 p-4 rounded-xl">
                    <div className="text-gray-400 text-xs mb-1">Win Rate</div>
                    <div className="text-xl font-bold text-green-400">99.6%</div>
                  </div>
                  <div className="bg-slate-700/30 p-4 rounded-xl">
                    <div className="text-gray-400 text-xs mb-1">Trades</div>
                    <div className="text-xl font-bold text-white">248</div>
                  </div>
                  <div className="bg-slate-700/30 p-4 rounded-xl">
                    <div className="text-gray-400 text-xs mb-1">ROI</div>
                    <div className="text-xl font-bold text-indigo-400">+127%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="mt-20">
            {/* Animated Stats */}
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { value: stats.successRate.toFixed(1), suffix: '%', label: 'Success Rate', icon: <Award className="w-6 h-6" /> },
                { value: (stats.members / 1000).toFixed(0), suffix: 'K+', label: 'Active Traders', icon: <Users className="w-6 h-6" /> },
                { value: stats.countries.toFixed(0), suffix: '+', label: 'Countries', icon: <Globe className="w-6 h-6" /> },
                { value: stats.dailyReturn.toFixed(1), suffix: '%', label: 'Daily Returns', icon: <TrendingUp className="w-6 h-6" /> }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-indigo-500/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300" />
                  <div className="relative">
                    <div className="text-indigo-400 mb-2 flex justify-center">{stat.icon}</div>
                    <div className="text-4xl font-bold text-white mb-2">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-indigo-400" />
        </div>
      </section>

      {/* Features Section with Tabs */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Everything You Need to Profit Daily
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stop guessing. Start winning. We handle the complexity so you can focus on the profits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Start Trading in Minutes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple, secure, and straightforward. Get started with just three easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-1/4 left-1/4 right-1/4 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30" />

            {[
              {
                step: '01',
                title: 'Sign Up Free',
                description: 'Create your account in 60 seconds. No credit card needed. Get instant access to see how it works.',
                icon: <Users className="w-8 h-8" />
              },
              {
                step: '02',
                title: 'Start With $500',
                description: 'Deposit your starting capital. Activate AI signals. You\'re ready to make your first profitable trade.',
                icon: <DollarSign className="w-8 h-8" />
              },
              {
                step: '03',
                title: 'Watch Profits Roll In',
                description: 'Get signal alerts. Copy the trade. Close with profit. Repeat daily and watch your account multiply.',
                icon: <TrendingUp className="w-8 h-8" />
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-all duration-500 hover:scale-105 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500" />

                  <div className="relative z-10">
                    <div className="text-8xl font-bold text-indigo-500/20 mb-4">
                      {item.step}
                    </div>

                    <div className="inline-flex p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl mb-6">
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-12 h-12 text-indigo-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Earnings Calculator */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Calculate Your Potential
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how your investment could grow with our AI-powered trading platform
            </p>
          </div>

          <InteractiveCalculator
            onGetStarted={() => {
              if (isLoggedIn) {
                router.push('/dashboard');
              } else {
                setAuthMode('register');
                setIsAuthModalOpen(true);
              }
            }}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Trusted Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of successful traders achieving their financial goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-all duration-500 hover:scale-105"
              >
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="text-green-400 font-bold text-xl">
                    {testimonial.profit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-xl p-16 rounded-3xl border border-indigo-500/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Your First Profitable Trade Is Minutes Away
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join 12,483 active traders this week. Don't let another profitable signal pass you by.
              </p>

              <button
                onClick={() => {
                  if (isLoggedIn) {
                    router.push('/dashboard');
                  } else {
                    setAuthMode('register');
                    setIsAuthModalOpen(true);
                  }
                }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/50 group"
              >
                {isLoggedIn ? 'Go to Dashboard' : 'Launch Dashboard Now'}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-8 text-gray-300 text-sm mt-10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  Free to join
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  Start with $500
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  99.6% win rate
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  Daily profits
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur-lg opacity-50" />
                  <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <span className="text-xl font-bold text-white">AI Trading Platform</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Empowering traders worldwide with institutional-grade AI technology.
                Experience consistent returns backed by proven 99.6% accuracy.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <p className="text-gray-400">
                24/7 Professional Support
              </p>
              <p className="text-gray-400 mt-2">
                Available via platform
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400 mb-3">
              © 2025 AI Trading Platform. For educational and informational purposes only.
            </p>
            <p className="text-gray-500 text-sm max-w-3xl mx-auto">
              Trading involves risk. Past performance does not guarantee future results.
              The stated 99.6% success rate is based on historical data and may not reflect future performance.
              This platform and its operators are not financial advisors and do not provide investment advice.
            </p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        defaultMode={authMode}
      />
    </div>
  );
}
