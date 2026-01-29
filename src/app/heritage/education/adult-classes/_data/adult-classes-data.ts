// Adult Classes Page Data
// Types and static data for the Majlis program

import { LucideIcon, Sun, Moon, BookOpen, Scale, Heart } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface Khatira {
    time: string;
    icon: LucideIcon;
    title: string;
    subtitle: string;
    description: string;
}

export interface ProgramTrack {
    id: string;
    track: string;
    title: string;
    arabicTitle: string;
    subtitle: string;
    description: string;
    instructor: string;
    schedule: string;
    icon: LucideIcon;
    color: 'blue' | 'mahogany' | 'green';
}

export interface ArchiveRecording {
    id: number;
    series: string;
    title: string;
    duration: string;
    hasNotes: boolean;
}

// ============================================
// Daily Khatiras
// ============================================

export const dailyKhatiras: Khatira[] = [
    {
        time: 'After Fajr',
        icon: Sun,
        title: 'Riyad-us-Saliheen',
        subtitle: 'Gardens of the Righteous',
        description: "Daily hadith commentary from Imam Nawawi's masterpiece"
    },
    {
        time: 'After Isha',
        icon: Moon,
        title: 'Tafseer of the Short Surahs',
        subtitle: 'Juz Amma Explained',
        description: 'Deep dive into the meanings of the Surahs we recite daily'
    }
];

// ============================================
// Weekly Program Tracks
// ============================================

export const programTracks: ProgramTrack[] = [
    {
        id: 'quran',
        track: 'Track 1',
        title: 'Quranic Sciences',
        arabicTitle: 'علوم القرآن',
        subtitle: 'Tajweed Correction & Tafseer',
        description: 'Focus on reading fluency and understanding the deeper meanings of the Quran.',
        instructor: 'Sh. Ahmad Hassan',
        schedule: 'Fridays after Maghrib',
        icon: BookOpen,
        color: 'blue'
    },
    {
        id: 'fiqh',
        track: 'Track 2',
        title: 'Fiqh & Law',
        arabicTitle: 'الفقه والأحكام',
        subtitle: 'Essentials of Worship',
        description: 'Learning the rules of prayer, fasting, Zakat, and daily transactions.',
        instructor: 'Sh. Yusuf Ali',
        schedule: 'Saturdays at 7 PM',
        icon: Scale,
        color: 'mahogany'
    },
    {
        id: 'tazkiyah',
        track: 'Track 3',
        title: 'Tazkiyah',
        arabicTitle: 'تزكية النفس',
        subtitle: 'Purification of the Heart',
        description: 'Studying the works of Imam Ghazali and Ibn Qayyim on spiritual development.',
        instructor: 'Sh. Ibrahim Noor',
        schedule: 'Sundays at 11 AM',
        icon: Heart,
        color: 'green'
    }
];

// ============================================
// Archive Recordings
// ============================================

export const archiveRecordings: ArchiveRecording[] = [
    {
        id: 1,
        series: 'Seerah',
        title: 'Episode 45: The Migration to Medina',
        duration: '45 min',
        hasNotes: true
    },
    {
        id: 2,
        series: 'Fiqh',
        title: 'Zakat: Assets & Calculation Methods',
        duration: '38 min',
        hasNotes: true
    },
    {
        id: 3,
        series: 'Tafseer',
        title: 'Surah Al-Mulk: Verse by Verse',
        duration: '52 min',
        hasNotes: false
    },
    {
        id: 4,
        series: 'Spirituality',
        title: "Imam Ghazali's Book of Knowledge",
        duration: '41 min',
        hasNotes: true
    }
];
