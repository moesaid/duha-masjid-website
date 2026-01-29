// Financial Aid Page Data
// Types and static data for Mercy Fund

import { LucideIcon, Heart, Users, Home, GraduationCap, Stethoscope, ShoppingBag, Shield, Clock, CheckCircle, HelpCircle } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface AssistanceProgram {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
    eligibility: string[];
    maxAmount: string;
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
// Assistance Programs
// ============================================

export const programs: AssistanceProgram[] = [
    {
        id: 'emergency',
        icon: Shield,
        title: 'Emergency Assistance',
        description: 'Immediate help for families facing urgent financial crises such as job loss, medical emergencies, or unexpected bills.',
        eligibility: [
            'Must be a community member for at least 3 months',
            'Facing immediate financial hardship',
            'Documentation of emergency situation'
        ],
        maxAmount: 'Up to $1,500'
    },
    {
        id: 'rent',
        icon: Home,
        title: 'Rent & Utility Assistance',
        description: 'Support for families at risk of eviction or utility disconnection.',
        eligibility: [
            'Eviction or disconnection notice required',
            'Proof of income and expenses',
            'One-time assistance per household per year'
        ],
        maxAmount: 'Up to $2,000'
    },
    {
        id: 'education',
        icon: GraduationCap,
        title: 'Education Support',
        description: 'Help with tuition, books, and essential school supplies for students in need.',
        eligibility: [
            'Enrolled in accredited school or program',
            'Demonstrated financial need',
            'Academic progress requirements'
        ],
        maxAmount: 'Up to $1,000'
    },
    {
        id: 'medical',
        icon: Stethoscope,
        title: 'Medical Assistance',
        description: 'Support for medical bills, prescriptions, and healthcare-related expenses.',
        eligibility: [
            'Medical bills or prescription costs',
            'No or insufficient insurance',
            'Medical necessity documentation'
        ],
        maxAmount: 'Up to $1,500'
    },
    {
        id: 'food',
        icon: ShoppingBag,
        title: 'Food Security',
        description: 'Grocery assistance and food pantry access for families struggling to make ends meet.',
        eligibility: [
            'Open to all community members in need',
            'No documentation required for food pantry',
            'Monthly grocery card available'
        ],
        maxAmount: 'Monthly support available'
    }
];

// ============================================
// Application Process
// ============================================

export const applicationProcess: ProcessStep[] = [
    {
        step: 1,
        title: 'Complete Application',
        description: 'Fill out our confidential application form with your information and the type of assistance needed.'
    },
    {
        step: 2,
        title: 'Attach Documentation',
        description: 'Provide supporting documents such as bills, notices, or other relevant paperwork.'
    },
    {
        step: 3,
        title: 'Review Process',
        description: 'Our Mercy Fund committee meets weekly to review applications with complete confidentiality.'
    },
    {
        step: 4,
        title: 'Receive Assistance',
        description: 'Approved assistance is typically provided within 3-5 business days.'
    }
];

// ============================================
// FAQs
// ============================================

export const faqs: FAQ[] = [
    {
        question: 'Who is eligible for financial assistance?',
        answer: 'Our programs are available to community members who are experiencing financial hardship. Each program has specific eligibility requirements listed above.'
    },
    {
        question: 'Is my application confidential?',
        answer: 'Absolutely. All applications are handled with complete confidentiality. Only the Mercy Fund committee members have access to application details.'
    },
    {
        question: 'How long does the process take?',
        answer: 'Most applications are reviewed within one week. Emergency situations are prioritized and may be processed within 24-48 hours.'
    },
    {
        question: 'Can I apply for multiple programs?',
        answer: 'Yes, you may apply for any programs that fit your situation. Each application is reviewed independently.'
    },
    {
        question: 'How can I donate to help others?',
        answer: 'You can contribute to the Mercy Fund through our general donation page. 100% of Mercy Fund donations go directly to assisting families in need.'
    }
];

// ============================================
// Stats
// ============================================

export const fundStats = {
    familiesHelped: '500+',
    amountDistributed: '$250,000+',
    yearlyApplications: '200+',
    successRate: '85%'
};
