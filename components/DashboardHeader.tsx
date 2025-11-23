'use client';

import { logoutUser } from '@/app/actions/auth';
import ChangePassword from './ChangePassword';

interface DashboardHeaderProps {
  userName: string;
  userEmail: string;
}

export default function DashboardHeader({ userName, userEmail }: DashboardHeaderProps) {
  async function handleLogout() {
    if (confirm('Are you sure you want to log out?')) {
      await logoutUser();
    }
  }

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              AI Trading Dashboard
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Welcome back, {userName}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-gray-900 dark:text-white">{userName}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">{userEmail}</p>
            </div>
            <ChangePassword />
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
