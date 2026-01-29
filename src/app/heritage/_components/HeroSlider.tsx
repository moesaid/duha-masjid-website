'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import styles from '../_styles/HeroSlider.module.scss';

// ========================================
// CONFIGURATION
// ========================================
const SLIDER_CONFIG = {
    autoAdvanceDelay: 12000,
    transitionDuration: 2000,
    kenBurnsDuration: 16,
    autoAdvanceEnabled: true,
    pauseOnHover: true,
};

interface PrayerTime {
    name: string;
    time: string;
    timeDate?: Date;
}

// ========================================
// SIMULATED DATA
// ========================================
const PRAYER_DATA = {
    prayers: [
        { name: 'Fajr', time: '5:45 AM' },
        { name: 'Dhuhr', time: '12:15 PM' },
        { name: 'Asr', time: '3:30 PM' },
        { name: 'Maghrib', time: '5:20 PM' },
        { name: 'Isha', time: '7:30 PM' },
    ],
    nextPrayer: 'Maghrib',
    jumuahTime: '1:00 PM',
};

const CAMPAIGN_DATA = {
    raised: 847500,
    goal: 1200000,
    daysLeft: 42,
    donorCount: 1247,
};

function formatCurrency(amount: number): string {
    if (amount >= 1000000) return `$${(amount / 1000000).toFixed(1)}M`;
    if (amount >= 1000) return `$${(amount / 1000).toFixed(0)}K`;
    return `$${amount}`;
}

function useCountdown(targetHour: number, targetMinute: number) {
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0, isUrgent: false });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const target = new Date(now);
            target.setHours(targetHour, targetMinute, 0, 0);

            let diff = target.getTime() - now.getTime();
            if (diff < 0) diff += 24 * 60 * 60 * 1000;

            setTimeLeft({
                hours: Math.floor(diff / (1000 * 60 * 60)),
                minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((diff % (1000 * 60)) / 1000),
                isUrgent: diff < 15 * 60 * 1000,
            });
        };

        calculateTimeLeft();
        const interval = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(interval);
    }, [targetHour, targetMinute]);

    return timeLeft;
}

const TOTAL_SLIDES = 7;

