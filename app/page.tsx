'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, TrendingUp, Shield, Users, Clock, ChevronDown, Play, Calculator, CheckCircle2, Star, BarChart3, Zap, Globe, Award } from 'lucide-react';
import AuthModal from '@/components/AuthModal';
import MobileMenu from '@/components/MobileMenu';
import { checkAuth } from '@/app/actions/auth';

export default function LandingPage() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'register' | 'login'>('register');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [activeFeature, setActiveFeature] = useState(0);

  // Calculator state
  const [investment, setInvestment] = useState(1000);
  const [days, setDays] = useState(30);
  const dailyRate = 1.3;

  const calculateReturns = () => {
    const rate = dailyRate / 100;
    const finalAmount = investment * Math.pow(1 + rate, days);
    return {
      final: finalAmount,
      profit: finalAmount - investment,
      roi: ((finalAmount - investment) / investment) * 100
    };
  };
  const results = calculateReturns();

  useEffect(() => {
    checkAuth().then((result) => {
      setIsLoggedIn(result.isLoggedIn);
      setAuthLoading(false);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const openAuth = (mode: 'register' | 'login') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleCTA = () => {
    if (isLoggedIn) {
      router.push('/dashboard');
    } else {
      openAuth('register');
    }
  };

  const features = [
    {
      title: '2 Daily Signals',
      description: 'Receive 2 fixed trading signals every day with 99.6% accuracy. Each trade uses only 1% of your investment for maximum safety.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      stats: [
        { label: 'Win Rate', value: '99.6%' },
        { label: 'Risk Per Trade', value: '1%' },
      ]
    },
    {
      title: 'Compound Growth',
      description: 'Watch your investment grow with 1.3% daily compounding. Receive dividends on the 9th, 19th, and 29th of every month.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      stats: [
        { label: 'Daily Rate', value: '1.3%' },
        { label: 'Dividend Days', value: '3/month' },
      ]
    },
    {
      title: 'Zero Hidden Fees',
      description: 'No membership fee, no monthly charges, no products to sell. Just pure trading with complete transparency and flexibility.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      stats: [
        { label: 'Members', value: '500K+' },
        { label: 'Countries', value: '100+' },
      ]
    },
    {
      title: 'Trade From Anywhere',
      description: 'No experience required. Work from your phone, anywhere in the world. Our platform handles the complex analysis for you.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
      stats: [
        { label: 'Mobile Ready', value: '100%' },
        { label: 'Established', value: '2018' },
      ]
    },
  ];

  const testimonials = [
    {
      name: 'Sarah L.',
      role: 'Works from Phone',
      location: 'Singapore',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
      text: 'I started with just $1,000 and no experience. The signals come straight to my phone, and I trade during my commute. Life-changing.',
      profit: '+127%',
    },
    {
      name: 'Michael R.',
      role: 'Business Owner',
      location: 'United States',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
      text: 'Zero fees, 2 signals daily, dividends 3 times a month. The transparency and simplicity sold me. No gimmicks, just results.',
      profit: '+89%',
    },
    {
      name: 'Chen W.',
      role: 'Building a Team',
      location: 'Hong Kong',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
      text: 'The referral program is incredible. I\'ve built a network that earns passive income while helping others achieve financial freedom.',
      profit: '+156%',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Navigation - Apple-inspired minimal */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className={`text-xl font-semibold transition-colors ${
                isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'
              }`}>
                AI Trading
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#features" className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white' : 'text-white/80 hover:text-white'
              }`}>
                Features
              </a>
              <a href="#calculator" className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white' : 'text-white/80 hover:text-white'
              }`}>
                Calculator
              </a>
              <a href="#testimonials" className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white' : 'text-white/80 hover:text-white'
              }`}>
                Reviews
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              {!authLoading && (
                <>
                  {isLoggedIn ? (
                    <Link
                      href="/dashboard"
                      className="hidden sm:flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      Dashboard
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => openAuth('login')}
                        className={`hidden sm:block text-sm font-medium px-4 py-2 transition-colors ${
                          isScrolled ? 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white' : 'text-white/80 hover:text-white'
                        }`}
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => openAuth('register')}
                        className="hidden sm:flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </>
              )}
              <MobileMenu
                onGetStarted={() => openAuth('register')}
                onLogin={() => openAuth('login')}
                isLoggedIn={isLoggedIn}
                authLoading={authLoading}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Tesla/Apple inspired full-screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80"
            alt="Trading background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">500,000+ Active Traders Worldwide</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            The Future of
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Trading
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Turn $500 into $570,000+ in 18 months with compound growth.
            No experience needed. Just follow the signals from your phone.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={handleCTA}
              className="group inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all"
            >
              {isLoggedIn ? 'Go to Dashboard' : 'Start Trading Free'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Licensed in 30+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>99.6% Win Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Est. 2018</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>$70M Capital Backing</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* Stats Bar - ClickUp inspired */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '99.6%', label: 'Success Rate', icon: <Award className="w-6 h-6" /> },
              { value: '500K+', label: 'Global Members', icon: <Users className="w-6 h-6" /> },
              { value: '7+', label: 'Years Established', icon: <Clock className="w-6 h-6" /> },
              { value: '3x', label: 'Monthly Dividends', icon: <TrendingUp className="w-6 h-6" /> },
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-indigo-600 dark:text-indigo-400 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Apple product showcase style */}
      <section id="features" className="py-24 lg:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Powerful Features.
              <br />
              <span className="text-slate-400 dark:text-slate-500">Simple Experience.</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Everything you need to start trading profitably, all in one beautiful platform.
            </p>
          </div>

          {/* Feature Tabs */}
          <div className="flex justify-start lg:justify-center gap-3 mb-12 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
            {features.map((feature, i) => (
              <button
                key={i}
                onClick={() => setActiveFeature(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                  activeFeature === i
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {feature.title}
              </button>
            ))}
          </div>

          {/* Feature Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                fill
                className="object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                {features[activeFeature].stats.map((stat, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 flex-1">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:pl-8">
              <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Feature {activeFeature + 1} of {features.length}
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                {features[activeFeature].title}
              </h3>

              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {features[activeFeature].description}
              </p>

              <button
                onClick={handleCTA}
                className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all"
              >
                Learn more
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section - Modernized */}
      <section id="calculator" className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              See Your Potential
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Calculate how much you could earn with our AI trading platform
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left - Controls */}
              <div className="p-8 lg:p-12">
                <div className="space-y-10">
                  {/* Investment Slider */}
                  <div>
                    <div className="flex justify-between mb-4">
                      <label className="text-slate-900 dark:text-white font-semibold">Investment Amount</label>
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">
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
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full appearance-none cursor-pointer accent-indigo-600"
                    />
                    <div className="flex justify-between text-xs text-slate-400 mt-2">
                      <span>$500</span>
                      <span>$10,000</span>
                    </div>
                  </div>

                  {/* Days Slider */}
                  <div>
                    <div className="flex justify-between mb-4">
                      <label className="text-slate-900 dark:text-white font-semibold">Time Period</label>
                      <span className="text-purple-600 dark:text-purple-400 font-bold text-lg">
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
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full appearance-none cursor-pointer accent-purple-600"
                    />
                    <div className="flex justify-between text-xs text-slate-400 mt-2">
                      <span>1 week</span>
                      <span>1 year</span>
                    </div>
                  </div>

                  {/* Daily Rate Info */}
                  <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 dark:text-slate-400">Daily Return Rate</span>
                      <span className="text-2xl font-bold text-slate-900 dark:text-white">{dailyRate}%</span>
                    </div>
                    <p className="text-sm text-slate-500 mt-2">Based on historical AI performance</p>
                  </div>
                </div>
              </div>

              {/* Right - Results */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-8 lg:p-12 text-white">
                <div className="text-center mb-8">
                  <div className="text-white/70 text-sm mb-2">Projected Balance</div>
                  <div className="text-5xl lg:text-6xl font-bold mb-2">
                    ${results.final.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </div>
                  <div className="text-white/70">After {days} days</div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 flex justify-between items-center">
                    <span className="text-white/80">Total Profit</span>
                    <span className="text-xl font-bold text-green-300">
                      +${results.profit.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 flex justify-between items-center">
                    <span className="text-white/80">ROI</span>
                    <span className="text-xl font-bold">{results.roi.toFixed(0)}%</span>
                  </div>
                </div>

                <button
                  onClick={handleCTA}
                  className="w-full bg-white text-indigo-600 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-colors"
                >
                  {isLoggedIn ? 'Go to Dashboard' : 'Start Trading Now'}
                </button>

                <p className="text-white/50 text-xs text-center mt-4">
                  * Projections based on historical data. Results may vary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Modern card design */}
      <section id="testimonials" className="py-24 lg:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Loved by Traders Worldwide
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Join thousands who have transformed their financial future
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-slate-500">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="text-green-500 font-bold text-xl">{testimonial.profit}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Full width image */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1920&q=80"
            alt="CTA background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Start Your
            <br />
            Trading Journey?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Join 500,000+ members in 100+ countries who trust our signals.
            No fees, no experience needed. Start from your phone today.
          </p>

          <button
            onClick={handleCTA}
            className="group inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-full text-xl font-bold hover:bg-white/90 transition-all hover:scale-105"
          >
            {isLoggedIn ? 'Go to Dashboard' : 'Get Started Free'}
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex flex-wrap justify-center gap-6 mt-10 text-white/60 text-sm">
            {['No membership fees', 'No experience needed', '2 signals daily', 'Withdraw anytime'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-16 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-slate-900 dark:text-white">AI Trading</span>
            </Link>

            {/* Links */}
            <div className="flex gap-8 text-sm text-slate-600 dark:text-slate-400">
              <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition-colors">Features</a>
              <a href="#calculator" className="hover:text-slate-900 dark:hover:text-white transition-colors">Calculator</a>
              <a href="#testimonials" className="hover:text-slate-900 dark:hover:text-white transition-colors">Reviews</a>
              <Link href="/dashboard" className="hover:text-slate-900 dark:hover:text-white transition-colors">Dashboard</Link>
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center">
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
              © 2025 AI Trading Platform. For educational and informational purposes only.
            </p>
            <p className="text-slate-400 dark:text-slate-500 text-xs max-w-2xl mx-auto">
              Trading involves risk. Past performance does not guarantee future results.
              This platform is not a financial advisor and does not provide investment advice.
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
