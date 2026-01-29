import Image from 'next/image';
import { Heart, ChevronDown, ChevronUp, Phone, Mail, Clock } from 'lucide-react';
import { funeralServices, faqs, emergencyContact, FuneralService, FAQ } from '../_data';
import styles from '../FuneralPage.module.scss';

export function HeroSection() {
    return (
        <section className={styles.janazahHero}>
            <div className={styles.heroBackground}>
                <Image src="/images/funeral.jpg" alt="" fill priority className={styles.heroImage} />
                <div className={styles.heroOverlay} />
            </div>
            <div className={styles.heroContent}>
                <div className={styles.janazahIcon}><Heart size={32} /></div>
                <span className={styles.arabicTitle}>الجَنَازَة</span>
                <h1 className={styles.heroTitle}>Funeral Services</h1>
                <p className={styles.heroTagline}>Supporting families through moments of loss with care and compassion</p>
            </div>
        </section>
    );
}

export function EmergencySection() {
    return (
        <section className={styles.emergencySection}>
            <div className={styles.emergencyCard}>
                <Clock size={28} />
                <h3>24/7 Emergency Support</h3>
                <a href={`tel:${emergencyContact.phone.replace(/[^0-9+]/g, '')}`} className={styles.emergencyPhone}>
                    <Phone size={24} />
                    <span>{emergencyContact.phone}</span>
                </a>
                <p>Available {emergencyContact.available}</p>
            </div>
        </section>
    );
}

export function ServicesSection() {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>What We Offer</span>
                <h2 className={styles.sectionTitle}>Our Services</h2>
            </div>
            <div className={styles.servicesGrid}>
                {funeralServices.map((service: FuneralService) => {
                    const IconComponent = service.icon;
                    return (
                        <div key={service.id} className={styles.serviceCard}>
                            <div className={styles.serviceIcon}><IconComponent size={28} /></div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

interface FAQSectionProps {
    expandedFaq: number | null;
    onToggle: (index: number) => void;
}

export function FAQSection({ expandedFaq, onToggle }: FAQSectionProps) {
    return (
        <section className={styles.faqSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Questions</span>
                <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            </div>
            <div className={styles.faqList}>
                {faqs.map((faq: FAQ, index: number) => (
                    <div key={index} className={`${styles.faqItem} ${expandedFaq === index ? styles.expanded : ''}`}>
                        <button className={styles.faqQuestion} onClick={() => onToggle(index)}>
                            <span>{faq.question}</span>
                            {expandedFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                        {expandedFaq === index && <div className={styles.faqAnswer}><p>{faq.answer}</p></div>}
                    </div>
                ))}
            </div>
        </section>
    );
}

export function ContactSection() {
    return (
        <section className={styles.contactSection}>
            <div className={styles.contactCard}>
                <h3>Need Assistance?</h3>
                <p>Our janazah committee is ready to help at any time.</p>
                <div className={styles.contactMethods}>
                    <a href={`tel:${emergencyContact.phone.replace(/[^0-9+]/g, '')}`} className={styles.contactMethod}>
                        <Phone size={20} /><span>{emergencyContact.phone}</span>
                    </a>
                    <a href={`mailto:${emergencyContact.email}`} className={styles.contactMethod}>
                        <Mail size={20} /><span>{emergencyContact.email}</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
