// Khutbah Archive Page - "The Pulpit" - HERITAGE ALIGNED
// Design: Deep Charcoal + Metallic Gold + Off-White
// Vibe: Intellectual, Resonant, Accessible
'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Link from 'next/link';
import {
    Search,
    ChevronDown,
    Play,
    Pause,
    RotateCcw,
    SkipBack,
    SkipForward,
    Download,
    Share2,
    MoreVertical,
    Clock,
    User,
    Mic,
    ChevronRight,
    Volume2,
    VolumeX,
    ExternalLink,
    Loader2,
    List
} from 'lucide-react';
import styles from './KhutbahsPage.module.scss';

// ========================================
// DATA
// ========================================
const latestKhutbah = {
    id: 1,
    title: 'The Rights of the Neighbor',
    speaker: 'Sheikh Abdullah',
    date: 'Jan 24, 2026',
    hijriDate: 'Rajab 24, 1447',
    duration: '28:45',
    audioUrl: 'https://server8.mp3quran.net/jbrl/001.mp3'
};

// Audio tracks for the player
const audioTracks = [
    {
        id: 1,
        title: 'The Rights of the Neighbor',
        speaker: 'Sheikh Abdullah',
        src: 'https://server8.mp3quran.net/jbrl/001.mp3',
    },
    {
        id: 2,
        title: 'Navigating Hardship with Gratitude',
        speaker: 'Imam Ahmed Mustafa',
        src: 'https://server8.mp3quran.net/jbrl/002.mp3',
    },
    {
        id: 3,
        title: 'The Importance of Community',
        speaker: 'Sheikh Abdullah Smith',
        src: 'https://server8.mp3quran.net/jbrl/003.mp3',
    },
    {
        id: 4,
        title: 'Purification of the Heart',
        speaker: 'Imam Ahmed Mustafa',
        src: 'https://server8.mp3quran.net/jbrl/004.mp3',
    },
];

const speakers = ['All Speakers', 'Sh. Ahmed Mustafa', 'Sh. Abdullah Smith', 'Sh. Omar Hassan', 'Guest Speakers'];
const years = ['All Years', '2026', '2025', '2024', '2023'];
const languages = ['All Languages', 'English', 'Arabic', 'Urdu'];

const featuredSeries = [
    {
        id: 1,
        title: 'The Family Series',
        parts: 3, // IDs 1, 5, 6
        pattern: 'geometric-1',
        color: '#1a3a2f'
    },
    {
        id: 2,
        title: 'Stories of the Prophets',
        parts: 3, // IDs 3, 4, 7
        pattern: 'geometric-2',
        color: '#2c1810'
    },
    {
        id: 3,
        title: 'Ramadan Prep 2026',
        parts: 2, // IDs 8, 9
        pattern: 'geometric-3',
        color: '#1a2a3a'
    },
    {
        id: 4,
        title: 'Financial Ethics',
        parts: 3, // IDs 10, 11, 12
        pattern: 'geometric-4',
        color: '#3a2a1a'
    }
];

