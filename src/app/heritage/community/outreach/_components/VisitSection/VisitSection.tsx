import Link from 'next/link';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';
import styles from './VisitSection.module.scss';

export function VisitSection() {
    return (
        <section className={styles.visitSection}>
            <div className={styles.visitContent}>
                <div className={styles.visitInfo}>
                    <h3>Come Visit Us</h3>
                    <p>We'd love to meet you. Stop by during our open hours or schedule a private tour.</p>

                    <div className={styles.visitDetails}>
                        <div className={styles.visitItem}>
                            <MapPin size={18} />
                            <span>123 Main Street, Springfield</span>
                        </div>
                        <div className={styles.visitItem}>
                            <Phone size={18} />
                            <span>(555) 123-4567</span>
                        </div>
                        <div className={styles.visitItem}>
                            <Mail size={18} />
                            <span>outreach@masjid.org</span>
                        </div>
                    </div>
                </div>

                <div>
                    <Link href="/contact" className={styles.visitBtn}>
                        <Calendar size={18} />
                        Schedule Your Visit
                    </Link>
                </div>
            </div>
        </section>
    );
}
