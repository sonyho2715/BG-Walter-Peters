'use client';

import { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'register' | 'login';
}

export default function AuthModal({ isOpen, onClose, defaultMode = 'register' }: AuthModalProps) {
  const [mode, setMode] = useState<'register' | 'login'>(defaultMode);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10"
          aria-label="Close"
        >
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {mode === 'register' ? (
          <RegistrationForm onSwitchToLogin={() => setMode('login')} />
        ) : (
          <LoginForm onSwitchToRegister={() => setMode('register')} />
        )}
      </div>
    </div>
  );
}
