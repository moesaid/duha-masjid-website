// Newsletter Page - Heritage Design
'use client';

import { useNewsletterState } from './_hooks';
import { HeroSection, SubscribeSection, ArchiveSection } from './_components';
import styles from './NewsletterPage.module.scss';

export default function NewsletterPage() {
    const { email, setEmail, isSubscribed, handleSubscribe, activeCategory, setActiveCategory } = useNewsletterState();

    return (
        <main className={styles.newsletterPage}>
            <HeroSection />
            <SubscribeSection email={email} setEmail={setEmail} isSubscribed={isSubscribed} onSubscribe={handleSubscribe} />
            <ArchiveSection activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        </main>
    );
}
