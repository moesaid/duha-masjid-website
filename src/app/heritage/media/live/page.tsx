// Live Stream Page - Heritage Design
'use client';

import { HeroSection, PlayerSection, ScheduleSection, SocialSection } from './_components';
import styles from './LiveStreamPage.module.scss';

export default function LivePage() {
    return (
        <main className={styles.livePage}>
            <HeroSection />
            <PlayerSection />
            <ScheduleSection />
            <SocialSection />
        </main>
    );
}
