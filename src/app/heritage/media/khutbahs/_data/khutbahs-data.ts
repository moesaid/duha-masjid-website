// ============================================
// Types
// ============================================

export interface Khutbah {
    id: number;
    title: string;
    speaker: string;
    date: string;
    hijriDate: string;
    duration: string;
    tags: string[];
    audioUrl: string;
    seriesId: number | null;
}

export interface FeaturedSeries {
    id: number;
    title: string;
    parts: number;
    pattern: string;
    color: string;
}

export interface AudioTrack {
    id: number;
    title: string;
    speaker: string;
    src: string;
}

// ============================================
// Static Data
// ============================================

export const latestKhutbah = {
    id: 1,
    title: 'The Rights of the Neighbor',
    speaker: 'Sheikh Abdullah',
    date: 'Jan 24, 2026',
    hijriDate: 'Rajab 24, 1447',
    duration: '28:45',
    audioUrl: 'https://server8.mp3quran.net/jbrl/001.mp3'
};

export const audioTracks: AudioTrack[] = [
    { id: 1, title: 'The Rights of the Neighbor', speaker: 'Sheikh Abdullah', src: 'https://server8.mp3quran.net/jbrl/001.mp3' },
    { id: 2, title: 'Navigating Hardship with Gratitude', speaker: 'Imam Ahmed Mustafa', src: 'https://server8.mp3quran.net/jbrl/002.mp3' },
    { id: 3, title: 'The Importance of Community', speaker: 'Sheikh Abdullah Smith', src: 'https://server8.mp3quran.net/jbrl/003.mp3' },
    { id: 4, title: 'Purification of the Heart', speaker: 'Imam Ahmed Mustafa', src: 'https://server8.mp3quran.net/jbrl/004.mp3' },
];

export const speakers = ['All Speakers', 'Sh. Ahmed Mustafa', 'Sh. Abdullah Smith', 'Sh. Omar Hassan', 'Guest Speakers'];
export const years = ['All Years', '2026', '2025', '2024', '2023'];
export const languages = ['All Languages', 'English', 'Arabic', 'Urdu'];

export const featuredSeries: FeaturedSeries[] = [
    { id: 1, title: 'The Family Series', parts: 3, pattern: 'geometric-1', color: '#1a3a2f' },
    { id: 2, title: 'Stories of the Prophets', parts: 3, pattern: 'geometric-2', color: '#2c1810' },
    { id: 3, title: 'Ramadan Prep 2026', parts: 2, pattern: 'geometric-3', color: '#1a2a3a' },
    { id: 4, title: 'Financial Ethics', parts: 3, pattern: 'geometric-4', color: '#3a2a1a' },
];

export const allKhutbahs: Khutbah[] = [
    { id: 1, title: 'The Rights of the Neighbor', speaker: 'Sheikh Abdullah', date: 'Jan 24, 2026', hijriDate: 'Rajab 24, 1447', duration: '28:45', tags: ['Family', 'Community'], audioUrl: 'https://server8.mp3quran.net/jbrl/001.mp3', seriesId: 1 },
    { id: 2, title: 'Navigating Hardship with Gratitude', speaker: 'Imam Ahmed Mustafa', date: 'Jan 17, 2026', hijriDate: 'Rajab 17, 1447', duration: '32:15', tags: ['Spirituality', 'Patience'], audioUrl: 'https://server8.mp3quran.net/jbrl/002.mp3', seriesId: null },
    { id: 3, title: 'Stories of Prophet Ibrahim - Part 1', speaker: 'Sheikh Abdullah Smith', date: 'Jan 10, 2026', hijriDate: 'Rajab 10, 1447', duration: '28:45', tags: ['Seerah', 'Prophets'], audioUrl: 'https://server8.mp3quran.net/jbrl/003.mp3', seriesId: 2 },
    { id: 4, title: 'Stories of Prophet Ibrahim - Part 2', speaker: 'Sheikh Abdullah Smith', date: 'Jan 3, 2026', hijriDate: 'Rajab 3, 1447', duration: '35:20', tags: ['Seerah', 'Prophets'], audioUrl: 'https://server8.mp3quran.net/jbrl/004.mp3', seriesId: 2 },
    { id: 5, title: 'Raising Righteous Children', speaker: 'Imam Ahmed Mustafa', date: 'Dec 27, 2025', hijriDate: 'Jumada II 26, 1447', duration: '38:15', tags: ['Family', 'Parenting'], audioUrl: 'https://server8.mp3quran.net/jbrl/005.mp3', seriesId: 1 },
    { id: 6, title: 'Marriage in Islam', speaker: 'Sheikh Abdullah Smith', date: 'Dec 20, 2025', hijriDate: 'Jumada II 19, 1447', duration: '36:10', tags: ['Family', 'Marriage'], audioUrl: 'https://server8.mp3quran.net/jbrl/006.mp3', seriesId: 1 },
    { id: 7, title: 'Stories of Prophet Musa - Part 1', speaker: 'Sheikh Abdullah Smith', date: 'Dec 13, 2025', hijriDate: 'Jumada II 12, 1447', duration: '45:00', tags: ['Seerah', 'Prophets'], audioUrl: 'https://server8.mp3quran.net/jbrl/007.mp3', seriesId: 2 },
    { id: 8, title: 'Preparing for Ramadan - Fasting Basics', speaker: 'Sheikh Omar Hassan', date: 'Dec 6, 2025', hijriDate: 'Jumada II 5, 1447', duration: '33:45', tags: ['Ramadan', 'Fasting'], audioUrl: 'https://server8.mp3quran.net/jbrl/008.mp3', seriesId: 3 },
    { id: 9, title: 'Preparing for Ramadan - Night Prayers', speaker: 'Imam Ahmed Mustafa', date: 'Nov 29, 2025', hijriDate: 'Jumada I 28, 1447', duration: '40:20', tags: ['Ramadan', 'Worship'], audioUrl: 'https://server8.mp3quran.net/jbrl/009.mp3', seriesId: 3 },
    { id: 10, title: 'Financial Ethics - Halal Earnings', speaker: 'Sheikh Omar Hassan', date: 'Nov 22, 2025', hijriDate: 'Jumada I 21, 1447', duration: '36:10', tags: ['Finance', 'Ethics'], audioUrl: 'https://server8.mp3quran.net/jbrl/010.mp3', seriesId: 4 },
    { id: 11, title: 'Financial Ethics - Avoiding Riba', speaker: 'Sheikh Omar Hassan', date: 'Nov 15, 2025', hijriDate: 'Jumada I 14, 1447', duration: '29:30', tags: ['Finance', 'Ethics'], audioUrl: 'https://server8.mp3quran.net/jbrl/011.mp3', seriesId: 4 },
    { id: 12, title: 'Financial Ethics - Zakat and Sadaqah', speaker: 'Sheikh Omar Hassan', date: 'Nov 8, 2025', hijriDate: 'Jumada I 7, 1447', duration: '44:15', tags: ['Finance', 'Charity'], audioUrl: 'https://server8.mp3quran.net/jbrl/012.mp3', seriesId: 4 },
];

export const ITEMS_PER_PAGE = 5;
