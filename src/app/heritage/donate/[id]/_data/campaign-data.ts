import { Gift, Building2, BookOpen, Star, LucideIcon } from 'lucide-react';
import styles from '../CampaignPage.module.scss';

// ============================================
// Types
// ============================================

export interface CampaignData {
    title: string;
    subtitle: string;
    goal: number;
    raised: number;
    deadline: string;
    donors: number;
    daysLeft: number;
    isZakatEligible: boolean;
    videoUrl: string;
}

export interface ImpactTier {
    amount: number;
    title: string;
    description: string;
    icon: LucideIcon;
}

export interface Donor {
    name: string;
    amount: number;
    message: string;
}

export interface CampaignUpdate {
    date: string;
    title: string;
    content: string;
    htmlContent: string;
    type: 'milestone' | 'update';
}

export interface FAQ {
    question: string;
    answer: string;
    isZakatEligible?: boolean;
}

// ============================================
// Static Data
// ============================================

export const campaignData: CampaignData = {
    title: 'New Minaret Construction',
    subtitle: 'A beacon of light rising above our community',
    goal: 250000,
    raised: 180000,
    deadline: 'Ramadan 2026',
    donors: 342,
    daysLeft: 45,
    isZakatEligible: false,
    videoUrl: '#'
};

export const impactTiers: ImpactTier[] = [
    { amount: 100, title: 'Prayer Mat Sponsor', description: 'Buys 1 Prayer Mat (Musalla)', icon: Gift },
    { amount: 250, title: 'Brick Builder', description: 'Buys 100 Bricks', icon: Building2 },
    { amount: 1000, title: 'Library Patron', description: 'Names a Bookshelf in the Library', icon: BookOpen },
    { amount: 5000, title: 'Wall of Honor', description: 'Permanent Recognition on Honor Wall', icon: Star }
];

export const recentDonors: Donor[] = [
    { name: 'Anonymous', amount: 500, message: 'May Allah accept.' },
    { name: 'The Khan Family', amount: 1000, message: '' },
    { name: 'Sister Sarah', amount: 50, message: '' },
    { name: 'Brother Ahmed', amount: 250, message: 'For my late father.' },
    { name: 'Anonymous', amount: 100, message: 'Sadaqah Jariyah' },
    { name: 'The Patel Family', amount: 2500, message: '' },
    { name: 'Sister Fatima', amount: 75, message: '' },
    { name: 'Anonymous', amount: 1000, message: 'Alhamdulillah' }
];

export const campaignUpdates: CampaignUpdate[] = [
    {
        date: 'January 15, 2026',
        title: 'Initial Groundbreaking',
        content: 'We are thrilled to announce that site preparation has begun! The heavy machinery arrived this morning, and excavation for the foundation is underway. Your generous contributions are already turning dust into destiny.',
        htmlContent: '<p>We are thrilled to announce that <strong>site preparation has begun!</strong></p><p>The heavy machinery arrived this morning, and excavation for the foundation is underway.</p>',
        type: 'milestone'
    },
    {
        date: 'December 20, 2025',
        title: 'Final Permits Approved',
        content: 'Alhamdulillah, the city council has officially approved our revised architectural plans. This was the final hurdle before construction could commence.',
        htmlContent: '<p>Alhamdulillah, the city council has officially approved our revised architectural plans. This was the final hurdle before construction could commence.</p>',
        type: 'update'
    },
    {
        date: 'October 1, 2025',
        title: 'Community Vision Realized',
        content: 'A look back at our journey.',
        htmlContent: `<p>We are humbled to share a <strong>visual journey</strong> of how far we have come.</p>
            <div class="${styles.videoWrapper}">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/jI0Ib9vp-kY?si=TEST_ID" title="Campaign Journey Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>`,
        type: 'milestone'
    },
    {
        date: 'November 10, 2025',
        title: 'Goal: 50% Funding Reached',
        content: 'Thanks to our incredible community, we have hit the halfway mark of our fundraising goal!',
        htmlContent: '<p>Thanks to our incredible community, we have hit the <strong>halfway mark</strong> of our fundraising goal!</p>',
        type: 'milestone'
    }
];

export const faqData: FAQ[] = [
    {
        question: 'Is this Zakat eligible?',
        answer: 'No, this campaign is for construction and infrastructure, which is not Zakat-eligible. However, your contribution counts as Sadaqah Jariyah (continuous charity).',
        isZakatEligible: false
    },
    { question: 'When will construction begin?', answer: 'Construction is scheduled to begin in Spring 2026, InshaAllah. We aim to complete the minaret before Ramadan 2027.' },
    { question: 'Can I pledge now and pay later?', answer: 'Yes! You can make a pledge commitment and fulfill it over time. Contact our donation office to set up a payment plan.' },
    { question: "Will my name be displayed publicly?", answer: 'Only if you choose to. During the donation process, you can select to remain anonymous or have your name displayed on our Wall of Honor.' },
    { question: "Can I donate in someone's memory?", answer: 'Absolutely. You can dedicate your donation in memory of a loved one, and we will include their name in our prayers during the construction.' }
];

export const presetAmounts = [50, 100, 500, 1000];

// ============================================
// Utility Functions
// ============================================

export function formatCurrency(amount: number): string {
    if (amount >= 1000000) return `$${(amount / 1000000).toFixed(1)}M`;
    if (amount >= 1000) return `$${(amount / 1000).toFixed(0)}K`;
    return `$${amount}`;
}
