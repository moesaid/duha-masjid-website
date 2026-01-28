// Single Campaign Page - "The Appeal"
// Design: Inspirational, Urgent, and Commemorative
// Functional Goal: Keep the "Donate" widget accessible at all times
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Play,
    Heart,
    ChevronDown,
    ChevronUp,
    Clock,
    Target,
    Users,
    CheckCircle,
    Gift,
    BookOpen,
    Building2,
    Star,
    ArrowRight
} from 'lucide-react';
import styles from './CampaignPage.module.scss';

// ========================================
// CAMPAIGN DATA
// ========================================
const campaignData = {
    title: 'New Minaret Construction',
    subtitle: 'A beacon of light rising above our community',
    goal: 250000,
    raised: 180000,
    deadline: 'Ramadan 2026',
    donors: 342,
    daysLeft: 45,
    isZakatEligible: false,
    videoUrl: '#'
};

// Impact Tiers
const impactTiers = [
    {
        amount: 100,
        title: 'Prayer Mat Sponsor',
        description: 'Buys 1 Prayer Mat (Musalla)',
        icon: Gift
    },
    {
        amount: 250,
        title: 'Brick Builder',
        description: 'Buys 100 Bricks',
        icon: Building2
    },
    {
        amount: 1000,
        title: 'Library Patron',
        description: 'Names a Bookshelf in the Library',
        icon: BookOpen
    },
    {
        amount: 5000,
        title: 'Wall of Honor',
        description: 'Permanent Recognition on Honor Wall',
        icon: Star
    }
];

// Recent Donors
const recentDonors = [
    { name: 'Anonymous', amount: 500, message: 'May Allah accept.' },
    { name: 'The Khan Family', amount: 1000, message: '' },
    { name: 'Sister Sarah', amount: 50, message: '' },
    { name: 'Brother Ahmed', amount: 250, message: 'For my late father.' },
    { name: 'Anonymous', amount: 100, message: 'Sadaqah Jariyah' },
    { name: 'The Patel Family', amount: 2500, message: '' },
    { name: 'Sister Fatima', amount: 75, message: '' },
    { name: 'Anonymous', amount: 1000, message: 'Alhamdulillah' }
];

// Campaign Updates
const campaignUpdates = [
    {
        date: 'January 15, 2026',
        title: 'Initial Groundbreaking',
        content: 'We are thrilled to announce that site preparation has begun! The heavy machinery arrived this morning, and excavation for the foundation is underway. Your generous contributions are already turning dust into destiny.',
        htmlContent: '<p>We are thrilled to announce that <strong>site preparation has begun!</strong></p><p>The heavy machinery arrived this morning, and excavation for the foundation is underway. This marks the physical start of a journey we have all been dreaming of for years.</p><p>The team will be focusing on:</p><ul><li>Clearing the northern plot</li><li>Setting the foundational pylons</li><li>Initial utility routing</li></ul><p>Your generous contributions are already turning dust into destiny. Stay tuned for video updates next week!</p>',
        type: 'milestone'
    },
    {
        date: 'December 20, 2025',
        title: 'Final Permits Approved',
        content: 'Alhamdulillah, the city council has officially approved our revised architectural plans. This was the final hurdle before construction could commence.',
        htmlContent: '<p>Alhamdulillah, the city council has officially approved our revised architectural plans. This was the final hurdle before construction could commence.</p><p>We want to thank the community board for their support and our swift legal team for navigating the zoning requirements.</p>',
        type: 'update'
    },
    {
        date: 'October 1, 2025',
        title: 'Community Vision Realized',
        content: 'A look back at our journey.',
        htmlContent: `
            <p>We are humbled to share a <strong>visual journey</strong> of how far we have come. From the initial sketches to the breaking of ground, this has been a labor of love.</p>
            
            <div class="${styles.videoWrapper}">
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/jI0Ib9vp-kY?si=TEST_ID" 
                    title="Campaign Journey Video" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>

            <blockquote>
                "The layout of the new Heritage Center isn't just about bricks and mortar; it's about creating a spiritual sanctuary that breathes with the community."
                <br/>— <strong>Ahmed Al-Fayed, Lead Architect</strong>
            </blockquote>

            <h3>Design Highlights</h3>
            <ul>
                <li><strong>Natural Light:</strong> The skylight dome calculates solar angles to maximize natural illumination.</li>
                <li><strong>Acoustics:</strong> Sound-absorbing geometric panels inspired by Andalusian patterns.</li>
                <li><strong>Sustainability:</strong> Rainwater harvesting systems integrated into the courtyard design.</li>
            </ul>

            <figure>
                <img src="https://images.pexels.com/photos/8522576/pexels-photo-8522576.jpeg" alt="Architectural Rendering of the Courtyard" />
                <figcaption>Render: The central courtyard at sunset, designed for community gatherings.</figcaption>
            </figure>

            <p>We invite you to imagine yourself walking through these halls, finding peace in the prayer areas, and connecting with neighbors in the courtyard.</p>
        `,
        type: 'milestone'
    },
    {
        date: 'November 10, 2025',
        title: 'Goal: 50% Funding Reached',
        content: 'Thanks to our incredible community, we have hit the halfway mark of our fundraising goal! This milestone ensures we can fully fund the first phase of construction.',
        htmlContent: '<p>Thanks to our incredible community, we have hit the <strong>halfway mark</strong> of our fundraising goal! This milestone ensures we can fully fund the first phase of construction.</p>',
        type: 'milestone'
    }
];

