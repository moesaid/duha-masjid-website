import { Vote, Calendar as CalendarIcon, Award, MessageCircle, Gift, Heart, LucideIcon } from 'lucide-react';
import { FREE_AGE_THRESHOLD, MEMBERSHIP_FEE } from '@/lib/membership-config';

// ============================================
// Types
// ============================================

export interface Benefit {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface FamilyMember {
    id: string;
    fullName: string;
    dateOfBirth: Date | undefined;
    idDocument: File | null;
    residenceProof: File | null;
}

// ============================================
// Static Data
// ============================================

export const benefits: Benefit[] = [
    {
        icon: Vote,
        title: 'Voting Rights',
        description: 'Participate in community elections and shape the future leadership of our masjid.'
    },
    {
        icon: CalendarIcon,
        title: 'Event Discounts',
        description: 'Receive discounts on facility rentals, banquets, and ticketed community events.'
    },
    {
        icon: Award,
        title: 'Program Priority',
        description: 'Priority registration for popular classes, camps, and limited-enrollment programs.'
    },
    {
        icon: MessageCircle,
        title: 'Direct Communication',
        description: 'Access to member-only announcements, town halls, and feedback channels.'
    },
    {
        icon: Gift,
        title: 'Family Benefits',
        description: 'Family memberships cover all household members for education and youth programs.'
    },
    {
        icon: Heart,
        title: 'Community Support',
        description: 'Your dues directly support masjid operations, programs, and community services.'
    }
];

export const faqs: FAQ[] = [
    {
        question: 'Who can become a member?',
        answer: 'Any Muslim who agrees to our masjid bylaws and wishes to contribute to our community can apply for membership. We welcome all backgrounds and walks of life.'
    },
    {
        question: 'What documents do I need?',
        answer: 'Each member will need a valid government-issued ID (driver\'s license, passport, or state ID) and proof of residence (utility bill, bank statement, or lease agreement).'
    },
    {
        question: 'Is there a fee for youth members?',
        answer: `Members under ${FREE_AGE_THRESHOLD} years old are free. Adult members pay a one-time annual fee of $${MEMBERSHIP_FEE}.`
    },
    {
        question: 'What if I cannot afford the membership fee?',
        answer: 'We never want finances to be a barrier. Please contact our office confidentially to discuss scholarship options.'
    }
];
