import { LucideIcon, Users, BookOpen, Heart, MessageCircle, Mountain, Star } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface Pillar {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    description: string;
    color: string;
}

export interface ProgramTrack {
    id: string;
    badge: string;
    ageGroup: string;
    color: string;
    focus: string;
    description: string;
    activities: string[];
    meeting: string;
}

export interface ScheduleItem {
    day: string;
    time: string;
    event: string;
    description: string;
    icon: LucideIcon;
}

export interface UpcomingEvent {
    title: string;
    date: string;
    location: string;
    image: string;
    status: string;
    statusColor: string;
}

// ============================================
// Static Data
// ============================================

export const pillars: Pillar[] = [
    {
        icon: Users,
        title: 'Suhba',
        subtitle: 'Companionship',
        description: 'Good company is the foundation of faith. We create a safe space for lifelong friendships.',
        color: '#4A7C59'
    },
    {
        icon: BookOpen,
        title: 'Ilm',
        subtitle: 'Knowledge',
        description: 'Relevant discussions on navigating modern life as a Muslim.',
        color: '#8B7355'
    },
    {
        icon: Heart,
        title: 'Khidmah',
        subtitle: 'Service',
        description: 'Giving back to the community through food drives and cleanups.',
        color: '#8B4A5E'
    }
];

export const programTracks: ProgramTrack[] = [
    {
        id: 'explorers',
        badge: 'The Explorers',
        ageGroup: 'Middle School (Grades 6-8)',
        color: '#4A7C59',
        focus: 'Fun, Identity, and Basics',
        description: 'A safe space to build friendships, learn the basics of Islam, and explore who you are as a young Muslim.',
        activities: ['Monthly Game Nights', 'Outdoor Adventures', 'Identity Workshops', 'Community Service Days'],
        meeting: 'Sundays 2:00 PM - 4:00 PM'
    },
    {
        id: 'believers',
        badge: 'The Young Believers',
        ageGroup: 'High School (Grades 9-12)',
        color: '#8B7355',
        focus: 'Mentorship, Deeper Talks, College Prep',
        description: 'Deeper discussions on faith, leadership development, and preparation for life after high school.',
        activities: ['Weekly Halaqas', 'SAT Study Groups', 'College Application Help', 'Mentor Matching'],
        meeting: 'Fridays after Maghrib (Boys) / Saturdays 2:00 PM (Girls)'
    },
    {
        id: 'professionals',
        badge: 'The Professionals',
        ageGroup: 'College & Young Adults (18-30)',
        color: '#8B4A5E',
        focus: 'Networking, Marriage Talks, Career Advice',
        description: 'Building a community of young Muslim professionals navigating careers, relationships, and faith.',
        activities: ['Career Networking Events', 'Marriage Preparation Series', 'Monthly Brunches', 'Speaker Panels'],
        meeting: '1st & 3rd Saturdays 6:00 PM'
    }
];

export const weeklySchedule: ScheduleItem[] = [
    {
        day: 'Friday',
        time: '7:00 PM - 9:00 PM',
        event: 'The Main Halaqa',
        description: 'Pizza & Talk. Weekly gathering for high school youth.',
        icon: MessageCircle
    },
    {
        day: 'Saturday',
        time: 'Monthly (Fajr)',
        event: 'Fajr & Hike',
        description: 'Wake up early, pray Fajr, and hit the trails together.',
        icon: Mountain
    },
    {
        day: 'Sunday',
        time: '3:00 PM - 5:00 PM',
        event: 'Open Gym / Basketball',
        description: 'Drop-in sports and recreation. All skill levels welcome.',
        icon: Star
    }
];

export const upcomingEvents: UpcomingEvent[] = [
    {
        title: 'Annual Winter Retreat (Ski Trip)',
        date: 'Dec 24-26, 2026',
        location: 'Camp Pines, Minnesota',
        image: '/images/future-generations.jpg',
        status: 'Registration Open',
        statusColor: '#4A7C59'
    },
    {
        title: 'Six Flags Muslim Day',
        date: 'June 15, 2027',
        location: 'Six Flags Great America',
        image: '/images/mosque-community.jpg',
        status: 'Coming Soon',
        statusColor: '#8B7355'
    },
    {
        title: 'Ramadan Qiyam Night',
        date: 'March 2027',
        location: 'Duha Masjid',
        image: '/images/prayer-hall.jpg',
        status: 'Waitlist Only',
        statusColor: '#8B4A5E'
    }
];
