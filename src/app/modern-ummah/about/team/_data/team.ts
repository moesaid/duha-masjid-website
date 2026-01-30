export interface TeamMember {
    id: string;
    name: string;
    role: string;
    credentials?: string[];
    bio?: string;
    image: string;
}

export interface ScheduleItem {
    day: string;
    time: string;
    activity: string;
}

export interface Khutbah {
    id: string;
    title: string;
    speaker: string;
    date: string;
    duration: string;
}

// Main Imam
export const headImam: TeamMember = {
    id: 'imam-abdullah',
    name: 'Sheikh Abdullah Rahman',
    role: 'Head Imam & Director of Religious Affairs',
    credentials: [
        'PhD in Islamic Studies, Al-Azhar University',
        'MA in Arabic Language & Literature',
        '20+ years of community leadership',
        'Author of "Faith in the Modern Age"',
        'Certified Family Counselor',
    ],
    bio: 'Sheikh Abdullah Rahman has been serving our community for over 20 years, bringing wisdom, compassion, and scholarly excellence to our masjid. His approach blends deep Islamic knowledge with practical guidance for modern life, helping families navigate faith in today\'s world.',
    image: '/images/shykh.jpg',
};

// Weekly Schedule
export const imamSchedule: ScheduleItem[] = [
    { day: 'Monday', time: '10:00 AM - 12:00 PM', activity: 'Counseling' },
    { day: 'Wednesday', time: '2:00 PM - 4:00 PM', activity: 'Open Office' },
    { day: 'Friday', time: 'After Jummah', activity: 'Q&A Session' },
    { day: 'Saturday', time: '11:00 AM - 1:00 PM', activity: 'Youth Mentorship' },
];

// Resident Scholars
export const residentScholars: TeamMember[] = [
    {
        id: 'ustadha-fatima',
        name: 'Ustadha Fatima Hassan',
        role: 'Director of Education',
        image: '/images/arab-women-1.jpg',
    },
    {
        id: 'sheikh-omar',
        name: 'Sheikh Omar Ali',
        role: 'Youth Chaplain',
        image: '/images/arab-men-1.jpg',
    },
    {
        id: 'imam-yusuf',
        name: 'Imam Yusuf Ibrahim',
        role: 'Community Counselor',
        image: '/images/arab-men-2.jpg',
    },
];

// Recent Khutbahs
export const recentKhutbahs: Khutbah[] = [
    {
        id: 'khutbah-1',
        title: 'The Rights of Neighbors in Islam',
        speaker: 'Sheikh Abdullah Rahman',
        date: 'Jan 24, 2026',
        duration: '32 min',
    },
    {
        id: 'khutbah-2',
        title: 'Preparing Hearts for Ramadan',
        speaker: 'Sheikh Omar Ali',
        date: 'Jan 17, 2026',
        duration: '28 min',
    },
    {
        id: 'khutbah-3',
        title: 'Patience in Times of Trial',
        speaker: 'Sheikh Abdullah Rahman',
        date: 'Jan 10, 2026',
        duration: '35 min',
    },
];
