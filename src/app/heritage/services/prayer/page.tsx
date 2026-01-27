'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PrayerPage.module.scss';
import templateStyles from '../../_styles/template.module.scss';
import {
    Clock,
    Bell,
    PlayCircle,
    Download,
    FileText,
    Users,
    Baby,
    Accessibility,
    DoorOpen,
    BookOpen,
    Compass,
    ChevronRight,
    Volume2,
    Mic2
} from 'lucide-react';

// Current Date/Time for highlighting
const getCurrentPrayer = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const time = hours * 60 + minutes;

    // Simplified prayer time logic (would connect to real API)
    if (time < 6 * 60) return 'fajr';
    if (time < 13 * 60) return 'dhuhr';
    if (time < 16 * 60) return 'asr';
    if (time < 18 * 60 + 30) return 'maghrib';
    return 'isha';
};

// Prayer Times Data (would come from API in production)
const prayerTimes = [
    { id: 'fajr', name: 'Fajr', arabic: 'الفجر', adhan: '5:45 AM', iqamah: '6:00 AM' },
    { id: 'sunrise', name: 'Sunrise', arabic: 'الشروق', adhan: '7:15 AM', iqamah: '—' },
    { id: 'dhuhr', name: 'Dhuhr', arabic: 'الظهر', adhan: '12:30 PM', iqamah: '12:45 PM' },
    { id: 'asr', name: 'Asr', arabic: 'العصر', adhan: '3:45 PM', iqamah: '4:00 PM' },
    { id: 'maghrib', name: 'Maghrib', arabic: 'المغرب', adhan: '5:48 PM', iqamah: '5:53 PM' },
    { id: 'isha', name: 'Isha', arabic: 'العشاء', adhan: '7:15 PM', iqamah: '7:30 PM' },
];

// Jumu'ah Data
const jumuahShifts = [
    {
        shift: 1,
        time: '1:00 PM',
        khateeb: 'Sheikh Abdullah Rahman',
        topic: 'The Rights of the Neighbor in Islam',
    },
    {
        shift: 2,
        time: '2:15 PM',
        khateeb: 'Imam Yusuf Ali',
        topic: 'Patience in Times of Hardship',
    },
];

// Daily Programs
const dailyPrograms = [
    { time: 'After Fajr', program: 'Riyad-us-Saliheen Reading', days: 'Daily' },
    { time: 'After Asr', program: 'Quran Memorization Circle', days: 'Mon, Wed, Fri' },
    { time: 'After Maghrib', program: 'Dua & Dhikr Session', days: 'Daily' },
    { time: 'After Isha', program: 'Tafseer of Short Surahs', days: 'Tue, Thu, Sat' },
];

