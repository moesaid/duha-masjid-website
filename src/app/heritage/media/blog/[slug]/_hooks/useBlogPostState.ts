'use client';
import { useState } from 'react';

export function useBlogPostState() {
    const [isShareOpen, setIsShareOpen] = useState(false);
    const toggleShare = () => setIsShareOpen(!isShareOpen);
    return { isShareOpen, toggleShare };
}
