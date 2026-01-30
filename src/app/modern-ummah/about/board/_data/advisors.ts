export interface Advisor {
    id: string;
    name: string;
    title: string;
    image: string;
}

export const advisors: Advisor[] = [
    {
        id: 'sheikh-abdul-rahman',
        name: 'Sheikh Abdul Rahman',
        title: 'Religious Advisor',
        image: '/images/shykh.jpg',
    },
    {
        id: 'dr-layla-ahmed',
        name: 'Dr. Layla Ahmed',
        title: 'Education Consultant',
        image: '/images/arab-women-1.jpg',
    },
    {
        id: 'imam-bilal-mahmoud',
        name: 'Imam Bilal Mahmoud',
        title: 'Spiritual Guide',
        image: '/images/arab-men-4.jpg',
    },
    {
        id: 'ustadha-khadija-smith',
        name: 'Ustadha Khadija Smith',
        title: 'Women\'s Programs',
        image: '/images/arab-women-2.jpg',
    },
    {
        id: 'br-tariq-williams',
        name: 'Br. Tariq Williams',
        title: 'Youth Advisor',
        image: '/images/arab-men-3.jpg',
    },
];
