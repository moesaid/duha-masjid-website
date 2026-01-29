import { Shield, CheckCircle, MessageCircle, AlertCircle, Mail, Phone } from 'lucide-react';
import styles from '../YouthPage.module.scss';

export function ParentsSection() {
    return (
        <section className={styles.parentsSection}>
            <div className={styles.parentsContent}>
                <div className={styles.parentsHeader}>
                    <Shield size={32} />
                    <h2>A Note for Parents</h2>
                </div>

                <div className={styles.parentsGrid}>
                    <div className={styles.parentItem}>
                        <CheckCircle size={20} />
                        <div>
                            <h4>Background Checked Mentors</h4>
                            <p>All adult volunteers and staff undergo thorough background checks.</p>
                        </div>
                    </div>
                    <div className={styles.parentItem}>
                        <MessageCircle size={20} />
                        <div>
                            <h4>Parents-Only WhatsApp</h4>
                            <p>Join our parent group for logistics, pickup times, and updates.</p>
                        </div>
                    </div>
                    <div className={styles.parentItem}>
                        <AlertCircle size={20} />
                        <div>
                            <h4>Emergency Protocols</h4>
                            <p>Clear safety procedures and emergency contacts at every event.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.contactInfo}>
                    <h4>Youth Director Contact</h4>
                    <div className={styles.contactDetails}>
                        <span>
                            <Mail size={16} />
                            youth@duhamasjid.org
                        </span>
                        <span>
                            <Phone size={16} />
                            (555) 123-4567
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
