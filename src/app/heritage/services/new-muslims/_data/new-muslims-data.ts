// New Muslims Page Data
// Types and static data for the Embrace program

import { LucideIcon, Heart, BookOpen, Users, Home, GraduationCap, MessageCircle, Calendar, Gift } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface Resource {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface ClassSession {
    day: string;
    time: string;
    topic: string;
}

export interface Testimonial {
    quote: string;
    name: string;
    convertedYear: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

// ============================================
// Resources
// ============================================

export const resources: Resource[] = [
    {
        id: 'mentor',
        icon: Users,
        title: 'Personal Mentor',
        description: 'Get paired with an experienced Muslim who will guide you through your first year and beyond.'
    },
    {
        id: 'classes',
        icon: BookOpen,
        title: 'Foundations Classes',
        description: 'Weekly classes covering essentials: prayer, fasting, Islamic beliefs, and Arabic basics.'
    },
    {
        id: 'community',
        icon: Home,
        title: 'Welcome Gatherings',
        description: 'Monthly dinners and social events to build friendships within the community.'
    },
    {
        id: 'library',
        icon: GraduationCap,
        title: 'New Muslim Library',
        description: 'Curated collection of books, pamphlets, and online resources for new Muslims.'
    },
    {
        id: 'support',
        icon: MessageCircle,
        title: '24/7 Support Line',
        description: 'Confidential support for questions, struggles, or just someone to talk to.'
    },
    {
        id: 'starter',
        icon: Gift,
        title: 'New Muslim Kit',
        description: 'Free starter kit including prayer rug, Quran, prayer guide, and essential books.'
    }
];

// ============================================
// Class Schedule
// ============================================

export const classSchedule: ClassSession[] = [
    { day: 'Sunday', time: '10:00 AM', topic: 'Foundations of Faith (Aqeedah)' },
    { day: 'Sunday', time: '11:30 AM', topic: 'Learn to Pray Workshop' },
    { day: 'Tuesday', time: '7:00 PM', topic: 'Quran Reading & Basics' },
    { day: 'Thursday', time: '7:00 PM', topic: 'Arabic for Beginners' },
    { day: 'Saturday', time: '4:00 PM', topic: 'Islamic History & Seerah' }
];

// ============================================
// Testimonials
// ============================================

export const testimonials: Testimonial[] = [
    {
        quote: "The mentor program changed everything. Having someone to call when I had questions made Islam feel accessible and welcoming.",
        name: 'Sarah M.',
        convertedYear: 'Embraced Islam 2023'
    },
    {
        quote: "I was nervous about fitting in, but the community welcomed me like family. I've found lifelong friends here.",
        name: 'James K.',
        convertedYear: 'Embraced Islam 2022'
    },
    {
        quote: "The classes helped me understand not just the 'how' but the 'why' behind everything. That made all the difference.",
        name: 'Maria L.',
        convertedYear: 'Embraced Islam 2024'
    }
];

// ============================================
// FAQs
// ============================================

export const faqs: FAQ[] = [
    {
        question: 'Do I need to know anything about Islam before taking the shahada?',
        answer: 'No prior knowledge is required. The shahada (declaration of faith) is the first step. We provide all the education and support you need afterward.'
    },
    {
        question: 'Will my information be kept confidential?',
        answer: 'Absolutely. We respect your privacy completely. You choose what to share and with whom.'
    },
    {
        question: 'What if my family is not supportive?',
        answer: 'Many new Muslims face this challenge. Our mentors and support groups can help you navigate family relationships with wisdom and patience.'
    },
    {
        question: 'Is there a cost for these programs?',
        answer: 'All our new Muslim programs are completely free, including the starter kit, classes, and mentorship.'
    }
];

// ============================================
// Stats
// ============================================

export const programStats = {
    newMuslims: '150+',
    activeMentors: '25+',
    yearsRunning: '10+',
    eventsPerYear: '50+'
};
