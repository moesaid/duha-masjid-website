'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
    Ear,
    Heart,
    MessageCircle,
    ArrowRight,
    Clock,
    Calendar,
    Users,
    Award,
    BookOpen,
    FileText,
    ClipboardCheck,
    UserCheck,
    GraduationCap,
    Star,
    Quote,
    Link2,
    ChevronRight,
    Shield
} from 'lucide-react';
import styles from './QuranAcademyPage.module.scss';

// Methodology Steps
const methodologySteps = [
    {
        id: 'talqin',
        icon: Ear,
        arabic: 'تَلْقِين',
        title: 'Talqin',
        subtitle: 'Instruction',
        description: 'Correct pronunciation and reading directly from the teacher. The foundation of all Quranic learning.'
    },
    {
        id: 'hifz',
        icon: Heart,
        arabic: 'حِفْظ',
        title: 'Hifz',
        subtitle: 'Memorization',
        description: 'Daily new lessons (Sabaq) with careful repetition until the verses are committed to heart.'
    },
    {
        id: 'murajaah',
        icon: MessageCircle,
        arabic: 'مُرَاجَعَة',
        title: "Muraja'ah",
        subtitle: 'Revision',
        description: 'Rigorous review of past lessons (Manzil) to ensure permanent retention and fluency.'
    }
];

// Program Tiers
const programTiers = [
    {
        id: 'fulltime',
        tier: 'Tier I',
        title: 'Full-Time Hifz',
        arabicTitle: 'برنامج الحفظ الكامل',
        schedule: 'Mon–Fri, 8:00 AM – 2:00 PM',
        duration: '3–4 Years to Complete',
        target: 'Complete memorization of the Holy Quran',
        features: [
            'Intensive daily Sabaq (new lesson)',
            'Structured Manzil (revision) system',
            'Weekly progress assessments',
            'Annual Juz completion milestones'
        ],
        requirement: 'Homeschooling coordination required',
        tuition: '$450/month'
    },
    {
        id: 'afterschool',
        tier: 'Tier II',
        title: 'After-School Maktab',
        arabicTitle: 'مكتب ما بعد المدرسة',
        schedule: 'Mon–Thu, 5:00 PM – 7:00 PM',
        duration: 'Ongoing Enrollment',
        target: "Nazira (Reading) + Juz 'Amma Memorization",
        features: [
            'Tajweed correction and fluency',
            'Last 2 Juz memorization',
            'Essential Surahs for Salah',
            'Flexible pace for students'
        ],
        requirement: 'Ages 6–16, must know Arabic alphabet',
        tuition: '$200/month'
    }
];

// Recent Graduates
const recentGraduates = [
    { name: 'Ahmad Hassan', year: '2024', age: 14 },
    { name: 'Fatima Ali', year: '2024', age: 12 },
    { name: 'Yusuf Rahman', year: '2024', age: 15 },
    { name: 'Maryam Khalil', year: '2023', age: 13 },
    { name: 'Ibrahim Noor', year: '2023', age: 16 },
    { name: 'Aisha Siddiqui', year: '2023', age: 11 }
];

// Admission Steps
const admissionSteps = [
    { step: 1, title: 'Submit Application', description: 'Complete the online application form' },
    { step: 2, title: 'Recitation Assessment', description: 'Nazira (reading) test with instructor' },
    { step: 3, title: 'Parent Interview', description: 'Meeting with the Academy Director' },
    { step: 4, title: 'Enrollment', description: 'Acceptance and registration' }
];

