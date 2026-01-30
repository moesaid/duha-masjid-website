'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../_styles/HomePage.module.css';

interface HeroSectionProps {
    templateId: string;
}

// Featured announcements with image media
const ANNOUNCEMENTS = [
    {
        id: 1,
        type: 'event',
        badge: 'Upcoming Event',
        title: 'Spring Registration Now Open',
        subtitle: 'Weekend Islamic School 2026',
        description: 'Enroll your children in our comprehensive Islamic education program. Classes begin March 1st for ages 5-16.',
        cta: { label: 'Register Now', href: '/education/weekend-school' },
        secondary: { label: 'Learn More', href: '/education' },
        image: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?w=600&q=80',
        accentColor: 'emerald',
    },
    {
        id: 2,
        type: 'service',
        badge: 'New Service',
        title: 'Al-Shifa Community Clinic',
        subtitle: 'Free Healthcare for All',
        description: 'Our new medical clinic offers free consultations every Saturday. Open to all community members.',
        cta: { label: 'Book Appointment', href: '/community/free-clinic' },
        secondary: { label: 'View Services', href: '/services' },
        image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80',
        accentColor: 'teal',
    },
    {
        id: 3,
        type: 'announcement',
        badge: 'Ramadan Prep',
        title: 'Ramadan is Coming',
        subtitle: '30 Days of Mercy Await',
        description: 'Join our pre-Ramadan programs, taraweeh schedule, and community iftars. Register for our meal program.',
        cta: { label: 'View Schedule', href: '/events/seasonal' },
        secondary: { label: 'Volunteer', href: '/join/volunteer' },
        image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80',
        accentColor: 'gold',
    },
];

export function HeroSection({ templateId }: HeroSectionProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState<'next' | 'prev'>('next');
    const progressRef = useRef<HTMLDivElement>(null);
    const announcement = ANNOUNCEMENTS[currentSlide];

    const goToSlide = useCallback((index: number, dir: 'next' | 'prev' = 'next') => {
        if (isAnimating) return;
        setIsAnimating(true);
        setDirection(dir);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 600);
    }, [isAnimating]);

    const nextSlide = useCallback(() => {
        const next = (currentSlide + 1) % ANNOUNCEMENTS.length;
        goToSlide(next, 'next');
    }, [currentSlide, goToSlide]);

    const prevSlide = useCallback(() => {
        const prev = (currentSlide - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length;
        goToSlide(prev, 'prev');
    }, [currentSlide, goToSlide]);

    // Auto-rotate announcements (pauses on hover)
    useEffect(() => {
        if (ANNOUNCEMENTS.length <= 1 || isPaused) return;
        const timer = setInterval(nextSlide, 7000);
        return () => clearInterval(timer);
    }, [nextSlide, isPaused]);

    // Handle pause/resume for progress bar animation
    const handleMouseEnter = () => {
        setIsPaused(true);
        if (progressRef.current) {
            progressRef.current.style.animationPlayState = 'paused';
        }
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
        if (progressRef.current) {
            progressRef.current.style.animationPlayState = 'running';
        }
    };

    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <div
                    className={`${styles.heroCard} ${styles[`accent${announcement.accentColor}`]}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Progress bar */}
                    <div className={styles.heroProgressBar}>
                        <div
                            ref={progressRef}
                            className={styles.heroProgressFill}
                            key={currentSlide}
                        />
                    </div>

                    {/* Navigation arrows */}
                    {ANNOUNCEMENTS.length > 1 && (
                        <>
                            <button
                                className={`${styles.heroNavBtn} ${styles.heroNavPrev}`}
                                onClick={prevSlide}
                                aria-label="Previous announcement"
                            >
                                <ChevronIcon direction="left" />
                            </button>
                            <button
                                className={`${styles.heroNavBtn} ${styles.heroNavNext}`}
                                onClick={nextSlide}
                                aria-label="Next announcement"
                            >
                                <ChevronIcon direction="right" />
                            </button>
                        </>
                    )}

                    {/* Content */}
                    <div className={`${styles.heroContent} ${isAnimating ? styles[`slide${direction}`] : ''}`}>
                        {/* Badge */}
                        <div className={styles.heroBadge}>
                            <span className={styles.heroBadgeDot} />
                            {announcement.badge}
                        </div>

                        <div className={styles.heroInner}>
                            <div className={styles.heroText}>
                                <h1 className={styles.heroTitle} key={`title-${currentSlide}`}>
                                    {announcement.title}
                                </h1>
                                <p className={styles.heroSubtitle} key={`sub-${currentSlide}`}>
                                    {announcement.subtitle}
                                </p>
                                <p className={styles.heroDescription} key={`desc-${currentSlide}`}>
                                    {announcement.description}
                                </p>

                                <div className={styles.heroActions}>
                                    <Link
                                        href={`/${templateId}${announcement.cta.href}`}
                                        className={styles.heroPrimaryBtn}
                                    >
                                        {announcement.cta.label}
                                        <ArrowIcon />
                                    </Link>
                                    <Link
                                        href={`/${templateId}${announcement.secondary.href}`}
                                        className={styles.heroSecondaryBtn}
                                    >
                                        {announcement.secondary.label}
                                    </Link>
                                </div>
                            </div>

                            {/* Image Media with Floating Elements */}
                            <div className={styles.heroMedia} key={`media-${currentSlide}`}>
                                <div className={styles.heroMediaInner}>
                                    <Image
                                        src={announcement.image}
                                        alt={announcement.title}
                                        fill
                                        sizes="280px"
                                        className={styles.heroImage}
                                        priority={currentSlide === 0}
                                    />
                                </div>
                                {/* Floating decorative elements */}
                                <div className={styles.heroFloatingOrb1} />
                                <div className={styles.heroFloatingOrb2} />
                                <div className={styles.heroFloatingOrb3} />
                                <div className={styles.heroFloatingShape} />
                            </div>
                        </div>
                    </div>

                    {/* Slide indicators */}
                    {ANNOUNCEMENTS.length > 1 && (
                        <div className={styles.heroIndicators}>
                            {ANNOUNCEMENTS.map((_, index) => (
                                <button
                                    key={index}
                                    className={`${styles.heroIndicator} ${index === currentSlide ? styles.active : ''}`}
                                    onClick={() => goToSlide(index, index > currentSlide ? 'next' : 'prev')}
                                    aria-label={`Go to announcement ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

function ArrowIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    );
}

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {direction === 'left' ? (
                <path d="M15 18l-6-6 6-6" />
            ) : (
                <path d="M9 18l6-6-6-6" />
            )}
        </svg>
    );
}
