'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
    Sun,
    Moon,
    BookOpen,
    Scale,
    Heart,
    Users,
    Calendar,
    Clock,
    Play,
    Download,
    ExternalLink,
    MessageCircle,
    Mail,
    Bookmark,
    GraduationCap,
    Headphones
} from 'lucide-react';
import styles from './AdultClassesPage.module.scss';

// Daily Khatiras
const dailyKhatiras = [
    {
        time: 'After Fajr',
        icon: Sun,
        title: 'Riyad-us-Saliheen',
        subtitle: 'Gardens of the Righteous',
        description: 'Daily hadith commentary from Imam Nawawi\'s masterpiece'
    },
    {
        time: 'After Isha',
        icon: Moon,
        title: 'Tafseer of the Short Surahs',
        subtitle: 'Juz Amma Explained',
        description: 'Deep dive into the meanings of the Surahs we recite daily'
    }
];

// Weekly Program Tracks
const programTracks = [
    {
        id: 'quran',
        track: 'Track 1',
        title: 'Quranic Sciences',
        arabicTitle: 'علوم القرآن',
        subtitle: 'Tajweed Correction & Tafseer',
        description: 'Focus on reading fluency and understanding the deeper meanings of the Quran.',
        instructor: 'Sh. Ahmad Hassan',
        schedule: 'Fridays after Maghrib',
        icon: BookOpen,
        color: 'blue'
    },
    {
        id: 'fiqh',
        track: 'Track 2',
        title: 'Fiqh & Law',
        arabicTitle: 'الفقه والأحكام',
        subtitle: 'Essentials of Worship',
        description: 'Learning the rules of prayer, fasting, Zakat, and daily transactions.',
        instructor: 'Sh. Yusuf Ali',
        schedule: 'Saturdays at 7 PM',
        icon: Scale,
        color: 'mahogany'
    },
    {
        id: 'tazkiyah',
        track: 'Track 3',
        title: 'Tazkiyah',
        arabicTitle: 'تزكية النفس',
        subtitle: 'Purification of the Heart',
        description: 'Studying the works of Imam Ghazali and Ibn Qayyim on spiritual development.',
        instructor: 'Sh. Ibrahim Noor',
        schedule: 'Sundays at 11 AM',
        icon: Heart,
        color: 'green'
    }
];

// Archive recordings
const archiveRecordings = [
    {
        id: 1,
        series: 'Seerah',
        title: 'Episode 45: The Migration to Medina',
        duration: '45 min',
        hasNotes: true
    },
    {
        id: 2,
        series: 'Fiqh',
        title: 'Zakat: Assets & Calculation Methods',
        duration: '38 min',
        hasNotes: true
    },
    {
        id: 3,
        series: 'Tafseer',
        title: 'Surah Al-Mulk: Verse by Verse',
        duration: '52 min',
        hasNotes: false
    },
    {
        id: 4,
        series: 'Spirituality',
        title: "Imam Ghazali's Book of Knowledge",
        duration: '41 min',
        hasNotes: true
    }
];

