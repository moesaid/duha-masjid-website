import React from 'react';
import Link from 'next/link';
import styles from '../_styles/Footer.module.css';

const quickLinks = [
    { href: '/qiyam/about', label: 'About Us' },
    { href: '/qiyam/prayer-times', label: 'Prayer Times' },
    { href: '/qiyam/programs', label: 'Programs' },
    { href: '/qiyam/events', label: 'Events' },
];

const resourceLinks = [
    { href: '/qiyam/quran', label: 'Quran' },
    { href: '/qiyam/hadith', label: 'Hadith' },
    { href: '/qiyam/live', label: 'Live Stream' },
    { href: '/qiyam/faq', label: 'FAQ' },
];

const connectLinks = [
    { href: '/qiyam/contact', label: 'Contact Us' },
    { href: '/qiyam/newsletter', label: 'Newsletter' },
    { href: '/qiyam/volunteer', label: 'Volunteer' },
    { href: '/qiyam/donate', label: 'Donate' },
];

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerGlass}>
                <div className={styles.footerInner}>
                    <div className={styles.footerBrand}>
                        <div className={styles.footerLogo}>
                            <span className={styles.footerLogoIcon}>☾</span>
                            <span className={styles.footerLogoText}>The Qiyam</span>
                        </div>
                        <p className={styles.footerTagline}>
                            Where sacred light meets modern community. A space for prayer,
                            reflection, and spiritual growth.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialLink} aria-label="Facebook">
                                f
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Instagram">
                                ✦
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="YouTube">
                                ▶
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Twitter">
                                𝕏
                            </a>
                        </div>
                    </div>

                    <div className={styles.footerSection}>
                        <h4>Quick Links</h4>
                        {quickLinks.map((link) => (
                            <Link key={link.href} href={link.href}>
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className={styles.footerSection}>
                        <h4>Resources</h4>
                        {resourceLinks.map((link) => (
                            <Link key={link.href} href={link.href}>
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className={styles.footerSection}>
                        <h4>Connect</h4>
                        {connectLinks.map((link) => (
                            <Link key={link.href} href={link.href}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} The Qiyam. All rights reserved.
                    </p>
                    <div className={styles.footerLinks}>
                        <Link href="/qiyam/privacy">Privacy Policy</Link>
                        <Link href="/qiyam/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
