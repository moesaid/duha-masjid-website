// Newsletter Page - "The Heritage Chronicle"
// Design: Paper Cream + Ink Blue + Wax Red (Editorial palette)
'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    PenTool,
    Check,
    ArrowRight,
    ChevronDown,
    BookOpen,
    FileText,
    MessageCircle,
    Smartphone,
    Stamp,
    Mail
} from 'lucide-react';
import styles from './_components/_shared.module.scss';

// ========================================
// DATA
// ========================================
const latestIssue = {
    title: 'Preparing for Rajab: The Sacred Months Approach',
    excerpt: 'As the sacred months approach, we reflect on the spiritual significance of Rajab and how our community can prepare for the blessed season ahead. This week, we explore the traditions of our predecessors and practical ways to increase our worship.',
    date: 'January 24, 2026'
};

const archiveIssues = [
    { id: 1, date: 'JAN 17', title: 'Construction Update: Phase 2 Begins', tag: 'Community News' },
    { id: 2, date: 'JAN 10', title: 'New Weekend School Registration Open', tag: 'Education' },
    { id: 3, date: 'JAN 3', title: 'Year in Review: 2025 Highlights', tag: 'Annual Report' },
    { id: 4, date: 'DEC 27', title: 'Winter Break Program Schedule', tag: 'Youth' },
    { id: 5, date: 'DEC 20', title: 'Community Iftar Registration', tag: 'Events' },
    { id: 6, date: 'DEC 13', title: 'Meet Our New Youth Director', tag: 'Announcements' }
];

const communityStories = {
    featured: {
        author: 'Imam Abdullah Rahman',
        title: 'The Art of Being Present: Lessons from the Masjid',
        excerpt: 'In our fast-paced world, the masjid offers us a sanctuary to slow down, reflect, and reconnect with what truly matters. Here are some reflections on cultivating presence in our daily lives...'
    },
    recent: [
        { title: 'From New Muslim to Community Leader', author: 'Sarah Martinez', date: 'Jan 2026' },
        { title: 'Teaching Quran to My Children', author: 'Ahmed Hassan', date: 'Jan 2026' },
        { title: 'Finding Community After Moving', author: 'Fatima Okonkwo', date: 'Dec 2025' }
    ]
};

