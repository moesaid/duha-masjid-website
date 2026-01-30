import {
    Header,
    MainSheikh,
    ResidentScholars,
    AskImam,
    KhutbahsSection,
} from './_components';
import { headImam, imamSchedule, residentScholars, recentKhutbahs } from './_data';
import styles from './Team.module.css';

export default function TeamPage() {
    return (
        <div className={styles.page}>
            <Header />
            <MainSheikh imam={headImam} schedule={imamSchedule} />
            <ResidentScholars scholars={residentScholars} />
            <AskImam />
            <KhutbahsSection khutbahs={recentKhutbahs} />
        </div>
    );
}
