import { Play } from 'lucide-react';
import { featuredSeries } from '../../_data';
import styles from '../_shared.module.scss';

interface SeriesSectionProps {
    onSeriesPlay: (seriesId: number) => void;
}

export function SeriesSection({ onSeriesPlay }: SeriesSectionProps) {
    return (
        <section className={styles.seriesSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Featured Series</h2>
                <div className={styles.seriesCarousel}>
                    {featuredSeries.map((series) => (
                        <div key={series.id} className={styles.seriesCard} style={{ backgroundColor: series.color }}>
                            <div className={styles.seriesPattern} />
                            <div className={styles.seriesContent}>
                                <h3 className={styles.seriesTitle}>{series.title}</h3>
                                <span className={styles.seriesParts}>{series.parts} Parts</span>
                            </div>
                            <button
                                className={styles.seriesPlayBtn}
                                onClick={() => onSeriesPlay(series.id)}
                                aria-label={`Play ${series.title}`}
                            >
                                <Play size={20} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
