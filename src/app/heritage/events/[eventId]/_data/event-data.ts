// ============================================
// Types
// ============================================

export interface ScheduleItem {
    time: string;
    title: string;
    description: string;
}

export interface Speaker {
    name: string;
    title: string;
    bio: string;
    image: string | null;
}

export interface EventPricing {
    adult: number;
    child: number;
}

export interface EventLogistics {
    parking: string;
    childcare: string;
    dressCode: string;
    accessibility: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface EventData {
    title: string;
    subtitle: string;
    tagline: string;
    date: string;
    dateShort: { month: string; day: string };
    dayOfWeek: string;
    time: string;
    venue: string;
    address: string;
    status: string;
    promoVideoUrl: string;
    promoVideoPoster: string;
    description: string;
    schedule: ScheduleItem[];
    speakers: Speaker[];
    pricing: EventPricing;
    logistics: EventLogistics;
    faqs: FAQ[];
}

// ============================================
// Static Data
// ============================================

export const eventData: EventData = {
    title: 'Honoring the Legacy',
    subtitle: 'Annual Fundraising Gala',
    tagline: 'A Night of Reflection and Inspiration',
    date: 'October 24, 2026',
    dateShort: { month: 'OCT', day: '24' },
    dayOfWeek: 'Saturday',
    time: '6:00 PM - 10:00 PM',
    venue: 'Grand Ballroom, Heritage Center',
    address: '123 Islamic Way, Springfield, IL 62701',
    status: 'Early Bird',
    promoVideoUrl: 'https://www.youtube.com/embed/oOEhCAvIl5I',
    promoVideoPoster: '/images/halaqa-circle.jpg',
    description: `Join us for an extraordinary evening as we gather to honor the legacy of our beloved 
    community and celebrate the vision for our future. This prestigious gala brings together families, 
    scholars, and community leaders for a night of inspiration, fine dining, and fellowship.
    
    All proceeds support the Masjid expansion project, Islamic education programs, and community outreach initiatives.`,
    schedule: [
        { time: '6:00 PM', title: 'Reception & Welcome', description: 'Hors d\'oeuvres and networking' },
        { time: '7:00 PM', title: 'Keynote Address', description: 'Sh. Omar Suleiman' },
        { time: '8:00 PM', title: 'Dinner Service', description: 'Gourmet halal cuisine' },
        { time: '9:00 PM', title: 'Live Fundraising', description: 'Pledge drive & silent auction' },
        { time: '9:45 PM', title: 'Closing Du\'a', description: 'Community supplication' }
    ],
    speakers: [
        {
            name: 'Sh. Omar Suleiman',
            title: 'Keynote Speaker',
            bio: 'Founder of Yaqeen Institute, renowned scholar and author.',
            image: null
        },
        {
            name: 'Dr. Fatima Hassan',
            title: 'Guest of Honor',
            bio: 'Community leader and philanthropist.',
            image: null
        }
    ],
    pricing: {
        adult: 75,
        child: 35
    },
    logistics: {
        parking: 'Complimentary valet parking at the North Entrance. Self-parking available in Lot B.',
        childcare: 'Supervised childcare for ages 3-10 available ($15/child). Limited spots - reserve at checkout.',
        dressCode: 'Formal / Traditional Islamic Attire encouraged.',
        accessibility: 'Venue is fully wheelchair accessible. ASL interpretation available upon request.'
    },
    faqs: [
        {
            question: 'Is dinner included with my ticket?',
            answer: 'Yes! All ticket types include a gourmet halal dinner prepared by our award-winning catering team.'
        },
        {
            question: 'What is the refund policy?',
            answer: 'Tickets are non-refundable but fully transferable up to 48 hours before the event. Contact us to transfer your ticket to another guest.'
        },
        {
            question: 'Is the venue wheelchair accessible?',
            answer: 'Yes, the Heritage Center Grand Ballroom is fully wheelchair accessible with designated seating areas and accessible restrooms.'
        },
        {
            question: 'Can I purchase tickets at the door?',
            answer: 'Door sales are available if tickets remain, but we strongly recommend purchasing in advance as this event typically sells out.'
        },
        {
            question: 'Is there a dress code?',
            answer: 'We encourage formal or traditional Islamic attire. Business formal is also appropriate.'
        }
    ]
};
