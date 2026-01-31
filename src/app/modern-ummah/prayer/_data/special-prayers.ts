export interface SpecialPrayer {
    id: string;
    name: string;
    arabicName: string;
    description: string;
    icon: 'heart' | 'moon' | 'star' | 'sun';
    theme: 'minimal' | 'night' | 'festive';
    schedule?: string;
    hasNotification?: boolean;
}

export const specialPrayers: SpecialPrayer[] = [
    {
        id: 'janazah',
        name: 'Janazah',
        arabicName: 'صلاة الجنازة',
        description: 'Funeral prayers are announced via our notification system. Sign up to receive timely alerts.',
        icon: 'heart',
        theme: 'minimal',
        hasNotification: true,
    },
    {
        id: 'taraweeh',
        name: 'Taraweeh',
        arabicName: 'صلاة التراويح',
        description: 'Nightly prayers during the blessed month of Ramadan. Join us for spiritual reflection and community.',
        icon: 'moon',
        theme: 'night',
        schedule: 'During Ramadan after Isha',
    },
    {
        id: 'eid',
        name: 'Eid Prayer',
        arabicName: 'صلاة العيد',
        description: 'Celebrate the joyous occasions of Eid al-Fitr and Eid al-Adha with the community.',
        icon: 'star',
        theme: 'festive',
        schedule: 'Announced before each Eid',
    },
    {
        id: 'tahajjud',
        name: 'Tahajjud',
        arabicName: 'صلاة التهجد',
        description: 'Special late-night prayers during the last ten nights of Ramadan seeking Laylatul Qadr.',
        icon: 'sun',
        theme: 'night',
        schedule: 'Last 10 nights of Ramadan',
    },
];


