// Weekly Events Page - Heritage Design
'use client';

import { HeroSection, ScheduleSection, NoteSection } from './_components';
import styles from './WeeklyPage.module.scss';

export default function WeeklyPage() {
    return (
        <main className={styles.weeklyPage}>
            <HeroSection />
            <ScheduleSection />
            <NoteSection />
        </main>
    );
}
