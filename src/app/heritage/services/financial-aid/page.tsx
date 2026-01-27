'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ZakatPage.module.scss';
import templateStyles from '../../_styles/template.module.scss';
import {
    HandCoins,
    HandHeart,
    Coins,
    Wheat,
    Heart,
    Calculator,
    FileDown,
    Shield,
    Lock,
    CheckCircle,
    ChevronDown,
    ChevronUp,
    ArrowRight,
    Users,
    FileText,
    MessageSquare
} from 'lucide-react';

// Zakat Types for Tabs
const zakatTypes = [
    {
        id: 'maal',
        label: 'Zakat al-Maal',
        subtitle: '2.5% on Wealth',
        description: 'The obligatory annual charity on accumulated wealth above the Nisab threshold. Due on savings, gold, investments, and business assets held for one lunar year.',
        icon: Coins,
    },
    {
        id: 'fitr',
        label: 'Zakat al-Fitr',
        subtitle: 'Ramadan Food Charity',
        description: 'A fixed amount given before Eid al-Fitr prayer to ensure the poor can celebrate Eid. Approximately $15 per person in the household.',
        icon: Wheat,
    },
    {
        id: 'sadaqah',
        label: 'Sadaqah',
        subtitle: 'Voluntary Charity',
        description: 'Any voluntary act of giving, from financial donations to a kind word. Unlike Zakat, there is no minimum amount or specific calculation.',
        icon: Heart,
    },
];

// Transparency Data
const distributionData = [
    { category: 'Local Families in Need', percentage: 45 },
    { category: 'Emergency Assistance', percentage: 25 },
    { category: 'Medical Bills Support', percentage: 15 },
    { category: 'New Muslim Support', percentage: 10 },
    { category: 'Student Aid', percentage: 5 },
];

// Eligibility Criteria
const eligibilityCriteria = [
    'Must be a resident of the local community',
    'Demonstrate genuine financial hardship',
    'Provide required documentation (ID, bank statements)',
    'Meet the Islamic criteria for Zakat recipients',
    'Complete an interview with the Zakat Committee',
];

// Application Steps
const applicationSteps = [
    { number: 1, title: 'Download Form', description: 'Get the confidential application form' },
    { number: 2, title: 'Gather Documents', description: 'ID, proof of income, bank statements' },
    { number: 3, title: 'Submit Application', description: 'Email or drop off sealed envelope' },
    { number: 4, title: 'Committee Review', description: 'Confidential meeting within 2 weeks' },
];

// FAQ Data
const faqItems = [
    {
        question: 'Can I pay my Zakat in advance?',
        answer: 'Yes, you may pay Zakat before your wealth has been held for a full lunar year, especially if there is an urgent need in the community. This is the opinion of the Hanafi and Shafi\'i schools.',
    },
    {
        question: 'Does the masjid help with rent and utility bills?',
        answer: 'Yes, emergency assistance for rent, utilities, and medical bills is available through our Zakat fund for eligible recipients.',
    },
    {
        question: 'Is my Zakat tax-deductible?',
        answer: 'Yes, all donations to Al-Noor Masjid are tax-deductible under section 501(c)(3). You will receive a receipt for your records.',
    },
    {
        question: 'How is Nisab calculated?',
        answer: 'Nisab is the minimum threshold of wealth upon which Zakat becomes obligatory. It is equivalent to 85 grams of gold or 595 grams of silver. We use the silver standard (approximately $500 USD).',
    },
    {
        question: 'Can I specify where my Zakat goes?',
        answer: 'Zakat must be distributed among the eight categories mentioned in the Quran. However, you may express a preference (e.g., local families vs. students), and we will honor it when possible.',
    },
];

