// Committee Detail Page Data
// Full data for individual committee pages

export interface Project {
    id: string;
    name: string;
    status: string;
    progress: number;
}

export interface CommitteeDetail {
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
    currentProjects: Project[];
    howToJoin: string;
}

export const committeeDetails: Record<string, CommitteeDetail> = {
    'education': {
        id: 'education',
        name: 'Education Committee',
        description: 'Oversees weekend school, adult education, and Quran programs',
        fullDescription: 'The Education Committee is responsible for developing and overseeing all educational programs at our Masjid. This includes our weekend Islamic school for children, adult education classes, Quran memorization programs, and special educational events throughout the year.',
        image: '/images/mosque-interior.jpg',
        chair: 'Dr. Fatima Hassan',
        email: 'education@masjid.org',
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
            { id: 'youth-curriculum', name: 'Youth Islamic Studies Curriculum', status: 'In Development', progress: 60 },
            { id: 'arabic-program', name: 'Adult Arabic Language Program', status: 'Expanding', progress: 75 },
            { id: 'online-platform', name: 'Online Learning Platform', status: 'Planning', progress: 20 },
            { id: 'quran-competition', name: 'Annual Quran Competition', status: 'Organizing', progress: 40 }
        ],
        howToJoin: 'We welcome educators, parents, and community members passionate about Islamic education. Contact us at education@masjid.org or attend our monthly meeting to learn more.'
    },
    'finance': {
        id: 'finance',
        name: 'Finance Committee',
        description: 'Manages masjid budget, donations, and financial planning',
        fullDescription: 'The Finance Committee ensures the financial health and sustainability of our Masjid. We manage the annual budget, oversee donations and fundraising, and ensure transparent financial reporting to the community.',
        image: '/images/mosque-dome.jpg',
        chair: 'Br. Khalid Mansour',
        email: 'finance@masjid.org',
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
            { id: 'building-fund', name: 'Building Fund Expansion Campaign', status: 'Active', progress: 65 },
            { id: 'donation-system', name: 'New Donation Management System', status: 'Implementation', progress: 80 },
            { id: 'endowment-fund', name: 'Endowment Fund Establishment', status: 'Planning', progress: 25 },
            { id: 'annual-audit', name: 'Annual Audit Preparation', status: 'In Progress', progress: 50 }
        ],
        howToJoin: 'We seek members with backgrounds in finance, accounting, or business management. Contact finance@masjid.org for more information.'
    },
    'women': {
        id: 'women',
        name: "Sisters Programs",
        description: 'Organizes programs and services for sisters in the community',
        fullDescription: "The Sisters Committee creates a welcoming and supportive environment for sisters at our Masjid. We organize programs, events, and services that address the unique needs of Muslim women in our community.",
        image: '/images/mosque-interior.jpg',
        chair: 'Sr. Safiya Ahmed',
        email: 'sisters@masjid.org',
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
            { id: 'halaqah-series', name: 'Monthly Halaqah Series', status: 'Ongoing', progress: 85 },
            { id: 'mothers-support', name: "New Mothers' Support Group", status: 'Active', progress: 70 },
            { id: 'sisters-iftar', name: "Ramadan Sisters' Iftar Program", status: 'Planning', progress: 30 },
            { id: 'wellness-workshops', name: "Women's Health & Wellness Workshops", status: 'Monthly', progress: 60 }
        ],
        howToJoin: "All sisters are welcome to join our committee. Attend our monthly meeting or email sisters@masjid.org to get involved."
    },
    'youth': {
        id: 'youth',
        name: 'Youth Committee',
        description: 'Develops programs for teens and young adults',
        fullDescription: 'The Youth Committee focuses on engaging and empowering young Muslims ages 13-25. We create programs that address the unique challenges facing Muslim youth while building a strong Islamic identity and sense of community.',
        image: '/images/mosque-interior.jpg',
        chair: 'Br. Ahmad Malik',
        email: 'youth@masjid.org',
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
        howToJoin: 'Young adults (18-25) passionate about serving youth are welcome. College students and recent graduates especially encouraged. Email youth@masjid.org.'
    },
    'outreach': {
        id: 'outreach',
        name: 'Outreach Committee',
        description: 'Manages dawah, interfaith relations, and community engagement',
        fullDescription: 'The Outreach Committee represents our Masjid to the broader community. We organize interfaith events, manage public relations, welcome visitors, and share the beautiful message of Islam with our neighbors.',
        image: '/images/mosque-dome.jpg',
        chair: 'Dr. Layla Ahmed',
        email: 'outreach@masjid.org',
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
            { id: 'open-mosque-day', name: 'Annual Open Mosque Day', status: 'Planning', progress: 35 },
            { id: 'interfaith-dinner', name: 'Interfaith Thanksgiving Dinner', status: 'Organizing', progress: 45 },
            { id: 'neighbor-initiative', name: 'Neighbor Relations Initiative', status: 'Active', progress: 70 },
            { id: 'islam-workshop', name: 'What is Islam? Workshop Series', status: 'Ongoing', progress: 80 }
        ],
        howToJoin: 'We seek articulate, friendly community members who enjoy meeting people. Training provided. Contact outreach@masjid.org.'
    },
    'facilities': {
        id: 'facilities',
        name: 'Facilities Committee',
        description: 'Maintains building, grounds, and manages hall rentals',
        fullDescription: 'The Facilities Committee ensures that our Masjid remains a clean, safe, and welcoming space for worship and community activities. We oversee maintenance, manage hall rentals, and coordinate building projects.',
        image: '/images/mosque-interior.jpg',
        chair: 'Br. Tariq Rahman',
        email: 'facilities@masjid.org',
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
            { id: 'building-expansion', name: 'Phase 2 Building Expansion', status: 'In Progress', progress: 55 },
            { id: 'parking-expansion', name: 'Parking Lot Expansion', status: 'Planning', progress: 20 },
            { id: 'hvac-upgrade', name: 'HVAC System Upgrade', status: 'Scheduled', progress: 10 },
            { id: 'security-cameras', name: 'Security Camera Installation', status: 'Implementation', progress: 75 }
        ],
        howToJoin: 'We need volunteers with skills in construction, electrical, plumbing, or general handyman work. Contact facilities@masjid.org.'
    },
    'security': {
        id: 'security',
        name: 'Security & Safety Committee',
        description: 'Ensures the safety of the masjid premises and community',
        fullDescription: 'The Security & Safety Committee is dedicated to ensuring our Masjid remains a safe and secure environment for all worshippers and visitors. We coordinate with local authorities and train community volunteers.',
        image: '/images/mosque-dome.jpg',
        chair: 'Br. Kareem Washington',
        email: 'security@masjid.org',
        members: ['Br. Kareem Washington (Chair)', 'Br. Ahmad Ali', 'Br. Suleiman Johnson', 'Sr. Fatima Brown'],
        meetingSchedule: 'Monthly, dates vary',
        location: 'Security Office',
        responsibilities: [
            'Develop and implement security protocols',
            'Train volunteer safety monitors',
            'Coordinate with local law enforcement',
            'Manage emergency preparedness',
            'Oversee parking and crowd management'
        ],
        currentProjects: [
            { id: 'emergency-plan', name: 'Emergency Response Plan Update', status: 'In Progress', progress: 60 },
            { id: 'volunteer-training', name: 'Volunteer Safety Training Program', status: 'Active', progress: 80 },
            { id: 'access-control', name: 'Access Control System Upgrade', status: 'Planning', progress: 30 },
            { id: 'first-aid', name: 'First Aid Station Setup', status: 'Completed', progress: 100 }
        ],
        howToJoin: 'We welcome community members interested in safety and security. Training provided. Contact security@masjid.org.'
    },
    'family': {
        id: 'family',
        name: 'Family Services Committee',
        description: 'Provides support for families in our community',
        fullDescription: 'The Family Services Committee supports families at every stage of life. We provide counseling referrals, new parent support, marriage preparation, and organize family-friendly events that bring our community together.',
        image: '/images/mosque-interior.jpg',
        chair: 'Sr. Aisha Patel',
        email: 'family@masjid.org',
        members: ['Sr. Aisha Patel (Chair)', 'Dr. Layla Hassan', 'Br. Omar Syed', 'Sr. Khadijah Ali'],
        meetingSchedule: 'First Friday of each month, after Maghrib',
        location: 'Family Center',
        responsibilities: [
            'Coordinate marriage preparation programs',
            'Organize new parent support groups',
            'Plan family-friendly community events',
            'Provide counseling referrals',
            'Manage family emergency assistance'
        ],
        currentProjects: [
            { id: 'parenting-workshop', name: 'Islamic Parenting Workshop Series', status: 'Active', progress: 70 },
            { id: 'marriage-prep', name: 'Pre-Marriage Counseling Program', status: 'Expanding', progress: 85 },
            { id: 'family-day', name: 'Annual Family Fun Day', status: 'Planning', progress: 25 },
            { id: 'support-network', name: 'Family Support Network', status: 'Building', progress: 50 }
        ],
        howToJoin: 'We welcome families passionate about strengthening our community bonds. Contact family@masjid.org to get involved.'
    }
};

export function getCommitteeDetail(id: string): CommitteeDetail {
    return committeeDetails[id] || committeeDetails['education'];
}

export function getAllCommitteeIds(): string[] {
    return Object.keys(committeeDetails);
}
