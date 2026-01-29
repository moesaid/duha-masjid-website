import { ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { FacultyMember } from '../../_data';
import styles from './FacultySection.module.scss';

interface FacultySectionProps {
    faculty: FacultyMember[];
    facultyIndex: number;
    onPrev: () => void;
    onNext: () => void;
    onSelect: (index: number) => void;
}

export function FacultySection({ faculty, facultyIndex, onPrev, onNext, onSelect }: FacultySectionProps) {
    return (
        <section className={styles.facultySection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Our Educators</span>
                <h2 className={styles.sectionTitle}>Faculty Spotlight</h2>
            </div>

            <div className={styles.facultyCarousel}>
                <button className={styles.carouselBtn} onClick={onPrev}>
                    <ChevronLeft size={24} />
                </button>

                <div className={styles.facultyCard}>
                    <div className={styles.facultyPhoto}>
                        <Users size={48} />
                    </div>
                    <div className={styles.facultyInfo}>
                        <h4>{faculty[facultyIndex].name}</h4>
                        <span className={styles.facultySubject}>{faculty[facultyIndex].subject}</span>
                        <span className={styles.facultyDegree}>{faculty[facultyIndex].degree}</span>
                    </div>
                </div>

                <button className={styles.carouselBtn} onClick={onNext}>
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className={styles.facultyDots}>
                {faculty.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === facultyIndex ? styles.active : ''}`}
                        onClick={() => onSelect(index)}
                    />
                ))}
            </div>
        </section>
    );
}
