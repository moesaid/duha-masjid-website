import Image from 'next/image';
import styles from './PageHero.module.scss';
import { BackLink } from '../BackLink';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
    arabicText?: string;
    backLink?: { href: string; label: string };
    overlay?: 'dark' | 'gradient' | 'light';
    height?: 'full' | 'medium' | 'short';
    children?: React.ReactNode;
    className?: string;
}

export function PageHero({
    title,
    subtitle,
    backgroundImage = '/images/heritage/mosque-interior.jpg',
    arabicText,
    backLink,
    overlay = 'gradient',
    height = 'medium',
    children,
    className = ''
}: PageHeroProps) {
    return (
        <header className={`${styles.heroSection} ${styles[height]} ${className}`}>
            <Image
                src={backgroundImage}
                alt=""
                fill
                priority
                className={styles.heroImage}
            />
            <div className={`${styles.heroOverlay} ${styles[`overlay${overlay.charAt(0).toUpperCase() + overlay.slice(1)}`]}`} />

            <div className={styles.heroContent}>
                {backLink && (
                    <BackLink href={backLink.href} label={backLink.label} variant="light" />
                )}

                {arabicText && (
                    <p className={styles.arabicText}>{arabicText}</p>
                )}

                <h1 className={styles.heroTitle}>{title}</h1>

                {subtitle && (
                    <p className={styles.heroSubtitle}>{subtitle}</p>
                )}

                {children}
            </div>
        </header>
    );
}

export default PageHero;
