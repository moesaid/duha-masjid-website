'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Search,
    BookOpen,
    Clock,
    MapPin,
    Calendar,
    CheckCircle,
    AlertCircle,
    Users,
    CreditCard,
    BookMarked,
    Library,
    Star,
    ChevronRight,
    X,
    BookX
} from 'lucide-react';
import styles from './LibraryPage.module.scss';

// All books data for search
const allBooks = [
    { title: 'Quran Translations', author: 'Various', subject: 'quran', language: 'english', color: '#1A4D3E' },
    { title: 'Tafseer Ibn Kathir', author: 'Ibn Kathir', subject: 'quran', language: 'arabic', color: '#2C5F4F' },
    { title: 'Sahih Bukhari', author: 'Imam Bukhari', subject: 'hadith', language: 'arabic', color: '#5C2626' },
    { title: 'Sahih Muslim', author: 'Imam Muslim', subject: 'hadith', language: 'arabic', color: '#7A3B3B' },
    { title: 'Riyad-us-Saliheen', author: 'Imam Nawawi', subject: 'hadith', language: 'english', color: '#1A3A5C' },
    { title: '40 Hadith Nawawi', author: 'Imam Nawawi', subject: 'hadith', language: 'english', color: '#2C5275' },
    { title: 'The Sealed Nectar', author: 'Safiur Rahman Mubarakpuri', subject: 'seerah', language: 'english', color: '#8B4513' },
    { title: 'Men Around the Prophet', author: 'Khalid Muhammad Khalid', subject: 'seerah', language: 'english', color: '#6B4423' },
    { title: 'Stories of the Prophets', author: 'Ibn Kathir', subject: 'seerah', language: 'english', color: '#5D4E37' },
    { title: 'Fiqh us-Sunnah', author: 'Sayyid Sabiq', subject: 'fiqh', language: 'english', color: '#6B4423' },
    { title: 'My First Quran', author: 'Various', subject: 'children', language: 'english', color: '#4A7C59' },
    { title: 'Prophet Stories for Kids', author: 'Various', subject: 'children', language: 'english', color: '#E07B39' },
    { title: 'Fortress of the Muslim', author: 'Saeed Al-Qahtani', subject: 'hadith', language: 'english', color: '#8B4513' },
    { title: 'Purification of the Heart', author: 'Hamza Yusuf', subject: 'fiqh', language: 'english', color: '#2C5275' },
];

