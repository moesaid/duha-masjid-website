'use client';

import { useState } from 'react';

export function useWeekendSchoolState() {
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
    const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const openRegistration = (gradeId?: string) => {
        setSelectedGrade(gradeId || null);
        setIsRegistrationOpen(true);
    };

    const closeRegistration = () => {
        setIsRegistrationOpen(false);
        setSelectedGrade(null);
    };

    const nextTestimonial = (total: number) => {
        setActiveTestimonial((prev) => (prev + 1) % total);
    };

    return {
        isRegistrationOpen,
        selectedGrade,
        openRegistration,
        closeRegistration,
        activeTestimonial,
        setActiveTestimonial,
        nextTestimonial
    };
}
