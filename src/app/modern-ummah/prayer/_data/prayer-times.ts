// ============================================
// PRAYER TIMES DATA & TYPES
// ============================================

export interface Prayer {
    id: string;
    name: string;
    arabicName: string;
    adhan: string;
    iqamah: string;
    type: 'fardh' | 'sunrise';
}

export interface JumuahTime {
    name: string;
    khutbah: string;
    salah: string;
}

export const DAILY_PRAYERS: Prayer[] = [
    { id: 'fajr', name: 'Fajr', arabicName: 'الفجر', adhan: '5:45 AM', iqamah: '6:15 AM', type: 'fardh' },
    { id: 'sunrise', name: 'Sunrise', arabicName: 'الشروق', adhan: '6:55 AM', iqamah: '-', type: 'sunrise' },
    { id: 'dhuhr', name: 'Dhuhr', arabicName: 'الظهر', adhan: '12:30 PM', iqamah: '1:00 PM', type: 'fardh' },
    { id: 'asr', name: 'Asr', arabicName: 'العصر', adhan: '3:45 PM', iqamah: '4:15 PM', type: 'fardh' },
    { id: 'maghrib', name: 'Maghrib', arabicName: 'المغرب', adhan: '5:30 PM', iqamah: '5:35 PM', type: 'fardh' },
    { id: 'isha', name: 'Isha', arabicName: 'العشاء', adhan: '7:00 PM', iqamah: '7:30 PM', type: 'fardh' },
];

export const JUMMAH_TIMES: JumuahTime[] = [
    { name: 'First Jummah', khutbah: '12:15 PM', salah: '12:45 PM' },
    { name: 'Second Jummah', khutbah: '1:30 PM', salah: '2:00 PM' },
];
