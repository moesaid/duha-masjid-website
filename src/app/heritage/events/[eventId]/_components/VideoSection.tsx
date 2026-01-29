'use client';

import { Play } from 'lucide-react';
import { UseVideoPlayerReturn } from '../_hooks';
import styles from '../EventPage.module.scss';

interface VideoSectionProps {
    videoUrl: string;
    posterUrl: string;
    player: UseVideoPlayerReturn;
}

export function VideoSection({ videoUrl, posterUrl, player }: VideoSectionProps) {
    return (
        <section className={styles.videoSection}>
            <div className={styles.videoContainer}>
                <div className={styles.videoHeader}>
                    <h3 className={styles.videoTitle}>Watch the Invitation</h3>
                    <p className={styles.videoSubtitle}>A glimpse into what awaits you</p>
                </div>
                <div className={styles.videoWrapper}>
                    {!player.isPlaying ? (
                        <div
                            className={styles.videoThumbnail}
                            onClick={player.play}
                            style={{ backgroundImage: `url(${posterUrl})` }}
                        >
                            <div className={styles.playButton}>
                                <Play size={40} />
                            </div>
                            <div className={styles.thumbnailOverlay} />
                        </div>
                    ) : (
                        <iframe
                            src={`${videoUrl}?autoplay=1`}
                            title="Event Promo Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className={styles.videoIframe}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
