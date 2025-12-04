'use client';

import { useState, useEffect } from 'react';
import { Copy, Check, Printer, Share2, ExternalLink } from 'lucide-react';

interface InvitationCodeProps {
  language: 'en' | 'vi';
}

const INVITATION_CODE = '9vbatfsvno00';
const INVITATION_LINK = 'https://dsj927.com/pc/#/register?code=9vbatfsvno00';

export default function InvitationCode({ language }: InvitationCodeProps) {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showShareSuccess, setShowShareSuccess] = useState(false);

  const copyToClipboard = async (text: string, type: 'code' | 'link') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'code') {
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
      } else {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const openInvitationLink = () => {
    window.open(INVITATION_LINK, '_blank');
  };

  const printInvitation = () => {
    window.print();
  };

  const shareInvitation = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: language === 'en' ? 'Join AI Trading with DSJ' : 'Tham gia AI Trading với DSJ',
          text: language === 'en'
            ? `Use my invitation code: ${INVITATION_CODE} to join AI Trading!`
            : `Sử dụng mã mời của tôi: ${INVITATION_CODE} để tham gia AI Trading!`,
          url: INVITATION_LINK
        });
        setShowShareSuccess(true);
        setTimeout(() => setShowShareSuccess(false), 2000);
      } else {
        // Fallback: copy to clipboard and show success message
        await copyToClipboard(INVITATION_LINK, 'link');
        setShowShareSuccess(true);
        setTimeout(() => setShowShareSuccess(false), 2000);
      }
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        console.error('Failed to share:', err);
        // Still try to copy to clipboard as last resort
        await copyToClipboard(INVITATION_LINK, 'link');
        setShowShareSuccess(true);
        setTimeout(() => setShowShareSuccess(false), 2000);
      }
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ctrl+C or Cmd+C to copy invitation code (when nothing is selected)
      if ((e.ctrlKey || e.metaKey) && e.key === 'c' && !e.shiftKey) {
        const selection = window.getSelection()?.toString();
        if (!selection) {
          e.preventDefault();
          copyToClipboard(INVITATION_CODE, 'code');
        }
      }
      // Ctrl+Shift+C to copy invitation link
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        copyToClipboard(INVITATION_LINK, 'link');
      }
      // Ctrl+P to print
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        printInvitation();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="bg-gray-900 dark:bg-gray-950 rounded-xl p-4 sm:p-6 mb-6">
      {/* Success Animation for Share */}
      {showShareSuccess && (
        <div className="mb-4 p-3 sm:p-4 bg-green-500/20 border border-green-500 rounded-lg animate-fade-in">
          <p className="text-green-400 text-center font-semibold text-sm sm:text-base">
            ✓ {language === 'en' ? 'Link copied! Ready to share.' : 'Đã sao chép link!'}
          </p>
        </div>
      )}

      <div className="space-y-5 sm:space-y-6">
        {/* Invitation Code */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {language === 'en' ? 'My invitation code' : 'Mã mời của tôi'}
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={INVITATION_CODE}
              readOnly
              className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-lg font-mono text-base sm:text-lg border border-gray-700 focus:outline-none focus:border-yellow-500"
            />
            <button
              onClick={() => copyToClipboard(INVITATION_CODE, 'code')}
              className="min-h-[44px] px-4 sm:px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap active:scale-95"
            >
              {copiedCode ? (
                <>
                  <Check size={18} className="animate-bounce" />
                  {language === 'en' ? 'Copied!' : 'Đã sao!'}
                </>
              ) : (
                <>
                  <Copy size={18} />
                  {language === 'en' ? 'Copy' : 'Sao chép'}
                </>
              )}
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-1.5 hidden sm:block">
            {language === 'en' ? '💡 Tip: Press Ctrl+C to copy' : '💡 Mẹo: Nhấn Ctrl+C để sao chép'}
          </p>
        </div>

        {/* Invitation Link */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {language === 'en' ? 'My invitation code link' : 'Link mã mời của tôi'}
          </label>
          <div className="space-y-2">
            <input
              type="text"
              value={INVITATION_LINK}
              readOnly
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg font-mono text-xs sm:text-sm border border-gray-700 focus:outline-none focus:border-yellow-500 truncate"
            />
            <div className="flex gap-2">
              <button
                onClick={openInvitationLink}
                className="flex-1 min-h-[44px] px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
              >
                <ExternalLink size={18} />
                {language === 'en' ? 'Open' : 'Mở'}
              </button>
              <button
                onClick={() => copyToClipboard(INVITATION_LINK, 'link')}
                className="flex-1 min-h-[44px] px-4 py-2.5 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
              >
                {copiedLink ? (
                  <>
                    <Check size={18} className="animate-bounce" />
                    {language === 'en' ? 'Copied!' : 'Đã sao!'}
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    {language === 'en' ? 'Copy' : 'Sao chép'}
                  </>
                )}
              </button>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-1.5 hidden sm:block">
            {language === 'en' ? '💡 Tip: Click the link or press Ctrl+Shift+C to copy' : '💡 Mẹo: Nhấn vào link hoặc nhấn Ctrl+Shift+C để sao chép'}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2 sm:pt-4">
          <button
            onClick={shareInvitation}
            className="flex-1 min-h-[44px] px-4 sm:px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
          >
            <Share2 size={18} />
            {language === 'en' ? 'Share' : 'Chia sẻ'}
          </button>
          <button
            onClick={printInvitation}
            className="flex-1 min-h-[44px] px-4 sm:px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
          >
            <Printer size={18} />
            {language === 'en' ? 'Print' : 'In'}
          </button>
        </div>

        {/* Instructions */}
        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-3 sm:p-4 mt-3 sm:mt-4">
          <p className="text-xs sm:text-sm text-blue-200">
            {language === 'en'
              ? '💡 Share this invitation code or link with new members to help them register on DSJ Exchange.'
              : '💡 Chia sẻ mã mời hoặc link với người mới để giúp họ đăng ký DSJ.'}
          </p>
        </div>

        {/* Keyboard Shortcuts Help - Hidden on mobile */}
        <details className="bg-gray-800/50 rounded-lg p-3 sm:p-4 hidden sm:block">
          <summary className="cursor-pointer text-sm font-semibold text-gray-300 hover:text-white">
            ⌨️ {language === 'en' ? 'Keyboard Shortcuts' : 'Phím tắt'}
          </summary>
          <div className="mt-3 space-y-2 text-xs text-gray-400">
            <div className="flex justify-between">
              <span>Ctrl + C</span>
              <span>{language === 'en' ? 'Copy invitation code' : 'Sao chép mã mời'}</span>
            </div>
            <div className="flex justify-between">
              <span>Ctrl + Shift + C</span>
              <span>{language === 'en' ? 'Copy invitation link' : 'Sao chép link mời'}</span>
            </div>
            <div className="flex justify-between">
              <span>Ctrl + P</span>
              <span>{language === 'en' ? 'Print invitation' : 'In mã mời'}</span>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}
