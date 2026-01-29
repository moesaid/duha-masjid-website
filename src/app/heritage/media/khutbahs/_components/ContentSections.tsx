import Link from 'next/link';
import { Search, ChevronDown, Play, ChevronRight, Clock, ExternalLink, Mic } from 'lucide-react';
import { speakers, years, languages, featuredSeries, latestKhutbah } from '../_data';
import styles from '../KhutbahsPage.module.scss';

export function HeaderSection() {
    return (
        <header className={styles.headerSection}>
            <div className={styles.headerContent}>
                <p className={styles.headerCalligraphy}>
                    وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنفَعُ الْمُؤْمِنِينَ
                </p>
                <p className={styles.headerVerse}>
                    "And remind, for indeed, the reminder benefits the believers"
                    <span className={styles.verseRef}>— Quran 51:55</span>
                </p>
                <h1 className={styles.headerTitle}>Khutbah Archive</h1>
                <p className={styles.headerSubtitle}>
                    Friday Sermons · Eid Khutbahs · Special Lectures
                </p>
            </div>
        </header>
    );
}

interface FeaturedBannerProps {
    onPlay: () => void;
}

export function FeaturedBanner({ onPlay }: FeaturedBannerProps) {
    return (
        <section className={styles.featuredBanner}>
            <div className={styles.container}>
                <button className={styles.featuredPlayBtn} onClick={onPlay}>
                    <div className={styles.playIcon}><Play size={24} /></div>
                    <div className={styles.playInfo}>
                        <span className={styles.playLabel}>Latest Khutbah</span>
                        <span className={styles.playTitle}>{latestKhutbah.title}</span>
                        <span className={styles.playMeta}>{latestKhutbah.speaker} • {latestKhutbah.date}</span>
                    </div>
                    <ChevronRight size={20} className={styles.playArrow} />
                </button>
            </div>
        </section>
    );
}

interface FilterSectionProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    selectedSpeaker: string;
    setSelectedSpeaker: (speaker: string) => void;
    selectedYear: string;
    setSelectedYear: (year: string) => void;
    selectedLanguage: string;
    setSelectedLanguage: (lang: string) => void;
}

export function FilterSection({
    searchQuery, setSearchQuery,
    selectedSpeaker, setSelectedSpeaker,
    selectedYear, setSelectedYear,
    selectedLanguage, setSelectedLanguage
}: FilterSectionProps) {
    return (
        <section className={styles.filterSection}>
            <div className={styles.container}>
                <div className={styles.filterBar}>
                    <div className={styles.searchBox}>
                        <Search size={18} className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Search by topic (e.g., 'Patience', 'Finance')..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={styles.searchInput}
                        />
                    </div>
                    <div className={styles.filterDropdowns}>
                        <div className={styles.dropdown}>
                            <select value={selectedSpeaker} onChange={(e) => setSelectedSpeaker(e.target.value)}>
                                {speakers.map(speaker => (<option key={speaker} value={speaker}>{speaker}</option>))}
                            </select>
                            <ChevronDown size={16} />
                        </div>
                        <div className={styles.dropdown}>
                            <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                                {years.map(year => (<option key={year} value={year}>{year}</option>))}
                            </select>
                            <ChevronDown size={16} />
                        </div>
                        <div className={styles.dropdown}>
                            <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
                                {languages.map(lang => (<option key={lang} value={lang}>{lang}</option>))}
                            </select>
                            <ChevronDown size={16} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

interface SeriesSectionProps {
    onSeriesPlay: (seriesId: number) => void;
}

export function SeriesSection({ onSeriesPlay }: SeriesSectionProps) {
    return (
        <section className={styles.seriesSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Featured Series</h2>
                <div className={styles.seriesCarousel}>
                    {featuredSeries.map((series) => (
                        <div key={series.id} className={styles.seriesCard} style={{ backgroundColor: series.color }}>
                            <div className={styles.seriesPattern} />
                            <div className={styles.seriesContent}>
                                <h3 className={styles.seriesTitle}>{series.title}</h3>
                                <span className={styles.seriesParts}>{series.parts} Parts</span>
                            </div>
                            <button
                                className={styles.seriesPlayBtn}
                                onClick={() => onSeriesPlay(series.id)}
                                aria-label={`Play ${series.title}`}
                            >
                                <Play size={20} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function SubscribeSection() {
    return (
        <section className={styles.subscribeSection}>
            <div className={styles.container}>
                <div className={styles.subscribeContent}>
                    <div className={styles.iconWrapper}>
                        <Mic size={40} className={styles.subscribeIcon} />
                    </div>
                    <h2 className={styles.subscribeTitle}>Take the Khutbah with You</h2>
                    <p className={styles.subscribeSubtitle}>Subscribe to never miss a Friday sermon</p>
                    <div className={styles.podcastBadges}>
                        <Link href="#" className={styles.podcastBadge}>
                            <div className={styles.badgeIcon}>
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" /></svg>
                            </div>
                            <span>Apple Podcasts</span>
                        </Link>
                        <Link href="#" className={styles.podcastBadge}>
                            <div className={styles.badgeIcon}>
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" /></svg>
                            </div>
                            <span>Spotify</span>
                        </Link>
                        <Link href="#" className={styles.podcastBadge}>
                            <div className={styles.badgeIcon}>
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                            </div>
                            <span>Google Podcasts</span>
                        </Link>
                    </div>
                    <Link href="#" className={styles.rssLink}>
                        <ExternalLink size={14} />
                        Subscribe to our RSS Feed
                    </Link>
                </div>
            </div>
        </section>
    );
}
