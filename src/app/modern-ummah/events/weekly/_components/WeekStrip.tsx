'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { weeklySchedule } from '../_data';
import styles from '../Weekly.module.css';

export function WeekStrip() {
    const [hoveredDay, setHoveredDay] = useState<string | null>(null);

    return (
        <section className={styles.timetableSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Week at a Glance</span>
                <h2 className={styles.sectionTitle}>Your Weekly Schedule</h2>
            </div>

            <motion.div
                className={styles.weekStrip}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {weeklySchedule.map((dayData) => (
                    <div
                        key={dayData.day}
                        className={`${styles.dayColumn} ${dayData.hasProgram ? styles.active : ''}`}
                        onMouseEnter={() => setHoveredDay(dayData.day)}
                        onMouseLeave={() => setHoveredDay(null)}
                    >
                        <span className={styles.dayName}>{dayData.shortDay}</span>
                        <div className={styles.dayContent}>
                            {dayData.hasProgram ? (
                                dayData.programs.map((program, idx) => (
                                    <div key={idx} className={styles.programPill}>
                                        <span className={styles.programName}>{program.name}</span>
                                        <span className={styles.programTime}>{program.time}</span>
                                    </div>
                                ))
                            ) : (
                                <span className={styles.noProgram}>—</span>
                            )}
                        </div>

                        {/* Tooltip on hover */}
                        {hoveredDay === dayData.day && dayData.hasProgram && (
                            <div className={styles.tooltip}>
                                <strong>{dayData.day}</strong>
                                {dayData.programs.map((p, i) => (
                                    <div key={i} className={styles.tooltipProgram}>
                                        <span>{p.name}</span>
                                        <span>{p.time}</span>
                                        {p.note && <em>{p.note}</em>}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
