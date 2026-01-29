'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    BookOpen,
    Users,
    Heart,
    Gift,
    Download,
    Mail,
    Phone,
    Clock,
    MapPin,
    ChevronRight,
    Sparkles,
    Sun,
    Send,
    ExternalLink,
    FileText,
    GraduationCap,
    Handshake,
    Coffee
} from 'lucide-react';
import styles from './NewMuslimsPage.module.scss';

// Three Pillars of Support
const supportPillars = [
    {
        id: 'education',
        icon: GraduationCap,
        title: 'Education (Ilm)',
        subtitle: 'Islam 101 Classes',
        description: 'Weekly basics of faith, prayer, and wudu taught in a supportive, question-friendly environment.',
        details: ['Every Sunday at 11:00 AM', 'Library Meeting Room', 'No prior knowledge required']
    },
    {
        id: 'mentorship',
        icon: Handshake,
        title: 'Mentorship (Muakhaat)',
        subtitle: 'The Buddy System',
        description: 'Pairing new Muslims with established community members for friendship, guidance, and spiritual support.',
        details: ['One-on-one guidance', 'Practical life support', 'Confidential relationship']
    },
    {
        id: 'social',
        icon: Coffee,
        title: 'Social (Suhba)',
        subtitle: 'Monthly Potlucks',
        description: 'A pressure-free zone to meet others, share stories, and break bread together as a family.',
        details: ['First Saturday of each month', 'Bring a dish to share', 'All are welcome']
    }
];

// Resources Library
const resources = [
    {
        id: 1,
        title: 'How to Pray',
        subtitle: 'Step-by-Step Guide',
        type: 'PDF Download',
        icon: FileText
    },
    {
        id: 2,
        title: 'Understanding the Quran',
        subtitle: 'Recommended Translations',
        type: 'Resource List',
        icon: BookOpen
    },
    {
        id: 3,
        title: 'Glossary of Islamic Terms',
        subtitle: 'Common Words & Meanings',
        type: 'Quick Reference',
        icon: Sparkles
    }
];

// Interest Options
const interestOptions = [
    'Taking my Shahada',
    'Learning to Pray',
    'Joining Islam 101 Classes',
    'Finding a Mentor',
    'Just Visiting / Learning'
];

