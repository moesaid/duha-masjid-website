import { LucideIcon, Users, Dumbbell, Coffee, Sun, Moon, BookOpen } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface DayProgram {
    name: string;
    time: string;
    category: string;
    note?: string;
}

export interface DaySchedule {
    day: string;
    shortDay: string;
    hasProgram: boolean;
    programs: DayProgram[];
}

export interface ProgramCard {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    detail: string;
    icon: LucideIcon;
}

export interface Halaqa {
    time: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

// ============================================
// Static Data
// ============================================

export const weeklySchedule: DaySchedule[] = [
    {
        day: 'Monday',
        shortDay: 'Mon',
        hasProgram: true,
        programs: [
            { name: 'Tajweed Class', time: '6:00 PM', category: 'education' }
        ]
    },
    {
        day: 'Tuesday',
        shortDay: 'Tue',
        hasProgram: true,
        programs: [
            { name: "Brothers' Basketball", time: '8:00 PM - 10:00 PM', category: 'recreation', note: '$5 entry' }
        ]
    },
    {
        day: 'Wednesday',
        shortDay: 'Wed',
        hasProgram: true,
        programs: [
            { name: 'Morning Chai (Seniors)', time: 'After Fajr', category: 'social' }
        ]
    },
    {
        day: 'Thursday',
        shortDay: 'Thu',
        hasProgram: true,
        programs: [
            { name: "Sisters' Badminton", time: '7:00 PM', category: 'recreation' }
        ]
    },
    {
        day: 'Friday',
        shortDay: 'Fri',
        hasProgram: true,
        programs: [
            { name: 'Main Community Halaqa', time: 'After Isha', category: 'education', note: 'Babysitting provided' },
            { name: 'Family Night (1st Fri)', time: '6:00 PM', category: 'social' }
        ]
    },
    {
        day: 'Saturday',
        shortDay: 'Sat',
        hasProgram: false,
        programs: []
    },
    {
        day: 'Sunday',
        shortDay: 'Sun',
        hasProgram: true,
        programs: [
            { name: 'Seerah of the Prophet', time: '10:00 AM', category: 'education' }
        ]
    }
];

export const programCards: ProgramCard[] = [
    {
        id: 'family-night',
        title: 'Family Night',
        subtitle: 'The Potluck',
        description: 'Monthly Community Dinner. First Friday of every month.',
        detail: 'Guest Speakers, Kids Activities, and diverse cuisines. Bring a dish to share (Potluck style) or $10/family for pizza nights.',
        icon: Users
    },
    {
        id: 'open-gym',
        title: 'The Open Gym',
        subtitle: 'Recreation',
        description: "Brothers' Basketball (Tue) & Sisters' Badminton (Thu).",
        detail: 'Building brotherhood and sisterhood through healthy competition. $5 entry fee.',
        icon: Dumbbell
    },
    {
        id: 'morning-chai',
        title: 'Morning Chai',
        subtitle: 'Seniors Social',
        description: "Elders' Social Club.",
        detail: 'Every Wednesday morning after Fajr. A space for our seniors to connect over tea and conversation.',
        icon: Coffee
    }
];

export const halaqas: Halaqa[] = [
    {
        time: 'Daily - Post-Fajr',
        title: 'Riyad-us-Saliheen Reading',
        description: 'Start your day with hadith from the Gardens of the Righteous.',
        icon: Sun
    },
    {
        time: 'Friday - After Isha',
        title: 'Main Community Halaqa',
        description: 'Weekly topic varies. Babysitting provided for families.',
        icon: Moon
    },
    {
        time: 'Sunday - 10:00 AM',
        title: 'Seerah of the Prophet ﷺ',
        description: 'A deep dive into the life and times of our beloved Messenger.',
        icon: BookOpen
    }
];
