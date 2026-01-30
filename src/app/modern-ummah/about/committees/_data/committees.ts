import { LucideIcon, GraduationCap, Building2, Heart, Calendar, Users, DollarSign, BookOpen, HandHeart, Shield, Megaphone, Baby, Wallet, Home } from 'lucide-react';

export type CommitteeCategory = 'all' | 'governance' | 'programs' | 'services' | 'outreach';
export type CommitteeStatus = 'open' | 'active' | 'full';

export interface Committee {
    id: string;
    name: string;
    category: CommitteeCategory;
    icon: LucideIcon;
    iconColor: string;
    chair: string;
    members: string[];
    description: string;
    meetingSchedule: string;
    status: CommitteeStatus;
    statusLabel: string;
}

export const committees: Committee[] = [
    {
        id: 'education',
        name: 'Education Committee',
        category: 'programs',
        icon: BookOpen,
        iconColor: 'oklch(0.60 0.15 85)', // Gold
        chair: 'Sr. Zahra Hassan',
        members: ['Br. Imran Syed', 'Sr. Nadia Khan', 'Br. Tariq Abdullah', 'Sr. Amina Yusuf'],
        description: 'Oversees all educational programs including weekend school, Quran academy, and adult education.',
        meetingSchedule: 'First Monday of each month, 7:00 PM',
        status: 'open',
        statusLabel: 'Open for Volunteers',
    },
    {
        id: 'finance',
        name: 'Finance Committee',
        category: 'governance',
        icon: Wallet,
        iconColor: 'oklch(0.55 0.12 250)', // Slate blue
        chair: 'Br. Khalid Mansour',
        members: ['Dr. Rashid Ahmed', 'Sr. Amina Yusuf', 'Br. Hassan Ali'],
        description: 'Manages budget planning, financial reporting, and ensures fiscal responsibility.',
        meetingSchedule: 'Quarterly, dates announced via newsletter',
        status: 'active',
        statusLabel: 'Meeting Quarterly',
    },
    {
        id: 'facilities',
        name: 'Maintenance & Facilities',
        category: 'services',
        icon: Home,
        iconColor: 'oklch(0.55 0.10 60)', // Amber/brown
        chair: 'Br. Hamza Osman',
        members: ['Br. Bilal Thompson', 'Br. Jamal Richards', 'Br. Idris Brown'],
        description: 'Responsible for building upkeep, renovations, and ensuring a clean, welcoming environment.',
        meetingSchedule: 'As needed, typically bi-weekly',
        status: 'open',
        statusLabel: 'Open for Volunteers',
    },
    {
        id: 'youth',
        name: 'Youth & Community',
        category: 'programs',
        icon: Users,
        iconColor: 'oklch(0.65 0.18 145)', // Emerald
        chair: 'Sr. Khadijah Hassan',
        members: ['Br. Yusuf Ibrahim', 'Sr. Layla Ahmad', 'Br. Adam Malik', 'Sr. Maryam Ali'],
        description: 'Plans youth programs, community events, and fosters engagement among young Muslims.',
        meetingSchedule: 'Second Wednesday of each month, 8:00 PM',
        status: 'open',
        statusLabel: 'Open for Volunteers',
    },
    {
        id: 'women',
        name: 'Sisters Programs',
        category: 'programs',
        icon: Heart,
        iconColor: 'oklch(0.65 0.20 25)', // Rose
        chair: 'Sr. Fatima Ahmed',
        members: ['Sr. Maryam Ali', 'Sr. Hafsa Rahman', 'Sr. Sumaya Osman'],
        description: 'Coordinates programs specifically designed for sisters, including halaqas and support groups.',
        meetingSchedule: 'Every other Saturday after Dhuhr',
        status: 'active',
        statusLabel: 'Meeting Bi-weekly',
    },
    {
        id: 'outreach',
        name: 'Outreach & Dawah',
        category: 'outreach',
        icon: Megaphone,
        iconColor: 'oklch(0.65 0.15 175)', // Teal
        chair: 'Dr. Ahmad Malik',
        members: ['Br. Mohammed Ali', 'Sr. Sarah Johnson', 'Br. David Hussein'],
        description: 'Promotes interfaith dialogue, community outreach, and welcoming new Muslims.',
        meetingSchedule: 'Third Thursday of each month, 7:30 PM',
        status: 'open',
        statusLabel: 'Open for Volunteers',
    },
    {
        id: 'security',
        name: 'Security & Safety',
        category: 'services',
        icon: Shield,
        iconColor: 'oklch(0.50 0.12 240)', // Dark blue
        chair: 'Br. Kareem Washington',
        members: ['Br. Ahmad Ali', 'Br. Suleiman Johnson', 'Sr. Fatima Brown'],
        description: 'Ensures the safety and security of the masjid premises and community members.',
        meetingSchedule: 'Monthly, dates vary',
        status: 'active',
        statusLabel: 'Meeting Monthly',
    },
    {
        id: 'family',
        name: 'Family Services',
        category: 'services',
        icon: Baby,
        iconColor: 'oklch(0.70 0.15 340)', // Pink
        chair: 'Sr. Aisha Patel',
        members: ['Dr. Layla Hassan', 'Br. Omar Syed', 'Sr. Khadijah Ali'],
        description: 'Provides support for families including counseling referrals, new parent support, and family events.',
        meetingSchedule: 'First Friday of each month, after Maghrib',
        status: 'open',
        statusLabel: 'Open for Volunteers',
    },
];

export const categoryLabels: Record<CommitteeCategory, string> = {
    all: 'All',
    governance: 'Governance',
    programs: 'Programs',
    services: 'Services',
    outreach: 'Outreach',
};
