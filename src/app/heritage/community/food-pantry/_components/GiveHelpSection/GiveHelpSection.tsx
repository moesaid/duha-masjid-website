import Link from 'next/link';
import { HandCoins, Gift, ChevronRight } from 'lucide-react';
import styles from './GiveHelpSection.module.scss';

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