export default function PrayerPage() {
    const [currentPrayer, setCurrentPrayer] = useState('dhuhr');

    useEffect(() => {
        setCurrentPrayer(getCurrentPrayer());
        // Update every minute
        const interval = setInterval(() => {
            setCurrentPrayer(getCurrentPrayer());
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={templateStyles.template}>
            {/* 1. The Sanctuary Hero */}
            <section className={styles.sanctuaryHero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/heritage/mosque-interior.jpg"
                        alt="Prayer Hall Interior"
                        fill
                        className={styles.heroImage}
                        priority
                    />
                    <div className={styles.heroOverlay} />
                </div>

                <div className={styles.heroContent}>
                    {/* Arabic Calligraphy */}
                    <div className={styles.calligraphy}>
                        <span className={styles.arabicCall}>حَيَّ عَلَى الصَّلاَة</span>
                        <span className={styles.transliteration}>Hayya &apos;alas-Salah</span>
                    </div>

                    <h1 className={styles.heroTitle}>The Second Pillar of Islam</h1>

                    <blockquote className={styles.heroVerse}>
                        <p>&ldquo;Indeed, prayer has been decreed upon the believers a decree of specified times.&rdquo;</p>
                        <cite>— Quran 4:103</cite>
                    </blockquote>
                </div>
            </section>

            {/* 2. The Mawaqit (Schedule Board) */}
            <section className={styles.mawaqitSection}>
                <div className={styles.scheduleBoard}>
                    {/* Board Header */}
                    <div className={styles.boardHeader}>
                        <div className={styles.boardIcon}>
                            <Clock size={28} />
                        </div>
                        <div className={styles.boardTitleBlock}>
                            <h2 className={styles.boardTitle}>مَوَاقِيت الصَّلاَة</h2>
                            <span className={styles.boardSubtitle}>Daily Prayer Schedule</span>
                        </div>
                        <div className={styles.boardDate}>
                            <span className={styles.hijriDate}>15 Rajab 1447</span>
                            <span className={styles.gregorianDate}>January 27, 2026</span>
                        </div>
                    </div>

                    {/* Prayer Grid */}
                    <div className={styles.prayerGrid}>
                        {/* Header Row */}
                        <div className={styles.gridHeader}>
                            <span>Prayer</span>
                            <span><Bell size={14} /> Adhan</span>
                            <span><PlayCircle size={14} /> Iqamah</span>
                        </div>

                        {/* Prayer Rows */}
                        {prayerTimes.map((prayer) => (
                            <div
                                key={prayer.id}
                                className={`${styles.prayerRow} ${currentPrayer === prayer.id ? styles.currentPrayer : ''}`}
                            >
                                <div className={styles.prayerName}>
                                    <span className={styles.prayerArabic}>{prayer.arabic}</span>
                                    <span className={styles.prayerEnglish}>{prayer.name}</span>
                                </div>
                                <div className={styles.prayerTime}>
                                    <span className={styles.timeDigits}>{prayer.adhan}</span>
                                </div>
                                <div className={styles.prayerTime}>
                                    <span className={`${styles.timeDigits} ${styles.iqamahTime}`}>
                                        {prayer.iqamah}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Board Footer */}
                    <div className={styles.boardFooter}>
                        <a href="/documents/prayer-calendar.pdf" className={styles.downloadLink}>
                            <FileText size={16} />
                            Download Monthly PDF Calendar
                        </a>
                    </div>
                </div>
            </section>

            {/* 3. Jumu'ah (Friday Prayer) Details */}
            <section className={styles.jumuahSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Every Friday</span>
                    <h2 className={styles.sectionTitle}>Jumu&apos;ah Prayer</h2>
                </div>

                <div className={styles.jumuahGrid}>
                    {jumuahShifts.map((shift) => (
                        <div key={shift.shift} className={styles.jumuahCard}>
                            <div className={styles.shiftBadge}>
                                <span>Shift {shift.shift}</span>
                            </div>
                            <div className={styles.shiftTime}>{shift.time}</div>
                            <div className={styles.khateebInfo}>
                                <Mic2 className={styles.minbarIcon} size={20} />
                                <div className={styles.khateebDetails}>
                                    <span className={styles.khateebName}>{shift.khateeb}</span>
                                    <span className={styles.khutbahTopic}>{shift.topic}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <p className={styles.jumuahNote}>
                    <em>Doors open 30 minutes before each shift. Please arrive early to secure your spot.</em>
                </p>
            </section>

            {/* 4. Facility & Access Guide */}
            <section className={styles.facilitySection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Facility Guide</span>
                    <h2 className={styles.sectionTitle}>Entering the Prayer Hall</h2>
                </div>

                <div className={styles.facilityGrid}>
                    {/* Men's Entrance */}
                    <div className={styles.entranceCard}>
                        <div className={styles.entranceHeader}>
                            <DoorOpen size={24} />
                            <h3>Men&apos;s Entrance</h3>
                        </div>
                        <div className={styles.entrancePhoto}>
                            <Image
                                src="/images/placeholder-entrance.jpg"
                                alt="Men's Main Entrance"
                                fill
                                className={styles.entranceImage}
                            />
                        </div>
                        <ul className={styles.entranceDetails}>
                            <li>Main entrance via Oak Street (front of building)</li>
                            <li>Shoe racks located in the foyer</li>
                            <li>Wudu (ablution) area on right before prayer hall</li>
                            <li><Accessibility size={14} /> Wheelchair ramp available</li>
                        </ul>
                    </div>

                    {/* Sisters' Entrance */}
                    <div className={styles.entranceCard}>
                        <div className={styles.entranceHeader}>
                            <DoorOpen size={24} />
                            <h3>Sisters&apos; Entrance</h3>
                        </div>
                        <div className={styles.entrancePhoto}>
                            <Image
                                src="/images/placeholder-entrance.jpg"
                                alt="Sisters' Private Entrance"
                                fill
                                className={styles.entranceImage}
                            />
                        </div>
                        <ul className={styles.entranceDetails}>
                            <li>Private entrance via Elm Avenue (side of building)</li>
                            <li>Dedicated wudu facilities on ground floor</li>
                            <li>Elevator access to upper balcony prayer area</li>
                            <li><Baby size={14} /> Children&apos;s play area adjacent to prayer space</li>
                        </ul>
                    </div>
                </div>

                {/* Floor Plan Note */}
                <div className={styles.floorPlanNote}>
                    <Compass size={18} />
                    <span>The Qibla (direction of prayer) faces Northeast. Clear markings are on the carpet.</span>
                </div>
            </section>

            {/* 5. Daily Khatiras & Halaqas */}
            <section className={styles.programsSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Daily Programs</span>
                    <h2 className={styles.sectionTitle}>Khatiras &amp; Halaqas</h2>
                </div>

                <div className={styles.programsGrid}>
                    {dailyPrograms.map((program, index) => (
                        <div key={index} className={styles.programItem}>
                            <div className={styles.programTime}>
                                <BookOpen size={16} />
                                <span>{program.time}</span>
                            </div>
                            <div className={styles.programDetails}>
                                <span className={styles.programName}>{program.program}</span>
                                <span className={styles.programDays}>{program.days}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. Qibla Direction */}
            <section className={styles.qiblaSection}>
                <div className={styles.qiblaBlock}>
                    <div className={styles.compassWrapper}>
                        <div className={styles.compassRing}>
                            <div className={styles.compassNeedle} />
                        </div>
                        <span className={styles.compassN}>N</span>
                    </div>
                    <div className={styles.qiblaInfo}>
                        <span className={styles.qiblaLabel}>Qibla Direction</span>
                        <span className={styles.qiblaAngle}>54° NE</span>
                        <span className={styles.qiblaNote}>from Springfield, IL</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
