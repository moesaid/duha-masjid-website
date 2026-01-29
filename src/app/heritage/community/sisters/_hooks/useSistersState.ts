'use client';

import { useState } from 'react';
import { testimonials } from '../_data';

export interface UseSistersStateReturn {
    activeTestimonial: number;
    setActiveTestimonial: (index: number) => void;
}

export function useSistersState(): UseSistersStateReturn {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    return {
        activeTestimonial,
        setActiveTestimonial
    };
}
