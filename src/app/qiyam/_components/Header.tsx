'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../_styles/Header.module.css';

const navLinks = [
    { href: '/qiyam/about', label: 'About' },
    { href: '/qiyam/prayer-times', label: 'Prayer Times' },
    { href: '/qiyam/programs', label: 'Programs' },
    { href: '/qiyam/events', label: 'Events' },
    { href: '/qiyam/contact', label: 'Contact' },
];

export function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.headerGlass}>
                <Link href="/qiyam" className={styles.logo}>
                    <span className={styles.logoIcon}>☾</span>
                    <span className={styles.logoText}>The Qiyam</span>
                </Link>

                <nav className={styles.nav}>
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className={styles.navLink}>
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/qiyam/donate" className={styles.donateBtn}>
                        Support Us
                    </Link>
                </nav>

                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? '✕' : '☰'}
                </button>
            </div>

            {mobileOpen && (
                <nav className={styles.navMobile}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={styles.navLink}
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/qiyam/donate"
                        className={styles.donateBtn}
                        onClick={() => setMobileOpen(false)}
                    >
                        Support Us
                    </Link>
                </nav>
            )}
        </header>
    );
}
