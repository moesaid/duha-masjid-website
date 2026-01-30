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

export interface FacilityInfo {
    id: string;
    title: string;
    content: string;
}

export const facilities: FacilityInfo[] = [
    {
        id: 'parking',
        title: 'Parking Guidelines',
        content: 'Free parking is available in the main lot. During Jumu\'ah and special events, overflow parking is available at the adjacent community center. Please do not block fire lanes or handicap spaces.',
    },
    {
        id: 'shoes',
        title: 'Shoe Storage',
        content: 'Shoe racks are provided at all entrances. For valuable footwear, we recommend using the personal shoe bags available at the welcome desk. The Masjid is not responsible for lost or misplaced items.',
    },
    {
        id: 'children',
        title: 'Children in the Masjid',
        content: 'Children are welcome and encouraged to attend. A supervised children\'s area is available during Jumu\'ah. Parents are kindly requested to ensure children remain respectful and do not disturb worshippers.',
    },
    {
        id: 'wudu',
        title: 'Wudu Facilities',
        content: 'Separate wudu areas are available for brothers and sisters. Towels are provided. Please help keep these areas clean and dry for the next person.',
    },
];
