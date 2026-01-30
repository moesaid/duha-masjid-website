export interface BoardMember {
    id: string;
    name: string;
    role: string;
    roleType: 'president' | 'vice-president' | 'treasurer' | 'secretary' | 'member';
    visionStatement: string;
    image: string;
    linkedIn?: string;
    bio?: string;
}

export const boardMembers: BoardMember[] = [
    {
        id: 'ahmad-hassan',
        name: 'Dr. Ahmad Hassan',
        role: 'Board President',
        roleType: 'president',
        visionStatement: 'Building a community that serves as a beacon of faith, knowledge, and compassion for generations to come.',
        image: '/images/arab-men-1.jpg',
        linkedIn: 'https://linkedin.com',
    },
    {
        id: 'fatima-ali',
        name: 'Fatima Ali, MBA',
        role: 'Vice President',
        roleType: 'vice-president',
        visionStatement: 'Empowering our youth through education and mentorship to become leaders of tomorrow.',
        image: '/images/arab-women-1.jpg',
        linkedIn: 'https://linkedin.com',
    },
    {
        id: 'yusuf-khan',
        name: 'Yusuf Khan, CPA',
        role: 'Treasurer',
        roleType: 'treasurer',
        visionStatement: 'Ensuring financial transparency and sustainability so our masjid can serve the community for decades.',
        image: '/images/arab-men-2.jpg',
        linkedIn: 'https://linkedin.com',
    },
    {
        id: 'aisha-rahman',
        name: 'Aisha Rahman',
        role: 'Secretary',
        roleType: 'secretary',
        visionStatement: 'Creating inclusive programs that welcome every member of our diverse ummah.',
        image: '/images/arab-women-2.jpg',
    },
    {
        id: 'omar-sheikh',
        name: 'Omar Sheikh',
        role: 'Board Member',
        roleType: 'member',
        visionStatement: 'Strengthening interfaith dialogue to build bridges with our broader community.',
        image: '/images/arab-men-3.jpg',
    },
    {
        id: 'maryam-johnson',
        name: 'Maryam Johnson',
        role: 'Board Member',
        roleType: 'member',
        visionStatement: 'Advocating for mental health awareness and support services within our community.',
        image: '/images/sisters-gathering.jpg',
    },
];
