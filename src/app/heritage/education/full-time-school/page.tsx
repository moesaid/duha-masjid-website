'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Download,
    GraduationCap,
    BookOpen,
    Brain,
    Star,
    Shield,
    Award,
    Users,
    FileText,
    ClipboardCheck,
    MessageSquare,
    CheckCircle,
    ChevronRight,
    ChevronLeft,
    Building,
    Microscope,
    Library as LibraryIcon,
    X,
    User,
    Mail,
    Phone
} from 'lucide-react';
import styles from './FullTimeSchoolPage.module.scss';

// ========================================
// DATA
// ========================================
const academicLevels = [
    {
        id: 'preschool',
        title: 'Preschool',
        subtitle: 'Foundations',
        grades: 'Ages 3-5',
        color: '#4CAF50',
        icon: Star,
        description: 'Play-based learning in a nurturing Islamic environment. Flexible 2-day, 3-day, and 5-day programs available.',
        highlights: ['Quran Introduction', 'Arabic Letters', 'Social Development', 'Motor Skills']
    },
    {
        id: 'elementary',
        title: 'Elementary',
        subtitle: 'Core Growth',
        grades: 'Grades K-5',
        color: '#2196F3',
        icon: BookOpen,
        description: 'Building strong foundations in literacy, mathematics, and Quranic studies with state-aligned curriculum.',
        highlights: ['Core Academics', 'Quran & Tajweed', 'Arabic Language', 'Islamic Studies']
    },
    {
        id: 'secondary',
        title: 'Middle & High',
        subtitle: 'College Prep',
        grades: 'Grades 6-12',
        color: '#1A3A5C',
        icon: GraduationCap,
        description: 'Rigorous college-preparatory curriculum with dual-enrollment options through Mishkah University partnership.',
        highlights: ['AP/Honors Courses', 'PSEO Options', 'SAT Prep', 'College Counseling']
    },
    {
        id: 'hifz',
        title: 'Hifz Track',
        subtitle: 'Specialized Memorization',
        grades: 'All Ages',
        color: '#B8860B',
        icon: Brain,
        description: 'Integrated academic and Hifz schedule allowing students to complete memorization while maintaining academic excellence.',
        highlights: ['Full-Time Hifz', 'Academic Balance', 'Certified Huffaz', 'Ijazah Program']
    }
];

const tuitionData = {
    preschool: {
        title: 'Preschool Programs',
        grades: 'Ages 3-5',
        tiers: [
            { name: '2-Day Program', first: 3495, second: 3145, third: 2795 },
            { name: '3-Day Program', first: 4995, second: 4495, third: 3995 },
            { name: '5-Day Program', first: 6995, second: 6295, third: 5595 }
        ],
        installment: true
    },
    elementary: {
        title: 'Elementary School',
        grades: 'Grades K-5',
        tiers: [
            { name: 'Standard Tuition', first: 7995, second: 7195, third: 6395 }
        ],
        installment: true
    },
    secondary: {
        title: 'Middle & High School',
        grades: 'Grades 6-12',
        tiers: [
            { name: 'Middle School (6-8)', first: 8495, second: 7645, third: 6795 },
            { name: 'High School (9-12)', first: 8995, second: 8095, third: 7195 }
        ],
        installment: true
    },
    hifz: {
        title: 'Hifz Program',
        grades: 'All Ages',
        tiers: [
            { name: 'Hifz Track', first: 9495, second: 8545, third: 7595 }
        ],
        installment: true
    }
};

const additionalFees = [
    { name: 'Registration Fee', amount: 75, note: 'Annual, Non-Refundable', nonRefundable: true },
    { name: 'Technology Fee', amount: 255, note: 'Annual', nonRefundable: false },
    { name: 'Book Fee', amount: 228, note: 'Annual', nonRefundable: false },
    { name: 'New Family Entry', amount: 495, note: 'One-Time', nonRefundable: true },
    { name: 'Re-Enrollment Fee', amount: 300, note: 'Returning Students', nonRefundable: false },
    { name: 'High School Entry', amount: 2000, note: 'One-Time (9-12)', nonRefundable: true }
];

