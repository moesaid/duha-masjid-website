import {
    NorthStarHero,
    MissionVisionSplit,
    CoreValuesGrid,
    StrategicPillarsAccordion,
    CTABanner,
} from './_components';
import { coreValues, strategicPillars } from './_data';
import styles from './Mission.module.css';

export default function MissionPage() {
    return (
        <div className={styles.page}>
            <NorthStarHero />
            <MissionVisionSplit />
            <CoreValuesGrid values={coreValues} />
            <StrategicPillarsAccordion pillars={strategicPillars} />
            <CTABanner />
        </div>
    );
}
