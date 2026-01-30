import {
    ShuraHero,
    CommitteeDirectory,
    JoinCommittee,
    MonthlyHighlights,
} from './_components';
import styles from './Committees.module.css';

export default function CommitteesPage() {
    return (
        <div className={styles.page}>
            <ShuraHero />
            <CommitteeDirectory />
            <JoinCommittee />
            <MonthlyHighlights />
        </div>
    );
}
