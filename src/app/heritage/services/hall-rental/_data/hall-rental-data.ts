// ============================================
// Types
// ============================================

export interface Hall {
    id: string;
    name: string;
    capacity: number;
    description: string;
    amenities: string[];
    image: string;
    rates: {
        weekday: number;
        weekend: number;
        nonprofit: number;
    };
    bookedDates: Date[];
}

export interface BookingFormData {
    fullName: string;
    email: string;
    phone: string;
    eventType: string;
    guestCount: string;
    duration: string;
    notes: string;
    agreedToPolicies: boolean;
}

// ============================================
// Static Data
// ============================================

export const halls: Hall[] = [
    {
        id: 'main-hall',
        name: 'Grand Assembly Hall',
        capacity: 500,
        description: 'Our largest venue, perfect for weddings, community banquets, and large gatherings.',
        amenities: ['Full Stage', 'Sound System', 'Projector & Screen', 'Kitchen Access', 'Bridal Suite', 'Separate Entrances'],
        image: '/images/mosque-interior.jpg',
        rates: { weekday: 800, weekend: 1200, nonprofit: 500 },
        bookedDates: [
            new Date(2026, 1, 14),
            new Date(2026, 1, 15),
            new Date(2026, 1, 21),
            new Date(2026, 2, 7),
            new Date(2026, 2, 14),
            new Date(2026, 2, 21),
        ]
    },
    {
        id: 'multi-purpose',
        name: 'Multi-Purpose Room',
        capacity: 150,
        description: 'A versatile space ideal for medium-sized events, lectures, classes, and family gatherings. Includes modular seating arrangements.',
        amenities: ['Flexible Seating', 'Whiteboard', 'Basic AV', 'Kitchen Access'],
        image: '/images/library-shelves.jpg',
        rates: { weekday: 300, weekend: 450, nonprofit: 200 },
        bookedDates: [
            new Date(2026, 1, 8),
            new Date(2026, 1, 22),
            new Date(2026, 2, 1),
            new Date(2026, 2, 15),
        ]
    },
    {
        id: 'conference',
        name: 'Conference Room',
        capacity: 30,
        description: 'Professional meeting space for board meetings, small classes, or private consultations. Quiet and well-equipped.',
        amenities: ['Conference Table', 'Video Conferencing', 'Whiteboard', 'Coffee Service'],
        image: '/images/shykh.jpg',
        rates: { weekday: 100, weekend: 150, nonprofit: 75 },
        bookedDates: [
            new Date(2026, 1, 5),
            new Date(2026, 1, 12),
            new Date(2026, 2, 5),
        ]
    }
];

export const policies = [
    'All events must adhere to Islamic guidelines. No music, alcohol, or inappropriate content permitted.',
    'A non-refundable deposit of 50% is required to secure your booking.',
    'Cancellations made less than 14 days before the event forfeit the deposit.',
    'Renters are responsible for clean-up or may pay an additional cleaning fee.',
    'Events must conclude by 11:00 PM unless prior arrangements are made.',
    'Decorations must not damage walls or fixtures. No tape on painted surfaces.'
];

export const eventTypes = [
    { value: 'wedding', label: 'Wedding Reception' },
    { value: 'walima', label: 'Walima' },
    { value: 'aqeeqah', label: 'Aqeeqah' },
    { value: 'memorial', label: 'Memorial/Janazah' },
    { value: 'meeting', label: 'Meeting/Conference' },
    { value: 'class', label: 'Class/Workshop' },
    { value: 'community', label: 'Community Event' },
    { value: 'other', label: 'Other' },
];

export const durationOptions = [
    { value: '2', label: '2 hours' },
    { value: '3', label: '3 hours' },
    { value: '4', label: '4 hours' },
    { value: '5', label: '5 hours' },
    { value: '6', label: '6+ hours (full day)' },
];

export const initialFormData: BookingFormData = {
    fullName: '',
    email: '',
    phone: '',
    eventType: '',
    guestCount: '',
    duration: '',
    notes: '',
    agreedToPolicies: false
};
