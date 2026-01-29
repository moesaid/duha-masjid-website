// ============================================
// Types
// ============================================

export interface ProjectScope {
    objective: string;
    why: string;
}

export interface GalleryItem {
    title: string;
    caption: string;
    image: string;
    type: 'floorplan' | 'render' | 'construction';
}

export interface TimelineItem {
    title: string;
    date: string;
    status: 'completed' | 'active' | 'future';
    description?: string;
}

export interface ProjectSpecs {
    budget: string;
    squareFeet: string;
    capacity: string;
    completionDate: string;
}

export interface FieldNote {
    date: string;
    entry: string;
    hasPhotos?: boolean;
}

export interface Project {
    id: string;
    code: string;
    name: string;
    tagline: string;
    status: 'planning' | 'in-progress' | 'near-completion';
    statusLabel: string;
    progress: number;
    heroImage: string;
    scope: ProjectScope;
    gallery: GalleryItem[];
    timeline: TimelineItem[];
    specs: ProjectSpecs;
    fieldNotes: FieldNote[];
    contractor: string;
    donationNote: string;
}

// ============================================
// Static Data
// ============================================

export const projectsData: Record<string, Project> = {
    'youth-center': {
        id: 'youth-center',
        code: 'PROJECT ID: #YC-2026',
        name: 'North Wing Youth Center',
        tagline: 'A dedicated space for the next generation of Muslim leaders',
        status: 'in-progress',
        statusLabel: 'UNDER CONSTRUCTION',
        progress: 45,
        heroImage: '/images/mosque-interior.jpg',
        scope: {
            objective: 'To build a state-of-the-art 10,000 sq ft youth center that provides dedicated spaces for education, recreation, mentorship, and spiritual development for Muslims ages 13-25.',
            why: 'Our current facilities are operating at 150% capacity during youth programs. Young Muslims deserve a safe, welcoming third space where they can develop their Islamic identity, build lasting friendships, and prepare for leadership in the community. This center will feature classrooms, a gymnasium, counseling rooms, and a dedicated prayer space designed specifically for youth.',
        },
        gallery: [
            {
                title: 'Fig 1.1: Main Floor Plan',
                caption: 'Ground level layout showing gymnasium, multi-purpose rooms, and main entrance',
                image: '/images/prayer-hall.jpg',
                type: 'floorplan'
            },
            {
                title: 'Fig 1.2: Interior Vision',
                caption: 'Rendered view of the main gathering hall with modern Islamic design elements',
                image: '/images/mosque-interior.jpg',
                type: 'render'
            },
            {
                title: 'Fig 1.3: Current Progress',
                caption: 'Steel framing completion - January 2026',
                image: '/images/shykh.jpg',
                type: 'construction'
            },
        ],
        timeline: [
            { title: 'Groundbreaking Ceremony', date: 'January 2025', status: 'completed', description: 'Official ceremony with community leaders' },
            { title: 'Foundation & Sitework', date: 'March 2025', status: 'completed', description: 'Foundation poured, utilities connected' },
            { title: 'Steel Framing', date: 'October 2025', status: 'completed', description: 'Structural steel installation complete' },
            { title: 'Exterior Envelope', date: 'January 2026', status: 'active', description: 'Roofing and exterior walls in progress' },
            { title: 'Interior Build-out', date: 'April 2026', status: 'future', description: 'Drywall, electrical, plumbing' },
            { title: 'Finishing & Fixtures', date: 'August 2026', status: 'future', description: 'Flooring, paint, equipment installation' },
            { title: 'Grand Opening', date: 'Ramadan 2027', status: 'future', description: 'Ribbon cutting ceremony' },
        ],
        specs: {
            budget: '$2.5 Million',
            squareFeet: '10,000 sq ft',
            capacity: '300 Youth',
            completionDate: 'Ramadan 2027',
        },
        fieldNotes: [
            { date: 'Jan 15, 2026', entry: 'Steel framing inspection passed. Ready for exterior work.', hasPhotos: true },
            { date: 'Jan 10, 2026', entry: 'Final steel beam placed. Structural phase complete.' },
            { date: 'Dec 20, 2025', entry: 'Roofing materials delivered to site.' },
            { date: 'Dec 01, 2025', entry: 'Steel erection began. Weather conditions favorable.' },
            { date: 'Oct 15, 2025', entry: 'Foundation cured. Ready for steel work.' },
        ],
        contractor: 'BuiltRight Construction Group',
        donationNote: 'All donations to this project are Sadaqah Jariyah - ongoing charity that benefits you even after death.',
    },
    'youth-leadership': {
        id: 'youth-leadership',
        code: 'PROJECT ID: #YLA-2026',
        name: 'Youth Leadership Academy',
        tagline: 'Developing tomorrow\'s community leaders today',
        status: 'planning',
        statusLabel: 'IN PLANNING',
        progress: 15,
        heroImage: '/images/shykh.jpg',
        scope: {
            objective: 'To establish a comprehensive leadership development program that equips young Muslims (ages 16-25) with the skills, knowledge, and Islamic foundation needed to lead in their communities and professions.',
            why: 'Our community needs trained young leaders who can navigate modern challenges while staying rooted in Islamic values. This program combines executive coaching, public speaking, project management, and Islamic leadership principles into a 12-month intensive curriculum.',
        },
        gallery: [
            {
                title: 'Fig 1.1: Program Structure',
                caption: 'Curriculum overview and module breakdown',
                image: '/images/mosque-dome.jpg',
                type: 'floorplan'
            },
            {
                title: 'Fig 1.2: Mentorship Model',
                caption: 'One-on-one pairing with community leaders',
                image: '/images/mosque-interior.jpg',
                type: 'render'
            },
        ],
        timeline: [
            { title: 'Curriculum Development', date: 'January 2026', status: 'active', description: 'Creating course materials and modules' },
            { title: 'Mentor Recruitment', date: 'March 2026', status: 'future', description: 'Onboarding community leaders as mentors' },
            { title: 'Pilot Cohort Launch', date: 'September 2026', status: 'future', description: 'First class of 20 students begins' },
            { title: 'Full Program Launch', date: 'January 2027', status: 'future', description: 'Open enrollment for 50 participants' },
        ],
        specs: {
            budget: '$150,000',
            squareFeet: 'N/A',
            capacity: '50 Students/Year',
            completionDate: 'September 2026',
        },
        fieldNotes: [
            { date: 'Jan 12, 2026', entry: 'Partnership confirmed with local university for certification.' },
            { date: 'Jan 05, 2026', entry: 'Draft curriculum reviewed by education committee.' },
            { date: 'Dec 15, 2025', entry: 'Needs assessment survey completed with 200+ youth responses.' },
        ],
        contractor: 'Internal Program Development Team',
        donationNote: 'Your investment in youth leadership development creates ripples across generations.',
    },
    'college-mentorship': {
        id: 'college-mentorship',
        code: 'PROJECT ID: #CMP-2025',
        name: 'College Prep Mentorship',
        tagline: 'Guiding students from high school to higher education',
        status: 'in-progress',
        statusLabel: 'ACTIVE PROGRAM',
        progress: 70,
        heroImage: '/images/mosque-dome.jpg',
        scope: {
            objective: 'To provide comprehensive college preparation support to high school juniors and seniors, including application guidance, essay review, scholarship searches, and career counseling from Muslim professionals.',
            why: 'Many first-generation college students in our community lack access to the guidance and resources needed to navigate the complex college application process. This program connects them with successful professionals who have walked this path before.',
        },
        gallery: [
            {
                title: 'Fig 1.1: Program Flow',
                caption: 'Journey from enrollment to college acceptance',
                image: '/images/mosque-interior.jpg',
                type: 'floorplan'
            },
            {
                title: 'Fig 1.2: Mentor Workshop',
                caption: 'Monthly sessions covering applications, essays, and interviews',
                image: '/images/shykh.jpg',
                type: 'render'
            },
        ],
        timeline: [
            { title: 'Program Launch', date: 'August 2025', status: 'completed', description: 'First cohort of 35 students enrolled' },
            { title: 'Application Workshop Series', date: 'October 2025', status: 'completed', description: '4-week intensive on applications' },
            { title: 'Essay Review Sessions', date: 'December 2025', status: 'completed', description: 'One-on-one essay feedback' },
            { title: 'Financial Aid Workshop', date: 'January 2026', status: 'active', description: 'FAFSA and scholarship guidance' },
            { title: 'Acceptance Celebrations', date: 'April 2026', status: 'future', description: 'Recognition ceremony for acceptances' },
            { title: 'Summer Send-off', date: 'August 2026', status: 'future', description: 'Transition to college preparation' },
        ],
        specs: {
            budget: '$25,000',
            squareFeet: 'N/A',
            capacity: '35 Students',
            completionDate: 'August 2026',
        },
        fieldNotes: [
            { date: 'Jan 18, 2026', entry: '12 students submitted early applications. 8 acceptances so far!', hasPhotos: true },
            { date: 'Jan 10, 2026', entry: 'FAFSA workshop scheduled for January 25th.' },
            { date: 'Dec 20, 2025', entry: 'Essay reviews completed for all 35 students.' },
        ],
        contractor: 'Volunteer Mentor Network',
        donationNote: 'Help deserving students access higher education and break barriers.',
    },
    'annual-conference': {
        id: 'annual-conference',
        code: 'PROJECT ID: #YC26-CONF',
        name: 'Annual Youth Conference 2026',
        tagline: 'Ignite: Sparking Faith in a Modern World',
        status: 'planning',
        statusLabel: 'IN PLANNING',
        progress: 25,
        heroImage: '/images/mosque-interior.jpg',
        scope: {
            objective: 'To organize a 3-day youth conference that brings together 500+ young Muslims from across the region for spiritual development, networking, and skill-building workshops led by renowned scholars and professionals.',
            why: 'Young Muslims often feel isolated in their faith journey. This conference creates a powerful experience where they can connect with peers, learn from inspiring speakers, and return to their communities energized and equipped.',
        },
        gallery: [
            {
                title: 'Fig 1.1: Venue Layout',
                caption: 'Convention center floor plan with session rooms',
                image: '/images/mosque-dome.jpg',
                type: 'floorplan'
            },
            {
                title: 'Fig 1.2: Main Stage Concept',
                caption: 'Keynote presentation area with multimedia capabilities',
                image: '/images/shykh.jpg',
                type: 'render'
            },
        ],
        timeline: [
            { title: 'Theme & Vision Set', date: 'December 2025', status: 'completed', description: 'Conference theme finalized' },
            { title: 'Speaker Invitations', date: 'January 2026', status: 'active', description: 'Reaching out to scholars and speakers' },
            { title: 'Venue Booking', date: 'February 2026', status: 'future', description: 'Secure convention center' },
            { title: 'Registration Opens', date: 'May 2026', status: 'future', description: 'Early bird tickets available' },
            { title: 'Conference Weekend', date: 'October 2026', status: 'future', description: 'Main event: October 15-17, 2026' },
        ],
        specs: {
            budget: '$85,000',
            squareFeet: '25,000 sq ft',
            capacity: '500 Attendees',
            completionDate: 'October 2026',
        },
        fieldNotes: [
            { date: 'Jan 20, 2026', entry: 'Confirmed keynote speaker: Shaykh Omar Suleiman.' },
            { date: 'Jan 15, 2026', entry: 'Theme "Ignite" approved by planning committee.' },
            { date: 'Jan 05, 2026', entry: 'Initial venue research - 3 locations shortlisted.' },
        ],
        contractor: 'Youth Conference Planning Committee',
        donationNote: 'Sponsor a student ticket and transform a young life.',
    },
};

export const getProject = (id: string): Project => {
    return projectsData[id] || projectsData['youth-center'];
};