export default function AdultClassesPage() {
    return (
        <main className={styles.adultClassesPage}>
            {/* ========================================
                1. THE "SEEKER'S" HERO
            ======================================== */}
            <section className={styles.seekersHero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/heritage/halaqa-circle.jpg"
                        alt=""
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay} />
                </div>

                <div className={styles.heroContent}>
                    <div className={styles.wisdomCalligraphy}>
                        <span className={styles.arabicWisdom}>
                            اطْلُبِ الْعِلْمَ مِنَ الْمَهْدِ إِلَى اللَّحْدِ
                        </span>
                        <span className={styles.wisdomTranslation}>
                            "Seek knowledge from the cradle to the grave"
                        </span>
                    </div>

                    <h1 className={styles.heroTitle}>Lifelong Learning</h1>
                    <p className={styles.heroTagline}>
                        Daily and weekly circles to nourish the soul and sharpen the mind
                    </p>

                    <div className={styles.heroBadge}>
                        <Headphones size={16} />
                        <span>All classes broadcast live on YouTube & Mixlr</span>
                    </div>
                </div>
            </section>

            {/* ========================================
                2. DAILY KHATIRAS (The Routine)
            ======================================== */}
            <section className={styles.khatiraStrip}>
                <div className={styles.stripHeader}>
                    <h2>Daily Reminders</h2>
                    <span>Short sessions every day</span>
                </div>

                <div className={styles.khatiraCards}>
                    {dailyKhatiras.map((khatira) => {
                        const IconComponent = khatira.icon;
                        return (
                            <div key={khatira.time} className={styles.khatiraCard}>
                                <div className={styles.khatiraIcon}>
                                    <IconComponent size={28} />
                                </div>
                                <div className={styles.khatiraTime}>{khatira.time}</div>
                                <h3>{khatira.title}</h3>
                                <span className={styles.khatiraSubtitle}>{khatira.subtitle}</span>
                                <p>{khatira.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ========================================
                3. WEEKLY PROGRAM TRACKS
            ======================================== */}
            <section className={styles.programSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Weekly Curriculum</span>
                    <h2 className={styles.sectionTitle}>The Knowledge Tracks</h2>
                    <p className={styles.sectionSubtitle}>
                        Structured learning paths for seekers at every level
                    </p>
                </div>

                <div className={styles.tracksGrid}>
                    {programTracks.map((track) => {
                        const IconComponent = track.icon;
                        return (
                            <div
                                key={track.id}
                                className={`${styles.trackCard} ${styles[track.color]}`}
                            >
                                <div className={styles.trackSpine} />
                                <div className={styles.trackContent}>
                                    <span className={styles.trackLabel}>{track.track}</span>
                                    <div className={styles.trackIcon}>
                                        <IconComponent size={24} />
                                    </div>
                                    <h3>{track.title}</h3>
                                    <span className={styles.trackArabic}>{track.arabicTitle}</span>
                                    <p className={styles.trackSubtitle}>{track.subtitle}</p>
                                    <p className={styles.trackDescription}>{track.description}</p>

                                    <div className={styles.trackMeta}>
                                        <div className={styles.metaItem}>
                                            <GraduationCap size={14} />
                                            <span>{track.instructor}</span>
                                        </div>
                                        <div className={styles.metaItem}>
                                            <Calendar size={14} />
                                            <span>{track.schedule}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className={styles.hadithNote}>
                    <BookOpen size={18} />
                    <p>
                        "Whoever travels a path in search of knowledge, Allah will make easy
                        for him a path to Paradise."
                    </p>
                </div>
            </section>

            {/* ========================================
                4. SISTERS' HALAQA (Special Feature)
            ======================================== */}
            <section className={styles.sistersSection}>
                <div className={styles.sistersContent}>
                    <div className={styles.sistersIcon}>
                        <Users size={32} />
                    </div>

                    <h2>The Sisters' Circle</h2>
                    <p className={styles.sistersDescription}>
                        A dedicated space for women to learn, discuss, and bond in a supportive
                        environment focused on spiritual growth.
                    </p>

                    <div className={styles.sistersDetails}>
                        <div className={styles.detailItem}>
                            <Calendar size={18} />
                            <span>Every Wednesday</span>
                        </div>
                        <div className={styles.detailItem}>
                            <Clock size={18} />
                            <span>10:00 AM - 12:00 PM</span>
                        </div>
                        <div className={styles.detailItem}>
                            <Heart size={18} />
                            <span>Childcare Provided</span>
                        </div>
                    </div>

                    <Link href="#" className={styles.whatsappBtn}>
                        <MessageCircle size={18} />
                        Join the Duha Circle
                    </Link>
                </div>
            </section>

            {/* ========================================
                5. THE "ILM ARCHIVE" (Recordings)
            ======================================== */}
            <section className={styles.archiveSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Missed a Class?</span>
                    <h2 className={styles.sectionTitle}>The 'Ilm Archive</h2>
                    <p className={styles.sectionSubtitle}>
                        Access recordings of past lessons anytime, anywhere
                    </p>
                </div>

                <div className={styles.archiveList}>
                    {archiveRecordings.map((recording) => (
                        <div key={recording.id} className={styles.archiveRow}>
                            <button className={styles.playBtn} aria-label="Play recording">
                                <Play size={18} />
                            </button>

                            <div className={styles.recordingInfo}>
                                <span className={styles.recordingSeries}>{recording.series}</span>
                                <h4>{recording.title}</h4>
                                <span className={styles.recordingDuration}>{recording.duration}</span>
                            </div>

                            <div className={styles.recordingActions}>
                                {recording.hasNotes && (
                                    <button className={styles.notesBtn} aria-label="Download notes">
                                        <Download size={16} />
                                        <span>PDF Notes</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.archiveLinks}>
                    <a href="#" className={styles.archiveLink}>
                        <ExternalLink size={16} />
                        View Full Archive on YouTube
                    </a>
                    <a href="#" className={styles.archiveLink}>
                        <Headphones size={16} />
                        Visit Duha Academy
                    </a>
                </div>
            </section>

            {/* ========================================
                6. REGISTRATION & UPDATES
            ======================================== */}
            <section className={styles.registrationSection}>
                <div className={styles.registrationContent}>
                    <h2>Stay Connected</h2>
                    <p className={styles.registrationNote}>
                        Most classes are open to the public and require no registration.
                        For specialized workshops, please sign up below.
                    </p>

                    <form className={styles.newsletterForm}>
                        <div className={styles.inputWrapper}>
                            <Bookmark size={18} className={styles.inputIcon} />
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                aria-label="Email address"
                            />
                        </div>
                        <button type="submit">
                            <Mail size={16} />
                            Subscribe to Education Newsletter
                        </button>
                    </form>

                    <p className={styles.privacyNote}>
                        We respect your privacy. Unsubscribe anytime.
                    </p>
                </div>
            </section>
        </main>
    );
}
