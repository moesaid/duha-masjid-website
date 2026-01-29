// Quran Academy Page - Heritage Guardians Design
// Guardians of the Quran Program
'use client';

import { testimonials } from './_data';
import { useQuranAcademyState } from './_hooks';
import {
    HeroSection,
    ProgramsSection,
    CurriculumSection,
    TeachersSection,
    TestimonialsSection,
    ContactSection,
    RegistrationModal
} from './_components';
import styles from './QuranAcademyPage.module.scss';

/**
 * Quran Academy Page
 * 
 * Architecture:
 * - _data/      → Programs, teachers, testimonials, achievements
 * - _hooks/     → useQuranAcademyState (registration, testimonial carousel)
 * - _components/→ Hero, Programs, Curriculum, Teachers, Testimonials, Contact, Modal
 */
export default function QuranAcademyPage() {
    const {
        isRegistrationOpen, selectedProgram,
        openRegistration, closeRegistration,
        activeTestimonial, nextTestimonial, prevTestimonial
    } = useQuranAcademyState();

    return (
        <main className={styles.quranAcademyPage}>
            <HeroSection />
            <ProgramsSection onEnroll={openRegistration} />
            <CurriculumSection />
            <TeachersSection />
            <TestimonialsSection
                activeIndex={activeTestimonial}
                onPrev={() => prevTestimonial(testimonials.length)}
                onNext={() => nextTestimonial(testimonials.length)}
            />
            <ContactSection onOpenRegistration={() => openRegistration()} />
            <RegistrationModal
                isOpen={isRegistrationOpen}
                selectedProgram={selectedProgram}
                onClose={closeRegistration}
            />
        </main>
    );
}
