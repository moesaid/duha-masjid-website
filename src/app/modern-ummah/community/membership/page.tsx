'use client';

import { MembershipHero } from './_components/MembershipHero';
import { BenefitsSection } from './_components/BenefitsSection';
import { ApplicationForm } from './_components/ApplicationForm';
import { FaqSection } from './_components/FaqSection';

/**
 * Membership Page - "Neo-Islamic" Minimalist Design
 * Community membership application
 * Data aligned with Heritage template
 */
export default function MembershipPage() {
    return (
        <main className="min-h-screen bg-white w-full">
            <MembershipHero />
            <BenefitsSection />
            <ApplicationForm />
            <FaqSection />
        </main>
    );
}