// Full archive data for infinite scroll simulation - each khutbah has audio URL
const allKhutbahs = [
    {
        id: 1,
        title: 'The Rights of the Neighbor',
        speaker: 'Sheikh Abdullah',
        date: 'Jan 24, 2026',
        hijriDate: 'Rajab 24, 1447',
        duration: '28:45',
        tags: ['Family', 'Community'],
        audioUrl: 'https://server8.mp3quran.net/jbrl/001.mp3',
        seriesId: 1 // The Family Series
    },
    {
        id: 2,
        title: 'Navigating Hardship with Gratitude',
        speaker: 'Imam Ahmed Mustafa',
        date: 'Jan 17, 2026',
        hijriDate: 'Rajab 17, 1447',
        duration: '32:15',
        tags: ['Spirituality', 'Patience'],
        audioUrl: 'https://server8.mp3quran.net/jbrl/002.mp3',
        seriesId: null
    },
    {
        id: 3,
        title: 'Stories of Prophet Ibrahim - Part 1',
        speaker: 'Sheikh Abdullah Smith',
        date: 'Jan 10, 2026',
        hijriDate: 'Rajab 10, 1447',
        duration: '28:45',
        tags: ['Seerah', 'Prophets'],
        audioUrl: 'https://server8.mp3quran.net/jbrl/003.mp3',
        seriesId: 2 // Stories of Prophets
    },
    {
        id: 4,
        title: 'Stories of Prophet Ibrahim - Part 2',
        speaker: 'Sheikh Abdullah Smith',
        date: 'Jan 3, 2026',
        hijriDate: 'Rajab 3, 1447',
        duration: '35:20',
        tags: ['Seerah', 'Prophets'],
        audioUrl: 'https://server8.mp3quran.net/jbrl/004.mp3',
        seriesId: 2
    },
    {
        id: 5,
        title: 'Raising Righteous Children',
        speaker: 'Imam Ahmed Mustafa',
        date: 'Dec 27, 2025',
        hijriDate: 'Jumada II 26, 1447',
        duration: '38:15',
        tags: ['Family', 'Parenting'],
        audioUrl: 'https://server8.mp3quran.net/jbrl/005.mp3',
        seriesId: 1 // The Family Series
    },
    {
        id: 6,
        title: 'Marriage in Islam',
        speaker: 'Sheikh Abdullah Smith',
        date: 'Dec 20, 2025',
        hijriDate: 'Jumada II 19, 1447',
        duration: '36:10',
        tags: ['Family', 'Marriage'],
        audioUrl: 'https://server8.mp3quran.net/jbrl/006.mp3',
        seriesId: 1 // The Family Series
    },
    {
        id: 7,
        title: 'Stories of Prophet Musa - Part 1',
        speaker: 'Sheikh Abdullah Smith',
        date: 'Dec 13, 2025',
        hijriDate: 'Jumada II 12, 1447',
        duration: '45:00',
        tags: ['Seerah', 'Prophets'],
        audioUrl: 'https://server8.mp3quran.net/jbrl/007.mp3',
        seriesId: 2
    },
    {
        id: 8,
        title: 'Preparing for Ramadan - Fasting Basics',
        speaker: 'Sheikh Omar Hassan',
        date: 'Dec 6, 2025',
        hijriDate: 'Jumada II 5, 1447',
        duration: '33:45',
        tags: ['Ramadan', 'Fasting'],
        audioUrl: 'https://server8.mp3quran.net/jbrl/008.mp3',
        seriesId: 3 // Ramadan Prep
    },
    {
        id: 9,
        title: 'Preparing for Ramadan - Night Prayers',
        speaker: 'Imam Ahmed Mustafa',
        date: 'Nov 29, 2025',
        hijriDate: 'Jumada I 28, 1447',
        duration: '40:20',
        tags: ['Ramadan', 'Worship'],
        audioUrl: 'https://server8.mp3quran.net/jbrl/009.mp3',
        seriesId: 3
    },
    {
        id: 10,
        title: 'Financial Ethics - Halal Earnings',
        speaker: 'Sheikh Omar Hassan',
        date: 'Nov 22, 2025',
        hijriDate: 'Jumada I 21, 1447',
        duration: '36:10',
        tags: ['Finance', 'Ethics'],
        audioUrl: 'https://server8.mp3quran.net/jbrl/010.mp3',
        seriesId: 4 // Financial Ethics
    },
    {
        id: 11,
        title: 'Financial Ethics - Avoiding Riba',
        speaker: 'Sheikh Omar Hassan',
        date: 'Nov 15, 2025',
        hijriDate: 'Jumada I 14, 1447',
        duration: '29:30',
        tags: ['Finance', 'Ethics'],
        audioUrl: 'https://server8.mp3quran.net/jbrl/011.mp3',
        seriesId: 4
    },
    {
        id: 12,
        title: 'Financial Ethics - Zakat and Sadaqah',
        speaker: 'Sheikh Omar Hassan',
        date: 'Nov 8, 2025',
        hijriDate: 'Jumada I 7, 1447',
        duration: '44:15',
        tags: ['Finance', 'Charity'],
        audioUrl: 'https://server8.mp3quran.net/jbrl/012.mp3',
        seriesId: 4
    }
];

const ITEMS_PER_PAGE = 5;

