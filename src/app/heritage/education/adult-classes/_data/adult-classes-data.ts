// Adult Classes Page Data
// Types and static data for Adult Education programs

import { LucideIcon, BookOpen, Users, Calendar, GraduationCap, Heart, MessageCircle } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface AdultClass {
    id: string;
    title: string;
    arabicTitle: string;
    instructor: string;
    schedule: string;
    level: string;
    description: string;
    topics: string[];
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

// ============================================
// Classes
// ============================================

export const adultClasses: AdultClass[] = [
    {
        id: 'arabic',
        title: 'Arabic for Adults',
        arabicTitle: 'العَرَبِيَّة',
        instructor: 'Ustadh Ahmad',
        schedule: 'Tuesdays & Thursdays, 7:00 PM',
        level: 'Beginner to Advanced',
        description: 'Learn classical Arabic from the basics to reading Quran and understanding scholarly texts.',
        topics: ['Arabic Alphabet', 'Grammar (Nahw & Sarf)', 'Reading Practice', 'Quran Vocabulary']
    },
    {
        id: 'fiqh',
        title: 'Islamic Jurisprudence',
        arabicTitle: 'الفِقْه',
        instructor: 'Sheikh Muhammad',
        schedule: 'Saturdays, 10:00 AM',
        level: 'All Levels',
        description: 'Comprehensive study of fiqh covering worship, transactions, and daily life matters.',
        topics: ['Purification', 'Prayer', 'Fasting', 'Zakat', 'Family Law']
    },
    {
        id: 'seerah',
        title: 'Life of the Prophet ﷺ',
        arabicTitle: 'السِّيرَة',
        instructor: 'Dr. Fatima',
        schedule: 'Sundays, 11:00 AM',
        level: 'All Levels',
        description: 'Detailed study of the Prophet\'s life, character, and teachings.',
        topics: ['Meccan Period', 'Medinan Period', 'Battles', 'Farewell Sermon']
    },
    {
        id: 'tafseer',
        title: 'Quran Tafseer',
        arabicTitle: 'التَّفْسِير',
        instructor: 'Imam Abdullah',
        schedule: 'Wednesdays, 7:30 PM',
        level: 'Intermediate',
        description: 'In-depth explanation and context of Quranic verses.',
        topics: ['Surah Al-Baqarah', 'Context of Revelation', 'Scholarly Interpretations']
    }
];

// ============================================
// Features
// ============================================

export const features = [
    { icon: GraduationCap, title: 'Qualified Instructors', description: 'Learn from scholars with ijazah and years of teaching experience.' },
    { icon: Users, title: 'Welcoming Environment', description: 'Classes designed for adults at any stage of their Islamic journey.' },
    { icon: Calendar, title: 'Flexible Scheduling', description: 'Evening and weekend options for working professionals.' },
    { icon: Heart, title: 'Spiritual Growth', description: 'Not just knowledge, but practical application for a better life.' }
];

// ============================================
// Testimonials
// ============================================

export const testimonials: Testimonial[] = [
    {
        quote: "These classes have transformed my understanding of Islam. The teachers make complex topics accessible.",
        author: 'Brother Kareem',
        role: 'Student for 2 years'
    },
    {
        quote: "I never thought I could learn Arabic at my age. Now I can read Quran without transliteration!",
        author: 'Sister Mariam',
        role: 'Arabic Student'
    }
];

// ============================================
// Stats
// ============================================

export const programStats = {
    students: '200+',
    classes: '8',
    instructors: '6',
    yearsRunning: '12+'
};
