import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, Clock, AlertCircle, Menu, X, Home, BookOpen, Settings, LogOut, Volume2, Eye, EyeOff } from 'lucide-react';

export default function CompleteBGDashboard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [completedItems, setCompletedItems] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedVideos, setExpandedVideos] = useState({});
  const [userProfile, setUserProfile] = useState({
    name: 'New Member',
    email: 'user@example.com',
    depositAmount: 0,
    joinDate: new Date().toLocaleDateString()
  });

  // Load data from localStorage
  useEffect(() => {
    const savedCompleted = localStorage.getItem('completedSteps');
    const savedItems = localStorage.getItem('completedItems');
    const savedProfile = localStorage.getItem('userProfile');
    
    if (savedCompleted) setCompletedSteps(JSON.parse(savedCompleted));
    if (savedItems) setCompletedItems(JSON.parse(savedItems));
    if (savedProfile) setUserProfile(JSON.parse(savedProfile));
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem('completedSteps', JSON.stringify(completedSteps));
    localStorage.setItem('completedItems', JSON.stringify(completedItems));
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
  }, [completedSteps, completedItems, userProfile]);

  const tutorials = [
    {
      title: "Create Your Account",
      duration: "5 min",
      icon: "👤",
      description: "Set up your DSJ account and get started",
      videos: [
        { title: "Account Creation Guide", url: "https://youtube.com/embed/YUu-bGnu5SI" }
      ],
      sections: [
        {
          heading: "Step 1: Get Invitation Link",
          content: [
            "Ask your referrer to log into their DSJ account",
            "Click the person icon (top left) → Select 'Share with friends'",
            "Copy your 'My invitation code link'",
            "Send the link to new members"
          ]
        },
        {
          heading: "Step 2: Register New Account",
          content: [
            "Open the invitation link in Safari or Chrome",
            "You can register with Email or Mobile Number",
            "Fill in your email address and get verification code",
            "Enter the code (if it's math like '9-5=?' just enter result)",
            "Create and confirm your password",
            "Click Register"
          ]
        },
        {
          heading: "Step 3: Log In",
          content: [
            "Enter your email and password on the login screen",
            "Click 'Save Password' for easy access later",
            "Click 'Log In' to access DSJ Exchange"
          ]
        }
      ]
    },
    {
      title: "Deposit & Setup Assets",
      duration: "10 min",
      icon: "💰",
      description: "Add funds to your trading account",
      videos: [],
      sections: [
        {
          heading: "Get Your Deposit Info",
          content: [
            "Click Assets (bottom right corner)",
            "Click Deposit",
            "Screenshot the QR code",
            "Copy the deposit link",
            "Send both to your referrer"
          ]
        },
        {
          heading: "Send Funds via Zelle",
          content: [
            "Wait for seller's Zelle information",
            "Send payment via Zelle",
            "Screenshot proof of payment",
            "Send screenshot to your referrer",
            "Wait for seller to deposit crypto into your DSJ account"
          ]
        },
        {
          heading: "Verify Your Deposit",
          content: [
            "Go to Assets and check your balance",
            "You should see your deposit amount in your account",
            "If you deposited $500+, you'll see reward bonuses",
            "You're ready for the next step!"
          ]
        }
      ]
    },
    {
      title: "Join BonChat",
      duration: "8 min",
      icon: "💬",
      description: "Connect with the community on BonChat",
      videos: [
        { title: "BonChat Setup Video", url: "https://youtube.com/embed/YUu-bGnu5SI" }
      ],
      sections: [
        {
          heading: "Download BonChat",
          content: [
            "Click: https://www.bonchat.live/?id=d333666",
            "OR search 'BonChat' in App Store (iPhone) or Google Play (Android)",
            "Download and open the app"
          ]
        },
        {
          heading: "Enter Server ID",
          content: [
            "Open BonChat app",
            "You'll see 'Server ID/Domain' field",
            "For USA: Enter D333666",
            "For Vietnam/Europe/Africa/Asia: Enter S333666",
            "Click Join"
          ]
        },
        {
          heading: "Create Account",
          content: [
            "Click 'Sign up' at the bottom",
            "Select your country",
            "Enter your phone number",
            "Click 'Send' to get SMS code",
            "Enter the code in 'SMS Code' field",
            "Check both confirmation boxes",
            "Click 'Continue'"
          ]
        },
        {
          heading: "Set Profile & Add Contacts",
          content: [
            "Create a Nick Name",
            "Create and confirm your password",
            "Click 'Continue'",
            "Click the person icon (bottom right) to add profile picture",
            "Your Bonchat ID starts with 'u' (visible in person icon)"
          ]
        },
        {
          heading: "Add Professors & Assistants",
          content: [
            "USA & International: Add Stephen03 & Elena03",
            "Vietnam Only: Add Stephen001 & RosaRosa8",
            "Search each name, click, say 'Hi' and click 'Send Request'",
            "Wait for approval"
          ]
        }
      ]
    },
    {
      title: "Complete Registration Form",
      duration: "5 min",
      icon: "📋",
      description: "Fill out your profile information",
      videos: [],
      sections: [
        {
          heading: "Elena's Questions",
          content: [
            "Elena will ask: 'Did you register using email or phone?'",
            "If you used email for DSJ: Provide your email",
            "If you used phone for DSJ: Provide your phone number"
          ]
        },
        {
          heading: "Fill Out BG-Wealth Form",
          content: [
            "Full Name: Your complete name",
            "Country/Region: Your location",
            "Join Date: Today's date",
            "Deposit Amount: How much you deposited",
            "New Account ID: Your DSJ account ID (Home → Person icon → ID → Copy)",
            "Recommended Account ID: Your referrer's DSJ account ID"
          ]
        },
        {
          heading: "Professor Stephen's Questions",
          content: [
            "Your Name: Full name",
            "Transaction Process: 'Not yet, I am learning'",
            "Age: Your age",
            "Initial Deposit: e.g., '1000 USDT'",
            "DSJEX Account: Your DSJ account ID",
            "Referrer Name: Your referrer's name",
            "Region: e.g., 'United States'"
          ]
        }
      ]
    },
    {
      title: "Transfer Funds & Start Trading",
      duration: "3 min",
      icon: "📊",
      description: "Move funds and begin trading",
      videos: [],
      sections: [
        {
          heading: "Transfer to Trading Account",
          content: [
            "Log into DSJ account",
            "Click Assets (bottom right)",
            "Click 'Transfer'",
            "Select 'All' to transfer everything",
            "Move funds from Exchange → Trade account",
            "You're now ready to trade! 🥳"
          ]
        },
        {
          heading: "Trading Schedule",
          content: [
            "Trading times (EST): 1:20 PM and 7:20 PM",
            "You have 10 minutes to execute each trade",
            "SET ALARMS for your local timezone",
            "Bonus signals start on Day 2",
            "First day deposit of $500+ = 6 bonus signals over 1.5 days"
          ]
        }
      ]
    },
    {
      title: "How to Follow Bonus Signals",
      duration: "4 min",
      icon: "🎯",
      description: "Learn to execute bonus signal trades",
      videos: [
        { title: "Bonus Trading Tutorial", url: "https://youtube.com/embed/5ZaTrGK70iw" },
        { title: "Advanced Trading Tips", url: "https://youtube.com/embed/wH89VHy9Fec" }
      ],
      sections: [
        {
          heading: "Bonus Trading Process",
          content: [
            "NO CODE NEEDED for bonuses",
            "Simply click: Futures → Invited me → Confirm to follow order",
            "You have 10 minutes after signal is sent",
            "Bonuses available 2-3 minutes before official time"
          ]
        },
        {
          heading: "Day 1 Bonus Times (EST)",
          content: [
            "2:00 PM",
            "2:30 PM",
            "8:30 PM",
            "9:00 PM"
          ]
        },
        {
          heading: "Day 2 Bonus Times (EST)",
          content: [
            "2:00 PM",
            "2:30 PM",
            "Then bonus period ends"
          ]
        },
        {
          heading: "Important Reminders",
          content: [
            "System time is EST (Florida/New York)",
            "Convert to your local timezone",
            "Set alarms for all trading & bonus times",
            "If you miss a signal, it's not recoverable",
            "If there's a technical error, take screenshot and send to Elena/Stephen"
          ]
        }
      ]
    }
  ];

  const handleStepComplete = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
  };

  const handleItemComplete = (stepIdx, sectionIdx, itemIdx) => {
    const key = `${stepIdx}-${sectionIdx}-${itemIdx}`;
    setCompletedItems({
      ...completedItems,
      [key]: !completedItems[key]
    });
  };

  const handleNext = () => {
    if (currentStep < tutorials.length - 1) {
      setCurrentStep(currentStep + 1);
      setMobileMenuOpen(false);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setMobileMenuOpen(false);
    }
  };

  const toggleVideo = (videoIdx) => {
    setExpandedVideos({
      ...expandedVideos,
      [videoIdx]: !expandedVideos[videoIdx]
    });
  };

  const tutorial = tutorials[currentStep];
  const isCompleted = completedSteps.includes(currentStep);
  const overallProgress = Math.round((completedSteps.length / tutorials.length) * 100);

  const countCompletedItems = (stepIdx) => {
    let count = 0;
    let total = 0;
    tutorials[stepIdx].sections.forEach((section, sectionIdx) => {
      section.content.forEach((item, itemIdx) => {
        total++;
        const key = `${stepIdx}-${sectionIdx}-${itemIdx}`;
        if (completedItems[key]) count++;
      });
    });
    return { count, total };
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar - Desktop */}
      <div className={`hidden md:flex md:flex-col md:w-64 bg-indigo-700 text-white transition-all duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Logo/Header */}
        <div className="p-6 border-b border-indigo-600">
          <h1 className="text-2xl font-bold">🚀 BG Trader</h1>
          <p className="text-indigo-200 text-sm mt-2">Onboarding Guide</p>
        </div>

        {/* User Profile Card */}
        <div className="p-4 m-4 bg-indigo-600 rounded-lg">
          <p className="text-sm font-semibold truncate">{userProfile.name}</p>
          <p className="text-xs text-indigo-200 truncate">{userProfile.email}</p>
          <div className="mt-3 pt-3 border-t border-indigo-500">
            <p className="text-xs text-indigo-200">Progress</p>
            <div className="mt-2 bg-indigo-700 rounded-full h-2">
              <div className="bg-green-400 h-2 rounded-full" style={{ width: `${overallProgress}%` }} />
            </div>
            <p className="text-xs font-bold mt-2 text-green-300">{overallProgress}% Complete</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <p className="text-xs font-semibold text-indigo-300 uppercase mb-4">Steps</p>
          {tutorials.map((t, idx) => {
            const { count, total } = countCompletedItems(idx);
            return (
              <button
                key={idx}
                onClick={() => {
                  setCurrentStep(idx);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition ${
                  idx === currentStep
                    ? 'bg-white text-indigo-700 font-semibold shadow-lg'
                    : completedSteps.includes(idx)
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'text-indigo-100 hover:bg-indigo-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{t.icon}</span>
                    <span className="text-sm font-medium truncate">{t.title}</span>
                  </div>
                  {completedSteps.includes(idx) && <CheckCircle size={16} />}
                </div>
                <div className="text-xs text-opacity-75 mt-1 ml-7">
                  {count}/{total} items
                </div>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-indigo-600 space-y-2">
          <button className="w-full flex items-center gap-2 px-4 py-2 text-indigo-100 hover:bg-indigo-600 rounded-lg transition">
            <Settings size={18} />
            <span className="text-sm">Settings</span>
          </button>
          <button className="w-full flex items-center gap-2 px-4 py-2 text-indigo-100 hover:bg-indigo-600 rounded-lg transition">
            <LogOut size={18} />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-64 bg-indigo-700 text-white overflow-y-auto">
            <div className="p-4 flex justify-between items-center border-b border-indigo-600">
              <h1 className="text-xl font-bold">🚀 BG Trader</h1>
              <button onClick={() => setMobileMenuOpen(false)}><X size={24} /></button>
            </div>
            <nav className="p-4">
              {tutorials.map((t, idx) => {
                const { count, total } = countCompletedItems(idx);
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentStep(idx);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition ${
                      idx === currentStep
                        ? 'bg-white text-indigo-700 font-semibold'
                        : completedSteps.includes(idx)
                        ? 'bg-green-500 text-white'
                        : 'text-indigo-100 hover:bg-indigo-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{t.icon}</span>
                        <span className="text-sm">{t.title}</span>
                      </div>
                      {completedSteps.includes(idx) && <CheckCircle size={16} />}
                    </div>
                    <div className="text-xs mt-1 ml-7">{count}/{total}</div>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation Bar */}
        <div className="bg-white shadow-md px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu size={24} />
            </button>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">{tutorial.title}</h2>
              <p className="text-xs md:text-sm text-gray-600">{tutorial.description}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl md:text-3xl font-bold text-indigo-600">{tutorial.icon}</div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto p-4 md:p-8">
            {/* Videos Section */}
            {tutorial.videos.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Volume2 size={24} />
                  Video Tutorials
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tutorial.videos.map((video, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                      <button
                        onClick={() => toggleVideo(idx)}
                        className="w-full aspect-video bg-gray-900 flex items-center justify-center relative group"
                      >
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition flex items-center justify-center">
                          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                            <ChevronRight size={32} className="text-white ml-1" />
                          </div>
                        </div>
                        <img 
                          src={`https://img.youtube.com/vi/${video.url.split('/').pop()}/maxresdefault.jpg`} 
                          alt={video.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/320x180?text=Video'
                          }}
                        />
                      </button>
                      <div className="p-4">
                        <p className="font-semibold text-gray-800">{video.title}</p>
                        {expandedVideos[idx] && (
                          <div className="mt-4 aspect-video">
                            <iframe
                              width="100%"
                              height="100%"
                              src={video.url + '?autoplay=1'}
                              title={video.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="rounded-lg"
                            />
                          </div>
                        )}
                        <button
                          onClick={() => toggleVideo(idx)}
                          className="mt-3 w-full px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
                        >
                          {expandedVideos[idx] ? 'Hide Video' : 'Watch Video'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Checklist Sections */}
            <div className="space-y-6">
              {tutorial.sections.map((section, sectionIdx) => (
                <div key={sectionIdx} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <span className="bg-white bg-opacity-25 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                        {sectionIdx + 1}
                      </span>
                      {section.heading}
                    </h3>
                  </div>
                  <div className="p-6 space-y-3">
                    {section.content.map((item, itemIdx) => {
                      const key = `${currentStep}-${sectionIdx}-${itemIdx}`;
                      const isChecked = completedItems[key];
                      return (
                        <div
                          key={itemIdx}
                          className={`flex items-start gap-4 p-3 rounded-lg transition ${
                            isChecked ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200 hover:border-indigo-300'
                          }`}
                        >
                          <button
                            onClick={() => handleItemComplete(currentStep, sectionIdx, itemIdx)}
                            className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 transition ${
                              isChecked
                                ? 'bg-green-500 border-green-500'
                                : 'border-gray-300 hover:border-indigo-500'
                            }`}
                          >
                            {isChecked && <CheckCircle size={20} className="text-white" />}
                          </button>
                          <p className={`text-base leading-relaxed flex-1 ${isChecked ? 'text-gray-600 line-through' : 'text-gray-700'}`}>
                            {item}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Important Info Box */}
            <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-lg p-6 md:p-8">
              <div className="flex gap-4">
                <AlertCircle className="text-blue-600 flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-blue-900 mb-2 text-lg">⏰ Important Time Reminder</h4>
                  <p className="text-blue-800">
                    All system times are in EST (Florida/New York timezone). Remember to convert to your local timezone and set alarms for all trading and bonus signal times!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-white border-t border-gray-200 px-4 md:px-8 py-4 md:py-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition"
            >
              <ChevronLeft size={20} />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="flex items-center gap-2">
              {tutorials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentStep(idx)}
                  className={`hidden sm:block w-10 h-10 rounded-full font-bold transition ${
                    idx === currentStep
                      ? 'bg-indigo-600 text-white shadow-lg scale-110'
                      : completedSteps.includes(idx)
                      ? 'bg-green-500 text-white hover:scale-105'
                      : 'bg-gray-300 text-gray-600 hover:bg-gray-400'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={handleStepComplete}
                className={`px-6 py-3 rounded-lg font-semibold transition flex-1 sm:flex-none ${
                  isCompleted
                    ? 'bg-green-500 text-white'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {isCompleted ? '✓ Completed' : 'Mark Complete'}
              </button>

              <button
                onClick={handleNext}
                disabled={currentStep === tutorials.length - 1}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
