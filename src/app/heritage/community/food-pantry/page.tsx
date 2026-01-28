// Food Pantry Page - HERITAGE ALIGNED
// Design: Harvest Gold + Wheat + Sage Green (Earthy abundance)
// Vibe: Generous, Organized, Dignified
'use client';

import Link from 'next/link';
import {
    Clock,
    MapPin,
    CheckCircle,
    Car,
    Wheat,
    Apple,
    Beef,
    BadgeCheck,
    HandCoins,
    Gift,
    Users,
    Calendar,
    Box,
    ChevronRight,
    Phone,
    Globe,
    Heart
} from 'lucide-react';
import styles from './FoodPantryPage.module.scss';

// ========================================
// DATA
// ========================================
const offerings = [
    {
        icon: Wheat,
        title: 'Staples',
        description: 'Rice, Flour, Cooking Oil, Sugar, Lentils, and other pantry essentials.'
    },
    {
        icon: Apple,
        title: 'Fresh Produce',
        description: 'Seasonal fruits and vegetables sourced from local farms and donations.'
    },
    {
        icon: Beef,
        title: 'Halal Meat',
        description: "Zabiha chicken and meat when available, ensuring our community's dietary needs are met."
    }
];

const wantedItems = [
    'Canned Tuna or Salmon',
    'Peanut Butter',
    'Pasta & Rice',
    'Cooking Oil',
    'Canned Beans'
];

const impactStats = [
    { number: '1,200', label: 'Families Served Monthly' },
    { number: '50,000', label: 'lbs Food Distributed' },
    { number: '100%', label: 'Volunteer Run' }
];

const volunteerRoles = [
    { icon: Box, label: 'Packing Boxes (Fridays, 6 PM)' },
    { icon: Users, label: 'Distribution (Saturdays, 8:30 AM)' }
];

