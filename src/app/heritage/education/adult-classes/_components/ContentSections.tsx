import Image from 'next/image';
import { BookOpen, ChevronLeft, ChevronRight, X, Phone, Mail, Check } from 'lucide-react';
import { adultClasses, features, testimonials, programStats, AdultClass } from '../_data';
import styles from '../AdultClassesPage.module.scss';

// ============================================
// Hero Section
// ============================================

export function HeroSection() {
    return (
        <section className={styles.adultsHero}>
            <div className={styles.heroBackground}>
                <Image src="/images/heritage/adult-classes.jpg" alt="" fill priority className={styles.heroImage} />
                <div className={styles.heroOverlay} />
            </div>

            <div className={styles.heroContent}>
                <div className={styles.adultsIcon}>
                    <BookOpen size={32} />
                </div>
                <span className={styles.arabicTitle}>طَلَبُ العِلْم</span>
                <h1 className={styles.heroTitle}>Adult Education</h1>
                <p className={styles.heroTagline}>Seeking knowledge is an obligation upon every Muslim</p>

                <div className={styles.heroStats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{programStats.students}</span>
                        <span className={styles.statLabel}>Active Students</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{programStats.classes}</span>
                        <span className={styles.statLabel}>Weekly Classes</span>
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
// Classes Section
// ============================================

interface ClassesSectionProps {
    onEnroll: (classId: string) => void;
}

export function ClassesSection({ onEnroll }: ClassesSectionProps) {
    return (
        <section className={styles.classesSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Our Offerings</span>
                <h2 className={styles.sectionTitle}>Available Classes</h2>
            </div>

            <div className={styles.classesGrid}>
                {adultClasses.map((cls: AdultClass) => (
                    <div key={cls.id} className={styles.classCard}>
                        <div className={styles.classHeader}>
                            <span className={styles.arabicTitle}>{cls.arabicTitle}</span>
                            <h3>{cls.title}</h3>
                            <span className={styles.instructor}>with {cls.instructor}</span>
                        </div>
                        <div className={styles.classDetails}>
                            <p className={styles.schedule}>{cls.schedule}</p>
                            <span className={styles.level}>{cls.level}</span>
                        </div>
                        <p className={styles.classDesc}>{cls.description}</p>
                        <div className={styles.topics}>
                            {cls.topics.slice(0, 3).map((topic, idx) => (
                                <span key={idx} className={styles.topic}>{topic}</span>
                            ))}
                        </div>
                        <button className={styles.enrollBtn} onClick={() => onEnroll(cls.id)}>
                            Register
                        </button>
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
                <span className={styles.sectionLabel}>Student Voices</span>
                <h2 className={styles.sectionTitle}>What Students Say</h2>
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
                    <h3>Ready to Learn?</h3>
                    <p>Contact our education department for more information.</p>
                    <div className={styles.contactMethods}>
                        <a href="tel:+15551234568" className={styles.contactMethod}>
                            <Phone size={20} />
                            <span>(555) 123-4568</span>
                        </a>
                        <a href="mailto:education@masjid.org" className={styles.contactMethod}>
                            <Mail size={20} />
                            <span>education@masjid.org</span>
                        </a>
                    </div>
                </div>
                <div className={styles.ctaCard}>
                    <BookOpen size={32} />
                    <h3>Begin Your Journey</h3>
                    <p>Enroll in a class today and grow in knowledge.</p>
                    <button className={styles.ctaBtn} onClick={onOpenRegistration}>
                        View All Classes
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
    selectedClass: string | null;
    onClose: () => void;
}

export function RegistrationModal({ isOpen, selectedClass, onClose }: RegistrationModalProps) {
    if (!isOpen) return null;

    const selectedClassData = adultClasses.find(c => c.id === selectedClass);

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose}>
                    <X size={24} />
                </button>

                <div className={styles.modalHeader}>
                    <BookOpen size={24} />
                    <h2>Class Registration</h2>
                    {selectedClassData && (
                        <span className={styles.classLabel}>{selectedClassData.title}</span>
                    )}
                </div>

                <form className={styles.registrationForm} onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                    <input type="text" placeholder="Full Name" required />
                    <div className={styles.formRow}>
                        <input type="email" placeholder="Email" required />
                        <input type="tel" placeholder="Phone" required />
                    </div>
                    <select required defaultValue={selectedClass || ''}>
                        <option value="" disabled>Select Class</option>
                        {adultClasses.map(c => (
                            <option key={c.id} value={c.id}>{c.title} - {c.schedule}</option>
                        ))}
                    </select>
                    <textarea placeholder="Prior knowledge or notes (optional)" rows={3} />
                    <button type="submit" className={styles.submitBtn}>Submit Registration</button>
                </form>
            </div>
        </div>
    );
}
