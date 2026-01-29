'use client';

import { useState, useRef } from 'react';

export interface FormData {
    name: string;
    email: string;
    question: string;
}

export interface UseTeamStateReturn {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    formSubmitted: boolean;
    handleSubmit: (e: React.FormEvent) => void;
    sliderRef: React.RefObject<HTMLDivElement | null>;
    scrollSlider: (direction: 'left' | 'right') => void;
}

export function useTeamState(): UseTeamStateReturn {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', question: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 3000);
        setFormData({ name: '', email: '', question: '' });
    };

    const scrollSlider = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const scrollAmount = 340;
            sliderRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return {
        formData,
        setFormData,
        formSubmitted,
        handleSubmit,
        sliderRef,
        scrollSlider
    };
}
