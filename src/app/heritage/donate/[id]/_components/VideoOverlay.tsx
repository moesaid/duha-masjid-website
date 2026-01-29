import styles from '../CampaignPage.module.scss';

interface VideoOverlayProps {
    showVideo: boolean;
    onClose: () => void;
}

export function VideoOverlay({ showVideo, onClose }: VideoOverlayProps) {
    if (!showVideo) return null;

    return (
        <div className={styles.videoOverlay} onClick={onClose}>
            <div className={styles.videoContainer} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeVideo} onClick={onClose}>×</button>
                <iframe
                    className={styles.videoIframe}
                    src="https://www.youtube.com/embed/w_LMa8-ZUwM?autoplay=1&rel=0"
                    title="Campaign Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
}
