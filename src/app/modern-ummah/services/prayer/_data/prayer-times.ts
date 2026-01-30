export interface PrayerTime {
    id: string;
    name: string;
    arabicName: string;
    adhan: string;
    iqamah: string;
    isActive?: boolean;
}

// Mock prayer times - in production, this would come from an API
export const prayers: PrayerTime[] = [
    {
        id: 'fajr',
        name: 'Fajr',
        arabicName: 'الفجر',
        adhan: '5:45 AM',
        iqamah: '6:15 AM',
        isActive: false,
    },
    {
        id: 'dhuhr',
        name: 'Dhuhr',
        arabicName: 'الظهر',
        adhan: '12:30 PM',
        iqamah: '1:00 PM',
        isActive: false,
    },
    {
        id: 'asr',
        name: 'Asr',
        arabicName: 'العصر',
        adhan: '3:45 PM',
        iqamah: '4:15 PM',
        isActive: true, // Current prayer based on time
    },
    {
        id: 'maghrib',
        name: 'Maghrib',
        arabicName: 'المغرب',
        adhan: '5:30 PM',
        iqamah: '5:35 PM',
        isActive: false,
    },
    {
        id: 'isha',
        name: 'Isha',
        arabicName: 'العشاء',
        adhan: '7:00 PM',
        iqamah: '7:30 PM',
        isActive: false,
    },
];

export interface JumuahInfo {
    khateeb: {
        name: string;
        title: string;
        image: string;
    };
    topic: string;
    khutbahTime: string;
    salahTime: string;
}

export const jumuahInfo: JumuahInfo = {
    khateeb: {
        name: 'Imam Ahmad Hassan',
        title: 'Resident Scholar',
        image: '/images/shykh.jpg',
    },
    topic: 'The Virtues of Patience in Times of Trial',
    khutbahTime: '1:00 PM',
    salahTime: '1:30 PM',
};
