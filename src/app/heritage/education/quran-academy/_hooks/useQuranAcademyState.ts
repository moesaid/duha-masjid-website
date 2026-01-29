// Quran Academy State Hook
// Manages registration modal and testimonial carousel

'use client';

import { useState } from 'react';

export function useQuranAcademyState() {
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const openRegistration = (programId?: string) => {
        setSelectedProgram(programId || null);
        setIsRegistrationOpen(true);
    };

    const closeRegistration = () => {
        setIsRegistrationOpen(false);
        setSelectedProgram(null);
    };

    const nextTestimonial = (total: number) => {
        setActiveTestimonial((prev) => (prev + 1) % total);
    };

    const prevTestimonial = (total: number) => {
        setActiveTestimonial((prev) => (prev - 1 + total) % total);
    };

    return {
        // Registration Modal
        isRegistrationOpen,
        selectedProgram,
        openRegistration,
        closeRegistration,

        // Testimonial Carousel
        activeTestimonial,
        setActiveTestimonial,
        nextTestimonial,
        prevTestimonial
    };
}
