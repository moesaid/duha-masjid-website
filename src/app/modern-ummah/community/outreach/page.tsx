'use client';

import { OutreachHero } from './_components/OutreachHero';
import { ServicesSection } from './_components/ServicesSection';
import { TestimonialsSection } from './_components/TestimonialsSection';
import { ImpactStats } from './_components/ImpactStats';
import { PartnersSection } from './_components/PartnersSection';
import { OutreachContact } from './_components/OutreachContact';

/**
 * Outreach Page - "Neo-Islamic" Minimalist Design
 * Interfaith & Community Bridge theme
 * Data aligned with Heritage template
 */
export default function OutreachPage() {
    return (
        <main className="min-h-screen bg-white w-full">
            <OutreachHero />
            <ServicesSection />
            <TestimonialsSection />
            <ImpactStats />
            <PartnersSection />
            <OutreachContact />
        </main>
    );
}
