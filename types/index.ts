export interface Video {
  title: string;
  url: string;
}

export interface TutorialSection {
  heading: string;
  content: string[];
}

export interface Tutorial {
  title: string;
  duration: string;
  icon: string;
  description: string;
  videos: Video[];
  sections: TutorialSection[];
}

export interface UserProfile {
  name: string;
  email: string;
  depositAmount: number;
  joinDate: string;
}

export interface CompletedItems {
  [key: string]: boolean;
}

export interface TradingTime {
  hour: number;
  minute: number;
  label: string;
}

export type Language = 'en' | 'vi';

export interface FAQ {
  question: string;
  answer: string;
}

export interface GoodToKnowItem {
  title: string;
  content: string;
}

export interface Translations {
  common: {
    next: string;
    previous: string;
    markComplete: string;
    completed: string;
    progress: string;
    settings: string;
    logout: string;
    items: string;
    videoTutorials: string;
    watchVideo: string;
    hideVideo: string;
    faqs: string;
    goodToKnow: string;
  };
  dashboard: {
    title: string;
    onboarding: string;
    nextSession: string;
    timeUntil: string;
    tradingTimes: string;
    yourLocalTime: string;
    autoConverted: string;
    importantReminder: string;
    reminderText: string;
  };
  tutorials: Tutorial[];
  faqs: FAQ[];
  goodToKnow: GoodToKnowItem[];
}
