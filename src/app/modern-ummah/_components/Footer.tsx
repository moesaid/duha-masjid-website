import Link from 'next/link';
import styles from '../_styles/Footer.module.css';

interface FooterProps {
    siteName?: string;
    templateId: string;
}

export function Footer({ siteName = 'Ummah Center', templateId }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.footerBrand}>
                    <p className={styles.footerLogo}>{siteName}</p>
                    <p className={styles.footerTagline}>
                        Building a welcoming community for Muslims of all backgrounds.
                        Join us for prayers, programs, and fellowship.
                    </p>
                    <div className={styles.socialLinks}>
                        <a href="#" className={styles.socialLink} aria-label="Facebook">
                            <FacebookIcon />
                        </a>
                        <a href="#" className={styles.socialLink} aria-label="Instagram">
                            <InstagramIcon />
                        </a>
                        <a href="#" className={styles.socialLink} aria-label="Twitter">
                            <TwitterIcon />
                        </a>
                    </div>
                </div>

                <div className={styles.footerSection}>
                    <h4>Quick Links</h4>
                    <Link href={`/${templateId}/prayer-times`}>Prayer Times</Link>
                    <Link href={`/${templateId}/programs`}>Programs</Link>
                    <Link href={`/${templateId}/events`}>Events</Link>
                    <Link href={`/${templateId}/donate`}>Donate</Link>
                </div>

                <div className={styles.footerSection}>
                    <h4>Resources</h4>
                    <Link href={`/${templateId}/new-muslims`}>New Muslims</Link>
                    <Link href={`/${templateId}/faq`}>FAQ</Link>
                    <Link href={`/${templateId}/directions`}>Directions</Link>
                    <Link href={`/${templateId}/contact`}>Contact</Link>
                </div>

                <div className={styles.footerSection}>
                    <h4>Contact</h4>
                    <a href="tel:+15551234567">(555) 123-4567</a>
                    <a href="mailto:info@ummahcenter.org">info@ummahcenter.org</a>
                    <span>123 Community Drive</span>
                    <span>City, State 12345</span>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p className={styles.copyright}>
                    © {currentYear} {siteName}. All rights reserved.
                </p>
                <div className={styles.legalLinks}>
                    <Link href={`/${templateId}/privacy`}>Privacy Policy</Link>
                    <Link href={`/${templateId}/terms`}>Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}

function FacebookIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
        </svg>
    );
}

function TwitterIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}
