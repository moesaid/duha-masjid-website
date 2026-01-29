// New Muslims Page - Heritage Embrace Design
// Welcome Home for New Muslims
'use client';

import { testimonials } from './_data';
import { useNewMuslimsState } from './_hooks';
import {
    HeroSection,
    ResourcesSection,
    ScheduleSection,
    TestimonialsSection,
    FAQSection,
    ContactSection,
    ContactModal
} from './_components';
import styles from './NewMuslimsPage.module.scss';

/**
 * New Muslims Page
 * 
 * Architecture:
 * - _data/      → Resources, classes, testimonials, FAQs, stats
 * - _hooks/     → useNewMuslimsState (FAQ, modal, testimonial carousel)
 * - _components/→ Hero, Resources, Schedule, Testimonials, FAQ, Contact, Modal
 */
export default function NewMuslimsPage() {
    const {
        expandedFaq, toggleFaq,
        isModalOpen, openModal, closeModal,
        activeTestimonial, nextTestimonial
    } = useNewMuslimsState();

    return (
        <main className={styles.newMuslimsPage}>
            <HeroSection />
            <ResourcesSection />
            <ScheduleSection />
            <TestimonialsSection
                activeIndex={activeTestimonial}
                onPrev={() => nextTestimonial(testimonials.length)}
                onNext={() => nextTestimonial(testimonials.length)}
            />
            <FAQSection expandedFaq={expandedFaq} onToggle={toggleFaq} />
            <ContactSection onOpenModal={openModal} />
            <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        </main>
    );
}