export default function NewsletterPage() {
    const [preferences, setPreferences] = useState({
        general: true,
        prayerTimes: false,
        youth: false,
        education: false
    });

    const togglePreference = (key: keyof typeof preferences) => {
        setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className={styles.newsletterPage}>
            {/* 1. CORRESPONDENT HERO */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <PenTool size={40} className={styles.penIcon} />
                    <p className={styles.heroCalligraphy}>
                        نٓ ۚ وَٱلْقَلَمِ وَمَا يَسْطُرُونَ
                    </p>
                    <h1 className={styles.heroTitle}>The Heritage Chronicle</h1>
                    <p className={styles.heroSubtitle}>
                        Weekly reflections, community news, and spiritual reminders delivered to your inbox every Friday morning.
                    </p>
                </div>
            </section>

            {/* 2. SUBSCRIPTION CONSOLE */}
            <section className={styles.subscribeSection}>
                <div className={styles.subscribeCard}>
                    <div className={styles.cardHeader}>
                        <h2 className={styles.cardTitle}>Subscribe to Our Chronicle</h2>
                        <p className={styles.cardSubtitle}>Join over 2,500 community members who start their week with us</p>
                    </div>

                    <form className={styles.subscribeForm} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.formRow}>
                            <div className={styles.inputGroup}>
                                <label className={styles.inputLabel}>Your Name</label>
                                <input
                                    type="text"
                                    className={styles.inputField}
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.inputLabel}>Email Address</label>
                                <input
                                    type="email"
                                    className={styles.inputField}
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div className={styles.preferencesGroup}>
                            <p className={styles.preferencesTitle}>Curate Your Updates</p>
                            <div className={styles.preferencesGrid}>
                                <div
                                    className={styles.preferenceItem}
                                    onClick={() => togglePreference('general')}
                                >
                                    <div className={`${styles.checkbox} ${preferences.general ? styles.checked : ''}`}>
                                        {preferences.general && <Check size={12} />}
                                    </div>
                                    <span className={styles.preferenceLabel}>
                                        General Announcements
                                        <span className={styles.preferenceNote}>(Weekly)</span>
                                    </span>
                                </div>
                                <div
                                    className={styles.preferenceItem}
                                    onClick={() => togglePreference('prayerTimes')}
                                >
                                    <div className={`${styles.checkbox} ${preferences.prayerTimes ? styles.checked : ''}`}>
                                        {preferences.prayerTimes && <Check size={12} />}
                                    </div>
                                    <span className={styles.preferenceLabel}>
                                        Prayer Time Changes
                                        <span className={styles.preferenceNote}>(SMS)</span>
                                    </span>
                                </div>
                                <div
                                    className={styles.preferenceItem}
                                    onClick={() => togglePreference('youth')}
                                >
                                    <div className={`${styles.checkbox} ${preferences.youth ? styles.checked : ''}`}>
                                        {preferences.youth && <Check size={12} />}
                                    </div>
                                    <span className={styles.preferenceLabel}>Youth Events</span>
                                </div>
                                <div
                                    className={styles.preferenceItem}
                                    onClick={() => togglePreference('education')}
                                >
                                    <div className={`${styles.checkbox} ${preferences.education ? styles.checked : ''}`}>
                                        {preferences.education && <Check size={12} />}
                                    </div>
                                    <span className={styles.preferenceLabel}>Education & Classes</span>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            <Stamp size={18} className={styles.sealIcon} />
                            Subscribe to Chronicle
                        </button>
                    </form>

                    <p className={styles.privacyNote}>
                        We respect your inbox. No spam, ever. Unsubscribe anytime.
                    </p>
                </div>
            </section>

            {/* 3. LATEST ISSUE PREVIEW */}
            <section className={styles.latestSection}>
                <div className={styles.latestContent}>
                    <div className={styles.latestMockup}>
                        <div className={styles.mockupFrame}>
                            <div className={styles.mockupHeader}>
                                <span className={styles.mockupDot} />
                                <span className={styles.mockupDot} />
                                <span className={styles.mockupDot} />
                            </div>
                            <div className={styles.mockupContent}>
                                <h4 className={styles.mockupTitle}>The Heritage Chronicle</h4>
                                <p className={styles.mockupExcerpt}>
                                    This week: {latestIssue.title.substring(0, 50)}...
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.latestInfo}>
                        <span className={styles.latestLabel}>This Week&apos;s Issue</span>
                        <h3 className={styles.latestTitle}>{latestIssue.title}</h3>
                        <p className={styles.latestExcerpt}>{latestIssue.excerpt}</p>
                        <Link href="#" className={styles.readLink}>
                            Read Full Issue in Browser <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. ARCHIVE GRID */}
            <section className={styles.archiveSection}>
                <div className={styles.archiveHeader}>
                    <h2 className={styles.archiveTitle}>Past Issues</h2>
                    <div className={styles.archiveFilter}>
                        <select>
                            <option>All Issues</option>
                            <option>January 2026</option>
                            <option>December 2025</option>
                            <option>November 2025</option>
                        </select>
                        <ChevronDown size={16} />
                    </div>
                </div>

                <div className={styles.archiveGrid}>
                    {archiveIssues.map((issue) => (
                        <div key={issue.id} className={styles.archiveCard}>
                            <span className={styles.archiveDate}>{issue.date}</span>
                            <h4 className={styles.archiveCardTitle}>{issue.title}</h4>
                            <span className={styles.archiveTag}>{issue.tag}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. COMMUNITY STORIES */}
            <section className={styles.storiesSection}>
                <div className={styles.storiesHeader}>
                    <h2 className={styles.storiesTitle}>Community Stories</h2>
                </div>

                <div className={styles.storiesGrid}>
                    <div className={styles.featuredStory}>
                        <div className={styles.featuredImage}>
                            <BookOpen size={48} />
                        </div>
                        <div className={styles.featuredContent}>
                            <span className={styles.featuredAuthor}>By {communityStories.featured.author}</span>
                            <h3 className={styles.featuredTitle}>{communityStories.featured.title}</h3>
                            <p className={styles.featuredExcerpt}>{communityStories.featured.excerpt}</p>
                        </div>
                    </div>

                    <div className={styles.recentStories}>
                        {communityStories.recent.map((story, idx) => (
                            <div key={idx} className={styles.recentStory}>
                                <div className={styles.recentIcon}>
                                    <FileText size={20} />
                                </div>
                                <div className={styles.recentInfo}>
                                    <h4 className={styles.recentTitle}>{story.title}</h4>
                                    <span className={styles.recentMeta}>{story.author} • {story.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. WHATSAPP/SMS FOOTER */}
            <section className={styles.broadcastSection}>
                <div className={styles.broadcastContent}>
                    <h2 className={styles.broadcastTitle}>Prefer Instant Updates?</h2>
                    <p className={styles.broadcastSubtitle}>
                        Join our broadcast lists for breaking news—Janazah, Moon Sighting, Snow Closures
                    </p>

                    <div className={styles.broadcastButtons}>
                        <button className={styles.whatsappBtn}>
                            <MessageCircle size={18} />
                            Join Duha Circle
                        </button>
                        <button className={styles.smsBtn}>
                            <Smartphone size={18} />
                            Subscribe via SMS
                        </button>
                    </div>

                    <p className={styles.broadcastNote}>
                        Broadcast lists only. No group chats or spam.
                    </p>
                </div>
            </section>
        </div>
    );
}
