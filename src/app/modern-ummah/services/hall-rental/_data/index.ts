export const halls = [
    {
        id: 'main-hall',
        name: 'Grand Assembly Hall',
        capacity: 500,
        description: 'Our largest venue, perfect for weddings, community banquets, and large gatherings.',
        amenities: ['Full Stage', 'Sound System', 'Projector & Screen', 'Kitchen Access', 'Bridal Suite', 'Separate Entrances'],
        image: '/images/mosque-interior.jpg',
        rates: {
            weekday: 800,
            weekend: 1200,
            nonprofit: 500
        },
        bookedDates: [
            // Using dates relative to execution time for demo purposes, or static as in heritage
            new Date(new Date().getFullYear(), new Date().getMonth(), 14),
            new Date(new Date().getFullYear(), new Date().getMonth(), 15),
            new Date(new Date().getFullYear(), new Date().getMonth(), 21),
        ]
    },
    {
        id: 'multi-purpose',
        name: 'Multi-Purpose Room',
        capacity: 150,
        description: 'A versatile space ideal for medium-sized events, lectures, classes, and family gatherings. Includes modular seating arrangements.',
        amenities: ['Flexible Seating', 'Whiteboard', 'Basic AV', 'Kitchen Access'],
        image: '/images/library-shelves.jpg',
        rates: {
            weekday: 300,
            weekend: 450,
            nonprofit: 200
        },
        bookedDates: [
            new Date(new Date().getFullYear(), new Date().getMonth(), 8),
            new Date(new Date().getFullYear(), new Date().getMonth(), 22),
        ]
    },
    {
        id: 'conference',
        name: 'Conference Room',
        capacity: 30,
        description: 'Professional meeting space for board meetings, small classes, or private consultations. Quiet and well-equipped.',
        amenities: ['Conference Table', 'Video Conferencing', 'Whiteboard', 'Coffee Service'],
        image: '/images/shykh.jpg',
        rates: {
            weekday: 100,
            weekend: 150,
            nonprofit: 75
        },
        bookedDates: [
            new Date(new Date().getFullYear(), new Date().getMonth(), 5),
            new Date(new Date().getFullYear(), new Date().getMonth(), 12),
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
