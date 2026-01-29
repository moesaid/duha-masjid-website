// Outreach & Interfaith Page - HERITAGE ALIGNED
// Design: Heritage Green + Gold + Cream (Diplomatic warmth)
'use client';

import {
    services,
    eventFeatures,
    resources,
    activities,
    impactStats,
    testimonials,
    partners
} from './_data';
import { useTestimonialCarousel } from './_hooks';
import {
    HeroSection,
    ImpactStrip,
    MissionSection,
    ServicesSection,
    TestimonialsSection,
    EventSection,
    PartnersSection,
    ResourcesSection,
    VisitSection,
    VolunteerCta
} from './_components';
import styles from './OutreachPage.module.scss';

/**
 * Outreach Page - Interfaith & Community Bridge
 * 
 * Architecture:
 * - _data/      → Services, resources, testimonials, partners, stats
 * - _hooks/     → useTestimonialCarousel
 * - _components/→ Hero, Impact, Mission, Services, Testimonials, Event, Partners, Resources, Visit, Volunteer
 */
export default function OutreachPage() {
    const { activeIndex, next, prev, setIndex } = useTestimonialCarousel();

    return (
        <main className={styles.outreachPage}>
            <HeroSection />
            <ImpactStrip stats={impactStats} />
            <MissionSection activities={activities} />
            <ServicesSection services={services} />
            <TestimonialsSection
                testimonials={testimonials}
                activeIndex={activeIndex}
                onPrev={prev}
                onNext={next}
                onSelect={setIndex}
            />
            <EventSection features={eventFeatures} />
            <PartnersSection partners={partners} />
            <ResourcesSection resources={resources} />
            <VisitSection />
            <VolunteerCta />
        </main>
    );
}
