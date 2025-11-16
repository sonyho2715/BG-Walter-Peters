import { TradingTime } from '@/types';

export function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Get user's timezone
 */
export function getUserTimezone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

/**
 * Convert EST time to user's local time
 * EST is UTC-5, so we convert EST → UTC → Local
 */
export function convertESTToLocal(hour: number, minute: number): { hour: number; minute: number; timezone: string } {
  // Get today's date
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  // EST is UTC-5, so convert EST to UTC by adding 5 hours
  // Example: 13:20 EST = 18:20 UTC
  const utcHour = hour + 5;

  // Create a UTC date - JavaScript will automatically convert to local time when we access it
  const utcDate = new Date(Date.UTC(year, month, day, utcHour, minute, 0, 0));

  return {
    hour: utcDate.getHours(),
    minute: utcDate.getMinutes(),
    timezone: getUserTimezone()
  };
}

/**
 * Format time for display
 */
export function formatTime(hour: number, minute: number): string {
  const period = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  const displayMinute = minute.toString().padStart(2, '0');
  return `${displayHour}:${displayMinute} ${period}`;
}

/**
 * Get all trading times with local conversion
 */
export function getTradingTimes(): TradingTime[] {
  const estTimes = [
    { hour: 13, minute: 20, label: 'Regular Trading 1' },
    { hour: 19, minute: 20, label: 'Regular Trading 2' },
  ];

  return estTimes.map(time => ({
    ...time,
    ...convertESTToLocal(time.hour, time.minute)
  }));
}

/**
 * Get bonus trading times with local conversion
 */
export function getBonusTimes(day: 1 | 2): TradingTime[] {
  const day1Times = [
    { hour: 14, minute: 0, label: 'Day 1 Bonus 1' },
    { hour: 14, minute: 30, label: 'Day 1 Bonus 2' },
    { hour: 20, minute: 30, label: 'Day 1 Bonus 3' },
    { hour: 21, minute: 0, label: 'Day 1 Bonus 4' },
  ];

  const day2Times = [
    { hour: 14, minute: 0, label: 'Day 2 Bonus 1' },
    { hour: 14, minute: 30, label: 'Day 2 Bonus 2' },
  ];

  const times = day === 1 ? day1Times : day2Times;

  return times.map(time => ({
    ...time,
    ...convertESTToLocal(time.hour, time.minute)
  }));
}

/**
 * Calculate time until next trading session
 */
export function getTimeUntilNextSession(): { hours: number; minutes: number; seconds: number; nextSession: TradingTime | null } {
  const now = new Date();
  const tradingTimes = getTradingTimes();

  // Find next trading time
  for (const time of tradingTimes) {
    const sessionTime = new Date();
    sessionTime.setHours(time.hour, time.minute, 0, 0);

    if (sessionTime > now) {
      const diff = sessionTime.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      return { hours, minutes, seconds, nextSession: time };
    }
  }

  // If no session today, return first session tomorrow
  const firstSession = tradingTimes[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(firstSession.hour, firstSession.minute, 0, 0);

  const diff = tomorrow.getTime() - now.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { hours, minutes, seconds, nextSession: firstSession };
}
