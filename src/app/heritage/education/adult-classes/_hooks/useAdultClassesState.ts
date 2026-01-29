'use client';

import { useState } from 'react';

export function useAdultClassesState() {
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
    const [selectedClass, setSelectedClass] = useState<string | null>(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const openRegistration = (classId?: string) => {
        setSelectedClass(classId || null);
        setIsRegistrationOpen(true);
    };

    const closeRegistration = () => {
        setIsRegistrationOpen(false);
        setSelectedClass(null);
    };

    const nextTestimonial = (total: number) => {
        setActiveTestimonial((prev) => (prev + 1) % total);
    };

    return {
        isRegistrationOpen, selectedClass,
        openRegistration, closeRegistration,
        activeTestimonial, setActiveTestimonial, nextTestimonial
    };
}
