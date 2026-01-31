import Link from 'next/link';
import { Button } from '../../../_components';
import { Sun, Heart } from 'lucide-react';
import styles from './ShahadaGuide.module.css';


interface ShahadaGuideProps {
    onOpenShahada: () => void;
}

export function ShahadaGuide({ onOpenShahada }: ShahadaGuideProps) {
    return (
        <section id="shahada" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.header}>
                        <Sun size={24} color="var(--color-primary)" />
                        <span className={styles.headerTitle}>The Declaration of Faith</span>
                    </div>

                    <div className={styles.arabic}>
                        أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ
                    </div>

                    <p className={styles.transliteration}>
                        "Ash-hadu an la ilaha illa Allah, wa ash-hadu anna Muhammadan Rasul Allah"
                    </p>

                    <p className={styles.translation}>
                        "I bear witness that there is no deity but Allah, and I bear witness that Muhammad is His Messenger."
                    </p>

                    <Button onClick={onOpenShahada} variant="primary" className={styles.cta}>
                        <Heart size={18} />
                        I want to take my Shahada
                    </Button>
                </div>

                <p className={styles.note}>
                    Taking the Shahada is a beautiful, life-changing moment. Our Imam will guide you through this declaration of faith with care and reverence. There is no judgment here—only welcome.
                </p>
            </div>
        </section>
    );
}
