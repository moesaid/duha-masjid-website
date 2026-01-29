import { LucideIcon, Users, Building, Scale, Heart } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface Category {
    id: string;
    name: string;
    icon: LucideIcon;
}

export interface Document {
    id: number;
    category: string;
    title: string;
    description: string;
    lastUpdated: string;
    fileSize: string;
    downloadUrl: string;
}

export interface ConductRule {
    number: number;
    title: string;
    description: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

// ============================================
// Static Data
// ============================================

export const categories: Category[] = [
    { id: 'membership', name: 'Membership', icon: Users },
    { id: 'facility', name: 'Facility Use', icon: Building },
    { id: 'conduct', name: 'Code of Conduct', icon: Scale },
    { id: 'marriage', name: 'Marriage Services', icon: Heart },
];

export const documents: Document[] = [
    {
        id: 1,
        category: 'membership',
        title: 'Membership Application Form',
        description: 'Application form for becoming a registered member of the masjid.',
        lastUpdated: 'January 2026',
        fileSize: '1.2 MB',
        downloadUrl: '/documents/membership-application.pdf',
    },
    {
        id: 2,
        category: 'membership',
        title: 'Voting Member Guidelines',
        description: 'Requirements and responsibilities for voting membership status.',
        lastUpdated: 'December 2025',
        fileSize: '850 KB',
        downloadUrl: '/documents/voting-guidelines.pdf',
    },
    {
        id: 3,
        category: 'membership',
        title: 'Annual Dues Structure',
        description: 'Breakdown of membership dues and payment options.',
        lastUpdated: 'January 2026',
        fileSize: '420 KB',
        downloadUrl: '/documents/dues-structure.pdf',
    },
    {
        id: 4,
        category: 'facility',
        title: 'Hall Rental Agreement',
        description: 'Terms and conditions for renting the community hall.',
        lastUpdated: 'November 2025',
        fileSize: '2.1 MB',
        downloadUrl: '/documents/hall-rental.pdf',
    },
    {
        id: 5,
        category: 'facility',
        title: 'Facility Usage Rules',
        description: 'General rules for using masjid facilities and common areas.',
        lastUpdated: 'October 2025',
        fileSize: '680 KB',
        downloadUrl: '/documents/facility-rules.pdf',
    },
    {
        id: 6,
        category: 'facility',
        title: 'Parking Regulations',
        description: 'Parking guidelines and designated areas for visitors.',
        lastUpdated: 'September 2025',
        fileSize: '350 KB',
        downloadUrl: '/documents/parking.pdf',
    },
    {
        id: 7,
        category: 'conduct',
        title: 'Community Code of Conduct',
        description: 'Complete behavioral guidelines for all community members.',
        lastUpdated: 'January 2026',
        fileSize: '1.5 MB',
        downloadUrl: '/documents/code-of-conduct.pdf',
    },
    {
        id: 8,
        category: 'conduct',
        title: 'Child Protection Policy',
        description: 'Safeguarding policies for youth programs and activities.',
        lastUpdated: 'December 2025',
        fileSize: '2.3 MB',
        downloadUrl: '/documents/child-protection.pdf',
    },
    {
        id: 9,
        category: 'marriage',
        title: 'Nikah Application Package',
        description: 'Complete application forms for Islamic marriage services.',
        lastUpdated: 'January 2026',
        fileSize: '1.8 MB',
        downloadUrl: '/documents/nikah-application.pdf',
    },
    {
        id: 10,
        category: 'marriage',
        title: 'Pre-Marital Counseling Guide',
        description: 'Information about required counseling sessions before nikah.',
        lastUpdated: 'November 2025',
        fileSize: '920 KB',
        downloadUrl: '/documents/premarital-counseling.pdf',
    },
];

export const codeOfConductRules: ConductRule[] = [
    {
        number: 1,
        title: 'Respect for Neighbors',
        description: 'Keep noise levels reasonable, especially during early morning and late night prayers. Park only in designated areas and never block neighboring driveways.',
    },
    {
        number: 2,
        title: 'Islamic Dress Code',
        description: 'All visitors are expected to dress modestly. Loose, non-transparent clothing that covers the body appropriately. Head coverings are required for sisters in prayer areas.',
    },
    {
        number: 3,
        title: 'Phone & Device Etiquette',
        description: 'Silence all devices upon entering the prayer hall. Photography and video recording require prior permission from the administration.',
    },
    {
        number: 4,
        title: 'Cleanliness & Wudu Areas',
        description: 'Keep wudu areas clean and dry. Remove excess water and dispose of paper towels properly. Report maintenance issues immediately.',
    },
    {
        number: 5,
        title: 'Children Supervision',
        description: 'Parents are responsible for supervising their children at all times. Children should not run or play in prayer areas or hallways during programs.',
    },
];

export const faqs: FAQ[] = [
    {
        question: 'How do I become a voting member?',
        answer: 'To become a voting member, you must have been a registered member in good standing for at least 12 consecutive months, attended at least 50% of general body meetings, and paid all dues on time. Submit your voting member application to the secretary for board review.',
    },
    {
        question: 'Can I rent the hall for a birthday party?',
        answer: 'The community hall can be rented for private events including birthday parties, but with conditions. Events must be Islamic-appropriate (no music with instruments, gender-segregated if mixed attendance, halal food only). Rental rates vary based on membership status.',
    },
    {
        question: 'What documents are required for Nikah?',
        answer: 'Required documents include: valid government ID for both parties, divorce decree (if applicable), death certificate of former spouse (if applicable), signed parental/guardian consent (if under 21), and completion of our pre-marital counseling program.',
    },
    {
        question: 'How far in advance should I book the hall?',
        answer: 'For large events (100+ guests), we recommend booking at least 3 months in advance. Smaller gatherings can typically be accommodated with 2-4 weeks notice, subject to availability. Eid weekends book up to 6 months in advance.',
    },
    {
        question: 'Are there reduced rates for members?',
        answer: 'Yes, registered members receive a 40% discount on hall rentals. Voting members receive a 50% discount. Low-income families may apply for additional assistance through our community fund.',
    },
];
