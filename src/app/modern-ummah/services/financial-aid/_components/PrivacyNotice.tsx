import { Lock } from 'lucide-react';
import styles from './PrivacyNotice.module.css';

export function PrivacyNotice() {
    return (
        <section className={styles.section}>
            <div className={styles.widthContainer}>
                <div className={styles.lockIcon}>
                    <Lock size={24} />
                </div>
                <h2 className={styles.title}>Your Privacy is Our Amanah</h2>
                <p className={styles.text}>
                    We understand the sensitivity of financial hardship. All applications and inquiries are
                    handled with the strictest confidentiality by our trusted Zakat Committee members.
                    Your dignity is our priority.
                </p>
            </div>
        </section>
    );
}
