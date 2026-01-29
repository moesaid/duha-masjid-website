// Contact Page Data
// Types and static data for the Contact Us page

import { LucideIcon, MapPin, Phone, Mail, Clock, Calendar, MessageSquare } from 'lucide-react';

// ============================================
// Types
// ============================================

export interface ContactMethod {
    id: string;
    icon: LucideIcon;
    title: string;
    primary: string;
    secondary?: string;
    action?: string;
    actionUrl?: string;
}

export interface OfficeHours {
    day: string;
    hours: string;
}

export interface Department {
    name: string;
    email: string;
    phone?: string;
}

// ============================================
// Contact Methods
// ============================================

export const contactMethods: ContactMethod[] = [
    {
        id: 'address',
        icon: MapPin,
        title: 'Visit Us',
        primary: '123 Islamic Way',
        secondary: 'Springfield, MA 01234',
        action: 'Get Directions',
        actionUrl: 'https://maps.google.com'
    },
    {
        id: 'phone',
        icon: Phone,
        title: 'Call Us',
        primary: '(555) 123-4567',
        secondary: 'Main Office Line',
        action: 'Call Now',
        actionUrl: 'tel:+15551234567'
    },
    {
        id: 'email',
        icon: Mail,
        title: 'Email Us',
        primary: 'info@masjid.org',
        secondary: 'General Inquiries',
        action: 'Send Email',
        actionUrl: 'mailto:info@masjid.org'
    }
];

// ============================================
// Office Hours
// ============================================

export const officeHours: OfficeHours[] = [
    { day: 'Monday - Thursday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 12:00 PM & 2:00 PM - 5:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'By Appointment Only' }
];

// ============================================
// Departments
// ============================================

export const departments: Department[] = [
    { name: 'General Inquiries', email: 'info@masjid.org', phone: '(555) 123-4567' },
    { name: 'Religious Affairs / Imam', email: 'imam@masjid.org' },
    { name: 'Education (Madrasah)', email: 'education@masjid.org', phone: '(555) 123-4568' },
    { name: 'Events & Facilities', email: 'events@masjid.org' },
    { name: 'Donations & Zakat', email: 'donations@masjid.org' },
    { name: 'Matrimonial Services', email: 'matrimony@masjid.org' },
    { name: 'New Muslims Support', email: 'embrace@masjid.org' },
    { name: 'Youth Programs', email: 'youth@masjid.org' }
];

// ============================================
// Prayer Times Info
// ============================================

export const prayerTimesInfo = {
    title: 'Prayer Times',
    description: 'The masjid is open for all five daily prayers. Jumu\'ah prayer is held at 1:00 PM.',
    note: 'Doors open 15 minutes before each prayer.'
};

// ============================================
// Form Topics
// ============================================

export const formTopics = [
    'General Inquiry',
    'Request for Imam',
    'Facility Rental',
    'Educational Programs',
    'Volunteer Opportunities',
    'Donations & Zakat',
    'Matrimonial Services',
    'Other'
];
