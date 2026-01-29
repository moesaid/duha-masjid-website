import { Info } from 'lucide-react';
import { scheduleNote } from '../../_data';
import styles from './NoteSection.module.scss';

export function NoteSection() {
    return (
        <section className={styles.noteSection}>
            <div className={styles.noteCard}>
                <Info size={24} />
                <p>{scheduleNote}</p>
            </div>
        </section>
    );
}
