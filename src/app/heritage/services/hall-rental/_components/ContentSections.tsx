import Image from 'next/image';
import { Users, CheckCircle } from 'lucide-react';
import { Hall, policies } from '../_data';
import styles from '../HallRentalPage.module.scss';

export function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroOverlay} />
            <div className={styles.heroPattern} />
            <div className={styles.heroContent}>
                <span className={styles.heroBadge}>Facility Rentals</span>
                <h1 className={styles.heroTitle}>Book Our Spaces</h1>
                <p className={styles.heroSubtitle}>
                    Select a venue and choose from available dates on the calendar
                </p>
            </div>
        </section>
    );
}

interface HallSelectorProps {
    halls: Hall[];
    selectedHall: Hall;
    onHallSelect: (hall: Hall) => void;
}

export function HallSelector({ halls, selectedHall, onHallSelect }: HallSelectorProps) {
    return (
        <section className={styles.hallsSection}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Available Venues</h2>
                <p className={styles.sectionSubtitle}>Select a venue to view availability and book</p>
            </div>

            <div className={styles.hallsContainer}>
                {/* Hall Tabs */}
                <div className={styles.hallTabs}>
                    {halls.map((hall) => (
                        <button
                            key={hall.id}
                            className={`${styles.hallTab} ${selectedHall.id === hall.id ? styles.active : ''}`}
                            onClick={() => onHallSelect(hall)}
                        >
                            <span className={styles.tabName}>{hall.name}</span>
                            <span className={styles.tabCapacity}>
                                <Users size={14} />
                                Up to {hall.capacity}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Hall Details - Fixed Height Container */}
                <div className={styles.hallDetailsWrapper}>
                    <div className={styles.hallDetails} key={selectedHall.id}>
                        <div className={styles.hallImageWrapper}>
                            <Image
                                src={selectedHall.image}
                                alt={selectedHall.name}
                                fill
                                className={styles.hallImage}
                                priority
                            />
                        </div>

                        <div className={styles.hallInfo}>
                            <h3 className={styles.hallName}>{selectedHall.name}</h3>
                            <p className={styles.hallDescription}>{selectedHall.description}</p>

                            <div className={styles.capacityBadge}>
                                <Users size={18} />
                                <span>Capacity: {selectedHall.capacity} guests</span>
                            </div>

                            <div className={styles.amenitiesList}>
                                <h4>Amenities Included</h4>
                                <ul>
                                    {selectedHall.amenities.map((amenity, idx) => (
                                        <li key={idx}>
                                            <CheckCircle size={16} />
                                            {amenity}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Pricing */}
                            <div className={styles.pricingGrid}>
                                <div className={styles.priceCard}>
                                    <span className={styles.priceLabel}>Weekday</span>
                                    <span className={styles.priceAmount}>${selectedHall.rates.weekday}</span>
                                    <span className={styles.priceUnit}>per day</span>
                                </div>
                                <div className={styles.priceCard}>
                                    <span className={styles.priceLabel}>Weekend</span>
                                    <span className={styles.priceAmount}>${selectedHall.rates.weekend}</span>
                                    <span className={styles.priceUnit}>per day</span>
                                </div>
                                <div className={`${styles.priceCard} ${styles.nonprofit}`}>
                                    <span className={styles.priceLabel}>Non-Profit</span>
                                    <span className={styles.priceAmount}>${selectedHall.rates.nonprofit}</span>
                                    <span className={styles.priceUnit}>per day</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function PoliciesSection() {
    return (
        <section className={styles.policiesSection}>
            <h2 className={styles.policiesTitle}>Rental Policies</h2>
            <ul className={styles.policiesList}>
                {policies.map((policy, idx) => (
                    <li key={idx}>
                        <span className={styles.policyNumber}>{idx + 1}</span>
                        <span className={styles.policyText}>{policy}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
