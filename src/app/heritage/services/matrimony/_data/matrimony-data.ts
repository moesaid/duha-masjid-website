// Matrimony Page Data
// Types and static data for the Nikkah Facilitation Program

import { LucideIcon, Heart, Shield, Users, BookOpen, Calendar, MessageCircle, CheckCircle } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface ServiceFeature {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface SuccessStory {
    names: string;
    marriedYear: string;
    quote: string;
}

export interface ProcessStep {
    step: number;
    title: string;
    description: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

// ============================================
// Service Features
// ============================================

export const features: ServiceFeature[] = [
    {
        id: 'matching',
        icon: Heart,
        title: 'Guided Matching',
        description: 'Our experienced team helps connect compatible individuals based on values, goals, and compatibility.'
    },
    {
        id: 'privacy',
        icon: Shield,
        title: 'Complete Privacy',
        description: 'All information is kept strictly confidential. Only matches approved by both parties are introduced.'
    },
    {
        id: 'support',
        icon: Users,
        title: 'Family Involvement',
        description: 'We encourage and facilitate proper family involvement throughout the process.'
    },
    {
        id: 'premarital',
        icon: BookOpen,
        title: 'Pre-Marital Counseling',
        description: 'All engaged couples receive Islamic counseling sessions to prepare for a blessed marriage.'
    },
    {
        id: 'events',
        icon: Calendar,
        title: 'Community Events',
        description: 'Halal, chaperoned events where families can meet in a comfortable Islamic environment.'
    },
    {
        id: 'guidance',
        icon: MessageCircle,
        title: 'Ongoing Guidance',
        description: 'Our scholars and counselors are available for advice even after the nikkah.'
    }
];

// ============================================
// Process Steps
// ============================================

export const processSteps: ProcessStep[] = [
    {
        step: 1,
        title: 'Submit Application',
        description: 'Complete our confidential profile form with information about yourself and what you seek in a spouse.'
    },
    {
        step: 2,
        title: 'Initial Meeting',
        description: 'Meet with our matrimony committee for a brief interview to verify information and understand your needs.'
    },
    {
        step: 3,
        title: 'Receive Matches',
        description: 'Our team identifies potential matches based on compatibility. You review and approve before any introduction.'
    },
    {
        step: 4,
        title: 'Family Introduction',
        description: 'Approved matches meet with family involvement in a halal setting facilitated by the masjid.'
    },
    {
        step: 5,
        title: 'Pre-Marital Counseling',
        description: 'Once both parties agree, complete our pre-marital counseling program.'
    },
    {
        step: 6,
        title: 'Nikkah Ceremony',
        description: 'Celebrate your nikkah at our masjid with full support and coordination.'
    }
];

// ============================================
// Success Stories
// ============================================

export const successStories: SuccessStory[] = [
    {
        names: 'Ahmad & Fatima',
        marriedYear: 'Married 2023',
        quote: "The program made everything so comfortable and halal. Our families felt at ease and we're blessed to have found each other through this process."
    },
    {
        names: 'Omar & Sarah',
        marriedYear: 'Married 2022',
        quote: "The pre-marital counseling was invaluable. It prepared us for marriage in ways we hadn't even considered. JazakAllahu khair to the entire team."
    },
    {
        names: 'Yusuf & Amira',
        marriedYear: 'Married 2024',
        quote: "We were both hesitant at first, but the respectful and Islamic approach made all the difference. Allah brought us together through this blessed program."
    }
];

// ============================================
// FAQs
// ============================================

export const faqs: FAQ[] = [
    {
        question: 'Is there a fee for the matrimony service?',
        answer: 'There is a nominal registration fee of $50 to cover administrative costs. All other services, including counseling, are free.'
    },
    {
        question: 'How is privacy protected?',
        answer: 'Your information is only shared with potential matches you personally approve. Our committee maintains strict confidentiality.'
    },
    {
        question: 'Can non-community members register?',
        answer: 'Yes, the service is open to all Muslims. We do require at least one in-person meeting at our masjid.'
    },
    {
        question: 'Is family involvement required?',
        answer: 'We strongly encourage family involvement as it aligns with Islamic values. However, we understand every situation is different.'
    }
];

// ============================================
// Stats
// ============================================

export const programStats = {
    successfulMatches: '75+',
    activeProfiles: '200+',
    yearsRunning: '8+',
    satisfactionRate: '95%'
};
