'use client';

import { SakinahHero } from './_components/SakinahHero';
import { CorePillars } from './_components/CorePillars';
import { FeaturedPrograms } from './_components/FeaturedPrograms';
import { SistersSpotlight } from './_components/SistersSpotlight';
import { CommitteeLeadership } from './_components/CommitteeLeadership';
import { GetInvolved } from './_components/GetInvolved';

/**
 * Sisters Committee Page - "Neo-Islamic" Minimalist Design
 * Serenity & Connection aesthetic
 * Sophisticated, serene, and empowering
 * Unique: Split-layout hero, testimonials spotlight
 */
export default function SistersPage() {
    return (
        <main className="min-h-screen bg-white w-full">
            <SakinahHero />
            <CorePillars />
            <FeaturedPrograms />
            <SistersSpotlight />
            <CommitteeLeadership />
            <GetInvolved />
        </main>
    );
}
