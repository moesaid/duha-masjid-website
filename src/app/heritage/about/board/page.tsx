'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BoardPage.module.scss';
import templateStyles from '../../_styles/template.module.scss';
import { ChevronDown, Mail, Download, Quote } from 'lucide-react';

// Executive Committee Data
const executiveCommittee = [
    {
        name: 'Dr. Omar Khan',
        role: 'President',
        image: '/images/heritage/shykh.jpg',
        email: 'president@alnoormasjid.org',
    },
    {
        name: 'Sr. Fatima Ahmed',
        role: 'Vice President',
        image: '/images/heritage/mosque-dome.jpg',
        email: 'vp@alnoormasjid.org',
    },
    {
        name: 'Br. Khalid Mansour',
        role: 'Treasurer',
        image: '/images/heritage/shykh.jpg',
        email: 'treasurer@alnoormasjid.org',
    },
    {
        name: 'Sr. Aisha Patel',
        role: 'Secretary',
        image: '/images/heritage/mosque-dome.jpg',
        email: 'secretary@alnoormasjid.org',
    },
    {
        name: 'Br. Yusuf Ibrahim',
        role: 'Trustee',
        image: '/images/heritage/shykh.jpg',
        email: 'trustee1@alnoormasjid.org',
    },
    {
        name: 'Sr. Khadijah Hassan',
        role: 'Trustee',
        image: '/images/heritage/mosque-dome.jpg',
        email: 'trustee2@alnoormasjid.org',
    },
    {
        name: 'Dr. Ahmad Malik',
        role: 'Trustee',
        image: '/images/heritage/shykh.jpg',
        email: 'trustee3@alnoormasjid.org',
    },
    {
        name: 'Sr. Maryam Ali',
        role: 'Trustee',
        image: '/images/heritage/mosque-dome.jpg',
        email: 'trustee4@alnoormasjid.org',
    },
];

// Sub-Committees Data
const subCommittees = [
    {
        name: 'Education Committee',
        members: ['Sr. Zahra Hassan (Chair)', 'Br. Imran Syed', 'Sr. Nadia Khan', 'Br. Tariq Abdullah'],
    },
    {
        name: 'Finance Committee',
        members: ['Br. Khalid Mansour (Chair)', 'Dr. Rashid Ahmed', 'Sr. Amina Yusuf'],
    },
    {
        name: 'Maintenance & Facilities',
        members: ['Br. Hamza Osman (Chair)', 'Br. Bilal Thompson', 'Br. Jamal Richards', 'Br. Idris Brown'],
    },
    {
        name: 'Youth & Community',
        members: ['Sr. Khadijah Hassan (Chair)', 'Br. Yusuf Ibrahim', 'Sr. Layla Ahmad', 'Br. Adam Malik'],
    },
    {
        name: 'Sisters Programs',
        members: ['Sr. Fatima Ahmed (Chair)', 'Sr. Maryam Ali', 'Sr. Hafsa Rahman', 'Sr. Sumaya Osman'],
    },
    {
        name: 'Outreach & Dawah',
        members: ['Dr. Ahmad Malik (Chair)', 'Br. Mohammed Ali', 'Sr. Sarah Johnson', 'Br. David Hussein'],
    },
];

