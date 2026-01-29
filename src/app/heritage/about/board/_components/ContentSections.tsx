import Image from 'next/image';
import Link from 'next/link';
import { Quote, Mail, ChevronDown, Download } from 'lucide-react';
import { BoardMember, SubCommittee } from '../_data';
import styles from './_shared.module.scss';

export function HeroSection() {
    return (
        <header className={styles.governanceHero}>
            <div className={styles.heroPattern} />
            <div className={styles.heroContent}>
                <span className={styles.heroBadge}>Board of Trustees</span>
                <h1 className={styles.heroTitle}>Serving with Integrity</h1>
                <div className={styles.heroQuote}>
                    <Quote className={styles.quoteIcon} size={24} />
                    <blockquote className={styles.quoteText}>
                        &ldquo;Indeed, Allah commands you to render trusts to whom they are due and when you judge between people, to judge with justice.&rdquo;
                    </blockquote>
                    <cite className={styles.quoteCite}>— Surah An-Nisa 4:58</cite>
                </div>
            </div>
        </header>
    );
}

export function PresidentSection() {
    return (
        <section className={styles.presidentSection}>
            <div className={styles.letterhead}>
                <div className={styles.letterheadHeader}>
                    <div className={styles.masjidLogo}>
                        <span className={styles.logoArabic}>المسجد</span>
                        <span className={styles.logoEnglish}>Al-Noor Masjid</span>
                    </div>
                    <div className={styles.letterheadDate}>January 2024</div>
                </div>
                <div className={styles.letterContent}>
                    <div className={styles.presidentPhoto}>
                        <Image
                            src="/images/heritage/shykh.jpg"
                            alt="Dr. Omar Khan, President"
                            fill
                            className={styles.presidentImage}
                        />
                    </div>
                    <div className={styles.letterText}>
                        <p className={styles.letterSalutation}>Bismillah ir-Rahman ir-Raheem,</p>
                        <p className={styles.letterGreeting}>Dear Brothers and Sisters,</p>
                        <p>
                            As-salamu alaykum wa rahmatullahi wa barakatuh. On behalf of the Board of Trustees,
                            I am honored to serve our beloved community. Our mission is to uphold the sacred trust
                            (amanah) you have placed in us—to steward this masjid with transparency, accountability,
                            and unwavering commitment to Islamic principles.
                        </p>
                        <p>
                            This year, we have made significant strides in expanding our educational programs,
                            improving our facilities, and strengthening our financial foundation. Every decision
                            we make is guided by our responsibility to Allah (SWT) and our duty to serve you.
                        </p>
                        <p>
                            I invite you to review our governance documents, attend our open board meetings,
                            and share your feedback. This is your masjid, and together, we build its future.
                        </p>
                        <div className={styles.letterSignature}>
                            <div className={styles.signatureLine}>Dr. Omar Khan</div>
                            <div className={styles.signatureTitle}>President, Board of Trustees</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

interface ExecutiveGridProps {
    members: BoardMember[];
}

export function ExecutiveGrid({ members }: ExecutiveGridProps) {
    return (
        <section className={styles.executiveSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Leadership</span>
                <h2 className={styles.sectionTitle}>Executive Committee</h2>
                <p className={styles.sectionSubtitle}>
                    Elected by the community to serve with dedication and accountability
                </p>
            </div>
            <div className={styles.executiveGrid}>
                {members.map((member, index) => (
                    <div key={index} className={styles.portraitCard}>
                        <div className={styles.portraitImageWrapper}>
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className={styles.portraitImage}
                            />
                            <a
                                href={`mailto:${member.email}`}
                                className={styles.contactOverlay}
                                aria-label={`Email ${member.name}`}
                            >
                                <Mail className={styles.contactIcon} size={24} />
                            </a>
                        </div>
                        <div className={styles.portraitInfo}>
                            <h3 className={styles.memberName}>{member.name}</h3>
                            <span className={styles.memberRole}>{member.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

interface CommitteesAccordionProps {
    committees: SubCommittee[];
    openCommittee: string | null;
    toggleCommittee: (name: string) => void;
}

export function CommitteesAccordion({ committees, openCommittee, toggleCommittee }: CommitteesAccordionProps) {
    return (
        <section className={styles.committeesSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Volunteers</span>
                <h2 className={styles.sectionTitle}>Sub-Committees</h2>
                <p className={styles.sectionSubtitle}>
                    Dedicated teams working behind the scenes to serve our community
                </p>
            </div>
            <div className={styles.committeesGrid}>
                {committees.map((committee, index) => (
                    <div key={index} className={styles.accordionItem}>
                        <button
                            className={`${styles.accordionHeader} ${openCommittee === committee.name ? styles.accordionOpen : ''}`}
                            onClick={() => toggleCommittee(committee.name)}
                            aria-expanded={openCommittee === committee.name}
                        >
                            <span className={styles.accordionTitle}>{committee.name}</span>
                            <ChevronDown className={styles.accordionIcon} size={20} />
                        </button>
                        <div
                            className={`${styles.accordionContent} ${openCommittee === committee.name ? styles.accordionContentOpen : ''}`}
                        >
                            <ul className={styles.membersList}>
                                {committee.members.map((member, idx) => (
                                    <li key={idx} className={styles.memberItem}>{member}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function BylawsBanner() {
    return (
        <section className={styles.bylawsBanner}>
            <div className={styles.bannerContent}>
                <div className={styles.bannerText}>
                    <h2 className={styles.bannerTitle}>Interested in Serving?</h2>
                    <p className={styles.bannerSubtitle}>
                        Review our election bylaws and learn how you can contribute to our community&apos;s governance.
                    </p>
                </div>
                <Link href="/documents/constitution.pdf" className={styles.bannerButton}>
                    <Download size={18} />
                    Download Constitution
                </Link>
            </div>
        </section>
    );
}
