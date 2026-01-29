// Committees Page - Volunteer Teams
// HERITAGE ALIGNED: Serving Together
'use client';

import { committees } from './_data';
import { useCommitteesState } from './_hooks';
import {
    HeroSection,
    CommitteesGrid,
    VolunteerCta
} from './_components';
import styles from './CommitteesPage.module.scss';
import templateStyles from '../../_styles/template.module.scss';

/**
 * Committees Page - Volunteer Teams
 * 
 * Architecture:
 * - _data/      → Committees list with details
 * - _hooks/     → useCommitteesState (selection state)
 * - _components/→ Hero, CommitteesGrid, VolunteerCta
 */
export default function CommitteesPage() {
    const { selectedCommittee, setSelectedCommittee } = useCommitteesState();

    return (
        <div className={templateStyles.template}>
            <HeroSection />
            <CommitteesGrid
                committees={committees}
                selectedCommittee={selectedCommittee}
                setSelectedCommittee={setSelectedCommittee}
            />
            <VolunteerCta />
        </div>
    );
}
