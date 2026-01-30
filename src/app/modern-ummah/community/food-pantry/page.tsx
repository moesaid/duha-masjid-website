'use client';

import { FoodBankHero } from './_components/FoodBankHero';
import { DistributionSchedule } from './_components/DistributionSchedule';
import { WhatWeProvide } from './_components/WhatWeProvide';
import { DonateSection } from './_components/DonateSection';
import { ImpactSection } from './_components/ImpactSection';
import { VolunteerCTA } from './_components/VolunteerCTA';

/**
 * Food Pantry Page - "Neo-Islamic" Minimalist Design
 * Service & Compassion theme
 * Warm amber accents for giving
 * Data aligned with Heritage template
 */
export default function FoodPantryPage() {
    return (
        <main className="min-h-screen bg-white w-full">
            <FoodBankHero />
            <DistributionSchedule />
            <WhatWeProvide />
            <DonateSection />
            <ImpactSection />
            <VolunteerCTA />
        </main>
    );
}
