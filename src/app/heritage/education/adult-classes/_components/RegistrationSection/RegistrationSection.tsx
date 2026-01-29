import { Bookmark, Mail } from 'lucide-react';
import styles from './RegistrationSection.module.scss';

export function RegistrationSection() {
    return (
        <section className={styles.registrationSection}>
            <div className={styles.registrationContent}>
                <h2>Stay Connected</h2>
                <p className={styles.registrationNote}>
                    Most classes are open to the public and require no registration.
                    For specialized workshops, please sign up below.
                </p>

                <form className={styles.newsletterForm}>
                    <div className={styles.inputWrapper}>
                        <Bookmark size={18} className={styles.inputIcon} />
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            aria-label="Email address"
                        />
                    </div>
                    <button type="submit">
                        <Mail size={16} />
                        Subscribe to Education Newsletter
                    </button>
                </form>

                <p className={styles.privacyNote}>
                    We respect your privacy. Unsubscribe anytime.
                </p>
            </div>
        </section>
    );
}
