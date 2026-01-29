// Sisters Committee Page - SANCTUARY OF SISTERHOOD
// Unique Heritage Variant: Soft feminine tones with floral arabesques
'use client';

import { weeklyPrograms, socialEvents, mentorshipTracks, testimonials } from './_data';
import { useSistersState } from './_hooks';
import {
    HeroSection,
    ProgramsSection,
    SocialSection,
    TestimonialSection,
    MentorshipSection,
    CtaSection
} from './_components';
import styles from './_components/_shared.module.scss';

/**
 * Sisters Page - Sanctuary of Sisterhood
 * 
 * Architecture:
 * - _data/      → Weekly programs, social events, mentorship tracks, testimonials
 * - _hooks/     → useSistersState (testimonial carousel)
 * - _components/→ Hero, Programs, Social, Testimonial, Mentorship, CTA
 */
export default function SistersPage() {
    const { activeTestimonial, setActiveTestimonial } = useSistersState();

    return (
        <main className={styles.sistersPage}>
            <HeroSection />
            <ProgramsSection programs={weeklyPrograms} />
            <SocialSection events={socialEvents} />
            <TestimonialSection
                testimonials={testimonials}
                activeIndex={activeTestimonial}
                onSelect={setActiveTestimonial}
            />
            <MentorshipSection tracks={mentorshipTracks} />
            <CtaSection />
        </main>
    );
}
