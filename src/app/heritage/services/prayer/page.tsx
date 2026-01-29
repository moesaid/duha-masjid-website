// Prayer Services Page - Heritage Design
'use client';

import { HeroSection, IqamahSection, PrayersInfoSection, JumuahSection, EidSection } from './_components';
import styles from './PrayerPage.module.scss';

export default function PrayerPage() {
    return (
        <main className={styles.prayerPage}>
            <HeroSection />
            <IqamahSection />
            <PrayersInfoSection />
            <JumuahSection />
            <EidSection />
        </main>
    );
}
