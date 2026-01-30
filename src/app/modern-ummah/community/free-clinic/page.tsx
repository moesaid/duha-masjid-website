'use client';

import { ClinicHero } from './_components/ClinicHero';
import { ServicesSection } from './_components/ServicesSection';
import { PharmacySection } from './_components/PharmacySection';
import { LocationSection } from './_components/LocationSection';
import { ImpactSection } from './_components/ImpactSection';

/**
 * Free Clinic Page - "Neo-Islamic" Minimalist Design
 * Al-Shifa (The House of Healing)
 * Clean, Compassionate, Trustworthy
 * Data aligned with Heritage template
 */
export default function FreeClinicPage() {
    return (
        <main className="min-h-screen bg-white w-full">
            <ClinicHero />
            <ServicesSection />
            <PharmacySection />
            <LocationSection />
            <ImpactSection />
        </main>
    );
}
