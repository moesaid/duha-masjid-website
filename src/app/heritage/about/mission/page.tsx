import styles from './_components/_shared.module.scss';
import templateStyles from '../../_styles/template.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import {
    Diamond,
    Landmark,
    BookOpen,
    Handshake,
    ArrowRight,
    Star,
    Moon,
    Building2
} from 'lucide-react';

// Pillar Data (Three core elements)
const pillars = [
    {
        icon: Landmark,
        watermarkIcon: Building2,
        label: 'Our Mission',
        title: 'Cultivating Hearts & Minds',
        text: 'To cultivate a community grounded in the authentic teachings of Islam, providing spiritual nourishment, educational excellence, and compassionate service to all. We strive to create an environment where every individual can grow in their faith, contribute their unique gifts, and find belonging in the house of Allah.',
    },
    {
        icon: BookOpen,
        watermarkIcon: Moon,
        label: 'Our Vision',
        title: 'A Beacon of Guidance',
        text: 'To be a beacon of guidance for generations to come—a center of learning, worship, and community that reflects the beauty of Islam to all who enter. We envision a thriving ummah united in purpose, active in service, and grounded in taqwa, serving as a positive force in our city and beyond.',
    },
    {
        icon: Handshake,
        watermarkIcon: Star,
        label: 'Our Values',
        title: 'Unity in Diversity',
        text: 'Tawheed, service, and unity guide every decision we make. We uphold the oneness of Allah in all worship, serve our community as an act of gratitude, and build bridges within our diverse ummah—embracing our differences as a source of strength.',
    },
];

// Timeline Data
const timelineEvents = [
    { year: '1985', title: 'The Beginning', text: 'A small group of 12 families began gathering for Jummah prayers in a rented community center.' },
    { year: '1992', title: 'Our First Home', text: 'The community purchased its first permanent home—a modest building that would serve as the foundation.' },
    { year: '2001', title: 'Seeds of Knowledge', text: 'Weekend Islamic school established with 50 students and 5 dedicated volunteer teachers.' },
    { year: '2010', title: 'Building the Dream', text: 'Groundbreaking ceremony for the new masjid, designed with traditional Islamic architecture.' },
    { year: '2015', title: 'Grand Opening', text: 'Expanded facility opened: full-time school, gymnasium, community hall, and prayer spaces.' },
    { year: '2024', title: 'Serving Generations', text: 'Now serving 2,000+ families with daily prayers, educational programs, and community services.' },
];

// Impact Stats
const impactStats = [
    { number: '500+', label: 'Families Served' },
    { number: '120', label: 'Students Enrolled' },
    { number: '$50K', label: 'Charity Given Yearly' },
    { number: '39', label: 'Years of Service' },
];



export default function MissionPage() {
    return (
        <div className={templateStyles.template}>
            {/* 1. Page Header with Bismillah & Geometric Pattern */}
            <header className={styles.pageHeader}>
                <div className={styles.headerBadge}>Est. 1985</div>
                <div className={styles.headerContent}>
                    <div className={styles.bismillah}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
                    <h1 className={styles.pageTitle}>Our Story & Vision</h1>
                    <p className={styles.pageSubtitle}>
                        Rooted in faith, growing in service. For nearly four decades, we have been
                        a sanctuary for souls and a beacon of Islamic knowledge in our community.
                    </p>
                    <div className={styles.divider}>
                        <Diamond className={styles.dividerIcon} size={16} />
                    </div>
                </div>
            </header>

            {/* 2. Three Pillars (Framed Plaques) */}
            <section className={styles.pillarsSection}>
                <div className={styles.sectionHeader}>
                    <div className={styles.sectionLabel}>Our Foundation</div>
                    <h2 className={styles.sectionTitle}>The Pillars We Stand Upon</h2>
                </div>
                <div className={styles.pillarsGrid}>
                    {pillars.map((pillar, index) => (
                        <div key={index} className={styles.plaque}>
                            <pillar.watermarkIcon className={styles.plaqueWatermark} size={120} />
                            <pillar.icon className={styles.plaqueIcon} size={40} />
                            <span className={styles.plaqueLabel}>{pillar.label}</span>
                            <h3 className={styles.plaqueTitle}>{pillar.title}</h3>
                            <p className={styles.plaqueText}>{pillar.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Timeline */}
            <section className={styles.timelineSection}>
                <div className={styles.sectionHeader}>
                    <div className={styles.sectionLabel}>Our History</div>
                    <h2 className={styles.sectionTitle}>The Legacy We Build Upon</h2>
                </div>
                <div className={styles.timeline}>
                    {timelineEvents.map((event, index) => (
                        <div key={index} className={styles.timelineItem}>
                            <span className={styles.timelineNode} />
                            <div className={styles.timelineYear}>{event.year}</div>
                            <div className={styles.timelineCard}>
                                <h3 className={styles.timelineTitle}>{event.title}</h3>
                                <p className={styles.timelineText}>{event.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Impact Strip */}
            <section className={styles.impactStrip}>
                <div className={styles.impactGrid}>
                    {impactStats.map((stat, index) => (
                        <div key={index} className={styles.impactStat}>
                            <div className={styles.impactNumber}>{stat.number}</div>
                            <div className={styles.impactLabel}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>


            {/* 6. Next Generation Block */}
            <section className={styles.nextGenSection}>
                <div className={styles.nextGenImage}>
                    <Image
                        src="/images/youth-learning.jpg"
                        alt="Holy Quran with prayer beads - passing knowledge to future generations"
                        fill
                        className={styles.nextGenPhoto}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
                <div className={styles.nextGenContent}>
                    <h2 className={styles.nextGenTitle}>Building for Tomorrow</h2>
                    <p className={styles.nextGenText}>
                        Our work today is not just for ourselves—it is an amanah (trust) for
                        generations yet to come. Through our Waqf Endowment Fund, we ensure
                        that the light of this masjid continues to shine long after we are gone.
                        Every contribution becomes a continuous sadaqah jariyah, benefiting
                        your akhirah while building a legacy of faith and service.
                    </p>
                    <Link href="/heritage/donate" className={styles.ctaButton}>
                        Support Our Future
                        <ArrowRight className={styles.ctaIcon} size={18} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
