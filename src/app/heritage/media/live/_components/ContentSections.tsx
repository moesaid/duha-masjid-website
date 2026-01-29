import Image from 'next/image';
import { Video, Clock, ExternalLink, Youtube, Facebook } from 'lucide-react';
import { regularStreams, socialLinks, liveInfo, LiveStream } from '../_data';
import styles from '../LiveStreamPage.module.scss';

export function HeroSection() {
    return (
        <section className={styles.liveHero}>
            <div className={styles.heroBackground}>
                <Image src="/images/heritage/live.jpg" alt="" fill priority className={styles.heroImage} />
                <div className={styles.heroOverlay} />
            </div>
            <div className={styles.heroContent}>
                <div className={styles.liveIcon}><Video size={32} /></div>
                <span className={styles.arabicTitle}>البَثّ المُبَاشِر</span>
                <h1 className={styles.heroTitle}>Live Stream</h1>
                <p className={styles.heroTagline}>Watch our programs from anywhere in the world</p>
            </div>
        </section>
    );
}

export function PlayerSection() {
    return (
        <section className={styles.playerSection}>
            <div className={styles.playerCard}>
                {liveInfo.currentlyLive ? (
                    <div className={styles.liveNow}>
                        <span className={styles.liveIndicator}>● LIVE</span>
                        <div className={styles.playerEmbed}>{/* Embed would go here */}</div>
                    </div>
                ) : (
                    <div className={styles.offlineMessage}>
                        <Video size={48} />
                        <h3>Currently Offline</h3>
                        <p>Next Stream: {liveInfo.nextStream}</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export function ScheduleSection() {
    return (
        <section className={styles.scheduleSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Our Schedule</span>
                <h2 className={styles.sectionTitle}>Regular Streams</h2>
            </div>
            <div className={styles.streamsGrid}>
                {regularStreams.map((stream: LiveStream) => (
                    <div key={stream.id} className={styles.streamCard}>
                        <h3>{stream.title}</h3>
                        <span className={styles.time}><Clock size={16} />{stream.time}</span>
                        <span className={styles.platform}>{stream.platform}</span>
                        <a href={stream.url} target="_blank" rel="noopener" className={styles.watchBtn}>
                            Watch <ExternalLink size={16} />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function SocialSection() {
    return (
        <section className={styles.socialSection}>
            <h3>Follow Us</h3>
            <div className={styles.socialLinks}>
                <a href={socialLinks.youtube} target="_blank" rel="noopener" className={styles.socialLink}>
                    <Youtube size={24} /><span>YouTube</span>
                </a>
                <a href={socialLinks.facebook} target="_blank" rel="noopener" className={styles.socialLink}>
                    <Facebook size={24} /><span>Facebook</span>
                </a>
            </div>
        </section>
    );
}
