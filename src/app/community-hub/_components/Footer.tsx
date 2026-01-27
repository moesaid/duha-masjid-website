import Link from 'next/link';
import styles from '../_styles/Footer.module.css';

interface FooterProps {
    siteName?: string;
    templateId: string;
}

export function Footer({ siteName = 'Community Hub', templateId }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.footerBrand}>
                    <div className={styles.footerLogo}>
                        <span className={styles.footerLogoIcon}>🕌</span>
                        <span className={styles.footerLogoText}>{siteName}</span>
                    </div>
                    <p className={styles.footerTagline}>
                        Building a vibrant, inclusive community where everyone can grow in faith,
                        connect with others, and make a positive impact.
                    </p>
                    <div className={styles.socialLinks}>
                        <a href="#" className={styles.socialLink} aria-label="Facebook">📘</a>
                        <a href="#" className={styles.socialLink} aria-label="Instagram">📷</a>
                        <a href="#" className={styles.socialLink} aria-label="YouTube">🎬</a>
                        <a href="#" className={styles.socialLink} aria-label="TikTok">🎵</a>
                    </div>
                </div>

                <div className={styles.footerSection}>
                    <h4>Programs</h4>
                    <Link href={`/${templateId}/programs/youth`}>Youth Programs</Link>
                    <Link href={`/${templateId}/programs/sunday-school`}>Sunday School</Link>
                    <Link href={`/${templateId}/programs/sports`}>Sports & Fitness</Link>
                    <Link href={`/${templateId}/programs/sisters`}>Sisters Circle</Link>
                </div>

                <div className={styles.footerSection}>
                    <h4>Community</h4>
                    <Link href={`/${templateId}/events`}>Events Calendar</Link>
                    <Link href={`/${templateId}/volunteer`}>Volunteer</Link>
                    <Link href={`/${templateId}/food-pantry`}>Food Pantry</Link>
                    <Link href={`/${templateId}/fundraising`}>Fundraising</Link>
                </div>

                <div className={styles.footerSection}>
                    <h4>Connect</h4>
                    <Link href={`/${templateId}/contact`}>Contact Us</Link>
                    <Link href={`/${templateId}/directions`}>Get Directions</Link>
                    <Link href={`/${templateId}/donate`}>Donate</Link>
                    <Link href={`/${templateId}/newsletter`}>Newsletter</Link>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p className={styles.copyright}>
                    © {currentYear} {siteName}. Made with 💚
                </p>
                <div className={styles.newsletter}>
                    <input
                        type="email"
                        placeholder="Your email"
                        className={styles.newsletterInput}
                    />
                    <button className={styles.newsletterBtn}>Subscribe</button>
                </div>
            </div>
        </footer>
    );
}
