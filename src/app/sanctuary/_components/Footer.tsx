import Link from 'next/link';
import styles from '../_styles/Footer.module.css';

interface FooterProps {
    siteName?: string;
    templateId: string;
}

export function Footer({ siteName = 'The Sanctuary', templateId }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.footerBrand}>
                    <div className={styles.footerLogo}>
                        <span className={styles.footerLogoIcon}>🌿</span>
                        <span className={styles.footerLogoText}>{siteName}</span>
                    </div>
                    <p className={styles.footerTagline}>
                        A peaceful space for spiritual growth, quiet reflection, and connection
                        with the Divine. All are welcome.
                    </p>
                    <div className={styles.socialLinks}>
                        <a href="#" className={styles.socialLink} aria-label="Instagram">📷</a>
                        <a href="#" className={styles.socialLink} aria-label="Podcast">🎧</a>
                        <a href="#" className={styles.socialLink} aria-label="YouTube">▶️</a>
                    </div>
                </div>

                <div className={styles.footerSection}>
                    <h4>Visit</h4>
                    <Link href={`/${templateId}/directions`}>Directions</Link>
                    <Link href={`/${templateId}/hours`}>Open Hours</Link>
                    <Link href={`/${templateId}/garden`}>Meditation Garden</Link>
                    <Link href={`/${templateId}/library`}>Library</Link>
                </div>

                <div className={styles.footerSection}>
                    <h4>Learn</h4>
                    <Link href={`/${templateId}/classes`}>Classes</Link>
                    <Link href={`/${templateId}/retreats`}>Retreats</Link>
                    <Link href={`/${templateId}/mindfulness`}>Mindfulness</Link>
                    <Link href={`/${templateId}/podcast`}>Podcast</Link>
                </div>

                <div className={styles.footerSection}>
                    <h4>Connect</h4>
                    <Link href={`/${templateId}/contact`}>Contact</Link>
                    <Link href={`/${templateId}/newsletter`}>Newsletter</Link>
                    <Link href={`/${templateId}/donate`}>Support Us</Link>
                    <Link href={`/${templateId}/volunteer`}>Volunteer</Link>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p className={styles.copyright}>
                    © {currentYear} {siteName}
                </p>
                <span className={styles.ecoNote}>
                    🌱 Carbon-neutral website
                </span>
            </div>
        </footer>
    );
}
