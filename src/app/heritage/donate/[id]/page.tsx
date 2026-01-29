// Single Campaign Page - "The Appeal"
// Design: Inspirational, Urgent, and Commemorative
'use client';

import { useState } from 'react';
import { campaignData, impactTiers, recentDonors, campaignUpdates, faqData } from './_data';
import { useDonation, useFaq, useVideoPlayer } from './_hooks';
import {
    CampaignHero,
    TabNavigation,
    NarrativeSection,
    UpdatesTab,
    DonationWidget,
    MobileBar,
    VideoOverlay
} from './_components';
import styles from './CampaignPage.module.scss';

/**
 * Campaign Detail Page - Single donation campaign
 * 
 * Architecture:
 * - _data/      → Campaign data, impact tiers, donors, updates, FAQ
 * - _hooks/     → useDonation, useFaq, useVideoPlayer
 * - _components/→ Hero, Tabs, Narrative, DonationWidget, VideoOverlay
 */
export default function CampaignPage() {
    const [activeTab, setActiveTab] = useState<'info' | 'updates'>('info');
    const donation = useDonation(100);
    const { openFaq, toggleFaq } = useFaq();
    const { showVideo, openVideo, closeVideo } = useVideoPlayer();

    const handleSeeAllUpdates = () => {
        setActiveTab('updates');
        window.scrollTo({ top: 500, behavior: 'smooth' });
    };

    return (
        <div className={styles.campaignPage}>
            <CampaignHero campaign={campaignData} onPlayVideo={openVideo} />

            <TabNavigation
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                updatesCount={campaignUpdates.length}
            />

            <div className={styles.mainContent}>
                <div className={styles.narrativeColumn}>
                    {activeTab === 'info' ? (
                        <NarrativeSection
                            campaign={campaignData}
                            impactTiers={impactTiers}
                            recentDonors={recentDonors}
                            campaignUpdates={campaignUpdates}
                            faqData={faqData}
                            openFaq={openFaq}
                            onFaqToggle={toggleFaq}
                            onAmountSelect={donation.handleAmountSelect}
                            onSeeAllUpdates={handleSeeAllUpdates}
                        />
                    ) : (
                        <UpdatesTab campaignUpdates={campaignUpdates} />
                    )}
                </div>

                <DonationWidget campaign={campaignData} donation={donation} />
            </div>

            <MobileBar campaign={campaignData} />
            <VideoOverlay showVideo={showVideo} onClose={closeVideo} />
        </div>
    );
}
