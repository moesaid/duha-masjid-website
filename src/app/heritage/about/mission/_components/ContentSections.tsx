import Image from 'next/image';
import { Target, Eye, Heart } from 'lucide-react';
import { coreValues, missionStatement, visionStatement, historyTimeline, CoreValue } from '../_data';
import styles from './_shared.module.scss';

export function HeroSection() {
    return (
        <section className={styles.missionHero}>
            <div className={styles.heroBackground}>
                <Image src="/images/mission.jpg" alt="" fill priority className={styles.heroImage} />
                <div className={styles.heroOverlay} />
            </div>
            <div className={styles.heroContent}>
                <div className={styles.missionIcon}><Target size={32} /></div>
                <span className={styles.arabicTitle}>رِسَالَتُنَا</span>
                <h1 className={styles.heroTitle}>Our Mission</h1>
                <p className={styles.heroTagline}>Serving faith, community, and humanity</p>
            </div>
        </section>
    );
}

export function MissionSection() {
    return (
        <section className={styles.missionSection}>
            <div className={styles.statementCard}>
                <Target size={32} />
                <h2>Our Mission</h2>
                <p>{missionStatement}</p>
            </div>
            <div className={styles.statementCard}>
                <Eye size={32} />
                <h2>Our Vision</h2>
                <p>{visionStatement}</p>
            </div>
        </section>
    );
}

export function ValuesSection() {
    return (
        <section className={styles.valuesSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>What We Stand For</span>
                <h2 className={styles.sectionTitle}>Core Values</h2>
            </div>
            <div className={styles.valuesGrid}>
                {coreValues.map((value: CoreValue) => {
                    const IconComponent = value.icon;
                    return (
                        <div key={value.id} className={styles.valueCard}>
                            <div className={styles.valueIcon}><IconComponent size={28} /></div>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export function HistorySection() {
    return (
        <section className={styles.historySection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Our Journey</span>
                <h2 className={styles.sectionTitle}>History</h2>
            </div>
            <div className={styles.timeline}>
                {historyTimeline.map((item, idx) => (
                    <div key={idx} className={styles.timelineItem}>
                        <span className={styles.year}>{item.year}</span>
                        <div className={styles.line} />
                        <p>{item.event}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
