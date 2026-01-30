'use client';

import { useLibraryState } from './_hooks';
import {
    LibraryHero,
    FeaturedBook,
    BookShelves,
    LibraryRules,
    LibraryInfo,
    SearchModal
} from './_components';

export default function LibraryPage() {
    const {
        searchQuery,
        setSearchQuery,
        isModalOpen,
        openModal,
        closeModal,
        searchResults
    } = useLibraryState();

    return (
        <main className="min-h-screen bg-slate-50">
            <LibraryHero
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onSearchClick={openModal}
            />
            <FeaturedBook />
            <BookShelves />
            <LibraryRules />
            <LibraryInfo />
            <SearchModal
                isOpen={isModalOpen}
                onClose={closeModal}
                query={searchQuery}
                setQuery={setSearchQuery}
                results={searchResults}
            />
        </main>
    );
}
