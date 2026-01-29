import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Committee } from '../../_data';
import styles from './HeroSection.module.scss';

interface HeroSectionProps {
    committee: Committee;
}

export function HeroSection({ committee }: HeroSectionProps) {
    return (
        <header className={styles.heroSection}>
            <div className={styles.heroOverlay} />
            <Image
                src={committee.image}
                alt={committee.name}
                fill
                className={styles.heroImage}
                priority
            />
            <div className={styles.heroContent}>
                <Link href="/heritage/about/committees" className={styles.backLink}>
                    <ArrowLeft size={18} />
                    All Committees
                </Link>
                <h1 className={styles.heroTitle}>{committee.name}</h1>
                <p className={styles.heroSubtitle}>{committee.description}</p>
            </div>
        </header>
    );
}