// Collection categories for bookshelves
const collections = [
    {
        shelf: 'The Essentials',
        books: [
            { title: 'Quran Translations', color: '#1A4D3E' },
            { title: 'Tafseer Ibn Kathir', color: '#2C5F4F' },
            { title: 'Sahih Bukhari', color: '#5C2626' },
            { title: 'Sahih Muslim', color: '#7A3B3B' },
            { title: 'Riyad-us-Saliheen', color: '#1A3A5C' },
            { title: '40 Hadith Nawawi', color: '#2C5275' },
            { title: 'Sunan Abu Dawud', color: '#3D5A3D' },
            { title: 'Jami Tirmidhi', color: '#4A3728' },
            { title: 'Sunan Ibn Majah', color: '#5C2626' },
            { title: 'Muwatta Malik', color: '#1A4D3E' },
            { title: 'Fortress of Muslim', color: '#8B4513' },
            { title: 'Tafseer Jalalayn', color: '#2C5F4F' },
            { title: 'Sahih at-Targhib', color: '#1A3A5C' },
            { title: 'Bulugh al-Maram', color: '#5D4E37' },
            { title: 'Umdat al-Ahkam', color: '#3D2914' },
            { title: 'Fiqh us-Sunnah', color: '#6B4423' },
            { title: 'Purification of the Heart', color: '#2C5275' },
            { title: 'Book of Monotheism', color: '#1A4D3E' }
        ]
    },
    {
        shelf: 'Seerah & History',
        books: [
            { title: 'The Sealed Nectar', color: '#8B4513' },
            { title: 'Men Around Prophet', color: '#6B4423' },
            { title: 'Stories of Prophets', color: '#5D4E37' },
            { title: 'Companions of Prophet', color: '#4A3728' },
            { title: 'Islamic History', color: '#3D2914' },
            { title: 'Women of Madina', color: '#7A3B3B' },
            { title: 'Life of Umar', color: '#1A3A5C' },
            { title: 'Abu Bakr As-Siddiq', color: '#5C2626' },
            { title: 'Uthman Ibn Affan', color: '#2C5F4F' },
            { title: 'Ali Ibn Abi Talib', color: '#1A4D3E' },
            { title: 'Mothers of Believers', color: '#8B4513' },
            { title: 'In the Footsteps', color: '#6B4423' },
            { title: 'When Moon Split', color: '#5D4E37' },
            { title: 'Noble Life', color: '#4A3728' },
            { title: 'Tarikh at-Tabari', color: '#3D2914' },
            { title: 'Light in Darkness', color: '#7A3B3B' }
        ]
    },
    {
        shelf: "Children's Corner",
        books: [
            { title: 'My First Quran', color: '#4A7C59' },
            { title: 'Prophet Stories', color: '#E07B39' },
            { title: 'Good Manners', color: '#5B8C5A' },
            { title: 'Ramadan Joy', color: '#7B68EE' },
            { title: 'Eid Celebration', color: '#CD853F' },
            { title: 'Learn to Pray', color: '#4A9C6F' },
            { title: 'Hajj Adventure', color: '#D98236' },
            { title: 'Islamic ABCs', color: '#6B8C5A' },
            { title: 'Bedtime Duas', color: '#9B79CB' },
            { title: 'Zakat Heroes', color: '#B8963F' },
            { title: 'Fasting Friends', color: '#5A9C7A' },
            { title: 'Kind Words', color: '#E89C4A' },
            { title: 'Brave Sahaba', color: '#6A9B52' },
            { title: 'Little Mumin', color: '#8B68DE' },
            { title: 'My Wudu Book', color: '#5AAC8A' },
            { title: 'Mosque Manners', color: '#DA7B49' }
        ]
    }
];

// Borrowing rules
const borrowingRules = [
    {
        icon: Users,
        title: 'Membership',
        description: 'Free for all registered community members. Just bring a valid ID to register.'
    },
    {
        icon: Calendar,
        title: 'Loan Period',
        description: 'Books may be borrowed for 2 weeks, with one renewal allowed if not reserved.'
    },
    {
        icon: AlertCircle,
        title: 'Late Policy',
        description: 'Please return books on time as an Amanah (trust). A gentle reminder will be sent.'
    },
    {
        icon: CreditCard,
        title: 'Library Card',
        description: 'Apply at the front desk or online. Cards are issued within 24 hours.'
    }
];

