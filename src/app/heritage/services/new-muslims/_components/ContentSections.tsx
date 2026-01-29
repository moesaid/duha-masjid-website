import Image from 'next/image';
import { Heart, ChevronDown, ChevronUp, Phone, Mail, Clock, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { resources, classSchedule, testimonials, faqs, programStats, Resource, ClassSession, Testimonial, FAQ } from '../_data';
import styles from '../NewMuslimsPage.module.scss';

// ============================================
// Hero Section
// ============================================

export function HeroSection() {
    return (
        <section className={styles.embraceHero}>
            <div className={styles.heroBackground}>
                <Image src="/images/heritage/new-muslim.jpg" alt="" fill priority className={styles.heroImage} />
                <div className={styles.heroOverlay} />
            </div>

            <div className={styles.heroContent}>
                <div className={styles.embraceIcon}>
                    <Heart size={32} />
                </div>
                <span className={styles.arabicTitle}>مَرْحَباً بِكَ</span>
                <h1 className={styles.heroTitle}>Welcome Home</h1>
                <p className={styles.heroTagline}>A supportive community for those beginning their journey in Islam</p>

                <div className={styles.heroStats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{programStats.newMuslims}</span>
                        <span className={styles.statLabel}>New Muslims Supported</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{programStats.activeMentors}</span>
                        <span className={styles.statLabel}>Active Mentors</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ============================================
// Resources Section
// ============================================

export function ResourcesSection() {
    return (
        <section className={styles.resourcesSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Here For You</span>
                <h2 className={styles.sectionTitle}>Support Resources</h2>
            </div>

            <div className={styles.resourcesGrid}>
                {resources.map((resource: Resource) => {
                    const IconComponent = resource.icon;
                    return (
                        <div key={resource.id} className={styles.resourceCard}>
                            <div className={styles.resourceIcon}>
                                <IconComponent size={28} />
                            </div>
                            <h3>{resource.title}</h3>
                            <p>{resource.description}</p>
                        </div>
                    );
                })}
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
                <span className={styles.sectionLabel}>Weekly Classes</span>
                <h2 className={styles.sectionTitle}>Learn at Your Pace</h2>
            </div>

            <div className={styles.scheduleGrid}>
                {classSchedule.map((session: ClassSession, idx: number) => (
                    <div key={idx} className={styles.scheduleCard}>
                        <div className={styles.day}>{session.day}</div>
                        <div className={styles.time}>{session.time}</div>
                        <div className={styles.topic}>{session.topic}</div>
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
                <span className={styles.sectionLabel}>Stories of Faith</span>
                <h2 className={styles.sectionTitle}>Voices from Our Community</h2>
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
                        <span className={styles.authorName}>{testimonials[activeIndex].name}</span>
                        <span className={styles.authorRole}>{testimonials[activeIndex].convertedYear}</span>
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
// FAQ Section
// ============================================

interface FAQSectionProps {
    expandedFaq: number | null;
    onToggle: (index: number) => void;
}

export function FAQSection({ expandedFaq, onToggle }: FAQSectionProps) {
    return (
        <section className={styles.faqSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Common Questions</span>
                <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            </div>

            <div className={styles.faqList}>
                {faqs.map((faq: FAQ, index: number) => (
                    <div key={index} className={`${styles.faqItem} ${expandedFaq === index ? styles.expanded : ''}`}>
                        <button className={styles.faqQuestion} onClick={() => onToggle(index)}>
                            <span>{faq.question}</span>
                            {expandedFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                        {expandedFaq === index && (
                            <div className={styles.faqAnswer}>
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

// ============================================
// Contact Section
// ============================================

interface ContactSectionProps {
    onOpenModal: () => void;
}

export function ContactSection({ onOpenModal }: ContactSectionProps) {
    return (
        <section className={styles.contactSection}>
            <div className={styles.contactContent}>
                <div className={styles.contactInfo}>
                    <h3>Ready to Take the First Step?</h3>
                    <p>Our team is here to support you every step of the way.</p>

                    <div className={styles.contactMethods}>
                        <a href="tel:+15551234567" className={styles.contactMethod}>
                            <Phone size={20} />
                            <span>(555) 123-4567</span>
                        </a>
                        <a href="mailto:embrace@masjid.org" className={styles.contactMethod}>
                            <Mail size={20} />
                            <span>embrace@masjid.org</span>
                        </a>
                        <div className={styles.contactMethod}>
                            <Clock size={20} />
                            <span>Available 24/7</span>
                        </div>
                    </div>
                </div>

                <div className={styles.ctaCard}>
                    <Heart size={32} />
                    <h3>Begin Your Journey</h3>
                    <p>Request a mentor or schedule a visit today.</p>
                    <button className={styles.ctaBtn} onClick={onOpenModal}>
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
}

// ============================================
// Contact Modal
// ============================================

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose}>
                    <X size={24} />
                </button>

                <div className={styles.modalHeader}>
                    <Heart size={24} />
                    <h2>Begin Your Journey</h2>
                </div>

                <form className={styles.contactForm} onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Email Address" required />
                    <input type="tel" placeholder="Phone Number (optional)" />

                    <div className={styles.interestGroup}>
                        <label>What would you like?</label>
                        <label className={styles.checkbox}>
                            <input type="checkbox" value="shahada" />
                            <span>Take my shahada</span>
                        </label>
                        <label className={styles.checkbox}>
                            <input type="checkbox" value="mentor" />
                            <span>Request a mentor</span>
                        </label>
                        <label className={styles.checkbox}>
                            <input type="checkbox" value="classes" />
                            <span>Join classes</span>
                        </label>
                        <label className={styles.checkbox}>
                            <input type="checkbox" value="visit" />
                            <span>Visit the masjid</span>
                        </label>
                    </div>

                    <textarea placeholder="Any questions or how can we help you?" rows={3} />

                    <button type="submit" className={styles.submitBtn}>Send Request</button>
                </form>
            </div>
        </div>
    );
}
