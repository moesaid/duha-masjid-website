'use client';
import { useState } from 'react';

export function useNewsletterState() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubscribed(true);
        setEmail('');
    };

    return { email, setEmail, isSubscribed, handleSubscribe, activeCategory, setActiveCategory };
}
