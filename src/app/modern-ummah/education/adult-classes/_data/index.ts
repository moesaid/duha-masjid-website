import { LucideIcon, Sun, Moon, BookOpen, Scale, Heart, Mic, Video } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface Khatira {
    time: string;
    icon: LucideIcon;
    title: string;
    subtitle: string;
    description: string;
    theme: 'morning' | 'evening';
}

export interface ProgramTrack {
    id: string;
    title: string;
    arabicTitle: string;
    subtitle: string;
    description: string;
    instructor: string;
    schedule: string;
    location: string;
    icon: LucideIcon;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
    category: 'Quran' | 'Fiqh' | 'Spirituality' | 'Theology';
}

export interface ArchiveRecording {
    id: number;
    series: string;
    title: string;
    duration: string;
    date: string;
    type: 'audio' | 'video';
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
        description: "Start your day with prophetic wisdom. Daily hadith commentary from Imam Nawawi's masterpiece, focusing on character and ethics.",
        theme: 'morning'
    },
    {
        time: 'After Isha',
        icon: Moon,
        title: 'Tafseer Juz Amma',
        subtitle: 'The Short Surahs',
        description: 'End your day with reflection. A deep dive into the meanings, context, and lessons of the Surahs we recite most often.',
        theme: 'evening'
    }
];

// ============================================
// Weekly Program Tracks
// ============================================

export const programTracks: ProgramTrack[] = [
    {
        id: 'quran',
        title: 'Quranic Sciences',
        arabicTitle: 'علوم القرآن',
        subtitle: 'Tajweed & Tafseer',
        description: 'A comprehensive study of the Quran, focusing on correct recitation (Tajweed) and understanding the deeper meanings through Tafseer.',
        instructor: 'Sh. Ahmad Hassan',
        schedule: 'Fridays, After Maghrib',
        location: 'Main Prayer Hall',
        icon: BookOpen,
        level: 'All Levels',
        category: 'Quran'
    },
    {
        id: 'fiqh',
        title: 'Fiqh al-Ibadat',
        arabicTitle: 'فقه العبادات',
        subtitle: 'Essentials of Worship',
        description: 'Master the practical rules of purification, prayer, fasting, and Zakat according to the Sunnah.',
        instructor: 'Sh. Yusuf Ali',
        schedule: 'Saturdays, 7:00 PM',
        location: 'Classroom A',
        icon: Scale,
        level: 'Intermediate',
        category: 'Fiqh'
    },
    {
        id: 'tazkiyah',
        title: 'Purification of the Heart',
        arabicTitle: 'تزكية النفس',
        subtitle: 'Spiritual Development',
        description: 'Journey to Allah through the study of classic texts on spirituality, focusing on curing the diseases of the heart.',
        instructor: 'Sh. Ibrahim Noor',
        schedule: 'Sundays, 11:00 AM',
        location: 'Library',
        icon: Heart,
        level: 'All Levels',
        category: 'Spirituality'
    }
];

// ============================================
// Archive Recordings
// ============================================

export const archiveRecordings: ArchiveRecording[] = [
    {
        id: 1,
        series: 'Seerah',
        title: 'The Migration to Medina',
        duration: '45 min',
        date: 'Oct 12, 2025',
        type: 'video'
    },
    {
        id: 2,
        series: 'Fiqh',
        title: 'Understanding Zakat Assets',
        duration: '38 min',
        date: 'Oct 05, 2025',
        type: 'audio'
    },
    {
        id: 3,
        series: 'Tafseer',
        title: 'Surah Al-Mulk: Verse by Verse',
        duration: '52 min',
        date: 'Sep 28, 2025',
        type: 'video'
    },
    {
        id: 4,
        series: 'Spirituality',
        title: 'Disciplining the Soul',
        duration: '41 min',
        date: 'Sep 21, 2025',
        type: 'audio'
    }
];
