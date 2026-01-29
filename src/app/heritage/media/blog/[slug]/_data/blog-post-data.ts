// Blog Post Slug Page Data
import { LucideIcon, Calendar, Clock, User, Tag, Share2, ChevronLeft } from 'lucide-react';

export interface BlogPost {
    slug: string;
    title: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    excerpt: string;
    content: string[];
}

// Sample blog post (in production this would come from CMS)
export const samplePost: BlogPost = {
    slug: 'ramadan-preparation',
    title: 'Preparing for Ramadan: A Spiritual Guide',
    author: 'Imam Abdullah',
    date: 'March 1, 2024',
    readTime: '8 min read',
    category: 'Spirituality',
    image: '/images/heritage/ramadan.jpg',
    excerpt: 'As the blessed month approaches, here are essential steps to prepare your heart and home.',
    content: [
        'The blessed month of Ramadan is approaching, and with it comes an opportunity for spiritual renewal.',
        'Begin by assessing your current spiritual state and setting intentions for growth.',
        'Gradually adjust your eating and sleeping patterns to prepare for fasting.',
        'Increase your Quran recitation now to build momentum for Ramadan.'
    ]
};

export const relatedPosts = [
    { slug: 'fasting-benefits', title: 'The Physical and Spiritual Benefits of Fasting', category: 'Health' },
    { slug: 'taraweeh-guide', title: 'A Complete Guide to Taraweeh Prayer', category: 'Worship' },
    { slug: 'iftar-recipes', title: 'Healthy Iftar Recipes for the Family', category: 'Lifestyle' }
];
