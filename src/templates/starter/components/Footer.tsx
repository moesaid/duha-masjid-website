import styles from '../styles/Footer.module.css';

interface FooterProps {
    siteName?: string;
}

export function Footer({ siteName = 'Site Name' }: FooterProps) {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p className={styles.copyright}>
                    © {year} {siteName}. All rights reserved.
                </p>
                <div className={styles.links}>
                    <a href="#" className={styles.link}>
                        Privacy Policy
                    </a>
                    <a href="#" className={styles.link}>
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}
