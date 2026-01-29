import { Calendar, Users, Mail, MapPin } from 'lucide-react';
import { Committee } from '../../_data';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    committee: Committee;
}

export function Sidebar({ committee }: SidebarProps) {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.infoCard}>
                <h3>Committee Details</h3>

                <div className={styles.infoItem}>
                    <Users size={18} />
                    <div>
                        <span className={styles.infoLabel}>Chair</span>
                        <span className={styles.infoValue}>{committee.chair}</span>
                    </div>
                </div>

                <div className={styles.infoItem}>
                    <Mail size={18} />
                    <div>
                        <span className={styles.infoLabel}>Email</span>
                        <a href={`mailto:${committee.email}`} className={styles.infoLink}>{committee.email}</a>
                    </div>
                </div>

                <div className={styles.infoItem}>
                    <Calendar size={18} />
                    <div>
                        <span className={styles.infoLabel}>Meetings</span>
                        <span className={styles.infoValue}>{committee.meetingSchedule}</span>
                    </div>
                </div>

                <div className={styles.infoItem}>
                    <MapPin size={18} />
                    <div>
                        <span className={styles.infoLabel}>Location</span>
                        <span className={styles.infoValue}>{committee.location}</span>
                    </div>
                </div>
            </div>

            <div className={styles.membersCard}>
                <h3>Committee Members</h3>
                <ul className={styles.membersList}>
                    {committee.members.map((member, idx) => (
                        <li key={idx}>{member}</li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
