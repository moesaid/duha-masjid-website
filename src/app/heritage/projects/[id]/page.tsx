// Project Detail Page - Blueprint Design System
// Dynamic route for individual project pages
'use client';

import { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectPage.module.scss';
import {
    ArrowLeft,
    CheckCircle,
    Circle,
    Calendar,
    DollarSign,
    Maximize,
    Users,
    Clock,
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    Compass,
    Ruler,
    ImageIcon,
    Camera
} from 'lucide-react';

// Project Data
const projectsData: Record<string, {
    id: string;
    code: string;
    name: string;
    tagline: string;
    status: 'planning' | 'in-progress' | 'near-completion';
    statusLabel: string;
    progress: number;
    heroImage: string;
    scope: {
        objective: string;
        why: string;
    };
    gallery: {
        title: string;
        caption: string;
        image: string;
        type: 'floorplan' | 'render' | 'construction';
    }[];
    timeline: {
        title: string;
        date: string;
        status: 'completed' | 'active' | 'future';
        description?: string;
    }[];
    specs: {
        budget: string;
        squareFeet: string;
        capacity: string;
        completionDate: string;
    };
    fieldNotes: {
        date: string;
        entry: string;
        hasPhotos?: boolean;
    }[];
    contractor: string;
    donationNote: string;
}> = {
    'youth-center': {
        id: 'youth-center',
        code: 'PROJECT ID: #YC-2026',
        name: 'North Wing Youth Center',
        tagline: 'A dedicated space for the next generation of Muslim leaders',
        status: 'in-progress',
        statusLabel: 'UNDER CONSTRUCTION',
        progress: 45,
        heroImage: '/images/heritage/mosque-interior.jpg',
        scope: {
            objective: 'To build a state-of-the-art 10,000 sq ft youth center that provides dedicated spaces for education, recreation, mentorship, and spiritual development for Muslims ages 13-25.',
            why: 'Our current facilities are operating at 150% capacity during youth programs. Young Muslims deserve a safe, welcoming third space where they can develop their Islamic identity, build lasting friendships, and prepare for leadership in the community. This center will feature classrooms, a gymnasium, counseling rooms, and a dedicated prayer space designed specifically for youth.',
        },
        gallery: [
            {
                title: 'Fig 1.1: Main Floor Plan',
                caption: 'Ground level layout showing gymnasium, multi-purpose rooms, and main entrance',
                image: '/images/heritage/prayer-hall.jpg',
                type: 'floorplan'
            },
            {
                title: 'Fig 1.2: Interior Vision',
                caption: 'Rendered view of the main gathering hall with modern Islamic design elements',
                image: '/images/heritage/mosque-interior.jpg',
                type: 'render'
            },
            {
                title: 'Fig 1.3: Current Progress',
                caption: 'Steel framing completion - January 2026',
                image: '/images/heritage/shykh.jpg',
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
        heroImage: '/images/heritage/shykh.jpg',
        scope: {
            objective: 'To establish a comprehensive leadership development program that equips young Muslims (ages 16-25) with the skills, knowledge, and Islamic foundation needed to lead in their communities and professions.',
            why: 'Our community needs trained young leaders who can navigate modern challenges while staying rooted in Islamic values. This program combines executive coaching, public speaking, project management, and Islamic leadership principles into a 12-month intensive curriculum.',
        },
        gallery: [
            {
                title: 'Fig 1.1: Program Structure',
                caption: 'Curriculum overview and module breakdown',
                image: '/images/heritage/mosque-dome.jpg',
                type: 'floorplan'
            },
            {
                title: 'Fig 1.2: Mentorship Model',
                caption: 'One-on-one pairing with community leaders',
                image: '/images/heritage/mosque-interior.jpg',
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
        heroImage: '/images/heritage/mosque-dome.jpg',
        scope: {
            objective: 'To provide comprehensive college preparation support to high school juniors and seniors, including application guidance, essay review, scholarship searches, and career counseling from Muslim professionals.',
            why: 'Many first-generation college students in our community lack access to the guidance and resources needed to navigate the complex college application process. This program connects them with successful professionals who have walked this path before.',
        },
        gallery: [
            {
                title: 'Fig 1.1: Program Flow',
                caption: 'Journey from enrollment to college acceptance',
                image: '/images/heritage/mosque-interior.jpg',
                type: 'floorplan'
            },
            {
                title: 'Fig 1.2: Mentor Workshop',
                caption: 'Monthly sessions covering applications, essays, and interviews',
                image: '/images/heritage/shykh.jpg',
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
        heroImage: '/images/heritage/mosque-interior.jpg',
        scope: {
            objective: 'To organize a 3-day youth conference that brings together 500+ young Muslims from across the region for spiritual development, networking, and skill-building workshops led by renowned scholars and professionals.',
            why: 'Young Muslims often feel isolated in their faith journey. This conference creates a powerful experience where they can connect with peers, learn from inspiring speakers, and return to their communities energized and equipped.',
        },
        gallery: [
            {
                title: 'Fig 1.1: Venue Layout',
                caption: 'Convention center floor plan with session rooms',
                image: '/images/heritage/mosque-dome.jpg',
                type: 'floorplan'
            },
            {
                title: 'Fig 1.2: Main Stage Concept',
                caption: 'Keynote presentation area with multimedia capabilities',
                image: '/images/heritage/shykh.jpg',
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

interface ProjectPageProps {
    params: Promise<{ id: string }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const { id } = use(params);
    const project = projectsData[id] || projectsData['youth-center'];
    const [galleryIndex, setGalleryIndex] = useState(0);

    const nextSlide = () => {
        setGalleryIndex((prev) => (prev + 1) % project.gallery.length);
    };

    const prevSlide = () => {
        setGalleryIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
    };

    // Get icon for gallery type
    const getGalleryIcon = (type: string) => {
        switch (type) {
            case 'floorplan': return <Ruler size={16} />;
            case 'render': return <ImageIcon size={16} />;
            case 'construction': return <Camera size={16} />;
            default: return <ImageIcon size={16} />;
        }
    };

    return (
        <main className={styles.projectPage}>
            {/* Hero Section - 70vh Cinematic */}
            <header className={styles.heroSection}>
                <div className={styles.heroBackground}>
                    <Image
                        src={project.heroImage}
                        alt={project.name}
                        fill
                        className={styles.heroImage}
                        priority
                    />
                    <div className={styles.heroOverlay} />
                    <div className={styles.gridPattern} />
                </div>

                <div className={styles.heroContent}>
                    <Link href="/heritage/about/committees/youth" className={styles.backLink}>
                        <ArrowLeft size={18} />
                        Youth Committee
                    </Link>

                    <span className={styles.projectCode}>{project.code}</span>
                    <h1 className={styles.heroTitle}>{project.name}</h1>
                    <p className={styles.heroTagline}>{project.tagline}</p>

                    <div className={styles.statusBadge} data-status={project.status}>
                        <Compass size={18} />
                        {project.statusLabel}
                    </div>
                </div>

                {/* Progress Meter at bottom of hero */}
                <div className={styles.progressMeter}>
                    <div className={styles.progressInfo}>
                        <span className={styles.progressLabel}>Project Completion</span>
                        <span className={styles.progressPercent}>{project.progress}%</span>
                    </div>
                    <div className={styles.progressTrack}>
                        <div
                            className={styles.progressFill}
                            style={{ width: `${project.progress}%` }}
                        />
                    </div>
                </div>
            </header>

            {/* Section 2: The Scope (Executive Summary) */}
            <section className={styles.scopeSection}>
                <div className={styles.scopeContainer}>
                    <div className={styles.scopeImage}>
                        <Image
                            src={project.gallery[0]?.image || project.heroImage}
                            alt="Project Vision"
                            fill
                            className={styles.scopeImg}
                        />
                        <div className={styles.blueprintFrame} />
                    </div>

                    <div className={styles.scopeContent}>
                        <h2 className={styles.sectionTitle}>
                            <span className={styles.titleNumber}>01</span>
                            The Scope
                        </h2>

                        <div className={styles.manifestoBlock}>
                            <h3>The Objective</h3>
                            <p className={styles.dropCap}>{project.scope.objective}</p>
                        </div>

                        <div className={styles.manifestoBlock}>
                            <h3>The Why</h3>
                            <p>{project.scope.why}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: The Gallery (Blueprints) */}
            <section className={styles.gallerySection}>
                <h2 className={styles.sectionTitle}>
                    <span className={styles.titleNumber}>02</span>
                    The Blueprints
                </h2>

                <div className={styles.galleryCarousel}>
                    <button
                        className={styles.carouselArrow}
                        onClick={prevSlide}
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className={styles.draftingPlate}>
                        <div className={styles.plateHeader}>
                            {getGalleryIcon(project.gallery[galleryIndex].type)}
                            <span>{project.gallery[galleryIndex].title}</span>
                        </div>
                        <div className={styles.plateImage}>
                            <Image
                                src={project.gallery[galleryIndex].image}
                                alt={project.gallery[galleryIndex].title}
                                fill
                                className={styles.plateImg}
                            />
                        </div>
                        <div className={styles.plateCaption}>
                            {project.gallery[galleryIndex].caption}
                        </div>
                    </div>

                    <button
                        className={styles.carouselArrow}
                        onClick={nextSlide}
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className={styles.galleryDots}>
                    {project.gallery.map((_, idx) => (
                        <button
                            key={idx}
                            className={`${styles.dot} ${idx === galleryIndex ? styles.active : ''}`}
                            onClick={() => setGalleryIndex(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* Section 4: The Roadmap (Timeline) */}
            <section className={styles.roadmapSection}>
                <h2 className={styles.sectionTitle}>
                    <span className={styles.titleNumber}>03</span>
                    The Roadmap
                </h2>

                <div className={styles.timeline}>
                    {project.timeline.map((milestone, idx) => (
                        <div
                            key={idx}
                            className={`${styles.timelineNode} ${styles[milestone.status]}`}
                        >
                            <div className={styles.nodeMarker}>
                                {milestone.status === 'completed' ? (
                                    <CheckCircle size={24} />
                                ) : milestone.status === 'active' ? (
                                    <div className={styles.pulsingDot} />
                                ) : (
                                    <Circle size={24} />
                                )}
                            </div>
                            <div className={styles.nodeContent}>
                                <span className={styles.nodeDate}>{milestone.date}</span>
                                <h4 className={styles.nodeTitle}>{milestone.title}</h4>
                                {milestone.description && (
                                    <p className={styles.nodeDesc}>{milestone.description}</p>
                                )}
                            </div>
                        </div>
                    ))}

                    {/* Final ribbon icon */}
                    <div className={`${styles.timelineNode} ${styles.ribbon}`}>
                        <div className={styles.nodeMarker}>
                            <div className={styles.ribbonIcon}>🎀</div>
                        </div>
                        <div className={styles.nodeContent}>
                            <h4 className={styles.nodeTitle}>Grand Opening</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Project Specs (Data Strip) */}
            <section className={styles.specsSection}>
                <div className={styles.specsGrid}>
                    <div className={styles.specCard}>
                        <DollarSign size={28} />
                        <span className={styles.specLabel}>Budget</span>
                        <span className={styles.specValue}>{project.specs.budget}</span>
                    </div>
                    <div className={styles.specCard}>
                        <Maximize size={28} />
                        <span className={styles.specLabel}>Square Footage</span>
                        <span className={styles.specValue}>{project.specs.squareFeet}</span>
                    </div>
                    <div className={styles.specCard}>
                        <Users size={28} />
                        <span className={styles.specLabel}>Capacity</span>
                        <span className={styles.specValue}>{project.specs.capacity}</span>
                    </div>
                    <div className={styles.specCard}>
                        <Clock size={28} />
                        <span className={styles.specLabel}>Completion</span>
                        <span className={styles.specValue}>{project.specs.completionDate}</span>
                    </div>
                </div>
                <div className={styles.contractorNote}>
                    <strong>Contractor:</strong> {project.contractor}
                </div>
            </section>

            {/* Section 6: Field Notes (Recent Updates) */}
            <section className={styles.fieldNotesSection}>
                <h2 className={styles.sectionTitle}>
                    <span className={styles.titleNumber}>04</span>
                    Field Notes
                </h2>

                <div className={styles.logbook}>
                    {project.fieldNotes.map((note, idx) => (
                        <div key={idx} className={styles.logEntry}>
                            <div className={styles.logDate}>
                                <Calendar size={16} />
                                {note.date}
                            </div>
                            <p className={styles.logText}>{note.entry}</p>
                            {note.hasPhotos && (
                                <button className={styles.viewPhotosBtn}>
                                    <Camera size={14} />
                                    View Photos
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 7: Get Involved (Split CTA) */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaSplit}>
                    <div className={styles.ctaCard}>
                        <h3>Volunteer Your Skills</h3>
                        <p>We need skilled tradesmen, professionals, and dedicated community members to help bring this project to life.</p>
                        <Link href="/heritage/community/volunteers" className={styles.ctaButton}>
                            <Users size={18} />
                            Volunteer Now
                        </Link>
                    </div>

                    <div className={styles.ctaDivider}>
                        <span>or</span>
                    </div>

                    <div className={`${styles.ctaCard} ${styles.donateCard}`}>
                        <h3>Support This Project</h3>
                        <p>{project.donationNote}</p>
                        <Link href="/heritage/donate" className={`${styles.ctaButton} ${styles.donateBtn}`}>
                            <DollarSign size={18} />
                            Donate to Project
                            <ExternalLink size={14} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
