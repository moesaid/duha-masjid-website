import { BookOpen, Shield, Clock, Heart } from 'lucide-react';
import styles from '../CounselingPage.module.scss';

export function PhilosophySection() {
    return (
        <section className={styles.philosophySection}>
            <div className={styles.philosophyContainer}>
                <div className={styles.prefaceHeader}>
                    <BookOpen size={32} />
                    <span>Our Approach</span>
                </div>

                <div className={styles.philosophyContent}>
                    <p className={styles.prefaceText}>
                        We combine traditional Islamic wisdom with compassionate listening.
                        Our goal is to connect you with the resources—spiritual and practical—needed
                        to navigate life's tests. Whether you seek clarity in a difficult decision,
                        healing from heartache, or renewal of faith, we are here to walk beside you
                        on the path toward tranquility.
                    </p>

                    <div className={styles.amanahBox}>
                        <Shield className={styles.amanahIcon} size={28} />
                        <div className={styles.amanahContent}>
                            <h3>Your Privacy is Our Sacred Trust (Amanah)</h3>
                            <p>
                                We adhere to strict confidentiality guidelines. What you share
                                with our counselors remains completely private, unless there is
                                a risk of harm to yourself or others. This is our covenant with you.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.sessionInfo}>
                    <div className={styles.infoItem}>
                        <Clock size={18} />
                        <span>Mon–Thu, 4 PM – 8 PM</span>
                    </div>
                    <div className={styles.infoItem}>
                        <Heart size={18} />
                        <span>Free for community members</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
