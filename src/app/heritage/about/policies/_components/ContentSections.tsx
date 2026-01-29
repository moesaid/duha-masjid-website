import Link from 'next/link';
import { BookOpen, FileText, Download, Calendar, HardDrive, ShieldCheck, ChevronDown } from 'lucide-react';
import { Category, Document, ConductRule, FAQ, categories } from '../_data';
import styles from './_shared.module.scss';

export function HeroSection() {
    return (
        <header className={styles.archiveHero}>
            <div className={styles.heroTexture} />
            <div className={styles.heroContent}>
                <span className={styles.heroBadge}>
                    <BookOpen size={16} />
                    Document Archive
                </span>
                <h1 className={styles.heroTitle}>Operational Guidelines & Standards</h1>
                <p className={styles.heroSubtitle}>
                    Access our governance documents, policies, and community guidelines
                </p>
            </div>
        </header>
    );
}

interface LibrarySectionProps {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
    filteredDocuments: Document[];
}

export function LibrarySection({ activeCategory, setActiveCategory, filteredDocuments }: LibrarySectionProps) {
    return (
        <section className={styles.librarySection}>
            <div className={styles.libraryLayout}>
                {/* Sticky Sidebar */}
                <aside className={styles.sidebar}>
                    <h2 className={styles.sidebarTitle}>Categories</h2>
                    <nav className={styles.categoryNav}>
                        {categories.map((cat) => {
                            const Icon = cat.icon;
                            return (
                                <button
                                    key={cat.id}
                                    className={`${styles.categoryButton} ${activeCategory === cat.id ? styles.categoryActive : ''}`}
                                    onClick={() => setActiveCategory(cat.id)}
                                >
                                    <Icon size={18} />
                                    {cat.name}
                                </button>
                            );
                        })}
                    </nav>
                </aside>

                {/* Document Cards */}
                <div className={styles.documentsArea}>
                    <div className={styles.documentsHeader}>
                        <h2 className={styles.documentsTitle}>
                            {categories.find(c => c.id === activeCategory)?.name} Documents
                        </h2>
                        <span className={styles.documentsCount}>
                            {filteredDocuments.length} document{filteredDocuments.length !== 1 ? 's' : ''}
                        </span>
                    </div>

                    <div className={styles.documentsGrid}>
                        {filteredDocuments.map((doc) => (
                            <div key={doc.id} className={styles.fileCard}>
                                <div className={styles.fileFolderTab} />
                                <div className={styles.fileContent}>
                                    <FileText className={styles.fileIcon} size={28} />
                                    <h3 className={styles.fileTitle}>{doc.title}</h3>
                                    <p className={styles.fileDescription}>{doc.description}</p>
                                    <div className={styles.fileMeta}>
                                        <span className={styles.metaItem}>
                                            <Calendar size={14} />
                                            {doc.lastUpdated}
                                        </span>
                                        <span className={styles.metaItem}>
                                            <HardDrive size={14} />
                                            {doc.fileSize}
                                        </span>
                                    </div>
                                    <Link href={doc.downloadUrl} className={styles.downloadButton}>
                                        <Download size={16} />
                                        Download PDF
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

interface ConductSectionProps {
    rules: ConductRule[];
}

export function ConductSection({ rules }: ConductSectionProps) {
    return (
        <section className={styles.conductSection}>
            <div className={styles.conductContainer}>
                <div className={styles.conductHeader}>
                    <ShieldCheck className={styles.conductIcon} size={36} />
                    <h2 className={styles.conductTitle}>Community Code of Conduct</h2>
                    <p className={styles.conductSubtitle}>
                        Key guidelines for maintaining a respectful and harmonious environment
                    </p>
                </div>

                <div className={styles.rulesGrid}>
                    {rules.map((rule) => (
                        <div key={rule.number} className={styles.ruleCard}>
                            <span className={styles.ruleNumber}>{rule.number}</span>
                            <h3 className={styles.ruleTitle}>{rule.title}</h3>
                            <p className={styles.ruleDescription}>{rule.description}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.conductCta}>
                    <Link href="/documents/code-of-conduct.pdf" className={styles.fullPolicyLink}>
                        <Download size={16} />
                        Download Full Code of Conduct (PDF)
                    </Link>
                </div>
            </div>
        </section>
    );
}

interface FAQSectionProps {
    faqs: FAQ[];
    openFaq: number | null;
    setOpenFaq: (index: number | null) => void;
}

export function FAQSection({ faqs, openFaq, setOpenFaq }: FAQSectionProps) {
    return (
        <section className={styles.faqSection}>
            <div className={styles.faqContainer}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Common Questions</span>
                    <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                </div>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <button
                                className={`${styles.faqQuestion} ${openFaq === index ? styles.faqOpen : ''}`}
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                aria-expanded={openFaq === index}
                            >
                                <span>{faq.question}</span>
                                <ChevronDown className={styles.faqIcon} size={20} />
                            </button>
                            <div className={`${styles.faqAnswer} ${openFaq === index ? styles.faqAnswerOpen : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
