import Link from 'next/link';
import { Button } from '../../../_components';
import { Gift, CheckCircle } from 'lucide-react';
import styles from './MentorshipProgram.module.css';
import { supportPillars, welcomeGiftItems } from '../_data';


interface MentorshipProgramProps {
    onOpenGiftBox: () => void;
}

export function MentorshipProgram({ onOpenGiftBox }: MentorshipProgramProps) {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Three Pillars of Support</h2>
                    <p className={styles.subtitle}>
                        You are not alone. Our community is here to support you at every step.
                    </p>
                </div>

                <div className={styles.grid}>
                    {supportPillars.map((pillar) => {
                        const Icon = pillar.icon;
                        return (
                            <div key={pillar.id} className={styles.card}>
                                <div className={styles.iconWrapper}>
                                    <Icon size={32} />
                                </div>
                                <h3 className={styles.cardTitle}>{pillar.title}</h3>
                                <span className={styles.cardSubtitle}>{pillar.subtitle}</span>
                                <p className={styles.cardDescription}>{pillar.description}</p>
                                <ul className={styles.detailsList}>
                                    {pillar.details.map((detail, idx) => (
                                        <li key={idx}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                <div className={styles.giftContainer}>
                    <div className={styles.giftContent}>
                        <span className={styles.giftLabel}>Our Gift to You</span>
                        <h2 className={styles.giftTitle}>The New Muslim Welcome Kit</h2>
                        <p className={styles.giftDescription}>
                            We believe every new Muslim deserves a warm start. Our complimentary
                            starter package is designed to help you begin your practice with confidence.
                        </p>

                        <div className={styles.giftItems}>
                            {welcomeGiftItems.map((item, idx) => (
                                <div key={idx} className={styles.giftItem}>
                                    <CheckCircle size={16} className={styles.checkIcon} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <Button onClick={onOpenGiftBox} variant="primary">
                            <Gift size={18} />
                            Request Your Gift Box
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
