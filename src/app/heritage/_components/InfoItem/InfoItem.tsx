import { LucideIcon } from 'lucide-react';
import styles from './InfoItem.module.scss';

interface InfoItemProps {
    icon: LucideIcon;
    label: string;
    value: string | React.ReactNode;
    href?: string;
    className?: string;
}

export function InfoItem({
    icon: Icon,
    label,
    value,
    href,
    className = ''
}: InfoItemProps) {
    const ValueContent = () => {
        if (href) {
            return (
                <a href={href} className={styles.infoLink}>
                    {value}
                </a>
            );
        }
        return <span className={styles.infoValue}>{value}</span>;
    };

    return (
        <div className={`${styles.infoItem} ${className}`}>
            <Icon size={18} className={styles.infoIcon} />
            <div className={styles.infoContent}>
                <span className={styles.infoLabel}>{label}</span>
                <ValueContent />
            </div>
        </div>
    );
}

export default InfoItem;
