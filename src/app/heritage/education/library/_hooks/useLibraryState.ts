// Library Page State Hook
// Manages search, filters, and modal state

'use client';

import { useState, useMemo } from 'react';
import { allBooks, Book } from '../_data';

export interface LibraryFilters {
    searchQuery: string;
    subjectFilter: string;
    authorFilter: string;
    languageFilter: string;
}

export function useLibraryState() {
    const [searchQuery, setSearchQuery] = useState('');
    const [subjectFilter, setSubjectFilter] = useState('all');
    const [authorFilter, setAuthorFilter] = useState('all');
    const [languageFilter, setLanguageFilter] = useState('all');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    const searchResults = useMemo(() => {
        if (!hasSearched) return [];

        return allBooks.filter(book => {
            const matchesQuery = searchQuery === '' ||
                book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.author.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesSubject = subjectFilter === 'all' || book.subject === subjectFilter;
            const matchesAuthor = authorFilter === 'all' || book.author.toLowerCase().includes(authorFilter.toLowerCase());
            const matchesLanguage = languageFilter === 'all' || book.language === languageFilter;

            return matchesQuery && matchesSubject && matchesAuthor && matchesLanguage;
        });
    }, [searchQuery, subjectFilter, authorFilter, languageFilter, hasSearched]);

    const handleSearch = () => {
        setHasSearched(true);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return {
        // Filter State
        searchQuery,
        setSearchQuery,
        subjectFilter,
        setSubjectFilter,
        authorFilter,
        setAuthorFilter,
        languageFilter,
        setLanguageFilter,

        // Modal State
        isModalOpen,
        setIsModalOpen,

        // Results
        searchResults,
        hasSearched,

        // Actions
        handleSearch,
        closeModal
    };
}
