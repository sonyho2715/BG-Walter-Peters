'use client';

import { useState, useEffect } from 'react';
import { getTimeUntilNextSession } from '@/lib/utils';
import { TradingTime } from '@/types';

export function useCountdown() {
  const [countdown, setCountdown] = useState({ hours: 0, minutes: 0, seconds: 0, nextSession: null as TradingTime | null });

  useEffect(() => {
    const updateCountdown = () => {
      const timeData = getTimeUntilNextSession();
      setCountdown(timeData);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return countdown;
}
