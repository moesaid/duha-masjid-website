import Image from 'next/image';
import { GraduationCap, Calendar, Clock } from 'lucide-react';
import { SeniorImam, Scholar } from '../_data';
import styles from '../TeamPage.module.scss';

interface ImamFeatureProps {
    imam: SeniorImam;
}

export function ImamFeature({ imam }: ImamFeatureProps) {
    return (
        <section className={styles.imamFeature}>
            <div className={styles.imamLayout}>
                <div className={styles.imamPhotoContainer}>
                    <div className={styles.archMask}>
                        <Image
                            src={imam.image}
                            alt={imam.name}
                            fill
                            className={styles.imamPhoto}
                        />
                    </div>
                    <div className={styles.imamNameplate}>
                        <h2 className={styles.imamName}>{imam.name}</h2>
                        <span className={styles.imamTitle}>{imam.title}</span>
                    </div>
                </div>

                <div className={styles.imamDetails}>
                    <div className={styles.bioSection}>
                        <p className={styles.bioText}>{imam.bio}</p>

                        <div className={styles.credentials}>
                            <h3 className={styles.credentialsTitle}>
                                <GraduationCap size={18} />
                                Credentials & Experience
                            </h3>
                            <ul className={styles.credentialsList}>
                                {imam.credentials.map((cred, idx) => (
                                    <li key={idx}>{cred}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={styles.scheduleBlock}>
                        <h3 className={styles.scheduleTitle}>
                            <Calendar size={18} />
                            Weekly Schedule
                        </h3>
                        <div className={styles.scheduleGrid}>
                            {imam.schedule.map((slot, idx) => (
                                <div key={idx} className={styles.scheduleItem}>
                                    <span className={styles.scheduleDay}>{slot.day}</span>
                                    <span className={styles.scheduleTime}>
                                        <Clock size={14} />
                                        {slot.time}
                                    </span>
                                    <span className={styles.scheduleType}>{slot.type}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

interface ScholarsGridProps {
    scholars: Scholar[];
}

export function ScholarsGrid({ scholars }: ScholarsGridProps) {
    return (
        <section className={styles.scholarsSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Our Team</span>
                <h2 className={styles.sectionTitle}>Resident Scholars & Instructors</h2>
            </div>
            <div className={styles.scholarsGrid}>
                {scholars.map((scholar, index) => (
                    <div key={index} className={styles.scholarCard}>
                        <div className={styles.scholarAvatar}>
                            <Image
                                src={scholar.image}
                                alt={scholar.name}
                                fill
                                className={styles.scholarPhoto}
                            />
                        </div>
                        <h3 className={styles.scholarName}>{scholar.name}</h3>
                        <span className={styles.scholarRole}>{scholar.role}</span>
                        <span className={styles.scholarSpecialty}>{scholar.specialty}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
