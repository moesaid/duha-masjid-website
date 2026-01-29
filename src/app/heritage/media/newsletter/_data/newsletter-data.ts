// Newsletter Page Data
import { LucideIcon, Mail, Calendar, BookOpen, Star, Check } from 'lucide-react';

export interface Newsletter {
    id: string;
    title: string;
    date: string;
    preview: string;
}

export const recentNewsletters: Newsletter[] = [
    { id: 'march-2024', title: 'March 2024 Newsletter', date: 'March 1, 2024', preview: 'Ramadan preparations, new programs, and community updates...' },
    { id: 'feb-2024', title: 'February 2024 Newsletter', date: 'February 1, 2024', preview: 'Youth program launch, winter events recap...' },
    { id: 'jan-2024', title: 'January 2024 Newsletter', date: 'January 1, 2024', preview: 'New year message from the Imam, upcoming events...' }
];

export const subscriptionBenefits = [
    'Weekly updates on programs and events',
    'Exclusive content from our scholars',
    'Early registration for events',
    'Community announcements'
];

export const categories = ['All', 'Announcements', 'Events', 'Education', 'Community'];
