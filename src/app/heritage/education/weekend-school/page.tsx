'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
    BookOpen,
    Calendar,
    Clock,
    MapPin,
    UtensilsCrossed,
    Shirt,
    Download,
    CreditCard,
    GraduationCap,
    Users,
    FileText,
    Phone,
    Mail,
    ChevronRight,
    Shield,
    Star,
    Award,
    Scroll
} from 'lucide-react';
import styles from './WeekendSchoolPage.module.scss';

// Curriculum Pillars
const curriculumPillars = [
    {
        id: 'quran',
        arabicLetter: 'ق',
        title: 'Quranic Studies',
        subtitle: 'Tilawah & Tajweed',
        subjects: [
            { name: 'Memorization (Hifz)', description: 'Structured memorization program' },
            { name: 'Tajweed Rules', description: 'Proper pronunciation & recitation' },
            { name: 'Tafseer', description: 'Understanding the meanings' }
        ]
    },
    {
        id: 'arabic',
        arabicLetter: 'ع',
        title: 'Arabic Language',
        subtitle: 'Al-Lughah Al-Arabiyyah',
        subjects: [
            { name: 'Reading & Writing', description: 'Script mastery & comprehension' },
            { name: 'Grammar (Nahw)', description: 'Sentence structure & rules' },
            { name: 'Vocabulary', description: 'Building a rich lexicon' }
        ]
    },
    {
        id: 'islamic',
        arabicLetter: 'د',
        title: 'Islamic Studies',
        subtitle: 'Deen & Dunyah',
        subjects: [
            { name: 'Seerah', description: 'Life of the Prophet ﷺ' },
            { name: 'Fiqh', description: 'Islamic jurisprudence basics' },
            { name: 'Akhlaq', description: 'Character & manners' }
        ]
    }
];

// School Life Info
const schoolLifeInfo = [
    {
        id: 'schedule',
        icon: Clock,
        label: 'Schedule',
        title: 'Sundays',
        detail: '10:00 AM – 2:00 PM',
        note: 'September through May'
    },
    {
        id: 'location',
        icon: MapPin,
        label: 'Location',
        title: 'Education Wing',
        detail: '2nd Floor, Rooms 201-210',
        note: 'Secure, monitored campus'
    },
    {
        id: 'lunch',
        icon: UtensilsCrossed,
        label: 'Lunch',
        title: 'Pizza Fridays',
        detail: 'Hot lunch provided',
        note: 'Or pack your own halal meal'
    },
    {
        id: 'dress',
        icon: Shirt,
        label: 'Dress Code',
        title: 'Uniform Required',
        detail: 'White Thobe / Black Abaya',
        note: 'Modest, professional attire'
    }
];

// Tuition Rates
const tuitionRates = [
    { category: 'One Child', amount: 650, period: 'per year' },
    { category: 'Two Children', amount: 1100, period: 'per year' },
    { category: 'Three+ Children', amount: 1400, period: 'family cap' }
];

// Academic Calendar
const academicCalendar = [
    { date: 'Sep 8', event: 'First Day of School', type: 'major' },
    { date: 'Oct 13', event: 'Parent-Teacher Conf.', type: 'regular' },
    { date: 'Nov 24', event: 'Thanksgiving Break', type: 'break' },
    { date: 'Dec 22', event: 'Winter Break Begins', type: 'break' },
    { date: 'Jan 12', event: 'Classes Resume', type: 'major' },
    { date: 'Mar 1', event: 'Ramadan Break', type: 'break' },
    { date: 'Apr 6', event: 'Eid ul-Fitr', type: 'holiday' },
    { date: 'May 18', event: 'Graduation Ceremony', type: 'major' }
];

// Parent Resources
const parentResources = [
    { name: 'Parent Handbook', type: 'PDF', icon: FileText },
    { name: 'Sick Policy', type: 'PDF', icon: FileText },
    { name: 'Volunteer Sign-up', type: 'Form', icon: Users },
    { name: 'School Calendar', type: 'PDF', icon: Calendar }
];

