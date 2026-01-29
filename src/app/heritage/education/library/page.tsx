// Library Page - Heritage Treasury Design
// The Community Maktaba
'use client';

import { useLibraryState } from './_hooks';
import {
    HeroSection,
    CollectionsSection,
    SpotlightSection,
    RulesSection,
    HoursSection,
    SearchModal
} from './_components';
import styles from './LibraryPage.module.scss';

/**
 * Library Page
 * 
 * Architecture:
 * - _data/      → Book catalog, collections, rules, featured book
 * - _hooks/     → useLibraryState (search, filters, modal)
 * - _components/→ Hero, Collections, Spotlight, Rules, Hours, SearchModal
 */
export default function LibraryPage() {
    const {
        searchQuery, setSearchQuery,
        subjectFilter, setSubjectFilter,
        authorFilter, setAuthorFilter,
        languageFilter, setLanguageFilter,
        isModalOpen, searchResults,
        handleSearch, closeModal
    } = useLibraryState();

    return (
        <main className={styles.libraryPage}>
            <HeroSection
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                subjectFilter={subjectFilter}
                setSubjectFilter={setSubjectFilter}
                authorFilter={authorFilter}
                setAuthorFilter={setAuthorFilter}
                languageFilter={languageFilter}
                setLanguageFilter={setLanguageFilter}
                handleSearch={handleSearch}
            />
            <CollectionsSection />
            <SpotlightSection />
            <RulesSection />
            <HoursSection />
            <SearchModal isOpen={isModalOpen} onClose={closeModal} results={searchResults} />
        </main>
    );
}