export default function BoardPage() {
    const [openCommittee, setOpenCommittee] = useState<string | null>(null);

    const toggleCommittee = (name: string) => {
        setOpenCommittee(openCommittee === name ? null : name);
    };

    return (
        <div className={templateStyles.template}>
            {/* 1. Governance Hero */}
            <header className={styles.governanceHero}>
                <div className={styles.heroPattern} />
                <div className={styles.heroContent}>
                    <span className={styles.heroBadge}>Board of Trustees</span>
                    <h1 className={styles.heroTitle}>Serving with Integrity</h1>
                    <div className={styles.heroQuote}>
                        <Quote className={styles.quoteIcon} size={24} />
                        <blockquote className={styles.quoteText}>
                            "Indeed, Allah commands you to render trusts to whom they are due and when you judge between people, to judge with justice."
                        </blockquote>
                        <cite className={styles.quoteCite}>— Surah An-Nisa 4:58</cite>
                    </div>
                </div>
            </header>

            {/* 2. President's Message */}
            <section className={styles.presidentSection}>
                <div className={styles.letterhead}>
                    <div className={styles.letterheadHeader}>
                        <div className={styles.masjidLogo}>
                            <span className={styles.logoArabic}>المسجد</span>
                            <span className={styles.logoEnglish}>Al-Noor Masjid</span>
                        </div>
                        <div className={styles.letterheadDate}>January 2024</div>
                    </div>
                    <div className={styles.letterContent}>
                        <div className={styles.presidentPhoto}>
                            <Image
                                src="/images/heritage/shykh.jpg"
                                alt="Dr. Omar Khan, President"
                                fill
                                className={styles.presidentImage}
                            />
                        </div>
                        <div className={styles.letterText}>
                            <p className={styles.letterSalutation}>Bismillah ir-Rahman ir-Raheem,</p>
                            <p className={styles.letterGreeting}>Dear Brothers and Sisters,</p>
                            <p>
                                As-salamu alaykum wa rahmatullahi wa barakatuh. On behalf of the Board of Trustees,
                                I am honored to serve our beloved community. Our mission is to uphold the sacred trust
                                (amanah) you have placed in us—to steward this masjid with transparency, accountability,
                                and unwavering commitment to Islamic principles.
                            </p>
                            <p>
                                This year, we have made significant strides in expanding our educational programs,
                                improving our facilities, and strengthening our financial foundation. Every decision
                                we make is guided by our responsibility to Allah (SWT) and our duty to serve you.
                            </p>
                            <p>
                                I invite you to review our governance documents, attend our open board meetings,
                                and share your feedback. This is your masjid, and together, we build its future.
                            </p>
                            <div className={styles.letterSignature}>
                                <div className={styles.signatureLine}>Dr. Omar Khan</div>
                                <div className={styles.signatureTitle}>President, Board of Trustees</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Executive Committee Grid */}
            <section className={styles.executiveSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Leadership</span>
                    <h2 className={styles.sectionTitle}>Executive Committee</h2>
                    <p className={styles.sectionSubtitle}>
                        Elected by the community to serve with dedication and accountability
                    </p>
                </div>
                <div className={styles.executiveGrid}>
                    {executiveCommittee.map((member, index) => (
                        <div key={index} className={styles.portraitCard}>
                            <div className={styles.portraitImageWrapper}>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className={styles.portraitImage}
                                />
                                <a
                                    href={`mailto:${member.email}`}
                                    className={styles.contactOverlay}
                                    aria-label={`Email ${member.name}`}
                                >
                                    <Mail className={styles.contactIcon} size={24} />
                                </a>
                            </div>
                            <div className={styles.portraitInfo}>
                                <h3 className={styles.memberName}>{member.name}</h3>
                                <span className={styles.memberRole}>{member.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Sub-Committees Accordions */}
            <section className={styles.committeesSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Volunteers</span>
                    <h2 className={styles.sectionTitle}>Sub-Committees</h2>
                    <p className={styles.sectionSubtitle}>
                        Dedicated teams working behind the scenes to serve our community
                    </p>
                </div>
                <div className={styles.committeesGrid}>
                    {subCommittees.map((committee, index) => (
                        <div key={index} className={styles.accordionItem}>
                            <button
                                className={`${styles.accordionHeader} ${openCommittee === committee.name ? styles.accordionOpen : ''}`}
                                onClick={() => toggleCommittee(committee.name)}
                                aria-expanded={openCommittee === committee.name}
                            >
                                <span className={styles.accordionTitle}>{committee.name}</span>
                                <ChevronDown className={styles.accordionIcon} size={20} />
                            </button>
                            <div
                                className={`${styles.accordionContent} ${openCommittee === committee.name ? styles.accordionContentOpen : ''}`}
                            >
                                <ul className={styles.membersList}>
                                    {committee.members.map((member, idx) => (
                                        <li key={idx} className={styles.memberItem}>{member}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Election & Bylaws CTA */}
            <section className={styles.bylawsBanner}>
                <div className={styles.bannerContent}>
                    <div className={styles.bannerText}>
                        <h2 className={styles.bannerTitle}>Interested in Serving?</h2>
                        <p className={styles.bannerSubtitle}>
                            Review our election bylaws and learn how you can contribute to our community's governance.
                        </p>
                    </div>
                    <Link href="/documents/constitution.pdf" className={styles.bannerButton}>
                        <Download size={18} />
                        Download Constitution
                    </Link>
                </div>
            </section>
        </div>
    );
}
