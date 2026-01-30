'use client';

import { useState, useEffect } from 'react';
import { ZAKAT_FITR_AMOUNT, FIDYA_AMOUNT, initialSponsorForm, SponsorFormData, CalendarDay } from '../_data';

interface Countdown {
    hours: number;
    minutes: number;
    seconds: number;
}

export function useRamadanState() {
    // Countdown to Maghrib
    const [countdown, setCountdown] = useState<Countdown>({ hours: 5, minutes: 23, seconds: 45 });

    // Selected day for sponsorship
    const [selectedDay, setSelectedDay] = useState<CalendarDay | null>(null);

    // Zakat Calculator
    const [fitrCount, setFitrCount] = useState(3);
    const [fidyaCount, setFidyaCount] = useState(0);

    // Sponsor Form
    const [sponsorForm, setSponsorForm] = useState<SponsorFormData>(initialSponsorForm);

    // Calculate zakat total
    const zakatTotal = (fitrCount * ZAKAT_FITR_AMOUNT) + (fidyaCount * FIDYA_AMOUNT);

    // Simulate countdown (in real app would calculate from actual Maghrib time)
    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => {
                let { hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                }

                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Sponsor form handlers
    const setSponsorName = (name: string) => {
        setSponsorForm(prev => ({ ...prev, name }));
    };

    const setSponsorEmail = (email: string) => {
        setSponsorForm(prev => ({ ...prev, email }));
    };

    const setSponsorPhone = (phone: string) => {
        setSponsorForm(prev => ({ ...prev, phone }));
    };

    const setContributionAmount = (contributionAmount: string) => {
        setSponsorForm(prev => ({ ...prev, contributionAmount }));
    };

    const setAnonymous = (anonymous: boolean) => {
        setSponsorForm(prev => ({ ...prev, anonymous }));
    };

    const handleSponsorSubmit = () => {
        console.log('Sponsor form submitted:', sponsorForm);
        // In real app, would submit to backend
        setSelectedDay(null);
        setSponsorForm(initialSponsorForm);
    };

    return {
        countdown,
        selectedDay,
        setSelectedDay,
        fitrCount,
        setFitrCount,
        fidyaCount,
        setFidyaCount,
        zakatTotal,
        sponsorForm,
        setSponsorName,
        setSponsorEmail,
        setSponsorPhone,
        setContributionAmount,
        setAnonymous,
        handleSponsorSubmit
    };
}
