import {
    GraduationCap,
    Handshake,
    Coffee,
    FileText,
    BookOpen,
    Sparkles
} from 'lucide-react';

export const supportPillars = [
    {
        id: 'education',
        icon: GraduationCap,
        title: 'Education (Ilm)',
        subtitle: 'Islam 101 Classes',
        description: 'Weekly basics of faith, prayer, and wudu taught in a supportive, question-friendly environment.',
        details: ['Every Sunday at 11:00 AM', 'Library Meeting Room', 'No prior knowledge required']
    },
    {
        id: 'mentorship',
        icon: Handshake,
        title: 'Mentorship (Muakhaat)',
        subtitle: 'The Buddy System',
        description: 'Pairing new Muslims with established community members for friendship, guidance, and spiritual support.',
        details: ['One-on-one guidance', 'Practical life support', 'Confidential relationship']
    },
    {
        id: 'social',
        icon: Coffee,
        title: 'Social (Suhba)',
        subtitle: 'Monthly Potlucks',
        description: 'A pressure-free zone to meet others, share stories, and break bread together as a family.',
        details: ['First Saturday of each month', 'Bring a dish to share', 'All are welcome']
    }
];

export const resources = [
    {
        id: 1,
        title: 'How to Pray',
        subtitle: 'Step-by-Step Guide',
        type: 'PDF Download',
        icon: FileText
    },
    {
        id: 2,
        title: 'Understanding the Quran',
        subtitle: 'Recommended Translations',
        type: 'Resource List',
        icon: BookOpen
    },
    {
        id: 3,
        title: 'Glossary of Islamic Terms',
        subtitle: 'Common Words & Meanings',
        type: 'Quick Reference',
        icon: Sparkles
    }
];

export const interestOptions = [
    { value: 'shahada', label: 'Taking my Shahada' },
    { value: 'prayer', label: 'Learning to Pray' },
    { value: 'classes', label: 'Joining Islam 101 Classes' },
    { value: 'mentor', label: 'Finding a Mentor' },
    { value: 'visiting', label: 'Just Visiting / Learning' }
];

export const welcomeGiftItems = [
    'The Holy Quran (with English translation)',
    'Premium Prayer Rug',
    'Introductory Books on Islamic Practice',
    'Tasbih (Prayer Beads)'
];
