import { Ticket, User, Users, Check } from 'lucide-react';
import { EventPricing } from '../_data';
import styles from '../EventPage.module.scss';

interface PricingSectionProps {
    pricing: EventPricing;
    onReserve: () => void;
}

export function PricingSection({ pricing, onReserve }: PricingSectionProps) {
    return (
        <section id="tickets" className={styles.pricingSection}>
            <div className={styles.pricingContainer}>
                <h3 className={styles.pricingSectionTitle}>
                    <Ticket size={24} />
                    Ticket Pricing
                </h3>
                <p className={styles.pricingSectionSubtitle}>
                    Reserve your seats for this special evening
                </p>

                {/* Single Pricing Card */}
                <div className={styles.pricingCard}>
                    <div className={styles.pricingRow}>
                        <div className={styles.pricingLabel}>
                            <User size={18} />
                            <span>Adult (13+)</span>
                        </div>
                        <span className={styles.pricingAmount}>${pricing.adult}</span>
                    </div>
                    <div className={styles.pricingRow}>
                        <div className={styles.pricingLabel}>
                            <Users size={18} />
                            <span>Child (5-12)</span>
                        </div>
                        <span className={styles.pricingAmount}>${pricing.child}</span>
                    </div>
                    <p className={styles.pricingNote}>Children under 5 are free</p>
                    <div className={styles.pricingDivider} />
                    <ul className={styles.pricingIncludes}>
                        <li><Check size={14} /> Gourmet halal dinner</li>
                        <li><Check size={14} /> Reserved seating</li>
                        <li><Check size={14} /> Event program & gift</li>
                        <li><Check size={14} /> Complimentary valet parking</li>
                    </ul>
                </div>

                <button className={styles.reserveMainBtn} onClick={onReserve}>
                    <Ticket size={18} />
                    Reserve Your Seats Now
                </button>
            </div>
        </section>
    );
}
