import Image from 'next/image';
import { Play, Clock } from 'lucide-react';
import { CampaignData } from '../_data';
import styles from '../CampaignPage.module.scss';

interface CampaignHeroProps {
    campaign: CampaignData;
    onPlayVideo: () => void;
}

export function CampaignHero({ campaign, onPlayVideo }: CampaignHeroProps) {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroImageWrapper}>
                <Image
                    src="https://images.unsplash.com/photo-1564769625905-50e93615e769?w=1920&q=80"
                    alt="Minaret Vision"
                    fill
                    priority
                    sizes="100vw"
                />
            </div>
            <div className={styles.heroOverlay} />
            <div className={styles.heroPatternOverlay} />
            <div className={styles.heroContent}>
                <span className={styles.heroBadge}>
                    <Clock size={14} /> {campaign.daysLeft} Days Left
                </span>
                <h1 className={styles.heroTitle}>{campaign.title}</h1>
                <p className={styles.heroSubtitle}>{campaign.subtitle}</p>
                <button className={styles.videoButton} onClick={onPlayVideo}>
                    <div className={styles.playIcon}>
                        <Play size={24} fill="currentColor" />
                    </div>
                    Watch Our Vision
                </button>
            </div>
        </section>
    );
}
