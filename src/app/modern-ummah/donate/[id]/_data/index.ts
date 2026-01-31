import { Gift, Building2, BookOpen, Star, LucideIcon, Heart, Share2, Calendar } from 'lucide-react';

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
    coverImage?: string;
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
    timeAgo: string;
}

export interface CampaignUpdate {
    date: string;
    title: string;
    content: string;
    htmlContent: string;
    type: 'milestone' | 'update';
    media?: {
        type: 'image' | 'video';
        url: string;
        caption?: string;
    };
}

export interface FAQ {
    question: string;
    answer: string;
    isZakatEligible?: boolean;
}

// ============================================
// Static Data (Mock for Prototype)
// ============================================

export const CAMPAIGN_DATA: CampaignData = {
    title: 'New Minaret Construction',
    subtitle: 'A beacon of light rising above our community, calling the faithful to success.',
    goal: 250000,
    raised: 182450,
    deadline: 'Ramadan 2026',
    donors: 342,
    daysLeft: 45,
    isZakatEligible: false,
    videoUrl: 'https://www.youtube.com/watch?v=HXb-B8exuYE',
    coverImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop'
};

export const IMPACT_TIERS: ImpactTier[] = [
    { amount: 100, title: 'Prayer Mat Sponsor', description: 'Sponsor one musalla for a worshipper.', icon: Gift },
    { amount: 250, title: 'Brick Builder', description: 'Be part of the foundation with 100 bricks.', icon: Building2 },
    { amount: 1000, title: 'Library Patron', description: 'Dedicate a bookshelf in the new library.', icon: BookOpen },
    { amount: 5000, title: 'Wall of Honor', description: 'Permanent recognition in the main lobby.', icon: Star }
];

export const RECENT_DONORS: Donor[] = [
    { name: 'Anonymous', amount: 500, message: 'May Allah accept.', timeAgo: '2m ago' },
    { name: 'The Khan Family', amount: 1000, message: 'For our parents.', timeAgo: '15m ago' },
    { name: 'Sister Sarah', amount: 50, message: '', timeAgo: '1h ago' },
    { name: 'Brother Ahmed', amount: 250, message: 'Sadaqah Jariyah.', timeAgo: '3h ago' },
    { name: 'Anonymous', amount: 100, message: '', timeAgo: '5h ago' }
];

export const CAMPAIGN_UPDATES: CampaignUpdate[] = [
    {
        date: 'Oct 01, 2025',
        title: 'Community Town Hall Recording',
        content: 'Watch the full recording of our town hall meeting where we discussed the new expansion details.',
        htmlContent: '<p>If you missed our town hall, you can watch the full recording here. We answer key questions about parking, timeline, and minimizing disruption during construction.</p>',
        type: 'update',
        media: {
            type: 'video',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=adk123', // Placeholder embed
            caption: 'Town Hall Q&A Session'
        }
    },
    {
        date: 'Jan 15, 2026',
        title: 'Initial Groundbreaking',
        content: 'We are thrilled to announce that site preparation has begun! The heavy machinery arrived this morning.',
        htmlContent: '<p>We are thrilled to announce that <strong>site preparation has begun!</strong></p><p>The heavy machinery arrived this morning, and excavation for the foundation is underway.</p>',
        type: 'milestone'
    },
    {
        date: 'Dec 20, 2025',
        title: 'Final Permits Approved',
        content: 'Alhamdulillah, the city council has officially approved our revised architectural plans.',
        htmlContent: '<p>Alhamdulillah, the city council has officially approved our revised architectural plans. This was the final hurdle before construction could commence.</p>',
        type: 'update'
    },
    {
        date: 'Aug 15, 2025',
        title: 'Architectural Plans Finalized',
        content: 'We are thrilled to share the final architectural renderings for the expansion.',
        htmlContent: `
            <p>We are thrilled to share the final architectural renderings for the expansion. This design incorporates:</p>
            <ul class="list-disc pl-5 space-y-2 my-4">
                <li><strong>Sustainable Materials:</strong> Using locally sourced limestone.</li>
                <li><strong>Natural Light:</strong> Skylights designed to maximize daylight during Dhuhr and Asr.</li>
                <li><strong>Community Courtyard:</strong> A new open-air space for community gatherings.</li>
            </ul>
            <blockquote class="border-l-4 border-emerald-500 pl-4 py-2 my-4 italic bg-slate-50 rounded-r-lg">
                "The new design faithfully reflects our tradition while embracing modern sustainability standards." 
                <br/><span class="text-sm font-bold not-italic mt-2 block">— Lead Architect, Sarah Khan</span>
            </blockquote>
            <p class="mt-4">Check out the full gallery below to see the future of our campus.</p>
        `,
        type: 'milestone',
        media: {
            type: 'image',
            url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
            caption: 'Final approved architectural concept'
        }
    }
];

export const FAQ_DATA: FAQ[] = [
    {
        question: 'Is this campaign Zakat eligible?',
        answer: 'No, this construction project is Sadaqah Jariyah. Zakat must be given to specific categories of people (like the poor/needy) and cannot generally be used for mosque construction.',
        isZakatEligible: false
    },
    {
        question: 'When will construction start?',
        answer: 'Construction is scheduled to begin in Spring 2026, InshaAllah. We aim to complete the structure before Ramadan 2027.'
    },
    {
        question: 'Can I make a pledge?',
        answer: 'Yes! Please contact the treasury office to set up a pledge payment plan for amounts over $1,000.'
    }
];

export const PRESET_AMOUNTS = [50, 100, 250, 500, 1000, 5000];

export const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
};

export const calculateProgress = (raised: number, goal: number) => Math.min(100, Math.round((raised / goal) * 100));
