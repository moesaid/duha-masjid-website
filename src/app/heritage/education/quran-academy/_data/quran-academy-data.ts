// Quran Academy Page Data
// Types and static data for the Guardians of the Quran program

import { LucideIcon, BookOpen, Users, Star, Award, Clock, Calendar, Trophy } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface Program {
    id: string;
    title: string;
    description: string;
    ageGroup: string;
    schedule: string;
    icon: LucideIcon;
}

export interface Teacher {
    name: string;
    title: string;
    credentials: string;
    bio: string;
    imageUrl: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

export interface Achievement {
    icon: LucideIcon;
    number: string;
    label: string;
}

// ============================================
// Programs
// ============================================

export const programs: Program[] = [
    {
        id: 'seedlings',
        title: 'Seedlings (Beginner)',
        description: 'Introduction to Arabic alphabet, basic tajweed rules, and memorization of short surahs.',
        ageGroup: 'Ages 5-8',
        schedule: 'Saturdays 9 AM - 11 AM',
        icon: BookOpen
    },
    {
        id: 'saplings',
        title: 'Saplings (Intermediate)',
        description: 'Advanced tajweed, memorization of Juz Amma, and introduction to Quran translation.',
        ageGroup: 'Ages 9-12',
        schedule: 'Saturdays 11 AM - 1 PM',
        icon: Users
    },
    {
        id: 'trees',
        title: 'Mighty Trees (Advanced)',
        description: 'Comprehensive hifz program with focus on retention, tafseer, and spiritual development.',
        ageGroup: 'Ages 13+',
        schedule: 'Sundays 9 AM - 12 PM',
        icon: Star
    },
    {
        id: 'adult',
        title: 'Adult Learners',
        description: 'Flexible program for adults wanting to improve recitation or begin memorization.',
        ageGroup: 'Adults 18+',
        schedule: 'Weekdays after Maghrib',
        icon: Award
    }
];

// ============================================
// Teachers
// ============================================

export const teachers: Teacher[] = [
    {
        name: 'Sheikh Ahmad Hassan',
        title: 'Lead Instructor',
        credentials: 'Ijazah in Hafs from Asim',
        bio: 'Sheikh Ahmad has over 20 years of experience teaching Quran and has helped more than 50 students complete their hifz.',
        imageUrl: '/images/heritage/teacher-1.jpg'
    },
    {
        name: 'Ustadha Fatima Ali',
        title: "Sisters' Program Director",
        credentials: 'Ijazah in Tajweed',
        bio: "Ustadha Fatima specializes in working with children and has developed our popular 'Seedlings' curriculum.",
        imageUrl: '/images/heritage/teacher-2.jpg'
    },
    {
        name: 'Hafiz Omar Yusuf',
        title: 'Youth Instructor',
        credentials: 'Complete Hifz at age 14',
        bio: "Hafiz Omar's youth and energy connect with our teenage students, making memorization engaging and fun.",
        imageUrl: '/images/heritage/teacher-3.jpg'
    }
];

// ============================================
// Testimonials
// ============================================

export const testimonials: Testimonial[] = [
    {
        quote: "My daughter completed her hifz at just 12 years old. The teachers here are not just instructors—they're mentors who truly love their students.",
        author: 'Aisha Rahman',
        role: 'Parent'
    },
    {
        quote: "I started learning at 40 years old and never thought I'd recite beautifully. The adult program changed my relationship with the Quran.",
        author: 'Brother Khalid',
        role: 'Adult Student'
    },
    {
        quote: "The structured curriculum and loving environment made all the difference. My sons look forward to every class.",
        author: 'Sister Mariam',
        role: 'Parent of Two Students'
    }
];

// ============================================
// Achievements
// ============================================

export const achievements: Achievement[] = [
    { icon: Trophy, number: '75+', label: 'Huffaz Graduates' },
    { icon: Users, number: '200+', label: 'Current Students' },
    { icon: Clock, number: '15+', label: 'Years of Excellence' },
    { icon: Award, number: '3', label: 'Certified Teachers' }
];

// ============================================
// Curriculum Info
// ============================================

export const curriculumHighlights = [
    'Personalized learning pace for each student',
    'Weekly progress reports for parents',
    'Quarterly assessments and awards',
    'Annual Quran competition',
    'Summer intensive programs',
    'One-on-one revision sessions'
];