const admissionSteps = [
    {
        step: 1,
        title: 'Application',
        description: 'Submit online application with $150 non-refundable fee',
        icon: FileText
    },
    {
        step: 2,
        title: 'Assessment',
        description: 'Entrance exam for Math & Reading proficiency',
        icon: ClipboardCheck
    },
    {
        step: 3,
        title: 'Interview',
        description: 'Parent & Student interview with Principal',
        icon: MessageSquare
    },
    {
        step: 4,
        title: 'Enrollment',
        description: 'Pay Entry Fee ($300-$2,000) and complete registration',
        icon: CheckCircle
    }
];

const faculty = [
    { name: 'Dr. Ahmad Hassan', subject: 'Principal / Islamic Studies', degree: 'Ph.D., Islamic Education', image: '/images/heritage/placeholder-teacher.jpg' },
    { name: 'Sarah Williams, M.Ed.', subject: 'Vice Principal / English', degree: 'M.Ed., Curriculum & Instruction', image: '/images/heritage/placeholder-teacher.jpg' },
    { name: 'Ustadh Yusuf Ali', subject: 'Quran & Arabic', degree: 'Ijazah, Al-Azhar University', image: '/images/heritage/placeholder-teacher.jpg' },
    { name: 'Dr. Emily Chen', subject: 'STEM Director', degree: 'Ph.D., Chemistry', image: '/images/heritage/placeholder-teacher.jpg' },
    { name: 'Michael Roberts, M.S.', subject: 'Mathematics', degree: 'M.S., Applied Mathematics', image: '/images/heritage/placeholder-teacher.jpg' }
];

