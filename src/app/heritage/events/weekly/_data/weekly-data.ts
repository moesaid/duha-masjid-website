// Weekly Events Page Data
import { LucideIcon, Calendar, Clock, Users, BookOpen, Coffee, Heart, MessageCircle } from 'lucide-react';

export interface WeeklyEvent {
    id: string;
    day: string;
    time: string;
    title: string;
    description: string;
    icon: LucideIcon;
    audience: string;
}

export const weeklyEvents: WeeklyEvent[] = [
    { id: 'halaqah-mon', day: 'Monday', time: '7:30 PM', title: "Men's Halaqah", description: 'Weekly circle of knowledge and reflection', icon: BookOpen, audience: 'Brothers' },
    { id: 'quran-tue', day: 'Tuesday', time: '7:00 PM', title: 'Quran Study Circle', description: 'Deep dive into Quranic tafseer', icon: BookOpen, audience: 'All' },
    { id: 'youth-wed', day: 'Wednesday', time: '6:30 PM', title: 'Youth Night', description: 'Activities and programs for teens', icon: Users, audience: 'Ages 13-18' },
    { id: 'sisters-thu', day: 'Thursday', time: '10:00 AM', title: "Sisters' Morning Circle", description: 'Islamic studies and sisterhood', icon: Heart, audience: 'Sisters' },
    { id: 'jumuah-fri', day: 'Friday', time: '1:00 PM', title: "Jumu'ah Prayer", description: 'Weekly congregational prayer', icon: Calendar, audience: 'All' },
    { id: 'family-sat', day: 'Saturday', time: '5:00 PM', title: 'Family Social', description: 'Monthly potluck and community gathering', icon: Coffee, audience: 'Families' },
    { id: 'seerah-sun', day: 'Sunday', time: '11:00 AM', title: 'Seerah Class', description: 'Life of the Prophet ﷺ', icon: BookOpen, audience: 'All' }
];

export const scheduleNote = 'Programs are subject to change during Ramadan and on Islamic holidays. Check announcements for updates.';
