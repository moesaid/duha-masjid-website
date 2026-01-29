import Link from 'next/link';
import { Mail, Phone, Heart } from 'lucide-react';
import styles from './CtaSection.module.scss';

export function CtaSection() {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
                <p className={styles.ctaQuote}>
                    &ldquo;Paradise lies at the feet of mothers.&rdquo;
                    <cite>— Prophetic Saying</cite>
                </p>

                <h3 className={styles.ctaTitle}>Lend Your Voice</h3>
                <p className={styles.ctaDescription}>
                    The Sisters Committee meets monthly to plan events, advocate for
                    women&apos;s needs, and shape our community. Your ideas matter.
                </p>

                <div className={styles.ctaContacts}>
                    <a href="mailto:sisters@duhamasjid.org" className={styles.contactLink}>
                        <Mail size={16} />
                        sisters@duhamasjid.org
                    </a>
                    <a href="tel:+15551234567" className={styles.contactLink}>
                        <Phone size={16} />
                        (555) 123-4567
                    </a>
                </div>

                <Link href="/contact" className={styles.ctaButton}>
                    <Heart size={18} />
                    Join the Committee
                </Link>
            </div>
        </section>
    );
}
