import { features } from '../../_data';
import styles from './FeaturesSection.module.scss';

export function FeaturesSection() {
    return (
        <section className={styles.featuresSection}>
            <div className={styles.featuresGrid}>
                {features.map((feature, idx) => {
                    const IconComponent = feature.icon;
                    return (
                        <div key={idx} className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <IconComponent size={24} />
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
