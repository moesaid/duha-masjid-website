'use client';

import { useState, useMemo, useCallback } from 'react';
import { getAvailableDates, type AvailableDate } from '../_lib/scheduling';
import { guidanceServices, counselors } from '../_data';

export interface BookingState {
    selectedService: string | null;
    selectedCounselor: number | null;
    selectedDate: string;
    selectedTime: string;
    step: number;
}

export interface UseBookingWizardReturn {
    // State
    state: BookingState;
    availableDates: AvailableDate[];

    // Computed
    canProceed: boolean;
    selectedServiceData: typeof guidanceServices[0] | undefined;
    selectedCounselorData: typeof counselors[0] | undefined;

    // Actions
    setService: (id: string) => void;
    setCounselor: (id: number) => void;
    setDate: (date: string) => void;
    setTime: (time: string) => void;
    nextStep: () => void;
    prevStep: () => void;
    reset: () => void;
}

const INITIAL_STATE: BookingState = {
    selectedService: null,
    selectedCounselor: null,
    selectedDate: '',
    selectedTime: '',
    step: 1,
};

/**
 * Custom hook for managing the multi-step booking wizard state
 */
export function useBookingWizard(): UseBookingWizardReturn {
    const [state, setState] = useState<BookingState>(INITIAL_STATE);

    // Memoized available dates (recalculated only when component mounts)
    const availableDates = useMemo(() => getAvailableDates(7), []);

    // Computed: Can user proceed to next step?
    const canProceed = useMemo(() => {
        switch (state.step) {
            case 1: return state.selectedService !== null;
            case 2: return state.selectedCounselor !== null;
            case 3: return state.selectedDate !== '' && state.selectedTime !== '';
            default: return false;
        }
    }, [state.step, state.selectedService, state.selectedCounselor, state.selectedDate, state.selectedTime]);

    // Computed: Get selected service data
    const selectedServiceData = useMemo(() =>
        guidanceServices.find(s => s.id === state.selectedService),
        [state.selectedService]
    );

    // Computed: Get selected counselor data
    const selectedCounselorData = useMemo(() =>
        counselors.find(c => c.id === state.selectedCounselor),
        [state.selectedCounselor]
    );

    // Actions
    const setService = useCallback((id: string) => {
        setState(prev => ({ ...prev, selectedService: id }));
    }, []);

    const setCounselor = useCallback((id: number) => {
        setState(prev => ({ ...prev, selectedCounselor: id }));
    }, []);

    const setDate = useCallback((date: string) => {
        setState(prev => ({ ...prev, selectedDate: date }));
    }, []);

    const setTime = useCallback((time: string) => {
        setState(prev => ({ ...prev, selectedTime: time }));
    }, []);

    const nextStep = useCallback(() => {
        setState(prev => ({ ...prev, step: Math.min(prev.step + 1, 4) }));
    }, []);

    const prevStep = useCallback(() => {
        setState(prev => ({ ...prev, step: Math.max(prev.step - 1, 1) }));
    }, []);

    const reset = useCallback(() => {
        setState(INITIAL_STATE);
    }, []);

    return {
        state,
        availableDates,
        canProceed,
        selectedServiceData,
        selectedCounselorData,
        setService,
        setCounselor,
        setDate,
        setTime,
        nextStep,
        prevStep,
        reset,
    };
}
