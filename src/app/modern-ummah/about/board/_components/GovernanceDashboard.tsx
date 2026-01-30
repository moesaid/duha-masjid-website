import type { GovernanceDocument } from '../_data';
import styles from '../Board.module.css';

interface GovernanceDashboardProps {
    documents: GovernanceDocument[];
}

export function GovernanceDashboard({ documents }: GovernanceDashboardProps) {
    return (
        <section className={styles.governanceSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>
                        <TransparencyIcon />
                        Transparency
                    </span>
                    <h2 className={styles.sectionTitle}>Governance & Accountability</h2>
                    <p className={styles.sectionSubtitle}>
                        We believe in open governance. Access our official documents, reports, and meeting records.
                    </p>
                </div>

                <div className={styles.documentsGrid}>
                    {documents.map((doc) => (
                        <DocumentCard key={doc.id} document={doc} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function DocumentCard({ document }: { document: GovernanceDocument }) {
    const TypeIcon = getDocTypeIcon(document.type);

    return (
        <a href={document.downloadUrl} className={styles.documentCard}>
            <div className={styles.documentIcon}>
                <TypeIcon />
            </div>
            <div className={styles.documentContent}>
                <h3 className={styles.documentTitle}>{document.title}</h3>
                <p className={styles.documentDesc}>{document.description}</p>
                <span className={styles.documentDate}>{document.date}</span>
            </div>
            <div className={styles.documentAction}>
                <DownloadIcon />
            </div>
        </a>
    );
}

function getDocTypeIcon(type: GovernanceDocument['type']) {
    switch (type) {
        case 'report':
            return ReportIcon;
        case 'policy':
            return PolicyIcon;
        case 'minutes':
            return MinutesIcon;
        default:
            return FileIcon;
    }
}

function TransparencyIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
        </svg>
    );
}

function ReportIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14,2 14,8 20,8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10,9 9,9 8,9" />
        </svg>
    );
}

function PolicyIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
        </svg>
    );
}

function MinutesIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
    );
}

function FileIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14,2 14,8 20,8" />
        </svg>
    );
}

function DownloadIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7,10 12,15 17,10" />
            <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
    );
}
