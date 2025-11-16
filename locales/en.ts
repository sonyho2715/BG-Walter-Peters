import { Translations } from '@/types';

export const en: Translations = {
  common: {
    next: 'Next',
    previous: 'Previous',
    markComplete: 'Mark Complete',
    completed: 'Completed',
    progress: 'Progress',
    settings: 'Settings',
    logout: 'Logout',
    items: 'items',
    videoTutorials: 'Video Tutorials',
    watchVideo: 'Watch Video',
    hideVideo: 'Hide Video',
    faqs: 'Frequently Asked Questions',
    goodToKnow: 'Good to Know',
  },
  dashboard: {
    title: 'AI Trading',
    onboarding: 'Onboarding Guide',
    nextSession: 'Next Trading Session',
    timeUntil: 'Time until next session:',
    tradingTimes: 'Trading Times (Your Local Time',
    yourLocalTime: 'Your Local Time',
    autoConverted: 'All times automatically converted from EST to your timezone',
    importantReminder: 'Important Time Reminder',
    reminderText: 'All system times are in EST (Florida/New York timezone). The times shown above are automatically converted to your local timezone. Remember to set alarms for all trading and bonus signal times!',
  },
  tutorials: [
    {
      title: "Create Your Account",
      duration: "5 min",
      icon: "👤",
      description: "Set up your DSJ account and get started",
      videos: [],
      sections: [
        {
          heading: "Step 1: Register New Account",
          content: [
            "Use the invitation code and link shown above",
            "Open the invitation link in Safari or Chrome",
            "You can register with Email or Mobile Number",
            "Fill in your email address and get verification code",
            "Enter the code (if it's math like '9-5=?' just enter result)",
            "Create and confirm your password",
            "Click Register"
          ]
        },
        {
          heading: "Step 2: Log In",
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
  ],
  faqs: [
    {
      question: "What if I miss a trading signal?",
      answer: "Unfortunately, if you miss a trading signal, it cannot be recovered. Make sure to set alarms for all trading times in your local timezone to avoid missing signals."
    },
    {
      question: "How do I know if I'm in the right timezone?",
      answer: "All trading times shown in the dashboard are automatically converted to your local timezone. Just make sure your device's system clock is set correctly."
    },
    {
      question: "What is the minimum deposit amount?",
      answer: "You can start with any amount, but depositing $500 or more on your first day gives you 6 bonus signals over 1.5 days."
    },
    {
      question: "Who should I contact if I have a technical issue?",
      answer: "Take a screenshot of the issue and send it to Elena03 or Stephen03 on BonChat. They will help you resolve any technical problems."
    },
    {
      question: "How long does it take for my deposit to appear?",
      answer: "After you send payment via Zelle and provide proof to your referrer, the crypto deposit usually appears in your DSJ account within a few minutes to a few hours depending on the seller."
    },
    {
      question: "Do I need a code for bonus signals?",
      answer: "No! For bonus signals, simply click: Futures → Invited me → Confirm to follow order. No code is needed."
    }
  ],
  goodToKnow: [
    {
      title: "Trading Window",
      content: "You have exactly 10 minutes to execute each trade after the signal is sent. Set multiple alarms to ensure you don't miss it."
    },
    {
      title: "Bonus Signal Availability",
      content: "Bonus signals become available 2-3 minutes before the official time. This gives you extra time to prepare."
    },
    {
      title: "Timezone is Critical",
      content: "All system times are in EST (Eastern Standard Time). This dashboard automatically converts times to your timezone, but always double-check your device's clock is accurate."
    },
    {
      title: "Save Your Passwords",
      content: "Use your browser's password manager or a secure app to save your DSJ and BonChat passwords. You'll need quick access during trading windows."
    },
    {
      title: "Screenshot Everything",
      content: "Keep screenshots of: your deposit QR code, payment confirmations, any errors, and successful trades. These help resolve any issues quickly."
    },
    {
      title: "BonChat is Essential",
      content: "All trading signals and important updates come through BonChat. Make sure notifications are enabled and you've added the correct professors and assistants."
    },
    {
      title: "Transfer to Trade Account",
      content: "Remember to transfer your funds from Exchange account to Trade account before you can start trading. Use the 'All' button to transfer everything at once."
    },
    {
      title: "First Day Bonus",
      content: "If you deposit $500+ on your first day, you get 6 bonus trading signals spread across 1.5 days. These are in addition to the regular trading times."
    }
  ]
};
