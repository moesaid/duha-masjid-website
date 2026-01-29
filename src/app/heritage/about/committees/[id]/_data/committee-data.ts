// Committee Detail Page Data
// Types and static data for individual committee pages

// Project type for structured projects
export interface Project {
    id: string;
    name: string;
    status: string;
    progress: number;
}

// Committee type
export interface Committee {
    id: string;
    name: string;
    description: string;
    fullDescription: string;
    image: string;
    chair: string;
    email: string;
    members: string[];
    meetingSchedule: string;
    location: string;
    responsibilities: string[];
    currentProjects: (string | Project)[];
    howToJoin: string;
}

// Committee Data
export const committeesData: Record<string, Committee> = {
    'education': {
        id: 'education',
        name: 'Education Committee',
        description: 'Oversees weekend school, adult education, and Quran programs',
        fullDescription: 'The Education Committee is responsible for developing and overseeing all educational programs at Al-Noor Masjid. This includes our weekend Islamic school for children, adult education classes, Quran memorization programs, and special educational events throughout the year.',
        image: '/images/heritage/mosque-interior.jpg',
        chair: 'Dr. Fatima Hassan',
        email: 'education@alnoormasjid.org',
        members: ['Dr. Fatima Hassan (Chair)', 'Br. Omar Abdullah', 'Sr. Aisha Malik', 'Br. Ibrahim Khan', 'Sr. Maryam Ahmed'],
        meetingSchedule: 'First Sunday of each month, 2:00 PM',
        location: 'Conference Room A',
        responsibilities: [
            'Develop and update curriculum for weekend school',
            'Recruit and train teachers and volunteers',
            'Organize educational events and workshops',
            'Manage Quran memorization programs',
            'Coordinate adult education classes'
        ],
        currentProjects: [
            'Launching new youth Islamic studies curriculum',
            'Expanding adult Arabic language program',
            'Developing online learning platform',
            'Organizing annual Quran competition'
        ],
        howToJoin: 'We welcome educators, parents, and community members passionate about Islamic education. Contact us at education@alnoormasjid.org or attend our monthly meeting to learn more.'
    },
    'finance': {
        id: 'finance',
        name: 'Finance Committee',
        description: 'Manages masjid budget, donations, and financial planning',
        fullDescription: 'The Finance Committee ensures the financial health and sustainability of Al-Noor Masjid. We manage the annual budget, oversee donations and fundraising, and ensure transparent financial reporting to the community.',
        image: '/images/heritage/mosque-dome.jpg',
        chair: 'Br. Khalid Mansour',
        email: 'finance@alnoormasjid.org',
        members: ['Br. Khalid Mansour (Chair)', 'Sr. Nadia Rahman', 'Br. Ahmed Yusuf', 'CPA Consultant'],
        meetingSchedule: 'Second Tuesday of each month, 7:00 PM',
        location: 'Administrative Office',
        responsibilities: [
            'Prepare and manage annual budget',
            'Oversee donation collection and tracking',
            'Ensure financial transparency and compliance',
            'Plan major fundraising campaigns',
            'Present quarterly financial reports to board'
        ],
        currentProjects: [
            'Building fund expansion campaign',
            'Implementing new donation management system',
            'Establishing endowment fund',
            'Annual audit preparation'
        ],
        howToJoin: 'We seek members with backgrounds in finance, accounting, or business management. Contact finance@alnoormasjid.org for more information.'
    },
    'women': {
        id: 'women',
        name: "Women's Committee",
        description: 'Organizes programs and services for sisters in the community',
        fullDescription: "The Women's Committee creates a welcoming and supportive environment for sisters at Al-Noor Masjid. We organize programs, events, and services that address the unique needs of Muslim women in our community.",
        image: '/images/heritage/shykh.jpg',
        chair: 'Sr. Safiya Ahmed',
        email: 'women@alnoormasjid.org',
        members: ['Sr. Safiya Ahmed (Chair)', 'Sr. Khadija Omar', 'Sr. Zainab Ali', 'Sr. Ruqaiya Ibrahim', 'Sr. Amina Hassan'],
        meetingSchedule: 'Second Saturday of each month, 11:00 AM',
        location: "Women's Prayer Hall",
        responsibilities: [
            "Organize women-focused educational programs",
            'Plan social events and gatherings',
            'Address facility needs for sisters',
            'Coordinate new Muslim sister support',
            'Manage women volunteer coordination'
        ],
        currentProjects: [
            'Monthly halaqah series',
            "New mothers' support group",
            "Ramadan sisters' iftar program",
            "Women's health and wellness workshops"
        ],
        howToJoin: "All sisters are welcome to join our committee. Attend our monthly meeting or email women@alnoormasjid.org to get involved."
    },
    'youth': {
        id: 'youth',
        name: 'Youth Committee',
        description: 'Develops programs for teens and young adults',
        fullDescription: 'The Youth Committee focuses on engaging and empowering young Muslims ages 13-25. We create programs that address the unique challenges facing Muslim youth while building a strong Islamic identity and sense of community.',
        image: '/images/heritage/mosque-interior.jpg',
        chair: 'Br. Ahmad Malik',
        email: 'youth@alnoormasjid.org',
        members: ['Br. Ahmad Malik (Chair)', 'Sr. Yasmin Khan', 'Br. Bilal Hassan', 'Sr. Layla Ibrahim', 'Br. Hamza Omar'],
        meetingSchedule: 'Every Friday after Isha',
        location: 'Youth Center',
        responsibilities: [
            'Plan weekly youth programs and activities',
            'Organize annual youth retreat',
            'Coordinate sports and recreation',
            'Develop leadership opportunities',
            'Provide mentorship programs'
        ],
        currentProjects: [
            { id: 'youth-center', name: 'North Wing Youth Center', status: 'In Progress', progress: 45 },
            { id: 'youth-leadership', name: 'Youth Leadership Academy', status: 'Planning', progress: 15 },
            { id: 'college-mentorship', name: 'College Prep Mentorship', status: 'Active', progress: 70 },
            { id: 'annual-conference', name: 'Annual Youth Conference 2026', status: 'Planning', progress: 25 }
        ],
        howToJoin: 'Young adults (18-25) passionate about serving youth are welcome. College students and recent graduates especially encouraged. Email youth@alnoormasjid.org.'
    },
    'outreach': {
        id: 'outreach',
        name: 'Outreach Committee',
        description: 'Manages dawah, interfaith relations, and community engagement',
        fullDescription: 'The Outreach Committee represents Al-Noor Masjid to the broader community. We organize interfaith events, manage public relations, welcome visitors, and share the beautiful message of Islam with our neighbors.',
        image: '/images/heritage/mosque-dome.jpg',
        chair: 'Dr. Layla Ahmed',
        email: 'outreach@alnoormasjid.org',
        members: ['Dr. Layla Ahmed (Chair)', 'Br. Mustafa Ali', 'Sr. Hannah Rahman', 'Br. Yusuf Patel'],
        meetingSchedule: 'Third Wednesday of each month, 7:30 PM',
        location: 'Community Room',
        responsibilities: [
            'Organize open house events',
            'Coordinate interfaith dialogue',
            'Manage media relations',
            'Train tour guides and ambassadors',
            'Respond to community inquiries'
        ],
        currentProjects: [
            'Annual Open Mosque Day',
            'Interfaith Thanksgiving dinner',
            'Neighbor relations initiative',
            'What is Islam? workshop series'
        ],
        howToJoin: 'We seek articulate, friendly community members who enjoy meeting people. Training provided. Contact outreach@alnoormasjid.org.'
    },
    'facilities': {
        id: 'facilities',
        name: 'Facilities Committee',
        description: 'Maintains building, grounds, and manages hall rentals',
        fullDescription: 'The Facilities Committee ensures that Al-Noor Masjid remains a clean, safe, and welcoming space for worship and community activities. We oversee maintenance, manage hall rentals, and coordinate building projects.',
        image: '/images/heritage/shykh.jpg',
        chair: 'Br. Tariq Rahman',
        email: 'facilities@alnoormasjid.org',
        members: ['Br. Tariq Rahman (Chair)', 'Br. Salman Ahmed', 'Br. Jamal Hussein', 'Sr. Fatima Qureshi'],
        meetingSchedule: 'First Saturday of each month, 10:00 AM',
        location: 'Maintenance Office',
        responsibilities: [
            'Oversee building maintenance and repairs',
            'Manage janitorial services',
            'Coordinate hall rental bookings',
            'Plan facility improvements',
            'Ensure safety and security'
        ],
        currentProjects: [
            'Phase 2 building expansion',
            'Parking lot expansion',
            'HVAC system upgrade',
            'Security camera installation'
        ],
        howToJoin: 'We need volunteers with skills in construction, electrical, plumbing, or general handyman work. Contact facilities@alnoormasjid.org.'
    }
};

// Helper to get committee by ID
export function getCommittee(id: string): Committee {
    return committeesData[id] || committeesData['education'];
}
