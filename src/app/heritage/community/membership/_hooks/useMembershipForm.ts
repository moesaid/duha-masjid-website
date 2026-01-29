'use client';

import { useState, useMemo, useCallback } from 'react';
import {
    MEMBERSHIP_FEE,
    MEMBERSHIP_TYPES,
    calculateAge,
    calculateMembershipFee,
    isFreeMember,
    type MembershipType
} from '@/lib/membership-config';
import { FamilyMember } from '../_data';

// ============================================
// Types
// ============================================

export interface FormData {
    fullName: string;
    email: string;
    phone: string;
    dateOfBirth: Date | undefined;
    membershipType: MembershipType;
    familyMembers: FamilyMember[];
    idDocument: File | null;
    residenceProof: File | null;
}

export interface FeeBreakdown {
    primary: { age: number | null; fee: number; isFree: boolean };
    family: { name: string; age: number | null; fee: number; isFree: boolean }[];
    total: number;
}

export interface UseMembershipFormReturn {
    // Form state
    formData: FormData;
    isSubmitting: boolean;
    submitSuccess: boolean;

    // Fee calculation
    feeBreakdown: FeeBreakdown;

    // Input handlers
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleDateChange: (date: Date | undefined) => void;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>, field: 'idDocument' | 'residenceProof') => void;

    // Family member handlers
    addFamilyMember: () => void;
    removeFamilyMember: (id: string) => void;
    updateFamilyMember: (id: string, field: keyof FamilyMember, value: string | Date | undefined) => void;
    handleFamilyFileChange: (memberId: string, field: 'idDocument' | 'residenceProof', file: File | null) => void;

    // Form submission
    handleSubmit: (e: React.FormEvent) => Promise<void>;
}

// ============================================
// Hook
// ============================================

export function useMembershipForm(): UseMembershipFormReturn {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        phone: '',
        dateOfBirth: undefined,
        membershipType: MEMBERSHIP_TYPES.INDIVIDUAL,
        familyMembers: [],
        idDocument: null,
        residenceProof: null
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Calculate fee based on primary member and family members
    const feeBreakdown = useMemo<FeeBreakdown>(() => {
        const primaryDob = formData.dateOfBirth || null;
        const primaryAge = primaryDob ? calculateAge(primaryDob) : null;
        const primaryFee = calculateMembershipFee(primaryDob);
        const primaryIsFree = isFreeMember(primaryDob);

        let familyFees: FeeBreakdown['family'] = [];

        if (formData.membershipType === MEMBERSHIP_TYPES.FAMILY) {
            familyFees = formData.familyMembers.map(member => {
                const dob = member.dateOfBirth || null;
                const age = dob ? calculateAge(dob) : null;
                const fee = calculateMembershipFee(dob);
                const isFree = isFreeMember(dob);
                return { name: member.fullName || 'Family Member', age, fee, isFree };
            });
        }

        const totalFamilyFees = familyFees.reduce((sum, m) => sum + m.fee, 0);
        const totalFee = primaryFee + totalFamilyFees;

        return {
            primary: { age: primaryAge, fee: primaryFee, isFree: primaryIsFree },
            family: familyFees,
            total: totalFee
        };
    }, [formData.dateOfBirth, formData.membershipType, formData.familyMembers]);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleDateChange = useCallback((date: Date | undefined) => {
        setFormData(prev => ({ ...prev, dateOfBirth: date }));
    }, []);

    const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, field: 'idDocument' | 'residenceProof') => {
        const file = e.target.files?.[0] || null;
        setFormData(prev => ({ ...prev, [field]: file }));
    }, []);

    const handleFamilyFileChange = useCallback((memberId: string, field: 'idDocument' | 'residenceProof', file: File | null) => {
        setFormData(prev => ({
            ...prev,
            familyMembers: prev.familyMembers.map(m =>
                m.id === memberId ? { ...m, [field]: file } : m
            )
        }));
    }, []);

    const addFamilyMember = useCallback(() => {
        const newMember: FamilyMember = {
            id: crypto.randomUUID(),
            fullName: '',
            dateOfBirth: undefined,
            idDocument: null,
            residenceProof: null
        };
        setFormData(prev => ({
            ...prev,
            familyMembers: [...prev.familyMembers, newMember]
        }));
    }, []);

    const removeFamilyMember = useCallback((id: string) => {
        setFormData(prev => ({
            ...prev,
            familyMembers: prev.familyMembers.filter(m => m.id !== id)
        }));
    }, []);

    const updateFamilyMember = useCallback((id: string, field: keyof FamilyMember, value: string | Date | undefined) => {
        setFormData(prev => ({
            ...prev,
            familyMembers: prev.familyMembers.map(m =>
                m.id === id ? { ...m, [field]: value } : m
            )
        }));
    }, []);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitSuccess(true);
    }, []);

    return {
        formData,
        isSubmitting,
        submitSuccess,
        feeBreakdown,
        handleInputChange,
        handleDateChange,
        handleFileChange,
        addFamilyMember,
        removeFamilyMember,
        updateFamilyMember,
        handleFamilyFileChange,
        handleSubmit
    };
}
