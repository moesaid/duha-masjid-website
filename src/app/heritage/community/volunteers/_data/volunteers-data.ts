// Community Volunteers Page Data
// Types and static data for the Volunteer Program

import { LucideIcon, Heart, Users, Calendar, GraduationCap, Utensils, Book, Home, Megaphone } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface VolunteerArea {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
    commitment: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

// ============================================
// Volunteer Areas
// ============================================

export const volunteerAreas: VolunteerArea[] = [
    { id: 'events', icon: Calendar, title: 'Event Coordination', description: 'Help organize Eid celebrations, community dinners, and special programs.', commitment: '4-8 hours/month' },
    { id: 'education', icon: GraduationCap, title: 'Education Support', description: 'Assist teachers in weekend school or help with tutoring programs.', commitment: '2-4 hours/week' },
    { id: 'kitchen', icon: Utensils, title: 'Kitchen & Hospitality', description: 'Help prepare and serve food for community events and regular programs.', commitment: 'As needed' },
    { id: 'library', icon: Book, title: 'Library Management', description: 'Organize books, manage checkouts, and maintain the library space.', commitment: '2-3 hours/week' },
    { id: 'maintenance', icon: Home, title: 'Facilities & Maintenance', description: 'Help with cleaning, setup, and general upkeep of the masjid.', commitment: 'Flexible' },
    { id: 'outreach', icon: Megaphone, title: 'Community Outreach', description: 'Represent the masjid at interfaith events and community initiatives.', commitment: '4-6 hours/month' }
];

// ============================================
// Testimonials
// ============================================

export const testimonials: Testimonial[] = [
    { quote: "Volunteering here has connected me to the community in ways I never expected. It's truly fulfilling.", author: 'Brother Yusuf', role: 'Events Team, 3 years' },
    { quote: "Helping in the kitchen during Ramadan iftar is always the highlight of my year.", author: 'Sister Fatima', role: 'Kitchen Team, 5 years' }
];

// ============================================
// Stats
// ============================================

export const volunteerStats = {
    activeVolunteers: '120+',
    hoursPerMonth: '500+',
    programs: '15+',
    yearsRunning: '20+'
};

// ============================================
// Benefits
// ============================================

export const benefits = [
    'Spiritual reward and community connection',
    'Develop new skills and gain experience',
    'Flexible scheduling to fit your life',
    'Letters of recommendation for students',
    'Recognition at annual volunteer appreciation events'
];
