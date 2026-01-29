// Board Page - Governance & Leadership
// HERITAGE ALIGNED: Serving with Integrity
'use client';

import { executiveCommittee, subCommittees } from './_data';
import { useBoardState } from './_hooks';
import {
    HeroSection,
    PresidentSection,
    ExecutiveGrid,
    CommitteesAccordion,
    BylawsBanner
} from './_components';
import styles from './BoardPage.module.scss';
import templateStyles from '../../_styles/template.module.scss';

/**
 * Board Page - Governance & Leadership
 * 
 * Architecture:
 * - _data/      → Executive committee, sub-committees
 * - _hooks/     → useBoardState (accordion state)
 * - _components/→ Hero, President, ExecutiveGrid, CommitteesAccordion, BylawsBanner
 */
export default function BoardPage() {
    const { openCommittee, toggleCommittee } = useBoardState();

    return (
        <div className={templateStyles.template}>
            <HeroSection />
            <PresidentSection />
            <ExecutiveGrid members={executiveCommittee} />
            <CommitteesAccordion
                committees={subCommittees}
                openCommittee={openCommittee}
                toggleCommittee={toggleCommittee}
            />
            <BylawsBanner />
        </div>
    );
}
