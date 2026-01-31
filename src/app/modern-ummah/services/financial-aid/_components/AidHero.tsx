import Link from 'next/link';
import { Button } from '../../../_components';
import { HandCoins, HandHeart, ArrowRight } from 'lucide-react';
import styles from './AidHero.module.css';

export function AidHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.intro}>
                    <span className={styles.arabic}>خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ</span>
                    <span className={styles.reference}>Quran 9:103</span>
                </div>

                <h1 className={styles.title}>Zakat & Financial Aid</h1>
                <p className={styles.subtitle}>
                    Purifying wealth through charity, and supporting our community with dignity.
                    Whether you are giving or receiving, we are here to facilitate the process.
                </p>

                <div className={styles.actions}>
                    <div className={styles.actions}>
                        <Button href="#calculator" variant="primary">
                            <HandCoins size={18} />
                            Calculate & Pay Zakat
                        </Button>
                        <Button href="#assistance" variant="outline">
                            <HandHeart size={18} />
                            Apply for Aid
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
