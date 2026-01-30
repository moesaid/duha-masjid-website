import { LucideIcon, CheckCircle, TrendingUp, Sparkles, Calendar } from 'lucide-react';

export interface Highlight {
    id: string;
    icon: LucideIcon;
    committee: string;
    achievement: string;
}

export const monthlyHighlights: Highlight[] = [
    {
        id: '1',
        icon: CheckCircle,
        committee: 'Maintenance',
        achievement: 'New energy-efficient lighting installed in the North Wing.',
    },
    {
        id: '2',
        icon: Sparkles,
        committee: 'Education',
        achievement: 'Curriculum finalized for the Spring semester programs.',
    },
    {
        id: '3',
        icon: TrendingUp,
        committee: 'Membership',
        achievement: 'Welcomed 23 new families to our community this month.',
    },
    {
        id: '4',
        icon: Calendar,
        committee: 'Youth',
        achievement: 'Successfully launched the weekly basketball program.',
    },
];
