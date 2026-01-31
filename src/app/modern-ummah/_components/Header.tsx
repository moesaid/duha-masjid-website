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

// Consolidated navigation categories for cleaner navbar
interface MegaMenuCategory {
    label: string;
    description: string;
    icon: React.ReactNode;
    items: NavItem[];
}

// Fetch navigation data from shared JSON
async function fetchNavigation(): Promise<NavigationData> {
    const response = await import('@/data/navigation.json');
    return response.default as NavigationData;
}

export function Header({ siteName = 'Ummah Center', templateId }: HeaderProps) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [expandedDropdowns, setExpandedDropdowns] = useState<Set<string>>(new Set());
    const [navItems, setNavItems] = useState<NavItem[]>([]);

    useEffect(() => {
        fetchNavigation().then((data) => {
            setNavItems(data.navigation_bar);
        });
    }, []);

    // Consolidate into 3 main categories (Home and App are standalone)
    const getMegaCategories = (): MegaMenuCategory[] => {
        const worship = navItems.filter(item =>
            ['Services'].includes(item.label)
        );
        const learn = navItems.filter(item =>
            ['Education', 'Media'].includes(item.label)
        );
        const connect = navItems.filter(item =>
            ['Community', 'Events'].includes(item.label)
        );
        const about = navItems.filter(item =>
            ['About Us'].includes(item.label)
        );

        return [
            {
                label: 'Worship',
                description: 'Prayer times, services & rituals',
                icon: <MosqueSmallIcon />,
                items: worship
            },
            {
                label: 'Learn',
                description: 'Education, classes & media',
                icon: <BookIcon />,
                items: learn
            },
            {
                label: 'Connect',
                description: 'Community, events & youth',
                icon: <CommunityIcon />,
                items: connect
            },
            {
                label: 'About',
                description: 'Our mission & leadership',
                icon: <InfoIcon />,
                items: about
            },
        ];
    };

    const megaCategories = getMegaCategories();

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

    const handleMouseEnter = (label: string) => {
        setActiveMenu(label);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    return (
        <header className={styles.header}>
            {/* Islamic geometric pattern accent */}
            <div className={styles.headerAccent} />

            <div className={styles.headerInner}>
                {/* Left: Logo */}
                <Link href={`/${templateId}`} className={styles.logo}>
                    <span className={styles.logoIcon}>
                        <MosqueIcon />
                    </span>
                    <span className={styles.logoText}>{siteName}</span>
                </Link>

                {/* Center: Mega Menu Nav */}
                <nav className={styles.primaryNav} onMouseLeave={handleMouseLeave}>
                    {/* Standalone Home link */}
                    <Link href={`/${templateId}`} className={styles.navLink}>
                        Home
                    </Link>

                    {megaCategories.map((category) => (
                        <div
                            key={category.label}
                            className={styles.navItem}
                            onMouseEnter={() => handleMouseEnter(category.label)}
                        >
                            <button className={`${styles.navLink} ${activeMenu === category.label ? styles.active : ''}`}>
                                {category.label}
                                <ChevronIcon />
                            </button>

                            {/* Mega Dropdown */}
                            <div className={`${styles.megaDropdown} ${activeMenu === category.label ? styles.open : ''}`}>
                                <div className={styles.megaHeader}>
                                    <span className={styles.megaIcon}>{category.icon}</span>
                                    <div>
                                        <span className={styles.megaTitle}>{category.label}</span>
                                        <span className={styles.megaDesc}>{category.description}</span>
                                    </div>
                                </div>
                                <div className={styles.megaGrid}>
                                    {category.items.map((item) => (
                                        <div key={item.label} className={styles.megaSection}>
                                            {item.type === 'single_link' ? (
                                                <Link
                                                    href={`/${templateId}${item.url}`}
                                                    className={styles.megaSectionLink}
                                                >
                                                    {item.label}
                                                </Link>
                                            ) : (
                                                <>
                                                    <span className={styles.megaSectionTitle}>{item.label}</span>
                                                    <div className={styles.megaLinks}>
                                                        {item.children?.map((child) => (
                                                            <Link
                                                                key={child.url}
                                                                href={`/${templateId}${child.url}`}
                                                                className={styles.megaLink}
                                                            >
                                                                {child.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </nav>

                {/* Right: CTAs */}
                <div className={styles.rightSection}>
                    <Link href={`/${templateId}/app`} className={styles.secondaryBtn}>
                        App
                    </Link>
                    <Link href={`/${templateId}/contact`} className={styles.secondaryBtn}>
                        Contact
                    </Link>
                    <Link href={`/${templateId}/donate`} className={styles.primaryBtn}>
                        <HeartIcon />
                        Donate
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setMobileOpen(true)}
                    aria-label="Open menu"
                >
                    <MenuIcon />
                </button>
            </div>

            {/* Mobile Overlay */}
            <div
                className={`${styles.mobileOverlay} ${mobileOpen ? styles.open : ''}`}
                onClick={() => setMobileOpen(false)}
            />

            {/* Mobile Slide-out Menu */}
            <nav className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}>
                <div className={styles.mobileHeader}>
                    <Link href={`/${templateId}`} className={styles.mobileLogo} onClick={() => setMobileOpen(false)}>
                        <span className={styles.logoIcon}>
                            <MosqueIcon />
                        </span>
                        <span className={styles.logoText}>{siteName}</span>
                    </Link>
                    <button
                        className={styles.mobileCloseBtn}
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close menu"
                    >
                        <CloseIcon />
                    </button>
                </div>

                <div className={styles.mobileNav}>
                    {/* Standalone Home link */}
                    <Link
                        href={`/${templateId}`}
                        className={styles.mobileHomeLink}
                        onClick={() => setMobileOpen(false)}
                    >
                        <span className={styles.mobileCategoryIcon}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </span>
                        Home
                    </Link>

                    {megaCategories.map((category) => (
                        <div key={category.label} className={styles.mobileCategory}>
                            <button
                                className={styles.mobileCategoryBtn}
                                onClick={() => toggleMobileDropdown(category.label)}
                            >
                                <span className={styles.mobileCategoryIcon}>{category.icon}</span>
                                <span className={styles.mobileCategoryLabel}>{category.label}</span>
                                <ChevronIcon className={expandedDropdowns.has(category.label) ? styles.rotated : ''} />
                            </button>

                            <div className={`${styles.mobileCategoryContent} ${expandedDropdowns.has(category.label) ? styles.open : ''}`}>
                                {category.items.map((item) => (
                                    <div key={item.label} className={styles.mobileSection}>
                                        {item.type === 'single_link' ? (
                                            <Link
                                                href={`/${templateId}${item.url}`}
                                                className={styles.mobileSectionLink}
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        ) : (
                                            <>
                                                <span className={styles.mobileSectionTitle}>{item.label}</span>
                                                {item.children?.map((child) => (
                                                    <Link
                                                        key={child.url}
                                                        href={`/${templateId}${child.url}`}
                                                        className={styles.mobileLink}
                                                        onClick={() => setMobileOpen(false)}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.mobileCtas}>
                    <Link
                        href={`/${templateId}/app`}
                        className={styles.mobileSecondaryBtn}
                        onClick={() => setMobileOpen(false)}
                    >
                        Get the App
                    </Link>
                    <Link
                        href={`/${templateId}/donate`}
                        className={styles.mobilePrimaryBtn}
                        onClick={() => setMobileOpen(false)}
                    >
                        <HeartIcon />
                        Donate Now
                    </Link>
                </div>
            </nav>
        </header>
    );
}

// Islamic-inspired icon components
function MosqueIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3C8 3 5 6 5 10v11h14V10c0-4-3-7-7-7z" />
            <path d="M12 3v3" />
            <circle cx="12" cy="2" r="1" fill="currentColor" stroke="none" />
            <path d="M9 21v-4a3 3 0 0 1 6 0v4" />
            <path d="M5 14h14" />
        </svg>
    );
}

function MosqueSmallIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 4C9 4 6 7 6 10v10h12V10c0-3-3-6-6-6z" />
            <circle cx="12" cy="3" r="1" fill="currentColor" stroke="none" />
            <path d="M10 20v-3a2 2 0 0 1 4 0v3" />
        </svg>
    );
}

function BookIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            <path d="M8 7h8M8 11h6" />
        </svg>
    );
}

function CommunityIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="7" r="3" />
            <circle cx="17" cy="9" r="2.5" />
            <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
            <path d="M17 14a3 3 0 0 1 3 3v4" />
        </svg>
    );
}

function InfoIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
        </svg>
    );
}

function HeartIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
    );
}

function ChevronIcon({ className }: { className?: string }) {
    return (
        <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function MenuIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M5 5l10 10M15 5L5 15" />
        </svg>
    );
}
