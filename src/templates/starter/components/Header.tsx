import Link from 'next/link';
import styles from '../styles/Header.module.css';

interface HeaderProps {
    templateId: string;
    siteName?: string;
}

export function Header({ templateId, siteName = 'Site Name' }: HeaderProps) {
    return (
        <header className={styles.header}>
            <Link href={`/${templateId}`} className={styles.logo}>
                {siteName}
            </Link>
            <nav className={styles.nav}>
                <Link href={`/${templateId}`} className={styles.navLink}>
                    Home
                </Link>
                <Link href={`/${templateId}/about`} className={styles.navLink}>
                    About
                </Link>
                <Link href={`/${templateId}/contact`} className={styles.navLink}>
                    Contact
                </Link>
            </nav>
        </header>
    );
}
