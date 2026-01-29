import { LucideIcon, Tent, Gift, Utensils, Music } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface TaraweehInfo {
    startTime: string;
    reciters: string;
    currentJuz: number;
    totalJuz: number;
}

export interface CalendarDay {
    day: string;
    status: 'header' | 'sponsored' | 'available';
    ramadanDay: number;
}

export interface IftarMenuItem {
    item: string;
}

export interface EidPrayer {
    shift: string;
    takbeer: string;
    prayer: string;
}

export interface Festivity {
    icon: LucideIcon;
    label: string;
}

export interface SponsorFormData {
    name: string;
    email: string;
    phone: string;
    contributionAmount: string;
    anonymous: boolean;
}

// ============================================
// Static Data
// ============================================

export const taraweehInfo: TaraweehInfo = {
    startTime: 'Immediately after Isha (Iqamah 9:30 PM)',
    reciters: 'Led by Sh. Ahmad Al-Khalil and Guest Reciter Qari Yusuf',
    currentJuz: 4,
    totalJuz: 30
};

// Generate all 30 Ramadan days with sample sponsored/available status
export const generateRamadanCalendar = (): CalendarDay[] => {
    const days: CalendarDay[] = [];
    const weekdayHeaders = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    weekdayHeaders.forEach(day => days.push({ day, status: 'header', ramadanDay: 0 }));

    const sponsoredDays = [1, 2, 4, 6, 7, 11, 14, 17, 19, 21, 23, 25, 27, 29];

    for (let i = 1; i <= 30; i++) {
        days.push({
            day: String(i),
            status: sponsoredDays.includes(i) ? 'sponsored' : 'available',
            ramadanDay: i
        });
    }
    return days;
};

export const ramadanCalendar = generateRamadanCalendar();

export const iftarMenu: IftarMenuItem[] = [
    { item: 'Friday: Biryani Night - Catered by Salam Kitchen' },
    { item: 'Saturday: Mediterranean Feast - Catered by Olive Garden Halal' },
    { item: 'Dates, Water, and Samosas provided daily' }
];

export const eidPrayers: EidPrayer[] = [
    { shift: 'First Prayer', takbeer: '7:00 AM', prayer: '7:30 AM' },
    { shift: 'Second Prayer', takbeer: '9:00 AM', prayer: '9:30 AM' }
];

export const festivities: Festivity[] = [
    { icon: Tent, label: 'Carnival Games' },
    { icon: Gift, label: 'Petting Zoo' },
    { icon: Utensils, label: 'Food Trucks' },
    { icon: Music, label: 'Nasheed Performance' }
];

export const contributionOptions = [
    { value: '1600', label: '$1600 (Sponsor a full day)' },
    { value: '800', label: '$800 (Sponsor half a day)' },
    { value: '400', label: '$400 (Contribute towards an Iftar)' }
];

export const initialSponsorForm: SponsorFormData = {
    name: '',
    email: '',
    phone: '',
    contributionAmount: '800',
    anonymous: false
};

export const ZAKAT_FITR_AMOUNT = 15;
export const FIDYA_AMOUNT = 15;