export default function WeekendSchoolPage() {
    return (
        <main className={styles.weekendSchoolPage}>
            {/* ========================================
                1. THE "MADRASAH" HERO
            ======================================== */}
            <section className={styles.madrasahHero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/heritage/weekend-school-hero.jpg"
                        alt=""
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay} />
                </div>

                <div className={styles.heroContent}>
                    <div className={styles.schoolCrest}>
                        <div className={styles.crestInner}>
                            <GraduationCap size={40} />
                            <span className={styles.crestYear}>Est. 1985</span>
                        </div>
                    </div>

                    <div className={styles.arabicMotto}>
                        رَبِّ زِدْنِي عِلْمًا
                    </div>
                    <span className={styles.mottoTranslation}>"O Lord, Increase me in Knowledge"</span>

                    <h1 className={styles.heroTitle}>Nurturing Faith, Building Character</h1>
                    <p className={styles.heroTagline}>
                        A comprehensive Islamic education program for ages 4 through 18
                    </p>

                    <div className={styles.heroActions}>
                        <Link href="#admissions" className={styles.primaryCta}>
                            <Star size={18} />
                            2025-2026 Admissions Open
                        </Link>
                        <Link href="#curriculum" className={styles.secondaryCta}>
                            View Curriculum
                            <ChevronRight size={18} />
                        </Link>
                    </div>

                    <div className={styles.safetyBadge}>
                        <Shield size={16} />
                        <span>All teachers background-checked & child-safety certified</span>
                    </div>
                </div>
            </section>

            {/* ========================================
                2. THE CURRICULUM (Three Pillars)
            ======================================== */}
            <section id="curriculum" className={styles.curriculumSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>The Curriculum</span>
                    <h2 className={styles.sectionTitle}>Three Pillars of Learning</h2>
                    <p className={styles.sectionSubtitle}>
                        A balanced approach to Islamic education that nurtures the mind, heart, and soul.
                    </p>
                </div>

                <div className={styles.pillarsContainer}>
                    {curriculumPillars.map((pillar) => (
                        <div key={pillar.id} className={styles.pillarColumn}>
                            <div className={styles.pillarSpine}>
                                <span className={styles.spineArabic}>{pillar.arabicLetter}</span>
                            </div>
                            <div className={styles.pillarContent}>
                                <div className={styles.pillarHeader}>
                                    <h3>{pillar.title}</h3>
                                    <span className={styles.pillarSubtitle}>{pillar.subtitle}</span>
                                </div>
                                <ul className={styles.subjectList}>
                                    {pillar.subjects.map((subject, idx) => (
                                        <li key={idx}>
                                            <strong>{subject.name}</strong>
                                            <span>{subject.description}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========================================
                3. SCHOOL LIFE (Logistics Grid)
            ======================================== */}
            <section className={styles.schoolLifeSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Logistics</span>
                    <h2 className={styles.sectionTitle}>School Life</h2>
                </div>

                <div className={styles.logisticsGrid}>
                    {schoolLifeInfo.map((info) => {
                        const IconComponent = info.icon;
                        return (
                            <div key={info.id} className={styles.logisticsCard}>
                                <div className={styles.cardTab}>
                                    <IconComponent size={16} />
                                    <span>{info.label}</span>
                                </div>
                                <div className={styles.cardBody}>
                                    <h4>{info.title}</h4>
                                    <p className={styles.cardDetail}>{info.detail}</p>
                                    <span className={styles.cardNote}>{info.note}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ========================================
                4. TUITION & ADMISSIONS (The Ledger)
            ======================================== */}
            <section id="admissions" className={styles.tuitionSection}>
                <div className={styles.tuitionLedger}>
                    <div className={styles.ledgerHeader}>
                        <Scroll size={28} />
                        <h2>Tuition & Admissions</h2>
                        <span className={styles.academicYear}>Academic Year 2025-2026</span>
                    </div>

                    <div className={styles.ratesTable}>
                        {tuitionRates.map((rate, idx) => (
                            <div key={idx} className={styles.rateRow}>
                                <span className={styles.rateCategory}>{rate.category}</span>
                                <span className={styles.rateDivider} />
                                <span className={styles.rateAmount}>
                                    ${rate.amount}
                                    <small>/{rate.period}</small>
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.scholarshipNote}>
                        <Award size={20} />
                        <p>
                            <strong>Need-based scholarships are available.</strong><br />
                            No child is turned away due to lack of funds.
                        </p>
                    </div>

                    <div className={styles.ledgerActions}>
                        <a href="/files/registration-packet.pdf" className={styles.downloadBtn}>
                            <Download size={18} />
                            Download Registration Packet
                        </a>
                        <Link href="/heritage/join/membership" className={styles.payBtn}>
                            <CreditCard size={18} />
                            Pay Tuition Online
                        </Link>
                    </div>
                </div>
            </section>

            {/* ========================================
                5. ACADEMIC CALENDAR
            ======================================== */}
            <section className={styles.calendarSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Important Dates</span>
                    <h2 className={styles.sectionTitle}>Academic Calendar</h2>
                </div>

                <div className={styles.calendarStrip}>
                    {academicCalendar.map((item, idx) => (
                        <div
                            key={idx}
                            className={`${styles.calendarItem} ${styles[item.type]}`}
                        >
                            <div className={styles.dateLeaf}>
                                <span className={styles.dateText}>{item.date}</span>
                            </div>
                            <span className={styles.eventName}>{item.event}</span>
                        </div>
                    ))}
                </div>

                <div className={styles.calendarNote}>
                    <Calendar size={16} />
                    <span>Full calendar available in the Parent Handbook</span>
                </div>
            </section>

            {/* ========================================
                6. PARENT RESOURCES (The Handbook)
            ======================================== */}
            <section className={styles.resourcesSection}>
                <div className={styles.resourcesContainer}>
                    <div className={styles.resourcesHeader}>
                        <BookOpen size={24} />
                        <h3>Parent Resources</h3>
                    </div>

                    <div className={styles.resourcesGrid}>
                        {parentResources.map((resource, idx) => {
                            const IconComponent = resource.icon;
                            return (
                                <a key={idx} href="#" className={styles.resourceLink}>
                                    <IconComponent size={18} />
                                    <span>{resource.name}</span>
                                    <small>{resource.type}</small>
                                </a>
                            );
                        })}
                    </div>

                    <div className={styles.principalContact}>
                        <div className={styles.contactInfo}>
                            <strong>Principal's Office</strong>
                            <div className={styles.contactMethods}>
                                <a href="mailto:school@duhamasjid.org">
                                    <Mail size={14} />
                                    school@duhamasjid.org
                                </a>
                                <a href="tel:+15551234567">
                                    <Phone size={14} />
                                    (555) 123-4567 ext. 200
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
