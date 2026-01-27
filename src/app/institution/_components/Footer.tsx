import Link from 'next/link';
import styles from '../_styles/Footer.module.css';

interface FooterProps {
    siteName?: string;
    templateId: string;
}

export function Footer({ siteName = 'Islamic Foundation', templateId }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerMain}>
                <div className={styles.footerBrand}>
                    <p>{siteName}</p>
                    <p className={styles.footerBrandDesc}>
                        A 501(c)(3) non-profit organization dedicated to serving the spiritual,
                        educational, and social needs of the Muslim community.
                    </p>
                    <div className={styles.footerCertifications}>
                        <span className={styles.certification}>501(c)(3)</span>
                        <span className={styles.certification}>Charity Navigator ★★★★</span>
                    </div>
                </div>

                <div className={styles.footerSection}>
                    <h4>About</h4>
                    <Link href={`/${templateId}/about`}>Our Mission</Link>
                    <Link href={`/${templateId}/leadership`}>Board of Directors</Link>
                    <Link href={`/${templateId}/staff`}>Staff</Link>
                    <Link href={`/${templateId}/history`}>History</Link>
                </div>

                <div className={styles.footerSection}>
                    <h4>Facilities</h4>
                    <Link href={`/${templateId}/mosque`}>Main Mosque</Link>
                    <Link href={`/${templateId}/school`}>Islamic School</Link>
                    <Link href={`/${templateId}/clinic`}>Health Clinic</Link>
                    <Link href={`/${templateId}/cemetery`}>Cemetery</Link>
                </div>

                <div className={styles.footerSection}>
                    <h4>Resources</h4>
                    <Link href={`/${templateId}/reports`}>Financial Reports</Link>
                    <Link href={`/${templateId}/policies`}>Policies</Link>
                    <Link href={`/${templateId}/media`}>Media Kit</Link>
                    <Link href={`/${templateId}/faq`}>FAQ</Link>
                </div>

                <div className={styles.footerSection}>
                    <h4>Get Involved</h4>
                    <Link href={`/${templateId}/donate`}>Donate</Link>
                    <Link href={`/${templateId}/volunteer`}>Volunteer</Link>
                    <Link href={`/${templateId}/careers`}>Careers</Link>
                    <Link href={`/${templateId}/contact`}>Contact</Link>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <div className={styles.footerBottomInner}>
                    <p className={styles.copyright}>
                        © {currentYear} {siteName}. All rights reserved. EIN: 12-3456789
                    </p>
                    <div className={styles.legalLinks}>
                        <Link href={`/${templateId}/privacy`}>Privacy Policy</Link>
                        <Link href={`/${templateId}/terms`}>Terms of Use</Link>
                        <Link href={`/${templateId}/accessibility`}>Accessibility</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
