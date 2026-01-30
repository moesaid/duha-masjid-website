import {
    AmanahHero,
    LeadershipGrid,
    GovernanceDashboard,
    AdvisoryCouncil,
    ContactBoard,
} from './_components';
import { boardMembers, governanceDocuments, advisors } from './_data';
import styles from './Board.module.css';

export default function BoardPage() {
    return (
        <div className={styles.page}>
            <AmanahHero />
            <LeadershipGrid members={boardMembers} />
            <GovernanceDashboard documents={governanceDocuments} />
            <AdvisoryCouncil advisors={advisors} />
            <ContactBoard />
        </div>
    );
}
