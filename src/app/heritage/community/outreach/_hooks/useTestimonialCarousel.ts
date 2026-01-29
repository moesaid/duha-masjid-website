'use client';

import { useState, useCallback } from 'react';
import { testimonials } from '../_data';

export interface UseTestimonialCarouselReturn {
    activeIndex: number;
    next: () => void;
    prev: () => void;
    setIndex: (index: number) => void;
}

export function useTestimonialCarousel(): UseTestimonialCarouselReturn {
    const [activeIndex, setActiveIndex] = useState(0);

    const next = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prev = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    return {
        activeIndex,
        next,
        prev,
        setIndex: setActiveIndex
    };
}
