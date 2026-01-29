'use client';
import { useState } from 'react';

export function useBlogState() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    return { activeCategory, setActiveCategory, searchQuery, setSearchQuery };
}
