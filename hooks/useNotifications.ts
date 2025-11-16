'use client';

import { useEffect, useState } from 'react';
import { getTradingTimes } from '@/lib/utils';

export function useNotifications() {
  const [permission, setPermission] = useState<NotificationPermission>('default');
  const [alarmsEnabled, setAlarmsEnabled] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      setPermission(Notification.permission);
      const saved = localStorage.getItem('alarmsEnabled');
      setAlarmsEnabled(saved === 'true');
    }
  }, []);

  const requestPermission = async () => {
    if ('Notification' in window) {
      const result = await Notification.requestPermission();
      setPermission(result);
      if (result === 'granted') {
        setAlarmsEnabled(true);
        localStorage.setItem('alarmsEnabled', 'true');
      }
      return result;
    }
    return 'denied';
  };

  const toggleAlarms = () => {
    const newState = !alarmsEnabled;
    setAlarmsEnabled(newState);
    localStorage.setItem('alarmsEnabled', String(newState));

    if (newState && permission !== 'granted') {
      requestPermission();
    }
  };

  const showNotification = (title: string, body: string, icon?: string) => {
    if (permission === 'granted' && alarmsEnabled) {
      new Notification(title, {
        body,
        icon: icon || '/icon.png',
        badge: '/icon.png',
        tag: 'trading-alarm',
        requireInteraction: true,
      });

      // Play sound
      const audio = new Audio('/notification.mp3');
      audio.play().catch(() => {
        // Fallback to beep
        const context = new AudioContext();
        const oscillator = context.createOscillator();
        const gainNode = context.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(context.destination);
        oscillator.frequency.value = 800;
        gainNode.gain.value = 0.3;
        oscillator.start();
        setTimeout(() => oscillator.stop(), 200);
      });
    }
  };

  const scheduleAlarms = () => {
    if (permission !== 'granted' || !alarmsEnabled) return;

    const tradingTimes = getTradingTimes();
    const now = new Date();

    tradingTimes.forEach(time => {
      const sessionTime = new Date();
      sessionTime.setHours(time.hour, time.minute, 0, 0);

      // 15 minute warning
      const fifteenMin = new Date(sessionTime.getTime() - 15 * 60 * 1000);
      if (fifteenMin > now) {
        const timeout = fifteenMin.getTime() - now.getTime();
        setTimeout(() => {
          showNotification(
            '⏰ Trading Alert - 15 Minutes',
            `${time.label} starts in 15 minutes! Get ready.`
          );
        }, timeout);
      }

      // 5 minute warning
      const fiveMin = new Date(sessionTime.getTime() - 5 * 60 * 1000);
      if (fiveMin > now) {
        const timeout = fiveMin.getTime() - now.getTime();
        setTimeout(() => {
          showNotification(
            '🚨 Trading Alert - 5 Minutes',
            `${time.label} starts in 5 minutes! Log in now.`
          );
        }, timeout);
      }

      // 1 minute warning
      const oneMin = new Date(sessionTime.getTime() - 1 * 60 * 1000);
      if (oneMin > now) {
        const timeout = oneMin.getTime() - now.getTime();
        setTimeout(() => {
          showNotification(
            '🔔 Trading Alert - 1 Minute!',
            `${time.label} starts NOW! Execute your trade.`
          );
        }, timeout);
      }
    });
  };

  useEffect(() => {
    if (alarmsEnabled && permission === 'granted') {
      scheduleAlarms();
      // Reschedule every hour to catch new sessions
      const interval = setInterval(scheduleAlarms, 60 * 60 * 1000);
      return () => clearInterval(interval);
    }
  }, [alarmsEnabled, permission]);

  return {
    permission,
    alarmsEnabled,
    requestPermission,
    toggleAlarms,
    showNotification,
  };
}
