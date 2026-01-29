import { Calendar, Users } from 'lucide-react';
import { ScheduleItem, Speaker } from '../_data';
import styles from '../EventPage.module.scss';

interface EventDetailsSectionProps {
    description: string;
    schedule: ScheduleItem[];
    speakers: Speaker[];
}

export function EventDetailsSection({ description, schedule, speakers }: EventDetailsSectionProps) {
    return (
        <section className={styles.detailsSection}>
            <div className={styles.detailsContainer}>
                {/* Description */}
                <div className={styles.descriptionBlock}>
                    <p className={styles.dropCap}>{description}</p>
                </div>

                {/* Schedule Timeline */}
                <div className={styles.scheduleBlock}>
                    <h3 className={styles.sectionTitle}>
                        <Calendar size={20} />
                        Evening Program
                    </h3>
                    <div className={styles.timeline}>
                        {schedule.map((item, idx) => (
                            <div key={idx} className={styles.timelineItem}>
                                <div className={styles.timelineDot} />
                                <div className={styles.timelineTime}>{item.time}</div>
                                <div className={styles.timelineContent}>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Speakers */}
                <div className={styles.speakersBlock}>
                    <h3 className={styles.sectionTitle}>
                        <Users size={20} />
                        Distinguished Guests
                    </h3>
                    <div className={styles.speakersGrid}>
                        {speakers.map((speaker, idx) => (
                            <div key={idx} className={styles.speakerCard}>
                                <div className={styles.speakerAvatar}>
                                    <span>{speaker.name.charAt(0)}</span>
                                </div>
                                <h4 className={styles.speakerName}>{speaker.name}</h4>
                                <span className={styles.speakerTitle}>{speaker.title}</span>
                                <p className={styles.speakerBio}>{speaker.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
