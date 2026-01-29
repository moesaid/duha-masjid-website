// Adult Classes Page - Heritage Design
// Adult Islamic Education Programs
'use client';

import { testimonials } from './_data';
import { useAdultClassesState } from './_hooks';
import {
    HeroSection,
    FeaturesSection,
    ClassesSection,
    TestimonialsSection,
    ContactSection,
    RegistrationModal
} from './_components';
import styles from './AdultClassesPage.module.scss';

/**
 * Adult Classes Page
 * 
 * Architecture:
 * - _data/      → Classes, features, testimonials, stats
 * - _hooks/     → useAdultClassesState (registration, testimonial carousel)
 * - _components/→ Hero, Features, Classes, Testimonials, Contact, Modal
 */
export default function AdultClassesPage() {
    const {
        isRegistrationOpen, selectedClass,
        openRegistration, closeRegistration,
        activeTestimonial, nextTestimonial
    } = useAdultClassesState();

    return (
        <main className={styles.adultClassesPage}>
            <HeroSection />
            <FeaturesSection />
            <ClassesSection onEnroll={openRegistration} />
            <TestimonialsSection
                activeIndex={activeTestimonial}
                onPrev={() => nextTestimonial(testimonials.length)}
                onNext={() => nextTestimonial(testimonials.length)}
            />
            <ContactSection onOpenRegistration={() => openRegistration()} />
            <RegistrationModal
                isOpen={isRegistrationOpen}
                selectedClass={selectedClass}
                onClose={closeRegistration}
            />
        </main>
    );
}
