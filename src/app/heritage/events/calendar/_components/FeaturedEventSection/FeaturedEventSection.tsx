'use client';

import { Calendar, Clock, MapPin, Ticket } from 'lucide-react';
import { featuredEvent } from '../../_data';
import styles from './FeaturedEventSection.module.scss';

export function FeaturedEventSection() {
    return (
        <section className={styles.featuredSection}>
            <div className={styles.featuredContent}>
                <span className={styles.featuredLabel}>Featured Event</span>
                <h3>{featuredEvent.title}</h3>
                <p className={styles.featuredDescription}>{featuredEvent.description}</p>

                <div className={styles.featuredMeta}>
                    <div className={styles.metaItem}>
                        <Calendar size={16} />
                        <span>{featuredEvent.date}</span>
                    </div>
                    <div className={styles.metaItem}>
                        <Clock size={16} />
                        <span>{featuredEvent.time}</span>
                    </div>
                    <div className={styles.metaItem}>
                        <MapPin size={16} />
                        <span>{featuredEvent.location}</span>
                    </div>
                </div>

                <button className={styles.ticketBtn}>
                    <Ticket size={16} />
                    Get Tickets - {featuredEvent.ticketPrice}
                </button>
            </div>
        </section>
    );
}
