// Volunteers Page - HERITAGE ALIGNED
// Design: Warm invitation to serve with opportunities and sign-up
'use client';

import { useState } from 'react';
import styles from './VolunteersPage.module.scss';
import { Heart, Users, BookOpen, Utensils, Shield, Mic, Baby, Brush, Calendar, HandHeart } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

// Volunteer Opportunities
const opportunities = [
    {
        id: 'education',
        icon: BookOpen,
        title: 'Education & Teaching',
        description: 'Teach Sunday school, assist with Quran classes, or help with adult education programs.',
        commitment: '2-4 hours/week',
        skills: ['Teaching experience preferred', 'Patience with children', 'Islamic knowledge']
    },
    {
        id: 'events',
        icon: Calendar,
        title: 'Event Planning',
        description: 'Help organize community iftars, Eid celebrations, and special programs throughout the year.',
        commitment: 'Event-based',
        skills: ['Organizational skills', 'Creativity', 'Team coordination']
    },
    {
        id: 'hospitality',
        icon: Utensils,
        title: 'Hospitality & Food',
        description: 'Prepare and serve food for community dinners, visiting guests, and special occasions.',
        commitment: 'Flexible',
        skills: ['Cooking skills', 'Food safety awareness', 'Friendly demeanor']
    },
    {
        id: 'security',
        icon: Shield,
        title: 'Security & Safety',
        description: 'Help maintain a safe environment during prayers and events. Training provided.',
        commitment: '2-3 hours/week or per event',
        skills: ['Alertness', 'Physical fitness', 'Calm under pressure']
    },
    {
        id: 'youth',
        icon: Users,
        title: 'Youth Mentorship',
        description: 'Mentor young Muslims, lead youth programs, and be a positive role model.',
        commitment: '3-5 hours/week',
        skills: ['Connection with youth', 'Leadership', 'Patience']
    },
    {
        id: 'media',
        icon: Mic,
        title: 'Media & Communications',
        description: 'Help with photography, video, social media, newsletters, and website updates.',
        commitment: 'Flexible',
        skills: ['Technical skills', 'Creativity', 'Writing ability']
    },
    {
        id: 'childcare',
        icon: Baby,
        title: 'Childcare Support',
        description: 'Provide childcare during classes, halaqas, and events so parents can participate.',
        commitment: 'During events',
        skills: ['Experience with children', 'CPR/First Aid (preferred)', 'Patience']
    },
    {
        id: 'maintenance',
        icon: Brush,
        title: 'Maintenance & Cleaning',
        description: 'Help keep our masjid beautiful through regular cleaning and minor repairs.',
        commitment: 'Weekly or as needed',
        skills: ['Physical ability', 'Attention to detail', 'Reliability']
    }
];

// Testimonials
const testimonials = [
    {
        quote: "Volunteering at the masjid has been one of the most rewarding experiences of my life. I've made lifelong friends and feel truly connected to my community.",
        name: 'Sr. Fatima Hassan',
        role: 'Sunday School Teacher, 5 years'
    },
    {
        quote: "Even with my busy schedule, I find time to help because the spiritual reward is immense. The Prophet ﷺ said: 'The best of people are those who are most beneficial to others.'",
        name: 'Br. Ahmad Ali',
        role: 'Event Volunteer, 3 years'
    }
];