export default function LibraryPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [subjectFilter, setSubjectFilter] = useState('');
    const [authorFilter, setAuthorFilter] = useState('');
    const [languageFilter, setLanguageFilter] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    const searchResults = useMemo(() => {
        if (!hasSearched) return [];

        return allBooks.filter(book => {
            const matchesQuery = searchQuery === '' ||
                book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.author.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesSubject = subjectFilter === '' || book.subject === subjectFilter;
            const matchesAuthor = authorFilter === '' || book.author.toLowerCase().includes(authorFilter.toLowerCase());
            const matchesLanguage = languageFilter === '' || book.language === languageFilter;

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

    return (
        <main className={styles.libraryPage}>
            {/* ========================================
                1. THE "TREASURY" HERO
            ======================================== */}
            <section className={styles.treasuryHero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/heritage/library-shelves.jpg"
                        alt=""
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay} />
                </div>

                <div className={styles.heroContent}>
                    <div className={styles.quranVerse}>
                        <span className={styles.arabicVerse}>
                            اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
                        </span>
                        <span className={styles.verseTranslation}>
                            "Read! In the Name of your Lord Who created"
                        </span>
                        <span className={styles.verseReference}>— Quran 96:1</span>
                    </div>

                    <h1 className={styles.heroTitle}>The Community Maktaba</h1>
                    <p className={styles.heroTagline}>
                        A sanctuary for reading, reflection, and research
                    </p>

                    <div className={styles.heroStats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>2,000+</span>
                            <span className={styles.statLabel}>Titles Available</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>3</span>
                            <span className={styles.statLabel}>Languages</span>
                        </div>
                    </div>
                </div>

                {/* ========================================
                    2. CATALOG SEARCH (Card File)
                ======================================== */}
                <div className={styles.catalogSearch}>
                    <div className={styles.catalogDrawer}>
                        <div className={styles.drawerLabel}>
                            <Library size={18} />
                            <span>Search the Collection</span>
                        </div>

                        <div className={styles.searchRow}>
                            <div className={styles.searchInput}>
                                <Search size={18} className={styles.searchIcon} />
                                <input
                                    type="text"
                                    placeholder="Search by title, author, or subject..."
                                    aria-label="Search library catalog"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                />
                            </div>
                            <button className={styles.searchBtn} onClick={handleSearch}>
                                Search Collection
                            </button>
                        </div>

                        <div className={styles.filterRow}>
                            <select
                                aria-label="Filter by subject"
                                value={subjectFilter}
                                onChange={(e) => setSubjectFilter(e.target.value)}
                            >
                                <option value="">All Subjects</option>
                                <option value="quran">Quran & Tafseer</option>
                                <option value="hadith">Hadith</option>
                                <option value="fiqh">Fiqh & Law</option>
                                <option value="seerah">Seerah & History</option>
                                <option value="children">Children</option>
                            </select>
                            <select
                                aria-label="Filter by author"
                                value={authorFilter}
                                onChange={(e) => setAuthorFilter(e.target.value)}
                            >
                                <option value="">All Authors</option>
                                <option value="ibn kathir">Ibn Kathir</option>
                                <option value="nawawi">Imam Nawawi</option>
                                <option value="ghazali">Imam Ghazali</option>
                            </select>
                            <select
                                aria-label="Filter by language"
                                value={languageFilter}
                                onChange={(e) => setLanguageFilter(e.target.value)}
                            >
                                <option value="">All Languages</option>
                                <option value="english">English</option>
                                <option value="arabic">Arabic</option>
                                <option value="urdu">Urdu</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================
                3. THE COLLECTIONS (Virtual Bookshelves)
            ======================================== */}
            <section className={styles.collectionsSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Browse by Category</span>
                    <h2 className={styles.sectionTitle}>The Shelves</h2>
                </div>

                <div className={styles.bookshelvesContainer}>
                    {collections.map((collection) => (
                        <div key={collection.shelf} className={styles.shelfRow}>
                            <h3 className={styles.shelfLabel}>{collection.shelf}</h3>
                            <div className={styles.shelf}>
                                <div className={styles.books}>
                                    {collection.books.map((book) => (
                                        <div
                                            key={book.title}
                                            className={styles.bookSpine}
                                            style={{ backgroundColor: book.color }}
                                            title={book.title}
                                        >
                                            <span className={styles.bookTitle}>{book.title}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.shelfBoard} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.libraryQuote}>
                    <BookMarked size={20} />
                    <p>"A book is a garden carried in the pocket."</p>
                </div>
            </section>

            {/* ========================================
                4. BOOK OF THE MONTH (Spotlight)
            ======================================== */}
            <section className={styles.spotlightSection}>
                <div className={styles.spotlightContent}>
                    <div className={styles.bookCover}>
                        <div className={styles.bookMockup}>
                            <div className={styles.bookFront}>
                                <span className={styles.bookBadge}>
                                    <Star size={12} />
                                    Featured
                                </span>
                                <div className={styles.coverContent}>
                                    <h4>The Sealed Nectar</h4>
                                    <span className={styles.coverArabic}>الرحيق المختوم</span>
                                    <span className={styles.coverAuthor}>Safiur Rahman Mubarakpuri</span>
                                </div>
                            </div>
                            <div className={styles.bookSpineSide} />
                        </div>
                    </div>

                    <div className={styles.bookDetails}>
                        <span className={styles.monthLabel}>Book of the Month</span>
                        <h3>The Sealed Nectar (Ar-Raheeq Al-Makhtum)</h3>
                        <p className={styles.bookAuthor}>By Safiur Rahman Mubarakpuri</p>

                        <div className={styles.librarianReview}>
                            <h4>Librarian's Review</h4>
                            <p>
                                An award-winning biography of Prophet Muhammad ﷺ that beautifully
                                captures his life, character, and mission. This comprehensive work
                                won first prize in the Muslim World League competition and remains
                                one of the most beloved Seerah books in the English language.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================
                5. BORROWING RULES (Ex Libris)
            ======================================== */}
            <section className={styles.rulesSection}>
                <div className={styles.rulesPlaque}>
                    <div className={styles.plaqueHeader}>
                        <div className={styles.exLibris}>
                            <BookOpen size={24} />
                            <span>Ex Libris</span>
                        </div>
                        <h2>Library Rules & Policies</h2>
                    </div>

                    <div className={styles.rulesGrid}>
                        {borrowingRules.map((rule) => {
                            const IconComponent = rule.icon;
                            return (
                                <div key={rule.title} className={styles.ruleItem}>
                                    <div className={styles.ruleIcon}>
                                        <IconComponent size={20} />
                                    </div>
                                    <div className={styles.ruleContent}>
                                        <h4>{rule.title}</h4>
                                        <p>{rule.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ========================================
                6. HOURS & LOCATION
            ======================================== */}
            <section className={styles.hoursSection}>
                <div className={styles.hoursContent}>
                    <div className={styles.hoursBlock}>
                        <MapPin size={20} />
                        <div>
                            <h4>Location</h4>
                            <p>2nd Floor, next to the Conference Room</p>
                        </div>
                    </div>

                    <div className={styles.hoursDivider} />

                    <div className={styles.hoursBlock}>
                        <Clock size={20} />
                        <div>
                            <h4>Hours</h4>
                            <p>Open during Maghrib and Isha prayers daily</p>
                            <p className={styles.staffed}>Staffed on Sundays: 10 AM – 2 PM</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================
                SEARCH RESULTS MODAL
            ======================================== */}
            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.modalClose} onClick={closeModal}>
                            <X size={24} />
                        </button>

                        <div className={styles.modalHeader}>
                            <div className={styles.modalHeaderTop}>
                                <Library size={24} />
                                <h2>Search Results</h2>
                            </div>
                            <span className={styles.resultCount}>
                                {searchResults.length} {searchResults.length === 1 ? 'book' : 'books'} found
                            </span>
                        </div>

                        {searchResults.length === 0 ? (
                            <div className={styles.emptyState}>
                                <BookX size={48} />
                                <h3>No Books Found</h3>
                                <p>
                                    We couldn&apos;t find any books matching your search.
                                    Try adjusting your filters or search terms.
                                </p>
                            </div>
                        ) : (
                            <div className={styles.resultsList}>
                                {searchResults.map((book) => (
                                    <div key={book.title} className={styles.resultItem}>
                                        <div
                                            className={styles.resultBookSpine}
                                            style={{ backgroundColor: book.color }}
                                        />
                                        <div className={styles.resultInfo}>
                                            <h4>{book.title}</h4>
                                            <p className={styles.resultAuthor}>by {book.author}</p>
                                            <div className={styles.resultMeta}>
                                                <span className={styles.resultSubject}>{book.subject}</span>
                                                <span className={styles.resultLanguage}>{book.language}</span>
                                            </div>
                                        </div>
                                        <div className={styles.resultStatus}>
                                            <CheckCircle size={16} />
                                            <span>Available</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
}
