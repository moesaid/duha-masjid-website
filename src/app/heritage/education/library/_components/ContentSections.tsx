import Image from 'next/image';
import { Search, Library, BookMarked, Star, BookOpen, MapPin, Clock, X, BookX, CheckCircle } from 'lucide-react';
import { collections, borrowingRules, featuredBook, libraryInfo, Book, BorrowingRule } from '../_data';
import styles from '../LibraryPage.module.scss';

// ============================================
// Hero Section
// ============================================

interface HeroSectionProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    subjectFilter: string;
    setSubjectFilter: (filter: string) => void;
    authorFilter: string;
    setAuthorFilter: (filter: string) => void;
    languageFilter: string;
    setLanguageFilter: (filter: string) => void;
    handleSearch: () => void;
}

export function HeroSection({
    searchQuery, setSearchQuery,
    subjectFilter, setSubjectFilter,
    authorFilter, setAuthorFilter,
    languageFilter, setLanguageFilter,
    handleSearch
}: HeroSectionProps) {
    return (
        <section className={styles.treasuryHero}>
            <div className={styles.heroBackground}>
                <Image src="/images/heritage/library-shelves.jpg" alt="" fill priority className={styles.heroImage} />
                <div className={styles.heroOverlay} />
            </div>

            <div className={styles.heroContent}>
                <div className={styles.quranVerse}>
                    <span className={styles.arabicVerse}>اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ</span>
                    <span className={styles.verseTranslation}>"Read! In the Name of your Lord Who created"</span>
                    <span className={styles.verseReference}>— Quran 96:1</span>
                </div>

                <h1 className={styles.heroTitle}>The Community Maktaba</h1>
                <p className={styles.heroTagline}>A sanctuary for reading, reflection, and research</p>

                <div className={styles.heroStats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{libraryInfo.totalTitles}</span>
                        <span className={styles.statLabel}>Titles Available</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{libraryInfo.languages}</span>
                        <span className={styles.statLabel}>Languages</span>
                    </div>
                </div>
            </div>

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
                        <button className={styles.searchBtn} onClick={handleSearch}>Search Collection</button>
                    </div>

                    <div className={styles.filterRow}>
                        <select aria-label="Filter by subject" value={subjectFilter} onChange={(e) => setSubjectFilter(e.target.value)}>
                            <option value="">All Subjects</option>
                            <option value="quran">Quran & Tafseer</option>
                            <option value="hadith">Hadith</option>
                            <option value="fiqh">Fiqh & Law</option>
                            <option value="seerah">Seerah & History</option>
                            <option value="children">Children</option>
                        </select>
                        <select aria-label="Filter by author" value={authorFilter} onChange={(e) => setAuthorFilter(e.target.value)}>
                            <option value="">All Authors</option>
                            <option value="ibn kathir">Ibn Kathir</option>
                            <option value="nawawi">Imam Nawawi</option>
                            <option value="ghazali">Imam Ghazali</option>
                        </select>
                        <select aria-label="Filter by language" value={languageFilter} onChange={(e) => setLanguageFilter(e.target.value)}>
                            <option value="">All Languages</option>
                            <option value="english">English</option>
                            <option value="arabic">Arabic</option>
                            <option value="urdu">Urdu</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ============================================
// Collections Section (Virtual Bookshelves)
// ============================================

export function CollectionsSection() {
    return (
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
                                    <div key={book.title} className={styles.bookSpine} style={{ backgroundColor: book.color }} title={book.title}>
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
    );
}

// ============================================
// Spotlight Section (Book of the Month)
// ============================================

export function SpotlightSection() {
    return (
        <section className={styles.spotlightSection}>
            <div className={styles.spotlightContent}>
                <div className={styles.bookCover}>
                    <div className={styles.bookMockup}>
                        <div className={styles.bookFront}>
                            <span className={styles.bookBadge}><Star size={12} /> Featured</span>
                            <div className={styles.coverContent}>
                                <h4>The Sealed Nectar</h4>
                                <span className={styles.coverArabic}>{featuredBook.arabicTitle}</span>
                                <span className={styles.coverAuthor}>{featuredBook.author}</span>
                            </div>
                        </div>
                        <div className={styles.bookSpineSide} />
                    </div>
                </div>

                <div className={styles.bookDetails}>
                    <span className={styles.monthLabel}>Book of the Month</span>
                    <h3>{featuredBook.title}</h3>
                    <p className={styles.bookAuthor}>By {featuredBook.author}</p>

                    <div className={styles.librarianReview}>
                        <h4>Librarian's Review</h4>
                        <p>{featuredBook.review}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ============================================
// Rules Section (Borrowing Policies)
// ============================================

export function RulesSection() {
    return (
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
                                <div className={styles.ruleIcon}><IconComponent size={20} /></div>
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
    );
}

// ============================================
// Hours Section
// ============================================

export function HoursSection() {
    return (
        <section className={styles.hoursSection}>
            <div className={styles.hoursContent}>
                <div className={styles.hoursBlock}>
                    <MapPin size={20} />
                    <div>
                        <h4>Location</h4>
                        <p>{libraryInfo.location}</p>
                    </div>
                </div>

                <div className={styles.hoursDivider} />

                <div className={styles.hoursBlock}>
                    <Clock size={20} />
                    <div>
                        <h4>Hours</h4>
                        <p>{libraryInfo.hours}</p>
                        <p className={styles.staffed}>{libraryInfo.staffedHours}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ============================================
// Search Results Modal
// ============================================

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
    results: Book[];
}

export function SearchModal({ isOpen, onClose, results }: SearchModalProps) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose}><X size={24} /></button>

                <div className={styles.modalHeader}>
                    <div className={styles.modalHeaderTop}>
                        <Library size={24} />
                        <h2>Search Results</h2>
                    </div>
                    <span className={styles.resultCount}>
                        {results.length} {results.length === 1 ? 'book' : 'books'} found
                    </span>
                </div>

                {results.length === 0 ? (
                    <div className={styles.emptyState}>
                        <BookX size={48} />
                        <h3>No Books Found</h3>
                        <p>We couldn&apos;t find any books matching your search. Try adjusting your filters or search terms.</p>
                    </div>
                ) : (
                    <div className={styles.resultsList}>
                        {results.map((book) => (
                            <div key={book.title} className={styles.resultItem}>
                                <div className={styles.resultBookSpine} style={{ backgroundColor: book.color }} />
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
    );
}
