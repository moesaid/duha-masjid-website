import Link from 'next/link';
import { HandCoins, Gift, ChevronRight, Calendar, Globe, Phone, Users } from 'lucide-react';
import { VolunteerRole, ImpactStat } from '../_data';
import styles from '../FoodPantryPage.module.scss';

interface GiveHelpSectionProps {
    wantedItems: string[];
}

export function GiveHelpSection({ wantedItems }: GiveHelpSectionProps) {
    return (
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
    );
}

interface VolunteerSectionProps {
    roles: VolunteerRole[];
}

export function VolunteerSection({ roles }: VolunteerSectionProps) {
    return (
        <section className={styles.volunteerSection}>
            <div className={styles.volunteerContent}>
                <Users size={40} className={styles.volunteerIcon} />
                <h2 className={styles.volunteerTitle}>Join the "Khidmah Crew"</h2>
                <div className={styles.volunteerRoles}>
                    {roles.map((role) => {
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
    );
}

interface ImpactSectionProps {
    stats: ImpactStat[];
}

export function ImpactSection({ stats }: ImpactSectionProps) {
    return (
        <section className={styles.impactSection}>
            <div className={styles.impactGrid}>
                {stats.map((stat) => (
                    <div key={stat.label} className={styles.impactStat}>
                        <span className={styles.impactNumber}>{stat.number}</span>
                        <span className={styles.impactLabel}>{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function FooterSection() {
    return (
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
    );
}