// ========================================
// COMPONENT
// ========================================
export default function FoodPantryPage() {
    return (
        <main className={styles.foodPantryPage}>
            {/* ========================================
                1. SUSTENANCE HERO
            ======================================== */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <p className={styles.heroCalligraphy}>
                        &ldquo;He is not a believer whose stomach is filled while the neighbor to his side goes hungry.&rdquo;
                    </p>
                    <span className={styles.heroRef}>— Prophetic Hadith (Authenticated)</span>

                    <h1 className={styles.heroTitle}>The Community Pantry</h1>
                    <p className={styles.heroSubtitle}>
                        Providing fresh, halal, and nutritious food to our neighbors in need, regardless of faith.
                    </p>
                </div>
            </section>

            {/* ========================================
                2. GET HELP INFO CARD
            ======================================== */}
            <section className={styles.getHelpSection}>
                <div className={styles.infoCard}>
                    <div className={styles.infoCardHeader}>
                        <Heart size={28} />
                        <h2>Get Food Assistance</h2>
                    </div>

                    <div className={styles.infoGrid}>
                        <div className={styles.infoItem}>
                            <Clock size={22} />
                            <div>
                                <span className={styles.infoLabel}>Distribution Hours</span>
                                <span className={styles.infoValue}>
                                    Every Saturday<br />9:00 AM – 12:00 PM
                                </span>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <MapPin size={22} />
                            <div>
                                <span className={styles.infoLabel}>Location</span>
                                <span className={styles.infoValue}>
                                    Community Center<br />Rear Entrance (Door D)
                                </span>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <CheckCircle size={22} />
                            <div>
                                <span className={styles.infoLabel}>Requirements</span>
                                <span className={styles.infoValue}>
                                    No ID Required<br />All neighbors welcome
                                </span>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <Car size={22} />
                            <div>
                                <span className={styles.infoLabel}>Drive-Thru</span>
                                <span className={styles.infoValue}>
                                    Stay in your car<br />Volunteers load your trunk
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.infoNote}>
                        <CheckCircle size={18} />
                        <span>Your dignity is paramount. No questions asked.</span>
                    </div>
                </div>
            </section>

            {/* ========================================
                3. WHAT WE PROVIDE
            ======================================== */}
            <section className={styles.offeringsSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>What We Provide</span>
                    <h2 className={styles.sectionTitle}>Nourishing Our Neighbors</h2>
                </div>

                <div className={styles.offeringsGrid}>
                    {offerings.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <div key={item.title} className={styles.offeringCard}>
                                <div className={styles.offeringIcon}>
                                    <IconComponent size={28} />
                                </div>
                                <h3 className={styles.offeringTitle}>{item.title}</h3>
                                <p className={styles.offeringDesc}>{item.description}</p>
                            </div>
                        );
                    })}
                </div>

                <div style={{ textAlign: 'center' }}>
                    <span className={styles.halalBadge}>
                        <BadgeCheck size={18} />
                        100% Halal Certified
                    </span>
                </div>
            </section>

            {/* ========================================
                4. GIVE HELP (Dual Action)
            ======================================== */}
            <section className={styles.giveHelpSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Give Help</span>
                    <h2 className={styles.sectionTitle}>Ways to Support</h2>
                </div>

                <div className={styles.giveHelpGrid}>
                    {/* Donate Money */}
                    <div className={styles.giveCard}>
                        <div className={styles.giveIcon}>
                            <HandCoins size={32} />
                        </div>
                        <h3 className={styles.giveTitle}>Donate Money</h3>
                        <p className={styles.giveHighlight}>
                            Your $50 donation provides a family with food for a week.
                        </p>
                        <p className={styles.giveText}>
                            100% of pantry donations go directly to purchasing fresh produce and halal meat for our neighbors.
                        </p>
                        <Link href="/heritage/join/donate?fund=pantry" className={styles.donateBtn}>
                            Donate to Pantry Fund
                            <ChevronRight size={18} />
                        </Link>
                    </div>

                    {/* Donate Food */}
                    <div className={styles.giveCard}>
                        <div className={styles.giveIcon}>
                            <Gift size={32} />
                        </div>
                        <h3 className={styles.giveTitle}>Donate Food</h3>
                        <p className={styles.giveText}>
                            Drop off non-perishable items in the lobby donation bin during masjid hours.
                        </p>
                        <span className={styles.wantedLabel}>Most Wanted Items:</span>
                        <ul className={styles.wantedList}>
                            {wantedItems.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ========================================
                5. VOLUNTEER BANNER
            ======================================== */}
            <section className={styles.volunteerSection}>
                <div className={styles.volunteerContent}>
                    <Users size={40} className={styles.volunteerIcon} />
                    <h2 className={styles.volunteerTitle}>Join the "Khidmah Crew"</h2>
                    <div className={styles.volunteerRoles}>
                        {volunteerRoles.map((role) => {
                            const IconComponent = role.icon;
                            return (
                                <span key={role.label} className={styles.roleTag}>
                                    <IconComponent size={16} />
                                    {role.label}
                                </span>
                            );
                        })}
                    </div>
                    <Link href="/heritage/join/volunteer" className={styles.volunteerBtn}>
                        <Calendar size={18} />
                        Sign Up to Volunteer
                    </Link>
                </div>
            </section>

            {/* ========================================
                6. IMPACT STATS
            ======================================== */}
            <section className={styles.impactSection}>
                <div className={styles.impactGrid}>
                    {impactStats.map((stat) => (
                        <div key={stat.label} className={styles.impactStat}>
                            <span className={styles.impactNumber}>{stat.number}</span>
                            <span className={styles.impactLabel}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========================================
                7. FOOTER INFO
            ======================================== */}
            <section className={styles.footerSection}>
                <div className={styles.footerContent}>
                    <div className={styles.footerItem}>
                        <Globe size={22} />
                        <div>
                            <span className={styles.footerLabel}>Service Area</span>
                            <span className={styles.footerValue}>
                                We serve all zip codes in Springfield County
                            </span>
                        </div>
                    </div>

                    <div className={styles.footerItem}>
                        <Phone size={22} />
                        <div>
                            <span className={styles.footerLabel}>Emergency Assistance</span>
                            <span className={styles.footerValue}>
                                For help outside of distribution hours, call <a href="tel:211">211</a>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
