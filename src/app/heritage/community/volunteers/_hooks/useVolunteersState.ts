'use client';

import { useState } from 'react';

export function useVolunteersState() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedArea, setSelectedArea] = useState<string | null>(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const openForm = (areaId?: string) => {
        setSelectedArea(areaId || null);
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
        setSelectedArea(null);
    };

    const nextTestimonial = (total: number) => {
        setActiveTestimonial((prev) => (prev + 1) % total);
    };

    return {
        isFormOpen, selectedArea,
        openForm, closeForm,
        activeTestimonial, setActiveTestimonial, nextTestimonial
    };
}
