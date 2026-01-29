import Link from 'next/link';
import { Users, Clock, Mail, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Committee } from '../_data';
import styles from '../CommitteesPage.module.scss';

export function HeroSection() {
    return (
        <header className={styles.committeesHero}>
            <div className={styles.heroPattern} />
            <div className={styles.heroContent}>
                <span className={styles.heroBadge}>
                    <Users size={16} />
                    Volunteer Committees
                </span>
                <h1 className={styles.heroTitle}>Serving Together</h1>
                <p className={styles.heroSubtitle}>
                    Our committees are the backbone of our masjid—volunteers dedicating their time and talents to serve our community.
                </p>
            </div>
        </header>
    );
}

interface CommitteesGridProps {
    committees: Committee[];
    selectedCommittee: string | null;
    setSelectedCommittee: (id: string | null) => void;
}

export function CommitteesGrid({ committees, selectedCommittee, setSelectedCommittee }: CommitteesGridProps) {
    const selectedData = committees.find(c => c.id === selectedCommittee);

    return (
        <section className={styles.committeesSection}>
            <div className={styles.committeesLayout}>
                {/* Grid of Committee Cards */}
                <div className={styles.committeesGrid}>
                    {committees.map((committee) => {
                        const Icon = committee.icon;
                        return (
                            <button
                                key={committee.id}
                                className={`${styles.committeeCard} ${selectedCommittee === committee.id ? styles.cardActive : ''}`}
                                onClick={() => setSelectedCommittee(selectedCommittee === committee.id ? null : committee.id)}
                            >
                                <div className={styles.cardIcon}>
                                    <Icon size={28} />
                                </div>
                                <h3 className={styles.cardTitle}>{committee.name}</h3>
                                <p className={styles.cardDescription}>{committee.description}</p>
                                <div className={styles.cardMeta}>
                                    <span className={styles.metaItem}>
                                        <Users size={14} />
                                        {committee.members} members
                                    </span>
                                </div>
                                <ChevronRight className={styles.cardArrow} size={20} />
                            </button>
                        );
                    })}
                </div>

                {/* Detail Panel */}
                {selectedData && (
                    <aside className={styles.detailPanel}>
                        <div className={styles.panelHeader}>
                            <selectedData.icon className={styles.panelIcon} size={32} />
                            <h2 className={styles.panelTitle}>{selectedData.name}</h2>
                        </div>

                        <div className={styles.panelContent}>
                            <div className={styles.infoRow}>
                                <span className={styles.infoLabel}>Chair:</span>
                                <span className={styles.infoValue}>{selectedData.chair}</span>
                            </div>
                            <div className={styles.infoRow}>
                                <span className={styles.infoLabel}>
                                    <Clock size={14} />
                                    Meetings:
                                </span>
                                <span className={styles.infoValue}>{selectedData.meetingSchedule}</span>
                            </div>

                            <div className={styles.responsibilities}>
                                <h3 className={styles.responsibilitiesTitle}>Responsibilities</h3>
                                <ul className={styles.responsibilitiesList}>
                                    {selectedData.responsibilities.map((item, idx) => (
                                        <li key={idx}>
                                            <CheckCircle2 size={14} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                href={`mailto:${selectedData.id}@alnoormasjid.org`}
                                className={styles.contactButton}
                            >
                                <Mail size={16} />
                                Contact Committee
                            </Link>
                        </div>
                    </aside>
                )}
            </div>
        </section>
    );
}

export function VolunteerCta() {
    return (
        <section className={styles.volunteerCta}>
            <div className={styles.ctaContent}>
                <h2 className={styles.ctaTitle}>Join a Committee</h2>
                <p className={styles.ctaText}>
                    Interested in serving? Fill out our volunteer form and we&apos;ll match you with a committee that fits your skills and interests.
                </p>
                <Link href="/heritage/get-involved/volunteer" className={styles.ctaButton}>
                    Apply to Volunteer
                </Link>
            </div>
        </section>
    );
}
