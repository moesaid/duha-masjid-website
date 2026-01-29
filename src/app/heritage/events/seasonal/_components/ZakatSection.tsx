import { HandCoins, ChevronRight } from 'lucide-react';
import styles from '../RamadanPage.module.scss';

interface ZakatSectionProps {
    fitrCount: number;
    setFitrCount: (count: number) => void;
    fidyaCount: number;
    setFidyaCount: (count: number) => void;
    zakatTotal: number;
}

export function ZakatSection({
    fitrCount,
    setFitrCount,
    fidyaCount,
    setFidyaCount,
    zakatTotal
}: ZakatSectionProps) {
    return (
        <section className={styles.zakatSection}>
            <div className={styles.zakatCard}>
                <div className={styles.zakatIcon}>
                    <HandCoins size={28} />
                </div>
                <h2 className={styles.zakatTitle}>Purify Your Fast</h2>
                <p className={styles.zakatSubtitle}>Zakat al-Fitr & Fidya</p>

                <div className={styles.zakatInputs}>
                    <div className={styles.zakatRow}>
                        <div className={styles.zakatLabel}>
                            Zakat al-Fitr
                            <span>$15 per person</span>
                        </div>
                        <div className={styles.zakatInput}>
                            <span>×</span>
                            <input
                                type="number"
                                min="0"
                                value={fitrCount}
                                onChange={(e) => setFitrCount(Math.max(0, parseInt(e.target.value) || 0))}
                            />
                            <span>persons</span>
                        </div>
                    </div>

                    <div className={styles.zakatRow}>
                        <div className={styles.zakatLabel}>
                            Fidya
                            <span>For those unable to fast - $15/day</span>
                        </div>
                        <div className={styles.zakatInput}>
                            <span>×</span>
                            <input
                                type="number"
                                min="0"
                                value={fidyaCount}
                                onChange={(e) => setFidyaCount(Math.max(0, parseInt(e.target.value) || 0))}
                            />
                            <span>days</span>
                        </div>
                    </div>
                </div>

                <div className={styles.zakatTotal}>
                    Total: ${zakatTotal}
                </div>

                <button className={styles.payNowBtn}>
                    Pay Now
                    <ChevronRight size={18} />
                </button>

                <p className={styles.zakatNote}>
                    Must be paid before Eid Prayer
                </p>
            </div>
        </section>
    );
}
