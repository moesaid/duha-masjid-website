import { Heart, Mail } from 'lucide-react';
import styles from './ContactSection.module.scss';

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
