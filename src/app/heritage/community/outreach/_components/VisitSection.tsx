import Link from 'next/link';
import { MapPin, Phone, Mail, Calendar, Handshake, ChevronRight } from 'lucide-react';
import styles from '../OutreachPage.module.scss';

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

                <div className={styles.visitCta}>
                    <Link href="/contact" className={styles.visitBtn}>
                        <Calendar size={18} />
                        Schedule Your Visit
                    </Link>
                </div>
            </div>
        </section>
    );
}

export function VolunteerCta() {
    return (
        <section className={styles.volunteerSection}>
            <div className={styles.volunteerCenter}>
                <div className={styles.volunteerIconWrap}>
                    <Handshake size={32} className={styles.volunteerIcon} />
                </div>
                <div className={styles.volunteerText}>
                    <h3>Want to Help Represent Your Faith?</h3>
                    <p>
                        Join the Dawah Committee. Training provided.
                        Must attend the &quot;Dawah 101&quot; workshop.
                    </p>
                </div>
                <Link href="/contact" className={styles.volunteerBtn}>
                    Volunteer for Outreach
                    <ChevronRight size={16} />
                </Link>
            </div>
        </section>
    );
}
