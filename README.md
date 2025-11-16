# BG Wealth Sharing Onboarding Dashboard

An interactive onboarding dashboard for BG Wealth Sharing with comprehensive step-by-step tutorials, video guides, and progress tracking based on official BG training materials.

## Features

- ✅ **Comprehensive Tutorials**: 10 detailed onboarding steps covering everything from principles to withdrawals
- 📹 **Video Guides**: Embedded YouTube tutorials with expert guidance
- ✓ **Interactive Checklists**: Track your progress through each step
- 🌙 **Dark Mode**: Full dark mode support with system preference detection
- ⏰ **Timezone Conversion**: Automatic EST to local timezone conversion
- ⏱️ **Countdown Timer**: Live countdown to next trading session
- 🔔 **Alarm Settings**: Customizable trading time reminders
- 💾 **Progress Persistence**: All progress saved in localStorage
- 📱 **Fully Responsive**: Works on mobile, tablet, and desktop
- 🌐 **Multi-language Support**: English and Vietnamese translations

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks + localStorage

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn

### Installation

1. Clone or download this repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

Or push to GitHub and connect your repository to Vercel for automatic deployments.

### Alternative Deployment Options

- **Netlify**: `npm run build` then deploy the `.next` folder
- **Self-hosted**: Run `npm run build && npm start` on your server

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main dashboard page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── AllStepsView.tsx
│   ├── AlarmSettings.tsx
│   ├── StickyNav.tsx
│   ├── VideoSection.tsx
│   ├── ChecklistSection.tsx
│   ├── CountdownTimer.tsx
│   ├── DarkModeToggle.tsx
│   ├── LanguageToggle.tsx
│   ├── FAQSection.tsx
│   └── GoodToKnowSection.tsx
├── contexts/              # React contexts
│   └── LanguageContext.tsx
├── hooks/                 # Custom React hooks
│   ├── useDarkMode.ts
│   ├── useCountdown.ts
│   ├── useLocalStorage.ts
│   └── useNotifications.ts
├── lib/                   # Utility functions
│   ├── tutorials.ts       # Tutorial data (10 comprehensive steps)
│   └── utils.ts          # Helper functions
├── locales/              # Multi-language support
│   ├── en.ts             # English translations
│   └── vi.ts             # Vietnamese translations
├── public/               # Static assets
│   └── docs/            # Reference documents
│       └── Understanding BG Wealth Sharing Principles.pdf
└── types/                 # TypeScript definitions
    └── index.ts
```

## Tutorial Content (10 Steps)

1. **BG Wealth Sharing Principles** - Core values, dividend claiming, and communication
2. **Get Referral Link & Code** - Obtain your invitation to join BG
3. **Create DSG Exchange Account** - Register your trading account
4. **Complete KYC Verification** - Verify identity for account security
5. **Fund Your DSG Account** - Deposit USDT to start trading
6. **Transfer to Trade Account** - Move funds to your trading wallet
7. **Join BonChat Community** - Connect with the BG community
8. **Execute Daily Trades** - Learn to execute trading codes (99.86% success rate)
9. **Daily Compounding & Growth** - Understand earning potential
10. **Withdrawal Process** - Learn how to withdraw your profits

## Features in Detail

### Timezone Conversion

The app automatically detects your timezone and converts all trading times from EST to your local time. This ensures you never miss a trading session.

### Dark Mode

Dark mode is fully integrated with:
- Automatic system preference detection
- Manual toggle
- Persistent preference storage

### Multi-language Support

Switch between English and Vietnamese with one click. All tutorial content, UI elements, and messages are fully translated.

### Progress Tracking

All your progress is automatically saved:
- Completed steps
- Checked checklist items
- User profile information
- Language preference
- Dark mode preference

### Countdown Timer

Live countdown timer showing:
- Time until next trading session
- All trading times in your local timezone
- Auto-updates every second

### Alarm Settings

Set custom alarms for trading times:
- Configure alerts for each trading session
- Browser notifications support
- Never miss a trade

## Customization

### Editing Tutorial Content

Edit the tutorials in `lib/tutorials.ts`:

```typescript
export const tutorials: Tutorial[] = [
  {
    title: "Your Step",
    duration: "5 min",
    icon: "🎯",
    description: "Description here",
    videos: [
      { title: "Video Title", url: "https://youtube.com/embed/VIDEO_ID" }
    ],
    sections: [
      {
        heading: "Section Name",
        content: [
          "Step 1",
          "Step 2"
        ]
      }
    ]
  }
];
```

### Changing Trading Times

Edit the trading times in `lib/utils.ts`:

```typescript
const estTimes = [
  { hour: 13, minute: 20, label: 'Regular Trading 1' },
  { hour: 19, minute: 20, label: 'Regular Trading 2' },
];
```

## License

This project is private and proprietary.

## Support

For issues or questions, contact your BG Trader representative.
