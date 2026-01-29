import Image from 'next/image';
import { Heart, ChevronDown, ChevronUp, Phone, Mail, Clock, X, Check, HandHeart } from 'lucide-react';
import { programs, applicationProcess, faqs, fundStats, AssistanceProgram, ProcessStep, FAQ } from '../_data';
import styles from '../ZakatPage.module.scss';

// ============================================
// Hero Section
// ============================================

export function HeroSection() {
    return (
        <section className={styles.mercyHero}>
            <div className={styles.heroBackground}>
                <Image src="/images/heritage/mercy-fund.jpg" alt="" fill priority className={styles.heroImage} />
                <div className={styles.heroOverlay} />
            </div>

            <div className={styles.heroContent}>
                <div className={styles.mercyIcon}>
                    <Heart size={32} />
                </div>
                <h1 className={styles.heroTitle}>The Mercy Fund</h1>
                <p className={styles.heroTagline}>Extending a helping hand to our brothers and sisters in need</p>

                <div className={styles.heroStats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{fundStats.familiesHelped}</span>
                        <span className={styles.statLabel}>Families Helped</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>{fundStats.amountDistributed}</span>
                        <span className={styles.statLabel}>Distributed</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ============================================
// Programs Section
// ============================================

interface ProgramsSectionProps {
    onApply: (programId: string) => void;
}

export function ProgramsSection({ onApply }: ProgramsSectionProps) {
    return (
        <section className={styles.programsSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Available Programs</span>
                <h2 className={styles.sectionTitle}>How We Can Help</h2>
            </div>

            <div className={styles.programsGrid}>
                {programs.map((program: AssistanceProgram) => {
                    const IconComponent = program.icon;
                    return (
                        <div key={program.id} className={styles.programCard}>
                            <div className={styles.programIcon}>
                                <IconComponent size={28} />
                            </div>
                            <h3>{program.title}</h3>
                            <p className={styles.programDesc}>{program.description}</p>

                            <div className={styles.eligibilityList}>
                                <h4>Eligibility</h4>
                                <ul>
                                    {program.eligibility.map((item, idx) => (
                                        <li key={idx}>
                                            <Check size={14} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.programFooter}>
                                <span className={styles.maxAmount}>{program.maxAmount}</span>
                                <button className={styles.applyBtn} onClick={() => onApply(program.id)}>
                                    Apply Now
                                </button>
                            </div>
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
                <span className={styles.sectionLabel}>Simple Steps</span>
                <h2 className={styles.sectionTitle}>Application Process</h2>
            </div>

            <div className={styles.processTimeline}>
                {applicationProcess.map((step: ProcessStep) => (
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
                    <div
                        key={index}
                        className={`${styles.faqItem} ${expandedFaq === index ? styles.expanded : ''}`}
                    >
                        <button
                            className={styles.faqQuestion}
                            onClick={() => onToggle(index)}
                            aria-expanded={expandedFaq === index}
                        >
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
    onOpenForm: () => void;
}

export function ContactSection({ onOpenForm }: ContactSectionProps) {
    return (
        <section className={styles.contactSection}>
            <div className={styles.contactContent}>
                <div className={styles.contactInfo}>
                    <h3>Need Assistance?</h3>
                    <p>Our Mercy Fund coordinators are here to help you through the process.</p>

                    <div className={styles.contactMethods}>
                        <a href="tel:+15551234567" className={styles.contactMethod}>
                            <Phone size={20} />
                            <span>(555) 123-4567</span>
                        </a>
                        <a href="mailto:mercyfund@masjid.org" className={styles.contactMethod}>
                            <Mail size={20} />
                            <span>mercyfund@masjid.org</span>
                        </a>
                        <div className={styles.contactMethod}>
                            <Clock size={20} />
                            <span>Mon-Fri: 10 AM - 4 PM</span>
                        </div>
                    </div>
                </div>

                <div className={styles.cta}>
                    <div className={styles.ctaIcon}>
                        <HandHeart size={32} />
                    </div>
                    <h3>Ready to Apply?</h3>
                    <p>Start your confidential application today.</p>
                    <button className={styles.ctaBtn} onClick={onOpenForm}>
                        Begin Application
                    </button>
                </div>
            </div>
        </section>
    );
}

// ============================================
// Application Form Modal
// ============================================

interface ApplicationFormModalProps {
    isOpen: boolean;
    selectedProgram: string | null;
    onClose: () => void;
}

export function ApplicationFormModal({ isOpen, selectedProgram, onClose }: ApplicationFormModalProps) {
    if (!isOpen) return null;

    const selectedProgramData = programs.find(p => p.id === selectedProgram);

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose}>
                    <X size={24} />
                </button>

                <div className={styles.modalHeader}>
                    <Heart size={24} />
                    <h2>Financial Assistance Application</h2>
                    {selectedProgramData && (
                        <span className={styles.programLabel}>Applying for: {selectedProgramData.title}</span>
                    )}
                </div>

                <form className={styles.applicationForm} onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                    <div className={styles.formSection}>
                        <h4>Personal Information</h4>
                        <div className={styles.formRow}>
                            <input type="text" placeholder="Full Name" required />
                            <input type="tel" placeholder="Phone Number" required />
                        </div>
                        <input type="email" placeholder="Email Address" required />
                        <input type="text" placeholder="Address" required />
                    </div>

                    <div className={styles.formSection}>
                        <h4>Assistance Details</h4>
                        <select required defaultValue={selectedProgram || ''}>
                            <option value="" disabled>Select Program</option>
                            {programs.map(p => (
                                <option key={p.id} value={p.id}>{p.title}</option>
                            ))}
                        </select>
                        <input type="text" placeholder="Amount Requested" />
                        <textarea placeholder="Please describe your situation and how we can help..." rows={4} required />
                    </div>

                    <div className={styles.formSection}>
                        <h4>Supporting Documents</h4>
                        <div className={styles.fileUpload}>
                            <input type="file" id="documents" multiple accept=".pdf,.jpg,.png" />
                            <label htmlFor="documents">Upload bills, notices, or other documentation</label>
                        </div>
                    </div>

                    <div className={styles.formFooter}>
                        <label className={styles.consent}>
                            <input type="checkbox" required />
                            <span>I certify that the information provided is accurate and I consent to the confidential review of my application.</span>
                        </label>
                        <button type="submit" className={styles.submitBtn}>Submit Application</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
