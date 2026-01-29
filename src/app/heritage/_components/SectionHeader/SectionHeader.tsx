import styles from './SectionHeader.module.scss';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    number?: string;
    alignment?: 'left' | 'center';
    variant?: 'default' | 'gold-border' | 'blueprint' | 'minimal';
    as?: 'h2' | 'h3';
    className?: string;
}

export function SectionHeader({
    title,
    subtitle,
    number,
    alignment = 'left',
    variant = 'default',
    as: Tag = 'h2',
    className = ''
}: SectionHeaderProps) {
    return (
        <div className={`${styles.sectionHeader} ${styles[alignment]} ${styles[variant]} ${className}`}>
            {number && (
                <span className={styles.sectionNumber}>{number}</span>
            )}
            <Tag className={styles.sectionTitle}>{title}</Tag>
            {subtitle && (
                <p className={styles.sectionSubtitle}>{subtitle}</p>
            )}
        </div>
    );
}

export default SectionHeader;
