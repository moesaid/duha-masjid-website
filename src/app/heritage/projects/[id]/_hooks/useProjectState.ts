'use client';

import { useState } from 'react';

export interface UseProjectStateReturn {
    galleryIndex: number;
    setGalleryIndex: (index: number) => void;
    nextSlide: () => void;
    prevSlide: () => void;
}

export function useProjectState(galleryLength: number): UseProjectStateReturn {
    const [galleryIndex, setGalleryIndex] = useState(0);

    const nextSlide = () => {
        setGalleryIndex((prev) => (prev + 1) % galleryLength);
    };

    const prevSlide = () => {
        setGalleryIndex((prev) => (prev - 1 + galleryLength) % galleryLength);
    };

    return {
        galleryIndex,
        setGalleryIndex,
        nextSlide,
        prevSlide
    };
}
