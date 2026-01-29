'use client';

import { useState } from 'react';
import {
    HeroSection,
    GradesSection,
    ScheduleSection,
    FeaturesSection,
    TestimonialsSection,
    ContactSection,
    RegistrationModal
} from './_components';
import { testimonials } from './_data';
import styles from './_components/_shared.module.scss';

/**
 * Weekend School Page - "The Madrasah"
 * 
 * Component-first architecture with co-located SCSS.
 * All styles are encapsulated in individual component folders.
 */
export default function WeekendSchoolPage() {
    // Testimonial carousel state
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    // Registration modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedGrade, setSelectedGrade] = useState<string | null>(null);

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

    const handleEnroll = (gradeId: string) => {
        setSelectedGrade(gradeId);
        setIsModalOpen(true);
    };

    const handleOpenRegistration = () => {
        setSelectedGrade(null);
        setIsModalOpen(true);
    };

    return (
        <main className={styles.weekendSchoolPage}>
            <HeroSection />
            <GradesSection onEnroll={handleEnroll} />
            <ScheduleSection />
            <FeaturesSection />
            <TestimonialsSection
                activeIndex={testimonialIndex}
                onPrev={handlePrevTestimonial}
                onNext={handleNextTestimonial}
            />
            <ContactSection onOpenRegistration={handleOpenRegistration} />
            <RegistrationModal
                isOpen={isModalOpen}
                selectedGrade={selectedGrade}
                onClose={() => setIsModalOpen(false)}
            />
        </main>
    );
}
