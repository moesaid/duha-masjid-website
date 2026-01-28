// Committees Page - HERITAGE ALIGNED
// Design: Elegant governance display with committee cards
'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './CommitteesPage.module.scss';
import { ChevronDown, Users, BookOpen, Heart, Megaphone, Home, Baby, Shield, Wallet } from 'lucide-react';

// Committee Data
const committees = [
    {
        id: 'education',
        name: 'Education Committee',
        icon: BookOpen,
        description: 'Oversees all educational programs including weekend school, Quran academy, and adult education.',
        chair: 'Sr. Zahra Hassan',
        members: ['Br. Imran Syed', 'Sr. Nadia Khan', 'Br. Tariq Abdullah', 'Sr. Amina Yusuf'],
        meetingSchedule: 'First Monday of each month, 7:00 PM'
    },
    {
        id: 'finance',
        name: 'Finance Committee',
        icon: Wallet,
        description: 'Manages budget planning, financial reporting, and ensures fiscal responsibility.',
        chair: 'Br. Khalid Mansour',
        members: ['Dr. Rashid Ahmed', 'Sr. Amina Yusuf', 'Br. Hassan Ali'],
        meetingSchedule: 'Quarterly, dates announced via newsletter'
    },
    {
        id: 'facilities',
        name: 'Maintenance & Facilities',
        icon: Home,
        description: 'Responsible for building upkeep, renovations, and ensuring a clean, welcoming environment.',
        chair: 'Br. Hamza Osman',
        members: ['Br. Bilal Thompson', 'Br. Jamal Richards', 'Br. Idris Brown'],
        meetingSchedule: 'As needed, typically bi-weekly'
    },
    {
        id: 'youth',
        name: 'Youth & Community',
        icon: Users,
        description: 'Plans youth programs, community events, and fosters engagement among young Muslims.',
        chair: 'Sr. Khadijah Hassan',
        members: ['Br. Yusuf Ibrahim', 'Sr. Layla Ahmad', 'Br. Adam Malik', 'Sr. Maryam Ali'],
        meetingSchedule: 'Second Wednesday of each month, 8:00 PM'
    },
    {
        id: 'women',
        name: 'Sisters Programs',
        icon: Heart,
        description: 'Coordinates programs specifically designed for sisters, including halaqas and support groups.',
        chair: 'Sr. Fatima Ahmed',
        members: ['Sr. Maryam Ali', 'Sr. Hafsa Rahman', 'Sr. Sumaya Osman'],
        meetingSchedule: 'Every other Saturday after Dhuhr'
    },
    {
        id: 'outreach',
        name: 'Outreach & Dawah',
        icon: Megaphone,
        description: 'Promotes interfaith dialogue, community outreach, and welcoming new Muslims.',
        chair: 'Dr. Ahmad Malik',
        members: ['Br. Mohammed Ali', 'Sr. Sarah Johnson', 'Br. David Hussein'],
        meetingSchedule: 'Third Thursday of each month, 7:30 PM'
    },
    {
        id: 'security',
        name: 'Security & Safety',
        icon: Shield,
        description: 'Ensures the safety and security of the masjid premises and community members.',
        chair: 'Br. Kareem Washington',
        members: ['Br. Ahmad Ali', 'Br. Suleiman Johnson', 'Sr. Fatima Brown'],
        meetingSchedule: 'Monthly, dates vary'
    },
    {
        id: 'family',
        name: 'Family Services',
        icon: Baby,
        description: 'Provides support for families including counseling referrals, new parent support, and family events.',
        chair: 'Sr. Aisha Patel',
        members: ['Dr. Layla Hassan', 'Br. Omar Syed', 'Sr. Khadijah Ali'],
        meetingSchedule: 'First Friday of each month, after Maghrib'
    }
];


export default function CommitteesPage() {
    const [expandedCommittee, setExpandedCommittee] = useState<string | null>(null);

    const toggleCommittee = (name: string) => {
        setExpandedCommittee(expandedCommittee === name ? null : name);
    };

    return (
        <main className={styles.committeesPage}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroPattern} />
                <div className={styles.heroContent}>
                    <span className={styles.heroBadge}>Governance</span>
                    <h1 className={styles.heroTitle}>Our Committees</h1>
                    <p className={styles.heroSubtitle}>
                        Dedicated volunteers working together to serve our community
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className={styles.introSection}>
                <div className={styles.introContainer}>
                    <h2 className={styles.introTitle}>Community-Driven Leadership</h2>
                    <p className={styles.introText}>
                        Our masjid is blessed with dedicated volunteers who serve on various committees,
                        each focused on a specific aspect of community life. These committees work under
                        the guidance of the Board of Trustees to ensure our masjid operates smoothly
                        and serves the needs of all community members.
                    </p>
                    <Link href="/heritage/about/board" className={styles.boardLink}>
                        Meet Our Board of Trustees →
                    </Link>
                </div>
            </section>

            {/* Committees Grid */}
            <section className={styles.committeesSection}>
                <div className={styles.committeesContainer}>
                    {committees.map((committee) => {
                        const IconComponent = committee.icon;
                        const isExpanded = expandedCommittee === committee.name;

                        return (
                            <div key={committee.name} className={styles.committeeCard}>
                                <button
                                    className={`${styles.committeeHeader} ${isExpanded ? styles.expanded : ''}`}
                                    onClick={() => toggleCommittee(committee.name)}
                                    aria-expanded={isExpanded}
                                >
                                    <div className={styles.committeeIcon}>
                                        <IconComponent size={24} />
                                    </div>
                                    <div className={styles.committeeInfo}>
                                        <h3 className={styles.committeeName}>{committee.name}</h3>
                                        <p className={styles.committeeChair}>Chair: {committee.chair}</p>
                                    </div>
                                    <ChevronDown className={styles.expandIcon} size={20} />
                                </button>

                                <div className={`${styles.committeeContent} ${isExpanded ? styles.open : ''}`}>
                                    <p className={styles.committeeDescription}>{committee.description}</p>

                                    <div className={styles.membersList}>
                                        <h4>Committee Members</h4>
                                        <ul>
                                            <li><strong>{committee.chair}</strong> (Chair)</li>
                                            {committee.members.map((member, idx) => (
                                                <li key={idx}>{member}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className={styles.meetingInfo}>
                                        <span className={styles.meetingLabel}>Meeting Schedule:</span>
                                        <span className={styles.meetingTime}>{committee.meetingSchedule}</span>
                                    </div>

                                    <Link href={`/heritage/about/committees/${committee.id}`} className={styles.viewDetailsLink}>
                                        View Full Details →
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Join CTA */}
            <section className={styles.joinSection}>
                <div className={styles.joinContent}>
                    <h2 className={styles.joinTitle}>Interested in Serving?</h2>
                    <p className={styles.joinText}>
                        We are always looking for dedicated community members to join our committees.
                        Your skills and time can make a real difference.
                    </p>
                    <Link href="/heritage/community/volunteers" className={styles.joinButton}>
                        Become a Volunteer
                    </Link>
                </div>
            </section>
        </main>
    );
}
