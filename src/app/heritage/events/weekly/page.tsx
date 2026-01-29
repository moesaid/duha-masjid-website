// Weekly Programs Page - HERITAGE ALIGNED
// Design: Warm Amber + Coffee/Clay + Sage Green (The Community Rhythm)
// Vibe: Consistent, Familial, and Welcoming
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Clock,
    Coffee,
    Users,
    BookOpen,
    Heart,
    Dumbbell,
    Calendar,
    MessageCircle,
    ChevronRight,
    Hourglass,
    Sun,
    Moon,
    Sparkles
} from 'lucide-react';
import styles from './_components/_shared.module.scss';

// ========================================
// DATA
// ========================================
const weeklySchedule = [
    {
        day: 'Monday',
        shortDay: 'Mon',
        hasProgram: true,
        programs: [
            { name: 'Tajweed Class', time: '6:00 PM', category: 'education' }
        ]
    },
    {
        day: 'Tuesday',
        shortDay: 'Tue',
        hasProgram: true,
        programs: [
            { name: "Brothers' Basketball", time: '8:00 PM - 10:00 PM', category: 'recreation', note: '$5 entry' }
        ]
    },
    {
        day: 'Wednesday',
        shortDay: 'Wed',
        hasProgram: true,
        programs: [
            { name: 'Morning Chai (Seniors)', time: 'After Fajr', category: 'social' }
        ]
    },
    {
        day: 'Thursday',
        shortDay: 'Thu',
        hasProgram: true,
        programs: [
            { name: "Sisters' Badminton", time: '7:00 PM', category: 'recreation' }
        ]
    },
    {
        day: 'Friday',
        shortDay: 'Fri',
        hasProgram: true,
        programs: [
            { name: 'Main Community Halaqa', time: 'After Isha', category: 'education', note: 'Babysitting provided' },
            { name: 'Family Night (1st Fri)', time: '6:00 PM', category: 'social' }
        ]
    },
    {
        day: 'Saturday',
        shortDay: 'Sat',
        hasProgram: false,
        programs: []
    },
    {
        day: 'Sunday',
        shortDay: 'Sun',
        hasProgram: true,
        programs: [
            { name: 'Seerah of the Prophet', time: '10:00 AM', category: 'education' }
        ]
    }
];

const programCards = [
    {
        id: 'family-night',
        title: 'Family Night',
        subtitle: 'The Potluck',
        description: 'Monthly Community Dinner. First Friday of every month.',
        detail: 'Guest Speakers, Kids Activities, and diverse cuisines. Bring a dish to share (Potluck style) or $10/family for pizza nights.',
        icon: Users,
        image: '/images/community-dinner.jpg'
    },
    {
        id: 'open-gym',
        title: 'The Open Gym',
        subtitle: 'Recreation',
        description: "Brothers' Basketball (Tue) & Sisters' Badminton (Thu).",
        detail: 'Building brotherhood and sisterhood through healthy competition. $5 entry fee.',
        icon: Dumbbell,
        image: '/images/basketball.jpg'
    },
    {
        id: 'morning-chai',
        title: 'Morning Chai',
        subtitle: 'Seniors Social',
        description: "Elders' Social Club.",
        detail: 'Every Wednesday morning after Fajr. A space for our seniors to connect over tea and conversation.',
        icon: Coffee,
        image: '/images/seniors-tea.jpg'
    }
];

const halaqas = [
    {
        time: 'Daily - Post-Fajr',
        title: 'Riyad-us-Saliheen Reading',
        description: 'Start your day with hadith from the Gardens of the Righteous.',
        icon: Sun
    },
    {
        time: 'Friday - After Isha',
        title: 'Main Community Halaqa',
        description: 'Weekly topic varies. Babysitting provided for families.',
        icon: Moon
    },
    {
        time: 'Sunday - 10:00 AM',
        title: 'Seerah of the Prophet ﷺ',
        description: 'A deep dive into the life and times of our beloved Messenger.',
        icon: BookOpen
    }
];

