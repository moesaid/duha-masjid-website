import Link from 'next/link';
import { Users, Calendar, Clock, Heart, MessageCircle } from 'lucide-react';
import styles from './SistersSection.module.scss';

export function SistersSection() {
    return (
        <section className={styles.sistersSection}>
            <div className={styles.sistersContent}>
                <div className={styles.sistersIcon}>
                    <Users size={32} />
                </div>

                <h2>The Sisters&apos; Circle</h2>
                <p className={styles.sistersDescription}>
                    A dedicated space for women to learn, discuss, and bond in a supportive
                    environment focused on spiritual growth.
                </p>

                <div className={styles.sistersDetails}>
                    <div className={styles.detailItem}>
                        <Calendar size={18} />
                        <span>Every Wednesday</span>
                    </div>
                    <div className={styles.detailItem}>
                        <Clock size={18} />
                        <span>10:00 AM - 12:00 PM</span>
                    </div>
                    <div className={styles.detailItem}>
                        <Heart size={18} />
                        <span>Childcare Provided</span>
                    </div>
                </div>

                <Link href="#" className={styles.whatsappBtn}>
                    <MessageCircle size={18} />
                    Join the Duha Circle
                </Link>
            </div>
        </section>
    );
}
