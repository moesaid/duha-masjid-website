'use client';

import { useState } from 'react';
import { HandHeart, Send, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import styles from '../Committees.module.css';

export function JoinCommittee() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <section className={styles.joinSection}>
            <div className={styles.container}>
                <Card className={styles.joinCard}>
                    <CardContent className={styles.joinContent}>
                        <div className={styles.joinIcon}>
                            <HandHeart size={32} />
                        </div>
                        <div className={styles.joinText}>
                            <h2 className={styles.joinTitle}>Lend Your Talents</h2>
                            <p className={styles.joinDescription}>
                                We are always looking for professionals and enthusiasts to help
                                grow our projects. Your skills can make a difference.
                            </p>
                        </div>
                        <Button
                            className={styles.joinButton}
                            onClick={() => setIsDialogOpen(true)}
                        >
                            Apply to Join
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Native Dialog */}
            {isDialogOpen && (
                <div className={styles.dialogOverlay} onClick={() => setIsDialogOpen(false)}>
                    <div className={styles.dialogContent} onClick={(e) => e.stopPropagation()}>
                        <button
                            className={styles.dialogClose}
                            onClick={() => setIsDialogOpen(false)}
                        >
                            <X size={20} />
                        </button>
                        <div className={styles.dialogHeader}>
                            <h3 className={styles.dialogTitle}>Join a Committee</h3>
                            <p className={styles.dialogDescription}>
                                Share your interests and we&apos;ll connect you with the right team.
                            </p>
                        </div>
                        <form className={styles.applicationForm}>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Full Name</label>
                                <input
                                    type="text"
                                    className={styles.formInput}
                                    placeholder="Your name"
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Email Address</label>
                                <input
                                    type="email"
                                    className={styles.formInput}
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Committee Interest</label>
                                <select className={styles.formSelect}>
                                    <option value="">Select a committee...</option>
                                    <option value="membership">Membership Committee</option>
                                    <option value="security">Security & Safety</option>
                                    <option value="outreach">Community Outreach</option>
                                    <option value="youth">Youth Development</option>
                                    <option value="education">Islamic Education</option>
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Skills & Experience</label>
                                <textarea
                                    className={styles.formTextarea}
                                    placeholder="Tell us about your background and how you'd like to contribute..."
                                    rows={4}
                                />
                            </div>
                            <Button type="submit" className={styles.submitButton}>
                                <Send size={18} />
                                Submit Application
                            </Button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}
