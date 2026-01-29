import Link from 'next/link';
import { ExternalLink, Mic } from 'lucide-react';
import styles from '../_shared.module.scss';

export function SubscribeSection() {
    return (
        <section className={styles.subscribeSection}>
            <div className={styles.container}>
                <div className={styles.subscribeContent}>
                    <div className={styles.iconWrapper}>
                        <Mic size={40} className={styles.subscribeIcon} />
                    </div>
                    <h2 className={styles.subscribeTitle}>Take the Khutbah with You</h2>
                    <p className={styles.subscribeSubtitle}>Subscribe to never miss a Friday sermon</p>
                    <div className={styles.podcastBadges}>
                        <Link href="#" className={styles.podcastBadge}>
                            <div className={styles.badgeIcon}>
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" /></svg>
                            </div>
                            <span>Apple Podcasts</span>
                        </Link>
                        <Link href="#" className={styles.podcastBadge}>
                            <div className={styles.badgeIcon}>
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" /></svg>
                            </div>
                            <span>Spotify</span>
                        </Link>
                        <Link href="#" className={styles.podcastBadge}>
                            <div className={styles.badgeIcon}>
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                            </div>
                            <span>Google Podcasts</span>
                        </Link>
                    </div>
                    <Link href="#" className={styles.rssLink}>
                        <ExternalLink size={14} />
                        Subscribe to our RSS Feed
                    </Link>
                </div>
            </div>
        </section>
    );
}
