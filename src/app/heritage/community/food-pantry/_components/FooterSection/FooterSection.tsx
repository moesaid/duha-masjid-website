import { Globe, Phone } from 'lucide-react';
import styles from './FooterSection.module.scss';

export function FooterSection() {
    return (
        <section className={styles.footerSection}>
            <div className={styles.footerContent}>
                <div className={styles.footerItem}>
                    <Globe size={22} />
                    <div>
                        <span className={styles.footerLabel}>Service Area</span>
                        <span className={styles.footerValue}>
                            We serve all zip codes in Springfield County
                        </span>
                    </div>
                </div>

                <div className={styles.footerItem}>
                    <Phone size={22} />
                    <div>
                        <span className={styles.footerLabel}>Emergency Assistance</span>
                        <span className={styles.footerValue}>
                            For help outside of distribution hours, call <a href="tel:211">211</a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
