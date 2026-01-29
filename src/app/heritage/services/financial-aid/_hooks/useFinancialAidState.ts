// Financial Aid Page State Hook
// Manages FAQ expansion and form modal state

'use client';

import { useState } from 'react';

export function useFinancialAidState() {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

    const toggleFaq = (index: number) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    const openForm = (programId?: string) => {
        setSelectedProgram(programId || null);
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
        setSelectedProgram(null);
    };

    return {
        // FAQ State
        expandedFaq,
        toggleFaq,

        // Form Modal State
        isFormOpen,
        selectedProgram,
        openForm,
        closeForm
    };
}
