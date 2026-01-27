import styles from '../../_styles/template.module.scss';

export default function Page() {
    return (
        <section className={styles.pageSection}>
            <div className={styles.pageHeader}>
                <h1>Food Pantry</h1>
                <p>Supporting those in need</p>
            </div>
            <div className={styles.pageContent}>
                <p>This page is under construction. Check back soon for more information.</p>
            </div>
        </section>
    );
}
