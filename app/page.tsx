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
      description: 'Every single day, you get 2 winning trades delivered to your phone. 99.6% accuracy. Just copy, paste, profit. Your competition is still reading charts.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      stats: [
        { label: 'Win Rate', value: '99.6%' },
        { label: 'Risk Per Trade', value: '1%' },
      ]
    },
    {
      title: 'Compound Machine',
      description: '1.3% daily. Compounded. Do the math. Your $1,000 becomes your first $10,000. Then $100,000. This is not a dream. It is mathematics working 24/7.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      stats: [
        { label: 'Daily Rate', value: '1.3%' },
        { label: 'Dividend Days', value: '3/month' },
      ]
    },
    {
      title: 'Zero Fees. Period.',
      description: 'No membership fee. No monthly charges. No hidden costs. No products to sell. While others pay $500/month for courses, you keep 100% of your profits.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      stats: [
        { label: 'Members', value: '547K+' },
        { label: 'Countries', value: '100+' },
      ]
    },
    {
      title: 'Phone = Office',
      description: 'Beach in Maui? Coffee shop in Kailua? Your bed at 6am? Does not matter. Open app. Get signal. Execute trade. Get paid. Welcome to location freedom.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
      stats: [
        { label: 'Mobile Ready', value: '100%' },
        { label: 'Since', value: '2018' },
      ]
    },
  ];

  const testimonials = [
    {
      name: 'Keoni M.',
      role: 'Former Skeptic',
      location: 'Honolulu',
      initials: 'KM',
      text: 'I almost didn\'t join. Almost kept my $1,000 in savings earning 0.01%. Six months later? I can\'t believe I almost missed this.',
      profit: '+127%',
      timeframe: '6 months'
    },
    {
      name: 'Leilani K.',
      role: 'Small Business Owner',
      location: 'Maui',
      initials: 'LK',
      text: 'My business makes me $5K/month. This makes me more. From my phone. While I run my actual business. Not joking.',
      profit: '+89%',
      timeframe: '4 months'
    },
    {
      name: 'Kaimana T.',
      role: 'Team Builder',
      location: 'Kailua',
      initials: 'KT',
      text: 'I told 3 friends. They told 3 friends. Now we all compound together. The referral bonus alone paid for my truck.',
      profit: '+156%',
      timeframe: '8 months'
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
          {/* Badge - URGENCY */}
          <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm border border-red-400/40 px-4 py-2 rounded-full mb-8 animate-pulse">
            <div className="w-2 h-2 bg-red-400 rounded-full" />
            <span className="text-red-300 text-sm font-bold uppercase tracking-wide">🔥 47 People Joined in the Last Hour</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Stop Watching.
            <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Start Earning.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            <span className="text-white font-semibold">While you hesitate, others are compounding 1.3% daily.</span>
            <br />
            $500 today → $570,000+ in 18 months. The math doesn't wait for anyone.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={handleCTA}
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-10 py-5 rounded-full text-xl font-bold hover:from-green-400 hover:to-emerald-400 transition-all shadow-lg shadow-green-500/30 hover:scale-105"
            >
              {isLoggedIn ? 'Go to Dashboard' : 'Claim Your Spot Now'}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-5 rounded-full text-lg font-semibold hover:bg-white/20 transition-all"
            >
              <Calculator className="w-5 h-5" />
              See Your Potential
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

      {/* Stats Bar - URGENCY */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* Scrolling ticker */}
          <div className="text-center mb-8">
            <span className="text-green-400 font-bold text-sm uppercase tracking-widest">🚀 Right Now: Members Are Compounding While You Read This</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '99.6%', label: 'Win Rate Verified', icon: <Award className="w-6 h-6" />, color: 'text-green-400' },
              { value: '547K+', label: 'Already In', icon: <Users className="w-6 h-6" />, color: 'text-blue-400' },
              { value: '7 Years', label: 'Proven Track Record', icon: <Clock className="w-6 h-6" />, color: 'text-purple-400' },
              { value: '$70M+', label: 'Capital Backing', icon: <TrendingUp className="w-6 h-6" />, color: 'text-yellow-400' },
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className={`${stat.color} mb-3 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - BOLD */}
      <section id="features" className="py-24 lg:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
              ✅ This Is How Winners Trade
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Your Edge Over
              <br />
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">99% of Traders</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Most traders lose. Our members don't. Here's why they're winning while others guess.
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

      {/* Calculator Section - FOMO INDUCING */}
      <section id="calculator" className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
              🧮 The Math Doesn't Lie
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Every Day You Wait,
              <br />
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">You Lose Money</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              See what your money could be doing right now. Then ask yourself: what's the real cost of waiting?
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
                  className="w-full bg-white text-indigo-600 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-colors hover:scale-105"
                >
                  {isLoggedIn ? 'Go to Dashboard' : 'Stop Waiting. Start Now →'}
                </button>

                <p className="text-white/70 text-xs text-center mt-4">
                  Every day at 1.3% = <span className="text-white font-semibold">${(investment * 0.013).toFixed(2)}</span> you're NOT making
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - SOCIAL PROOF */}
      <section id="testimonials" className="py-24 lg:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
              ⚡ Real People. Real Results. Real Money.
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              They Were Skeptical Too.
              <br />
              <span className="text-slate-400 dark:text-slate-500">Until They Weren't.</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Every one of them almost didn't join. Now they can't imagine life without it.
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
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.initials}
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

      {/* Final CTA - MAXIMUM URGENCY */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1920&q=80"
            alt="CTA background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm border border-red-400/40 px-4 py-2 rounded-full mb-8 animate-pulse">
            <div className="w-2 h-2 bg-red-400 rounded-full" />
            <span className="text-red-300 text-sm font-bold">⏰ Limited Spots Available in Your Region</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            A Year From Now,
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">You'll Wish You Started Today</span>
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            547,000+ people already made the decision. They're compounding right now.
            <span className="text-white font-semibold"> The only question: Will you join them, or watch them?</span>
          </p>

          <button
            onClick={handleCTA}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-12 py-6 rounded-full text-2xl font-bold hover:from-green-400 hover:to-emerald-400 transition-all hover:scale-105 shadow-lg shadow-green-500/30"
          >
            {isLoggedIn ? 'Go to Dashboard' : 'Yes, I\'m Ready to Start'}
            <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-white/50 text-sm mt-6">Takes 30 seconds. No credit card required.</p>

          <div className="flex flex-wrap justify-center gap-6 mt-10 text-white/60 text-sm">
            {['$0 to Start', 'No Experience Needed', '2 Signals Daily', 'Withdraw Anytime'].map((item, i) => (
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
