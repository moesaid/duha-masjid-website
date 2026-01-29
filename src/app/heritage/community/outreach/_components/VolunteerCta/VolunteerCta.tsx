import Link from 'next/link';
import { Handshake, ChevronRight } from 'lucide-react';
import styles from './VolunteerCta.module.scss';

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
