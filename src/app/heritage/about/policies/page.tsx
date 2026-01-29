// Policies Page - Document Archive
// HERITAGE ALIGNED: Operational Guidelines & Standards
'use client';

import { codeOfConductRules, faqs } from './_data';
import { usePoliciesState } from './_hooks';
import {
    HeroSection,
    LibrarySection,
    ConductSection,
    FAQSection
} from './_components';
import styles from './PoliciesPage.module.scss';
import templateStyles from '../../_styles/template.module.scss';

/**
 * Policies Page - Document Archive
 * 
 * Architecture:
 * - _data/      → Categories, documents, conduct rules, FAQs
 * - _hooks/     → usePoliciesState (category filter, FAQ accordion)
 * - _components/→ Hero, Library, Conduct, FAQ
 */
export default function PoliciesPage() {
    const { activeCategory, setActiveCategory, openFaq, setOpenFaq, filteredDocuments } = usePoliciesState();

    return (
        <div className={templateStyles.template}>
            <HeroSection />
            <LibrarySection
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                filteredDocuments={filteredDocuments}
            />
            <ConductSection rules={codeOfConductRules} />
            <FAQSection
                faqs={faqs}
                openFaq={openFaq}
                setOpenFaq={setOpenFaq}
            />
        </div>
    );
}
