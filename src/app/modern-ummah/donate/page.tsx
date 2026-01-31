'use client';

import {
    HeroSection,
    FeaturedCampaign,
    GivingCategories,
    ActiveCampaigns,
    TrustIndicators,
    DonorPortalFooter
} from './_components';

export default function DonatePage() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection />
            <FeaturedCampaign />
            <GivingCategories />
            <ActiveCampaigns />
            <TrustIndicators />
            <DonorPortalFooter />
        </main>
    );
}
