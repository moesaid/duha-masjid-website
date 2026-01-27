'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PoliciesPage.module.scss';
import templateStyles from '../../_styles/template.module.scss';
import {
    FileText,
    Download,
    ChevronDown,
    Calendar,
    HardDrive,
    BookOpen,
    Users,
    Building,
    Heart,
    Scale,
    ShieldCheck
} from 'lucide-react';

// Document Categories
const categories = [
    { id: 'membership', name: 'Membership', icon: Users },
    { id: 'facility', name: 'Facility Use', icon: Building },
    { id: 'conduct', name: 'Code of Conduct', icon: Scale },
    { id: 'marriage', name: 'Marriage Services', icon: Heart },
];

// Documents Data
const documents = [
    {
        id: 1,
        category: 'membership',
        title: 'Membership Application Form',
        description: 'Application form for becoming a registered member of the masjid.',
        lastUpdated: 'January 2026',
        fileSize: '1.2 MB',
        downloadUrl: '/documents/membership-application.pdf',
    },
    {
        id: 2,
        category: 'membership',
        title: 'Voting Member Guidelines',
        description: 'Requirements and responsibilities for voting membership status.',
        lastUpdated: 'December 2025',
        fileSize: '850 KB',
        downloadUrl: '/documents/voting-guidelines.pdf',
    },
    {
        id: 3,
        category: 'membership',
        title: 'Annual Dues Structure',
        description: 'Breakdown of membership dues and payment options.',
        lastUpdated: 'January 2026',
        fileSize: '420 KB',
        downloadUrl: '/documents/dues-structure.pdf',
    },
    {
        id: 4,
        category: 'facility',
        title: 'Hall Rental Agreement',
        description: 'Terms and conditions for renting the community hall.',
        lastUpdated: 'November 2025',
        fileSize: '2.1 MB',
        downloadUrl: '/documents/hall-rental.pdf',
    },
    {
        id: 5,
        category: 'facility',
        title: 'Facility Usage Rules',
        description: 'General rules for using masjid facilities and common areas.',
        lastUpdated: 'October 2025',
        fileSize: '680 KB',
        downloadUrl: '/documents/facility-rules.pdf',
    },
    {
        id: 6,
        category: 'facility',
        title: 'Parking Regulations',
        description: 'Parking guidelines and designated areas for visitors.',
        lastUpdated: 'September 2025',
        fileSize: '350 KB',
        downloadUrl: '/documents/parking.pdf',
    },
    {
        id: 7,
        category: 'conduct',
        title: 'Community Code of Conduct',
        description: 'Complete behavioral guidelines for all community members.',
        lastUpdated: 'January 2026',
        fileSize: '1.5 MB',
        downloadUrl: '/documents/code-of-conduct.pdf',
    },
    {
        id: 8,
        category: 'conduct',
        title: 'Child Protection Policy',
        description: 'Safeguarding policies for youth programs and activities.',
        lastUpdated: 'December 2025',
        fileSize: '2.3 MB',
        downloadUrl: '/documents/child-protection.pdf',
    },
    {
        id: 9,
        category: 'marriage',
        title: 'Nikah Application Package',
        description: 'Complete application forms for Islamic marriage services.',
        lastUpdated: 'January 2026',
        fileSize: '1.8 MB',
        downloadUrl: '/documents/nikah-application.pdf',
    },
    {
        id: 10,
        category: 'marriage',
        title: 'Pre-Marital Counseling Guide',
        description: 'Information about required counseling sessions before nikah.',
        lastUpdated: 'November 2025',
        fileSize: '920 KB',
        downloadUrl: '/documents/premarital-counseling.pdf',
    },
];

// Code of Conduct Key Rules
const codeOfConductRules = [
    {
        number: 1,
        title: 'Respect for Neighbors',
        description: 'Keep noise levels reasonable, especially during early morning and late night prayers. Park only in designated areas and never block neighboring driveways.',
    },
    {
        number: 2,
        title: 'Islamic Dress Code',
        description: 'All visitors are expected to dress modestly. Loose, non-transparent clothing that covers the body appropriately. Head coverings are required for sisters in prayer areas.',
    },
    {
        number: 3,
        title: 'Phone & Device Etiquette',
        description: 'Silence all devices upon entering the prayer hall. Photography and video recording require prior permission from the administration.',
    },
    {
        number: 4,
        title: 'Cleanliness & Wudu Areas',
        description: 'Keep wudu areas clean and dry. Remove excess water and dispose of paper towels properly. Report maintenance issues immediately.',
    },
    {
        number: 5,
        title: 'Children Supervision',
        description: 'Parents are responsible for supervising their children at all times. Children should not run or play in prayer areas or hallways during programs.',
    },
];

