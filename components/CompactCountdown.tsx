'use client';

import { useState, useEffect } from 'react';

export default function CompactCountdown() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();

      // Trading times in EST (13:20 and 19:20)
      // EST is UTC-5, so we need to convert EST to UTC, then UTC to local
      const estTradingTimes = [
        { hour: 13, minute: 20 }, // 1:20 PM EST
        { hour: 19, minute: 20 }  // 7:20 PM EST
      ];

      // Convert EST times to local times
      const localTradingTimes = estTradingTimes.map(estTime => {
        // Create a date for today in UTC
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const day = today.getDate();

        // EST is UTC-5, so convert EST to UTC
        // 13:20 EST = 18:20 UTC
        const utcHour = estTime.hour + 5; // Add 5 to convert EST to UTC

        // Create UTC date
        const utcDate = new Date(Date.UTC(year, month, day, utcHour, estTime.minute, 0, 0));

        // JavaScript automatically converts to local time
        return {
          time: utcDate,
          hour: utcDate.getHours(),
          minute: utcDate.getMinutes()
        };
      });

      // Find next trading session
      let nextSession = null;

      for (const session of localTradingTimes) {
        if (session.time > now) {
          nextSession = session.time;
          break;
        }
      }

      // If no session today, get first session tomorrow
      if (!nextSession) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const year = tomorrow.getFullYear();
        const month = tomorrow.getMonth();
        const day = tomorrow.getDate();

        // First session is 13:20 EST = 18:20 UTC
        const utcHour = estTradingTimes[0].hour + 5;
        nextSession = new Date(Date.UTC(year, month, day, utcHour, estTradingTimes[0].minute, 0, 0));
      }

      // Calculate time difference
      const diff = nextSession.getTime() - now.getTime();

      if (diff < 0) {
        return '0h 0m 0s';
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      return `${hours}h ${minutes}m ${seconds}s`;
    };

    // Update immediately
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
      <span className="text-sm">⏰</span>
      <span className="text-sm font-semibold">{timeLeft}</span>
    </div>
  );
}
