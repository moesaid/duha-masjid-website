import Image from 'next/image';
import { Heart, ChevronLeft, ChevronRight, X, Phone, Mail, Check } from 'lucide-react';
import { volunteerAreas, testimonials, volunteerStats, benefits, VolunteerArea } from '../_data';
import styles from '../VolunteersPage.module.scss';

// ============================================
// Hero Section
// ============================================

export function HeroSection() {
    return (
        <section className={styles.volunteersHero}>
            <div className={styles.heroBackground}>
                <Image src="/images/heritage/volunteers.jpg" alt="" fill priority className={styles.heroImage} />
                <div className={styles.heroOverlay} />
            </div>

            <div className={styles.heroContent}>
                <div className={styles.volunteersIcon}>
                    <Heart size={32} />
                </div>
                <span className={styles.arabicTitle}>تَطَوُّع</span>
                <h1 className={styles.heroTitle}>Volunteer With Us</h1>
                <p className={styles.heroTagline}>The best of people are those who benefit others</p>

                <div className={styles.heroStats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{volunteerStats.activeVolunteers}</span>
                        <span className={styles.statLabel}>Active Volunteers</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{volunteerStats.hoursPerMonth}</span>
                        <span className={styles.statLabel}>Hours Monthly</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ============================================
// Areas Section
// ============================================

interface AreasSectionProps {
    onSignUp: (areaId: string) => void;
}

export function AreasSection({ onSignUp }: AreasSectionProps) {
    return (
        <section className={styles.areasSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Get Involved</span>
                <h2 className={styles.sectionTitle}>Volunteer Opportunities</h2>
            </div>

            <div className={styles.areasGrid}>
                {volunteerAreas.map((area: VolunteerArea) => {
                    const IconComponent = area.icon;
                    return (
                        <div key={area.id} className={styles.areaCard}>
                            <div className={styles.areaIcon}>
                                <IconComponent size={28} />
                            </div>
                            <h3>{area.title}</h3>
                            <p>{area.description}</p>
                            <span className={styles.commitment}>{area.commitment}</span>
                            <button className={styles.signUpBtn} onClick={() => onSignUp(area.id)}>
                                Sign Up
                            </button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

// ============================================
// Benefits Section
// ============================================

export function BenefitsSection() {
    return (
        <section className={styles.benefitsSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Why Volunteer</span>
                <h2 className={styles.sectionTitle}>Benefits of Service</h2>
            </div>

            <ul className={styles.benefitsList}>
                {benefits.map((benefit, idx) => (
                    <li key={idx}>
                        <Check size={18} />
                        <span>{benefit}</span>
                    </li>
                ))}
            </ul>
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
                <span className={styles.sectionLabel}>Volunteer Stories</span>
                <h2 className={styles.sectionTitle}>Hear From Our Team</h2>
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
    onOpenForm: () => void;
}

export function ContactSection({ onOpenForm }: ContactSectionProps) {
    return (
        <section className={styles.contactSection}>
            <div className={styles.contactContent}>
                <div className={styles.contactInfo}>
                    <h3>Questions?</h3>
                    <p>Our volunteer coordinator is here to help.</p>
                    <div className={styles.contactMethods}>
                        <a href="mailto:volunteers@masjid.org" className={styles.contactMethod}>
                            <Mail size={20} />
                            <span>volunteers@masjid.org</span>
                        </a>
                    </div>
                </div>
                <div className={styles.ctaCard}>
                    <Heart size={32} />
                    <h3>Ready to Serve?</h3>
                    <p>Join our volunteer family today.</p>
                    <button className={styles.ctaBtn} onClick={onOpenForm}>
                        Sign Up Now
                    </button>
                </div>
            </div>
        </section>
    );
}

// ============================================
// Sign Up Modal
// ============================================

interface SignUpModalProps {
    isOpen: boolean;
    selectedArea: string | null;
    onClose: () => void;
}

export function SignUpModal({ isOpen, selectedArea, onClose }: SignUpModalProps) {
    if (!isOpen) return null;

    const selectedAreaData = volunteerAreas.find(a => a.id === selectedArea);

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose}>
                    <X size={24} />
                </button>

                <div className={styles.modalHeader}>
                    <Heart size={24} />
                    <h2>Volunteer Sign Up</h2>
                    {selectedAreaData && <span className={styles.areaLabel}>{selectedAreaData.title}</span>}
                </div>

                <form className={styles.signUpForm} onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                    <input type="text" placeholder="Full Name" required />
                    <div className={styles.formRow}>
                        <input type="email" placeholder="Email" required />
                        <input type="tel" placeholder="Phone" required />
                    </div>
                    <select required defaultValue={selectedArea || ''}>
                        <option value="" disabled>Select Area</option>
                        {volunteerAreas.map(a => (
                            <option key={a.id} value={a.id}>{a.title}</option>
                        ))}
                    </select>
                    <textarea placeholder="Tell us about your availability and experience..." rows={3} />
                    <button type="submit" className={styles.submitBtn}>Submit Application</button>
                </form>
            </div>
        </div>
    );
}
