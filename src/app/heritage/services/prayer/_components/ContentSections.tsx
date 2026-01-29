import Image from 'next/image';
import { Clock, Calendar, Moon } from 'lucide-react';
import { dailyPrayers, iqamahTimes, jumuahInfo, festivalInfo, PrayerInfo, Iqamah } from '../_data';
import styles from '../PrayerPage.module.scss';

export function HeroSection() {
    return (
        <section className={styles.prayerHero}>
            <div className={styles.heroBackground}>
                <Image src="/images/prayer.jpg" alt="" fill priority className={styles.heroImage} />
                <div className={styles.heroOverlay} />
            </div>
            <div className={styles.heroContent}>
                <div className={styles.prayerIcon}><Clock size={32} /></div>
                <span className={styles.arabicTitle}>الصَّلَاة</span>
                <h1 className={styles.heroTitle}>Prayer Services</h1>
                <p className={styles.heroTagline}>Join us for the five daily prayers and Jumu&apos;ah</p>
            </div>
        </section>
    );
}

export function IqamahSection() {
    return (
        <section className={styles.iqamahSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Daily Schedule</span>
                <h2 className={styles.sectionTitle}>Iqamah Times</h2>
            </div>
            <div className={styles.iqamahGrid}>
                {iqamahTimes.map((item: Iqamah, idx: number) => (
                    <div key={idx} className={styles.iqamahCard}>
                        <h3>{item.prayer}</h3>
                        <span className={styles.time}>{item.time}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function PrayersInfoSection() {
    return (
        <section className={styles.prayersInfoSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Understanding</span>
                <h2 className={styles.sectionTitle}>The Five Daily Prayers</h2>
            </div>
            <div className={styles.prayersGrid}>
                {dailyPrayers.map((prayer: PrayerInfo, idx: number) => (
                    <div key={idx} className={styles.prayerCard}>
                        <span className={styles.arabicName}>{prayer.arabicName}</span>
                        <h3>{prayer.name}</h3>
                        <p>{prayer.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function JumuahSection() {
    return (
        <section className={styles.jumuahSection}>
            <div className={styles.jumuahCard}>
                <Calendar size={32} />
                <h2>Jumu&apos;ah (Friday Prayer)</h2>
                <div className={styles.jumuahDetails}>
                    <div className={styles.detail}>
                        <span className={styles.label}>Khutbah</span>
                        <span className={styles.value}>{jumuahInfo.khutbah}</span>
                    </div>
                    <div className={styles.detail}>
                        <span className={styles.label}>Prayer</span>
                        <span className={styles.value}>{jumuahInfo.prayer}</span>
                    </div>
                    <div className={styles.detail}>
                        <span className={styles.label}>Second Session</span>
                        <span className={styles.value}>{jumuahInfo.secondSession}</span>
                    </div>
                </div>
                <p className={styles.note}>{jumuahInfo.parking}</p>
            </div>
        </section>
    );
}

export function EidSection() {
    return (
        <section className={styles.eidSection}>
            <div className={styles.eidCard}>
                <Moon size={32} />
                <h2>{festivalInfo.title}</h2>
                <p>{festivalInfo.description}</p>
                <div className={styles.locations}>
                    <h4>Prayer Locations:</h4>
                    <ul>
                        {festivalInfo.locations.map((loc, idx) => (
                            <li key={idx}>{loc}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
