import Image from 'next/image';
import { teachers } from '../../_data';
import styles from './TeachersSection.module.scss';

export function TeachersSection() {
    return (
        <section className={styles.teachersSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Our Faculty</span>
                <h2 className={styles.sectionTitle}>Meet Our Teachers</h2>
            </div>

            <div className={styles.teachersGrid}>
                {teachers.map((teacher, idx) => (
                    <div key={idx} className={styles.teacherCard}>
                        <div className={styles.teacherImage}>
                            <Image
                                src={teacher.imageUrl}
                                alt={teacher.name}
                                width={120}
                                height={120}
                                className={styles.avatar}
                            />
                        </div>
                        <h3>{teacher.name}</h3>
                        <p className={styles.title}>{teacher.title}</p>
                        <p className={styles.credentials}>{teacher.credentials}</p>
                        <p className={styles.bio}>{teacher.bio}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
