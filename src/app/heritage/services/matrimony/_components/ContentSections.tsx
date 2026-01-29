import Image from 'next/image';
import { Heart, ChevronDown, ChevronUp, Phone, Mail, Clock, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { features, processSteps, successStories, faqs, programStats, ServiceFeature, ProcessStep, SuccessStory, FAQ } from '../_data';
import styles from '../MatrimonyPage.module.scss';

// ============================================
// Hero Section
// ============================================

export function HeroSection() {
    return (
        <section className={styles.nikkahHero}>
            <div className={styles.heroBackground}>
                <Image src="/images/heritage/wedding.jpg" alt="" fill priority className={styles.heroImage} />
                <div className={styles.heroOverlay} />
            </div>

            <div className={styles.heroContent}>
                <div className={styles.nikkahIcon}>
                    <Heart size={32} />
                </div>
                <span className={styles.arabicTitle}>نِكَاح</span>
                <h1 className={styles.heroTitle}>Nikkah Facilitation</h1>
                <p className={styles.heroTagline}>Building blessed unions through faith, family, and community</p>

                <div className={styles.heroStats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{programStats.successfulMatches}</span>
                        <span className={styles.statLabel}>Successful Matches</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{programStats.satisfactionRate}</span>
                        <span className={styles.statLabel}>Satisfaction Rate</span>
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
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Our Approach</span>
                <h2 className={styles.sectionTitle}>A Halal Path to Marriage</h2>
            </div>

            <div className={styles.featuresGrid}>
                {features.map((feature: ServiceFeature) => {
                    const IconComponent = feature.icon;
                    return (
                        <div key={feature.id} className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <IconComponent size={28} />
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
// Process Section
// ============================================

export function ProcessSection() {
    return (
        <section className={styles.processSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>The Journey</span>
                <h2 className={styles.sectionTitle}>Our Process</h2>
            </div>

            <div className={styles.processTimeline}>
                {processSteps.map((step: ProcessStep) => (
                    <div key={step.step} className={styles.processStep}>
                        <div className={styles.stepNumber}>{step.step}</div>
                        <div className={styles.stepContent}>
                            <h4>{step.title}</h4>
                            <p>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

// ============================================
// Stories Section
// ============================================

interface StoriesSectionProps {
    activeIndex: number;
    onPrev: () => void;
    onNext: () => void;
}

export function StoriesSection({ activeIndex, onPrev, onNext }: StoriesSectionProps) {
    return (
        <section className={styles.storiesSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Success Stories</span>
                <h2 className={styles.sectionTitle}>Blessed Unions</h2>
            </div>

            <div className={styles.storyCarousel}>
                <button className={styles.carouselBtn} onClick={onPrev}>
                    <ChevronLeft size={24} />
                </button>

                <div className={styles.storyCard}>
                    <div className={styles.storyContent}>
                        <p className={styles.storyQuote}>
                            &ldquo;{successStories[activeIndex].quote}&rdquo;
                        </p>
                        <div className={styles.storyAuthor}>
                            <span className={styles.names}>{successStories[activeIndex].names}</span>
                            <span className={styles.year}>{successStories[activeIndex].marriedYear}</span>
                        </div>
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
                    <h3>Ready to Begin?</h3>
                    <p>Our matrimony committee is here to guide you through the process.</p>

                    <div className={styles.contactMethods}>
                        <a href="tel:+15551234567" className={styles.contactMethod}>
                            <Phone size={20} />
                            <span>(555) 123-4567</span>
                        </a>
                        <a href="mailto:matrimony@masjid.org" className={styles.contactMethod}>
                            <Mail size={20} />
                            <span>matrimony@masjid.org</span>
                        </a>
                        <div className={styles.contactMethod}>
                            <Clock size={20} />
                            <span>By Appointment</span>
                        </div>
                    </div>
                </div>

                <div className={styles.ctaCard}>
                    <Heart size={32} />
                    <h3>Start Your Journey</h3>
                    <p>Register today and let us help you find a blessed union.</p>
                    <button className={styles.ctaBtn} onClick={onOpenModal}>
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
    onClose: () => void;
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose}>
                    <X size={24} />
                </button>

                <div className={styles.modalHeader}>
                    <Heart size={24} />
                    <h2>Matrimony Registration</h2>
                </div>

                <form className={styles.registrationForm} onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                    <div className={styles.formSection}>
                        <h4>Personal Information</h4>
                        <div className={styles.formRow}>
                            <input type="text" placeholder="Full Name" required />
                            <input type="number" placeholder="Age" required min="18" max="99" />
                        </div>
                        <div className={styles.formRow}>
                            <select required>
                                <option value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <select required>
                                <option value="">Marital Status</option>
                                <option value="single">Never Married</option>
                                <option value="divorced">Divorced</option>
                                <option value="widowed">Widowed</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.formSection}>
                        <h4>Contact Information</h4>
                        <input type="email" placeholder="Email Address" required />
                        <input type="tel" placeholder="Phone Number" required />
                    </div>

                    <div className={styles.formSection}>
                        <h4>About You</h4>
                        <textarea placeholder="Tell us about yourself, your values, and what you're looking for in a spouse..." rows={4} required />
                    </div>

                    <div className={styles.formFooter}>
                        <label className={styles.consent}>
                            <input type="checkbox" required />
                            <span>I agree to the confidentiality terms and the $50 registration fee.</span>
                        </label>
                        <button type="submit" className={styles.submitBtn}>Submit Registration</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
