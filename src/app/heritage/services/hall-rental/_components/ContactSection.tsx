import { Phone, Mail } from 'lucide-react';
import styles from '../HallRentalPage.module.scss';

export function ContactSection() {
    return (
        <section className={styles.contactSection}>
            <div className={styles.contactContent}>
                <h3 className={styles.contactTitle}>Questions? Contact Our Facilities Team</h3>
                <div className={styles.contactInfo}>
                    <a href="tel:+15551234567" className={styles.contactItem}>
                        <Phone size={20} />
                        (555) 123-4567
                    </a>
                    <a href="mailto:facilities@alnoormasjid.org" className={styles.contactItem}>
                        <Mail size={20} />
                        facilities@alnoormasjid.org
                    </a>
                </div>
            </div>
        </section>
    );
}
