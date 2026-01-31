import {
    Heart,
    Shield,
    BadgeCheck,
    CreditCard,
    Coins,
    Building2,
    Wheat,
    BookOpen,
    Users,
    FileText,
    CheckCircle2,
    Clock,
    Play
} from 'lucide-react';

export const FEATURED_CAMPAIGN = {
    title: 'Phase 2: The Expansion Project',
    description: 'Expanding our prayer hall to accommodate 2,000 worshippers.',
    raised: 1200000,
    goal: 2000000,
    percentage: 60,
    image: '/images/expansion-render.jpg' // Placeholder
};

export const CATEGORIES = [
    {
        id: 'zakat',
        title: 'Zakat al-Maal',
        tag: 'Obligatory',
        stat: 'Purify your wealth',
        icon: Coins,
        color: 'emerald',
        action: 'Calculate & Pay'
    },
    {
        id: 'pantry',
        title: 'The Food Pantry',
        tag: 'Sadaqah',
        stat: 'Feed a family for $50',
        icon: Wheat,
        color: 'amber',
        action: 'Donate Now'
    },
    {
        id: 'academy',
        title: 'Quran Academy',
        tag: 'Education',
        stat: 'Sponsor a Student ($100/mo)',
        icon: BookOpen,
        color: 'blue',
        action: 'Sponsor'
    }
];

export const CAMPAIGNS = [
    {
        id: 'expansion',
        title: 'Masjid Expansion Phase 2',
        description: 'Expanding our prayer hall to accommodate 2,000 worshippers',
        raised: 1200000,
        goal: 2000000,
        deadline: 'Dec 2026',
        status: 'active',
        category: 'Building',
        icon: Building2,
        color: 'emerald',
        badge: 'Priority'
    },
    {
        id: 'food-drive',
        title: 'Ramadan Food Drive 2026',
        description: 'Providing iftar meals and food baskets for 500 families',
        raised: 35000,
        goal: 75000,
        deadline: 'Mar 2026',
        status: 'active',
        category: 'Charity',
        icon: Wheat,
        color: 'amber',
        badge: 'Seasonal'
    },
    {
        id: 'scholarship',
        title: 'Youth Scholarship Fund',
        description: 'Supporting Islamic education for underprivileged students',
        raised: 28000,
        goal: 50000,
        deadline: 'Ongoing',
        status: 'active',
        category: 'Education',
        icon: BookOpen,
        color: 'blue',
        badge: 'Zakat Eligible'
    },
    {
        id: 'relief',
        title: 'Emergency Relief - Palestine',
        description: 'Urgent humanitarian aid for families in need',
        raised: 120000,
        goal: 150000,
        deadline: 'Ongoing',
        status: 'urgent',
        category: 'Emergency',
        icon: Heart,
        color: 'rose',
        badge: 'Urgent'
    },
    {
        id: 'minaret',
        title: 'New Minaret Installation',
        description: 'Installing a beautiful minaret with LED lighting',
        raised: 45000,
        goal: 80000,
        deadline: 'Jun 2026',
        status: 'active',
        category: 'Building',
        icon: Building2,
        color: 'emerald',
        badge: 'Building'
    },
    {
        id: 'renovation',
        title: 'Community Center Renovation',
        description: 'Upgrading the community hall with new facilities',
        raised: 65000,
        goal: 100000,
        deadline: 'Sep 2026',
        status: 'active',
        category: 'Building',
        icon: Users,
        color: 'teal',
        badge: 'Community'
    }
];

export const TRUST_STATS = [
    { stat: '100%', label: 'of Zakat goes directly to recipients', icon: Shield },
    { stat: '$500K', label: 'distributed in 2025', icon: Users },
    { stat: '501(c)(3)', label: 'Tax Deductible', icon: BadgeCheck },
    { stat: 'Audited', label: 'Financials Available', icon: FileText }
];

export const TRUST_BADGES = [
    { icon: Shield, label: 'Secure SSL Payment' },
    { icon: BadgeCheck, label: 'Tax Deductible (501c3)' },
    { icon: CheckCircle2, label: '100% Zakat Policy' }
];

/* --- Campaign Page Specific Data --- */

export interface CampaignData {
    title: string;
    subtitle: string;
    raised: number;
    goal: number;
    donors: number;
    daysLeft: number;
}

