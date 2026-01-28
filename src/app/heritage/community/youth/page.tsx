// Youth Group Page - "The Next Generation"
// Design: Noble, Adventurous, Grounded - "Scouts meets Classical Seminarian"
'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Compass,
    Users,
    BookOpen,
    Heart,
    Calendar,
    Clock,
    MapPin,
    ChevronRight,
    ChevronLeft,
    Shield,
    MessageCircle,
    Phone,
    Mail,
    ExternalLink,
    Mountain,
    Flame,
    Star,
    FileText,
    CheckCircle,
    AlertCircle
} from 'lucide-react';
import styles from './YouthPage.module.scss';

// ========================================
// DATA
// ========================================
const pillars = [
    {
        icon: Users,
        title: 'Suhba',
        subtitle: 'Companionship',
        description: 'Good company is the foundation of faith. We create a safe space for lifelong friendships.',
        color: '#4A7C59'
    },
    {
        icon: BookOpen,
        title: 'Ilm',
        subtitle: 'Knowledge',
        description: 'Relevant discussions on navigating modern life as a Muslim.',
        color: '#8B7355'
    },
    {
        icon: Heart,
        title: 'Khidmah',
        subtitle: 'Service',
        description: 'Giving back to the community through food drives and cleanups.',
        color: '#8B4A5E'
    }
];

const programTracks = [
    {
        id: 'explorers',
        badge: 'The Explorers',
        ageGroup: 'Middle School (Grades 6-8)',
        color: '#4A7C59',
        focus: 'Fun, Identity, and Basics',
        description: 'A safe space to build friendships, learn the basics of Islam, and explore who you are as a young Muslim.',
        activities: ['Monthly Game Nights', 'Outdoor Adventures', 'Identity Workshops', 'Community Service Days'],
        meeting: 'Sundays 2:00 PM - 4:00 PM'
    },
    {
        id: 'believers',
        badge: 'The Young Believers',
        ageGroup: 'High School (Grades 9-12)',
        color: '#8B7355',
        focus: 'Mentorship, Deeper Talks, College Prep',
        description: 'Deeper discussions on faith, leadership development, and preparation for life after high school.',
        activities: ['Weekly Halaqas', 'SAT Study Groups', 'College Application Help', 'Mentor Matching'],
        meeting: 'Fridays after Maghrib (Boys) / Saturdays 2:00 PM (Girls)'
    },
    {
        id: 'professionals',
        badge: 'The Professionals',
        ageGroup: 'College & Young Adults (18-30)',
        color: '#8B4A5E',
        focus: 'Networking, Marriage Talks, Career Advice',
        description: 'Building a community of young Muslim professionals navigating careers, relationships, and faith.',
        activities: ['Career Networking Events', 'Marriage Preparation Series', 'Monthly Brunches', 'Speaker Panels'],
        meeting: '1st & 3rd Saturdays 6:00 PM'
    }
];

const weeklySchedule = [
    {
        day: 'Friday',
        time: '7:00 PM - 9:00 PM',
        event: 'The Main Halaqa',
        description: 'Pizza & Talk. Weekly gathering for high school youth.',
        icon: MessageCircle
    },
    {
        day: 'Saturday',
        time: 'Monthly (Fajr)',
        event: 'Fajr & Hike',
        description: 'Wake up early, pray Fajr, and hit the trails together.',
        icon: Mountain
    },
    {
        day: 'Sunday',
        time: '3:00 PM - 5:00 PM',
        event: 'Open Gym / Basketball',
        description: 'Drop-in sports and recreation. All skill levels welcome.',
        icon: Star
    }
];

const upcomingEvents = [
    {
        title: 'Annual Winter Retreat (Ski Trip)',
        date: 'Dec 24-26, 2026',
        location: 'Camp Pines, Minnesota',
        image: '/images/heritage/future-generations.jpg',
        status: 'Registration Open',
        statusColor: '#4A7C59'
    },
    {
        title: 'Six Flags Muslim Day',
        date: 'June 15, 2027',
        location: 'Six Flags Great America',
        image: '/images/heritage/mosque-community.jpg',
        status: 'Coming Soon',
        statusColor: '#8B7355'
    },
    {
        title: 'Ramadan Qiyam Night',
        date: 'March 2027',
        location: 'Duha Masjid',
        image: '/images/heritage/prayer-hall.jpg',
        status: 'Waitlist Only',
        statusColor: '#8B4A5E'
    }
];

