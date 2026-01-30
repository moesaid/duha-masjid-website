
import { FileText, MessageCircle, Scroll, Heart } from 'lucide-react';

export const processSteps = [
    {
        number: 1,
        title: 'The Application',
        arabic: 'الطَّلَب',
        description: 'Submit your Nikkah request online. Include preferred dates and basic information about both parties.',
        icon: FileText,
    },
    {
        number: 2,
        title: 'The Counseling',
        arabic: 'المَشُورَة',
        description: 'Pre-marital counseling session with the Imam to discuss the rights and responsibilities of marriage in Islam.',
        icon: MessageCircle,
        optional: true,
    },
    {
        number: 3,
        title: 'The License',
        arabic: 'الرُّخْصَة',
        description: 'Obtain your Marriage License from the County Court. This is a legal requirement and must be presented.',
        icon: Scroll,
        critical: true,
    },
    {
        number: 4,
        title: 'The Ceremony',
        arabic: 'النِّكَاح',
        description: 'The sacred Nikkah ceremony performed at the Masjid, witnessed by family and community.',
        icon: Heart,
    },
];

export const servicePackages = [
    {
        name: 'Simple Nikkah',
        subtitle: 'Intimate & Sacred',
        price: '$300',
        priceLabel: 'Honorarium',
        features: [
            'Imam services for the Nikkah ceremony',
            'Completion of marriage paperwork',
            'Private ceremony in the Imam\'s office',
            'Marriage certificate provided',
            'Up to 10 guests',
        ],
    },
    {
        name: 'Hall Celebration',
        subtitle: 'Walima Package',
        price: '$1,200',
        priceLabel: 'Full Package',
        features: [
            'Everything in Simple Nikkah',
            'Community Hall rental (4 hours)',
            'Kitchen access for catering',
            'Tables & chairs setup (up to 150 guests)',
            'Basic audio/PA system',
            'Dedicated event coordinator',
        ],
        popular: true,
    },
];

export const requirements = [
    { text: 'Valid State Marriage License', critical: true },
    { text: 'Two Male Muslim Witnesses' },
    { text: 'The Wali (Guardian) for the bride' },
    { text: 'Government-issued IDs for all parties' },
    { text: 'Agreed-upon Mahr (Dowry)' },
    { text: 'Signed Nikkah Contract' },
];
