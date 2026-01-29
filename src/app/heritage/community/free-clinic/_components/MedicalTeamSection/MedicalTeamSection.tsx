import Link from 'next/link';
import { Users, ChevronRight } from 'lucide-react';
import { volunteerRoles } from '../../_data';
import styles from './MedicalTeamSection.module.scss';

export function MedicalTeamSection() {
    return (
        <section className={styles.teamSection}>
            <div className={styles.container}>
                <div className={styles.imageColumn}>
                    <div className={styles.imagePlaceholder}>
                        <span className={styles.placeholderIcon}>
                            <Users size={48} />
                        </span>
                        <span className={styles.placeholderText}>Volunteer Medical Team</span>
                    </div>
                </div>

                <div className={styles.contentColumn}>
                    <span className={styles.sectionLabel}>Our Volunteers</span>
                    <h2 className={styles.sectionTitle}>Served by Experts</h2>
                    <p className={styles.description}>
                        Our clinic is staffed by board-certified physicians, nurses, and pharmacists
                        from our community who donate their time as <em>Sadaqah</em> (ongoing charity).
                    </p>

                    <div className={styles.rolesGrid}>
                        {volunteerRoles.map((role) => (
                            <div key={role.id} className={styles.roleCard}>
                                <h4 className={styles.roleTitle}>{role.title}</h4>
                                <p className={styles.roleDescription}>{role.description}</p>
                            </div>
                        ))}
                    </div>

                    <Link href="/heritage/community/volunteers" className={styles.ctaButton}>
                        Volunteer With Us
                        <ChevronRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
