import { LucideIcon, Wheat, Apple, Beef, Box, Users } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface Offering {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface ImpactStat {
    number: string;
    label: string;
}

export interface VolunteerRole {
    icon: LucideIcon;
    label: string;
}

// ============================================
// Static Data
// ============================================

export const offerings: Offering[] = [
    {
        icon: Wheat,
        title: 'Staples',
        description: 'Rice, Flour, Cooking Oil, Sugar, Lentils, and other pantry essentials.'
    },
    {
        icon: Apple,
        title: 'Fresh Produce',
        description: 'Seasonal fruits and vegetables sourced from local farms and donations.'
    },
    {
        icon: Beef,
        title: 'Halal Meat',
        description: "Zabiha chicken and meat when available, ensuring our community's dietary needs are met."
    }
];

export const wantedItems: string[] = [
    'Canned Tuna or Salmon',
    'Peanut Butter',
    'Pasta & Rice',
    'Cooking Oil',
    'Canned Beans'
];

export const impactStats: ImpactStat[] = [
    { number: '1,200', label: 'Families Served Monthly' },
    { number: '50,000', label: 'lbs Food Distributed' },
    { number: '100%', label: 'Volunteer Run' }
];

export const volunteerRoles: VolunteerRole[] = [
    { icon: Box, label: 'Packing Boxes (Fridays, 6 PM)' },
    { icon: Users, label: 'Distribution (Saturdays, 8:30 AM)' }
];
