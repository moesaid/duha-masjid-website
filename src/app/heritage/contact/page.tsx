import styles from '../_styles/template.module.scss';

export default function Page() {
    return (
        <section className={styles.pageSection}>
            <div className={styles.pageHeader}>
                <h1>Contact & Location</h1>
                <p>Get in touch with us</p>
            </div>
            <div className={styles.pageContent}>
                <p>This page is under construction. Check back soon for more information.</p>
            </div>
        </section>
    );
}