// ========================================
// COMPONENT
// ========================================
export default function KhutbahsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSpeaker, setSelectedSpeaker] = useState('All Speakers');
    const [selectedYear, setSelectedYear] = useState('All Years');
    const [selectedLanguage, setSelectedLanguage] = useState('All Languages');
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentKhutbah, setCurrentKhutbah] = useState(latestKhutbah);
    const [showPlayer, setShowPlayer] = useState(false);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);

    // Infinite scroll state
    const [displayedKhutbahs, setDisplayedKhutbahs] = useState(allKhutbahs.slice(0, ITEMS_PER_PAGE));
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const loadMoreRef = useRef<HTMLButtonElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Audio player state
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.8);
    const [isMuted, setIsMuted] = useState(false);
    const [showPlaylist, setShowPlaylist] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

    const handlePlay = (khutbah: typeof latestKhutbah) => {
        setCurrentKhutbah(khutbah);
        setIsPlaying(true);
        setShowPlayer(true);
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const cycleSpeed = () => {
        const speeds = [1, 1.25, 1.5, 2];
        const currentIndex = speeds.indexOf(playbackSpeed);
        setPlaybackSpeed(speeds[(currentIndex + 1) % speeds.length]);
    };

    // Filter khutbahs based on search and filters
    const filteredKhutbahs = useMemo(() => {
        return allKhutbahs.filter(khutbah => {
            // Search query filter
            const matchesSearch = searchQuery === '' ||
                khutbah.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                khutbah.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
                khutbah.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            // Speaker filter
            const matchesSpeaker = selectedSpeaker === 'All Speakers' ||
                khutbah.speaker.includes(selectedSpeaker.replace('Sh. ', 'Sheikh ').replace('Sh. ', ''));

            // Year filter
            const matchesYear = selectedYear === 'All Years' ||
                khutbah.date.includes(selectedYear);

            return matchesSearch && matchesSpeaker && matchesYear;
        });
    }, [searchQuery, selectedSpeaker, selectedYear]);

    // Reset displayed khutbahs when filters change
    useEffect(() => {
        setDisplayedKhutbahs(filteredKhutbahs.slice(0, ITEMS_PER_PAGE));
        setHasMore(filteredKhutbahs.length > ITEMS_PER_PAGE);
    }, [filteredKhutbahs]);

    // Load more function
    const loadMore = useCallback(() => {
        if (isLoading || !hasMore) return;

        setIsLoading(true);

        // Simulate API delay
        setTimeout(() => {
            const currentLength = displayedKhutbahs.length;
            const nextItems = filteredKhutbahs.slice(currentLength, currentLength + ITEMS_PER_PAGE);

            if (nextItems.length === 0) {
                setHasMore(false);
            } else {
                setDisplayedKhutbahs(prev => [...prev, ...nextItems]);
                if (currentLength + ITEMS_PER_PAGE >= filteredKhutbahs.length) {
                    setHasMore(false);
                }
            }

            setIsLoading(false);
        }, 800);
    }, [displayedKhutbahs.length, isLoading, hasMore, filteredKhutbahs]);

    // Intersection Observer for infinite scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !isLoading) {
                    loadMore();
                }
            },
            { threshold: 0.1 }
        );

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => observer.disconnect();
    }, [loadMore, hasMore, isLoading]);

    // Audio playback control - play when track changes or isPlaying becomes true
    useEffect(() => {
        if (audioRef.current && showPlayer) {
            if (isPlaying) {
                audioRef.current.play().catch(console.error);
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentKhutbah.audioUrl, showPlayer]);

    return (
        <div className={styles.khutbahsPage}>
            {/* ========================================
                1. BISMILLAH HEADER - Heritage Aligned
            ======================================== */}
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

            {/* Featured Khutbah Banner */}
            <section className={styles.featuredBanner}>
                <div className={styles.container}>
                    <button
                        className={styles.featuredPlayBtn}
                        onClick={() => handlePlay(latestKhutbah)}
                    >
                        <div className={styles.playIcon}>
                            <Play size={24} />
                        </div>
                        <div className={styles.playInfo}>
                            <span className={styles.playLabel}>Latest Khutbah</span>
                            <span className={styles.playTitle}>{latestKhutbah.title}</span>
                            <span className={styles.playMeta}>
                                {latestKhutbah.speaker} • {latestKhutbah.date}
                            </span>
                        </div>
                        <ChevronRight size={20} className={styles.playArrow} />
                    </button>
                </div>
            </section>

            {/* ========================================
                2. SEARCH & FILTER BAR (Sticky)
            ======================================== */}
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
                                <select
                                    value={selectedSpeaker}
                                    onChange={(e) => setSelectedSpeaker(e.target.value)}
                                >
                                    {speakers.map(speaker => (
                                        <option key={speaker} value={speaker}>{speaker}</option>
                                    ))}
                                </select>
                                <ChevronDown size={16} />
                            </div>

                            <div className={styles.dropdown}>
                                <select
                                    value={selectedYear}
                                    onChange={(e) => setSelectedYear(e.target.value)}
                                >
                                    {years.map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                                <ChevronDown size={16} />
                            </div>

                            <div className={styles.dropdown}>
                                <select
                                    value={selectedLanguage}
                                    onChange={(e) => setSelectedLanguage(e.target.value)}
                                >
                                    {languages.map(lang => (
                                        <option key={lang} value={lang}>{lang}</option>
                                    ))}
                                </select>
                                <ChevronDown size={16} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================
                3. FEATURED SERIES (COLLECTIONS)
            ======================================== */}
            <section className={styles.seriesSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Featured Series</h2>

                    <div className={styles.seriesCarousel}>
                        {featuredSeries.map((series) => (
                            <div
                                key={series.id}
                                className={styles.seriesCard}
                                style={{ backgroundColor: series.color }}
                            >
                                <div className={styles.seriesPattern} />
                                <div className={styles.seriesContent}>
                                    <h3 className={styles.seriesTitle}>{series.title}</h3>
                                    <span className={styles.seriesParts}>{series.parts} Parts</span>
                                </div>
                                <button
                                    className={styles.seriesPlayBtn}
                                    onClick={() => {
                                        // Find all khutbahs in this series
                                        const seriesKhutbahs = allKhutbahs.filter(k => k.seriesId === series.id);
                                        if (seriesKhutbahs.length > 0) {
                                            const firstKhutbah = seriesKhutbahs[0];
                                            setCurrentKhutbah({
                                                ...latestKhutbah,
                                                title: firstKhutbah.title,
                                                speaker: firstKhutbah.speaker,
                                                audioUrl: firstKhutbah.audioUrl
                                            });
                                            setCurrentTrackIndex(0);
                                            setIsPlaying(true);
                                            setShowPlayer(true);
                                            setShowPlaylist(true); // Show playlist for series
                                        }
                                    }}
                                    aria-label={`Play ${series.title}`}
                                >
                                    <Play size={20} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================
                4. THE ARCHIVE LIST (THE FEED)
            ======================================== */}
            <section className={styles.archiveSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>All Khutbahs</h2>
                        <p className={styles.archiveNote}>
                            <Clock size={14} /> Khutbahs are uploaded every Friday by 5:00 PM
                        </p>
                    </div>

                    <div className={styles.archiveList}>
                        {displayedKhutbahs.map((khutbah) => (
                            <div key={khutbah.id} className={styles.episodeCard}>
                                {/* Date Leaf */}
                                <div className={styles.dateLeaf}>
                                    <span className={styles.dateGregorian}>
                                        {khutbah.date.split(' ')[1].replace(',', '')}
                                    </span>
                                    <span className={styles.dateMonth}>
                                        {khutbah.date.split(' ')[0]}
                                    </span>
                                    <span className={styles.dateHijri}>
                                        {khutbah.hijriDate.split(' ')[1]}
                                    </span>
                                </div>

                                {/* Info */}
                                <div className={styles.episodeInfo}>
                                    <h3 className={styles.episodeTitle}>{khutbah.title}</h3>
                                    <p className={styles.episodeSpeaker}>
                                        <User size={12} /> delivered by {khutbah.speaker}
                                    </p>
                                    <div className={styles.episodeTags}>
                                        {khutbah.tags.map(tag => (
                                            <span key={tag} className={styles.tag}>#{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className={styles.episodeActions}>
                                    <button
                                        className={styles.playBtn}
                                        onClick={() => {
                                            setCurrentKhutbah({
                                                id: khutbah.id,
                                                title: khutbah.title,
                                                speaker: khutbah.speaker,
                                                date: khutbah.date,
                                                hijriDate: khutbah.hijriDate,
                                                duration: khutbah.duration,
                                                audioUrl: khutbah.audioUrl
                                            });
                                            setIsPlaying(true);
                                            setShowPlayer(true);
                                            setShowPlaylist(false); // Hide playlist for single track
                                        }}
                                        aria-label="Play"
                                    >
                                        <Play size={20} />
                                    </button>
                                    <span className={styles.duration}>
                                        <Clock size={12} /> {khutbah.duration}
                                    </span>
                                    <div className={styles.moreMenu}>
                                        <button className={styles.moreBtn} aria-label="More options">
                                            <MoreVertical size={18} />
                                        </button>
                                        <div className={styles.moreDropdown}>
                                            <button><Download size={14} /> Download MP3</button>
                                            <button><Share2 size={14} /> Share</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More Button with Infinite Scroll */}
                    {hasMore && (
                        <button
                            ref={loadMoreRef}
                            className={styles.loadMoreBtn}
                            onClick={loadMore}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 size={18} className={styles.spinner} />
                                    Loading...
                                </>
                            ) : (
                                'Load More Khutbahs'
                            )}
                        </button>
                    )}

                    {!hasMore && displayedKhutbahs.length > 0 && (
                        <p className={styles.endMessage}>You've reached the beginning of our archive</p>
                    )}
                </div>
            </section>

            {/* ========================================
                5. SUBSCRIBE & PODCAST LINKS
            ======================================== */}
            <section className={styles.subscribeSection}>
                <div className={styles.container}>
                    <div className={styles.subscribeContent}>
                        <div className={styles.iconWrapper}>
                            <Mic size={40} className={styles.subscribeIcon} />
                        </div>
                        <h2 className={styles.subscribeTitle}>Take the Khutbah with You</h2>
                        <p className={styles.subscribeSubtitle}>
                            Subscribe to never miss a Friday sermon
                        </p>

                        <div className={styles.podcastBadges}>
                            <Link href="#" className={styles.podcastBadge}>
                                <div className={styles.badgeIcon}>
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                                    </svg>
                                </div>
                                <span>Apple Podcasts</span>
                            </Link>
                            <Link href="#" className={styles.podcastBadge}>
                                <div className={styles.badgeIcon}>
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                                    </svg>
                                </div>
                                <span>Spotify</span>
                            </Link>
                            <Link href="#" className={styles.podcastBadge}>
                                <div className={styles.badgeIcon}>
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                    </svg>
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

            {/* ========================================
                6. CUSTOM AUDIO PLAYER (Native HTML5)
            ======================================== */}
            {showPlayer && (
                <div className={styles.audioPlayerWrapper}>
                    {/* Hidden audio element */}
                    <audio
                        ref={audioRef}
                        src={currentKhutbah.audioUrl}
                        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
                        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
                        onEnded={() => {
                            if (currentTrackIndex < audioTracks.length - 1) {
                                const nextTrack = audioTracks[currentTrackIndex + 1];
                                setCurrentTrackIndex(currentTrackIndex + 1);
                                setCurrentKhutbah({ ...currentKhutbah, title: nextTrack.title, speaker: nextTrack.speaker, audioUrl: nextTrack.src });
                            } else {
                                setIsPlaying(false);
                            }
                        }}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                    />

                    <button
                        className={styles.closePlayer}
                        onClick={() => {
                            setShowPlayer(false);
                            audioRef.current?.pause();
                            setIsPlaying(false);
                        }}
                        aria-label="Close player"
                    >
                        ×
                    </button>

                    <div className={styles.playerContent}>
                        {/* Track Info */}
                        <div className={styles.nowPlaying}>
                            <Volume2 size={16} className={styles.volumeIcon} />
                            <div className={styles.nowPlayingInfo}>
                                <span className={styles.nowPlayingTitle}>{currentKhutbah.title}</span>
                                <span className={styles.nowPlayingSpeaker}>{currentKhutbah.speaker}</span>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className={styles.playerControls}>
                            <button
                                className={styles.skipBtn}
                                onClick={() => {
                                    if (currentTrackIndex > 0) {
                                        const prevTrack = audioTracks[currentTrackIndex - 1];
                                        setCurrentTrackIndex(currentTrackIndex - 1);
                                        setCurrentKhutbah({ ...currentKhutbah, title: prevTrack.title, speaker: prevTrack.speaker, audioUrl: prevTrack.src });
                                    }
                                }}
                                disabled={currentTrackIndex === 0}
                                aria-label="Previous track"
                            >
                                <SkipBack size={18} />
                            </button>
                            <button
                                className={styles.rewindBtn}
                                onClick={() => {
                                    if (audioRef.current) {
                                        audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 15);
                                    }
                                }}
                                aria-label="Rewind 15 seconds"
                            >
                                <RotateCcw size={16} />
                                <span>15</span>
                            </button>
                            <button
                                className={styles.mainPlayBtn}
                                onClick={() => {
                                    if (audioRef.current) {
                                        if (isPlaying) {
                                            audioRef.current.pause();
                                        } else {
                                            audioRef.current.play();
                                        }
                                    }
                                }}
                                aria-label={isPlaying ? 'Pause' : 'Play'}
                            >
                                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                            </button>
                            <button
                                className={styles.speedBtn}
                                onClick={() => {
                                    const speeds = [1, 1.25, 1.5, 2];
                                    const currentSpeedIndex = speeds.indexOf(playbackSpeed);
                                    const newSpeed = speeds[(currentSpeedIndex + 1) % speeds.length];
                                    setPlaybackSpeed(newSpeed);
                                    if (audioRef.current) {
                                        audioRef.current.playbackRate = newSpeed;
                                    }
                                }}
                            >
                                {playbackSpeed}x
                            </button>
                            <button
                                className={styles.skipBtn}
                                onClick={() => {
                                    if (currentTrackIndex < audioTracks.length - 1) {
                                        const nextTrack = audioTracks[currentTrackIndex + 1];
                                        setCurrentTrackIndex(currentTrackIndex + 1);
                                        setCurrentKhutbah({ ...currentKhutbah, title: nextTrack.title, speaker: nextTrack.speaker, audioUrl: nextTrack.src });
                                    }
                                }}
                                disabled={currentTrackIndex === audioTracks.length - 1}
                                aria-label="Next track"
                            >
                                <SkipForward size={18} />
                            </button>
                        </div>

                        {/* Progress Bar */}
                        <div className={styles.playerProgress}>
                            <span className={styles.progressTime}>
                                {Math.floor(currentTime / 60)}:{String(Math.floor(currentTime % 60)).padStart(2, '0')}
                            </span>
                            <div
                                className={styles.progressBar}
                                onClick={(e) => {
                                    if (audioRef.current && duration) {
                                        const rect = e.currentTarget.getBoundingClientRect();
                                        const clickX = e.clientX - rect.left;
                                        const newTime = (clickX / rect.width) * duration;
                                        audioRef.current.currentTime = newTime;
                                    }
                                }}
                            >
                                <div
                                    className={styles.progressFill}
                                    style={{ width: duration ? `${(currentTime / duration) * 100}%` : '0%' }}
                                />
                            </div>
                            <span className={styles.progressDuration}>
                                {duration ? `${Math.floor(duration / 60)}:${String(Math.floor(duration % 60)).padStart(2, '0')}` : '--:--'}
                            </span>
                        </div>

                        {/* Volume & Playlist Toggle */}
                        <div className={styles.playerExtras}>
                            <button
                                className={styles.volumeBtn}
                                onClick={() => {
                                    setIsMuted(!isMuted);
                                    if (audioRef.current) {
                                        audioRef.current.muted = !isMuted;
                                    }
                                }}
                                aria-label={isMuted ? 'Unmute' : 'Mute'}
                            >
                                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                            </button>
                            <button
                                className={styles.playlistBtn}
                                onClick={() => setShowPlaylist(!showPlaylist)}
                                aria-label="Toggle playlist"
                            >
                                <List size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Playlist Dropdown */}
                    {showPlaylist && (
                        <div className={styles.playlistDropdown}>
                            <h4 className={styles.playlistTitle}>Playlist</h4>
                            <ul className={styles.playlistList}>
                                {audioTracks.map((track, index) => (
                                    <li
                                        key={track.id}
                                        className={`${styles.playlistItem} ${index === currentTrackIndex ? styles.playlistItemActive : ''}`}
                                        onClick={() => {
                                            setCurrentTrackIndex(index);
                                            setCurrentKhutbah({ ...currentKhutbah, title: track.title, speaker: track.speaker, audioUrl: track.src });
                                            setIsPlaying(true);
                                            setShowPlaylist(false);
                                        }}
                                    >
                                        <span className={styles.playlistItemTitle}>{track.title}</span>
                                        <span className={styles.playlistItemSpeaker}>{track.speaker}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
