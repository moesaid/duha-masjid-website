'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from '../_styles/Header.module.css';

interface HeaderProps {
    siteName?: string;
    templateId: string;
}

const navLinks = [
    { label: 'About', href: 'about' },
    { label: 'Leadership', href: 'leadership' },
    { label: 'Facilities', href: 'facilities' },
    { label: 'Programs', href: 'programs' },
    { label: 'Financial Reports', href: 'reports' },
    { label: 'Contact', href: 'contact' },
];

export function Header({ siteName = 'Islamic Foundation', templateId }: HeaderProps) {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.headerTop}>
                <div className={styles.headerTopLinks}>
                    <Link href={`/${templateId}/careers`}>Careers</Link>
                    <Link href={`/${templateId}/press`}>Press Room</Link>
                    <Link href={`/${templateId}/annual-report`}>Annual Report</Link>
                </div>
                <div className={styles.headerContact}>
                    <span>📞 (555) 123-4567</span>
                    <span>📧 info@islamicfoundation.org</span>
                </div>
            </div>

            <div className={styles.headerMain}>
                <Link href={`/${templateId}`} className={styles.logo}>
                    <span className={styles.logoIcon}>IF</span>
                    <div className={styles.logoText}>
                        {siteName}
                        <span className={styles.logoSubtext}>Established 1985</span>
                    </div>
                </Link>

                <nav className={styles.nav}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={`/${templateId}/${link.href}`}
                            className={styles.navLink}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href={`/${templateId}/donate`} className={styles.donateBtn}>
                        Donate Now
                    </Link>
                </nav>

                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <MenuIcon />
                </button>
            </div>

            {mobileOpen && (
                <nav className={styles.navMobile}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={`/${templateId}/${link.href}`}
                            className={styles.navLink}
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}

function MenuIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
    );
}