export default function VolunteersPage() {
    const [ageRange, setAgeRange] = useState('');
    const [availability, setAvailability] = useState('');
    const [hours, setHours] = useState('');

    return (
        <main className={styles.volunteersPage}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroPattern} />
                <div className={styles.heroContent}>
                    <span className={styles.heroBadge}>Serve Your Community</span>
                    <h1 className={styles.heroTitle}>Become a Volunteer</h1>
                    <p className={styles.heroSubtitle}>
                        Lend your time and talents to build a stronger, more vibrant community
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className={styles.introSection}>
                <div className={styles.introContainer}>
                    <div className={styles.introIcon}>
                        <HandHeart size={40} />
                    </div>
                    <h2 className={styles.introTitle}>Your Service Matters</h2>
                    <p className={styles.introText}>
                        Our masjid runs on the dedication of volunteers like you. Whether you have
                        a few hours a month or want to commit weekly, there&apos;s a place for everyone
                        to contribute their unique skills and make a lasting impact on our community.
                    </p>
                </div>
            </section>

            {/* Opportunities Grid */}
            <section className={styles.opportunitiesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Volunteer Opportunities</h2>
                    <p className={styles.sectionSubtitle}>Find the role that matches your interests and availability</p>
                </div>

                <div className={styles.opportunitiesGrid}>
                    {opportunities.map((opp) => {
                        const IconComponent = opp.icon;
                        return (
                            <div key={opp.id} className={styles.opportunityCard}>
                                <div className={styles.oppIcon}>
                                    <IconComponent size={24} />
                                </div>
                                <h3 className={styles.oppTitle}>{opp.title}</h3>
                                <p className={styles.oppDescription}>{opp.description}</p>
                                <div className={styles.oppMeta}>
                                    <span className={styles.oppCommitment}>⏱ {opp.commitment}</span>
                                </div>
                                <ul className={styles.oppSkills}>
                                    {opp.skills.map((skill, idx) => (
                                        <li key={idx}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Testimonials */}
            <section className={styles.testimonialsSection}>
                <h2 className={styles.testimonialsSectionTitle}>What Our Volunteers Say</h2>
                <div className={styles.testimonialsGrid}>
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className={styles.testimonialCard}>
                            <blockquote className={styles.testimonialQuote}>
                                &ldquo;{testimonial.quote}&rdquo;
                            </blockquote>
                            <div className={styles.testimonialAuthor}>
                                <span className={styles.authorName}>{testimonial.name}</span>
                                <span className={styles.authorRole}>{testimonial.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Volunteer Sign Up Form */}
            <section className={styles.signupSection}>
                <div className={styles.signupContainer}>
                    <div className={styles.signupInfo}>
                        <h2 className={styles.signupTitle}>Ready to Make a Difference?</h2>
                        <p className={styles.signupText}>
                            Fill out the interest form and we&apos;ll match you with opportunities
                            that fit your schedule and skills. Our volunteer coordinator will
                            reach out within one week.
                        </p>
                        <div className={styles.signupBenefits}>
                            <div className={styles.benefitItem}>
                                <HandHeart size={20} />
                                <span>Earn reward from Allah (SWT)</span>
                            </div>
                            <div className={styles.benefitItem}>
                                <Users size={20} />
                                <span>Build lasting friendships</span>
                            </div>
                            <div className={styles.benefitItem}>
                                <Heart size={20} />
                                <span>Strengthen your community</span>
                            </div>
                        </div>
                    </div>

                    <form className={styles.signupForm} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="fullName">Full Name *</label>
                                <input type="text" id="fullName" name="fullName" required placeholder="Your full name" />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email Address *</label>
                                <input type="email" id="email" name="email" required placeholder="your@email.com" />
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Phone Number *</label>
                                <input type="tel" id="phone" name="phone" required placeholder="(555) 123-4567" />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Age Range</label>
                                <Select value={ageRange} onValueChange={setAgeRange}>
                                    <SelectTrigger className={styles.selectTrigger}>
                                        <SelectValue placeholder="Select age range" />
                                    </SelectTrigger>
                                    <SelectContent className={styles.selectContent}>
                                        <SelectItem value="18-25">18-25 years</SelectItem>
                                        <SelectItem value="26-35">26-35 years</SelectItem>
                                        <SelectItem value="36-50">36-50 years</SelectItem>
                                        <SelectItem value="51+">51+ years</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label>Areas of Interest *</label>
                            <div className={styles.checkboxGrid}>
                                {opportunities.map((opp) => (
                                    <label key={opp.id} className={styles.checkboxItem}>
                                        <input type="checkbox" name="interests" value={opp.id} />
                                        <span>{opp.title}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>Time Availability *</label>
                                <Select value={availability} onValueChange={setAvailability}>
                                    <SelectTrigger className={styles.selectTrigger}>
                                        <SelectValue placeholder="Select availability" />
                                    </SelectTrigger>
                                    <SelectContent className={styles.selectContent}>
                                        <SelectItem value="weekday-mornings">Weekday Mornings</SelectItem>
                                        <SelectItem value="weekday-evenings">Weekday Evenings</SelectItem>
                                        <SelectItem value="weekends">Weekends</SelectItem>
                                        <SelectItem value="flexible">Flexible Schedule</SelectItem>
                                        <SelectItem value="events-only">Events Only</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Hours per Month</label>
                                <Select value={hours} onValueChange={setHours}>
                                    <SelectTrigger className={styles.selectTrigger}>
                                        <SelectValue placeholder="Select hours" />
                                    </SelectTrigger>
                                    <SelectContent className={styles.selectContent}>
                                        <SelectItem value="1-5">1-5 hours</SelectItem>
                                        <SelectItem value="5-10">5-10 hours</SelectItem>
                                        <SelectItem value="10-20">10-20 hours</SelectItem>
                                        <SelectItem value="20+">20+ hours</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="skills">Special Skills or Experience</label>
                            <textarea
                                id="skills"
                                name="skills"
                                rows={3}
                                placeholder="Tell us about any relevant skills, certifications, or experience you have..."
                            />
                        </div>

                        <div className={`${styles.formGroup} ${styles.formGroupSpaced}`}>
                            <label htmlFor="why">Why do you want to volunteer?</label>
                            <textarea
                                id="why"
                                name="why"
                                rows={3}
                                placeholder="Share what motivates you to serve the community..."
                            />
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            <Heart size={18} />
                            Submit Volunteer Interest
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}

