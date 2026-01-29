import { LucideIcon } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface BoardMember {
    name: string;
    role: string;
    image: string;
    email: string;
}

export interface SubCommittee {
    name: string;
    members: string[];
}

// ============================================
// Static Data
// ============================================

export const executiveCommittee: BoardMember[] = [
    {
        name: 'Dr. Omar Khan',
        role: 'President',
        image: '/images/shykh.jpg',
        email: 'president@alnoormasjid.org',
    },
    {
        name: 'Sr. Fatima Ahmed',
        role: 'Vice President',
        image: '/images/mosque-dome.jpg',
        email: 'vp@alnoormasjid.org',
    },
    {
        name: 'Br. Khalid Mansour',
        role: 'Treasurer',
        image: '/images/shykh.jpg',
        email: 'treasurer@alnoormasjid.org',
    },
    {
        name: 'Sr. Aisha Patel',
        role: 'Secretary',
        image: '/images/mosque-dome.jpg',
        email: 'secretary@alnoormasjid.org',
    },
    {
        name: 'Br. Yusuf Ibrahim',
        role: 'Trustee',
        image: '/images/shykh.jpg',
        email: 'trustee1@alnoormasjid.org',
    },
    {
        name: 'Sr. Khadijah Hassan',
        role: 'Trustee',
        image: '/images/mosque-dome.jpg',
        email: 'trustee2@alnoormasjid.org',
    },
    {
        name: 'Dr. Ahmad Malik',
        role: 'Trustee',
        image: '/images/shykh.jpg',
        email: 'trustee3@alnoormasjid.org',
    },
    {
        name: 'Sr. Maryam Ali',
        role: 'Trustee',
        image: '/images/mosque-dome.jpg',
        email: 'trustee4@alnoormasjid.org',
    },
];

export const subCommittees: SubCommittee[] = [
    {
        name: 'Education Committee',
        members: ['Sr. Zahra Hassan (Chair)', 'Br. Imran Syed', 'Sr. Nadia Khan', 'Br. Tariq Abdullah'],
    },
    {
        name: 'Finance Committee',
        members: ['Br. Khalid Mansour (Chair)', 'Dr. Rashid Ahmed', 'Sr. Amina Yusuf'],
    },
    {
        name: 'Maintenance & Facilities',
        members: ['Br. Hamza Osman (Chair)', 'Br. Bilal Thompson', 'Br. Jamal Richards', 'Br. Idris Brown'],
    },
    {
        name: 'Youth & Community',
        members: ['Sr. Khadijah Hassan (Chair)', 'Br. Yusuf Ibrahim', 'Sr. Layla Ahmad', 'Br. Adam Malik'],
    },
    {
        name: 'Sisters Programs',
        members: ['Sr. Fatima Ahmed (Chair)', 'Sr. Maryam Ali', 'Sr. Hafsa Rahman', 'Sr. Sumaya Osman'],
    },
    {
        name: 'Outreach & Dawah',
        members: ['Dr. Ahmad Malik (Chair)', 'Br. Mohammed Ali', 'Sr. Sarah Johnson', 'Br. David Hussein'],
    },
];
