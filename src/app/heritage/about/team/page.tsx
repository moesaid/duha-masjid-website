'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './TeamPage.module.scss';
import templateStyles from '../../_styles/template.module.scss';
import {
    GraduationCap,
    Calendar,
    Clock,
    Send,
    Lock,
    Play,
    ChevronLeft,
    ChevronRight,
    BookOpen,
    Users,
    Heart
} from 'lucide-react';

// Senior Imam Data
const seniorImam = {
    name: 'Sheikh Abdullah Rahman',
    title: 'Head Imam & Director of Religious Affairs',
    image: '/images/heritage/shykh.jpg',
    bio: `Sheikh Abdullah Rahman has been serving our community for over 20 years, bringing wisdom, compassion, and scholarly excellence to our masjid. His approach blends deep Islamic knowledge with practical guidance for modern life, helping families navigate faith in today's world.`,
    credentials: [
        'PhD in Islamic Studies, Al-Azhar University',
        'MA in Arabic Language & Literature',
        '20+ years of community leadership',
        'Author of "Faith in the Modern Age"',
        'Certified Family Counselor',
    ],
    schedule: [
        { day: 'Monday', time: '10:00 AM - 12:00 PM', type: 'Counseling' },
        { day: 'Wednesday', time: '2:00 PM - 4:00 PM', type: 'Open Office' },
        { day: 'Friday', time: 'After Jummah', type: 'Q&A Session' },
        { day: 'Saturday', time: '11:00 AM - 1:00 PM', type: 'Youth Mentorship' },
    ],
};

// Resident Scholars Data
const residentScholars = [
    {
        name: 'Imam Yusuf Hassan',
        role: 'Associate Imam',
        specialty: 'Fiqh & Family Counseling',
        image: '/images/heritage/arab-men-1.jpg',
    },
    {
        name: 'Ustadh Ahmad Malik',
        role: 'Youth Director',
        specialty: 'Youth Development & Sports',
        image: '/images/heritage/arab-men-2.jpg',
    },
    {
        name: 'Ustadha Khadijah Omar',
        role: 'Quran Instructor',
        specialty: 'Tajweed & Hifdh Programs',
        image: '/images/heritage/arab-women-1.jpg',
    },
    {
        name: 'Sheikh Ibrahim Ali',
        role: 'Weekend School Director',
        specialty: 'Islamic Education',
        image: '/images/heritage/arab-men-3.jpg',
    },
    {
        name: 'Ustadha Maryam Hassan',
        role: 'Sisters Programs Lead',
        specialty: 'Women\'s Spirituality',
        image: '/images/heritage/arab-women-2.jpg',
    },
    {
        name: 'Ustadh Bilal Thompson',
        role: 'New Muslim Coordinator',
        specialty: 'Shahada & Integration',
        image: '/images/heritage/arab-men-4.jpg',
    },
];

// Recent Khutbahs Data
const recentKhutbahs = [
    {
        title: 'The Blessing of Gratitude',
        speaker: 'Sheikh Abdullah Rahman',
        date: 'January 24, 2025',
        thumbnail: '/images/heritage/mosque-interior.jpg',
        duration: '32:15',
    },
    {
        title: 'Patience in Times of Trial',
        speaker: 'Imam Yusuf Hassan',
        date: 'January 17, 2025',
        thumbnail: '/images/heritage/quran-book.jpg',
        duration: '28:42',
    },
    {
        title: 'Building Strong Muslim Families',
        speaker: 'Sheikh Abdullah Rahman',
        date: 'January 10, 2025',
        thumbnail: '/images/heritage/youth-learning.jpg',
        duration: '35:10',
    },
    {
        title: 'The Power of Dua',
        speaker: 'Imam Yusuf Hassan',
        date: 'January 3, 2025',
        thumbnail: '/images/heritage/prayer-hands.jpg',
        duration: '30:05',
    },
];

