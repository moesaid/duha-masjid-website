import { Phone, Mail, MapPin, BookOpen } from 'lucide-react';
import styles from './ContactSection.module.scss';

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
