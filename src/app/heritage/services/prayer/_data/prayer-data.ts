// Prayer Services Page Data
import { LucideIcon, Clock, Calendar, Moon, Sun, Globe } from 'lucide-react';

// Types
export interface PrayerInfo {
    name: string;
    arabicName: string;
    description: string;
}

export interface Iqamah {
    prayer: string;
    time: string;
}

// Prayer Information
export const dailyPrayers: PrayerInfo[] = [
    { name: 'Fajr', arabicName: 'الفَجْر', description: 'Dawn prayer before sunrise' },
    { name: 'Dhuhr', arabicName: 'الظُّهْر', description: 'Midday prayer after sun passes zenith' },
    { name: 'Asr', arabicName: 'العَصْر', description: 'Afternoon prayer' },
    { name: 'Maghrib', arabicName: 'المَغْرِب', description: 'Prayer immediately after sunset' },
    { name: 'Isha', arabicName: 'العِشَاء', description: 'Night prayer' }
];

// Sample Iqamah times
export const iqamahTimes: Iqamah[] = [
    { prayer: 'Fajr', time: '5:30 AM' },
    { prayer: 'Dhuhr', time: '1:15 PM' },
    { prayer: 'Asr', time: '5:00 PM' },
    { prayer: 'Maghrib', time: '5 min after Adhan' },
    { prayer: 'Isha', time: '7:30 PM' }
];

// Jumu'ah Info
export const jumuahInfo = {
    khutbah: '12:45 PM',
    prayer: '1:00 PM',
    secondSession: '2:00 PM (Summer)',
    parking: 'Additional parking available at adjacent lot'
};

// Festival Prayers
export const festivalInfo = {
    title: 'Eid Prayers',
    description: 'Festival prayers are held at multiple times to accommodate our community. Please check announcements closer to Eid.',
    locations: ['Main Prayer Hall', 'Gymnasium', 'Outdoor Grounds (weather permitting)']
};
