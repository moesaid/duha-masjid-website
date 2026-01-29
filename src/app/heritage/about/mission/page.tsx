// About Mission Page - Heritage Design
'use client';

import { HeroSection, MissionSection, ValuesSection, HistorySection } from './_components';
import styles from './MissionPage.module.scss';

export default function MissionPage() {
    return (
        <main className={styles.missionPage}>
            <HeroSection />
            <MissionSection />
            <ValuesSection />
            <HistorySection />
        </main>
    );
}
