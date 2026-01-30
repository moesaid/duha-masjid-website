import { LucideIcon, Users, Calendar, AlertCircle, CreditCard, Book, Clock, MapPin } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface Book {
    title: string;
    author: string;
    subject: string;
    language: string;
    color: string;
    coverImage?: string; // Potential future enhancement
}

export interface ShelfCollection {
    shelf: string;
    description: string;
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
    { title: 'Quran Translations', author: 'Various', subject: 'quran', language: 'english', color: 'bg-emerald-900' },
    { title: 'Tafseer Ibn Kathir', author: 'Ibn Kathir', subject: 'quran', language: 'arabic', color: 'bg-emerald-800' },
    { title: 'Sahih Bukhari', author: 'Imam Bukhari', subject: 'hadith', language: 'arabic', color: 'bg-amber-900' },
    { title: 'Sahih Muslim', author: 'Imam Muslim', subject: 'hadith', language: 'arabic', color: 'bg-amber-800' },
    { title: 'Riyad-us-Saliheen', author: 'Imam Nawawi', subject: 'hadith', language: 'english', color: 'bg-slate-800' },
    { title: '40 Hadith Nawawi', author: 'Imam Nawawi', subject: 'hadith', language: 'english', color: 'bg-slate-700' },
    { title: 'The Sealed Nectar', author: 'S.R. Mubarakpuri', subject: 'seerah', language: 'english', color: 'bg-amber-700' },
    { title: 'Men Around the Prophet', author: 'K.M. Khalid', subject: 'seerah', language: 'english', color: 'bg-amber-600' },
    { title: 'Stories of the Prophets', author: 'Ibn Kathir', subject: 'seerah', language: 'english', color: 'bg-amber-800' },
    { title: 'Fiqh us-Sunnah', author: 'Sayyid Sabiq', subject: 'fiqh', language: 'english', color: 'bg-amber-900' },
    { title: 'My First Quran', author: 'Various', subject: 'children', language: 'english', color: 'bg-emerald-500' },
    { title: 'Prophet Stories for Kids', author: 'Various', subject: 'children', language: 'english', color: 'bg-amber-500' },
    { title: 'Fortress of the Muslim', author: 'Saeed Al-Qahtani', subject: 'hadith', language: 'english', color: 'bg-emerald-800' },
    { title: 'Purification of the Heart', author: 'Hamza Yusuf', subject: 'fiqh', language: 'english', color: 'bg-slate-600' },
];

// ============================================
// Shelf Collections
// ============================================

export const collections: ShelfCollection[] = [
    {
        shelf: 'The Essentials',
        description: 'Foundational texts every Muslim home should have.',
        books: [
            { title: 'Quran Translations', color: 'bg-emerald-900' },
            { title: 'Tafseer Ibn Kathir', color: 'bg-emerald-800' },
            { title: 'Sahih Bukhari', color: 'bg-amber-900' },
            { title: 'Sahih Muslim', color: 'bg-amber-800' },
            { title: 'Riyad-us-Saliheen', color: 'bg-slate-800' },
            { title: '40 Hadith Nawawi', color: 'bg-slate-700' },
            { title: 'Fortress of Muslim', color: 'bg-emerald-800' },
            { title: 'Fiqh us-Sunnah', color: 'bg-amber-900' },
        ]
    },
    {
        shelf: 'Seerah & History',
        description: 'Walking in the footsteps of the righteous.',
        books: [
            { title: 'The Sealed Nectar', color: 'bg-amber-700' },
            { title: 'Men Around Prophet', color: 'bg-amber-600' },
            { title: 'Stories of Prophets', color: 'bg-amber-800' },
            { title: 'Companions', color: 'bg-amber-900' },
            { title: 'Islamic History', color: 'bg-slate-900' },
            { title: 'Women of Madina', color: 'bg-rose-800' },
            { title: 'Life of Umar', color: 'bg-slate-800' },
            { title: 'Abu Bakr As-Siddiq', color: 'bg-slate-700' },
        ]
    },
    {
        shelf: "Children's Corner",
        description: 'Nurturing the love of Allah in young hearts.',
        books: [
            { title: 'My First Quran', color: 'bg-emerald-500' },
            { title: 'Prophet Stories', color: 'bg-amber-500' },
            { title: 'Good Manners', color: 'bg-emerald-400' },
            { title: 'Ramadan Joy', color: 'bg-indigo-500' },
            { title: 'Eid Celebration', color: 'bg-rose-500' },
            { title: 'Islamic ABCs', color: 'bg-emerald-600' },
            { title: 'Bedtime Duas', color: 'bg-indigo-400' },
            { title: 'Brave Sahaba', color: 'bg-amber-600' },
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
        description: 'Free for community members with valid ID.'
    },
    {
        icon: Clock,
        title: 'Loan Period',
        description: '2 weeks per book, one renewal allowed.'
    },
    {
        icon: AlertCircle,
        title: 'Late Policy',
        description: 'Return on time as an Amanah (trust).'
    },
    {
        icon: CreditCard,
        title: 'Library Card',
        description: 'Instant issue at the front desk.'
    }
];

// ============================================
// Featured Book
// ============================================

export const featuredBook = {
    title: 'The Sealed Nectar',
    subtitle: 'Ar-Raheeq Al-Makhtum',
    author: 'Safiur Rahman Mubarakpuri',
    arabicTitle: 'الرحيق المختوم',
    description: "The award-winning biography of Prophet Muhammad (ﷺ). A masterpiece that vividly captures the struggles, triumphs, and the divine mission of the final messenger.",
    quote: "A complete authoritative book on the life of Prophet Muhammad (ﷺ).",
    color: 'bg-amber-900'
};

// ============================================
// Library Info
// ============================================

export const libraryInfo = {
    location: '2nd Floor, West Wing',
    hours: 'Daily: Maghrib - Isha',
    staffedHours: 'Sunday: 10 AM - 2 PM',
    stats: [
        { label: 'Titles', value: '2,000+' },
        { label: 'Languages', value: '3' },
        { label: 'Collections', value: '12' }
    ]
};
