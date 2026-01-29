import { LucideIcon, Clock, Calendar, Bell, MessageCircle, Heart, BookOpen } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface Screenshot {
    id: number;
    alt: string;
    src: string;
}

// ============================================
// Static Data
// ============================================

export const features: Feature[] = [
    {
        icon: Clock,
        title: 'Prayer Times',
        description: 'Accurate prayer times with customizable notifications and Qibla direction.'
    },
    {
        icon: Calendar,
        title: 'Events Calendar',
        description: 'Stay updated on all masjid programs, classes, and community events.'
    },
    {
        icon: Bell,
        title: 'Push Notifications',
        description: 'Receive important announcements, schedule changes, and reminders.'
    },
    {
        icon: MessageCircle,
        title: 'Community Feed',
        description: 'Connect with fellow community members and stay informed.'
    },
    {
        icon: Heart,
        title: 'Easy Donations',
        description: 'Support the masjid with secure, one-tap donations directly from the app.'
    },
    {
        icon: BookOpen,
        title: 'Quran & Duas',
        description: 'Access the Holy Quran, daily duas, and dhikr collections for spiritual growth.'
    }
];

export const screenshots: Screenshot[] = [
    { id: 1, alt: 'Prayer times screen', src: '/images/heritage/mosque-dome.jpg' },
    { id: 2, alt: 'Events calendar screen', src: '/images/heritage/mosque-interior.jpg' },
    { id: 3, alt: 'Donation screen', src: '/images/heritage/shykh.jpg' }
];

export const benefits: string[] = [
    'Never miss a prayer with accurate, location-based prayer times',
    'Get instant notifications for important announcements',
    'RSVP for events and manage your registrations',
    'Support the masjid with secure, hassle-free donations',
    'Access khutbah recordings and educational content',
    'Connect with community members in a safe environment'
];
