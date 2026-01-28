// Outreach & Interfaith Page - HERITAGE ALIGNED
// Design: Heritage Green + Gold + Cream (Diplomatic warmth)
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
    Globe,
    Users,
    MessageCircle,
    Building,
    BookOpen,
    Calendar,
    Clock,
    Handshake,
    Heart,
    FileText,
    Download,
    Eye,
    ChevronRight,
    Sparkle,
    Quote,
    MapPin,
    Phone,
    Mail,
    ChevronLeft
} from 'lucide-react';
import styles from './OutreachPage.module.scss';

// ========================================
// DATA
// ========================================
const services = [
    {
        icon: Building,
        title: 'Mosque Tours',
        description: 'Experience our sacred space with a guided tour. Perfect for school groups, civic organizations, and neighbors.',
        schedule: 'Saturdays at 11:00 AM',
        cta: 'Request a Tour'
    },
    {
        icon: MessageCircle,
        title: 'Speakers Bureau',
        description: 'Invite a community ambassador to speak at your school, workplace, or organization about Islam and Muslims.',
        schedule: 'By Request',
        cta: 'Request a Speaker'
    },
    {
        icon: BookOpen,
        title: 'Islam 101',
        description: 'Monthly open house session for community members interested in learning the basics of Islam.',
        schedule: 'First Sunday Monthly',
        cta: 'Register'
    }
];

const eventFeatures = [
    { icon: Users, label: 'Guided Tours' },
    { icon: BookOpen, label: 'Calligraphy Workshop' },
    { icon: Heart, label: 'Henna Art' },
    { icon: Globe, label: 'Food Bazaar' }
];

const resources = [
    {
        title: 'What Do Muslims Believe?',
        subtitle: 'Core Beliefs & Practices',
        format: 'PDF Guide',
        pages: '12 pages',
        color: 'green'
    },
    {
        title: 'Jesus in Islam',
        subtitle: 'A Shared Reverence',
        format: 'PDF Guide',
        pages: '8 pages',
        color: 'gold'
    },
    {
        title: 'Women in Islam',
        subtitle: 'Rights, Roles & Reality',
        format: 'PDF Guide',
        pages: '16 pages',
        color: 'green'
    }
];

const activities = [
    { icon: Globe, label: 'Interfaith Dialogue' },
    { icon: Handshake, label: 'Civic Partnerships' },
    { icon: Heart, label: 'Community Service' }
];

const impactStats = [
    { number: '2,500+', label: 'Visitors Welcomed' },
    { number: '85', label: 'School Tours' },
    { number: '40+', label: 'Partner Organizations' },
    { number: '12', label: 'Years Connecting' }
];

const testimonials = [
    {
        quote: "Our school group visited the masjid and it was transformative. The hospitality and warmth we received opened our students' eyes to a beautiful community.",
        author: "Sarah Mitchell",
        role: "Principal, Springfield Elementary"
    },
    {
        quote: "The speakers bureau provided our workplace with an informative and heartfelt presentation. Our team left with a deeper understanding and appreciation.",
        author: "David Chen",
        role: "HR Director, Tech Solutions Inc."
    },
    {
        quote: "As a longtime Springfield resident, I'm grateful for neighbors who open their doors with such genuine hospitality. The open house events are a community treasure.",
        author: "Pastor James Thompson",
        role: "Unity Church of Springfield"
    }
];

const partners = [
    'Springfield Interfaith Council',
    'Local Schools District',
    'Springfield Police Dept.',
    'Chamber of Commerce',
    'St. Mary\'s Church',
    'Temple Beth Israel'
];

