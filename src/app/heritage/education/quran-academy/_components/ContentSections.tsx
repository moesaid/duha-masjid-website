import Image from 'next/image';
import { BookOpen, ChevronLeft, ChevronRight, X, Check, Phone, Mail, MapPin } from 'lucide-react';
import { programs, teachers, testimonials, achievements, curriculumHighlights, Program, Teacher, Testimonial, Achievement } from '../_data';
import styles from '../QuranAcademyPage.module.scss';

// ============================================
// Hero Section
// ============================================

export function HeroSection() {
    return (
        <section className={styles.guardiansHero}>
            <div className={styles.heroBackground}>
                <Image src="/images/heritage/quran-study.jpg" alt="" fill priority className={styles.heroImage} />
                <div className={styles.heroOverlay} />
            </div>

            <div className={styles.heroContent}>
                <div className={styles.quranIcon}>
                    <BookOpen size={32} />
                </div>
                <span className={styles.arabicTitle}>حُرَّاسُ الْقُرْآن</span>
                <h1 className={styles.heroTitle}>Guardians of the Quran</h1>
                <p className={styles.heroTagline}>Nurturing hearts through the Book of Allah</p>

                <div className={styles.heroAchievements}>
                    {achievements.map((item: Achievement, idx: number) => {
                        const IconComponent = item.icon;
                        return (
                            <div key={idx} className={styles.achievementItem}>
                                <IconComponent size={20} />
                                <span className={styles.achievementNumber}>{item.number}</span>
                                <span className={styles.achievementLabel}>{item.label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// ============================================
// Programs Section
// ============================================

interface ProgramsSectionProps {
    onEnroll: (programId: string) => void;
}

export function ProgramsSection({ onEnroll }: ProgramsSectionProps) {
    return (
        <section className={styles.programsSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Our Programs</span>
                <h2 className={styles.sectionTitle}>Learning Paths</h2>
            </div>

            <div className={styles.programsGrid}>
                {programs.map((program: Program) => {
                    const IconComponent = program.icon;
                    return (
                        <div key={program.id} className={styles.programCard}>
                            <div className={styles.programIcon}>
                                <IconComponent size={28} />
                            </div>
                            <h3>{program.title}</h3>
                            <span className={styles.ageGroup}>{program.ageGroup}</span>
                            <p>{program.description}</p>
                            <div className={styles.schedule}>
                                <span>{program.schedule}</span>
                            </div>
                            <button className={styles.enrollBtn} onClick={() => onEnroll(program.id)}>
                                Enroll Now
                            </button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

// ============================================
// Curriculum Section
// ============================================

export function CurriculumSection() {
    return (
        <section className={styles.curriculumSection}>
            <div className={styles.curriculumContent}>
                <div className={styles.curriculumText}>
                    <span className={styles.sectionLabel}>Our Approach</span>
                    <h2>A Curriculum Built on Love</h2>
                    <p>
                        Our program is designed to make Quran learning a joyful experience.
                        We combine traditional teaching methods with modern educational techniques.
                    </p>
                    <ul className={styles.highlightsList}>
                        {curriculumHighlights.map((item, idx) => (
                            <li key={idx}>
                                <Check size={16} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.curriculumImage}>
                    <Image src="/images/heritage/quran-class.jpg" alt="Quran class in session" fill />
                </div>
            </div>
        </section>
    );
}

// ============================================
// Teachers Section
// ============================================

export function TeachersSection() {
    return (
        <section className={styles.teachersSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Our Instructors</span>
                <h2 className={styles.sectionTitle}>Meet Our Teachers</h2>
            </div>

            <div className={styles.teachersGrid}>
                {teachers.map((teacher: Teacher, idx: number) => (
                    <div key={idx} className={styles.teacherCard}>
                        <div className={styles.teacherImage}>
                            <Image src={teacher.imageUrl} alt={teacher.name} fill />
                        </div>
                        <div className={styles.teacherInfo}>
                            <h3>{teacher.name}</h3>
                            <span className={styles.teacherTitle}>{teacher.title}</span>
                            <span className={styles.teacherCredentials}>{teacher.credentials}</span>
                            <p>{teacher.bio}</p>
                        </div>
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
                <span className={styles.sectionLabel}>Success Stories</span>
                <h2 className={styles.sectionTitle}>Words from Our Community</h2>
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

            <div className={styles.carouselDots}>
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        className={`${styles.dot} ${idx === activeIndex ? styles.active : ''}`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                    />
                ))}
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
                    <h3>Get In Touch</h3>
                    <p>Ready to start your child&apos;s Quran journey? Contact us for more information.</p>

                    <div className={styles.contactMethods}>
                        <a href="tel:+15551234567" className={styles.contactMethod}>
                            <Phone size={20} />
                            <span>(555) 123-4567</span>
                        </a>
                        <a href="mailto:quran@masjid.org" className={styles.contactMethod}>
                            <Mail size={20} />
                            <span>quran@masjid.org</span>
                        </a>
                        <div className={styles.contactMethod}>
                            <MapPin size={20} />
                            <span>2nd Floor, Education Wing</span>
                        </div>
                    </div>
                </div>

                <div className={styles.ctaCard}>
                    <BookOpen size={32} />
                    <h3>Begin the Journey</h3>
                    <p>Register today and give the gift of Quran.</p>
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
    selectedProgram: string | null;
    onClose: () => void;
}

export function RegistrationModal({ isOpen, selectedProgram, onClose }: RegistrationModalProps) {
    if (!isOpen) return null;

    const selectedProgramData = programs.find(p => p.id === selectedProgram);

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose}>
                    <X size={24} />
                </button>

                <div className={styles.modalHeader}>
                    <BookOpen size={24} />
                    <h2>Student Registration</h2>
                    {selectedProgramData && (
                        <span className={styles.programLabel}>Program: {selectedProgramData.title}</span>
                    )}
                </div>

                <form className={styles.registrationForm} onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                    <div className={styles.formSection}>
                        <h4>Student Information</h4>
                        <div className={styles.formRow}>
                            <input type="text" placeholder="Student Full Name" required />
                            <input type="number" placeholder="Age" required min="5" max="100" />
                        </div>
                        <select required defaultValue={selectedProgram || ''}>
                            <option value="" disabled>Select Program</option>
                            {programs.map(p => (
                                <option key={p.id} value={p.id}>{p.title} - {p.ageGroup}</option>
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
                        <textarea placeholder="Any previous Quran learning experience or special notes..." rows={3} />
                    </div>

                    <div className={styles.formFooter}>
                        <button type="submit" className={styles.submitBtn}>Submit Registration</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
