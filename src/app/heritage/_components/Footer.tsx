'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../_styles/Footer.module.scss';

// Types for navigation structure
interface NavItem {
    label: string;
    url?: string;
    type: 'single_link' | 'dropdown';
}

interface NavigationData {
    navigation_bar: NavItem[];
}

interface FooterProps {
    siteName?: string;
}

// Simulated API call for navigation data
async function fetchNavigation(): Promise<NavigationData> {
    const response = await import('@/data/navigation.json');
    return response.default as NavigationData;
}

export function Footer({ siteName = 'Al-Noor Masjid' }: FooterProps) {
    const currentYear = new Date().getFullYear();
    const [navItems, setNavItems] = useState<NavItem[]>([]);
    const [email, setEmail] = useState('');

    useEffect(() => {
        fetchNavigation().then((data) => {
            setNavItems(data.navigation_bar);
        });
    }, []);

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement newsletter signup
        alert(`Thank you for subscribing with: ${email}`);
        setEmail('');
    };

    return (
        <footer className={styles.footer}>
            {/* Double-line top border */}
            <div className={styles.footerTopBorder} />

            {/* Main Footer Content */}
            <div className={styles.footerMain}>
                <div className={styles.footerInner}>
                    {/* Column 1: Identity & Mission */}
                    <div className={`${styles.footerColumn} ${styles.logoColumn}`}>
                        <Link href="/heritage" className={styles.footerLogo}>
                            {siteName.split(' ')[0]}
                            <span className={styles.footerLogoAccent}>
                                {' '}{siteName.split(' ').slice(1).join(' ')}
                            </span>
                            <span className={styles.footerLogoTagline}>Est. 1985</span>
                        </Link>
                        <p className={styles.missionText}>
                            "A sacred sanctuary where hearts find peace, minds gain wisdom,
                            and the community grows stronger together in faith and service."
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialLink} aria-label="Facebook">
                                <FacebookIcon />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Instagram">
                                <InstagramIcon />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="YouTube">
                                <YouTubeIcon />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Twitter">
                                <TwitterIcon />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className={styles.footerColumn}>
                        <h3 className={styles.columnHeading}>Explore</h3>
                        <ul className={styles.navList}>
                            {navItems.map((item) => (
                                <li key={item.label} className={styles.navItem}>
                                    <Link
                                        href={`/heritage${item.url || ''}`}
                                        className={styles.navLink}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact & Access */}
                    <div className={styles.footerColumn}>
                        <h3 className={styles.columnHeading}>Visit Us</h3>

                        <div className={styles.contactItem}>
                            <LocationIcon className={styles.contactIcon} />
                            <div className={styles.contactText}>
                                123 Masjid Street<br />
                                Springfield, IL 62701
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <PhoneIcon className={styles.contactIcon} />
                            <a href="tel:+15551234567" className={`${styles.contactText} ${styles.contactLink}`}>
                                (555) 123-4567
                            </a>
                        </div>

                        <div className={styles.contactItem}>
                            <EmailIcon className={styles.contactIcon} />
                            <a href="mailto:info@alnoormasjid.org" className={`${styles.contactText} ${styles.contactLink}`}>
                                info@alnoormasjid.org
                            </a>
                        </div>

                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.directionsBtn}
                        >
                            <DirectionsIcon />
                            Get Directions
                        </a>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className={styles.footerColumn}>
                        <h3 className={styles.columnHeading}>Stay Connected</h3>
                        <p className={styles.newsletterText}>
                            Subscribe to our newsletter for weekly khutbah summaries,
                            event announcements, and community updates.
                        </p>
                        <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={styles.newsletterInput}
                                required
                            />
                            <button type="submit" className={styles.newsletterBtn}>
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Copyright Sub-footer */}
            <div className={styles.subFooter}>
                <div className={styles.subFooterInner}>
                    <span className={styles.copyright}>
                        © {currentYear} {siteName}. All rights reserved.
                    </span>
                    <div className={styles.legalLinks}>
                        <Link href="/heritage/privacy" className={styles.legalLink}>
                            Privacy Policy
                        </Link>
                        <span className={styles.legalDivider}>|</span>
                        <Link href="/heritage/terms" className={styles.legalLink}>
                            Terms of Use
                        </Link>
                        <span className={styles.legalDivider}>|</span>
                        <Link href="/heritage/accessibility" className={styles.legalLink}>
                            Accessibility
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Icons
function FacebookIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="18" cy="6" r="1" fill="currentColor" />
        </svg>
    );
}

function YouTubeIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" />
        </svg>
    );
}

function TwitterIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

function LocationIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function PhoneIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function EmailIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
        </svg>
    );
}

function DirectionsIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="3 11 22 2 13 21 11 13 3 11" />
        </svg>
    );
}
