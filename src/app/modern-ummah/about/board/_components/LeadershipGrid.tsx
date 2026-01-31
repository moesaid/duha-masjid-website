'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { BoardMember } from '../_data';
import styles from '../Board.module.css';

interface LeadershipGridProps {
    members: BoardMember[];
}

export function LeadershipGrid({ members }: LeadershipGridProps) {
    return (
        <section className={styles.leadershipSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>
                        <UsersIcon />
                        Our Leadership
                    </span>
                    <h2 className={styles.sectionTitle}>Board of Directors</h2>
                    <p className={styles.sectionSubtitle}>
                        Elected volunteers entrusted with guiding our masjid&apos;s mission and operations.
                    </p>
                </div>

                <div className={styles.leadershipGrid}>
                    {members.map((member, index) => (
                        <MemberCard key={member.id} member={member} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function MemberCard({ member, index }: { member: BoardMember; index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <article
            className={styles.memberCard}
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.memberImageContainer}>
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="120px"
                    className={styles.memberImage}
                />

            </div>

            <div className={styles.memberContent}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <span className={`${styles.memberRole} ${styles[member.roleType]}`}>
                    {member.role}
                </span>
                <p className={styles.memberVision}>&ldquo;{member.visionStatement}&rdquo;</p>

                <button
                    className={`${styles.memberBioBtn} ${isHovered ? styles.visible : ''}`}
                >
                    Read Bio
                    <ArrowIcon />
                </button>
            </div>
        </article>
    );
}

function UsersIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}



function ArrowIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    );
}
