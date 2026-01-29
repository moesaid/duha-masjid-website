'use client';

import { useState, useCallback } from 'react';

export interface UseFaqReturn {
    openFaq: number | null;
    toggleFaq: (idx: number) => void;
}

export function useFaq(): UseFaqReturn {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = useCallback((idx: number) => {
        setOpenFaq(prev => prev === idx ? null : idx);
    }, []);

    return { openFaq, toggleFaq };
}
