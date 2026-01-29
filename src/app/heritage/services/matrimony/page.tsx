'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FormDropdown, FormDatePicker } from '../../_components';
import styles from './MatrimonyPage.module.scss';
import templateStyles from '../../_styles/template.module.scss';
import {
    FileText,
    Heart,
    MessageCircle,
    Scroll,
    Building2,
    Calendar,
    Users,
    UserCheck,
    CreditCard,
    AlertTriangle,
    Lock,
    Send,
    ArrowRight,
    Check,
    Sparkles
} from 'lucide-react';

// Process Steps Data
const processSteps = [
    {
        number: 1,
        title: 'The Application',
        arabic: 'الطَّلَب',
        description: 'Submit your Nikkah request online or in person at the masjid office. Include preferred dates and basic information about both parties.',
        icon: FileText,
    },
    {
        number: 2,
        title: 'The Counseling',
        arabic: 'المَشُورَة',
        description: 'Pre-marital counseling session with the Imam to discuss the rights and responsibilities of marriage in Islam. Optional but highly recommended.',
        icon: MessageCircle,
        optional: true,
    },
    {
        number: 3,
        title: 'The License',
        arabic: 'الرُّخْصَة',
        description: 'Obtain your Marriage License from the County Court. This is a legal requirement and must be presented before the ceremony.',
        icon: Scroll,
        critical: true,
    },
    {
        number: 4,
        title: 'The Ceremony',
        arabic: 'النِّكَاح',
        description: 'The sacred Nikkah ceremony performed at the Masjid, witnessed by family and community. A blessed beginning to your journey together.',
        icon: Heart,
    },
];

// Service Packages Data
const servicePackages = [
    {
        name: 'Simple Nikkah',
        subtitle: 'Intimate & Sacred',
        price: '$300',
        priceLabel: 'Honorarium',
        features: [
            'Imam services for the Nikkah ceremony',
            'Completion of marriage paperwork',
            'Private ceremony in the Imam\'s office',
            'Marriage certificate provided',
            'Up to 10 guests',
        ],
    },
    {
        name: 'Hall Celebration',
        subtitle: 'Walima Package',
        price: '$1,200',
        priceLabel: 'Full Package',
        features: [
            'Everything in Simple Nikkah',
            'Community Hall rental (4 hours)',
            'Kitchen access for catering',
            'Tables & chairs setup (up to 150 guests)',
            'Basic audio/PA system',
            'Dedicated event coordinator',
        ],
        popular: true,
    },
];

// Requirements Checklist
const requirements = [
    { text: 'Valid State Marriage License', critical: true },
    { text: 'Two Male Muslim Witnesses' },
    { text: 'The Wali (Guardian) for the bride' },
    { text: 'Government-issued IDs for all parties' },
    { text: 'Agreed-upon Mahr (Dowry)' },
    { text: 'Signed Nikkah Contract' },
];

