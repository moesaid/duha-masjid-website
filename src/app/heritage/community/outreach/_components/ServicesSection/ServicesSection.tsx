import Link from 'next/link';
import { Clock, ChevronRight } from 'lucide-react';
import { Service } from '../../_data';
import styles from './ServicesSection.module.scss';

interface ServicesSectionProps {
    services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
    return (
        <section id="services" className={styles.servicesSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>What We Offer</span>
                <h2 className={styles.sectionTitle}>Request a Service</h2>
            </div>

            <div className={styles.servicesGrid}>
                {services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                        <div key={service.title} className={styles.serviceCard}>
                            <div className={styles.serviceIcon}>
                                <IconComponent size={28} />
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <div className={styles.serviceDetails}>
                                <Clock size={14} />
                                <span>{service.schedule}</span>
                            </div>
                            <Link href="/contact" className={styles.serviceBtn}>
                                {service.cta}
                                <ChevronRight size={16} />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
