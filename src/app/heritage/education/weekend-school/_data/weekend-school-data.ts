// Weekend School Page Data
// Types and static data for the Madrasah program

import { LucideIcon, BookOpen, Clock, Calendar, Award, Users, Star, Heart } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface GradeLevel {
    id: string;
    name: string;
    arabicName: string;
    ageRange: string;
    description: string;
    subjects: string[];
}

export interface DaySchedule {
    day: string;
    time: string;
    activities: string[];
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

// ============================================
// Grade Levels
// ============================================

export const gradeLevels: GradeLevel[] = [
    {
        id: 'seeds',
        name: 'Seeds (Pre-K)',
        arabicName: 'البُذُور',
        ageRange: 'Ages 4-5',
        description: 'Introduction to Islamic values through play, stories, and basic Arabic letters.',
        subjects: ['Stories of Prophets', 'Arabic ABCs', 'Good Manners', 'Simple Duas']
    },
    {
        id: 'sprouts',
        name: 'Sprouts (K-1)',
        arabicName: 'البَراعِم',
        ageRange: 'Ages 5-7',
        description: 'Building foundations in Quran reading, Islamic studies, and Arabic basics.',
        subjects: ['Quran Reading', 'Five Pillars', 'Arabic Vocabulary', 'Seerah Basics']
    },
    {
        id: 'saplings',
        name: 'Saplings (2-4)',
        arabicName: 'الشَّتَلات',
        ageRange: 'Ages 7-10',
        description: 'Intermediate level focusing on tajweed, fiqh basics, and Islamic history.',
        subjects: ['Tajweed', 'Fiqh', 'Islamic History', 'Arabic Grammar']
    },
    {
        id: 'trees',
        name: 'Strong Trees (5-8)',
        arabicName: 'الأشجار',
        ageRange: 'Ages 10-14',
        description: 'Advanced studies in Quran memorization, aqeedah, and contemporary Islamic issues.',
        subjects: ['Hifz Program', 'Aqeedah', 'Advanced Arabic', 'Islamic Ethics']
    }
];

// ============================================
// Schedule
// ============================================

export const weeklySchedule: DaySchedule[] = [
    {
        day: 'Saturday',
        time: '10:00 AM - 1:00 PM',
        activities: ['Quran Class', 'Islamic Studies', 'Arabic Language']
    },
    {
        day: 'Sunday',
        time: '10:00 AM - 1:00 PM',
        activities: ['Quran Class', 'Islamic Studies', 'Arts & Activities']
    }
];

// ============================================
// Testimonials
// ============================================

export const testimonials: Testimonial[] = [
    {
        quote: "My children have grown so much in their deen since joining. The teachers truly care about each student's spiritual development.",
        author: 'Sister Amina',
        role: 'Parent of 3 Students'
    },
    {
        quote: "The curriculum is well-structured and age-appropriate. My son actually looks forward to weekends for Madrasah!",
        author: 'Brother Hassan',
        role: 'Parent'
    },
    {
        quote: "I love that they don't just teach memorization but understanding. My daughter asks such thoughtful questions now.",
        author: 'Sister Khadija',
        role: 'Parent of 2 Students'
    }
];

// ============================================
// Stats & Features
// ============================================

export const schoolStats = {
    students: '150+',
    teachers: '12',
    yearsRunning: '15+',
    graduationRate: '95%'
};

export const features = [
    { icon: BookOpen, title: 'Comprehensive Curriculum', description: 'Age-appropriate Islamic education covering Quran, Arabic, and Islamic Studies' },
    { icon: Users, title: 'Small Class Sizes', description: 'Maximum 15 students per class for personalized attention' },
    { icon: Award, title: 'Certified Teachers', description: 'All instructors are trained in Islamic education and child development' },
    { icon: Heart, title: 'Nurturing Environment', description: 'A loving space where children develop a lifelong love for Islam' }
];
