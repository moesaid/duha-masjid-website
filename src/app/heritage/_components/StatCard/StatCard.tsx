import { LucideIcon } from 'lucide-react';
import styles from './StatCard.module.scss';

interface StatCardProps {
    icon: LucideIcon;
    stat: string;
    label: string;
    variant?: 'light' | 'dark' | 'gold';
    className?: string;
}

export function StatCard({
    icon: Icon,
    stat,
    label,
    variant = 'light',
    className = ''
}: StatCardProps) {
    return (
        <div className={`${styles.statCard} ${styles[variant]} ${className}`}>
            <div className={styles.statIcon}>
                <Icon size={22} />
            </div>
            <div className={styles.statValue}>{stat}</div>
            <div className={styles.statLabel}>{label}</div>
        </div>
    );
}

export default StatCard;
