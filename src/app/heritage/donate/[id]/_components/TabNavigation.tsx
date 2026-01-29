import { CampaignUpdate } from '../_data';
import styles from '../CampaignPage.module.scss';

interface TabNavigationProps {
    activeTab: 'info' | 'updates';
    setActiveTab: (tab: 'info' | 'updates') => void;
    updatesCount: number;
}

export function TabNavigation({ activeTab, setActiveTab, updatesCount }: TabNavigationProps) {
    return (
        <nav className={styles.tabNavigation}>
            <div className={styles.tabContainer}>
                <button
                    className={`${styles.tabButton} ${activeTab === 'info' ? styles.active : ''}`}
                    onClick={() => setActiveTab('info')}
                >
                    Campaign Story
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'updates' ? styles.active : ''}`}
                    onClick={() => setActiveTab('updates')}
                >
                    Updates <span style={{ fontSize: '0.8em', opacity: 0.7 }}>({updatesCount})</span>
                </button>
            </div>
        </nav>
    );
}
