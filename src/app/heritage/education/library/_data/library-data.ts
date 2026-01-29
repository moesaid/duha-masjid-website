// Library Page Data
// Types and static data for the Maktaba (Community Library)

import { LucideIcon, Users, Calendar, AlertCircle, CreditCard } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface Book {
    title: string;
    author: string;
    subject: string;
    language: string;
    color: string;
}

export interface ShelfCollection {
    shelf: string;
    books: { title: string; color: string }[];
}

export interface BorrowingRule {
    icon: LucideIcon;
    title: string;
    description: string;
}

// ============================================
// Book Catalog
// ============================================

export const allBooks: Book[] = [
    { title: 'Quran Translations', author: 'Various', subject: 'quran', language: 'english', color: '#1A4D3E' },
    { title: 'Tafseer Ibn Kathir', author: 'Ibn Kathir', subject: 'quran', language: 'arabic', color: '#2C5F4F' },
    { title: 'Sahih Bukhari', author: 'Imam Bukhari', subject: 'hadith', language: 'arabic', color: '#5C2626' },
    { title: 'Sahih Muslim', author: 'Imam Muslim', subject: 'hadith', language: 'arabic', color: '#7A3B3B' },
    { title: 'Riyad-us-Saliheen', author: 'Imam Nawawi', subject: 'hadith', language: 'english', color: '#1A3A5C' },
    { title: '40 Hadith Nawawi', author: 'Imam Nawawi', subject: 'hadith', language: 'english', color: '#2C5275' },
    { title: 'The Sealed Nectar', author: 'Safiur Rahman Mubarakpuri', subject: 'seerah', language: 'english', color: '#8B4513' },
    { title: 'Men Around the Prophet', author: 'Khalid Muhammad Khalid', subject: 'seerah', language: 'english', color: '#6B4423' },
    { title: 'Stories of the Prophets', author: 'Ibn Kathir', subject: 'seerah', language: 'english', color: '#5D4E37' },
    { title: 'Fiqh us-Sunnah', author: 'Sayyid Sabiq', subject: 'fiqh', language: 'english', color: '#6B4423' },
    { title: 'My First Quran', author: 'Various', subject: 'children', language: 'english', color: '#4A7C59' },
    { title: 'Prophet Stories for Kids', author: 'Various', subject: 'children', language: 'english', color: '#E07B39' },
    { title: 'Fortress of the Muslim', author: 'Saeed Al-Qahtani', subject: 'hadith', language: 'english', color: '#8B4513' },
    { title: 'Purification of the Heart', author: 'Hamza Yusuf', subject: 'fiqh', language: 'english', color: '#2C5275' },
];

// ============================================
// Shelf Collections
// ============================================

