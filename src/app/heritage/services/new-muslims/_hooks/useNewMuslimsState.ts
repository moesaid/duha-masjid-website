// New Muslims State Hook
// Manages FAQ expansion and contact modal

'use client';

import { useState } from 'react';

export function useNewMuslimsState() {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const toggleFaq = (index: number) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const nextTestimonial = (total: number) => {
        setActiveTestimonial((prev) => (prev + 1) % total);
    };

    return {
        expandedFaq,
        toggleFaq,
        isModalOpen,
        openModal,
        closeModal,
        activeTestimonial,
        setActiveTestimonial,
        nextTestimonial
    };
}
