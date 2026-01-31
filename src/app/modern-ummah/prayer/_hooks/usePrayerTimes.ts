'use client';

import { useState, useEffect } from 'react';

export interface UsePrayerTimesReturn {
    activePrayer: number;
    currentTime: string;
    isFriday: boolean;
    dateString: string;
}

export function usePrayerTimes(): UsePrayerTimesReturn {
    const [activePrayer, setActivePrayer] = useState(2); // Default to Dhuhr
    const [currentTime, setCurrentTime] = useState('');
    const today = new Date();
    const isFriday = today.getDay() === 5;

    // Update current time
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    // Determine active prayer based on current time
    useEffect(() => {
        const now = new Date();
        const currentHour = now.getHours();

        if (currentHour < 6) setActivePrayer(0);       // Fajr
        else if (currentHour < 8) setActivePrayer(1);  // Sunrise
        else if (currentHour < 14) setActivePrayer(2); // Dhuhr
        else if (currentHour < 17) setActivePrayer(3); // Asr
        else if (currentHour < 19) setActivePrayer(4); // Maghrib
        else setActivePrayer(5);                        // Isha
    }, []);

    const dateString = today.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    return { activePrayer, currentTime, isFriday, dateString };
}
