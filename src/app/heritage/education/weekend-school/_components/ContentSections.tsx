import Image from 'next/image';
import { BookOpen, ChevronLeft, ChevronRight, X, Phone, Mail, Clock, MapPin, Check } from 'lucide-react';
import { gradeLevels, weeklySchedule, testimonials, schoolStats, features, GradeLevel } from '../_data';
import styles from '../WeekendSchoolPage.module.scss';

// ============================================
// Hero Section
// ============================================

export function HeroSection() {
    return (
        <section className={styles.madrasahHero}>
            <div className={styles.heroBackground}>
                <Image src="/images/heritage/weekend-school.jpg" alt="" fill priority className={styles.heroImage} />
                <div className={styles.heroOverlay} />
            </div>

            <div className={styles.heroContent}>
                <div className={styles.schoolIcon}>
                    <BookOpen size={32} />
                </div>
                <span className={styles.arabicTitle}>المَدْرَسَة</span>
                <h1 className={styles.heroTitle}>Weekend Madrasah</h1>
                <p className={styles.heroTagline}>Nurturing the next generation of Muslim leaders</p>

                <div className={styles.heroStats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{schoolStats.students}</span>
                        <span className={styles.statLabel}>Students Enrolled</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{schoolStats.yearsRunning}</span>
                        <span className={styles.statLabel}>Years of Excellence</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ============================================
// Features Section
// ============================================

export function FeaturesSection() {
    return (
        <section className={styles.featuresSection}>
            <div className={styles.featuresGrid}>
                {features.map((feature, idx) => {
                    const IconComponent = feature.icon;
                    return (
                        <div key={idx} className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <IconComponent size={24} />
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

// ============================================
// Grades Section
// ============================================

interface GradesSectionProps {
    onEnroll: (gradeId: string) => void;
}

export function GradesSection({ onEnroll }: GradesSectionProps) {
    return (
        <section className={styles.gradesSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Our Program</span>
                <h2 className={styles.sectionTitle}>Grade Levels</h2>
            </div>

            <div className={styles.gradesGrid}>
                {gradeLevels.map((grade: GradeLevel) => (
                    <div key={grade.id} className={styles.gradeCard}>
                        <div className={styles.gradeHeader}>
                            <span className={styles.arabicName}>{grade.arabicName}</span>
                            <h3>{grade.name}</h3>
                            <span className={styles.ageRange}>{grade.ageRange}</span>
                        </div>
                        <p className={styles.gradeDesc}>{grade.description}</p>
                        <div className={styles.subjects}>
                            <h4>Subjects</h4>
                            <ul>
                                {grade.subjects.map((subject, idx) => (
                                    <li key={idx}>
                                        <Check size={14} />
                                        <span>{subject}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button className={styles.enrollBtn} onClick={() => onEnroll(grade.id)}>
                            Enroll Now
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

// ============================================
// Schedule Section
// ============================================

export function ScheduleSection() {
    return (
        <section className={styles.scheduleSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>When We Meet</span>
                <h2 className={styles.sectionTitle}>Weekly Schedule</h2>
            </div>

            <div className={styles.scheduleGrid}>
                {weeklySchedule.map((day, idx) => (
                    <div key={idx} className={styles.scheduleCard}>
                        <div className={styles.dayHeader}>
                            <h3>{day.day}</h3>
                            <span className={styles.time}>{day.time}</span>
                        </div>
                        <ul className={styles.activities}>
                            {day.activities.map((activity, i) => (
                                <li key={i}>{activity}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

// ============================================
// Testimonials Section
// ============================================

interface TestimonialsSectionProps {
    activeIndex: number;
    onPrev: () => void;
    onNext: () => void;
}

export function TestimonialsSection({ activeIndex, onPrev, onNext }: TestimonialsSectionProps) {
    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Parent Voices</span>
                <h2 className={styles.sectionTitle}>What Families Say</h2>
            </div>

            <div className={styles.testimonialCarousel}>
                <button className={styles.carouselBtn} onClick={onPrev}>
                    <ChevronLeft size={24} />
                </button>

                <div className={styles.testimonialCard}>
                    <p className={styles.testimonialQuote}>
                        &ldquo;{testimonials[activeIndex].quote}&rdquo;
                    </p>
                    <div className={styles.testimonialAuthor}>
                        <span className={styles.authorName}>{testimonials[activeIndex].author}</span>
                        <span className={styles.authorRole}>{testimonials[activeIndex].role}</span>
                    </div>
                </div>

                <button className={styles.carouselBtn} onClick={onNext}>
                    <ChevronRight size={24} />
                </button>
            </div>
        </section>
    );
}

// ============================================
// Contact Section
// ============================================

interface ContactSectionProps {
    onOpenRegistration: () => void;
}

export function ContactSection({ onOpenRegistration }: ContactSectionProps) {
    return (
        <section className={styles.contactSection}>
            <div className={styles.contactContent}>
                <div className={styles.contactInfo}>
                    <h3>Get Started</h3>
                    <p>Contact our Madrasah office for more information or to schedule a visit.</p>

                    <div className={styles.contactMethods}>
                        <a href="tel:+15551234567" className={styles.contactMethod}>
                            <Phone size={20} />
                            <span>(555) 123-4567</span>
                        </a>
                        <a href="mailto:madrasah@masjid.org" className={styles.contactMethod}>
                            <Mail size={20} />
                            <span>madrasah@masjid.org</span>
                        </a>
                        <div className={styles.contactMethod}>
                            <MapPin size={20} />
                            <span>Education Wing, 2nd Floor</span>
                        </div>
                    </div>
                </div>

                <div className={styles.ctaCard}>
                    <BookOpen size={32} />
                    <h3>Enroll Today</h3>
                    <p>Give your child the gift of Islamic education.</p>
                    <button className={styles.ctaBtn} onClick={onOpenRegistration}>
                        Register Now
                    </button>
                </div>
            </div>
        </section>
    );
}

// ============================================
// Registration Modal
// ============================================

interface RegistrationModalProps {
    isOpen: boolean;
    selectedGrade: string | null;
    onClose: () => void;
}

export function RegistrationModal({ isOpen, selectedGrade, onClose }: RegistrationModalProps) {
    if (!isOpen) return null;

    const selectedGradeData = gradeLevels.find(g => g.id === selectedGrade);

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose}>
                    <X size={24} />
                </button>

                <div className={styles.modalHeader}>
                    <BookOpen size={24} />
                    <h2>Weekend School Registration</h2>
                    {selectedGradeData && (
                        <span className={styles.gradeLabel}>Grade: {selectedGradeData.name}</span>
                    )}
                </div>

                <form className={styles.registrationForm} onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                    <div className={styles.formSection}>
                        <h4>Student Information</h4>
                        <div className={styles.formRow}>
                            <input type="text" placeholder="Student Full Name" required />
                            <input type="number" placeholder="Age" required min="4" max="18" />
                        </div>
                        <select required defaultValue={selectedGrade || ''}>
                            <option value="" disabled>Select Grade Level</option>
                            {gradeLevels.map(g => (
                                <option key={g.id} value={g.id}>{g.name} - {g.ageRange}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.formSection}>
                        <h4>Parent/Guardian Information</h4>
                        <input type="text" placeholder="Parent/Guardian Name" required />
                        <div className={styles.formRow}>
                            <input type="tel" placeholder="Phone Number" required />
                            <input type="email" placeholder="Email Address" required />
                        </div>
                    </div>

                    <div className={styles.formSection}>
                        <h4>Additional Information</h4>
                        <textarea placeholder="Any allergies, special needs, or notes..." rows={3} />
                    </div>

                    <div className={styles.formFooter}>
                        <button type="submit" className={styles.submitBtn}>Submit Registration</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
