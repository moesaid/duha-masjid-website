'use client';

import { useState } from 'react';

export interface UseFaqReturn {
    expandedIndex: number | null;
    toggle: (index: number) => void;
}

export function useFaq(): UseFaqReturn {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setExpandedIndex(prev => prev === index ? null : index);
    };

    return { expandedIndex, toggle };
}
