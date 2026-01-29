// Calendar Page Data
// Types and static data for the Community Almanac

import { LucideIcon, Moon, BookOpen, Users, Heart } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface EventCategory {
    id: string;
    label: string;
    color: string;
    icon?: LucideIcon;
}

export interface CalendarEvent {
    id: string;
    title: string;
    start: string;
    end?: string;
    extendedProps: {
        location: string;
        category: string;
        description: string;
        recurring?: string;
    };
}

export interface FeaturedEvent {
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    ticketPrice: string;
}

// ============================================
// Event Categories
// ============================================

export const eventCategories: EventCategory[] = [
    { id: 'all', label: 'All Events', color: 'all' },
    { id: 'religious', label: 'Religious', color: '#2d5a3d', icon: Moon },
    { id: 'education', label: 'Education', color: '#1a2744', icon: BookOpen },
    { id: 'social', label: 'Social', color: '#b8860b', icon: Users },
    { id: 'youth', label: 'Youth', color: '#8b4513', icon: Heart }
];

export const categoryColors: Record<string, string> = {
    religious: '#2d5a3d',
    education: '#1a2744',
    social: '#b8860b',
    youth: '#8b4513'
};

// ============================================
// Sample Events
// ============================================

export const sampleEvents: CalendarEvent[] = [
    {
        id: '1',
        title: 'Seerah Conference',
        start: '2026-01-24T14:00:00',
        end: '2026-01-24T18:00:00',
        extendedProps: {
            location: 'Main Hall',
            category: 'education',
            description: 'A comprehensive look at the life of the Prophet Muhammad ﷺ with renowned scholars.'
        }
    },
    {
        id: '2',
        title: 'Community Iftar',
        start: '2026-01-27T18:00:00',
        extendedProps: {
            location: 'Banquet Hall',
            category: 'social',
            description: 'Break your fast with the community every Monday and Thursday.',
            recurring: 'Every Mon & Thu'
        }
    },
    {
        id: '3',
        title: 'Youth Night',
        start: '2026-01-31T19:00:00',
        end: '2026-01-31T21:00:00',
        extendedProps: {
            location: 'Youth Center',
            category: 'youth',
            description: 'Sports, games, and a halaqa for young Muslims ages 13-18.'
        }
    },
    {
        id: '4',
        title: 'Tahajjud & Qiyam',
        start: '2026-02-01T04:00:00',
        extendedProps: {
            location: 'Main Prayer Hall',
            category: 'religious',
            description: 'Join us for the night prayer and dhikr.'
        }
    },
    {
        id: '5',
        title: 'Sisters Halaqa',
        start: '2026-02-05T10:00:00',
        extendedProps: {
            location: 'Sisters Hall',
            category: 'education',
            description: 'Weekly Quran study circle for sisters.',
            recurring: 'Every Thursday'
        }
    },
    {
        id: '6',
        title: 'Jummah Prayer',
        start: '2026-01-30T13:00:00',
        extendedProps: {
            location: 'Main Prayer Hall',
            category: 'religious',
            description: 'Weekly Friday congregational prayer.'
        }
    },
    {
        id: '7',
        title: 'Arabic Class',
        start: '2026-01-28T19:00:00',
        end: '2026-01-28T20:30:00',
        extendedProps: {
            location: 'Classroom A',
            category: 'education',
            description: 'Learn Classical Arabic - Beginner to Intermediate levels.'
        }
    },
    {
        id: '8',
        title: 'Family Game Night',
        start: '2026-02-07T17:00:00',
        end: '2026-02-07T20:00:00',
        extendedProps: {
            location: 'Community Hall',
            category: 'social',
            description: 'Bring the whole family for board games, snacks, and fun!'
        }
    }
];

// ============================================
// Featured Event
// ============================================

export const featuredEvent: FeaturedEvent = {
    title: 'Annual Fundraising Dinner',
    date: 'February 15, 2026',
    time: '6:00 PM - 10:00 PM',
    location: 'Grand Ballroom, Springfield Convention Center',
    description: 'Join us for an evening of inspiration, fellowship, and fundraising for our masjid expansion project. Keynote speaker: Imam Omar Suleiman.',
    ticketPrice: '$75'
};
