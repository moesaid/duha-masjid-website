import {
    HeroSection,
    KhatiraSection,
    ProgramsSection,
    SistersSection,
    ArchiveSection,
    RegistrationSection
} from './_components';
import styles from './_components/_shared.module.scss';

export default function AdultClassesPage() {
    return (
        <main className={styles.adultClassesPage}>
            <HeroSection />
            <KhatiraSection />
            <ProgramsSection />
            <SistersSection />
            <ArchiveSection />
            <RegistrationSection />
        </main>
    );
}
