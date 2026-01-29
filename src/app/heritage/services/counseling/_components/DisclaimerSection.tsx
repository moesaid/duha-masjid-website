import { AlertTriangle, Phone } from 'lucide-react';
import styles from '../CounselingPage.module.scss';

export function DisclaimerSection() {
    return (
        <section className={styles.disclaimerSection}>
            <div className={styles.disclaimerContainer}>
                <div className={styles.disclaimerHeader}>
                    <AlertTriangle size={24} />
                    <h3>Important Notice</h3>
                </div>

                <p className={styles.disclaimerText}>
                    Our Imams and counselors provide <strong>religious and spiritual guidance</strong>.
                    We are not licensed clinical therapists, psychiatrists, or medical professionals.
                    For medical emergencies or severe mental health crises, please contact
                    professional emergency services immediately.
                </p>

                <div className={styles.crisisResources}>
                    <div className={styles.crisisItem}>
                        <Phone size={20} />
                        <div>
                            <strong>988 Suicide & Crisis Lifeline</strong>
                            <span>Call or text 988 (24/7)</span>
                        </div>
                    </div>
                    <div className={styles.crisisItem}>
                        <Phone size={20} />
                        <div>
                            <strong>Emergency Services</strong>
                            <span>Call 911</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
