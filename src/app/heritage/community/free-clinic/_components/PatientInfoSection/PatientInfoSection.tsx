import { DollarSign, Heart, CalendarDays, CheckCircle, Calendar } from 'lucide-react';
import { clinicStatus } from '../../_data';
import styles from './PatientInfoSection.module.scss';

export function PatientInfoSection() {
    return (
        <section className={styles.patientInfoSection}>
            <div className={styles.infoCard}>
                <div className={styles.cardHeader}>
                    <span className={styles.statusBadge}>
                        {clinicStatus.isWalkIn ? (
                            <><CheckCircle size={16} /> Walk-ins Welcome</>
                        ) : (
                            <><Calendar size={16} /> By Appointment Only</>
                        )}
                    </span>
                </div>

                <div className={styles.infoGrid}>
                    <div className={styles.infoItem}>
                        <span className={styles.infoIcon}>
                            <DollarSign size={24} />
                        </span>
                        <div className={styles.infoContent}>
                            <h3 className={styles.infoTitle}>Cost</h3>
                            <p className={styles.infoValue}>{clinicStatus.cost}</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <span className={styles.infoIcon}>
                            <Heart size={24} />
                        </span>
                        <div className={styles.infoContent}>
                            <h3 className={styles.infoTitle}>Eligibility</h3>
                            <p className={styles.infoValue}>{clinicStatus.eligibility}</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <span className={styles.infoIcon}>
                            <CalendarDays size={24} />
                        </span>
                        <div className={styles.infoContent}>
                            <h3 className={styles.infoTitle}>Next Clinic Day</h3>
                            <p className={styles.infoValue}>
                                {clinicStatus.nextClinicDate} @ {clinicStatus.nextClinicTime}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
