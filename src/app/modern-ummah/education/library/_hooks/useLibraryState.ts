'use client';

import { useState, useMemo } from 'react';
import { allBooks } from '../_data';

export function useLibraryState() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeShelf, setActiveShelf] = useState('All');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const searchResults = useMemo(() => {
        if (!searchQuery) return [];
        return allBooks.filter(book =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return {
        searchQuery,
        setSearchQuery,
        activeShelf,
        setActiveShelf,
        searchResults,
        isModalOpen,
        openModal,
        closeModal
    };
}