export default function TeamPage() {
    const [formData, setFormData] = useState({ name: '', email: '', question: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 3000);
        setFormData({ name: '', email: '', question: '' });
    };

    const scrollSlider = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const scrollAmount = 340;
            sliderRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={templateStyles.template}>
            {/* 1. Spiritual Leadership Hero */}
            <header className={styles.heroSection}>
                <div className={styles.heroImage}>
                    <Image
                        src="/images/heritage/mosque-interior.jpg"
                        alt="Imam leading prayer"
                        fill
                        className={styles.heroPhoto}
                        priority
                    />
                    <div className={styles.heroOverlay} />
                </div>
                <div className={styles.heroContent}>
                    <div className={styles.arabicWatermark}>عِلْم</div>
                    <span className={styles.heroBadge}>Religious Team</span>
                    <h1 className={styles.heroTitle}>Guiding the Heart & Mind</h1>
                    <p className={styles.heroSubtitle}>
                        Our scholars and teachers are here to nurture your spiritual journey,
                        answer your questions, and guide you closer to Allah.
                    </p>
                </div>
            </header>

            {/* 2. Senior Imam Feature */}
            <section className={styles.imamFeature}>
                <div className={styles.imamLayout}>
                    <div className={styles.imamPhotoContainer}>
                        <div className={styles.archMask}>
                            <Image
                                src={seniorImam.image}
                                alt={seniorImam.name}
                                fill
                                className={styles.imamPhoto}
                            />
                        </div>
                        <div className={styles.imamNameplate}>
                            <h2 className={styles.imamName}>{seniorImam.name}</h2>
                            <span className={styles.imamTitle}>{seniorImam.title}</span>
                        </div>
                    </div>

                    <div className={styles.imamDetails}>
                        <div className={styles.bioSection}>
                            <p className={styles.bioText}>{seniorImam.bio}</p>

                            <div className={styles.credentials}>
                                <h3 className={styles.credentialsTitle}>
                                    <GraduationCap size={18} />
                                    Credentials & Experience
                                </h3>
                                <ul className={styles.credentialsList}>
                                    {seniorImam.credentials.map((cred, idx) => (
                                        <li key={idx}>{cred}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={styles.scheduleBlock}>
                            <h3 className={styles.scheduleTitle}>
                                <Calendar size={18} />
                                Weekly Schedule
                            </h3>
                            <div className={styles.scheduleGrid}>
                                {seniorImam.schedule.map((slot, idx) => (
                                    <div key={idx} className={styles.scheduleItem}>
                                        <span className={styles.scheduleDay}>{slot.day}</span>
                                        <span className={styles.scheduleTime}>
                                            <Clock size={14} />
                                            {slot.time}
                                        </span>
                                        <span className={styles.scheduleType}>{slot.type}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Resident Scholars Grid */}
            <section className={styles.scholarsSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Our Team</span>
                    <h2 className={styles.sectionTitle}>Resident Scholars & Instructors</h2>
                </div>
                <div className={styles.scholarsGrid}>
                    {residentScholars.map((scholar, index) => (
                        <div key={index} className={styles.scholarCard}>
                            <div className={styles.scholarAvatar}>
                                <Image
                                    src={scholar.image}
                                    alt={scholar.name}
                                    fill
                                    className={styles.scholarPhoto}
                                />
                            </div>
                            <h3 className={styles.scholarName}>{scholar.name}</h3>
                            <span className={styles.scholarRole}>{scholar.role}</span>
                            <span className={styles.scholarSpecialty}>{scholar.specialty}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Ask the Imam Form */}
            <section className={styles.askSection}>
                <div className={styles.askContainer}>
                    <div className={styles.askHeader}>
                        <BookOpen className={styles.askIcon} size={32} />
                        <h2 className={styles.askTitle}>Ask the Imam</h2>
                        <p className={styles.askSubtitle}>
                            Have a religious question? Submit your inquiry and our scholars will respond.
                        </p>
                    </div>

                    {formSubmitted ? (
                        <div className={styles.formSuccess}>
                            <Heart size={24} />
                            <p>JazakAllah Khair! Your question has been submitted.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className={styles.askForm}>
                            <div className={styles.formRow}>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className={styles.formInput}
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className={styles.formInput}
                                />
                            </div>
                            <textarea
                                placeholder="Your Question..."
                                value={formData.question}
                                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                                required
                                rows={5}
                                className={styles.formTextarea}
                            />
                            <div className={styles.formFooter}>
                                <span className={styles.privacyNote}>
                                    <Lock size={14} />
                                    Private & Confidential
                                </span>
                                <button type="submit" className={styles.submitButton}>
                                    <Send size={16} />
                                    Submit Question
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </section>

            {/* 5. Recent Khutbahs Slider */}
            <section className={styles.khutbahsSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Recent Sermons</span>
                    <h2 className={styles.sectionTitle}>Friday Khutbahs</h2>
                </div>

                <div className={styles.sliderContainer}>
                    <button
                        className={`${styles.sliderButton} ${styles.sliderPrev}`}
                        onClick={() => scrollSlider('left')}
                        aria-label="Previous"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className={styles.khutbahsSlider} ref={sliderRef}>
                        {recentKhutbahs.map((khutbah, index) => (
                            <Link
                                href="/heritage/media/khutbahs"
                                key={index}
                                className={styles.khutbahCard}
                            >
                                <div className={styles.thumbnailWrapper}>
                                    <Image
                                        src={khutbah.thumbnail}
                                        alt={khutbah.title}
                                        fill
                                        className={styles.khutbahThumbnail}
                                    />
                                    <div className={styles.playOverlay}>
                                        <Play className={styles.playIcon} size={32} />
                                    </div>
                                    <span className={styles.duration}>{khutbah.duration}</span>
                                </div>
                                <div className={styles.khutbahInfo}>
                                    <h3 className={styles.khutbahTitle}>{khutbah.title}</h3>
                                    <span className={styles.khutbahSpeaker}>{khutbah.speaker}</span>
                                    <span className={styles.khutbahDate}>{khutbah.date}</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <button
                        className={`${styles.sliderButton} ${styles.sliderNext}`}
                        onClick={() => scrollSlider('right')}
                        aria-label="Next"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className={styles.viewAllLink}>
                    <Link href="/heritage/media/khutbahs" className={styles.viewAllButton}>
                        <Users size={16} />
                        View All Khutbahs
                    </Link>
                </div>
            </section>
        </div>
    );
}
