'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Heart,
    Users,
    Sparkles,
    BookOpen,
    Shield,
    Calendar,
    Clock,
    Phone,
    Mail,
    ChevronRight,
    AlertTriangle,
    CheckCircle,
    User,
    Award,
    GraduationCap,
    HeartHandshake
} from 'lucide-react';
import styles from './CounselingPage.module.scss';

// Types of Guidance Data
const guidanceServices = [
    {
        id: 'marital',
        icon: Users,
        title: 'Marital & Family',
        description: 'Mediation for couples, parenting advice, and conflict resolution guided by Islamic principles.',
        details: ['Pre-marital counseling', 'Conflict mediation', 'Parenting guidance', 'Family reconciliation']
    },
    {
        id: 'spiritual',
        icon: Sparkles,
        title: 'Spiritual Crisis',
        description: 'For those struggling with doubts, low Iman, or questions about faith and purpose.',
        details: ['Faith strengthening', 'Doubt resolution', 'Religious questions', 'Spiritual renewal']
    },
    {
        id: 'youth',
        icon: GraduationCap,
        title: 'Youth Mentorship',
        description: 'Private sessions for teens facing peer pressure, identity issues, or life decisions.',
        details: ['Identity & belonging', 'Peer pressure', 'Academic stress', 'Career guidance']
    },
    {
        id: 'grief',
        icon: HeartHandshake,
        title: 'Grief & Loss',
        description: 'Spiritual support and wisdom for those mourning a loved one or facing difficult trials.',
        details: ['Bereavement support', 'Processing loss', 'Finding meaning', 'Spiritual healing']
    }
];

// Counselors Data
const counselors = [
    {
        id: 1,
        name: 'Imam Abdullah Hassan',
        title: 'Head Imam & Senior Counselor',
        credentials: ['PhD Islamic Studies', 'Certified Chaplain', 'AMHFA Certified'],
        specialties: ['Marital Counseling', 'Spiritual Guidance'],
        image: '/images/counselors/imam-hassan.jpg',
        available: true
    },
    {
        id: 2,
        name: 'Ustadha Fatima Rahman',
        title: 'Family Counselor',
        credentials: ['MA Islamic Psychology', 'Licensed Marriage & Family Therapist'],
        specialties: ['Family Dynamics', 'Youth Counseling'],
        image: '/images/counselors/ustadha-fatima.jpg',
        available: true
    },
    {
        id: 3,
        name: 'Imam Yusuf Ibrahim',
        title: 'Youth Mentor',
        credentials: ['BSc Psychology', 'Islamic Studies Certificate', 'Youth Mentorship Training'],
        specialties: ['Youth Issues', 'Identity & Faith'],
        image: '/images/counselors/imam-yusuf.jpg',
        available: true
    }
];

// Available time slots
const timeSlots = [
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'
];

