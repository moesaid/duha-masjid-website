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
