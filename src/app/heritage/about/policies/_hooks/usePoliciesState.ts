'use client';

import { useState } from 'react';
import { documents } from '../_data';

export interface UsePoliciesStateReturn {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
    openFaq: number | null;
    setOpenFaq: (index: number | null) => void;
    filteredDocuments: typeof documents;
}

export function usePoliciesState(): UsePoliciesStateReturn {
    const [activeCategory, setActiveCategory] = useState('membership');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const filteredDocuments = documents.filter(doc => doc.category === activeCategory);

    return {
        activeCategory,
        setActiveCategory,
        openFaq,
        setOpenFaq,
        filteredDocuments
    };
}
