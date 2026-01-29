import Image from 'next/image';
import { Search, Library } from 'lucide-react';
import { libraryInfo } from '../../_data';
import styles from './HeroSection.module.scss';

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
