'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight, TrendingUp, Shield, Users, DollarSign, CheckCircle2, Star,
  BarChart3, Zap, Lock, Award, Globe, ChevronDown, Play, Calculator,
  MessageCircle, Send
} from 'lucide-react';

interface Recruit {
  id: string;
  slug: string;
  name: string;
  referralCode: string;
  referralLink: string;
  leader: string | null;
  headline: string | null;
  subheadline: string | null;
  bio: string | null;
  photoUrl: string | null;
  youtubeUrl: string | null;
  primaryColor: string;
  accentColor: string;
  testimonials: unknown;
  telegramLink: string | null;
  whatsappLink: string | null;
  showTestimonials: boolean;
  showCalculator: boolean;
}

interface RecruitLandingPageProps {
  recruit: Recruit;
}

// Calculator Component
function InteractiveCalculator({ primaryColor, accentColor, referralLink }: { primaryColor: string; accentColor: string; referralLink: string }) {
  const [investment, setInvestment] = useState(1000);
  const [days, setDays] = useState(30);
  const [dailyRate] = useState(1.3);
  const [compounding, setCompounding] = useState(true);

  const calculateReturns = () => {
    if (compounding) {
      const rate = dailyRate / 100;
      const finalAmount = investment * Math.pow(1 + rate, days);
      return {
        final: finalAmount,
        profit: finalAmount - investment,
        roi: ((finalAmount - investment) / investment) * 100
      };
    } else {
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
    <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur p-8 md:p-10 rounded-3xl border border-white/10 overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-2xl" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})` }}>
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">Earnings Calculator</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-3">
                <label className="text-gray-300 font-semibold">Initial Investment</label>
                <span className="font-bold text-lg" style={{ color: primaryColor }}>
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
                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${primaryColor} 0%, ${accentColor} ${((investment - 500) / (10000 - 500)) * 100}%, rgb(51, 65, 85) ${((investment - 500) / (10000 - 500)) * 100}%, rgb(51, 65, 85) 100%)`
                }}
              />
            </div>

            <div>
              <div className="flex justify-between mb-3">
                <label className="text-gray-300 font-semibold">Time Period</label>
                <span className="font-bold text-lg" style={{ color: accentColor }}>
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
                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${accentColor} 0%, ${primaryColor} ${((days - 7) / (365 - 7)) * 100}%, rgb(51, 65, 85) ${((days - 7) / (365 - 7)) * 100}%, rgb(51, 65, 85) 100%)`
                }}
              />
            </div>

            <div className="p-4 rounded-2xl border" style={{ background: `${primaryColor}20`, borderColor: `${primaryColor}40` }}>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 font-semibold">Daily Return Rate</span>
                <span className="text-2xl font-bold" style={{ color: primaryColor }}>{dailyRate}%</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="p-6 rounded-3xl border" style={{ background: `linear-gradient(135deg, ${primaryColor}20, ${accentColor}20)`, borderColor: `${primaryColor}40` }}>
              <div className="text-center mb-4">
                <div className="text-gray-400 text-sm mb-2">Projected Balance After {days} Days</div>
                <div className="text-4xl font-bold text-green-400 mb-4">
                  ${results.final.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-xl">
                  <span className="text-gray-300">Total Profit</span>
                  <span className="text-xl font-bold text-green-400">
                    +${results.profit.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-xl">
                  <span className="text-gray-300">ROI</span>
                  <span className="text-xl font-bold" style={{ color: primaryColor }}>
                    {results.roi.toFixed(1)}%
                  </span>
                </div>
              </div>

              <a
                href={referralLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full block text-center text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:opacity-90"
                style={{ background: `linear-gradient(to right, ${primaryColor}, ${accentColor})` }}
              >
                Start Trading Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RecruitLandingPage({ recruit }: RecruitLandingPageProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleStats, setVisibleStats] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const { primaryColor, accentColor } = recruit;
  const headline = recruit.headline || 'Turn $500 into $1,000+ in 60 days';
  const subheadline = recruit.subheadline || 'No Experience Required. Start Today.';

  // Animated stats
  const [stats, setStats] = useState({
    successRate: 0,
    members: 0,
    countries: 0,
    dailyReturn: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible && !visibleStats) {
          setVisibleStats(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleStats]);

  useEffect(() => {
    if (visibleStats) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setStats({
          successRate: Math.min(99.6, progress * 99.6),
          members: Math.min(500000, progress * 500000),
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
    { icon: TrendingUp, title: 'Win 99.6% of Your Trades', description: 'Get exact entry and exit points delivered straight to your phone.' },
    { icon: Shield, title: 'Your Money Stays Safe', description: 'Your funds are protected with bank-level security.' },
    { icon: Users, title: 'Earn While You Share', description: 'Invite friends and earn generous commissions.' },
    { icon: Zap, title: 'Trade in Under 60 Seconds', description: 'Execute trades in seconds, then get back to your life.' },
    { icon: BarChart3, title: 'See Your Wealth Grow', description: 'Watch your portfolio climb in real-time.' },
    { icon: Lock, title: '500,000+ Traders Trust Us', description: 'Join a proven SEC RIA licensed platform with years of consistent wins.' }
  ];

  const defaultTestimonials = [
    { name: 'Sarah L.', location: 'Singapore', text: 'Started with $1,000 and saw incredible results in just 60 days.', profit: '+127%' },
    { name: 'Michael R.', location: 'United States', text: 'The analytics dashboard gives me complete visibility into my performance.', profit: '+89%' },
    { name: 'Chen W.', location: 'Hong Kong', text: 'Building my network has been incredible. The community aspect adds another dimension.', profit: '+156%' }
  ];

  const testimonials = (recruit.testimonials as typeof defaultTestimonials) || defaultTestimonials;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full blur-2xl top-0 left-0" style={{ background: `${primaryColor}08` }} />
        <div className="absolute w-[500px] h-[500px] rounded-full blur-2xl bottom-0 right-0" style={{ background: `${accentColor}08` }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              {recruit.photoUrl ? (
                <img src={recruit.photoUrl} alt={recruit.name} className="w-10 h-10 rounded-full object-cover" />
              ) : (
                <div className="p-2 rounded-lg" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})` }}>
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">{recruit.name}</span>
                {recruit.leader && (
                  <span className="text-sm" style={{ color: primaryColor }}>{recruit.leader}</span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {recruit.telegramLink && (
                <a href={recruit.telegramLink} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white transition-colors">
                  <Send className="w-5 h-5" />
                </a>
              )}
              {recruit.whatsappLink && (
                <a href={recruit.whatsappLink} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              )}
              <a
                href={recruit.referralLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition-opacity"
                style={{ background: `linear-gradient(to right, ${primaryColor}, ${accentColor})` }}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Recruiter Bio */}
            {recruit.bio && (
              <div className="mb-8 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-2xl mx-auto">
                {recruit.photoUrl && (
                  <img src={recruit.photoUrl} alt={recruit.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4" style={{ borderColor: primaryColor }} />
                )}
                <p className="text-gray-300 italic">"{recruit.bio}"</p>
                <p className="mt-2 font-semibold" style={{ color: primaryColor }}>- {recruit.name}</p>
                {recruit.leader && (
                  <p className="text-sm text-gray-400">{recruit.leader}</p>
                )}
              </div>
            )}

            {/* YouTube Video */}
            {recruit.youtubeUrl && (
              <div className="mb-8 max-w-2xl mx-auto">
                <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden border border-white/10">
                  <iframe
                    src={recruit.youtubeUrl.replace('watch?v=', 'embed/').replace('youtu.be/', 'www.youtube.com/embed/')}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Introduction Video"
                  />
                </div>
              </div>
            )}

            {/* Badge */}
            <div className="inline-flex items-center gap-2 backdrop-blur border text-white px-6 py-3 rounded-full text-sm font-semibold mb-8" style={{ background: `${primaryColor}20`, borderColor: `${primaryColor}40` }}>
              <Award className="w-4 h-4" style={{ color: primaryColor }} />
              <span>Trusted by 500,000+ Traders | SEC RIA Licensed</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {headline.split(' ').slice(0, 3).join(' ')}
              <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${primaryColor}, ${accentColor})` }}>
                {headline.split(' ').slice(3).join(' ') || '$1,000+ in 60 days'}
              </span>
            </h1>

            <p className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              {subheadline}
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto">
              Our AI does the hard work for you. Just follow the signals, execute trades in minutes, and watch your portfolio grow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href={recruit.referralLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-200 hover:opacity-90 flex items-center gap-2 justify-center"
                style={{ background: `linear-gradient(to right, ${primaryColor}, ${accentColor})` }}
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#how-it-works"
                className="border-2 border-white/30 hover:border-white/50 text-white px-10 py-5 rounded-full font-semibold text-lg backdrop-blur hover:bg-white/10 transition-all duration-200 flex items-center gap-2 justify-center"
              >
                <Play className="w-5 h-5" />
                See How It Works
              </a>
            </div>

            {/* Referral Code Display */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-md mx-auto">
              <p className="text-gray-400 text-sm mb-1">Use referral code:</p>
              <p className="text-2xl font-bold font-mono" style={{ color: primaryColor }}>{recruit.referralCode}</p>
            </div>
          </div>

          {/* Stats Row */}
          <div ref={statsRef} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: stats.successRate.toFixed(1), suffix: '%', label: 'Success Rate', icon: Award },
              { value: (stats.members / 1000).toFixed(0), suffix: 'K+', label: 'Active Traders', icon: Users },
              { value: stats.countries.toFixed(0), suffix: '+', label: 'Countries', icon: Globe },
              { value: stats.dailyReturn.toFixed(1), suffix: '%', label: 'Daily Returns', icon: TrendingUp }
            ].map((stat, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-white/10 p-6 rounded-2xl hover:scale-105 transition-all duration-200" style={{ '--hover-border': `${primaryColor}60` } as React.CSSProperties}>
                <div className="text-center">
                  <stat.icon className="w-6 h-6 mx-auto mb-2" style={{ color: primaryColor }} />
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8" style={{ color: primaryColor }} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Everything You Need to Profit Daily
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-200">
                <div className="inline-flex p-4 rounded-2xl mb-6" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})` }}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Start Trading in Minutes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {[
              { step: '01', title: 'Sign Up Free', description: 'Create your account in 60 seconds. No credit card needed.', icon: Users },
              { step: '02', title: 'Start With $500', description: 'Deposit your starting capital. Activate AI signals.', icon: DollarSign },
              { step: '03', title: 'Watch Profits Roll In', description: 'Get signal alerts. Copy the trade. Close with profit.', icon: TrendingUp }
            ].map((item, index) => (
              <div key={index} className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur p-10 rounded-3xl border border-white/10">
                <div className="text-8xl font-bold mb-4" style={{ color: `${primaryColor}30` }}>
                  {item.step}
                </div>
                <div className="inline-flex p-4 rounded-2xl mb-6" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})` }}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      {recruit.showCalculator && (
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Calculate Your Potential
              </h2>
            </div>
            <InteractiveCalculator primaryColor={primaryColor} accentColor={accentColor} referralLink={recruit.referralLink} />
          </div>
        </section>
      )}

      {/* Testimonials */}
      {recruit.showTestimonials && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Trusted Worldwide
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur p-8 rounded-3xl border border-white/10">
                  <div className="flex gap-1 mb-6" style={{ color: primaryColor }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.location}</div>
                    </div>
                    <div className="text-green-400 font-bold text-xl">{testimonial.profit}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative backdrop-blur p-16 rounded-3xl overflow-hidden" style={{ background: `linear-gradient(135deg, ${primaryColor}30, ${accentColor}30)`, borderColor: `${primaryColor}40` }}>
            <div className="relative z-10 text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Your First Profitable Trade Is Minutes Away
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join thousands of successful traders. Don't let another profitable signal pass you by.
              </p>

              <a
                href={recruit.referralLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white px-12 py-6 rounded-full font-bold text-xl hover:opacity-90 transition-all duration-200"
                style={{ background: `linear-gradient(to right, ${primaryColor}, ${accentColor})` }}
              >
                Start Trading Now
                <ArrowRight className="w-6 h-6" />
              </a>

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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            {recruit.photoUrl ? (
              <img src={recruit.photoUrl} alt={recruit.name} className="w-10 h-10 rounded-full object-cover" />
            ) : (
              <div className="p-2 rounded-lg" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})` }}>
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
            )}
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold text-white">{recruit.name}</span>
              {recruit.leader && (
                <span className="text-sm" style={{ color: primaryColor }}>{recruit.leader}</span>
              )}
            </div>
          </div>

          {(recruit.telegramLink || recruit.whatsappLink) && (
            <div className="flex items-center justify-center gap-4 mb-6">
              {recruit.telegramLink && (
                <a href={recruit.telegramLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Send className="w-5 h-5" />
                  Telegram
                </a>
              )}
              {recruit.whatsappLink && (
                <a href={recruit.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              )}
            </div>
          )}

          <p className="text-gray-500 text-sm max-w-3xl mx-auto">
            Trading involves risk. Past performance does not guarantee future results.
            This platform is for educational and informational purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
}
