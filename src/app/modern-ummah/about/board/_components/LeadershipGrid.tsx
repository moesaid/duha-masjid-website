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
                {member.linkedIn && isHovered && (
                    <a
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.memberLinkedIn}
                        aria-label={`${member.name}'s LinkedIn`}
                    >
                        <LinkedInIcon />
                    </a>
                )}
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

function LinkedInIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