export default function MatrimonyPage() {
    const [formData, setFormData] = useState({
        groomName: '',
        brideName: '',
        groomPhone: '',
        bridePhone: '',
        preferredDate: undefined as Date | undefined,
        package: '',
        message: '',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 5000);
        setFormData({
            groomName: '',
            brideName: '',
            groomPhone: '',
            bridePhone: '',
            preferredDate: undefined,
            package: '',
            message: '',
        });
    };

    return (
        <div className={templateStyles.template}>
            {/* 1. The Covenant Hero */}
            <section className={styles.covenantHero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/nikkah-ceremony.jpg"
                        alt="Sacred Nikkah Ceremony"
                        fill
                        className={styles.heroImage}
                        priority
                    />
                    <div className={styles.heroOverlay} />
                </div>

                <div className={styles.heroContent}>
                    {/* Arabic Calligraphy */}
                    <div className={styles.calligraphy}>
                        <span className={styles.arabicVerse}>وَخَلَقْنَاكُمْ أَزْوَاجًا</span>
                        <span className={styles.transliteration}>&ldquo;And We created you in pairs&rdquo;</span>
                        <cite className={styles.verseRef}>— Quran 78:8</cite>
                    </div>

                    <h1 className={styles.heroTitle}>The Sacred Union</h1>
                    <p className={styles.heroTagline}>
                        Completing half your Deen in the house of Allah
                    </p>
                </div>

                {/* Decorative Flourish */}
                <div className={styles.heroFlourish}>
                    <span className={styles.flourishLine} />
                    <Heart className={styles.flourishIcon} size={20} />
                    <span className={styles.flourishLine} />
                </div>
            </section>

            {/* 2. The Path to Nikkah */}
            <section className={styles.processSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>The Journey</span>
                    <h2 className={styles.sectionTitle}>Path to Nikkah</h2>
                </div>

                <div className={styles.processTimeline}>
                    {processSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={step.number}
                                className={`${styles.processStep} ${step.critical ? styles.criticalStep : ''}`}
                            >
                                {/* Timeline connector */}
                                {index < processSteps.length - 1 && (
                                    <div className={styles.timelineConnector} />
                                )}

                                <div className={styles.stepNumber}>
                                    <span>{step.number}</span>
                                </div>

                                <div className={styles.stepContent}>
                                    <div className={styles.stepHeader}>
                                        <Icon className={styles.stepIcon} size={24} />
                                        <div className={styles.stepTitles}>
                                            <h3 className={styles.stepTitle}>{step.title}</h3>
                                            <span className={styles.stepArabic}>{step.arabic}</span>
                                        </div>
                                        {step.optional && (
                                            <span className={styles.optionalBadge}>Recommended</span>
                                        )}
                                        {step.critical && (
                                            <span className={styles.criticalBadge}>
                                                <AlertTriangle size={12} /> Required
                                            </span>
                                        )}
                                    </div>
                                    <p className={styles.stepDescription}>{step.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 3. Service Packages */}
            <section className={styles.packagesSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Our Offerings</span>
                    <h2 className={styles.sectionTitle}>Service Packages</h2>
                </div>

                <div className={styles.packagesGrid}>
                    {servicePackages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`${styles.packageCard} ${pkg.popular ? styles.popularCard : ''}`}
                        >
                            {pkg.popular && (
                                <div className={styles.popularBadge}>
                                    <Sparkles size={14} />
                                    Most Popular
                                </div>
                            )}

                            <div className={styles.packageHeader}>
                                <h3 className={styles.packageName}>{pkg.name}</h3>
                                <span className={styles.packageSubtitle}>{pkg.subtitle}</span>
                            </div>

                            <div className={styles.packagePrice}>
                                <span className={styles.priceAmount}>{pkg.price}</span>
                                <span className={styles.priceLabel}>{pkg.priceLabel}</span>
                            </div>

                            <ul className={styles.packageFeatures}>
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <Check size={14} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a href="#booking" className={styles.packageButton}>
                                Select Package
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Requirements Checklist */}
            <section className={styles.requirementsSection}>
                <div className={styles.requirementsScroll}>
                    <div className={styles.scrollHeader}>
                        <Scroll size={28} />
                        <h2>Requirements for the Day</h2>
                    </div>

                    <p className={styles.scrollIntro}>
                        Please ensure all of the following are prepared before the ceremony:
                    </p>

                    <ul className={styles.requirementsList}>
                        {requirements.map((req, index) => (
                            <li key={index} className={req.critical ? styles.criticalReq : ''}>
                                {req.critical ? (
                                    <AlertTriangle className={styles.alertIcon} size={18} />
                                ) : (
                                    <Check size={18} />
                                )}
                                <span>{req.text}</span>
                                {req.critical && (
                                    <em className={styles.criticalNote}>
                                        — Without this, the Nikkah cannot proceed
                                    </em>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className={styles.scrollFooter}>
                        <Building2 size={16} />
                        <span>
                            Marriage License can be obtained from the{' '}
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                Sangamon County Clerk&apos;s Office
                            </a>
                        </span>
                    </div>
                </div>
            </section>

            {/* 5. Matrimonial Matchmaking */}
            <section className={styles.matchmakingSection}>
                <div className={styles.matchmakingCard}>
                    <div className={styles.matchmakingContent}>
                        <Lock size={24} />
                        <h3>Looking for a Spouse?</h3>
                        <p>
                            Join our private, Shariah-compliant matrimonial database.
                            All profiles are verified and kept strictly confidential.
                        </p>
                    </div>
                    <Link href="/heritage/services/matchmaking" className={styles.matchmakingButton}>
                        Submit Profile (Private)
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* 6. Booking Form */}
            <section id="booking" className={styles.bookingSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Begin Your Journey</span>
                    <h2 className={styles.sectionTitle}>Schedule Your Nikkah</h2>
                </div>

                <div className={styles.bookingContainer}>
                    {formSubmitted ? (
                        <div className={styles.formSuccess}>
                            <Heart size={40} />
                            <h3>Request Received</h3>
                            <p>
                                Jazakallah Khair! We will contact you within 2 business days
                                to confirm your Nikkah date.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className={styles.bookingForm}>
                            <div className={styles.formRow}>
                                <div className={styles.formField}>
                                    <label>Groom&apos;s Full Name</label>
                                    <input
                                        type="text"
                                        value={formData.groomName}
                                        onChange={(e) => setFormData({ ...formData, groomName: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className={styles.formField}>
                                    <label>Bride&apos;s Full Name</label>
                                    <input
                                        type="text"
                                        value={formData.brideName}
                                        onChange={(e) => setFormData({ ...formData, brideName: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formField}>
                                    <label>Groom&apos;s Phone</label>
                                    <input
                                        type="tel"
                                        value={formData.groomPhone}
                                        onChange={(e) => setFormData({ ...formData, groomPhone: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className={styles.formField}>
                                    <label>Bride&apos;s Phone</label>
                                    <input
                                        type="tel"
                                        value={formData.bridePhone}
                                        onChange={(e) => setFormData({ ...formData, bridePhone: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formField}>
                                    <FormDatePicker
                                        label="Preferred Date"
                                        date={formData.preferredDate}
                                        onSelect={(date: Date | undefined) => setFormData({ ...formData, preferredDate: date })}
                                        triggerClassName={styles.formDropdown}
                                        minDate={new Date()}
                                        required
                                    />
                                </div>
                                <div className={styles.formField}>
                                    <FormDropdown
                                        label="Package Preference"
                                        placeholder="Select a package..."
                                        options={[
                                            { value: 'simple', label: 'Simple Nikkah ($300)' },
                                            { value: 'hall', label: 'Hall Celebration ($1,200)' }
                                        ]}
                                        value={formData.package}
                                        onValueChange={(value) => setFormData({ ...formData, package: value })}
                                        triggerClassName={styles.formDropdown}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.formFieldFull}>
                                <label>Additional Notes or Requests</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={4}
                                    placeholder="Any special requests or questions..."
                                />
                            </div>

                            <button type="submit" className={styles.submitButton}>
                                <Calendar size={18} />
                                Schedule Nikkah
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
}
