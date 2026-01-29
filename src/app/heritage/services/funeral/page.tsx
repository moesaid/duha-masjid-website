// Funeral Services Page - Heritage Design
'use client';

import { useFuneralState } from './_hooks';
import { HeroSection, EmergencySection, ServicesSection, FAQSection, ContactSection } from './_components';
import styles from './FuneralPage.module.scss';

export default function FuneralPage() {
    const { expandedFaq, toggleFaq } = useFuneralState();

    return (
        <main className={styles.funeralPage}>
            <HeroSection />
            <EmergencySection />
            <ServicesSection />
            <FAQSection expandedFaq={expandedFaq} onToggle={toggleFaq} />
            <ContactSection />
        </main>
    );
}