export const CAMPAIGN_DATA: CampaignData = {
    title: "Phase 2: The Expansion Project",
    subtitle: "Help us build a sanctuary that will serve our growing community for generations to come. Every brick counts.",
    raised: 1245000,
    goal: 2000000,
    donors: 1240,
    daysLeft: 45
};

export const IMPACT_TIERS = [
    { amount: 100, title: "Prayer Mat Sponsor", description: "Secure a spot for a worshipper in the new hall.", icon: Users },
    { amount: 500, title: "Brick Builder", description: "Your name in the foundation of the house of Allah.", icon: Building2 },
    { amount: 1000, title: "Classroom Patron", description: "Equip a classroom for our youth education.", icon: BookOpen },
    { amount: 5000, title: "Legacy Founder", description: "Leave a lasting continuous charity (Sadaqah Jariyah).", icon: Heart }
];

export interface CampaignUpdate {
    date: string;
    title: string;
    htmlContent: string;
    media?: {
        type: 'image' | 'video';
        url: string;
        caption?: string;
    };
}

export const CAMPAIGN_UPDATES: CampaignUpdate[] = [
    {
        date: 'October 15, 2025',
        title: 'Steel Framework Completed',
        htmlContent: '<p>Alhamdulillah, the main steel framework for the minaret has been successfully erected. We are now preparing for the masonry work.</p>',
        media: {
            type: 'image',
            url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
            caption: 'Steel structure reaching 85ft'
        }
    },
    {
        date: 'August 15, 2025',
        title: 'Architectural Plans Finalized',
        htmlContent: `
            <p>We are thrilled to share the final architectural renderings for the expansion. This design incorporates:</p>
            <ul class="list-disc pl-5 space-y-2 my-4">
                <li><strong>Sustainable Materials:</strong> Using locally sourced limestone.</li>
                <li><strong>Natural Light:</strong> Skylights designed to maximize daylight during Dhuhr and Asr.</li>
                <li><strong>Community Courtyard:</strong> A new open-air space for community gatherings.</li>
            </ul>
            <blockquote>
                "The new design faithfully reflects our tradition while embracing modern sustainability standards." 
                <br/><cite>— Lead Architect, Sarah Khan</cite>
            </blockquote>
            <p className="mt-4">Check out the full gallery below to see the future of our campus.</p>
        `,
        media: {
            type: 'image',
            url: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=2070&auto=format&fit=crop',
            caption: 'Final approved architectural concept'
        }
    },
    {
        date: 'September 1, 2025',
        title: 'Groundbreaking Ceremony',
        htmlContent: '<p>A historic day for our community as we broke ground on the expansion project. Community leaders and city officials joined us for this momentous occasion.</p>'
    }
];

export interface FAQ {
    question: string;
    answer: string;
}

export const FAQ_DATA: FAQ[] = [
    {
        question: "Is my donation tax-deductible?",
        answer: "Yes, Duha Masjid is a registered 501(c)(3) non-profit organization. We will provide a tax receipt for all donations."
    },
    {
        question: "Can I donate Zakat to this project?",
        answer: "This specific campaign is for the building fund (Sadaqah Jariyah). Zakat funds are kept separate and are strictly for Zakat-eligible categories (e.g., poor, needy, travelers). Please check our Zakat fund page or select 'Zakat' in the donation widget if you intend to pay Zakat."
    },
    {
        question: "How can I start a recurring monthly donation?",
        answer: "Simply toggle the donation type to 'Monthly' in the donation widget. You can manage or cancel your subscription at any time via the Donor Portal."
    }
];

export const RECENT_DONORS = [
    { name: 'Brother A.', amount: 100, timeAgo: '2m ago' },
    { name: 'Sister F.', amount: 500, timeAgo: '15m ago' },
    { name: 'Anonymous', amount: 50, timeAgo: '1h ago' },
    { name: 'Family of H.', amount: 1000, timeAgo: '3h ago' },
    { name: 'Brother K.', amount: 250, timeAgo: '5h ago' }
];

export const PRESET_AMOUNTS = [50, 100, 250, 500, 1000, 2500];

export const formatCurrency = (val: number) => {
    if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
    if (val >= 1000) return `$${(val / 1000).toFixed(0)}K`;
    return `$${val}`;
};

export const calculateProgress = (raised: number, goal: number) => {
    return Math.min(Math.round((raised / goal) * 100), 100);
};

export type ImpactTier = typeof IMPACT_TIERS[number];
