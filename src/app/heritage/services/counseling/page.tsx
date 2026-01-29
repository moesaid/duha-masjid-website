'use client';

import { useBookingWizard } from './_hooks';
import { guidanceServices, counselors } from './_data';
import {
    TranquilityHero,
    PhilosophySection,
    GuidanceGrid,
    CounselorsSection,
    BookingWidget,
    DisclaimerSection
} from './_components';
import styles from './CounselingPage.module.scss';

/**
 * Counseling Page - Spiritual Guidance & Counseling Services
 * 
 * Architecture:
 * - _data/      → Static data & types
 * - _hooks/     → useBookingWizard state management
 * - _lib/       → Scheduling utilities
 * - _components/→ Presentational components
 */
export default function CounselingPage() {
    const wizard = useBookingWizard();

    return (
        <main className={styles.counselingPage}>
            <TranquilityHero
                arabicVerse="أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ"
                verseReference="— Quran 13:28"
                title="Spiritual Guidance & Counseling"
                tagline="Finding clarity and peace through the light of the Quran and Sunnah"
            />

            <PhilosophySection />

            <GuidanceGrid services={guidanceServices} />

            <CounselorsSection counselors={counselors} />

            <BookingWidget
                wizard={wizard}
                services={guidanceServices}
                counselors={counselors}
            />

            <DisclaimerSection />
        </main>
    );
}
