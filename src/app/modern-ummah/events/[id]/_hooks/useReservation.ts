'use client';

import { useState, useMemo, useCallback } from 'react';
import { eventData } from '../_data';

// ============================================
// Types
// ============================================

export interface SeatSelection {
    adults: number;
    children: number;
}

export interface AttendeeInfo {
    name: string;
    type: 'adult' | 'child';
}

export interface ReservationForm {
    email: string;
    phone: string;
    attendees: AttendeeInfo[];
}

export type FormStep = 'seats' | 'details';

export interface UseReservationReturn {
    // Modal state
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;

    // Form step
    formStep: FormStep;
    goToDetails: () => void;
    goToSeats: () => void;

    // Seat selection
    seats: SeatSelection;
    updateSeats: (type: 'adults' | 'children', delta: number) => void;

    // Attendee form
    form: ReservationForm;
    updateEmail: (email: string) => void;
    updatePhone: (phone: string) => void;
    updateAttendeeName: (index: number, name: string) => void;

    // Computed
    totalSeats: number;
    totalPrice: number;
    canProceed: boolean;

    // Actions
    submitReservation: () => void;
}

// ============================================
// Hook
// ============================================

export function useReservation(): UseReservationReturn {
    const [isOpen, setIsOpen] = useState(false);
    const [formStep, setFormStep] = useState<FormStep>('seats');
    const [seats, setSeats] = useState<SeatSelection>({ adults: 0, children: 0 });
    const [form, setForm] = useState<ReservationForm>({
        email: '',
        phone: '',
        attendees: []
    });

    // Pricing from data
    const { adult: adultPrice, child: childPrice } = eventData.pricing;

    // Computed values
    const totalSeats = seats.adults + seats.children;
    const totalPrice = (seats.adults * adultPrice) + (seats.children * childPrice);
    const canProceed = totalSeats > 0;

    // Modal actions
    const openModal = useCallback(() => setIsOpen(true), []);

    const closeModal = useCallback(() => {
        setIsOpen(false);
        setFormStep('seats');
        setSeats({ adults: 0, children: 0 });
        setForm({ email: '', phone: '', attendees: [] });
    }, []);

    // Seat selection
    const updateSeats = useCallback((type: 'adults' | 'children', delta: number) => {
        setSeats(prev => ({
            ...prev,
            [type]: Math.max(0, Math.min(10, prev[type] + delta))
        }));
    }, []);

    // Form navigation
    const goToDetails = useCallback(() => {
        if (totalSeats === 0) return;

        // Initialize attendees array
        const attendees: AttendeeInfo[] = [];
        for (let i = 0; i < seats.adults; i++) {
            attendees.push({ name: '', type: 'adult' });
        }
        for (let i = 0; i < seats.children; i++) {
            attendees.push({ name: '', type: 'child' });
        }
        setForm(prev => ({ ...prev, attendees }));
        setFormStep('details');
    }, [seats, totalSeats]);

    const goToSeats = useCallback(() => setFormStep('seats'), []);

    // Form updates
    const updateEmail = useCallback((email: string) => {
        setForm(prev => ({ ...prev, email }));
    }, []);

    const updatePhone = useCallback((phone: string) => {
        setForm(prev => ({ ...prev, phone }));
    }, []);

    const updateAttendeeName = useCallback((index: number, name: string) => {
        setForm(prev => ({
            ...prev,
            attendees: prev.attendees.map((a, i) => i === index ? { ...a, name } : a)
        }));
    }, []);

    // Submit
    const submitReservation = useCallback(() => {
        if (!form.email || !form.phone) {
            alert('Please provide email and phone number for ticket confirmation.');
            return;
        }
        alert(`Reservation confirmed! A confirmation will be sent to ${form.email}`);
        closeModal();
    }, [form.email, form.phone, closeModal]);

    return {
        isOpen,
        openModal,
        closeModal,
        formStep,
        goToDetails,
        goToSeats,
        seats,
        updateSeats,
        form,
        updateEmail,
        updatePhone,
        updateAttendeeName,
        totalSeats,
        totalPrice,
        canProceed,
        submitReservation
    };
}