// FAQ Data
const faqData = [
    {
        question: 'Is this Zakat eligible?',
        answer: 'No, this campaign is for construction and infrastructure, which is not Zakat-eligible. However, your contribution counts as Sadaqah Jariyah (continuous charity).',
        isZakatEligible: false
    },
    {
        question: 'When will construction begin?',
        answer: 'Construction is scheduled to begin in Spring 2026, InshaAllah. We aim to complete the minaret before Ramadan 2027.'
    },
    {
        question: 'Can I pledge now and pay later?',
        answer: 'Yes! You can make a pledge commitment and fulfill it over time. Contact our donation office to set up a payment plan.'
    },
    {
        question: 'Will my name be displayed publicly?',
        answer: 'Only if you choose to. During the donation process, you can select to remain anonymous or have your name displayed on our Wall of Honor.'
    },
    {
        question: 'Can I donate in someone\'s memory?',
        answer: 'Absolutely. You can dedicate your donation in memory of a loved one, and we will include their name in our prayers during the construction.'
    }
];

export default function CampaignPage() {
    const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
    const [customAmount, setCustomAmount] = useState('');
    const [isMonthly, setIsMonthly] = useState(false);
    const [hideName, setHideName] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [showVideo, setShowVideo] = useState(false);
    const [activeTab, setActiveTab] = useState<'info' | 'updates'>('info');

    const percentage = Math.round((campaignData.raised / campaignData.goal) * 100);

    const handleSeeAllUpdates = () => {
        setActiveTab('updates');
        window.scrollTo({ top: 500, behavior: 'smooth' }); // Scroll past hero
    };

    const formatCurrency = (amount: number) => {
        if (amount >= 1000000) {
            return `$${(amount / 1000000).toFixed(1)}M`;
        }
        if (amount >= 1000) {
            return `$${(amount / 1000).toFixed(0)}K`;
        }
        return `$${amount}`;
    };

    const presetAmounts = [50, 100, 500, 1000];

    const handleAmountSelect = (amount: number) => {
        setSelectedAmount(amount);
        setCustomAmount('');
    };

    const handleCustomAmount = (value: string) => {
        setCustomAmount(value);
        setSelectedAmount(null);
    };

    const getFinalAmount = () => {
        if (customAmount) return parseInt(customAmount) || 0;
        return selectedAmount || 0;
    };

    return (
        <div className={styles.campaignPage}>
            {/* 1. THE VISION HERO */}
            <section className={styles.heroSection}>
                {/* 1. Background Image */}
                <div className={styles.heroImageWrapper}>
                    <Image
                        src="https://images.unsplash.com/photo-1564769625905-50e93615e769?w=1920&q=80"
                        alt="Minaret Vision"
                        fill
                        priority
                        sizes="100vw"
                    />
                </div>

                {/* 2. Color Gradient Overlay */}
                <div className={styles.heroOverlay} />

                {/* 3. Islamic Pattern Overlay */}
                <div className={styles.heroPatternOverlay} />

                <div className={styles.heroContent}>
                    <span className={styles.heroBadge}>
                        <Clock size={14} /> {campaignData.daysLeft} Days Left
                    </span>
                    <h1 className={styles.heroTitle}>{campaignData.title}</h1>
                    <p className={styles.heroSubtitle}>{campaignData.subtitle}</p>
                    <button
                        className={styles.videoButton}
                        onClick={() => setShowVideo(true)}
                    >
                        <div className={styles.playIcon}>
                            <Play size={24} fill="currentColor" />
                        </div>
                        Watch Our Vision
                    </button>
                </div>
            </section>

            {/* TAB NAVIGATION */}
            <nav className={styles.tabNavigation}>
                <div className={styles.tabContainer}>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'info' ? styles.active : ''}`}
                        onClick={() => setActiveTab('info')}
                    >
                        Campaign Story
                    </button>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'updates' ? styles.active : ''}`}
                        onClick={() => setActiveTab('updates')}
                    >
                        Updates <span style={{ fontSize: '0.8em', opacity: 0.7 }}>({campaignUpdates.length})</span>
                    </button>
                </div>
            </nav>

            {/* MAIN CONTENT AREA */}
            <div className={styles.mainContent}>
                {/* LEFT: NARRATIVE COLUMN */}
                <div className={styles.narrativeColumn}>
                    {activeTab === 'info' ? (
                        <>
                            {/* 3. THE NARRATIVE (The 'Why') */}
                            <section className={styles.narrativeSection}>
                                <h2 className={styles.narrativeTitle}>Why This Matters</h2>

                                <div className={styles.narrativeBlock}>
                                    <h3 className={styles.narrativeSubtitle}>The Challenge</h3>
                                    <p className={styles.narrativeText}>
                                        Our beloved masjid has been the heart of our community for over two decades.
                                        Yet, we lack a defining architectural feature that announces our presence
                                        and calls the faithful to prayer. The absence of a minaret means many in
                                        our neighborhood don't even know we exist.
                                    </p>
                                </div>

                                <div className={styles.narrativeBlock}>
                                    <h3 className={styles.narrativeSubtitle}>The Vision</h3>
                                    <p className={styles.narrativeText}>
                                        The new minaret will rise 65 feet tall, featuring traditional Islamic
                                        geometric patterns illuminated with LED lighting. It will serve as a
                                        beacon of light and hope, visible from miles away, and will include
                                        a state-of-the-art speaker system for the Adhan.
                                    </p>
                                </div>

                                <div className={styles.narrativeBlock}>
                                    <h3 className={styles.narrativeSubtitle}>The Eternal Reward</h3>
                                    <div className={styles.hadithCard}>
                                        <p className={styles.hadithArabic}>
                                            مَنْ بَنَى مَسْجِدًا لِلَّهِ بَنَى اللَّهُ لَهُ بَيْتًا فِي الْجَنَّةِ
                                        </p>
                                        <p className={styles.hadithTranslation}>
                                            "Whoever builds a mosque for Allah, Allah will build for him a house in Paradise."
                                        </p>
                                        <span className={styles.hadithSource}>— Sahih al-Bukhari</span>
                                    </div>
                                </div>
                            </section>

                            {/* 4. IMPACT TIERS */}
                            <section className={styles.impactSection}>
                                <h2 className={styles.sectionTitle}>Make Your Gift Tangible</h2>
                                <p className={styles.sectionSubtitle}>See exactly what your donation provides</p>

                                <div className={styles.impactGrid}>
                                    {impactTiers.map((tier, idx) => (
                                        <div
                                            key={idx}
                                            className={styles.impactCard}
                                            onClick={() => handleAmountSelect(tier.amount)}
                                        >
                                            <div className={styles.impactIcon}>
                                                <tier.icon size={24} />
                                            </div>
                                            <div className={styles.impactAmount}>
                                                ${tier.amount.toLocaleString()}
                                            </div>
                                            <h3 className={styles.impactTitle}>{tier.title}</h3>
                                            <p className={styles.impactDesc}>{tier.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 5. CAMPAIGN UPDATES (PREVIEW) */}
                            <section className={styles.updatesSection}>
                                <h2 className={styles.sectionTitle}>Latest Updates</h2>
                                <p className={styles.sectionSubtitle}>Recent progress from the field</p>

                                <div className={styles.timeline}>
                                    {campaignUpdates.slice(0, 2).map((update, idx) => (
                                        <div key={idx} className={styles.timelineItem}>
                                            <div className={styles.timelineMarker}></div>
                                            <div className={styles.timelineContent}>
                                                <span className={styles.updateDate}>{update.date}</span>
                                                <h3 className={styles.updateTitle}>{update.title}</h3>
                                                <p className={styles.updateText}>{update.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.seeAllUpdates}>
                                    <button className={styles.seeAllBtn} onClick={handleSeeAllUpdates}>
                                        Read All Updates ({campaignUpdates.length})
                                    </button>
                                </div>
                            </section>

                            {/* 6. RECENT DONORS */}
                            <section className={styles.donorsSection}>
                                <h2 className={styles.sectionTitle}>Recent Supporters</h2>
                                <p className={styles.sectionSubtitle}>Join {campaignData.donors}+ donors who have contributed</p>

                                <div className={styles.donorsList}>
                                    {recentDonors.map((donor, idx) => (
                                        <div key={idx} className={styles.donorItem}>
                                            <div className={styles.donorAvatar}>
                                                {donor.name === 'Anonymous' ? '?' : donor.name.charAt(0)}
                                            </div>
                                            <div className={styles.donorInfo}>
                                                <span className={styles.donorName}>{donor.name}</span>
                                                {donor.message && (
                                                    <span className={styles.donorMessage}>"{donor.message}"</span>
                                                )}
                                            </div>
                                            <span className={styles.donorAmount}>
                                                ${donor.amount.toLocaleString()}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 7. FAQ ACCORDION */}
                            <section className={styles.faqSection}>
                                <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>

                                <div className={styles.faqList}>
                                    {faqData.map((faq, idx) => (
                                        <div
                                            key={idx}
                                            className={`${styles.faqItem} ${openFaq === idx ? styles.open : ''}`}
                                        >
                                            <button
                                                className={styles.faqQuestion}
                                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                            >
                                                <span>{faq.question}</span>
                                                <div className={styles.faqBadges}>
                                                    {faq.isZakatEligible !== undefined && (
                                                        <span className={`${styles.zakatBadge} ${faq.isZakatEligible ? styles.eligible : styles.notEligible}`}>
                                                            {faq.isZakatEligible ? 'Zakat Eligible' : 'Not Zakat Eligible'}
                                                        </span>
                                                    )}
                                                    {openFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                                </div>
                                            </button>
                                            {openFaq === idx && (
                                                <div className={styles.faqAnswer}>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </>
                    ) : (
                        // UPDATES TAB CONTENT
                        <section className={styles.updatesSection}>
                            <h2 className={styles.narrativeTitle}>Campaign Updates</h2>
                            <p className={styles.infoMessage}>
                                Follow our journey as we build this vision together. We post regular updates on construction progress, permits, and community milestones.
                            </p>

                            <div className={styles.timeline}>
                                {campaignUpdates.map((update, idx) => (
                                    <div key={idx} className={styles.timelineItem}>
                                        <div className={styles.timelineMarker}></div>
                                        <div className={styles.timelineContent}>
                                            <span className={styles.updateDate}>{update.date}</span>
                                            <h3 className={styles.updateTitle}>{update.title}</h3>
                                            {/* RICH TEXT RENDERING */}
                                            <div
                                                className={styles.richTextContent}
                                                dangerouslySetInnerHTML={{ __html: update.htmlContent || `<p>${update.content}</p>` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* RIGHT: STICKY DONATION WIDGET */}
                <aside className={styles.donationSidebar}>
                    <div className={styles.donationWidget}>
                        <div className={styles.widgetHeader}>
                            <div className={styles.progressCircle}>
                                <svg viewBox="0 0 100 100">
                                    <circle
                                        className={styles.progressBg}
                                        cx="50"
                                        cy="50"
                                        r="45"
                                    />
                                    <circle
                                        className={styles.progressFill}
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        strokeDasharray={`${percentage * 2.83} 283`}
                                    />
                                </svg>
                                <div className={styles.progressText}>
                                    <span className={styles.progressPercent}>{percentage}%</span>
                                    <span className={styles.progressLabel}>Funded</span>
                                </div>
                            </div>

                            <div className={styles.fundingStats}>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>{formatCurrency(campaignData.raised)}</span>
                                    <span className={styles.statLabel}>raised of {formatCurrency(campaignData.goal)}</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>{campaignData.donors}</span>
                                    <span className={styles.statLabel}>donors</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statValue}>{campaignData.daysLeft}</span>
                                    <span className={styles.statLabel}>days left</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.widgetBody}>
                            {/* Amount Selector */}
                            <div className={styles.amountSection}>
                                <label className={styles.fieldLabel}>Select Amount</label>
                                <div className={styles.amountGrid}>
                                    {presetAmounts.map((amount) => (
                                        <button
                                            key={amount}
                                            className={`${styles.amountBtn} ${selectedAmount === amount ? styles.selected : ''}`}
                                            onClick={() => handleAmountSelect(amount)}
                                        >
                                            ${amount}
                                        </button>
                                    ))}
                                </div>
                                <div className={styles.customAmount}>
                                    <span className={styles.currencySymbol}>$</span>
                                    <input
                                        type="number"
                                        placeholder="Custom Amount"
                                        value={customAmount}
                                        onChange={(e) => handleCustomAmount(e.target.value)}
                                        className={styles.customInput}
                                    />
                                </div>
                            </div>

                            {/* Frequency Toggle */}
                            <div className={styles.frequencySection}>
                                <label className={styles.fieldLabel}>Donation Frequency</label>
                                <div className={styles.frequencyToggle}>
                                    <button
                                        className={`${styles.frequencyBtn} ${!isMonthly ? styles.active : ''}`}
                                        onClick={() => setIsMonthly(false)}
                                    >
                                        One-Time
                                    </button>
                                    <button
                                        className={`${styles.frequencyBtn} ${isMonthly ? styles.active : ''}`}
                                        onClick={() => setIsMonthly(true)}
                                    >
                                        Monthly
                                    </button>
                                </div>
                                {isMonthly && (
                                    <p className={styles.monthlyNote}>
                                        ✨ Monthly donors are recognized as "Sustainers"
                                    </p>
                                )}
                            </div>

                            {/* Privacy Option */}
                            <div className={styles.privacySection}>
                                <label className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={hideName}
                                        onChange={(e) => setHideName(e.target.checked)}
                                    />
                                    <span className={styles.checkmark}></span>
                                    Hide my name from donor list
                                </label>
                            </div>

                            {/* Donate Button */}
                            <button className={styles.donateBtn}>
                                <Heart size={20} />
                                Donate {getFinalAmount() > 0 ? `$${getFinalAmount().toLocaleString()}` : 'Now'}
                                {isMonthly && getFinalAmount() > 0 && '/mo'}
                            </button>

                            <p className={styles.secureNote}>
                                <CheckCircle size={14} /> Secure, encrypted donation
                            </p>
                        </div>

                        <div className={styles.widgetFooter}>
                            <Link href="/heritage/donate" className={styles.backLink}>
                                ← View All Campaigns
                            </Link>
                        </div>
                    </div>
                </aside>
            </div>

            {/* MOBILE FLOATING DONATION BAR */}
            <div className={styles.mobileBar}>
                <div className={styles.mobileProgress}>
                    <span className={styles.mobileRaised}>{formatCurrency(campaignData.raised)}</span>
                    <span className={styles.mobileGoal}>of {formatCurrency(campaignData.goal)}</span>
                </div>
                <button className={styles.mobileDonateBtn}>
                    <Heart size={18} />
                    Donate Now
                </button>
            </div>

            {/* VIDEO OVERLAY */}
            {showVideo && (
                <div className={styles.videoOverlay} onClick={() => setShowVideo(false)}>
                    <div className={styles.videoContainer} onClick={(e) => e.stopPropagation()}>
                        <button
                            className={styles.closeVideo}
                            onClick={() => setShowVideo(false)}
                        >
                            ×
                        </button>
                        <iframe
                            className={styles.videoIframe}
                            src="https://www.youtube.com/embed/w_LMa8-ZUwM?autoplay=1&rel=0"
                            title="Campaign Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
