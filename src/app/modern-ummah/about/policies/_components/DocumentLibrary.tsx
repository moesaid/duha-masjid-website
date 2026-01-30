import type { PolicyDocument } from '../_data';
import styles from '../Policies.module.css';

interface DocumentLibraryProps {
    documents: PolicyDocument[];
}

export function DocumentLibrary({ documents }: DocumentLibraryProps) {
    return (
        <section className={styles.librarySection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>
                        <BookIcon />
                        Digital Library
                    </span>
                    <h2 className={styles.sectionTitle}>Official Documents</h2>
                    <p className={styles.sectionSubtitle}>
                        Download our official governance documents for review. All documents are kept current and accessible.
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

function DocumentCard({ document }: { document: PolicyDocument }) {
    const Icon = getDocIcon(document.iconType);

    return (
        <article className={styles.documentCard}>
            <div className={`${styles.documentIconCircle} ${styles[document.iconType]}`}>
                <Icon />
            </div>
            <div className={styles.documentInfo}>
                <h3 className={styles.documentTitle}>{document.title}</h3>
                <p className={styles.documentDesc}>{document.description}</p>
                <span className={styles.documentMeta}>
                    {document.fileType} • {document.fileSize} • Updated {document.updated}
                </span>
            </div>
            <a href={document.downloadUrl} className={styles.downloadBtn}>
                <DownloadIcon />
                Download
            </a>
        </article>
    );
}

function getDocIcon(type: PolicyDocument['iconType']) {
    switch (type) {
        case 'constitution':
            return ConstitutionIcon;
        case 'financial':
            return FinancialIcon;
        case 'membership':
            return MembershipIcon;
        case 'facility':
            return FacilityIcon;
        default:
            return BookIcon;
    }
}

function BookIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
    );
}

function ConstitutionIcon() {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
        </svg>
    );
}

function FinancialIcon() {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
    );
}

function MembershipIcon() {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}

function FacilityIcon() {
    return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9,22 9,12 15,12 15,22" />
        </svg>
    );
}

function DownloadIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7,10 12,15 17,10" />
            <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
    );
}
