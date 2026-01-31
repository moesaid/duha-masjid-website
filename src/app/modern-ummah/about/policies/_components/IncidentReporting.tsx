import styles from '../Policies.module.css';

export function IncidentReporting() {
    return (
        <section className={styles.reportingSection}>
            <div className={styles.container}>
                <div className={styles.reportingCard}>
                    <div className={styles.reportingIcon}>
                        <ShieldAlertIcon />
                    </div>
                    <div className={styles.reportingContent}>
                        <h2 className={styles.reportingTitle}>Report a Concern</h2>
                        <p className={styles.reportingText}>
                            We are committed to the safety of every community member. If you witness a violation
                            of our code of conduct or have a concern, please report it. All reports are handled
                            with the utmost confidentiality.
                        </p>
                        <a href="/modern-ummah/contact" className={styles.reportBtn}>
                            <LockIcon />
                            Confidential Report
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ShieldAlertIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
    );
}

function LockIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    );
}
