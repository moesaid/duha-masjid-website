'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../_styles/Header.module.css';

// Types for navigation structure
interface NavChild {
    label: string;
    url: string;
    highlight?: boolean;
}

interface NavItem {
    label: string;
    url?: string;
    type: 'single_link' | 'dropdown';
    children?: NavChild[];
}

interface NavigationData {
    navigation_bar: NavItem[];
}

interface HeaderProps {
    siteName?: string;
    templateId: string;
}

// Simulated API call for navigation data
async function fetchNavigation(): Promise<NavigationData> {
    // In production, this would be an actual API call
    // For now, we import the JSON directly (simulating API response)
    const response = await import('@/data/navigation.json');
    return response.default as NavigationData;
}

export function Header({ siteName = 'Al-Noor Masjid', templateId }: HeaderProps) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [expandedDropdowns, setExpandedDropdowns] = useState<Set<string>>(new Set());
    const [navItems, setNavItems] = useState<NavItem[]>([]);

    useEffect(() => {
        fetchNavigation().then((data) => {
            setNavItems(data.navigation_bar);
        });
    }, []);

    // Split navigation for left/right distribution (excluding donate)
    const mainNavItems = navItems.filter(
        (item) => !item.children?.some((c) => c.highlight)
    );
    const midPoint = Math.ceil(mainNavItems.length / 2);
    const leftNav = mainNavItems.slice(0, midPoint);
    const rightNav = mainNavItems.slice(midPoint);

    const toggleMobileDropdown = (label: string) => {
        setExpandedDropdowns((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(label)) {
                newSet.delete(label);
            } else {
                newSet.add(label);
            }
            return newSet;
        });
    };

    const renderNavItem = (item: NavItem, position: 'left' | 'right') => {
        if (item.type === 'single_link') {
            return (
                <Link
                    key={item.label}
                    href={`/${templateId}${item.url}`}
                    className={styles.navLink}
                >
                    {item.label}
                </Link>
            );
        }

        return (
            <div key={item.label} className={styles.navItem}>
                <button className={styles.navLink}>
                    {item.label}
                    <span className={styles.dropdownArrow}>▼</span>
                </button>
                <div className={`${styles.dropdown} ${position === 'right' ? styles.dropdownRight : ''}`}>
                    <div className={styles.dropdownHeader}>{item.label}</div>
                    {item.children?.map((child) => (
                        <Link
                            key={child.url}
                            href={`/${templateId}${child.url}`}
                            className={styles.dropdownLink}
                        >
                            {child.label}
                        </Link>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <header className={styles.header}>
            {/* Thin gold border on top */}
            <div className={styles.headerBorderTop} />

            {/* Main green header */}
            <div className={styles.headerMain}>
                <div className={styles.headerInner}>
                    {/* Left Navigation */}
                    <nav className={styles.navLeft}>
                        {leftNav.map((item) => renderNavItem(item, 'left'))}
                    </nav>

                    {/* Centered Logo */}
                    <Link href={`/${templateId}`} className={styles.logo}>
                        <span className={styles.logoMain}>{siteName}</span>
                        <span className={styles.logoTagline}>Est. 1985</span>
                    </Link>

                    {/* Right Navigation + Donate CTA */}
                    <nav className={styles.navRight}>
                        {rightNav.map((item) => renderNavItem(item, 'right'))}
                        <Link href={`/${templateId}/donate`} className={styles.donateBtn}>
                            Donate
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className={styles.mobileMenuBtn}
                        onClick={() => setMobileOpen(true)}
                        aria-label="Open menu"
                    >
                        <MenuIcon />
                    </button>
                </div>
            </div>

            {/* Mobile Slide-out Menu */}
            <div
                className={`${styles.mobileMenuOverlay} ${mobileOpen ? styles.open : ''}`}
                onClick={() => setMobileOpen(false)}
            />
            <nav className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}>
                <div className={styles.mobileMenuHeader}>
                    <span className={styles.mobileMenuTitle}>{siteName}</span>
                    <button
                        className={styles.mobileCloseBtn}
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close menu"
                    >
                        ✕
                    </button>
                </div>

                {navItems.map((item) => (
                    <div key={item.label} className={styles.mobileNavItem}>
                        {item.type === 'single_link' ? (
                            <Link
                                href={`/${templateId}${item.url}`}
                                className={styles.mobileNavLink}
                                onClick={() => setMobileOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <>
                                <button
                                    className={styles.mobileDropdownBtn}
                                    onClick={() => toggleMobileDropdown(item.label)}
                                >
                                    {item.label}
                                    <span>{expandedDropdowns.has(item.label) ? '−' : '+'}</span>
                                </button>
                                <div
                                    className={`${styles.mobileDropdownContent} ${expandedDropdowns.has(item.label) ? styles.open : ''
                                        }`}
                                >
                                    {item.children?.map((child) => (
                                        <Link
                                            key={child.url}
                                            href={`/${templateId}${child.url}`}
                                            className={styles.mobileNavLink}
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                ))}

                <Link
                    href={`/${templateId}/donate`}
                    className={styles.mobileDonateBtn}
                    onClick={() => setMobileOpen(false)}
                >
                    Donate Now
                </Link>
            </nav>
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
