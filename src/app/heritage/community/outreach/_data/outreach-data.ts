import { LucideIcon, Globe, Users, MessageCircle, Building, BookOpen, Heart, Handshake } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface Service {
    icon: LucideIcon;
    title: string;
    description: string;
    schedule: string;
    cta: string;
}

export interface EventFeature {
    icon: LucideIcon;
    label: string;
}

export interface Resource {
    title: string;
    subtitle: string;
    format: string;
    pages: string;
    color: 'green' | 'gold';
}

export interface Activity {
    icon: LucideIcon;
    label: string;
}

export interface ImpactStat {
    number: string;
    label: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

// ============================================
// Static Data
// ============================================

export const services: Service[] = [
    {
        icon: Building,
        title: 'Mosque Tours',
        description: 'Experience our sacred space with a guided tour. Perfect for school groups, civic organizations, and neighbors.',
        schedule: 'Saturdays at 11:00 AM',
        cta: 'Request a Tour'
    },
    {
        icon: MessageCircle,
        title: 'Speakers Bureau',
        description: 'Invite a community ambassador to speak at your school, workplace, or organization about Islam and Muslims.',
        schedule: 'By Request',
        cta: 'Request a Speaker'
    },
    {
        icon: BookOpen,
        title: 'Islam 101',
        description: 'Monthly open house session for community members interested in learning the basics of Islam.',
        schedule: 'First Sunday Monthly',
        cta: 'Register'
    }
];

export const eventFeatures: EventFeature[] = [
    { icon: Users, label: 'Guided Tours' },
    { icon: BookOpen, label: 'Calligraphy Workshop' },
    { icon: Heart, label: 'Henna Art' },
    { icon: Globe, label: 'Food Bazaar' }
];

export const resources: Resource[] = [
    {
        title: 'What Do Muslims Believe?',
        subtitle: 'Core Beliefs & Practices',
        format: 'PDF Guide',
        pages: '12 pages',
        color: 'green'
    },
    {
        title: 'Jesus in Islam',
        subtitle: 'A Shared Reverence',
        format: 'PDF Guide',
        pages: '8 pages',
        color: 'gold'
    },
    {
        title: 'Women in Islam',
        subtitle: 'Rights, Roles & Reality',
        format: 'PDF Guide',
        pages: '16 pages',
        color: 'green'
    }
];

export const activities: Activity[] = [
    { icon: Globe, label: 'Interfaith Dialogue' },
    { icon: Handshake, label: 'Civic Partnerships' },
    { icon: Heart, label: 'Community Service' }
];

export const impactStats: ImpactStat[] = [
    { number: '2,500+', label: 'Visitors Welcomed' },
    { number: '85', label: 'School Tours' },
    { number: '40+', label: 'Partner Organizations' },
    { number: '12', label: 'Years Connecting' }
];

export const testimonials: Testimonial[] = [
    {
        quote: "Our school group visited the masjid and it was transformative. The hospitality and warmth we received opened our students' eyes to a beautiful community.",
        author: "Sarah Mitchell",
        role: "Principal, Springfield Elementary"
    },
    {
        quote: "The speakers bureau provided our workplace with an informative and heartfelt presentation. Our team left with a deeper understanding and appreciation.",
        author: "David Chen",
        role: "HR Director, Tech Solutions Inc."
    },
    {
        quote: "As a longtime Springfield resident, I'm grateful for neighbors who open their doors with such genuine hospitality. The open house events are a community treasure.",
        author: "Pastor James Thompson",
        role: "Unity Church of Springfield"
    }
];

export const partners: string[] = [
    'Springfield Interfaith Council',
    'Local Schools District',
    'Springfield Police Dept.',
    'Chamber of Commerce',
    'St. Mary\'s Church',
    'Temple Beth Israel'
];
