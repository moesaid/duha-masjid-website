'use client';
import { useState } from 'react';

export function useFuneralState() {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const toggleFaq = (index: number) => setExpandedFaq(expandedFaq === index ? null : index);
    return { expandedFaq, toggleFaq };
}