export default function QuranAcademyPage() {
    return (
        <main className={styles.quranAcademyPage}>
            {/* ========================================
                1. THE "GUARDIANS" HERO
            ======================================== */}
            <section className={styles.guardiansHero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="/images/heritage/quran-closeup.jpg"
                        alt=""
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay} />
                </div>

                <div className={styles.heroContent}>
                    <div className={styles.verseCalligraphy}>
                        <span className={styles.arabicVerse}>
                            إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ
                        </span>
                        <span className={styles.verseTranslation}>
                            "Indeed, We sent down the Quran and surely We will guard it"
                        </span>
                        <span className={styles.verseReference}>— Quran 15:9</span>
                    </div>

                    <h1 className={styles.heroTitle}>The Hifz Academy</h1>
                    <p className={styles.heroTagline}>
                        Preserving the Divine Word in the hearts of the next generation
                    </p>

                    <div className={styles.heroActions}>
                        <Link href="#admissions" className={styles.primaryCta}>
                            <Shield size={18} />
                            Apply for Admission
                            <span className={styles.ctaNote}>(Interview Required)</span>
                        </Link>
                        <Link href="#programs" className={styles.secondaryCta}>
                            View Programs
                            <ChevronRight size={18} />
                        </Link>
                    </div>

                    <div className={styles.hadithBadge}>
                        <Quote size={14} />
                        <span>"The best of you are those who learn the Quran and teach it."</span>
                        <cite>— Sahih Bukhari</cite>
                    </div>
                </div>
            </section>

            {/* ========================================
                2. THE METHODOLOGY
            ======================================== */}
            <section className={styles.methodologySection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Our Approach</span>
                    <h2 className={styles.sectionTitle}>The Methodology</h2>
                    <p className={styles.sectionSubtitle}>
                        A time-tested system perfected over centuries of Islamic scholarship
                    </p>
                </div>

                <div className={styles.methodologyFlow}>
                    {methodologySteps.map((step, idx) => {
                        const IconComponent = step.icon;
                        return (
                            <div key={step.id} className={styles.methodStep}>
                                <div className={styles.stepTablet}>
                                    <div className={styles.tabletTop}>
                                        <span className={styles.stepArabic}>{step.arabic}</span>
                                    </div>
                                    <div className={styles.tabletBody}>
                                        <div className={styles.stepIcon}>
                                            <IconComponent size={28} />
                                        </div>
                                        <h3>{step.title}</h3>
                                        <span className={styles.stepSubtitle}>{step.subtitle}</span>
                                        <p>{step.description}</p>
                                    </div>
                                </div>
                                {idx < methodologySteps.length - 1 && (
                                    <div className={styles.flowArrow}>
                                        <ArrowRight size={24} />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ========================================
                3. PROGRAM TIERS
            ======================================== */}
            <section id="programs" className={styles.programsSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Programs</span>
                    <h2 className={styles.sectionTitle}>Choose Your Path</h2>
                </div>

                <div className={styles.tiersContainer}>
                    {programTiers.map((tier) => (
                        <div key={tier.id} className={styles.tierCard}>
                            <div className={styles.tierHeader}>
                                <span className={styles.tierLabel}>{tier.tier}</span>
                                <h3>{tier.title}</h3>
                                <span className={styles.tierArabic}>{tier.arabicTitle}</span>
                            </div>

                            <div className={styles.tierSchedule}>
                                <div className={styles.scheduleItem}>
                                    <Clock size={16} />
                                    <span>{tier.schedule}</span>
                                </div>
                                <div className={styles.scheduleItem}>
                                    <Calendar size={16} />
                                    <span>{tier.duration}</span>
                                </div>
                            </div>

                            <div className={styles.tierTarget}>
                                <BookOpen size={18} />
                                <span>{tier.target}</span>
                            </div>

                            <ul className={styles.tierFeatures}>
                                {tier.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <Star size={12} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className={styles.tierRequirement}>
                                <Shield size={14} />
                                <span>{tier.requirement}</span>
                            </div>

                            <div className={styles.tierTuition}>
                                <span className={styles.tuitionAmount}>{tier.tuition}</span>
                                <span className={styles.tuitionNote}>Sibling discounts available</span>
                            </div>

                            <Link href="#admissions" className={styles.tierCta}>
                                Apply Now
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    ))}
                </div>

                <div className={styles.prerequisiteNote}>
                    <FileText size={18} />
                    <p>
                        <strong>Prerequisite:</strong> Student must be able to read the Quran fluently (Nazira)
                        before joining the Full-Time Hifz program.
                    </p>
                </div>
            </section>

            {/* ========================================
                4. THE TEACHERS (Sanad/Chain)
            ======================================== */}
            <section className={styles.teachersSection}>
                <div className={styles.sanadScroll}>
                    <div className={styles.scrollHeader}>
                        <div className={styles.chainIcon}>
                            <Link2 size={32} />
                        </div>
                        <h2>Qualified Instructors</h2>
                        <span className={styles.scrollSubtitle}>An Unbroken Chain of Transmission</span>
                    </div>

                    <div className={styles.scrollContent}>
                        <p className={styles.sanadText}>
                            Our teachers hold authentic <strong>Ijazah</strong> (License) with a <strong>Sanad</strong> (Chain
                            of Transmission) connecting back to the Prophet Muhammad <span className={styles.pbuh}>ﷺ</span>.
                        </p>

                        <div className={styles.chainVisualization}>
                            <div className={styles.chainLink}>
                                <span>Prophet Muhammad ﷺ</span>
                            </div>
                            <div className={styles.chainConnector} />
                            <div className={styles.chainLink}>
                                <span>Companions (Sahaba)</span>
                            </div>
                            <div className={styles.chainConnector} />
                            <div className={styles.chainLink}>
                                <span>Tabi'een</span>
                            </div>
                            <div className={styles.chainConnector} />
                            <div className={styles.chainDots}>
                                <span>•••</span>
                            </div>
                            <div className={styles.chainConnector} />
                            <div className={styles.chainLink + ' ' + styles.chainCurrent}>
                                <span>Our Instructors</span>
                            </div>
                        </div>

                        <p className={styles.chainNote}>
                            This unbroken chain ensures the authenticity and correctness of the Quranic recitation
                            passed down through generations.
                        </p>
                    </div>

                    <div className={styles.scrollFooter}>
                        <Award size={20} />
                        <span>All instructors certified in Qiraat and Tajweed</span>
                    </div>
                </div>
            </section>

            {/* ========================================
                5. STUDENT ACHIEVEMENTS (Honor Roll)
            ======================================== */}
            <section className={styles.achievementsSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Alhamdulillah</span>
                    <h2 className={styles.sectionTitle}>Wall of Honor</h2>
                </div>

                <div className={styles.statsRow}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>50+</span>
                        <span className={styles.statLabel}>Huffaz Graduated</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>10,000+</span>
                        <span className={styles.statLabel}>Juz Recited This Year</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>15</span>
                        <span className={styles.statLabel}>Years of Excellence</span>
                    </div>
                </div>

                <div className={styles.graduatesSection}>
                    <h3>Recent Graduates</h3>
                    <div className={styles.graduatesGrid}>
                        {recentGraduates.map((grad, idx) => (
                            <div key={idx} className={styles.graduateCard}>
                                <GraduationCap size={20} />
                                <span className={styles.gradName}>{grad.name}</span>
                                <span className={styles.gradDetails}>
                                    Class of {grad.year} • Age {grad.age}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.testimonialBlock}>
                    <Quote size={28} className={styles.quoteIcon} />
                    <blockquote>
                        "The discipline I learned in the Hifz program shaped not just my recitation,
                        but my entire character. The patience, consistency, and dedication have
                        transformed every aspect of my life."
                    </blockquote>
                    <cite>
                        <strong>Ahmad Hassan</strong>
                        <span>Hafiz, Class of 2024</span>
                    </cite>
                </div>
            </section>

            {/* ========================================
                6. ADMISSIONS & TUITION
            ======================================== */}
            <section id="admissions" className={styles.admissionsSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Join Us</span>
                    <h2 className={styles.sectionTitle}>Admissions Process</h2>
                </div>

                <div className={styles.admissionsLedger}>
                    <div className={styles.processFlow}>
                        {admissionSteps.map((step, idx) => (
                            <div key={step.step} className={styles.processStep}>
                                <div className={styles.stepNumber}>{step.step}</div>
                                <div className={styles.stepContent}>
                                    <h4>{step.title}</h4>
                                    <p>{step.description}</p>
                                </div>
                                {idx < admissionSteps.length - 1 && (
                                    <div className={styles.stepArrow}>
                                        <ChevronRight size={16} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className={styles.tuitionSummary}>
                        <h3>Tuition & Fees</h3>
                        <div className={styles.feeRow}>
                            <span>Full-Time Hifz Program</span>
                            <span className={styles.feeAmount}>$450/month</span>
                        </div>
                        <div className={styles.feeRow}>
                            <span>After-School Maktab</span>
                            <span className={styles.feeAmount}>$200/month</span>
                        </div>
                        <div className={styles.feeRow + ' ' + styles.discountRow}>
                            <span>Sibling Discount</span>
                            <span className={styles.feeAmount}>15% off</span>
                        </div>
                        <p className={styles.scholarshipNote}>
                            <Award size={14} />
                            Need-based scholarships available. Contact us for details.
                        </p>
                    </div>

                    <div className={styles.admissionActions}>
                        <a href="/files/hifz-application.pdf" className={styles.downloadBtn}>
                            <FileText size={18} />
                            Download Application
                        </a>
                        <Link href="/heritage/contact" className={styles.contactBtn}>
                            <Users size={18} />
                            Schedule Assessment
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