export const collections: ShelfCollection[] = [
    {
        shelf: 'The Essentials',
        books: [
            { title: 'Quran Translations', color: '#1A4D3E' },
            { title: 'Tafseer Ibn Kathir', color: '#2C5F4F' },
            { title: 'Sahih Bukhari', color: '#5C2626' },
            { title: 'Sahih Muslim', color: '#7A3B3B' },
            { title: 'Riyad-us-Saliheen', color: '#1A3A5C' },
            { title: '40 Hadith Nawawi', color: '#2C5275' },
            { title: 'Sunan Abu Dawud', color: '#3D5A3D' },
            { title: 'Jami Tirmidhi', color: '#4A3728' },
            { title: 'Sunan Ibn Majah', color: '#5C2626' },
            { title: 'Muwatta Malik', color: '#1A4D3E' },
            { title: 'Fortress of Muslim', color: '#8B4513' },
            { title: 'Tafseer Jalalayn', color: '#2C5F4F' },
            { title: 'Sahih at-Targhib', color: '#1A3A5C' },
            { title: 'Bulugh al-Maram', color: '#5D4E37' },
            { title: 'Umdat al-Ahkam', color: '#3D2914' },
            { title: 'Fiqh us-Sunnah', color: '#6B4423' },
            { title: 'Purification of the Heart', color: '#2C5275' },
            { title: 'Book of Monotheism', color: '#1A4D3E' }
        ]
    },
    {
        shelf: 'Seerah & History',
        books: [
            { title: 'The Sealed Nectar', color: '#8B4513' },
            { title: 'Men Around Prophet', color: '#6B4423' },
            { title: 'Stories of Prophets', color: '#5D4E37' },
            { title: 'Companions of Prophet', color: '#4A3728' },
            { title: 'Islamic History', color: '#3D2914' },
            { title: 'Women of Madina', color: '#7A3B3B' },
            { title: 'Life of Umar', color: '#1A3A5C' },
            { title: 'Abu Bakr As-Siddiq', color: '#5C2626' },
            { title: 'Uthman Ibn Affan', color: '#2C5F4F' },
            { title: 'Ali Ibn Abi Talib', color: '#1A4D3E' },
            { title: 'Mothers of Believers', color: '#8B4513' },
            { title: 'In the Footsteps', color: '#6B4423' },
            { title: 'When Moon Split', color: '#5D4E37' },
            { title: 'Noble Life', color: '#4A3728' },
            { title: 'Tarikh at-Tabari', color: '#3D2914' },
            { title: 'Light in Darkness', color: '#7A3B3B' }
        ]
    },
    {
        shelf: "Children's Corner",
        books: [
            { title: 'My First Quran', color: '#4A7C59' },
            { title: 'Prophet Stories', color: '#E07B39' },
            { title: 'Good Manners', color: '#5B8C5A' },
            { title: 'Ramadan Joy', color: '#7B68EE' },
            { title: 'Eid Celebration', color: '#CD853F' },
            { title: 'Learn to Pray', color: '#4A9C6F' },
            { title: 'Hajj Adventure', color: '#D98236' },
            { title: 'Islamic ABCs', color: '#6B8C5A' },
            { title: 'Bedtime Duas', color: '#9B79CB' },
            { title: 'Zakat Heroes', color: '#B8963F' },
            { title: 'Fasting Friends', color: '#5A9C7A' },
            { title: 'Kind Words', color: '#E89C4A' },
            { title: 'Brave Sahaba', color: '#6A9B52' },
            { title: 'Little Mumin', color: '#8B68DE' },
            { title: 'My Wudu Book', color: '#5AAC8A' },
            { title: 'Mosque Manners', color: '#DA7B49' }
        ]
    }
];

// ============================================
// Borrowing Rules
// ============================================

export const borrowingRules: BorrowingRule[] = [
    {
        icon: Users,
        title: 'Membership',
        description: 'Free for all registered community members. Just bring a valid ID to register.'
    },
    {
        icon: Calendar,
        title: 'Loan Period',
        description: 'Books may be borrowed for 2 weeks, with one renewal allowed if not reserved.'
    },
    {
        icon: AlertCircle,
        title: 'Late Policy',
        description: 'Please return books on time as an Amanah (trust). A gentle reminder will be sent.'
    },
    {
        icon: CreditCard,
        title: 'Library Card',
        description: 'Apply at the front desk or online. Cards are issued within 24 hours.'
    }
];

// ============================================
// Featured Book
// ============================================

export const featuredBook = {
    title: 'The Sealed Nectar (Ar-Raheeq Al-Makhtum)',
    author: 'Safiur Rahman Mubarakpuri',
    arabicTitle: 'الرحيق المختوم',
    review: "An award-winning biography of Prophet Muhammad ﷺ that beautifully captures his life, character, and mission. This comprehensive work won first prize in the Muslim World League competition and remains one of the most beloved Seerah books in the English language."
};

// ============================================
// Library Info
// ============================================

export const libraryInfo = {
    location: '2nd Floor, next to the Conference Room',
    hours: 'Open during Maghrib and Isha prayers daily',
    staffedHours: 'Staffed on Sundays: 10 AM – 2 PM',
    totalTitles: '2,000+',
    languages: '3'
};
