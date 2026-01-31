import {
    Users,
    Sparkles,
    GraduationCap,
    HeartHandshake
} from 'lucide-react';

export const guidanceServices = [
    {
        id: 'marital',
        icon: Users,
        title: 'Marital & Family',
        description: 'Mediation for couples, parenting advice, and conflict resolution guided by Islamic principles.',
        details: ['Pre-marital counseling', 'Conflict mediation', 'Parenting guidance', 'Family reconciliation']
    },
    {
        id: 'spiritual',
        icon: Sparkles,
        title: 'Spiritual Crisis',
        description: 'For those struggling with doubts, low Iman, or questions about faith and purpose.',
        details: ['Faith strengthening', 'Doubt resolution', 'Religious questions', 'Spiritual renewal']
    },
    {
        id: 'youth',
        icon: GraduationCap,
        title: 'Youth Mentorship',
        description: 'Private sessions for teens facing peer pressure, identity issues, or life decisions.',
        details: ['Identity & belonging', 'Peer pressure', 'Academic stress', 'Career guidance']
    },
    {
        id: 'grief',
        icon: HeartHandshake,
        title: 'Grief & Loss',
        description: 'Spiritual support and wisdom for those mourning a loved one or facing difficult trials.',
        details: ['Bereavement support', 'Processing loss', 'Finding meaning', 'Spiritual healing']
    }
];

export const counselors = [
    {
        id: 1,
        name: 'Imam Abdullah Hassan',
        title: 'Head Imam & Senior Counselor',
        credentials: ['PhD Islamic Studies', 'Certified Chaplain', 'AMHFA Certified'],
        specialties: ['Marital Counseling', 'Spiritual Guidance'],
        image: '/images/counselors/imam-hassan.jpg',
        available: true
    },
    {
        id: 2,
        name: 'Ustadha Fatima Rahman',
        title: 'Family Counselor',
        credentials: ['MA Islamic Psychology', 'Licensed Marriage & Family Therapist'],
        specialties: ['Family Dynamics', 'Youth Counseling'],
        image: '/images/counselors/ustadha-fatima.jpg',
        available: true
    },
    {
        id: 3,
        name: 'Imam Yusuf Ibrahim',
        title: 'Youth Mentor',
        credentials: ['BSc Psychology', 'Islamic Studies Certificate', 'Youth Mentorship Training'],
        specialties: ['Youth Issues', 'Identity & Faith'],
        image: '/images/counselors/imam-yusuf.jpg',
        available: true
    }
];

export const timeSlots = [
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'
];

export const crisisResources = [
    {
        name: '988 Suicide & Crisis Lifeline',
        contact: 'Call or text 988 (24/7)'
    },
    {
        name: 'Emergency Services',
        contact: 'Call 911'
    }
];