// ========================================
// COMPONENT
// ========================================
export default function WeeklyProgramsPage() {
    const [hoveredDay, setHoveredDay] = useState<string | null>(null);

    return (
        <main className={styles.weeklyPage}>
            {/* ========================================
                1. THE "ISTIQAMAH" HERO
            ======================================== */}
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <div className={styles.quoteBlock}>
                        <div className={styles.iconWrapper}>
                            <Hourglass size={32} className={styles.quoteIcon} />
                        </div>
                        <p className={styles.hadith}>
                            &ldquo;The most beloved deeds to Allah are those that are consistent, even if small.&rdquo;
                        </p>
                        <span className={styles.hadithSource}>— Hadith</span>
                    </div>

                    <h1 className={styles.heroTitle}>The Pulse of the Community</h1>
                    <p className={styles.heroSubtitle}>
                        Join us for our regular weekly gatherings of faith, food, and friendship.
                    </p>
                </div>
            </section>

            {/* ========================================
                2. WEEKLY SNAPSHOT (The Timetable)
            ======================================== */}
            <section className={styles.timetableSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Week at a Glance</span>
                    <h2 className={styles.sectionTitle}>Your Weekly Schedule</h2>
                </div>

                <div className={styles.weekStrip}>
                    {weeklySchedule.map((dayData) => (
                        <div
                            key={dayData.day}
                            className={`${styles.dayColumn} ${dayData.hasProgram ? styles.active : ''}`}
                            onMouseEnter={() => setHoveredDay(dayData.day)}
                            onMouseLeave={() => setHoveredDay(null)}
                        >
                            <span className={styles.dayName}>{dayData.shortDay}</span>
                            <div className={styles.dayContent}>
                                {dayData.hasProgram ? (
                                    dayData.programs.map((program, idx) => (
                                        <div key={idx} className={styles.programPill}>
                                            <span className={styles.programName}>{program.name}</span>
                                            <span className={styles.programTime}>{program.time}</span>
                                        </div>
                                    ))
                                ) : (
                                    <span className={styles.noProgram}>—</span>
                                )}
                            </div>

                            {/* Tooltip on hover */}
                            {hoveredDay === dayData.day && dayData.hasProgram && (
                                <div className={styles.tooltip}>
                                    <strong>{dayData.day}</strong>
                                    {dayData.programs.map((p, i) => (
                                        <div key={i} className={styles.tooltipProgram}>
                                            <span>{p.name}</span>
                                            <span>{p.time}</span>
                                            {p.note && <em>{p.note}</em>}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* ========================================
                3. PROGRAM CATEGORIES (The Tracks)
            ======================================== */}
            <section className={styles.programsSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Featured Programs</span>
                    <h2 className={styles.sectionTitle}>Community Gatherings</h2>
                </div>

                <div className={styles.programsGrid}>
                    {programCards.map((card) => (
                        <div key={card.id} className={styles.programCard}>
                            <div className={styles.cardImage}>
                                <card.icon size={48} />
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.cardSubtitle}>{card.subtitle}</span>
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                                <p className={styles.cardDescription}>{card.description}</p>
                                <p className={styles.cardDetail}>{card.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========================================
                4. EDUCATIONAL CIRCLES (Halaqas)
            ======================================== */}
            <section className={styles.halaqaSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Knowledge Circles</span>
                    <h2 className={styles.sectionTitle}>Educational Halaqas</h2>
                </div>

                <div className={styles.halaqaTimeline}>
                    {halaqas.map((halaqa, index) => (
                        <div key={index} className={styles.halaqaItem}>
                            <div className={styles.timelineMarker}>
                                <halaqa.icon size={20} />
                            </div>
                            <div className={styles.halaqaContent}>
                                <span className={styles.halaqaTime}>{halaqa.time}</span>
                                <h3 className={styles.halaqaTitle}>{halaqa.title}</h3>
                                <p className={styles.halaqaDescription}>{halaqa.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========================================
                5. GET INVOLVED (Volunteer CTA)
            ======================================== */}
            <section className={styles.volunteerSection}>
                <div className={styles.volunteerContent}>
                    <div className={styles.iconWrapper}>
                        <Heart size={32} className={styles.volunteerIcon} />
                    </div>
                    <h3 className={styles.volunteerTitle}>These programs are run by volunteers like you.</h3>
                    <p className={styles.volunteerText}>
                        Help us set up, serve food, or clean up after events. Every contribution matters.
                    </p>
                    <Link href="/heritage/join/volunteer" className={styles.volunteerBtn}>
                        Sign up to Setup/Cleanup
                        <ChevronRight size={18} />
                    </Link>
                </div>
            </section>

            {/* ========================================
                6. STAY UPDATED (Notification)
            ======================================== */}
            <section className={styles.updateSection}>
                <div className={styles.updateContent}>
                    <Calendar size={24} />
                    <p>Program times may change due to prayer times.</p>
                    <button className={styles.updateBtn}>
                        <MessageCircle size={18} />
                        Join &lsquo;Weekly Updates&rsquo; Duha Broadcast
                    </button>
                </div>
            </section>
        </main>
    );
}
