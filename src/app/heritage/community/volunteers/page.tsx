// Community Volunteers Page - Heritage Design
// Volunteer Program and Opportunities
'use client';

import { testimonials } from './_data';
import { useVolunteersState } from './_hooks';
import {
    HeroSection,
    AreasSection,
    BenefitsSection,
    TestimonialsSection,
    ContactSection,
    SignUpModal
} from './_components';
import styles from './VolunteersPage.module.scss';

/**
 * Volunteers Page
 * 
 * Architecture:
 * - _data/      → Volunteer areas, testimonials, stats, benefits
 * - _hooks/     → useVolunteersState (form, testimonial carousel)
 * - _components/→ Hero, Areas, Benefits, Testimonials, Contact, Modal
 */
export default function VolunteersPage() {
    const {
        isFormOpen, selectedArea,
        openForm, closeForm,
        activeTestimonial, nextTestimonial
    } = useVolunteersState();

    return (
        <main className={styles.volunteersPage}>
            <HeroSection />
            <AreasSection onSignUp={openForm} />
            <BenefitsSection />
            <TestimonialsSection
                activeIndex={activeTestimonial}
                onPrev={() => nextTestimonial(testimonials.length)}
                onNext={() => nextTestimonial(testimonials.length)}
            />
            <ContactSection onOpenForm={() => openForm()} />
            <SignUpModal
                isOpen={isFormOpen}
                selectedArea={selectedArea}
                onClose={closeForm}
            />
        </main>
    );
}
