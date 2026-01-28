// Sisters Committee Page - SANCTUARY OF SISTERHOOD
// Unique Heritage Variant: Soft feminine tones with floral arabesques
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Users,
    BookOpen,
    Heart,
    Coffee,
    Calendar,
    Clock,
    Mail,
    Phone,
    MessageCircle,
    Award,
    Dumbbell,
    Sparkles,
    ChevronRight,
    Flower2,
    Shield,
    Star,
    Diamond
} from 'lucide-react';
import styles from './SistersPage.module.scss';

// ========================================
// DATA
// ========================================
const weeklyPrograms = [
    {
        icon: BookOpen,
        title: 'Tafseer & Tea',
        description: 'Weekly Quran study circle exploring the deeper meanings of the Divine Word in an intimate, nurturing setting.',
        time: 'Sundays after Dhuhr',
        instructor: 'Ustadha Fatima'
    },
    {
        icon: MessageCircle,
        title: 'Quran & Tajweed',
        description: 'Learn proper recitation with qualified female instructors in a supportive, judgment-free environment.',
        time: 'Tuesdays 10:00 AM',
        instructor: 'Sr. Aisha Rahman'
    },
    {
        icon: Dumbbell,
        title: "Sisters' Fitness",
        description: 'Stay active with low-impact exercises, yoga, and wellness sessions in our private sisters-only facility.',
        time: 'Mon & Thu 6:00 PM',
        instructor: 'Coach Mariam'
    }
];

const socialEvents = [
    {
        icon: Heart,
        title: 'New Mom Circle',
        description: 'Meal trains, baby showers, and community support for new and expecting mothers.'
    },
    {
        icon: Coffee,
        title: 'Chai & Chat',
        description: 'Monthly casual gatherings to build friendships over warm drinks and meaningful conversation.'
    },
    {
        icon: Calendar,
        title: 'Annual Retreat',
        description: 'Our flagship spring event featuring renowned female scholars and workshops.'
    },
    {
        icon: Award,
        title: 'Service Projects',
        description: 'Seasonal charity initiatives including school supply drives and winter coat collections.'
    },
    {
        icon: Users,
        title: 'Study Circles',
        description: 'Small group sessions exploring Islamic texts and contemporary topics.'
    },
    {
        icon: Sparkles,
        title: 'Craft & Create',
        description: 'Quarterly creative workshops featuring Islamic calligraphy, sewing, and art.'
    }
];

const mentorshipTracks = [
    {
        icon: Star,
        title: 'New to the Community',
        description: 'Welcome package, buddy system, and orientation for sisters who just joined.'
    },
    {
        icon: BookOpen,
        title: 'Seekers of Knowledge',
        description: 'Structured learning paths with female scholars for deeper Islamic education.'
    },
    {
        icon: Heart,
        title: 'Life Transitions',
        description: 'Support circles for marriage, motherhood, career changes, and other milestones.'
    }
];

const testimonials = [
    {
        quote: "The sisters here welcomed me like family when I first accepted Islam. I never felt alone.",
        author: "Sarah M.",
        role: "New Muslim, 2023"
    },
    {
        quote: "Tafseer & Tea is the highlight of my week. It's where I found my closest friends.",
        author: "Fatima A.",
        role: "Member since 2019"
    }
];