export default function NewMuslimsPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        interest: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        setIsSubmitted(true);
    };

    return (
        <main className={styles.newMuslimsPage}>
            {/* ========================================
                1. THE "HOMECOMING" HERO
            ======================================== */}
            <section className={styles.homecomingHero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/heritage/sunlight-archway.jpg"
                        alt=""
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay} />
                </div>

                <div className={styles.heroContent}>
                    <div className={styles.calligraphy}>
                        <span className={styles.arabicWord}>بِسْمِ اللَّهِ</span>
                        <span className={styles.calligraphyMeaning}>In the Name of God</span>
                    </div>
                    <h1 className={styles.heroTitle}>Welcome Home</h1>
                    <p className={styles.heroTagline}>
                        Your journey to peace begins here.<br />
                        We are honored to walk this path with you.
                    </p>
                    <div className={styles.heroActions}>
                        <a href="#shahada" className={styles.primaryCta}>
                            <Heart size={18} />
                            Take Your Shahada
                        </a>
                        <a href="#connect" className={styles.secondaryCta}>
                            Learn More
                            <ChevronRight size={18} />
                        </a>
                    </div>
                </div>
            </section>

            {/* ========================================
                2. THE SHAHADA (The Declaration)
            ======================================== */}
            <section id="shahada" className={styles.shahadaSection}>
                <div className={styles.shahadaCertificate}>
                    <div className={styles.certificateBorder}>
                        <div className={styles.certificateInner}>
                            <div className={styles.certificateHeader}>
                                <Sun size={32} />
                                <span className={styles.certificateLabel}>The Declaration of Faith</span>
                            </div>

                            <div className={styles.shahadaArabic}>
                                أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ
                            </div>

                            <div className={styles.shahadaTransliteration}>
                                "Ash-hadu an la ilaha illa Allah, wa ash-hadu anna Muhammadan Rasul Allah"
                            </div>

                            <div className={styles.shahadaTranslation}>
                                "I bear witness that there is no deity but Allah, and I bear witness that Muhammad is His Messenger."
                            </div>

                            <div className={styles.certificateFooter}>
                                <Link href="#connect" className={styles.shahadaButton}>
                                    <Heart size={18} />
                                    I want to take my Shahada
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <p className={styles.shahadaNote}>
                    Taking the Shahada is a beautiful, life-changing moment. Our Imam will guide you through
                    this declaration of faith with care and reverence. There is no judgment here—only welcome.
                </p>
            </section>

            {/* ========================================
                3. THE "NEW MUSLIM GIFT" (Welcome Box)
            ======================================== */}
            <section className={styles.giftSection}>
                <div className={styles.giftContainer}>
                    <div className={styles.giftImageWrapper}>
                        <div className={styles.giftImageFrame}>
                            <Image
                                src="/images/heritage/new-muslim-kit.jpg"
                                alt="New Muslim Welcome Kit containing Quran, Prayer Rug, and more"
                                fill
                                className={styles.giftImage}
                            />
                        </div>
                        <div className={styles.giftBadge}>
                            <Gift size={24} />
                            <span>Free</span>
                        </div>
                    </div>

                    <div className={styles.giftContent}>
                        <span className={styles.giftLabel}>Our Gift to You</span>
                        <h2 className={styles.giftTitle}>The New Muslim Welcome Kit</h2>
                        <p className={styles.giftDescription}>
                            We believe every new Muslim deserves a warm start. Our complimentary
                            starter package is designed to help you begin your practice with confidence.
                        </p>

                        <ul className={styles.giftContents}>
                            <li>
                                <BookOpen size={18} />
                                <span>The Holy Quran (with English translation)</span>
                            </li>
                            <li>
                                <Sparkles size={18} />
                                <span>Premium Prayer Rug</span>
                            </li>
                            <li>
                                <FileText size={18} />
                                <span>Introductory Books on Islamic Practice</span>
                            </li>
                            <li>
                                <Heart size={18} />
                                <span>Tasbih (Prayer Beads)</span>
                            </li>
                        </ul>

                        <Link href="#connect" className={styles.giftCta}>
                            <Gift size={18} />
                            Request Your Gift Box
                        </Link>
                    </div>
                </div>
            </section>

            {/* ========================================
                4. THREE PILLARS OF SUPPORT
            ======================================== */}
            <section className={styles.pillarsSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Your Support System</span>
                    <h2 className={styles.sectionTitle}>Three Pillars of Care</h2>
                    <p className={styles.sectionSubtitle}>
                        You are not alone on this journey. Our community is here to support you every step of the way.
                    </p>
                </div>

                <div className={styles.pillarsGrid}>
                    {supportPillars.map((pillar) => {
                        const IconComponent = pillar.icon;
                        return (
                            <div key={pillar.id} className={styles.pillarCard}>
                                <div className={styles.pillarArch}>
                                    <div className={styles.pillarIcon}>
                                        <IconComponent size={32} />
                                    </div>
                                </div>
                                <div className={styles.pillarContent}>
                                    <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                                    <span className={styles.pillarSubtitle}>{pillar.subtitle}</span>
                                    <p className={styles.pillarDescription}>{pillar.description}</p>
                                    <ul className={styles.pillarDetails}>
                                        {pillar.details.map((detail, idx) => (
                                            <li key={idx}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className={styles.coordinatorInfo}>
                    <Users size={20} />
                    <span>
                        <strong>New Muslim Coordinators:</strong> Sr. Sarah & Br. Mike
                    </span>
                </div>
            </section>

            {/* ========================================
                5. RESOURCES LIBRARY
            ======================================== */}
            <section className={styles.resourcesSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Knowledge</span>
                    <h2 className={styles.sectionTitle}>Resources Library</h2>
                </div>

                <div className={styles.resourcesShelf}>
                    {resources.map((resource) => {
                        const IconComponent = resource.icon;
                        return (
                            <div key={resource.id} className={styles.resourceItem}>
                                <div className={styles.resourceIcon}>
                                    <IconComponent size={24} />
                                </div>
                                <div className={styles.resourceInfo}>
                                    <h4>{resource.title}</h4>
                                    <span className={styles.resourceSubtitle}>{resource.subtitle}</span>
                                </div>
                                <button className={styles.resourceAction}>
                                    {resource.type === 'PDF Download' ? (
                                        <Download size={18} />
                                    ) : (
                                        <ExternalLink size={18} />
                                    )}
                                    <span>{resource.type}</span>
                                </button>
                            </div>
                        );
                    })}
                </div>

                <div className={styles.quoteBlock}>
                    <blockquote>
                        "Allah is the Light of the heavens and the earth."
                    </blockquote>
                    <cite>— Quran 24:35</cite>
                </div>
            </section>

            {/* ========================================
                6. THE "CONNECT" FORM
            ======================================== */}
            <section id="connect" className={styles.connectSection}>
                <div className={styles.connectContainer}>
                    <div className={styles.connectHeader}>
                        <Heart size={32} />
                        <h2>We Are Here for You</h2>
                        <p>
                            Whether you're ready to embrace Islam or simply curious to learn more,
                            we would love to hear from you.
                        </p>
                    </div>

                    {!isSubmitted ? (
                        <form className={styles.connectForm} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="How should we address you?"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="interest">I am interested in...</label>
                                <select
                                    id="interest"
                                    value={formData.interest}
                                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                                    required
                                >
                                    <option value="">Please select...</option>
                                    {interestOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button type="submit" className={styles.submitButton}>
                                <Send size={18} />
                                Send Message
                            </button>

                            <p className={styles.privacyNote}>
                                <Sparkles size={14} />
                                Your journey is personal. We respect your privacy and pace.
                            </p>
                        </form>
                    ) : (
                        <div className={styles.successMessage}>
                            <Heart size={48} />
                            <h3>Thank You!</h3>
                            <p>
                                We have received your message and will be in touch soon.
                                May peace be upon you.
                            </p>
                        </div>
                    )}

                    <div className={styles.directContact}>
                        <p>Or reach us directly:</p>
                        <div className={styles.contactMethods}>
                            <a href="mailto:newmuslims@duhamasjid.org">
                                <Mail size={16} />
                                newmuslims@duhamasjid.org
                            </a>
                            <a href="tel:+15551234567">
                                <Phone size={16} />
                                (555) 123-4567
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================
                CLOSING VERSE
            ======================================== */}
            <section className={styles.closingSection}>
                <div className={styles.closingContent}>
                    <p className={styles.closingVerse}>
                        "And whoever puts their trust in Allah, He will be enough for them."
                    </p>
                    <span className={styles.verseReference}>— Quran 65:3</span>
                </div>
            </section>
        </main>
    );
}
