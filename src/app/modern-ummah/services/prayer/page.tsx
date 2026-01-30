import {
    HeroSection,
    PrayerTimesWidget,
    JumuahCard,
    SpecialPrayersGrid,
    FacilitiesAccordion,
} from './_components';
import { prayers, jumuahInfo, specialPrayers, facilities } from './_data';
import styles from './Prayer.module.css';

export default function PrayerPage() {
    return (
        <div className={styles.page}>
            {/* Digital Mashrabiya pattern overlay */}
            <div className={styles.mashrabiyaOverlay} />

            <HeroSection />
            <PrayerTimesWidget prayers={prayers} />
            <JumuahCard info={jumuahInfo} />
            <SpecialPrayersGrid prayers={specialPrayers} />
            <FacilitiesAccordion facilities={facilities} />
        </div>
    );
}
