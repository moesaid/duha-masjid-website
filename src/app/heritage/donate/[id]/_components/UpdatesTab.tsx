import { CampaignUpdate } from '../_data';
import styles from '../CampaignPage.module.scss';

interface UpdatesTabProps {
    campaignUpdates: CampaignUpdate[];
}

export function UpdatesTab({ campaignUpdates }: UpdatesTabProps) {
    return (
        <section className={styles.updatesSection}>
            <h2 className={styles.narrativeTitle}>Campaign Updates</h2>
            <p className={styles.infoMessage}>
                Follow our journey as we build this vision together.
            </p>
            <div className={styles.timeline}>
                {campaignUpdates.map((update, idx) => (
                    <div key={idx} className={styles.timelineItem}>
                        <div className={styles.timelineMarker}></div>
                        <div className={styles.timelineContent}>
                            <span className={styles.updateDate}>{update.date}</span>
                            <h3 className={styles.updateTitle}>{update.title}</h3>
                            <div
                                className={styles.richTextContent}
                                dangerouslySetInnerHTML={{ __html: update.htmlContent || `<p>${update.content}</p>` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
