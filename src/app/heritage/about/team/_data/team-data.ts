import { LucideIcon, GraduationCap, BookOpen, Clock, Calendar } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface ScheduleSlot {
    day: string;
    time: string;
    type: string;
}

export interface SeniorImam {
    name: string;
    title: string;
    image: string;
    bio: string;
    credentials: string[];
    schedule: ScheduleSlot[];
}

export interface Scholar {
    name: string;
    role: string;
    specialty: string;
    image: string;
}

export interface Khutbah {
    title: string;
    speaker: string;
    date: string;
    thumbnail: string;
    duration: string;
}

// ============================================
// Static Data
// ============================================

export const seniorImam: SeniorImam = {
    name: 'Sheikh Abdullah Rahman',
    title: 'Head Imam & Director of Religious Affairs',
    image: '/images/heritage/shykh.jpg',
    bio: `Sheikh Abdullah Rahman has been serving our community for over 20 years, bringing wisdom, compassion, and scholarly excellence to our masjid. His approach blends deep Islamic knowledge with practical guidance for modern life, helping families navigate faith in today's world.`,
    credentials: [
        'PhD in Islamic Studies, Al-Azhar University',
        'MA in Arabic Language & Literature',
        '20+ years of community leadership',
        'Author of "Faith in the Modern Age"',
        'Certified Family Counselor',
    ],
    schedule: [
        { day: 'Monday', time: '10:00 AM - 12:00 PM', type: 'Counseling' },
        { day: 'Wednesday', time: '2:00 PM - 4:00 PM', type: 'Open Office' },
        { day: 'Friday', time: 'After Jummah', type: 'Q&A Session' },
        { day: 'Saturday', time: '11:00 AM - 1:00 PM', type: 'Youth Mentorship' },
    ],
};

export const residentScholars: Scholar[] = [
    {
        name: 'Imam Yusuf Hassan',
        role: 'Associate Imam',
        specialty: 'Fiqh & Family Counseling',
        image: '/images/heritage/arab-men-1.jpg',
    },
    {
        name: 'Ustadh Ahmad Malik',
        role: 'Youth Director',
        specialty: 'Youth Development & Sports',
        image: '/images/heritage/arab-men-2.jpg',
    },
    {
        name: 'Ustadha Khadijah Omar',
        role: 'Quran Instructor',
        specialty: 'Tajweed & Hifdh Programs',
        image: '/images/heritage/arab-women-1.jpg',
    },
    {
        name: 'Sheikh Ibrahim Ali',
        role: 'Weekend School Director',
        specialty: 'Islamic Education',
        image: '/images/heritage/arab-men-3.jpg',
    },
    {
        name: 'Ustadha Maryam Hassan',
        role: 'Sisters Programs Lead',
        specialty: "Women's Spirituality",
        image: '/images/heritage/arab-women-2.jpg',
    },
    {
        name: 'Ustadh Bilal Thompson',
        role: 'New Muslim Coordinator',
        specialty: 'Shahada & Integration',
        image: '/images/heritage/arab-men-4.jpg',
    },
];

export const recentKhutbahs: Khutbah[] = [
    {
        title: 'The Blessing of Gratitude',
        speaker: 'Sheikh Abdullah Rahman',
        date: 'January 24, 2025',
        thumbnail: '/images/heritage/mosque-interior.jpg',
        duration: '32:15',
    },
    {
        title: 'Patience in Times of Trial',
        speaker: 'Imam Yusuf Hassan',
        date: 'January 17, 2025',
        thumbnail: '/images/heritage/quran-book.jpg',
        duration: '28:42',
    },
    {
        title: 'Building Strong Muslim Families',
        speaker: 'Sheikh Abdullah Rahman',
        date: 'January 10, 2025',
        thumbnail: '/images/heritage/youth-learning.jpg',
        duration: '35:10',
    },
    {
        title: 'The Power of Dua',
        speaker: 'Imam Yusuf Hassan',
        date: 'January 3, 2025',
        thumbnail: '/images/heritage/prayer-hands.jpg',
        duration: '30:05',
    },
];
