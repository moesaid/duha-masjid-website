'use client';

import { useState } from 'react';
import {
    HeroSection,
    ProgramsSection,
    CurriculumSection,
    TeachersSection,
    TestimonialsSection,
    ContactSection,
    RegistrationModal
} from './_components';
import { testimonials } from './_data';
import styles from './_components/_shared.module.scss';

/**
 * Quran Academy Page - "Guardians of the Quran"
 * 
 * Component-first architecture with co-located SCSS.
 * All styles are encapsulated in individual component folders.
 */
export default function QuranAcademyPage() {
    // Testimonial carousel state
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    // Registration modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

    const handlePrevTestimonial = () => {
        setTestimonialIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const handleNextTestimonial = () => {
        setTestimonialIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const handleEnroll = (programId: string) => {
        setSelectedProgram(programId);
        setIsModalOpen(true);
    };

    const handleOpenRegistration = () => {
        setSelectedProgram(null);
        setIsModalOpen(true);
    };

    return (
        <main className={styles.quranAcademyPage}>
            <HeroSection />
            <ProgramsSection onEnroll={handleEnroll} />
            <CurriculumSection />
            <TeachersSection />
            <TestimonialsSection
                activeIndex={testimonialIndex}
                onPrev={handlePrevTestimonial}
                onNext={handleNextTestimonial}
            />
            <ContactSection onOpenRegistration={handleOpenRegistration} />
            <RegistrationModal
                isOpen={isModalOpen}
                selectedProgram={selectedProgram}
                onClose={() => setIsModalOpen(false)}
            />
        </main>
    );
}
