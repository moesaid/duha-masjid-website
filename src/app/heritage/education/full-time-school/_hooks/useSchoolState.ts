'use client';

import { useState, useCallback } from 'react';
import { tuitionData, faculty, TuitionProgram } from '../_data';

export interface UseSchoolStateReturn {
    // Tuition tab state
    activeTab: string;
    setActiveTab: (tab: string) => void;
    currentTuition: TuitionProgram;

    // Faculty carousel state
    facultyIndex: number;
    nextFaculty: () => void;
    prevFaculty: () => void;
    setFacultyIndex: (index: number) => void;

    // Application modal state
    isApplicationOpen: boolean;
    openApplication: () => void;
    closeApplication: () => void;
}

export function useSchoolState(): UseSchoolStateReturn {
    const [activeTab, setActiveTab] = useState<string>('elementary');
    const [facultyIndex, setFacultyIndex] = useState(0);
    const [isApplicationOpen, setIsApplicationOpen] = useState(false);

    const currentTuition = tuitionData[activeTab];

    const nextFaculty = useCallback(() => {
        setFacultyIndex((prev) => (prev + 1) % faculty.length);
    }, []);

    const prevFaculty = useCallback(() => {
        setFacultyIndex((prev) => (prev - 1 + faculty.length) % faculty.length);
    }, []);

    const openApplication = useCallback(() => setIsApplicationOpen(true), []);
    const closeApplication = useCallback(() => setIsApplicationOpen(false), []);

    return {
        activeTab,
        setActiveTab,
        currentTuition,
        facultyIndex,
        nextFaculty,
        prevFaculty,
        setFacultyIndex,
        isApplicationOpen,
        openApplication,
        closeApplication
    };
}
