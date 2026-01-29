import Link from 'next/link';
import { Users, Calendar } from 'lucide-react';
import { VolunteerRole } from '../../_data';
import styles from './VolunteerSection.module.scss';

interface VolunteerSectionProps {
    roles: VolunteerRole[];
}

export function VolunteerSection({ roles }: VolunteerSectionProps) {
    return (
        <section className={styles.volunteerSection}>
            <div className={styles.volunteerContent}>
                <Users size={40} className={styles.volunteerIcon} />
                <h2 className={styles.volunteerTitle}>Join the "Khidmah Crew"</h2>
                <div className={styles.volunteerRoles}>
                    {roles.map((role) => {
                        const IconComponent = role.icon;
                        return (
                            <span key={role.label} className={styles.roleTag}>
                                <IconComponent size={16} />
                                {role.label}
                            </span>
                        );
                    })}
                </div>
                <Link href="/heritage/join/volunteer" className={styles.volunteerBtn}>
                    <Calendar size={18} />
                    Sign Up to Volunteer
                </Link>
            </div>
        </section>
    );
}
