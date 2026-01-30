import styles from './_styles/HomePage.module.css';
import { HeroSection, PrayerTimeline, ServicePillars, EventsSection, DonationSection } from './_components/home';

export default function ModernUmmahPage() {
    const templateId = 'modern-ummah';

    return (
        <div className={styles.pageWrapper}>
            {/* Hero - "The Gateway" */}
            <HeroSection templateId={templateId} />

            {/* Prayer Times - "Time as a River" */}
            <PrayerTimeline />

            {/* Services - "The Pillars of Service" */}
            <ServicePillars templateId={templateId} />

            {/* Events - "The Gathering" */}
            <EventsSection templateId={templateId} />

            {/* Donation - "Sadaqah Jariyah" */}
            <DonationSection templateId={templateId} />
        </div>
    );
}
