'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { updateRecruitProfile, logoutRecruit } from '@/app/actions/recruit';
import {
  BarChart3, Save, Eye, LogOut, User, Palette, Link as LinkIcon,
  MessageSquare, Settings, CheckCircle2, ExternalLink, Key
} from 'lucide-react';

interface Recruit {
  id: string;
  slug: string;
  name: string;
  email: string;
  phone: string | null;
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

interface RecruitEditDashboardProps {
  recruit: Recruit;
}

type TabType = 'profile' | 'branding' | 'referral' | 'social' | 'settings';

export default function RecruitEditDashboard({ recruit }: RecruitEditDashboardProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    name: recruit.name,
    leader: recruit.leader || '',
    headline: recruit.headline || '',
    subheadline: recruit.subheadline || '',
    bio: recruit.bio || '',
    photoUrl: recruit.photoUrl || '',
    youtubeUrl: recruit.youtubeUrl || '',
    primaryColor: recruit.primaryColor,
    accentColor: recruit.accentColor,
    referralCode: recruit.referralCode,
    referralLink: recruit.referralLink,
    telegramLink: recruit.telegramLink || '',
    whatsappLink: recruit.whatsappLink || '',
    showTestimonials: recruit.showTestimonials,
    showCalculator: recruit.showCalculator,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
    setSaved(false);
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
    setSaved(false);
  };

  async function handleSave() {
    setLoading(true);
    setError('');
    setSaved(false);

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, String(value));
    });

    const result = await updateRecruitProfile(form);

    if (result.success) {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } else {
      setError(result.error || 'Save failed');
    }

    setLoading(false);
  }

  const tabs = [
    { id: 'profile' as TabType, label: 'Profile', icon: User },
    { id: 'branding' as TabType, label: 'Branding', icon: Palette },
    { id: 'referral' as TabType, label: 'Referral', icon: Key },
    { id: 'social' as TabType, label: 'Social', icon: MessageSquare },
    { id: 'settings' as TabType, label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-gray-900 dark:text-white hidden sm:block">AI Trading</span>
              </Link>
              <div className="h-6 w-px bg-gray-300 dark:bg-gray-600" />
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                Page Editor
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href={`/r/${recruit.slug}`}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span className="hidden sm:inline">Preview</span>
                <ExternalLink className="w-3 h-3" />
              </Link>

              <button
                onClick={handleSave}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors disabled:opacity-50"
              >
                {saved ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Saved!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span className="hidden sm:inline">{loading ? 'Saving...' : 'Save'}</span>
                  </>
                )}
              </button>

              <form action={logoutRecruit}>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Page URL Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-4 mb-6 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-sm text-indigo-100">Your personalized page URL:</p>
              <p className="font-mono text-lg">{typeof window !== 'undefined' ? window.location.origin : ''}/r/{recruit.slug}</p>
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(`${window.location.origin}/r/${recruit.slug}`);
              }}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors text-sm font-medium"
            >
              Copy Link
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-1">
            <nav className="bg-white dark:bg-gray-800 rounded-xl p-2 space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Profile Information</h2>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Leader Title
                    </label>
                    <input
                      type="text"
                      name="leader"
                      value={formData.leader}
                      onChange={handleInputChange}
                      placeholder="e.g., Senior Team Leader, Diamond Partner"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <p className="mt-1 text-xs text-gray-500">Your leadership title or designation</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Custom Headline
                    </label>
                    <input
                      type="text"
                      name="headline"
                      value={formData.headline}
                      onChange={handleInputChange}
                      placeholder="Turn $500 into $1,000+ in 60 days"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <p className="mt-1 text-xs text-gray-500">Leave blank to use default</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Custom Subheadline
                    </label>
                    <input
                      type="text"
                      name="subheadline"
                      value={formData.subheadline}
                      onChange={handleInputChange}
                      placeholder="No Experience Required. Start Today."
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      About You / Welcome Message
                    </label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell visitors about yourself and why they should join..."
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Profile Photo URL
                    </label>
                    <input
                      type="url"
                      name="photoUrl"
                      value={formData.photoUrl}
                      onChange={handleInputChange}
                      placeholder="https://..."
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <p className="mt-1 text-xs text-gray-500">Upload your photo to a service like Imgur and paste the URL</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      YouTube Video URL
                    </label>
                    <input
                      type="url"
                      name="youtubeUrl"
                      value={formData.youtubeUrl}
                      onChange={handleInputChange}
                      placeholder="https://www.youtube.com/watch?v=..."
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <p className="mt-1 text-xs text-gray-500">Add a YouTube video to your landing page (e.g., intro video, testimonial)</p>
                  </div>
                </div>
              )}

              {/* Branding Tab */}
              {activeTab === 'branding' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Brand Colors</h2>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Primary Color
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="color"
                          name="primaryColor"
                          value={formData.primaryColor}
                          onChange={handleInputChange}
                          className="w-12 h-12 rounded-lg cursor-pointer border-0"
                        />
                        <input
                          type="text"
                          value={formData.primaryColor}
                          onChange={(e) => setFormData(prev => ({ ...prev, primaryColor: e.target.value }))}
                          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Accent Color
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="color"
                          name="accentColor"
                          value={formData.accentColor}
                          onChange={handleInputChange}
                          className="w-12 h-12 rounded-lg cursor-pointer border-0"
                        />
                        <input
                          type="text"
                          value={formData.accentColor}
                          onChange={(e) => setFormData(prev => ({ ...prev, accentColor: e.target.value }))}
                          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-mono"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Preview */}
                  <div className="mt-8 p-6 rounded-xl" style={{ background: `linear-gradient(135deg, ${formData.primaryColor}20, ${formData.accentColor}20)` }}>
                    <h3 className="text-lg font-bold mb-2" style={{ color: formData.primaryColor }}>Preview</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">This is how your colors will look on your page.</p>
                    <button
                      className="px-6 py-3 rounded-full text-white font-semibold"
                      style={{ background: `linear-gradient(to right, ${formData.primaryColor}, ${formData.accentColor})` }}
                    >
                      Sample Button
                    </button>
                  </div>
                </div>
              )}

              {/* Referral Tab */}
              {activeTab === 'referral' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Referral Information</h2>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Referral Code
                    </label>
                    <input
                      type="text"
                      name="referralCode"
                      value={formData.referralCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Referral Link
                    </label>
                    <input
                      type="url"
                      name="referralLink"
                      value={formData.referralLink}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      This link will be used when visitors click "Get Started" on your page
                    </p>
                  </div>
                </div>
              )}

              {/* Social Tab */}
              {activeTab === 'social' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Social & Contact Links</h2>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Telegram Link
                    </label>
                    <input
                      type="url"
                      name="telegramLink"
                      value={formData.telegramLink}
                      onChange={handleInputChange}
                      placeholder="https://t.me/yourusername"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      WhatsApp Link
                    </label>
                    <input
                      type="url"
                      name="whatsappLink"
                      value={formData.whatsappLink}
                      onChange={handleInputChange}
                      placeholder="https://wa.me/1234567890"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Page Settings</h2>

                  <div className="space-y-4">
                    <label className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg cursor-pointer">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Show Testimonials</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Display testimonials section on your page</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={formData.showTestimonials}
                        onChange={(e) => handleCheckboxChange('showTestimonials', e.target.checked)}
                        className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500"
                      />
                    </label>

                    <label className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg cursor-pointer">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Show Calculator</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Display earnings calculator on your page</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={formData.showCalculator}
                        onChange={(e) => handleCheckboxChange('showCalculator', e.target.checked)}
                        className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500"
                      />
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
