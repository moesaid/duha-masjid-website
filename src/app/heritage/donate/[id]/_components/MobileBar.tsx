import { Heart } from 'lucide-react';
import { CampaignData, formatCurrency } from '../_data';
import styles from '../CampaignPage.module.scss';

interface MobileBarProps {
    campaign: CampaignData;
}

export function MobileBar({ campaign }: MobileBarProps) {
    return (
        <div className={styles.mobileBar}>
            <div className={styles.mobileProgress}>
                <span className={styles.mobileRaised}>{formatCurrency(campaign.raised)}</span>
                <span className={styles.mobileGoal}>of {formatCurrency(campaign.goal)}</span>
            </div>
            <button className={styles.mobileDonateBtn}>
                <Heart size={18} />
                Donate Now
            </button>
        </div>
    );
}
