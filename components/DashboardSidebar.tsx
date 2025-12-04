'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { logoutUser } from '@/app/actions/auth';
import {
  Rocket, Calculator, GraduationCap, CheckSquare, Info,
  ChevronLeft, ChevronRight, Menu, X, BarChart3, LogOut, User,
  Sparkles, BookOpen
} from 'lucide-react';
import AlarmSettings from './AlarmSettings';
import DarkModeToggle from './DarkModeToggle';
import LanguageToggle from './LanguageToggle';
import CompactCountdown from './CompactCountdown';
import ChangePassword from './ChangePassword';

interface DashboardSidebarProps {
  completedSteps: number[];
  totalSteps: number;
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  userName?: string;
  userEmail?: string;
}

export default function DashboardSidebar({
  completedSteps,
  totalSteps,
  activeSection,
  onSectionChange,
  userName,
  userEmail
}: DashboardSidebarProps) {
  const { language } = useLanguage();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const sections = [
    {
      id: 'quick-start',
      icon: Rocket,
      label: language === 'en' ? 'Quick Start' : 'Bắt Đầu',
      labelFull: language === 'en' ? 'Quick Start Guide' : 'Hướng Dẫn Bắt Đầu',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'steps',
      icon: CheckSquare,
      label: language === 'en' ? 'Steps' : 'Các Bước',
      labelFull: language === 'en' ? 'Onboarding Steps' : 'Các Bước Hướng Dẫn',
      color: 'from-orange-500 to-amber-500'
    },
    {
      id: 'wealth',
      icon: Calculator,
      label: language === 'en' ? 'Calculator' : 'Máy Tính',
      labelFull: language === 'en' ? 'Earnings Calculator' : 'Máy Tính Lợi Nhuận',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'support',
      icon: GraduationCap,
      label: language === 'en' ? 'Resources' : 'Tài Liệu',
      labelFull: language === 'en' ? 'Learn & Support' : 'Học Tập & Hỗ Trợ',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'learn',
      icon: BookOpen,
      label: language === 'en' ? 'Learn' : 'Học',
      labelFull: language === 'en' ? 'Trading Lessons' : 'Bài Học Giao Dịch',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      id: 'info',
      icon: Info,
      label: language === 'en' ? 'Info' : 'Thông Tin',
      labelFull: language === 'en' ? 'Important Info' : 'Thông Tin Quan Trọng',
      color: 'from-indigo-500 to-violet-500'
    }
  ];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMobileOpen(false);
  };

  async function handleLogout() {
    if (confirm(language === 'en' ? 'Are you sure you want to log out?' : 'Bạn có chắc muốn đăng xuất?')) {
      await logoutUser();
    }
  }

  const completionPercentage = totalSteps > 0
    ? Math.round((completedSteps.length / totalSteps) * 100)
    : 0;

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo Section */}
      <div className={`p-5 ${isCollapsed ? 'px-3' : ''}`}>
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl blur-lg opacity-50" />
            <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 p-3 rounded-2xl">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
          </div>
          {!isCollapsed && (
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-gray-900 dark:text-white text-lg tracking-tight">
                AI Trading
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {language === 'en' ? 'Dashboard' : 'Bảng Điều Khiển'}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* User Card */}
      {userName && (
        <div className={`px-4 pb-4 ${isCollapsed ? 'px-2' : ''}`}>
          {isCollapsed ? (
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center ring-2 ring-white dark:ring-gray-800 shadow-lg">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-4 border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center ring-2 ring-white dark:ring-gray-800 shadow-lg flex-shrink-0">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white text-sm truncate">{userName}</p>
                  {userEmail && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{userEmail}</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Countdown & Progress Card */}
      <div className={`px-4 pb-4 ${isCollapsed ? 'px-2' : ''}`}>
        {isCollapsed ? (
          <div className="flex flex-col items-center gap-3">
            <div className="relative w-12 h-12">
              <svg className="w-12 h-12 -rotate-90">
                <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="4" className="text-gray-200 dark:text-gray-700" />
                <circle
                  cx="24" cy="24" r="20" fill="none" stroke="url(#progressGradient)" strokeWidth="4"
                  strokeDasharray={`${completionPercentage * 1.26} 126`}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700 dark:text-gray-300">
                {completionPercentage}%
              </span>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {/* Countdown */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-4 border border-amber-200/50 dark:border-amber-700/50">
              <CompactCountdown />
            </div>

            {/* Progress */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-4 border border-indigo-200/50 dark:border-indigo-700/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  {language === 'en' ? 'Progress' : 'Tiến Độ'}
                </span>
                <span className="text-sm font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {completionPercentage}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                {completedSteps.length}/{totalSteps} {language === 'en' ? 'completed' : 'hoàn thành'}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-2 space-y-1.5 overflow-y-auto">
        <p className={`text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 ${isCollapsed ? 'text-center' : 'px-3'}`}>
          {isCollapsed ? '•••' : (language === 'en' ? 'Menu' : 'Menu')}
        </p>
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = section.id === activeSection;
          return (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl font-medium transition-all duration-200 group ${
                isActive
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white'
              } ${isCollapsed ? 'justify-center' : ''}`}
              title={section.labelFull}
            >
              <div className={`p-1.5 rounded-lg transition-all ${
                isActive
                  ? 'bg-white/20 dark:bg-gray-900/20'
                  : `bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-100`
              }`}>
                <Icon className={`w-4 h-4 ${isActive ? '' : 'group-hover:text-white'}`} />
              </div>
              {!isCollapsed && (
                <span className="truncate text-sm">{section.label}</span>
              )}
              {!isCollapsed && isActive && (
                <Sparkles className="w-4 h-4 ml-auto opacity-50" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Account Actions */}
      <div className={`p-3 border-t border-gray-200/50 dark:border-gray-700/50 space-y-1.5 ${isCollapsed ? 'px-2' : ''}`}>
        {isCollapsed ? (
          <div className="flex flex-col items-center gap-2">
            <ChangePassword compact />
            <button
              onClick={handleLogout}
              className="p-2.5 text-gray-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all"
              title={language === 'en' ? 'Log Out' : 'Đăng Xuất'}
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <>
            <ChangePassword />
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl font-medium transition-all text-sm"
            >
              <LogOut className="w-4 h-4" />
              <span>{language === 'en' ? 'Log Out' : 'Đăng Xuất'}</span>
            </button>
          </>
        )}
      </div>

      {/* Settings Section */}
      <div className={`p-4 border-t border-gray-200/50 dark:border-gray-700/50 ${isCollapsed ? 'px-2' : ''}`}>
        {isCollapsed ? (
          <div className="flex flex-col items-center gap-3">
            <AlarmSettings />
            <LanguageToggle />
            <DarkModeToggle />
          </div>
        ) : (
          <div className="flex items-center justify-center gap-3 bg-gray-100 dark:bg-gray-800/50 rounded-xl p-2">
            <AlarmSettings />
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
            <LanguageToggle />
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
            <DarkModeToggle />
          </div>
        )}
      </div>

      {/* Collapse Button - Desktop only */}
      <div className="hidden lg:block p-3 border-t border-gray-200/50 dark:border-gray-700/50">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center gap-2 px-3 py-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-xl transition-all text-sm"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <>
              <ChevronLeft className="w-5 h-5" />
              <span>{language === 'en' ? 'Collapse' : 'Thu gọn'}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`lg:hidden fixed top-0 left-0 h-full w-[min(18rem,85vw)] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl z-50 transform transition-transform duration-300 ease-out ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        } shadow-2xl border-r border-gray-200/50 dark:border-gray-700/50`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMobileOpen(false)}
          className="absolute top-4 right-4 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
        <SidebarContent />
      </aside>

      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex fixed top-0 left-0 h-screen bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-r border-gray-200/50 dark:border-gray-700/50 flex-col z-40 transition-all duration-300 ${
          isCollapsed ? 'w-20' : 'w-72'
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Spacer for desktop layout */}
      <div className={`hidden lg:block flex-shrink-0 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-72'}`} />
    </>
  );
}
