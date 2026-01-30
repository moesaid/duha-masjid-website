'use client';

import { motion } from 'framer-motion';
import styles from '../Contact.module.css';

const fadeIn = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1] as const,
        },
    },
};

// Real location: Islamic Center of New York (example)
// Central Park area for demo purposes
const LOCATION = {
    name: 'Ummah Center',
    address: '123 Community Drive, City, State 12345',
    lat: 40.7580,
    lng: -73.9855,
    zoom: 15,
};

// Google Maps embed URL (no API key required for embed)
const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183!2d${LOCATION.lng}!3d${LOCATION.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzI4LjgiTiA3M8KwNTknMDcuOCJX!5e0!3m2!1sen!2sus!4v1609459200000!5m2!1sen!2sus`;

export function LocationMap() {
    return (
        <motion.div
            className={styles.mapCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeIn}
        >
            {/* Google Maps Embed */}
            <iframe
                src={mapEmbedUrl}
                className={styles.mapIframe}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Masjid Location Map"
                allowFullScreen
            />

            {/* Info Overlay */}
            <div className={styles.mapOverlay}>
                <p className={styles.mapOverlayTitle}>
                    Parking Lot Entrance
                </p>
                <p className={styles.mapOverlayText}>
                    Rear of building, off Community Drive
                </p>
            </div>
        </motion.div>
    );
}