export function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const countdown = useCountdown(17, 20); // Maghrib

    const nextSlide = useCallback(() => setCurrentSlide((prev) => (prev + 1) % TOTAL_SLIDES), []);
    const prevSlide = useCallback(() => setCurrentSlide((prev) => (prev - 1 + TOTAL_SLIDES) % TOTAL_SLIDES), []);
    const goToSlide = useCallback((index: number) => setCurrentSlide(index), []);

    useEffect(() => {
        if (!SLIDER_CONFIG.autoAdvanceEnabled || isPaused) return;
        const interval = setInterval(nextSlide, SLIDER_CONFIG.autoAdvanceDelay);
        return () => clearInterval(interval);
    }, [nextSlide, isPaused]);

    const progressPercent = Math.min((CAMPAIGN_DATA.raised / CAMPAIGN_DATA.goal) * 100, 100);

    const sliderStyle = {
        '--ken-burns-duration': `${SLIDER_CONFIG.kenBurnsDuration}s`,
        '--transition-duration': `${SLIDER_CONFIG.transitionDuration}ms`,
    } as React.CSSProperties;

    return (
        <section
            className={styles.heroSlider}
            style={sliderStyle}
            onMouseEnter={() => SLIDER_CONFIG.pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => SLIDER_CONFIG.pauseOnHover && setIsPaused(false)}
        >
            <div className={styles.slidesWrapper}>
                {/* ========================================
                    SLIDE 1: WELCOME - PRAYER COUNTDOWN
                    Large centered countdown with next prayer
                    ======================================== */}
                <div className={`${styles.slide} ${currentSlide === 0 ? styles.active : ''}`}>
                    <div className={styles.slideBackground} style={{ backgroundColor: 'oklch(0.22 0.05 145)' }} />
                    <div className={styles.slideOverlay} />
                    <div className={styles.slideContent}>
                        <h1 className={styles.slideHeadline}>Welcome to Al-Noor Masjid</h1>
                        <p className={styles.slideSubtitle}>A Sanctuary for Peace, Prayer, and Community</p>

                        <div className={styles.countdownWidget}>
                            <div className={styles.countdownLabel}>
                                Next Prayer: <span className={styles.prayerName}>Maghrib</span>
                            </div>
                            <div className={`${styles.countdownTimer} ${countdown.isUrgent ? styles.urgent : ''}`}>
                                <div className={styles.countdownUnit}>
                                    <span className={styles.countdownValue}>{String(countdown.hours).padStart(2, '0')}</span>
                                    <span className={styles.countdownUnitLabel}>HR</span>
                                </div>
                                <span className={styles.countdownSeparator}>:</span>
                                <div className={styles.countdownUnit}>
                                    <span className={styles.countdownValue}>{String(countdown.minutes).padStart(2, '0')}</span>
                                    <span className={styles.countdownUnitLabel}>MIN</span>
                                </div>
                                <span className={styles.countdownSeparator}>:</span>
                                <div className={styles.countdownUnit}>
                                    <span className={styles.countdownValue}>{String(countdown.seconds).padStart(2, '0')}</span>
                                    <span className={styles.countdownUnitLabel}>SEC</span>
                                </div>
                            </div>
                        </div>
                        <Link href="/heritage/about" className={styles.slideCta}>About Us</Link>
                    </div>
                </div>

                {/* ========================================
                    SLIDE 2: SERVICES - LIFE JOURNEY TIMELINE
                    Horizontal timeline showing life stages
                    ======================================== */}
                <div className={`${styles.slide} ${currentSlide === 1 ? styles.active : ''}`}>
                    <div className={styles.slideBackground} style={{ backgroundColor: 'oklch(0.18 0.04 180)' }} />
                    <div className={styles.slideOverlay} />
                    <div className={styles.slideContent}>
                        <h1 className={styles.slideHeadline}>From Birth to Hereafter</h1>
                        <p className={styles.slideSubtitle}>Life-Cycle Services for Every Stage</p>

                        <div className={styles.timelineWidget}>
                            <div className={styles.timelineLine} />
                            <div className={styles.timelineSteps}>
                                <div className={styles.timelineStep}>
                                    <div className={styles.timelineIcon}>👶</div>
                                    <div className={styles.timelineLabel}>Aqiqah</div>
                                </div>
                                <div className={styles.timelineStep}>
                                    <div className={styles.timelineIcon}>📖</div>
                                    <div className={styles.timelineLabel}>Education</div>
                                </div>
                                <div className={styles.timelineStep}>
                                    <div className={styles.timelineIcon}>💒</div>
                                    <div className={styles.timelineLabel}>Nikkah</div>
                                </div>
                                <div className={styles.timelineStep}>
                                    <div className={styles.timelineIcon}>🏠</div>
                                    <div className={styles.timelineLabel}>Family</div>
                                </div>
                                <div className={styles.timelineStep}>
                                    <div className={styles.timelineIcon}>🕯️</div>
                                    <div className={styles.timelineLabel}>Janazah</div>
                                </div>
                            </div>
                        </div>
                        <Link href="/heritage/services" className={styles.slideCta}>View All Services</Link>
                    </div>
                </div>

                {/* ========================================
                    SLIDE 3: EDUCATION - FEATURED CLASS SPOTLIGHT
                    Single featured class with large icon
                    ======================================== */}
                <div className={`${styles.slide} ${currentSlide === 2 ? styles.active : ''}`}>
                    <div className={styles.slideBackground} style={{ backgroundColor: 'oklch(0.20 0.04 200)' }} />
                    <div className={styles.slideOverlay} />
                    <div className={styles.slideContent}>
                        <h1 className={styles.slideHeadline}>Knowledge is Light</h1>
                        <p className={styles.slideSubtitle}>Featured Program</p>

                        <div className={styles.spotlightWidget}>
                            <div className={styles.spotlightIcon}>📖</div>
                            <div className={styles.spotlightContent}>
                                <h3 className={styles.spotlightTitle}>Quran Academy</h3>
                                <p className={styles.spotlightDesc}>Hifz Program • Ages 7-16</p>
                                <div className={styles.spotlightStats}>
                                    <span className={styles.spotlightStat}>
                                        <strong>89</strong> Students Enrolled
                                    </span>
                                    <span className={styles.spotlightDivider}>•</span>
                                    <span className={styles.spotlightStat}>
                                        <strong>12</strong> Huffaz Graduates
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.registrationUrgency}>
                            🔔 Registration closes in <strong>14 days</strong>
                        </div>
                        <Link href="/heritage/education" className={styles.slideCta}>Enroll Now</Link>
                    </div>
                </div>

                {/* ========================================
                    SLIDE 4: COMMUNITY - TESTIMONIAL QUOTE
                    Large quote from community member
                    ======================================== */}
                <div className={`${styles.slide} ${currentSlide === 3 ? styles.active : ''}`}>
                    <div className={styles.slideBackground} style={{ backgroundColor: 'oklch(0.22 0.06 280)' }} />
                    <div className={styles.slideOverlay} />
                    <div className={styles.slideContent}>
                        <h1 className={styles.slideHeadline}>Stronger Together</h1>
                        <p className={styles.slideSubtitle}>Voices from Our Community</p>

                        <div className={styles.testimonialWidget}>
                            <div className={styles.testimonialQuote}>
                                &ldquo;Al-Noor has been our family&apos;s home for 15 years.
                                The warmth, the knowledge, the brotherhood —
                                it&apos;s truly a blessed community.&rdquo;
                            </div>
                            <div className={styles.testimonialAuthor}>
                                <div className={styles.authorAvatar}>AB</div>
                                <div className={styles.authorInfo}>
                                    <span className={styles.authorName}>Ahmed B.</span>
                                    <span className={styles.authorRole}>Community Member since 2009</span>
                                </div>
                            </div>
                        </div>
                        <Link href="/heritage/community" className={styles.slideCta}>Join Our Community</Link>
                    </div>
                </div>

                {/* ========================================
                    SLIDE 5: EVENTS - FEATURED EVENT CARD
                    Single large event with countdown
                    ======================================== */}
                <div className={`${styles.slide} ${currentSlide === 4 ? styles.active : ''}`}>
                    <div className={styles.slideBackground} style={{ backgroundColor: 'oklch(0.20 0.05 320)' }} />
                    <div className={styles.slideOverlay} />
                    <div className={styles.slideContent}>
                        <h1 className={styles.slideHeadline}>Upcoming Events</h1>
                        <p className={styles.slideSubtitle}>Mark Your Calendar</p>

                        <div className={styles.featuredEventWidget}>
                            <div className={styles.featuredEventDate}>
                                <span className={styles.eventMonthLarge}>FEB</span>
                                <span className={styles.eventDayLarge}>15</span>
                                <span className={styles.eventYear}>2026</span>
                            </div>
                            <div className={styles.featuredEventInfo}>
                                <h3 className={styles.featuredEventTitle}>Annual Community Dinner</h3>
                                <p className={styles.featuredEventDetails}>
                                    📍 Main Hall &nbsp;•&nbsp; 🕰️ 6:00 PM &nbsp;•&nbsp; 🍽️ Catered Dinner
                                </p>
                                <div className={styles.featuredEventCountdown}>
                                    Starts in <strong>19 days</strong>
                                </div>
                            </div>
                        </div>
                        <Link href="/heritage/events" className={styles.slideCta}>View All Events</Link>
                    </div>
                </div>

                {/* ========================================
                    SLIDE 6: MEDIA - LIVE NOW / VIDEO PLAYER
                    Video player mock with live indicator
                    ======================================== */}
                <div className={`${styles.slide} ${currentSlide === 5 ? styles.active : ''}`}>
                    <div className={styles.slideBackground} style={{ backgroundColor: 'oklch(0.18 0.03 240)' }} />
                    <div className={styles.slideOverlay} />
                    <div className={styles.slideContent}>
                        <h1 className={styles.slideHeadline}>Stay Connected</h1>
                        <p className={styles.slideSubtitle}>Watch, Listen, Learn from Anywhere</p>

                        <div className={styles.videoWidget}>
                            <Link href="/heritage/media/live" className={styles.videoPlayer}>
                                <div className={styles.videoPlayButton}>
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <div className={styles.liveBadge}>
                                    <span className={styles.liveIndicator} />
                                    LIVE
                                </div>
                            </Link>
                            <div className={styles.videoInfo}>
                                <span className={styles.videoTitle}>Friday Khutbah</span>
                                <span className={styles.videoMeta}>1.2K watching now</span>
                            </div>
                        </div>
                        <Link href="/heritage/media/live" className={styles.slideCta}>Watch Live</Link>
                    </div>
                </div>

                {/* ========================================
                    SLIDE 7: DONATE - FUNDRAISING PROGRESS
                    Progress bar with goal thermometer
                    ======================================== */}
                <div className={`${styles.slide} ${currentSlide === 6 ? styles.active : ''}`}>
                    <div className={styles.slideBackground} style={{ backgroundColor: 'oklch(0.25 0.06 50)' }} />
                    <div className={styles.slideOverlay} />
                    <div className={styles.slideContent}>
                        <h1 className={styles.slideHeadline}>Build for the Future</h1>
                        <p className={styles.slideSubtitle}>Expansion Project</p>

                        <div className={styles.thermometerWidget}>
                            <div className={styles.thermometerGoal}>
                                <span className={styles.thermometerLabel}>GOAL</span>
                                <span className={styles.thermometerAmount}>{formatCurrency(CAMPAIGN_DATA.goal)}</span>
                            </div>
                            <div className={styles.thermometerBar}>
                                <div className={styles.thermometerFill} style={{ height: `${progressPercent}%` }}>
                                    <span className={styles.thermometerPercent}>{Math.round(progressPercent)}%</span>
                                </div>
                            </div>
                            <div className={styles.thermometerRaised}>
                                <span className={styles.thermometerLabel}>RAISED</span>
                                <span className={styles.thermometerAmount}>{formatCurrency(CAMPAIGN_DATA.raised)}</span>
                            </div>
                        </div>
                        <div className={styles.donorStats}>
                            <span>{CAMPAIGN_DATA.donorCount.toLocaleString()} donors</span>
                            <span className={styles.statDivider}>•</span>
                            <span>{CAMPAIGN_DATA.daysLeft} days left</span>
                        </div>
                        <Link href="/heritage/donate" className={`${styles.slideCta} ${styles.goldFilled}`}>
                            Donate Now
                        </Link>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <button className={`${styles.navArrow} ${styles.prev}`} onClick={prevSlide} aria-label="Previous">
                <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button className={`${styles.navArrow} ${styles.next}`} onClick={nextSlide} aria-label="Next">
                <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
            </button>

            <div className={styles.indicators}>
                {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
                    <button key={i} className={`${styles.indicator} ${i === currentSlide ? styles.active : ''}`} onClick={() => goToSlide(i)} />
                ))}
            </div>

            {/* Anchored Prayer Widget */}
            <div className={styles.prayerWidgetAnchor}>
                <div className={styles.prayerWidgetInner}>
                    <div className={styles.prayerTimesRow}>
                        {PRAYER_DATA.prayers.map((prayer) => (
                            <div key={prayer.name} className={`${styles.prayerTimeItem} ${prayer.name === PRAYER_DATA.nextPrayer ? styles.active : ''}`}>
                                <span className={styles.prayerLabel}>{prayer.name}</span>
                                <span className={styles.prayerValue}>{prayer.time}</span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.jumuahInfo}>
                        <span className={styles.jumuahLabel}>Jumu&apos;ah</span>
                        <span className={styles.jumuahTime}>{PRAYER_DATA.jumuahTime}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
