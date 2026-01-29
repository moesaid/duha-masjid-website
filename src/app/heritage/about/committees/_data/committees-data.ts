import { LucideIcon, GraduationCap, Building2, Heart, Calendar, Users, DollarSign, Briefcase, BookOpen, HandHeart } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface Committee {
    id: string;
    name: string;
    icon: LucideIcon;
    description: string;
    chair: string;
    members: number;
    meetingSchedule: string;
    responsibilities: string[];
}

// ============================================
// Static Data
// ============================================

export const committees: Committee[] = [
    {
        id: 'education',
        name: 'Education Committee',
        icon: GraduationCap,
        description: 'Oversees all educational programs including weekend school, youth programs, and adult education.',
        chair: 'Sr. Zahra Hassan',
        members: 8,
        meetingSchedule: 'First Tuesday of each month, 7:30 PM',
        responsibilities: [
            'Curriculum development and review',
            'Teacher recruitment and training',
            'Student progress monitoring',
            'Parent communication'
        ]
    },
    {
        id: 'facilities',
        name: 'Facilities Committee',
        icon: Building2,
        description: 'Maintains and improves the masjid buildings, grounds, and equipment.',
        chair: 'Br. Hamza Osman',
        members: 6,
        meetingSchedule: 'Second Saturday of each month, 10:00 AM',
        responsibilities: [
            'Building maintenance coordination',
            'Expansion planning',
            'Safety and security protocols',
            'Vendor management'
        ]
    },
    {
        id: 'finance',
        name: 'Finance Committee',
        icon: DollarSign,
        description: 'Manages the masjid budget, fundraising, and financial transparency.',
        chair: 'Br. Khalid Mansour',
        members: 5,
        meetingSchedule: 'Third Wednesday of each month, 8:00 PM',
        responsibilities: [
            'Budget preparation and oversight',
            'Fundraising campaign coordination',
            'Zakat collection and distribution',
            'Financial reporting'
        ]
    },
    {
        id: 'outreach',
        name: 'Outreach & Dawah',
        icon: Heart,
        description: 'Leads interfaith dialogue, new Muslim support, and community relations.',
        chair: 'Dr. Ahmad Malik',
        members: 10,
        meetingSchedule: 'Last Sunday of each month, 12:30 PM',
        responsibilities: [
            'Interfaith events coordination',
            'New Muslim mentorship',
            'Open house programs',
            'Media and public relations'
        ]
    },
    {
        id: 'youth',
        name: 'Youth Committee',
        icon: Users,
        description: 'Plans and executes programs for teenagers and young adults.',
        chair: 'Br. Yusuf Ibrahim',
        members: 7,
        meetingSchedule: 'Every other Friday, 6:00 PM',
        responsibilities: [
            'Youth halaqas and workshops',
            'Sports and recreation',
            'College prep programs',
            'Leadership development'
        ]
    },
    {
        id: 'sisters',
        name: 'Sisters Committee',
        icon: HandHeart,
        description: 'Coordinates programs specifically designed for women in the community.',
        chair: 'Sr. Fatima Ahmed',
        members: 9,
        meetingSchedule: 'First Sunday of each month, 11:00 AM',
        responsibilities: [
            'Sisters-only events',
            'Quran circles for women',
            'Support groups',
            'Networking events'
        ]
    },
    {
        id: 'events',
        name: 'Events Committee',
        icon: Calendar,
        description: 'Organizes Eid celebrations, community dinners, and special occasions.',
        chair: 'Sr. Nadia Khan',
        members: 12,
        meetingSchedule: 'Monthly (varies by event schedule)',
        responsibilities: [
            'Eid celebration planning',
            'Community iftar coordination',
            'Fundraising event logistics',
            'Volunteer coordination'
        ]
    },
    {
        id: 'services',
        name: 'Community Services',
        icon: Briefcase,
        description: 'Provides support services including food pantry, counseling referrals, and emergency assistance.',
        chair: 'Br. Mohammed Ali',
        members: 8,
        meetingSchedule: 'Second Thursday of each month, 7:00 PM',
        responsibilities: [
            'Food pantry operations',
            'Emergency financial assistance',
            'Refugee support',
            'Community resource referrals'
        ]
    }
];
