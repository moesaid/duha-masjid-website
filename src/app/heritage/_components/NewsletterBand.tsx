'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../_styles/NewsletterBand.module.scss';

export function NewsletterBand() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement newsletter signup
        alert(`Thank you for subscribing with: ${email}`);
        setEmail('');
    };

    return (
        <section className={styles.newsletterSection}>
            <div className={styles.newsletterContainer}>
                <h2 className={styles.sectionTitle}>Stay Connected</h2>
                <p className={styles.sectionSubtitle}>
                    Join our mailing list for weekly khutbah summaries, event announcements, and community updates.
                </p>

                <form className={styles.newsletterForm} onSubmit={handleSubmit}>
                    <div className={styles.inputWrapper}>
                        <input
                            type="email"
                            placeholder="Enter your email address..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.newsletterInput}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.subscribeButton}>
                        Subscribe
                    </button>
                </form>

                <p className={styles.privacyNote}>
                    We respect your privacy. Unsubscribe anytime. Read our{' '}
                    <Link href="/heritage/privacy" className={styles.privacyLink}>
                        Privacy Policy
                    </Link>
                    .
                </p>
            </div>
        </section>
    );
}
