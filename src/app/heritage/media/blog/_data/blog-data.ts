// Blog Listing Page Data
import { LucideIcon, BookOpen, Calendar, Clock, Tag } from 'lucide-react';

export interface BlogPostPreview {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    featured: boolean;
}

export const blogPosts: BlogPostPreview[] = [
    { slug: 'ramadan-preparation', title: 'Preparing for Ramadan', excerpt: 'Essential steps to prepare your heart and home for the blessed month.', date: 'March 1, 2024', readTime: '8 min', category: 'Spirituality', featured: true },
    { slug: 'taraweeh-guide', title: 'Taraweeh Prayer Guide', excerpt: 'Everything you need to know about the night prayers.', date: 'February 25, 2024', readTime: '6 min', category: 'Worship', featured: false },
    { slug: 'community-spotlight', title: 'Community Spotlight: Youth Program', excerpt: 'Meet the young leaders making a difference.', date: 'February 20, 2024', readTime: '5 min', category: 'Community', featured: false },
    { slug: 'healthy-fasting', title: 'Healthy Fasting Tips', excerpt: 'Medical advice for a healthy Ramadan experience.', date: 'February 15, 2024', readTime: '7 min', category: 'Health', featured: false }
];

export const categories = ['All', 'Spirituality', 'Worship', 'Community', 'Health', 'Education'];
