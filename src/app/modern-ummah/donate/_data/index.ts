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
    Clock
} from 'lucide-react';

export const FEATURED_CAMPAIGN = {
    title: 'Phase 2: The Expansion Project',
    description: 'Expanding our prayer hall to accommodate 2,000 worshippers.',
    raised: 1200000,
    goal: 2000000,
    percentage: 60,
    image: '/images/expansion-render.jpg' // Placeholder or use gradient
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

export const formatCurrency = (val: number) => {
    if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
    if (val >= 1000) return `$${(val / 1000).toFixed(0)}K`;
    return `$${val}`;
};
