'use client';

import {
    CampaignHero,
    DonationWidget,
    NarrativeSection,
    RecentDonorsTicker
} from './_components';
import { CAMPAIGN_DATA } from './_data';
import { useDonationForm } from '../_hooks/useDonationForm';

/**
 * Campaign Detail Page
 * Route: /modern-ummah/donate/[id]
 */
export default function CampaignPage() {
    const { state, actions } = useDonationForm();

    return (
        <main className="min-h-screen bg-white">
            <CampaignHero campaign={CAMPAIGN_DATA} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Main Narrative - Left Column */}
                    <div className="lg:w-7/12 flex flex-col gap-12">
                        <NarrativeSection
                            campaign={CAMPAIGN_DATA}
                            onSelectAmount={actions.selectAmount}
                        />

                        {/* Recent Donors - Moved here per user request */}
                        <RecentDonorsTicker />
                    </div>

                    {/* Donation Widget - Right Sidebar */}
                    <div className="lg:w-5/12 relative">
                        <DonationWidget
                            campaign={CAMPAIGN_DATA}
                            state={state}
                            actions={actions}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
