// Matrimony State Hook
// Manages FAQ expansion and registration modal

'use client';

import { useState } from 'react';

export function useMatrimonyState() {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeStory, setActiveStory] = useState(0);

    const toggleFaq = (index: number) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const nextStory = (total: number) => {
        setActiveStory((prev) => (prev + 1) % total);
    };

    const prevStory = (total: number) => {
        setActiveStory((prev) => (prev - 1 + total) % total);
    };

    return {
        expandedFaq,
        toggleFaq,
        isModalOpen,
        openModal,
        closeModal,
        activeStory,
        setActiveStory,
        nextStory,
        prevStory
    };
}