// FAQ Data
const faqs = [
    {
        question: 'How do I become a voting member?',
        answer: 'To become a voting member, you must have been a registered member in good standing for at least 12 consecutive months, attended at least 50% of general body meetings, and paid all dues on time. Submit your voting member application to the secretary for board review.',
    },
    {
        question: 'Can I rent the hall for a birthday party?',
        answer: 'The community hall can be rented for private events including birthday parties, but with conditions. Events must be Islamic-appropriate (no music with instruments, gender-segregated if mixed attendance, halal food only). Rental rates vary based on membership status.',
    },
    {
        question: 'What documents are required for Nikah?',
        answer: 'Required documents include: valid government ID for both parties, divorce decree (if applicable), death certificate of former spouse (if applicable), signed parental/guardian consent (if under 21), and completion of our pre-marital counseling program.',
    },
    {
        question: 'How far in advance should I book the hall?',
        answer: 'For large events (100+ guests), we recommend booking at least 3 months in advance. Smaller gatherings can typically be accommodated with 2-4 weeks notice, subject to availability. Eid weekends book up to 6 months in advance.',
    },
    {
        question: 'Are there reduced rates for members?',
        answer: 'Yes, registered members receive a 40% discount on hall rentals. Voting members receive a 50% discount. Low-income families may apply for additional assistance through our community fund.',
    },
];

export default function PoliciesPage() {
    const [activeCategory, setActiveCategory] = useState('membership');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const filteredDocuments = documents.filter(doc => doc.category === activeCategory);

    return (
        <div className={templateStyles.template}>
            {/* 1. Archive Hero */}
            <header className={styles.archiveHero}>
                <div className={styles.heroTexture} />
                <div className={styles.heroContent}>
                    <span className={styles.heroBadge}>
                        <BookOpen size={16} />
                        Document Archive
                    </span>
                    <h1 className={styles.heroTitle}>Operational Guidelines & Standards</h1>
                    <p className={styles.heroSubtitle}>
                        Access our governance documents, policies, and community guidelines
                    </p>
                </div>
            </header>

            {/* 2. Document Library */}
            <section className={styles.librarySection}>
                <div className={styles.libraryLayout}>
                    {/* Sticky Sidebar */}
                    <aside className={styles.sidebar}>
                        <h2 className={styles.sidebarTitle}>Categories</h2>
                        <nav className={styles.categoryNav}>
                            {categories.map((cat) => {
                                const Icon = cat.icon;
                                return (
                                    <button
                                        key={cat.id}
                                        className={`${styles.categoryButton} ${activeCategory === cat.id ? styles.categoryActive : ''}`}
                                        onClick={() => setActiveCategory(cat.id)}
                                    >
                                        <Icon size={18} />
                                        {cat.name}
                                    </button>
                                );
                            })}
                        </nav>
                    </aside>

                    {/* Document Cards */}
                    <div className={styles.documentsArea}>
                        <div className={styles.documentsHeader}>
                            <h2 className={styles.documentsTitle}>
                                {categories.find(c => c.id === activeCategory)?.name} Documents
                            </h2>
                            <span className={styles.documentsCount}>
                                {filteredDocuments.length} document{filteredDocuments.length !== 1 ? 's' : ''}
                            </span>
                        </div>

                        <div className={styles.documentsGrid}>
                            {filteredDocuments.map((doc) => (
                                <div key={doc.id} className={styles.fileCard}>
                                    <div className={styles.fileFolderTab} />
                                    <div className={styles.fileContent}>
                                        <FileText className={styles.fileIcon} size={28} />
                                        <h3 className={styles.fileTitle}>{doc.title}</h3>
                                        <p className={styles.fileDescription}>{doc.description}</p>
                                        <div className={styles.fileMeta}>
                                            <span className={styles.metaItem}>
                                                <Calendar size={14} />
                                                {doc.lastUpdated}
                                            </span>
                                            <span className={styles.metaItem}>
                                                <HardDrive size={14} />
                                                {doc.fileSize}
                                            </span>
                                        </div>
                                        <Link href={doc.downloadUrl} className={styles.downloadButton}>
                                            <Download size={16} />
                                            Download PDF
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Code of Conduct Breakout */}
            <section className={styles.conductSection}>
                <div className={styles.conductContainer}>
                    <div className={styles.conductHeader}>
                        <ShieldCheck className={styles.conductIcon} size={36} />
                        <h2 className={styles.conductTitle}>Community Code of Conduct</h2>
                        <p className={styles.conductSubtitle}>
                            Key guidelines for maintaining a respectful and harmonious environment
                        </p>
                    </div>

                    <div className={styles.rulesGrid}>
                        {codeOfConductRules.map((rule) => (
                            <div key={rule.number} className={styles.ruleCard}>
                                <span className={styles.ruleNumber}>{rule.number}</span>
                                <h3 className={styles.ruleTitle}>{rule.title}</h3>
                                <p className={styles.ruleDescription}>{rule.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.conductCta}>
                        <Link href="/documents/code-of-conduct.pdf" className={styles.fullPolicyLink}>
                            <Download size={16} />
                            Download Full Code of Conduct (PDF)
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. FAQ Section */}
            <section className={styles.faqSection}>
                <div className={styles.faqContainer}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>Common Questions</span>
                        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                    </div>

                    <div className={styles.faqList}>
                        {faqs.map((faq, index) => (
                            <div key={index} className={styles.faqItem}>
                                <button
                                    className={`${styles.faqQuestion} ${openFaq === index ? styles.faqOpen : ''}`}
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    aria-expanded={openFaq === index}
                                >
                                    <span>{faq.question}</span>
                                    <ChevronDown className={styles.faqIcon} size={20} />
                                </button>
                                <div className={`${styles.faqAnswer} ${openFaq === index ? styles.faqAnswerOpen : ''}`}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
