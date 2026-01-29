// Matrimony Page - Heritage Nikkah Design
// Nikkah Facilitation Program
'use client';

import { successStories } from './_data';
import { useMatrimonyState } from './_hooks';
import {
    HeroSection,
    FeaturesSection,
    ProcessSection,
    StoriesSection,
    FAQSection,
    ContactSection,
    RegistrationModal
} from './_components';
import styles from './MatrimonyPage.module.scss';

/**
 * Matrimony Page
 * 
 * Architecture:
 * - _data/      → Features, process, success stories, FAQs, stats
 * - _hooks/     → useMatrimonyState (FAQ, modal, story carousel)
 * - _components/→ Hero, Features, Process, Stories, FAQ, Contact, Modal
 */
export default function MatrimonyPage() {
    const {
        expandedFaq, toggleFaq,
        isModalOpen, openModal, closeModal,
        activeStory, nextStory, prevStory
    } = useMatrimonyState();

    return (
        <main className={styles.matrimonyPage}>
            <HeroSection />
            <FeaturesSection />
            <ProcessSection />
            <StoriesSection
                activeIndex={activeStory}
                onPrev={() => prevStory(successStories.length)}
                onNext={() => nextStory(successStories.length)}
            />
            <FAQSection expandedFaq={expandedFaq} onToggle={toggleFaq} />
            <ContactSection onOpenModal={openModal} />
            <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
        </main>
    );
}
