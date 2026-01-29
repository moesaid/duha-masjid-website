import { Stethoscope, Syringe, Building2, AlertTriangle } from 'lucide-react';
import { services, limitations } from '../../_data';
import styles from './ServicesSection.module.scss';

// Map service IDs to icons
const serviceIcons: Record<string, React.ReactNode> = {
    'primary-care': <Stethoscope size={28} />,
    'screenings': <Syringe size={28} />,
    'referrals': <Building2 size={28} />
};

export function ServicesSection() {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.container}>
                <header className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>The Formulary</span>
                    <h2 className={styles.sectionTitle}>Our Services</h2>
                </header>

                <div className={styles.servicesGrid}>
                    {services.map((service) => (
                        <article key={service.id} className={styles.serviceCard}>
                            <span className={styles.serviceIcon}>
                                {serviceIcons[service.id] || <Stethoscope size={28} />}
                            </span>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.serviceDescription}>{service.description}</p>
                        </article>
                    ))}
                </div>

                <div className={styles.disclaimer}>
                    <h4 className={styles.disclaimerTitle}>
                        <AlertTriangle size={16} /> Important Notice
                    </h4>
                    <ul className={styles.disclaimerList}>
                        {limitations.map((limitation, index) => (
                            <li key={index}>{limitation}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
