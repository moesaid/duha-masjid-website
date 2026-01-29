import { LucideIcon, BookOpen, MessageCircle, Dumbbell, Heart, Coffee, Calendar, Award, Users, Sparkles, Star } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface WeeklyProgram {
    icon: LucideIcon;
    title: string;
    description: string;
    time: string;
    instructor: string;
}

export interface SocialEvent {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface MentorshipTrack {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

// ============================================
// Static Data
// ============================================

export const weeklyPrograms: WeeklyProgram[] = [
    {
        icon: BookOpen,
        title: 'Tafseer & Tea',
        description: 'Weekly Quran study circle exploring the deeper meanings of the Divine Word in an intimate, nurturing setting.',
        time: 'Sundays after Dhuhr',
        instructor: 'Ustadha Fatima'
    },
    {
        icon: MessageCircle,
        title: 'Quran & Tajweed',
        description: 'Learn proper recitation with qualified female instructors in a supportive, judgment-free environment.',
        time: 'Tuesdays 10:00 AM',
        instructor: 'Sr. Aisha Rahman'
    },
    {
        icon: Dumbbell,
        title: "Sisters' Fitness",
        description: 'Stay active with low-impact exercises, yoga, and wellness sessions in our private sisters-only facility.',
        time: 'Mon & Thu 6:00 PM',
        instructor: 'Coach Mariam'
    }
];

export const socialEvents: SocialEvent[] = [
    {
        icon: Heart,
        title: 'New Mom Circle',
        description: 'Meal trains, baby showers, and community support for new and expecting mothers.'
    },
    {
        icon: Coffee,
        title: 'Chai & Chat',
        description: 'Monthly casual gatherings to build friendships over warm drinks and meaningful conversation.'
    },
    {
        icon: Calendar,
        title: 'Annual Retreat',
        description: 'Our flagship spring event featuring renowned female scholars and workshops.'
    },
    {
        icon: Award,
        title: 'Service Projects',
        description: 'Seasonal charity initiatives including school supply drives and winter coat collections.'
    },
    {
        icon: Users,
        title: 'Study Circles',
        description: 'Small group sessions exploring Islamic texts and contemporary topics.'
    },
    {
        icon: Sparkles,
        title: 'Craft & Create',
        description: 'Quarterly creative workshops featuring Islamic calligraphy, sewing, and art.'
    }
];

export const mentorshipTracks: MentorshipTrack[] = [
    {
        icon: Star,
        title: 'New to the Community',
        description: 'Welcome package, buddy system, and orientation for sisters who just joined.'
    },
    {
        icon: BookOpen,
        title: 'Seekers of Knowledge',
        description: 'Structured learning paths with female scholars for deeper Islamic education.'
    },
    {
        icon: Heart,
        title: 'Life Transitions',
        description: 'Support circles for marriage, motherhood, career changes, and other milestones.'
    }
];

export const testimonials: Testimonial[] = [
    {
        quote: "The sisters here welcomed me like family when I first accepted Islam. I never felt alone.",
        author: "Sarah M.",
        role: "New Muslim, 2023"
    },
    {
        quote: "Tafseer & Tea is the highlight of my week. It's where I found my closest friends.",
        author: "Fatima A.",
        role: "Member since 2019"
    }
];