// ========================================
// COMPONENT
// ========================================
export default function OutreachPage() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <main className={styles.outreachPage}>
            {/* ========================================
                1. HERO SECTION (Open Portal Design)
            ======================================== */}
            <section className={styles.heroSection}>
                <div className={styles.heroPattern} />

                <div className={styles.heroLayout}>
                    {/* Left Column - Welcome Portal */}
                    <div className={styles.welcomePortal}>
                        <div className={styles.portalFrame}>
                            <div className={styles.portalInner}>
                                <Globe size={40} className={styles.portalIcon} />
                                <span className={styles.portalLabel}>Our Door is</span>
                                <span className={styles.portalHighlight}>Always Open</span>
                                <div className={styles.portalDivider}>
                                    <Sparkle size={12} />
                                </div>
                                <span className={styles.portalSubtext}>مرحبا بكم</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className={styles.heroContent}>
                        <p className={styles.heroVerse}>
                            &ldquo;And We made you into nations and tribes that you may know one another.&rdquo;
                        </p>
                        <span className={styles.verseRef}>— Quran 49:13</span>

                        <h1 className={styles.heroTitle}>
                            Building Bridges of <span className={styles.titleAccent}>Understanding</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Whether you're a curious neighbor, a teacher planning a field trip, or someone
                            seeking to learn about Islam — you're invited to visit, ask questions, and
                            share a cup of tea with us.
                        </p>

                        <div className={styles.heroStats}>
                            <div className={styles.heroStat}>
                                <span className={styles.statNum}>12+</span>
                                <span className={styles.statLabel}>Years Serving</span>
                            </div>
                            <div className={styles.heroStat}>
                                <span className={styles.statNum}>2,500+</span>
                                <span className={styles.statLabel}>Guests Welcomed</span>
                            </div>
                            <div className={styles.heroStat}>
                                <span className={styles.statNum}>85</span>
                                <span className={styles.statLabel}>School Tours</span>
                            </div>
                        </div>

                        <div className={styles.heroActions}>
                            <Link href="/contact" className={styles.primaryCta}>
                                <Calendar size={18} />
                                Schedule a Visit
                            </Link>
                            <Link href="#services" className={styles.secondaryCta}>
                                Explore Programs
                                <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================
                2. IMPACT STATS (Animated Strip)
            ======================================== */}
            <section className={styles.impactStrip}>
                <div className={styles.impactGrid}>
                    {impactStats.map((stat) => (
                        <div key={stat.label} className={styles.impactStat}>
                            <span className={styles.impactNumber}>{stat.number}</span>
                            <span className={styles.impactLabel}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========================================
                3. OUR MISSION / APPROACH
            ======================================== */}
            <section className={styles.missionSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>The Approach</span>
                    <h2 className={styles.sectionTitle}>Our Mission</h2>
                </div>

                <div className={styles.missionLayout}>
                    <div className={styles.missionContent}>
                        <p className={styles.missionPhilosophy}>
                            The Masjid is more than just a place of worship — it is a community hub
                            that welcomes all. Our outreach program exists to dispel misconceptions,
                            foster genuine friendships, and serve as a bridge between our congregation
                            and the broader Springfield community.
                        </p>

                        <div className={styles.missionQuote}>
                            <span>&ldquo;The best among you are those who are most beneficial to others.&rdquo;</span>
                            <cite>— Prophetic Teaching (Hadith)</cite>
                        </div>

                        <div className={styles.activitiesGrid}>
                            {activities.map((activity) => {
                                const IconComponent = activity.icon;
                                return (
                                    <div key={activity.label} className={styles.activityItem}>
                                        <IconComponent size={16} />
                                        <span>{activity.label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className={styles.missionVisual}>
                        <div className={styles.visualPlaceholder}>
                            <Globe size={64} />
                            <span>Unity in Diversity</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================
                4. SERVICES (Plaque Cards)
            ======================================== */}
            <section id="services" className={styles.servicesSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>What We Offer</span>
                    <h2 className={styles.sectionTitle}>Request a Service</h2>
                </div>

                <div className={styles.servicesGrid}>
                    {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <div key={service.title} className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>
                                    <IconComponent size={28} />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <div className={styles.serviceDetails}>
                                    <Clock size={14} />
                                    <span>{service.schedule}</span>
                                </div>
                                <Link href="/contact" className={styles.serviceBtn}>
                                    {service.cta}
                                    <ChevronRight size={16} />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ========================================
                5. TESTIMONIALS CAROUSEL
            ======================================== */}
            <section className={styles.testimonialsSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Community Voices</span>
                    <h2 className={styles.sectionTitle}>What Our Neighbors Say</h2>
                </div>

                <div className={styles.testimonialCarousel}>
                    <button
                        className={styles.carouselBtn}
                        onClick={prevTestimonial}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className={styles.testimonialCard}>
                        <Quote size={32} className={styles.quoteIcon} />
                        <p className={styles.testimonialQuote}>
                            {testimonials[activeTestimonial].quote}
                        </p>
                        <div className={styles.testimonialAuthor}>
                            <span className={styles.authorName}>
                                {testimonials[activeTestimonial].author}
                            </span>
                            <span className={styles.authorRole}>
                                {testimonials[activeTestimonial].role}
                            </span>
                        </div>
                        <div className={styles.testimonialDots}>
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`${styles.dot} ${idx === activeTestimonial ? styles.activeDot : ''}`}
                                    onClick={() => setActiveTestimonial(idx)}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    <button
                        className={styles.carouselBtn}
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </section>

            {/* ========================================
                6. FEATURE EVENT (Heritage Green Band)
            ======================================== */}
            <section className={styles.eventSection}>
                <div className={styles.eventContent}>
                    <div className={styles.eventHeader}>
                        <span className={styles.eventLabel}>Annual Open House</span>
                        <h2 className={styles.eventTitle}>Visit a Mosque Day</h2>
                        <p className={styles.eventSubtitle}>
                            Join us for our flagship community event where neighbors are invited to explore
                            our masjid, enjoy food from around the world, and experience the beauty of Islamic art.
                        </p>
                    </div>

                    <div className={styles.eventDetails}>
                        <div className={styles.eventFeatures}>
                            {eventFeatures.map((feature) => {
                                const IconComponent = feature.icon;
                                return (
                                    <div key={feature.label} className={styles.featureItem}>
                                        <IconComponent size={18} />
                                        <span>{feature.label}</span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className={styles.eventActions}>
                            <div className={styles.eventDateBox}>
                                <Calendar size={22} />
                                <span className={styles.dateValue}>Spring 2026</span>
                            </div>
                            <Link href="/contact" className={styles.eventCta}>
                                RSVP for This Event
                                <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================
                7. PARTNERS SECTION
            ======================================== */}
            <section className={styles.partnersSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Building Together</span>
                    <h2 className={styles.sectionTitle}>Our Community Partners</h2>
                </div>

                <div className={styles.partnersGrid}>
                    {partners.map((partner) => (
                        <div key={partner} className={styles.partnerBadge}>
                            <Handshake size={16} />
                            <span>{partner}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========================================
                8. RESOURCES FOR NEIGHBORS
            ======================================== */}
            <section className={styles.resourcesSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Free Downloads</span>
                    <h2 className={styles.sectionTitle}>Resources for Neighbors</h2>
                    <p className={styles.sectionSubtitle}>Thoughtfully prepared guides to help you learn more</p>
                </div>

                <div className={styles.resourcesGrid}>
                    {resources.map((resource) => (
                        <div key={resource.title} className={`${styles.resourceCard} ${styles[resource.color]}`}>
                            <div className={styles.bookSpine} />
                            <div className={styles.bookCover}>
                                <div className={styles.bookDecor}>
                                    <Sparkle size={14} />
                                </div>
                                <h4 className={styles.bookTitle}>{resource.title}</h4>
                                <p className={styles.bookSubtitle}>{resource.subtitle}</p>
                                <div className={styles.bookMeta}>
                                    <FileText size={14} />
                                    <span>{resource.pages}</span>
                                </div>
                            </div>
                            <div className={styles.bookActions}>
                                <button className={styles.previewBtn}>
                                    <Eye size={16} />
                                    Preview
                                </button>
                                <button className={styles.downloadBtn}>
                                    <Download size={16} />
                                    Download PDF
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========================================
                9. CONTACT / VISIT US (Quick Access)
            ======================================== */}
            <section className={styles.visitSection}>
                <div className={styles.visitContent}>
                    <div className={styles.visitInfo}>
                        <h3>Come Visit Us</h3>
                        <p>We'd love to meet you. Stop by during our open hours or schedule a private tour.</p>

                        <div className={styles.visitDetails}>
                            <div className={styles.visitItem}>
                                <MapPin size={18} />
                                <span>123 Main Street, Springfield</span>
                            </div>
                            <div className={styles.visitItem}>
                                <Phone size={18} />
                                <span>(555) 123-4567</span>
                            </div>
                            <div className={styles.visitItem}>
                                <Mail size={18} />
                                <span>outreach@masjid.org</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.visitCta}>
                        <Link href="/contact" className={styles.visitBtn}>
                            <Calendar size={18} />
                            Schedule Your Visit
                        </Link>
                    </div>
                </div>
            </section>

            {/* ========================================
                10. VOLUNTEER CTA
            ======================================== */}
            <section className={styles.volunteerSection}>
                <div className={styles.volunteerCenter}>
                    <div className={styles.volunteerIconWrap}>
                        <Handshake size={32} className={styles.volunteerIcon} />
                    </div>
                    <div className={styles.volunteerText}>
                        <h3>Want to Help Represent Your Faith?</h3>
                        <p>
                            Join the Dawah Committee. Training provided.
                            Must attend the &quot;Dawah 101&quot; workshop.
                        </p>
                    </div>
                    <Link href="/contact" className={styles.volunteerBtn}>
                        Volunteer for Outreach
                        <ChevronRight size={16} />
                    </Link>
                </div>
            </section>
        </main>
    );
}
