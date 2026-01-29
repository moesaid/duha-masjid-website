// Weekend School Page - Heritage Madrasah Design
// Weekend Islamic Education Program
'use client';

import { testimonials } from './_data';
import { useWeekendSchoolState } from './_hooks';
import {
    HeroSection,
    FeaturesSection,
    GradesSection,
    ScheduleSection,
    TestimonialsSection,
    ContactSection,
    RegistrationModal
} from './_components';
import styles from './WeekendSchoolPage.module.scss';

/**
 * Weekend School Page
 * 
 * Architecture:
 * - _data/      → Grade levels, schedule, testimonials, stats, features
 * - _hooks/     → useWeekendSchoolState (registration, testimonial carousel)
 * - _components/→ Hero, Features, Grades, Schedule, Testimonials, Contact, Modal
 */
export default function WeekendSchoolPage() {
    const {
        isRegistrationOpen, selectedGrade,
        openRegistration, closeRegistration,
        activeTestimonial, nextTestimonial
    } = useWeekendSchoolState();

    return (
        <main className={styles.weekendSchoolPage}>
            <HeroSection />
            <FeaturesSection />
            <GradesSection onEnroll={openRegistration} />
            <ScheduleSection />
            <TestimonialsSection
                activeIndex={activeTestimonial}
                onPrev={() => nextTestimonial(testimonials.length)}
                onNext={() => nextTestimonial(testimonials.length)}
            />
            <ContactSection onOpenRegistration={() => openRegistration()} />
            <RegistrationModal
                isOpen={isRegistrationOpen}
                selectedGrade={selectedGrade}
                onClose={closeRegistration}
            />
        </main>
    );
}
