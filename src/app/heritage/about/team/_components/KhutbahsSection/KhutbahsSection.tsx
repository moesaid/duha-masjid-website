import Image from 'next/image';
import Link from 'next/link';
import { Play, ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { Khutbah } from '../../_data';
import styles from './KhutbahsSection.module.scss';

interface KhutbahsSectionProps {
    khutbahs: Khutbah[];
    sliderRef: React.RefObject<HTMLDivElement | null>;
    scrollSlider: (direction: 'left' | 'right') => void;
}

export function KhutbahsSection({ khutbahs, sliderRef, scrollSlider }: KhutbahsSectionProps) {
    return (
        <section className={styles.khutbahsSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Recent Sermons</span>
                <h2 className={styles.sectionTitle}>Friday Khutbahs</h2>
            </div>

            <div className={styles.sliderContainer}>
                <button
                    className={`${styles.sliderButton} ${styles.sliderPrev}`}
                    onClick={() => scrollSlider('left')}
                    aria-label="Previous"
                >
                    <ChevronLeft size={24} />
                </button>

                <div className={styles.khutbahsSlider} ref={sliderRef}>
                    {khutbahs.map((khutbah, index) => (
                        <Link
                            href="/heritage/media/khutbahs"
                            key={index}
                            className={styles.khutbahCard}
                        >
                            <div className={styles.thumbnailWrapper}>
                                <Image
                                    src={khutbah.thumbnail}
                                    alt={khutbah.title}
                                    fill
                                    className={styles.khutbahThumbnail}
                                />
                                <div className={styles.playOverlay}>
                                    <Play className={styles.playIcon} size={32} />
                                </div>
                                <span className={styles.duration}>{khutbah.duration}</span>
                            </div>
                            <div className={styles.khutbahInfo}>
                                <h3 className={styles.khutbahTitle}>{khutbah.title}</h3>
                                <span className={styles.khutbahSpeaker}>{khutbah.speaker}</span>
                                <span className={styles.khutbahDate}>{khutbah.date}</span>
                            </div>
                        </Link>
                    ))}
                </div>

                <button
                    className={`${styles.sliderButton} ${styles.sliderNext}`}
                    onClick={() => scrollSlider('right')}
                    aria-label="Next"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className={styles.viewAllLink}>
                <Link href="/heritage/media/khutbahs" className={styles.viewAllButton}>
                    <Users size={16} />
                    View All Khutbahs
                </Link>
            </div>
        </section>
    );
}
