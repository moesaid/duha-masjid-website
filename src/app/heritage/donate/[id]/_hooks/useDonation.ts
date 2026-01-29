'use client';

import { useState, useCallback } from 'react';

export interface UseDonationReturn {
    // Amount state
    selectedAmount: number | null;
    customAmount: string;
    isMonthly: boolean;
    hideName: boolean;

    // Actions
    handleAmountSelect: (amount: number) => void;
    handleCustomAmount: (value: string) => void;
    setIsMonthly: (value: boolean) => void;
    setHideName: (value: boolean) => void;
    getFinalAmount: () => number;
}

export function useDonation(defaultAmount = 100): UseDonationReturn {
    const [selectedAmount, setSelectedAmount] = useState<number | null>(defaultAmount);
    const [customAmount, setCustomAmount] = useState('');
    const [isMonthly, setIsMonthly] = useState(false);
    const [hideName, setHideName] = useState(false);

    const handleAmountSelect = useCallback((amount: number) => {
        setSelectedAmount(amount);
        setCustomAmount('');
    }, []);

    const handleCustomAmount = useCallback((value: string) => {
        setCustomAmount(value);
        setSelectedAmount(null);
    }, []);

    const getFinalAmount = useCallback(() => {
        if (customAmount) return parseInt(customAmount) || 0;
        return selectedAmount || 0;
    }, [customAmount, selectedAmount]);

    return {
        selectedAmount,
        customAmount,
        isMonthly,
        hideName,
        handleAmountSelect,
        handleCustomAmount,
        setIsMonthly,
        setHideName,
        getFinalAmount
    };
}
