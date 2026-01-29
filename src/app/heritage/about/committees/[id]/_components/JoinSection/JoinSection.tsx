import { Mail } from 'lucide-react';
import styles from './JoinSection.module.scss';

interface JoinSectionProps {
    howToJoin: string;
    email: string;
}

export function JoinSection({ howToJoin, email }: JoinSectionProps) {
    return (
        <section className={styles.section}>
            <h2>How to Join</h2>
            <p>{howToJoin}</p>
            <a href={`mailto:${email}`} className={styles.joinButton}>
                <Mail size={18} />
                Contact Committee
            </a>
        </section>
    );
}