// ========================================
// COMPONENT
// ========================================
export default function YouthPage() {
    const [activeTrack, setActiveTrack] = useState('believers');
    const [eventIndex, setEventIndex] = useState(0);

    const currentTrack = programTracks.find(t => t.id === activeTrack) || programTracks[1];

    const nextEvent = () => {
        setEventIndex((prev) => (prev + 1) % upcomingEvents.length);
    };

    const prevEvent = () => {
        setEventIndex((prev) => (prev - 1 + upcomingEvents.length) % upcomingEvents.length);
    };

    return (
        <main className={styles.youthPage}>
            {/* ========================================
                1. FUTUWAH HERO
            ======================================== */}
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <p className={styles.heroVerse}>
                        &ldquo;They were youths who believed in their Lord, and We increased them in guidance.&rdquo;
                    </p>
                    <span className={styles.verseRef}>— Quran 18:13</span>

                    <h1 className={styles.heroTitle}>
                        Cultivating the Leaders of Tomorrow
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Building brotherhood and sisterhood through Faith, Fun, and Service.
                    </p>

                    <div className={styles.heroCtas}>
                        <Link href="/heritage/community" className={styles.primaryCta}>
                            <Users size={20} />
                            Join Duha Circle
                        </Link>
                        <Link href="/forms/youth-waiver" className={styles.secondaryCta}>
                            <FileText size={20} />
                            Parent Waiver Form
                        </Link>
                    </div>
                </div>
            </section>

            {/* ========================================
                2. THREE PILLARS (Our Methodology)
            ======================================== */}
            <section className={styles.pillarsSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Our Methodology</span>
                    <h2 className={styles.sectionTitle}>The Three Pillars</h2>
                </div>

                <div className={styles.pillarsGrid}>
                    {pillars.map((pillar) => {
                        const IconComponent = pillar.icon;
                        return (
                            <div
                                key={pillar.title}
                                className={styles.pillarCard}
                                style={{ '--pillar-color': pillar.color } as React.CSSProperties}
                            >
                                <div className={styles.pillarBadge}>
                                    <IconComponent size={28} />
                                </div>
                                <h3>{pillar.title}</h3>
                                <span className={styles.pillarSubtitle}>{pillar.subtitle}</span>
                                <p>{pillar.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ========================================
                3. PROGRAM TRACKS (Age Groups)
            ======================================== */}
            <section className={styles.tracksSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Find Your Group</span>
                    <h2 className={styles.sectionTitle}>Program Tracks</h2>
                </div>

                <div className={styles.trackTabs}>
                    {programTracks.map((track) => (
                        <button
                            key={track.id}
                            className={`${styles.trackTab} ${activeTrack === track.id ? styles.active : ''}`}
                            onClick={() => setActiveTrack(track.id)}
                            style={{ '--track-color': track.color } as React.CSSProperties}
                        >
                            <Shield size={16} />
                            {track.badge}
                        </button>
                    ))}
                </div>

                <div
                    className={styles.trackCard}
                    style={{ '--track-color': currentTrack.color } as React.CSSProperties}
                >
                    <div className={styles.trackBadge}>
                        <Shield size={40} />
                        <div>
                            <h3>{currentTrack.badge}</h3>
                            <span>{currentTrack.ageGroup}</span>
                        </div>
                    </div>

                    <div className={styles.trackContent}>
                        <div className={styles.trackFocus}>
                            <Compass size={18} />
                            <strong>Focus:</strong> {currentTrack.focus}
                        </div>
                        <p className={styles.trackDescription}>{currentTrack.description}</p>

                        <div className={styles.trackActivities}>
                            <h4>What We Do:</h4>
                            <ul>
                                {currentTrack.activities.map((activity, idx) => (
                                    <li key={idx}>
                                        <CheckCircle size={14} />
                                        {activity}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.trackMeeting}>
                            <Clock size={16} />
                            <span>{currentTrack.meeting}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================
                4. WEEKLY RHYTHM (The Schedule)
            ======================================== */}
            <section className={styles.scheduleSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>The Rhythm</span>
                    <h2 className={styles.sectionTitle}>Weekly Schedule</h2>
                </div>

                <div className={styles.scheduleTimeline}>
                    {weeklySchedule.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div key={index} className={styles.scheduleItem}>
                                <div className={styles.scheduleIcon}>
                                    <IconComponent size={24} />
                                </div>
                                <div className={styles.scheduleDetails}>
                                    <span className={styles.scheduleDay}>{item.day}</span>
                                    <h4>{item.event}</h4>
                                    <span className={styles.scheduleTime}>{item.time}</span>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className={styles.calendarCta}>
                    <Link href="#" className={styles.calendarBtn}>
                        <Calendar size={18} />
                        Add to Google Calendar
                        <ExternalLink size={14} />
                    </Link>
                </div>
            </section>

            {/* ========================================
                5. UPCOMING ADVENTURES (Events)
            ======================================== */}
            <section className={styles.eventsSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Mark Your Calendar</span>
                    <h2 className={styles.sectionTitle}>Upcoming Adventures</h2>
                </div>

                <div className={styles.eventsCarousel}>
                    <button className={styles.carouselBtn} onClick={prevEvent}>
                        <ChevronLeft size={24} />
                    </button>

                    <div className={styles.eventCard}>
                        <div
                            className={styles.eventImage}
                            style={{ backgroundImage: `url(${upcomingEvents[eventIndex].image})` }}
                        >
                            <span
                                className={styles.eventStatus}
                                style={{ background: upcomingEvents[eventIndex].statusColor }}
                            >
                                {upcomingEvents[eventIndex].status}
                            </span>
                        </div>
                        <div className={styles.eventDetails}>
                            <span className={styles.eventDate}>
                                <Calendar size={14} />
                                {upcomingEvents[eventIndex].date}
                            </span>
                            <h3>{upcomingEvents[eventIndex].title}</h3>
                            <span className={styles.eventLocation}>
                                <MapPin size={14} />
                                {upcomingEvents[eventIndex].location}
                            </span>
                            <Link href="#" className={styles.eventLink}>
                                Learn More <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>

                    <button className={styles.carouselBtn} onClick={nextEvent}>
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className={styles.eventDots}>
                    {upcomingEvents.map((_, idx) => (
                        <button
                            key={idx}
                            className={`${styles.dot} ${idx === eventIndex ? styles.active : ''}`}
                            onClick={() => setEventIndex(idx)}
                        />
                    ))}
                </div>
            </section>

            {/* ========================================
                6. PARENT'S CORNER
            ======================================== */}
            <section className={styles.parentsSection}>
                <div className={styles.parentsContent}>
                    <div className={styles.parentsHeader}>
                        <Shield size={32} />
                        <h2>A Note for Parents</h2>
                    </div>

                    <div className={styles.parentsGrid}>
                        <div className={styles.parentItem}>
                            <CheckCircle size={20} />
                            <div>
                                <h4>Background Checked Mentors</h4>
                                <p>All adult volunteers and staff undergo thorough background checks.</p>
                            </div>
                        </div>
                        <div className={styles.parentItem}>
                            <MessageCircle size={20} />
                            <div>
                                <h4>Parents-Only WhatsApp</h4>
                                <p>Join our parent group for logistics, pickup times, and updates.</p>
                            </div>
                        </div>
                        <div className={styles.parentItem}>
                            <AlertCircle size={20} />
                            <div>
                                <h4>Emergency Protocols</h4>
                                <p>Clear safety procedures and emergency contacts at every event.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contactInfo}>
                        <h4>Youth Director Contact</h4>
                        <div className={styles.contactDetails}>
                            <span>
                                <Mail size={16} />
                                youth@duhamasjid.org
                            </span>
                            <span>
                                <Phone size={16} />
                                (555) 123-4567
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