export default function CounselingPage() {
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [selectedCounselor, setSelectedCounselor] = useState<number | null>(null);
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [bookingStep, setBookingStep] = useState(1);

    // Get next 7 available dates (Mon-Thu only)
    const getAvailableDates = () => {
        const dates: { date: Date; label: string }[] = [];
        const today = new Date();
        let count = 0;
        let daysChecked = 0;

        while (count < 7 && daysChecked < 21) {
            const checkDate = new Date(today);
            checkDate.setDate(today.getDate() + daysChecked + 1);
            const dayOfWeek = checkDate.getDay();

            // Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4
            if (dayOfWeek >= 1 && dayOfWeek <= 4) {
                dates.push({
                    date: checkDate,
                    label: checkDate.toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric'
                    })
                });
                count++;
            }
            daysChecked++;
        }
        return dates;
    };

    const availableDates = getAvailableDates();

    const handleNextStep = () => {
        if (bookingStep < 4) {
            setBookingStep(bookingStep + 1);
        }
    };

    const handlePrevStep = () => {
        if (bookingStep > 1) {
            setBookingStep(bookingStep - 1);
        }
    };

    const canProceed = () => {
        switch (bookingStep) {
            case 1: return selectedService !== null;
            case 2: return selectedCounselor !== null;
            case 3: return selectedDate !== '' && selectedTime !== '';
            default: return false;
        }
    };

    return (
        <main className={styles.counselingPage}>
            {/* ========================================
                1. THE TRANQUILITY HERO
            ======================================== */}
            <section className={styles.tranquilityHero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/islamic-wood-pattern.jpg"
                        alt=""
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay} />
                </div>

                <div className={styles.heroContent}>
                    <div className={styles.calligraphy}>
                        <span className={styles.arabicVerse}>
                            أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
                        </span>
                        <span className={styles.verseReference}>— Quran 13:28</span>
                    </div>
                    <h1 className={styles.heroTitle}>Spiritual Guidance & Counseling</h1>
                    <p className={styles.heroTagline}>
                        Finding clarity and peace through the light of the Quran and Sunnah
                    </p>
                </div>
            </section>

            {/* ========================================
                2. OUR PHILOSOPHY
            ======================================== */}
            <section className={styles.philosophySection}>
                <div className={styles.philosophyContainer}>
                    <div className={styles.prefaceHeader}>
                        <BookOpen size={32} />
                        <span>Our Approach</span>
                    </div>

                    <div className={styles.philosophyContent}>
                        <p className={styles.prefaceText}>
                            We combine traditional Islamic wisdom with compassionate listening.
                            Our goal is to connect you with the resources—spiritual and practical—needed
                            to navigate life's tests. Whether you seek clarity in a difficult decision,
                            healing from heartache, or renewal of faith, we are here to walk beside you
                            on the path toward tranquility.
                        </p>

                        <div className={styles.amanahBox}>
                            <Shield className={styles.amanahIcon} size={28} />
                            <div className={styles.amanahContent}>
                                <h3>Your Privacy is Our Sacred Trust (Amanah)</h3>
                                <p>
                                    We adhere to strict confidentiality guidelines. What you share
                                    with our counselors remains completely private, unless there is
                                    a risk of harm to yourself or others. This is our covenant with you.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.sessionInfo}>
                        <div className={styles.infoItem}>
                            <Clock size={18} />
                            <span>Mon–Thu, 4 PM – 8 PM</span>
                        </div>
                        <div className={styles.infoItem}>
                            <Heart size={18} />
                            <span>Free for community members</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================
                3. TYPES OF GUIDANCE
            ======================================== */}
            <section className={styles.guidanceSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Nasiha</span>
                    <h2 className={styles.sectionTitle}>Types of Guidance</h2>
                </div>

                <div className={styles.guidanceGrid}>
                    {guidanceServices.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <div key={service.id} className={styles.serviceCard}>
                                <div className={styles.cardSpine} />
                                <div className={styles.cardContent}>
                                    <div className={styles.cardHeader}>
                                        <IconComponent size={24} />
                                        <h3>{service.title}</h3>
                                    </div>
                                    <p className={styles.cardDescription}>
                                        {service.description}
                                    </p>
                                    <ul className={styles.cardDetails}>
                                        {service.details.map((detail, idx) => (
                                            <li key={idx}>
                                                <CheckCircle size={14} />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ========================================
                4. THE COUNSELORS
            ======================================== */}
            <section className={styles.counselorsSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Meet the Team</span>
                    <h2 className={styles.sectionTitle}>Our Counselors</h2>
                </div>

                <div className={styles.counselorsRow}>
                    {counselors.map((counselor) => (
                        <div key={counselor.id} className={styles.counselorCard}>
                            <div className={styles.counselorAvatar}>
                                <User size={48} />
                            </div>
                            <div className={styles.counselorInfo}>
                                <h3>{counselor.name}</h3>
                                <span className={styles.counselorTitle}>{counselor.title}</span>

                                <div className={styles.credentials}>
                                    {counselor.credentials.map((cred, idx) => (
                                        <span key={idx} className={styles.credential}>
                                            <Award size={12} />
                                            {cred}
                                        </span>
                                    ))}
                                </div>

                                <div className={styles.specialties}>
                                    {counselor.specialties.map((spec, idx) => (
                                        <span key={idx} className={styles.specialty}>
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========================================
                5. BOOK A SESSION WIDGET
            ======================================== */}
            <section className={styles.bookingSection}>
                <div className={styles.bookingContainer}>
                    <div className={styles.bookingHeader}>
                        <Calendar size={28} />
                        <h2>Book a Session</h2>
                        <p>Schedule a private consultation with one of our counselors</p>
                    </div>

                    {/* Progress Steps */}
                    <div className={styles.bookingProgress}>
                        {['Service', 'Counselor', 'Time', 'Confirm'].map((step, idx) => (
                            <div
                                key={step}
                                className={`${styles.progressStep} ${bookingStep > idx + 1 ? styles.completed : ''} ${bookingStep === idx + 1 ? styles.active : ''}`}
                            >
                                <span className={styles.stepNumber}>{idx + 1}</span>
                                <span className={styles.stepLabel}>{step}</span>
                            </div>
                        ))}
                    </div>

                    {/* Step 1: Select Service */}
                    {bookingStep === 1 && (
                        <div className={styles.bookingStep}>
                            <h3>What type of guidance do you need?</h3>
                            <div className={styles.serviceOptions}>
                                {guidanceServices.map((service) => {
                                    const IconComponent = service.icon;
                                    return (
                                        <button
                                            key={service.id}
                                            className={`${styles.serviceOption} ${selectedService === service.id ? styles.selected : ''}`}
                                            onClick={() => setSelectedService(service.id)}
                                        >
                                            <IconComponent size={20} />
                                            <span>{service.title}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Step 2: Select Counselor */}
                    {bookingStep === 2 && (
                        <div className={styles.bookingStep}>
                            <h3>Choose your counselor</h3>
                            <div className={styles.counselorOptions}>
                                {counselors.map((counselor) => (
                                    <button
                                        key={counselor.id}
                                        className={`${styles.counselorOption} ${selectedCounselor === counselor.id ? styles.selected : ''}`}
                                        onClick={() => setSelectedCounselor(counselor.id)}
                                    >
                                        <div className={styles.optionAvatar}>
                                            <User size={24} />
                                        </div>
                                        <div className={styles.optionInfo}>
                                            <strong>{counselor.name}</strong>
                                            <span>{counselor.title}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 3: Select Date & Time */}
                    {bookingStep === 3 && (
                        <div className={styles.bookingStep}>
                            <h3>Select your preferred date and time</h3>

                            <div className={styles.dateTimeGrid}>
                                <div className={styles.dateSelection}>
                                    <h4>Available Dates</h4>
                                    <div className={styles.dateOptions}>
                                        {availableDates.map((d) => (
                                            <button
                                                key={d.label}
                                                className={`${styles.dateOption} ${selectedDate === d.label ? styles.selected : ''}`}
                                                onClick={() => setSelectedDate(d.label)}
                                            >
                                                {d.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.timeSelection}>
                                    <h4>Available Times</h4>
                                    <div className={styles.timeOptions}>
                                        {timeSlots.map((time) => (
                                            <button
                                                key={time}
                                                className={`${styles.timeOption} ${selectedTime === time ? styles.selected : ''}`}
                                                onClick={() => setSelectedTime(time)}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Confirmation */}
                    {bookingStep === 4 && (
                        <div className={styles.bookingStep}>
                            <div className={styles.confirmationBox}>
                                <CheckCircle size={48} className={styles.confirmIcon} />
                                <h3>Confirm Your Appointment</h3>

                                <div className={styles.confirmationDetails}>
                                    <div className={styles.confirmRow}>
                                        <span>Service:</span>
                                        <strong>{guidanceServices.find(s => s.id === selectedService)?.title}</strong>
                                    </div>
                                    <div className={styles.confirmRow}>
                                        <span>Counselor:</span>
                                        <strong>{counselors.find(c => c.id === selectedCounselor)?.name}</strong>
                                    </div>
                                    <div className={styles.confirmRow}>
                                        <span>Date & Time:</span>
                                        <strong>{selectedDate} at {selectedTime}</strong>
                                    </div>
                                </div>

                                <button className={styles.confirmButton}>
                                    <CheckCircle size={18} />
                                    Confirm Booking
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className={styles.bookingNav}>
                        {bookingStep > 1 && (
                            <button className={styles.backButton} onClick={handlePrevStep}>
                                Back
                            </button>
                        )}
                        {bookingStep < 4 && (
                            <button
                                className={styles.nextButton}
                                onClick={handleNextStep}
                                disabled={!canProceed()}
                            >
                                Continue
                                <ChevronRight size={18} />
                            </button>
                        )}
                    </div>

                    <div className={styles.alternativeContact}>
                        <p>Prefer to email?</p>
                        <a href="mailto:counseling@duhamasjid.org">
                            <Mail size={16} />
                            counseling@duhamasjid.org
                        </a>
                    </div>
                </div>
            </section>

            {/* ========================================
                6. IMPORTANT DISCLAIMER (SAFETY)
            ======================================== */}
            <section className={styles.disclaimerSection}>
                <div className={styles.disclaimerContainer}>
                    <div className={styles.disclaimerHeader}>
                        <AlertTriangle size={24} />
                        <h3>Important Notice</h3>
                    </div>

                    <p className={styles.disclaimerText}>
                        Our Imams and counselors provide <strong>religious and spiritual guidance</strong>.
                        We are not licensed clinical therapists, psychiatrists, or medical professionals.
                        For medical emergencies or severe mental health crises, please contact
                        professional emergency services immediately.
                    </p>

                    <div className={styles.crisisResources}>
                        <div className={styles.crisisItem}>
                            <Phone size={20} />
                            <div>
                                <strong>988 Suicide & Crisis Lifeline</strong>
                                <span>Call or text 988 (24/7)</span>
                            </div>
                        </div>
                        <div className={styles.crisisItem}>
                            <Phone size={20} />
                            <div>
                                <strong>Emergency Services</strong>
                                <span>Call 911</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
