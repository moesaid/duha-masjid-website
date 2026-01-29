'use client';

import { useState } from 'react';

export function useContactState() {
    const [isMessageSent, setIsMessageSent] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        topic: '',
        message: ''
    });

    const updateFormField = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const submitForm = () => {
        // In production, this would submit to an API
        setIsMessageSent(true);
        setTimeout(() => setIsMessageSent(false), 5000);
    };

    const resetForm = () => {
        setFormData({ name: '', email: '', phone: '', topic: '', message: '' });
        setIsMessageSent(false);
    };

    return {
        formData,
        updateFormField,
        isMessageSent,
        submitForm,
        resetForm
    };
}
