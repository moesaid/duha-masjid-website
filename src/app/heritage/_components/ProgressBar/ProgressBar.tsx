'use client';

import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
    value: number; // 0-100
    showLabel?: boolean;
    variant?: 'default' | 'gold' | 'emerald' | 'blueprint';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export function ProgressBar({
    value,
    showLabel = false,
    variant = 'default',
    size = 'md',
    className = ''
}: ProgressBarProps) {
    const clampedValue = Math.min(100, Math.max(0, value));

    return (
        <div className={`${styles.progressContainer} ${styles[size]} ${className}`}>
            <div className={`${styles.progressBar} ${styles[variant]}`}>
                <div
                    className={styles.progressFill}
                    style={{ width: `${clampedValue}%` }}
                />
            </div>
            {showLabel && (
                <span className={styles.progressLabel}>{clampedValue}%</span>
            )}
        </div>
    );
}

export default ProgressBar;
