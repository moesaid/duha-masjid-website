import Image from 'next/image';
import { MessageSquare, Clock, Check, ExternalLink } from 'lucide-react';
import { contactMethods, officeHours, departments, formTopics, ContactMethod, OfficeHours, Department } from '../_data';
import styles from '../ContactPage.module.scss';

// ============================================
// Hero Section
// ============================================

export function HeroSection() {
    return (
        <section className={styles.contactHero}>
            <div className={styles.heroBackground}>
                <Image src="/images/heritage/contact.jpg" alt="" fill priority className={styles.heroImage} />
                <div className={styles.heroOverlay} />
            </div>

            <div className={styles.heroContent}>
                <div className={styles.contactIcon}>
                    <MessageSquare size={32} />
                </div>
                <span className={styles.arabicTitle}>تَوَاصُل</span>
                <h1 className={styles.heroTitle}>Contact Us</h1>
                <p className={styles.heroTagline}>We&apos;re here to serve and support our community</p>
            </div>
        </section>
    );
}

// ============================================
// Contact Methods Section
// ============================================

export function ContactMethodsSection() {
    return (
        <section className={styles.methodsSection}>
            <div className={styles.methodsGrid}>
                {contactMethods.map((method: ContactMethod) => {
                    const IconComponent = method.icon;
                    return (
                        <div key={method.id} className={styles.methodCard}>
                            <div className={styles.methodIcon}>
                                <IconComponent size={28} />
                            </div>
                            <h3>{method.title}</h3>
                            <p className={styles.primary}>{method.primary}</p>
                            {method.secondary && <p className={styles.secondary}>{method.secondary}</p>}
                            {method.action && method.actionUrl && (
                                <a href={method.actionUrl} className={styles.actionLink}>
                                    {method.action}
                                    <ExternalLink size={14} />
                                </a>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

// ============================================
// Hours Section
// ============================================

export function HoursSection() {
    return (
        <section className={styles.hoursSection}>
            <div className={styles.sectionHeader}>
                <Clock size={24} />
                <h2>Office Hours</h2>
            </div>

            <div className={styles.hoursList}>
                {officeHours.map((item: OfficeHours, idx: number) => (
                    <div key={idx} className={styles.hoursItem}>
                        <span className={styles.day}>{item.day}</span>
                        <span className={styles.hours}>{item.hours}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

// ============================================
// Departments Section
// ============================================

export function DepartmentsSection() {
    return (
        <section className={styles.departmentsSection}>
            <div className={styles.sectionHeader}>
                <h2>Department Contacts</h2>
                <p>Reach the right team directly</p>
            </div>

            <div className={styles.departmentsGrid}>
                {departments.map((dept: Department, idx: number) => (
                    <div key={idx} className={styles.departmentCard}>
                        <h4>{dept.name}</h4>
                        <a href={`mailto:${dept.email}`} className={styles.deptEmail}>{dept.email}</a>
                        {dept.phone && <span className={styles.deptPhone}>{dept.phone}</span>}
                    </div>
                ))}
            </div>
        </section>
    );
}

// ============================================
// Contact Form Section
// ============================================

interface ContactFormProps {
    formData: { name: string; email: string; phone: string; topic: string; message: string };
    onUpdate: (field: string, value: string) => void;
    onSubmit: () => void;
    isMessageSent: boolean;
}

export function ContactFormSection({ formData, onUpdate, onSubmit, isMessageSent }: ContactFormProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <section className={styles.formSection}>
            <div className={styles.sectionHeader}>
                <h2>Send Us a Message</h2>
                <p>We typically respond within 24-48 hours</p>
            </div>

            {isMessageSent ? (
                <div className={styles.successMessage}>
                    <Check size={32} />
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. We&apos;ll get back to you soon, insha&apos;Allah.</p>
                </div>
            ) : (
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <div className={styles.formRow}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => onUpdate('name', e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={(e) => onUpdate('email', e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formRow}>
                        <input
                            type="tel"
                            placeholder="Phone (optional)"
                            value={formData.phone}
                            onChange={(e) => onUpdate('phone', e.target.value)}
                        />
                        <select
                            value={formData.topic}
                            onChange={(e) => onUpdate('topic', e.target.value)}
                            required
                        >
                            <option value="" disabled>Select Topic</option>
                            {formTopics.map((topic, idx) => (
                                <option key={idx} value={topic}>{topic}</option>
                            ))}
                        </select>
                    </div>
                    <textarea
                        placeholder="Your Message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => onUpdate('message', e.target.value)}
                        required
                    />
                    <button type="submit" className={styles.submitBtn}>Send Message</button>
                </form>
            )}
        </section>
    );
}

// ============================================
// Map Section
// ============================================

export function MapSection() {
    return (
        <section className={styles.mapSection}>
            <div className={styles.mapContainer}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.5812795248694!2d-72.57850542393988!3d42.09776347123399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDA1JzUyLjAiTiA3MsKwMzQnMzAuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Masjid Location"
                />
            </div>
        </section>
    );
}
