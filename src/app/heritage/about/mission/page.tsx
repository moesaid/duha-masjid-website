import styles from './MissionPage.module.css';
import templateStyles from '../../_styles/template.module.css';

// SVG Icons as inline components for performance
const DiamondIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={styles.dividerIcon}>
        <path d="M12 2L22 12L12 22L2 12L12 2Z" />
    </svg>
);

const MosqueDomeIcon = () => (
    <svg viewBox="0 0 100 100" fill="currentColor" className={styles.plaqueWatermark}>
        <path d="M50 10C30 10 15 30 15 50V90H85V50C85 30 70 10 50 10Z" />
        <circle cx="50" cy="35" r="8" />
    </svg>
);

const CrescentIcon = () => (
    <svg viewBox="0 0 100 100" fill="currentColor" className={styles.plaqueWatermark}>
        <path d="M50 10C28 10 10 28 10 50C10 72 28 90 50 90C60 90 69 86 76 80C66 80 58 66 58 50C58 34 66 20 76 20C69 14 60 10 50 10Z" />
    </svg>
);

const PrayingHandsIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.valueIcon}>
        <path d="M32 56V36M32 36C28 32 24 28 24 20C24 12 28 8 32 8C36 8 40 12 40 20C40 28 36 32 32 36Z" />
        <path d="M20 44C18 40 16 36 16 32C16 28 18 24 22 24" />
        <path d="M44 44C46 40 48 36 48 32C48 28 46 24 42 24" />
    </svg>
);

const OpenBookIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.valueIcon}>
        <path d="M32 16V52M32 16C28 12 20 10 12 12V48C20 46 28 48 32 52M32 16C36 12 44 10 52 12V48C44 46 36 48 32 52" />
    </svg>
);

const UnityIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.valueIcon}>
        <circle cx="32" cy="20" r="8" />
        <circle cx="16" cy="40" r="8" />
        <circle cx="48" cy="40" r="8" />
        <path d="M32 28V32M24 36L20 40M40 36L44 40" />
    </svg>
);

// Timeline Data
const timelineEvents = [
    { year: '1985', text: 'A small group of families began gathering for Jummah prayers in a rented community center.' },
    { year: '1992', text: 'The community purchased its first permanent home, a modest building that would serve as the foundation for growth.' },
    { year: '2001', text: 'Weekend Islamic school established with 50 students and 5 dedicated volunteer teachers.' },
    { year: '2010', text: 'Groundbreaking ceremony for the new masjid building, designed with traditional Islamic architecture.' },
    { year: '2015', text: 'Grand opening of the expanded facility including a full-time school, gymnasium, and community hall.' },
    { year: '2023', text: 'Serving over 2,000 families with daily prayers, educational programs, and community services.' },
];

// Leadership Data
const imams = [
    { name: 'Sheikh Abdullah Rahman', title: 'Head Imam' },
    { name: 'Imam Yusuf Hassan', title: 'Associate Imam' },
    { name: 'Ustadh Ahmad Malik', title: 'Youth Director' },
];

const boardMembers = [
    { name: 'Dr. Omar Khan', title: 'President' },
    { name: 'Sr. Fatima Ahmed', title: 'Vice President' },
    { name: 'Br. Khalid Mansour', title: 'Treasurer' },
    { name: 'Sr. Aisha Patel', title: 'Secretary' },
];

// Core Values Data
const coreValues = [
    {
        icon: PrayingHandsIcon,
        title: 'Tawheed',
        text: 'Upholding the oneness of Allah in all our worship, decisions, and community life.',
    },
    {
        icon: OpenBookIcon,
        title: 'Service',
        text: 'Serving our community and neighbors as an act of worship and gratitude to our Creator.',
    },
    {
        icon: UnityIcon,
        title: 'Unity',
        text: 'Building bridges within our diverse ummah, embracing our differences as a source of strength.',
    },
];

export default function MissionPage() {
    return (
        <div className={templateStyles.template}>
            {/* 1. Page Header */}
            <header className={styles.pageHeader}>
                <div className={styles.bismillah}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
                <h1 className={styles.pageTitle}>Our Story & Vision</h1>
                <p className={styles.pageSubtitle}>
                    Serving the community with the light of Quran and Sunnah since 1985
                </p>
                <div className={styles.divider}>
                    <DiamondIcon />
                </div>
            </header>

            {/* 2. Mission & Vision */}
            <section className={styles.manifestoSection}>
                <div className={styles.manifestoGrid}>
                    <div className={styles.plaque}>
                        <MosqueDomeIcon />
                        <span className={styles.plaqueLabel}>Our Mission</span>
                        <h2 className={styles.plaqueTitle}>Cultivating Hearts & Minds</h2>
                        <p className={styles.plaqueText}>
                            To cultivate a community grounded in the authentic teachings of Islam,
                            providing spiritual nourishment, educational excellence, and compassionate
                            service to all. We strive to create an environment where every individual
                            can grow in their faith, contribute their unique gifts, and find belonging
                            in the house of Allah.
                        </p>
                    </div>
                    <div className={styles.plaque}>
                        <CrescentIcon />
                        <span className={styles.plaqueLabel}>Our Vision</span>
                        <h2 className={styles.plaqueTitle}>A Beacon of Guidance</h2>
                        <p className={styles.plaqueText}>
                            To be a beacon of guidance for generations to come—a center of learning,
                            worship, and community that reflects the beauty of Islam to all who enter.
                            We envision a thriving ummah united in purpose, active in service, and
                            grounded in taqwa, serving as a positive force in our city and beyond.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Timeline */}
            <section className={styles.timelineSection}>
                <h2 className={styles.sectionTitle}>Our Journey</h2>
                <div className={styles.timeline}>
                    {timelineEvents.map((event, index) => (
                        <div key={index} className={styles.timelineItem}>
                            <span className={styles.timelineNode} />
                            <div className={styles.timelineCard}>
                                <div className={styles.timelineYear}>{event.year}</div>
                                <p className={styles.timelineText}>{event.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Leadership */}
            <section className={styles.leadershipSection}>
                <h2 className={styles.sectionTitle}>Our Stewards</h2>

                <div className={styles.leadershipGroup}>
                    <h3 className={styles.groupTitle}>Imams & Scholars</h3>
                    <div className={styles.imamsGrid}>
                        {imams.map((imam, index) => (
                            <div key={index} className={styles.leaderCard}>
                                <div className={styles.archPortrait}>
                                    {/* Placeholder - replace with actual images */}
                                </div>
                                <div className={styles.leaderName}>{imam.name}</div>
                                <div className={styles.leaderTitle}>{imam.title}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.leadershipGroup}>
                    <h3 className={styles.groupTitle}>Board of Directors</h3>
                    <div className={styles.boardGrid}>
                        {boardMembers.map((member, index) => (
                            <div key={index} className={styles.leaderCard}>
                                <div className={styles.archPortrait}>
                                    {/* Placeholder - replace with actual images */}
                                </div>
                                <div className={styles.leaderName}>{member.name}</div>
                                <div className={styles.leaderTitle}>{member.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Core Values */}
            <section className={styles.valuesSection}>
                <h2 className={styles.sectionTitle}>Our Pillars</h2>
                <div className={styles.valuesGrid}>
                    {coreValues.map((value, index) => (
                        <div key={index} className={styles.valueItem}>
                            <value.icon />
                            <h3 className={styles.valueTitle}>{value.title}</h3>
                            <p className={styles.valueText}>{value.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
