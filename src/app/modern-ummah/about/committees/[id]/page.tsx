// Committee Detail Page - Modern Ummah Design
// Fresh, distinctive layout different from heritage
'use client';

import { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, Clock, Users, Sparkles, Target, TrendingUp, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { getCommitteeDetail, type Project } from '../_data';
import styles from './CommitteeDetail.module.css';

interface CommitteeDetailPageProps {
    params: Promise<{ id: string }>;
}

export default function CommitteeDetailPage({ params }: CommitteeDetailPageProps) {
    const { id } = use(params);
    const committee = getCommitteeDetail(id);

    return (
        <main className={styles.page}>
            {/* Immersive Hero */}
            <section className={styles.hero}>
                {/* Abstract SVG Background */}
                <svg className={styles.heroBg} viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="oklch(0.55 0.15 175)" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="oklch(0.60 0.12 85)" stopOpacity="0.08" />
                        </linearGradient>
                        <pattern id="dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1.5" fill="oklch(0.55 0.15 175)" opacity="0.2" />
                        </pattern>
                    </defs>
                    <rect fill="url(#heroGrad)" width="100%" height="100%" />
                    <rect fill="url(#dots)" width="100%" height="100%" />
                    <circle cx="1200" cy="100" r="300" fill="oklch(0.55 0.15 175)" opacity="0.05" />
                    <circle cx="200" cy="500" r="200" fill="oklch(0.60 0.12 85)" opacity="0.05" />
                </svg>

                <div className={styles.heroContainer}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={styles.heroContent}
                    >
                        <Link href="/modern-ummah/about/committees" className={styles.backLink}>
                            <ArrowLeft size={16} />
                            <span>All Committees</span>
                        </Link>

                        <div className={styles.heroText}>
                            <span className={styles.categoryPill}>Committee</span>
                            <h1 className={styles.heroTitle}>{committee.name}</h1>
                            <p className={styles.heroSubtitle}>{committee.fullDescription}</p>
                        </div>

                        {/* Quick Stats Row */}
                        <div className={styles.statsRow}>
                            <div className={styles.statCard}>
                                <Users size={20} />
                                <div>
                                    <span className={styles.statValue}>{committee.members.length}</span>
                                    <span className={styles.statLabel}>Members</span>
                                </div>
                            </div>
                            <div className={styles.statCard}>
                                <Target size={20} />
                                <div>
                                    <span className={styles.statValue}>{committee.currentProjects.length}</span>
                                    <span className={styles.statLabel}>Active Projects</span>
                                </div>
                            </div>
                            <div className={styles.statCard}>
                                <Clock size={20} />
                                <div>
                                    <span className={styles.statValue}>{committee.meetingSchedule.split(',')[0]}</span>
                                    <span className={styles.statLabel}>Meeting Schedule</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>
                    {/* Left: Projects & Responsibilities */}
                    <div className={styles.mainColumn}>
                        {/* Current Projects - Featured */}
                        <motion.div
                            className={styles.projectsCard}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.headerIcon}>
                                    <TrendingUp size={20} />
                                </div>
                                <h2>Current Projects</h2>
                            </div>

                            <div className={styles.projectsList}>
                                {committee.currentProjects.map((project: Project, idx) => (
                                    <motion.div
                                        key={project.id}
                                        className={styles.projectItem}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
                                    >
                                        <div className={styles.projectInfo}>
                                            <h3>{project.name}</h3>
                                            <span className={styles.projectStatus}>{project.status}</span>
                                        </div>
                                        <div className={styles.progressContainer}>
                                            <div className={styles.progressTrack}>
                                                <motion.div
                                                    className={styles.progressBar}
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${project.progress}%` }}
                                                    transition={{ delay: 0.5 + idx * 0.1, duration: 0.8, ease: "easeOut" }}
                                                />
                                            </div>
                                            <span className={styles.progressValue}>{project.progress}%</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Key Responsibilities */}
                        <motion.div
                            className={styles.responsibilitiesCard}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.headerIcon}>
                                    <Sparkles size={20} />
                                </div>
                                <h2>Key Responsibilities</h2>
                            </div>

                            <ul className={styles.responsibilitiesList}>
                                {committee.responsibilities.map((resp, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + idx * 0.08, duration: 0.4 }}
                                    >
                                        <span className={styles.checkMark}>✓</span>
                                        <span>{resp}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Right: Info Sidebar */}
                    <div className={styles.sideColumn}>
                        {/* Chair & Leadership */}
                        <motion.div
                            className={styles.leadershipCard}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <h3>Leadership</h3>
                            <div className={styles.chairProfile}>
                                <div className={styles.chairAvatar}>
                                    {committee.chair.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className={styles.chairInfo}>
                                    <strong>{committee.chair}</strong>
                                    <span>Committee Chair</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Team Members */}
                        <motion.div
                            className={styles.membersCard}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <h3>Team Members</h3>
                            <div className={styles.memberAvatars}>
                                {committee.members.slice(0, 5).map((member, idx) => (
                                    <div
                                        key={idx}
                                        className={styles.memberChip}
                                        title={member}
                                    >
                                        {member.split(' ')[0][0]}{member.split(' ')[1]?.[0] || ''}
                                    </div>
                                ))}
                                {committee.members.length > 5 && (
                                    <div className={styles.memberChip}>
                                        +{committee.members.length - 5}
                                    </div>
                                )}
                            </div>
                            <ul className={styles.memberNamesList}>
                                {committee.members.map((member, idx) => (
                                    <li key={idx}>{member}</li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Meeting Details */}
                        <motion.div
                            className={styles.meetingCard}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <h3>Meetings</h3>
                            <div className={styles.meetingDetails}>
                                <div className={styles.meetingRow}>
                                    <Clock size={16} />
                                    <span>{committee.meetingSchedule}</span>
                                </div>
                                <div className={styles.meetingRow}>
                                    <MapPin size={16} />
                                    <span>{committee.location}</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Join CTA */}
                        <motion.div
                            className={styles.joinCard}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <h3>Want to Contribute?</h3>
                            <p>{committee.howToJoin}</p>
                            <Button asChild className={styles.joinButton}>
                                <a href={`mailto:${committee.email}`}>
                                    <Send size={16} />
                                    Contact Us
                                </a>
                            </Button>
                            <span className={styles.emailHint}>{committee.email}</span>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
