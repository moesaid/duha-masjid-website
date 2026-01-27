'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from '../_styles/Header.module.css';

interface HeaderProps {
    siteName?: string;
    templateId: string;
}

const navLinks = [
    { label: 'Home', href: '' },
    { label: 'About', href: 'about' },
    { label: 'Programs', href: 'programs' },
    { label: 'Events', href: 'events' },
    { label: 'Youth', href: 'youth' },
    { label: 'Contact', href: 'contact' },
];

export function Header({ siteName = 'Community Hub', templateId }: HeaderProps) {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <Link href={`/${templateId}`} className={styles.logo}>
                    <span className={styles.logoIcon}>🕌</span>
                    <div className={styles.logoText}>
                        {siteName}
                        <span className={styles.logoTagline}>Islamic Center</span>
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
                        💚 Donate
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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
    );
}
