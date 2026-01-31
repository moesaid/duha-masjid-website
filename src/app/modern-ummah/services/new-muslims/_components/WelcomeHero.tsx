import Link from 'next/link';
import { Button } from '../../../_components';
import styles from './WelcomeHero.module.css';


interface WelcomeHeroProps {
    onOpenShahada: () => void;
}

export function WelcomeHero({ onOpenShahada }: WelcomeHeroProps) {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <span className={styles.arabic}>بِسْمِ اللَّهِ</span>
                <span className={styles.translation}>In the Name of God</span>

                <h1 className={styles.title}>Welcome Home</h1>
                <p className={styles.subtitle}>
                    Your journey to peace begins here. We are honored to walk this path with you.
                </p>

                <div className={styles.actions}>
                    <Button onClick={onOpenShahada} variant="primary" size="lg">
                        Take Your Shahada
                    </Button>
                    <Button href="#connect" variant="secondary" size="lg">
                        Explore Resources
                    </Button>
                </div>
            </div>
        </section>
    );
}
