import { Building, Award, Microscope, Library as LibraryIcon } from 'lucide-react';
import styles from '../FullTimeSchoolPage.module.scss';

export function ValueSection() {
    return (
        <section className={styles.valueSection}>
            <div className={styles.valueImage}>
                <div className={styles.valueImagePlaceholder}>
                    <Building size={64} />
                </div>
            </div>
            <div className={styles.valueContent}>
                <span className={styles.sectionLabel}>Why Choose Us</span>
                <h2 className={styles.sectionTitle}>Dual Excellence</h2>
                <p className={styles.valueTagline}>
                    &ldquo;We don&apos;t compromise. Our students excel in SATs and Tajweed.&rdquo;
                </p>

                <div className={styles.valuePoints}>
                    <div className={styles.valuePoint}>
                        <Award size={24} />
                        <div>
                            <h4>Accredited Excellence</h4>
                            <p>State-certified and Islamic studies accredited. Recognized by Minnesota Department of Education.</p>
                        </div>
                    </div>
                    <div className={styles.valuePoint}>
                        <Microscope size={24} />
                        <div>
                            <h4>Modern Facilities</h4>
                            <p>STEM lab, full gymnasium, library, and dedicated prayer spaces for focused learning.</p>
                        </div>
                    </div>
                    <div className={styles.valuePoint}>
                        <LibraryIcon size={24} />
                        <div>
                            <h4>Mishkah Partnership</h4>
                            <p>Dual-enrollment options for high school students through our university partnership.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
