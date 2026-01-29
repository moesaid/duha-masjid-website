import { Pill } from 'lucide-react';
import { pharmacyInfo } from '../../_data';
import styles from './PharmacySection.module.scss';

export function PharmacySection() {
    return (
        <section className={styles.pharmacySection}>
            <div className={styles.container}>
                <span className={styles.pharmacyIcon}>
                    <Pill size={28} />
                </span>
                <div className={styles.content}>
                    <h3 className={styles.title}>Pharmacy & Prescriptions</h3>
                    <p className={styles.text}>
                        {pharmacyInfo.onSite} {pharmacyInfo.vouchers}
                    </p>
                </div>
            </div>
        </section>
    );
}
