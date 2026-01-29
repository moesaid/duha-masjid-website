import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import styles from './BackLink.module.scss';

interface BackLinkProps {
    href: string;
    label: string;
    variant?: 'light' | 'dark';
    className?: string;
}

export function BackLink({
    href,
    label,
    variant = 'light',
    className = ''
}: BackLinkProps) {
    return (
        <Link
            href={href}
            className={`${styles.backLink} ${styles[variant]} ${className}`}
        >
            <ArrowLeft size={16} />
            {label}
        </Link>
    );
}

export default BackLink;
