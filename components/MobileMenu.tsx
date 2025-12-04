'use client';

import { useState, useEffect } from 'react';
import { Menu, X, BarChart3 } from 'lucide-react';

interface MobileMenuProps {
  onGetStarted: () => void;
  onLogin: () => void;
  isLoggedIn: boolean;
  authLoading: boolean;
}

export default function MobileMenu({ onGetStarted, onLogin, isLoggedIn, authLoading }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900 z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-lg">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-white">AI Trading</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4">
          <ul className="space-y-1">
            {[
              { label: 'Features', href: '#features' },
              { label: 'How It Works', href: '#how-it-works' },
              { label: 'Calculator', href: '#calculator' },
              { label: 'Testimonials', href: '#testimonials' },
            ].map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Auth Buttons */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-slate-900">
          {!authLoading && (
            <>
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = '/dashboard';
                  }}
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-full font-semibold"
                >
                  Go to Dashboard
                </button>
              ) : (
                <div className="space-y-3">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onLogin();
                    }}
                    className="w-full border border-white/20 text-white py-3 rounded-full font-semibold hover:bg-white/5 transition-colors"
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onGetStarted();
                    }}
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-full font-semibold"
                  >
                    Get Started Free
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
