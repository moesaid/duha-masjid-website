'use client';

import { useState, useEffect } from 'react';
import { ZAKAT_FITR_AMOUNT, FIDYA_AMOUNT, initialSponsorForm, SponsorFormData } from '../_data';

export interface UseSeasonalStateReturn {
    // Countdown
    countdown: { hours: number; minutes: number; seconds: number };

    // Zakat calculator
    fitrCount: number;
    setFitrCount: (count: number) => void;
    fidyaCount: number;
    setFidyaCount: (count: number) => void;
    zakatTotal: number;

    // Sponsorship modal
    selectedDay: number | null;
    setSelectedDay: (day: number | null) => void;

    // Sponsor form
    sponsorForm: SponsorFormData;
    setSponsorName: (name: string) => void;
    setSponsorEmail: (email: string) => void;
    setSponsorPhone: (phone: string) => void;
    setContributionAmount: (amount: string) => void;
    setAnonymous: (anonymous: boolean) => void;
    handleSponsorSubmit: (e: React.FormEvent) => void;
}

function useCountdown(targetTime: Date) {
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const diff = targetTime.getTime() - now.getTime();

            if (diff > 0) {
                const hours = Math.floor(diff / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                setTimeLeft({ hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetTime]);

    return timeLeft;
}

export function useSeasonalState(): UseSeasonalStateReturn {
    const [fitrCount, setFitrCount] = useState(1);
    const [fidyaCount, setFidyaCount] = useState(0);
    const [selectedDay, setSelectedDay] = useState<number | null>(null);
    const [sponsorForm, setSponsorForm] = useState<SponsorFormData>(initialSponsorForm);

    // Mock countdown to Maghrib (6:30 PM today)
    const today = new Date();
    today.setHours(18, 30, 0, 0);
    if (today < new Date()) {
        today.setDate(today.getDate() + 1);
    }
    const countdown = useCountdown(today);

    const zakatTotal = (fitrCount * ZAKAT_FITR_AMOUNT) + (fidyaCount * FIDYA_AMOUNT);

    const setSponsorName = (name: string) => setSponsorForm(prev => ({ ...prev, name }));
    const setSponsorEmail = (email: string) => setSponsorForm(prev => ({ ...prev, email }));
    const setSponsorPhone = (phone: string) => setSponsorForm(prev => ({ ...prev, phone }));
    const setContributionAmount = (contributionAmount: string) => setSponsorForm(prev => ({ ...prev, contributionAmount }));
    const setAnonymous = (anonymous: boolean) => setSponsorForm(prev => ({ ...prev, anonymous }));

    const handleSponsorSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Sponsorship submitted for day ${selectedDay}`);
        setSelectedDay(null);
        setSponsorForm(initialSponsorForm);
    };

    return {
        countdown,
        fitrCount,
        setFitrCount,
        fidyaCount,
        setFidyaCount,
        zakatTotal,
        selectedDay,
        setSelectedDay,
        sponsorForm,
        setSponsorName,
        setSponsorEmail,
        setSponsorPhone,
        setContributionAmount,
        setAnonymous,
        handleSponsorSubmit
    };
}