// ========================================
// COMPONENT
// ========================================
export default function SistersPage() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    return (
        <main className={styles.sistersPage}>
            {/* ========================================
                1. HERO SECTION (Heritage Centered Layout)
            ======================================== */}
            <section className={styles.heroSection}>
                <div className={styles.heroPattern} />

                {/* Arch-Masked Image */}
                <div className={styles.heroImageContainer}>
                    <div className={styles.archMask}>
                        <Image
                            src="/images/heritage/sisters-gathering.jpg"
                            alt="Sisters gathering at the masjid"
                            fill
                            className={styles.heroPhoto}
                        />
                        <div className={styles.imageOverlay} />
                    </div>
                </div>

                <div className={styles.headerContent}>
                    <span className={styles.headerBadge}>
                        <Flower2 size={14} />
                        Sisters Committee
                    </span>

                    <p className={styles.bismillah}>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>

                    <h1 className={styles.heroTitle}>
                        A Sanctuary of <span className={styles.titleAccent}>Sisterhood</span>
                    </h1>

                    <p className={styles.heroQuote}>
                        &ldquo;The believing men and believing women are allies of one another.&rdquo;
                    </p>
                    <span className={styles.quoteRef}>— Quran 9:71</span>

                    <p className={styles.heroDescription}>
                        Where women grow in faith, forge lifelong bonds,
                        and serve the community with grace and purpose.
                    </p>

                    <div className={styles.divider}>
                        <Diamond className={styles.dividerIcon} />
                    </div>

                    <div className={styles.heroActions}>
                        <Link href="/contact" className={styles.primaryCta}>
                            <Sparkles size={18} />
                            Join Our Circle
                        </Link>
                        <Link href="#programs" className={styles.secondaryCta}>
                            Explore Programs
                            <ChevronRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ========================================
                2. WEEKLY PROGRAMS (Elegant Cards)
            ======================================== */}
            <section id="programs" className={styles.programsSection}>
                <div className={styles.sectionIntro}>
                    <span className={styles.sectionLabel}>The Rhythm</span>
                    <h2 className={styles.sectionTitle}>Weekly Gatherings</h2>
                    <p className={styles.sectionDescription}>
                        Join us for regular programs designed to nurture the mind, body, and soul.
                    </p>
                </div>

                <div className={styles.programsGrid}>
                    {weeklyPrograms.map((program) => {
                        const IconComponent = program.icon;
                        return (
                            <article key={program.title} className={styles.programCard}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.cardIconCircle}>
                                        <IconComponent size={24} />
                                    </div>
                                    <span className={styles.sistersOnlyTag}>
                                        <Shield size={12} />
                                        Sisters Only
                                    </span>
                                </div>
                                <h3 className={styles.cardTitle}>{program.title}</h3>
                                <p className={styles.cardDescription}>{program.description}</p>
                                <div className={styles.cardFooter}>
                                    <div className={styles.cardTime}>
                                        <Clock size={14} />
                                        <span>{program.time}</span>
                                    </div>
                                    <span className={styles.cardInstructor}>
                                        with {program.instructor}
                                    </span>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* ========================================
                3. SOCIAL & SERVICE (Masonry Grid)
            ======================================== */}
            <section className={styles.socialSection}>
                <div className={styles.sectionIntro}>
                    <span className={styles.sectionLabel}>Community</span>
                    <h2 className={styles.sectionTitle}>Social & Service</h2>
                    <p className={styles.sectionDescription}>
                        Beyond learning, we build bonds and serve those in need.
                    </p>
                </div>

                <div className={styles.socialGrid}>
                    {socialEvents.map((event) => {
                        const IconComponent = event.icon;
                        return (
                            <div
                                key={event.title}
                                className={styles.socialCard}
                            >
                                <IconComponent className={styles.socialIcon} />
                                <h3 className={styles.socialTitle}>{event.title}</h3>
                                <p className={styles.socialDescription}>{event.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ========================================
                4. TESTIMONIAL BANNER (Quote Carousel)
            ======================================== */}
            <section className={styles.testimonialSection}>
                <div className={styles.testimonialContent}>
                    <Flower2 size={32} className={styles.testimonialFlower} />
                    <blockquote className={styles.testimonialQuote}>
                        &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                    </blockquote>
                    <cite className={styles.testimonialAuthor}>
                        — {testimonials[activeTestimonial].author},
                        <span>{testimonials[activeTestimonial].role}</span>
                    </cite>
                    <div className={styles.testimonialDots}>
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                className={`${styles.dot} ${idx === activeTestimonial ? styles.activeDot : ''}`}
                                onClick={() => setActiveTestimonial(idx)}
                                aria-label={`View testimonial ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================
                5. MENTORSHIP TRACKS
            ======================================== */}
            <section className={styles.mentorshipSection}>
                <div className={styles.sectionIntro}>
                    <span className={styles.sectionLabel}>Guidance</span>
                    <h2 className={styles.sectionTitle}>Mentorship & Support</h2>
                    <p className={styles.sectionDescription}>
                        Every woman&apos;s journey is unique. We meet you where you are.
                    </p>
                </div>

                <div className={styles.mentorshipGrid}>
                    {mentorshipTracks.map((track) => {
                        const IconComponent = track.icon;
                        return (
                            <div key={track.title} className={styles.mentorshipCard}>
                                <IconComponent className={styles.mentorshipIcon} />
                                <h4 className={styles.mentorshipTitle}>{track.title}</h4>
                                <p className={styles.mentorshipDescription}>{track.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ========================================
                6. GET INVOLVED CTA
            ======================================== */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContent}>
                    <p className={styles.ctaQuote}>
                        &ldquo;Paradise lies at the feet of mothers.&rdquo;
                        <cite>— Prophetic Saying</cite>
                    </p>

                    <h3 className={styles.ctaTitle}>Lend Your Voice</h3>
                    <p className={styles.ctaDescription}>
                        The Sisters Committee meets monthly to plan events, advocate for
                        women&apos;s needs, and shape our community. Your ideas matter.
                    </p>

                    <div className={styles.ctaContacts}>
                        <a href="mailto:sisters@duhamasjid.org" className={styles.contactLink}>
                            <Mail size={16} />
                            sisters@duhamasjid.org
                        </a>
                        <a href="tel:+15551234567" className={styles.contactLink}>
                            <Phone size={16} />
                            (555) 123-4567
                        </a>
                    </div>

                    <Link href="/contact" className={styles.ctaButton}>
                        <Heart size={18} />
                        Join the Committee
                    </Link>
                </div>
            </section>
        </main>
    );
}