// ========================================
// COMPONENT
// ========================================
export default function FullTimeSchoolPage() {
    const [activeTab, setActiveTab] = useState<string>('elementary');
    const [facultyIndex, setFacultyIndex] = useState(0);
    const [isApplicationOpen, setIsApplicationOpen] = useState(false);

    const currentTuition = tuitionData[activeTab as keyof typeof tuitionData];

    const nextFaculty = () => {
        setFacultyIndex((prev) => (prev + 1) % faculty.length);
    };

    const prevFaculty = () => {
        setFacultyIndex((prev) => (prev - 1 + faculty.length) % faculty.length);
    };

    const openApplication = () => setIsApplicationOpen(true);
    const closeApplication = () => setIsApplicationOpen(false);

    return (
        <main className={styles.academyPage}>
            {/* ========================================
                1. IVY LEAGUE HERO
            ======================================== */}
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <div className={styles.schoolCrest}>
                        <Shield size={48} />
                        <span>Est. 2008</span>
                    </div>
                    <h1 className={styles.heroTitle}>Excellence in Faith & Academics</h1>
                    <p className={styles.heroSubtitle}>
                        A fully accredited K-12 institution nurturing the leaders of tomorrow
                    </p>
                    <Link href="#" className={styles.heroCta}>
                        <Download size={18} />
                        Download 2026 Prospectus
                    </Link>
                </div>
            </section>

            {/* ========================================
                2. ACADEMIC LEVELS (The Journey)
            ======================================== */}
            <section className={styles.levelsSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>The Academic Journey</span>
                    <h2 className={styles.sectionTitle}>Programs of Study</h2>
                </div>

                <div className={styles.levelsGrid}>
                    {academicLevels.map((level) => {
                        const IconComponent = level.icon;
                        return (
                            <div
                                key={level.id}
                                className={styles.levelCard}
                                style={{ '--accent-color': level.color } as React.CSSProperties}
                            >
                                <div className={styles.levelHeader}>
                                    <IconComponent size={28} />
                                    <span className={styles.levelGrades}>{level.grades}</span>
                                </div>
                                <h3 className={styles.levelTitle}>{level.title}</h3>
                                <span className={styles.levelSubtitle}>{level.subtitle}</span>
                                <p className={styles.levelDescription}>{level.description}</p>
                                <ul className={styles.levelHighlights}>
                                    {level.highlights.map((item) => (
                                        <li key={item}>
                                            <ChevronRight size={14} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ========================================
                3. TUITION & FEES MATRIX (The Ledger)
            ======================================== */}
            <section className={styles.tuitionSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Transparent Pricing</span>
                    <h2 className={styles.sectionTitle}>Tuition & Fees</h2>
                    <p className={styles.sectionSubtitle}>
                        Sibling discounts available — 10% off 2nd child, 20% off 3rd+ child
                    </p>
                </div>

                <div className={styles.tuitionTabs}>
                    {Object.entries(tuitionData).map(([key, data]) => (
                        <button
                            key={key}
                            className={`${styles.tuitionTab} ${activeTab === key ? styles.active : ''}`}
                            onClick={() => setActiveTab(key)}
                        >
                            {data.title.split(' ')[0]}
                        </button>
                    ))}
                </div>

                <div className={styles.tuitionCard}>
                    <div className={styles.tuitionHeader}>
                        <h3>{currentTuition.title}</h3>
                        <span>{currentTuition.grades}</span>
                    </div>

                    <table className={styles.tuitionTable}>
                        <thead>
                            <tr>
                                <th>Program</th>
                                <th>1st Child</th>
                                <th>2nd Child</th>
                                <th>3rd+ Child</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentTuition.tiers.map((tier, index) => (
                                <tr key={index}>
                                    <td>{tier.name}</td>
                                    <td className={styles.price}>${tier.first.toLocaleString()}</td>
                                    <td className={styles.price}>${tier.second.toLocaleString()}</td>
                                    <td className={styles.price}>${tier.third.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {currentTuition.installment && (
                        <p className={styles.installmentNote}>
                            * 10-month installment plans available. Contact admissions for details.
                        </p>
                    )}
                </div>

                <div className={styles.feesGrid}>
                    <h4 className={styles.feesTitle}>Additional Fees</h4>
                    <div className={styles.feeCards}>
                        {additionalFees.map((fee) => (
                            <div key={fee.name} className={styles.feeCard}>
                                <span className={styles.feeName}>{fee.name}</span>
                                <span className={styles.feeAmount}>${fee.amount}</span>
                                <span className={`${styles.feeNote} ${fee.nonRefundable ? styles.nonRefundable : ''}`}>
                                    {fee.note}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================
                4. VALUE PROPOSITION (Why Us?)
            ======================================== */}
            <section className={styles.valueSection}>
                <div className={styles.valueImage}>
                    <div className={styles.valueImagePlaceholder}>
                        <Building size={64} />
                    </div>
                </div>
                <div className={styles.valueContent}>
                    <span className={styles.sectionLabel}>Why Choose Us</span>
                    <h2 className={styles.sectionTitle}>Dual Excellence</h2>
                    <p className={styles.valueTagline}>
                        &ldquo;We don&apos;t compromise. Our students excel in SATs and Tajweed.&rdquo;
                    </p>

                    <div className={styles.valuePoints}>
                        <div className={styles.valuePoint}>
                            <Award size={24} />
                            <div>
                                <h4>Accredited Excellence</h4>
                                <p>State-certified and Islamic studies accredited. Recognized by Minnesota Department of Education.</p>
                            </div>
                        </div>
                        <div className={styles.valuePoint}>
                            <Microscope size={24} />
                            <div>
                                <h4>Modern Facilities</h4>
                                <p>STEM lab, full gymnasium, library, and dedicated prayer spaces for focused learning.</p>
                            </div>
                        </div>
                        <div className={styles.valuePoint}>
                            <LibraryIcon size={24} />
                            <div>
                                <h4>Mishkah Partnership</h4>
                                <p>Dual-enrollment options for high school students through our university partnership.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================
                5. ADMISSIONS PROCESS (The Roadmap)
            ======================================== */}
            <section className={styles.admissionsSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Getting Started</span>
                    <h2 className={styles.sectionTitle}>Admissions Process</h2>
                </div>

                <div className={styles.admissionsTimeline}>
                    {admissionSteps.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                            <div key={step.step} className={styles.timelineStep}>
                                <div className={styles.stepCircle}>
                                    <IconComponent size={20} />
                                </div>
                                {index < admissionSteps.length - 1 && (
                                    <div className={styles.stepConnector} />
                                )}
                                <div className={styles.stepContent}>
                                    <span className={styles.stepNumber}>Step {step.step}</span>
                                    <h4>{step.title}</h4>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className={styles.admissionsCta}>
                    <button onClick={openApplication} className={styles.primaryBtn}>
                        Begin Application
                        <ChevronRight size={18} />
                    </button>
                </div>
            </section>

            {/* ========================================
                6. FACULTY SPOTLIGHT
            ======================================== */}
            <section className={styles.facultySection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Our Educators</span>
                    <h2 className={styles.sectionTitle}>Faculty Spotlight</h2>
                </div>

                <div className={styles.facultyCarousel}>
                    <button className={styles.carouselBtn} onClick={prevFaculty}>
                        <ChevronLeft size={24} />
                    </button>

                    <div className={styles.facultyCard}>
                        <div className={styles.facultyPhoto}>
                            <Users size={48} />
                        </div>
                        <div className={styles.facultyInfo}>
                            <h4>{faculty[facultyIndex].name}</h4>
                            <span className={styles.facultySubject}>{faculty[facultyIndex].subject}</span>
                            <span className={styles.facultyDegree}>{faculty[facultyIndex].degree}</span>
                        </div>
                    </div>

                    <button className={styles.carouselBtn} onClick={nextFaculty}>
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className={styles.facultyDots}>
                    {faculty.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === facultyIndex ? styles.active : ''}`}
                            onClick={() => setFacultyIndex(index)}
                        />
                    ))}
                </div>
            </section>

            {/* ========================================
                APPLICATION MODAL
            ======================================== */}
            {isApplicationOpen && (
                <div className={styles.modalOverlay} onClick={closeApplication}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.modalClose} onClick={closeApplication}>
                            <X size={24} />
                        </button>

                        <div className={styles.modalHeader}>
                            <div className={styles.modalCrest}>
                                <Shield size={32} />
                            </div>
                            <div>
                                <h2>School Application</h2>
                                <p>2026-2027 Academic Year</p>
                            </div>
                        </div>

                        <form className={styles.applicationForm} onSubmit={(e) => e.preventDefault()}>
                            <div className={styles.formSection}>
                                <h3>Student Information</h3>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label>First Name *</label>
                                        <div className={styles.inputWrapper}>
                                            <User size={16} />
                                            <input type="text" placeholder="Student's first name" required />
                                        </div>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Last Name *</label>
                                        <div className={styles.inputWrapper}>
                                            <User size={16} />
                                            <input type="text" placeholder="Student's last name" required />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label>Date of Birth *</label>
                                        <input type="date" required />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Applying for Grade *</label>
                                        <select required>
                                            <option value="">Select Grade Level</option>
                                            <option value="prek">Pre-K (Ages 3-4)</option>
                                            <option value="k">Kindergarten</option>
                                            <option value="1">Grade 1</option>
                                            <option value="2">Grade 2</option>
                                            <option value="3">Grade 3</option>
                                            <option value="4">Grade 4</option>
                                            <option value="5">Grade 5</option>
                                            <option value="6">Grade 6</option>
                                            <option value="7">Grade 7</option>
                                            <option value="8">Grade 8</option>
                                            <option value="9">Grade 9</option>
                                            <option value="10">Grade 10</option>
                                            <option value="11">Grade 11</option>
                                            <option value="12">Grade 12</option>
                                            <option value="hifz">Hifz Program</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.formSection}>
                                <h3>Parent/Guardian Information</h3>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label>Parent/Guardian Name *</label>
                                        <div className={styles.inputWrapper}>
                                            <User size={16} />
                                            <input type="text" placeholder="Full name" required />
                                        </div>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Relationship *</label>
                                        <select required>
                                            <option value="">Select Relationship</option>
                                            <option value="mother">Mother</option>
                                            <option value="father">Father</option>
                                            <option value="guardian">Legal Guardian</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label>Email Address *</label>
                                        <div className={styles.inputWrapper}>
                                            <Mail size={16} />
                                            <input type="email" placeholder="email@example.com" required />
                                        </div>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Phone Number *</label>
                                        <div className={styles.inputWrapper}>
                                            <Phone size={16} />
                                            <input type="tel" placeholder="(555) 123-4567" required />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.formSection}>
                                <h3>Additional Information</h3>
                                <div className={styles.formGroup}>
                                    <label>How did you hear about us?</label>
                                    <select>
                                        <option value="">Select an option</option>
                                        <option value="referral">Friend/Family Referral</option>
                                        <option value="masjid">Masjid Announcement</option>
                                        <option value="social">Social Media</option>
                                        <option value="website">Website</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Additional Notes</label>
                                    <textarea placeholder="Any additional information you'd like to share..." rows={3} />
                                </div>
                            </div>

                            <div className={styles.formFooter}>
                                <p className={styles.feeNotice}>
                                    <strong>Application Fee:</strong> $150 (Non-Refundable)
                                </p>
                                <button type="submit" className={styles.submitBtn}>
                                    Submit Application
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
}
