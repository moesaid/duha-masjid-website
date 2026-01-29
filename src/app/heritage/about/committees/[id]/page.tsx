// Committee Detail Page - Heritage Design
// Dynamic route for individual committee information
'use client';

import { use } from 'react';
import { getCommittee } from './_data';
import {
    HeroSection,
    AboutSection,
    ResponsibilitiesSection,
    ProjectsSection,
    JoinSection,
    Sidebar
} from './_components';
import styles from './_components/_shared.module.scss';

interface CommitteeDetailPageProps {
    params: Promise<{ id: string }>;
}

/**
 * Committee Detail Page
 * 
 * Architecture:
 * - _data/       → Committee types and static data
 * - _hooks/      → State management (minimal)
 * - _components/ → Each component in its own folder with co-located SCSS
 */
export default function CommitteeDetailPage({ params }: CommitteeDetailPageProps) {
    const { id } = use(params);
    const committee = getCommittee(id);

    return (
        <main className={styles.committeePage}>
            <HeroSection committee={committee} />

            <div className={styles.contentContainer}>
                <div className={styles.mainContent}>
                    <AboutSection fullDescription={committee.fullDescription} />
                    <ResponsibilitiesSection responsibilities={committee.responsibilities} />
                    <ProjectsSection projects={committee.currentProjects} />
                    <JoinSection howToJoin={committee.howToJoin} email={committee.email} />
                </div>

                <Sidebar committee={committee} />
            </div>
        </main>
    );
}