export default function ZakatPage() {
    const [activeTab, setActiveTab] = useState('maal');
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    // Zakat Calculator State
    const [goldValue, setGoldValue] = useState('');
    const [savings, setSavings] = useState('');
    const [investments, setInvestments] = useState('');
    const [businessAssets, setBusinessAssets] = useState('');

    const calculateZakat = () => {
        const total =
            (parseFloat(goldValue) || 0) +
            (parseFloat(savings) || 0) +
            (parseFloat(investments) || 0) +
            (parseFloat(businessAssets) || 0);
        return (total * 0.025).toFixed(2);
    };

    const totalAssets = () => {
        return (
            (parseFloat(goldValue) || 0) +
            (parseFloat(savings) || 0) +
            (parseFloat(investments) || 0) +
            (parseFloat(businessAssets) || 0)
        ).toFixed(2);
    };

    const toggleFaq = (index: number) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    return (
        <div className={templateStyles.template}>
            {/* 1. The Purification Hero */}
            <section className={styles.purificationHero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/heritage/geometric-gold.jpg"
                        alt="Islamic geometric pattern"
                        fill
                        className={styles.heroImage}
                        priority
                    />
                    <div className={styles.heroOverlay} />
                </div>

                <div className={styles.heroContent}>
                    {/* Arabic Calligraphy */}
                    <div className={styles.calligraphy}>
                        <span className={styles.arabicVerse}>
                            خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ
                        </span>
                        <span className={styles.verseReference}>— Quran 9:103</span>
                    </div>

                    <h1 className={styles.heroTitle}>Zakat & Financial Aid</h1>
                    <p className={styles.heroTagline}>
                        Purifying wealth, uplifting the community
                    </p>
                </div>
            </section>

            {/* 2. Dual-Path Navigation */}
            <section className={styles.dualPath}>
                <div className={styles.pathGrid}>
                    {/* Give Card */}
                    <div className={styles.pathCard + ' ' + styles.giveCard}>
                        <div className={styles.pathIcon}>
                            <HandCoins size={40} />
                        </div>
                        <h2>I Want to Give</h2>
                        <p>Fulfill your obligation and purify your wealth through Zakat or Sadaqah</p>
                        <Link href="#donor-section" className={styles.pathButton + ' ' + styles.giveButton}>
                            Pay Zakat / Sadaqah
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                    {/* Receive Card */}
                    <div className={styles.pathCard + ' ' + styles.receiveCard}>
                        <div className={styles.pathIcon}>
                            <HandHeart size={40} />
                        </div>
                        <h2>I Need Help</h2>
                        <p>Access confidential financial assistance through our community support program</p>
                        <Link href="#applicant-section" className={styles.pathButton + ' ' + styles.receiveButton}>
                            Apply for Assistance
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 3. Donor Section */}
            <section id="donor-section" className={styles.donorSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>The Third Pillar</span>
                    <h2 className={styles.sectionTitle}>Give With Intention</h2>
                </div>

                {/* Tabs */}
                <div className={styles.tabContainer}>
                    <div className={styles.tabList}>
                        {zakatTypes.map((type) => (
                            <button
                                key={type.id}
                                className={`${styles.tab} ${activeTab === type.id ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab(type.id)}
                            >
                                <type.icon size={18} />
                                <span>{type.label}</span>
                            </button>
                        ))}
                    </div>

                    <div className={styles.tabContent}>
                        {zakatTypes.map((type) => (
                            <div
                                key={type.id}
                                className={`${styles.tabPanel} ${activeTab === type.id ? styles.activePanel : ''}`}
                            >
                                <div className={styles.tabInfo}>
                                    <h3>{type.label}</h3>
                                    <span className={styles.tabSubtitle}>{type.subtitle}</span>
                                    <p>{type.description}</p>
                                    <Link href="/heritage/join/donate?fund=zakat" className={styles.donateLink}>
                                        Donate {type.label}
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Zakat Calculator */}
                <div className={styles.calculatorSection}>
                    <div className={styles.calculatorCard}>
                        <div className={styles.calculatorHeader}>
                            <Calculator size={24} />
                            <h3>Zakat Calculator</h3>
                            <span>Calculate your 2.5% Zakat al-Maal</span>
                        </div>

                        <div className={styles.calculatorBody}>
                            <div className={styles.inputGroup}>
                                <label>Gold & Silver Value ($)</label>
                                <input
                                    type="number"
                                    value={goldValue}
                                    onChange={(e) => setGoldValue(e.target.value)}
                                    placeholder="0.00"
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Cash & Savings ($)</label>
                                <input
                                    type="number"
                                    value={savings}
                                    onChange={(e) => setSavings(e.target.value)}
                                    placeholder="0.00"
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Investments & Stocks ($)</label>
                                <input
                                    type="number"
                                    value={investments}
                                    onChange={(e) => setInvestments(e.target.value)}
                                    placeholder="0.00"
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Business & Trade Assets ($)</label>
                                <input
                                    type="number"
                                    value={businessAssets}
                                    onChange={(e) => setBusinessAssets(e.target.value)}
                                    placeholder="0.00"
                                />
                            </div>
                        </div>

                        <div className={styles.calculatorResult}>
                            <div className={styles.resultRow}>
                                <span>Total Zakatable Assets:</span>
                                <strong>${totalAssets()}</strong>
                            </div>
                            <div className={styles.resultRow + ' ' + styles.zakatDue}>
                                <span>Zakat Due (2.5%):</span>
                                <strong>${calculateZakat()}</strong>
                            </div>
                        </div>

                        <Link href="/heritage/join/donate?fund=zakat" className={styles.payZakatButton}>
                            Pay Your Zakat Now
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                    {/* Transparency Box */}
                    <div className={styles.transparencyBox}>
                        <div className={styles.transparencyHeader}>
                            <Shield size={20} />
                            <h4>100% Zakat Guarantee</h4>
                        </div>
                        <p className={styles.transparencyNote}>
                            100% of your Zakat goes directly to eligible recipients.
                            Administrative costs are covered separately by our operational fund.
                        </p>
                        <div className={styles.distributionList}>
                            {distributionData.map((item, index) => (
                                <div key={index} className={styles.distributionItem}>
                                    <span className={styles.distributionLabel}>{item.category}</span>
                                    <div className={styles.distributionBar}>
                                        <div
                                            className={styles.distributionFill}
                                            style={{ width: `${item.percentage}%` }}
                                        />
                                    </div>
                                    <span className={styles.distributionPercent}>{item.percentage}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Applicant Section */}
            <section id="applicant-section" className={styles.applicantSection}>
                <div className={styles.applicantHeader}>
                    <Lock size={28} />
                    <h2>Community Assistance Program</h2>
                    <p>Confidential support for those facing financial hardship</p>
                </div>

                <div className={styles.dignityNote}>
                    <span className={styles.dignityIcon}>
                        <Shield size={18} />
                    </span>
                    <p>
                        <strong>Your privacy is our Amanah (trust).</strong> All applications are handled
                        with complete confidentiality. Only the Zakat Committee has access to your information.
                    </p>
                </div>

                <div className={styles.applicantGrid}>
                    {/* Eligibility */}
                    <div className={styles.eligibilityCard}>
                        <h3>
                            <Users size={20} />
                            Eligibility Criteria
                        </h3>
                        <ul className={styles.eligibilityList}>
                            {eligibilityCriteria.map((item, index) => (
                                <li key={index}>
                                    <CheckCircle size={16} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Application Process */}
                    <div className={styles.processCard}>
                        <h3>
                            <FileText size={20} />
                            Application Process
                        </h3>
                        <div className={styles.processList}>
                            {applicationSteps.map((step) => (
                                <div key={step.number} className={styles.processStep}>
                                    <span className={styles.processNumber}>{step.number}</span>
                                    <div>
                                        <strong>{step.title}</strong>
                                        <span>{step.description}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a
                            href="/documents/zakat-application-form.pdf"
                            className={styles.downloadButton}
                        >
                            <FileDown size={18} />
                            Download Application Form
                        </a>
                    </div>
                </div>

                <div className={styles.contactNote}>
                    <MessageSquare size={18} />
                    <p>
                        Questions? Contact the Zakat Committee confidentially at{' '}
                        <a href="mailto:zakat@alnoormasjid.org">zakat@alnoormasjid.org</a>
                    </p>
                </div>
            </section>

            {/* 5. Policy & FAQs */}
            <section className={styles.policySection}>
                <div className={styles.policyGrid}>
                    {/* Policy */}
                    <div className={styles.policyCard}>
                        <h3>Zakat Distribution Policy</h3>
                        <div className={styles.policyContent}>
                            <p>
                                Al-Noor Masjid follows the guidance of local scholars and the
                                classical schools of Islamic jurisprudence in the collection and
                                distribution of Zakat funds.
                            </p>
                            <p>
                                We ensure that all Zakat is distributed to the eight categories
                                of recipients as specified in Surah At-Tawbah (9:60):
                            </p>
                            <ul>
                                <li>The Poor (Al-Fuqara)</li>
                                <li>The Needy (Al-Masakin)</li>
                                <li>Zakat Administrators (Al-Amileen)</li>
                                <li>Those whose hearts are to be reconciled (Al-Mu&apos;allafat)</li>
                                <li>Freeing captives (Ar-Riqab)</li>
                                <li>Those in debt (Al-Gharimeen)</li>
                                <li>In the cause of Allah (Fi Sabilillah)</li>
                                <li>The wayfarer (Ibn as-Sabil)</li>
                            </ul>
                            <p className={styles.policyNote}>
                                Our Zakat Committee meets monthly to review applications and
                                distribute funds according to priority and need.
                            </p>
                        </div>
                    </div>

                    {/* FAQs */}
                    <div className={styles.faqCard}>
                        <h3>Frequently Asked Questions</h3>
                        <div className={styles.faqList}>
                            {faqItems.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`${styles.faqItem} ${expandedFaq === index ? styles.expanded : ''}`}
                                >
                                    <button
                                        className={styles.faqQuestion}
                                        onClick={() => toggleFaq(index)}
                                    >
                                        <span>{faq.question}</span>
                                        {expandedFaq === index ? (
                                            <ChevronUp size={18} />
                                        ) : (
                                            <ChevronDown size={18} />
                                        )}
                                    </button>
                                    {expandedFaq === index && (
                                        <div className={styles.faqAnswer}>
                                            <p>{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
