'use client';

import { VolunteerHero } from './_components/VolunteerHero';
import { OpportunitiesSection } from './_components/OpportunitiesSection';
import { TestimonialsSection } from './_components/TestimonialsSection';
import { SignupForm } from './_components/SignupForm';

/**
 * Volunteers Page - "Neo-Islamic" Minimalist Design
 * Warm invitation to serve
 * Data aligned with Heritage template
 */
export default function VolunteersPage() {
    return (
        <main className="min-h-screen bg-white w-full">
            <VolunteerHero />
            <OpportunitiesSection />
            <TestimonialsSection />
            <SignupForm />
        </main>
    );
}
