// Financial Aid Page - Heritage Mercy Fund Design
// Assistance Programs for Community Members
'use client';

import { useFinancialAidState } from './_hooks';
import {
    HeroSection,
    ProgramsSection,
    ProcessSection,
    FAQSection,
    ContactSection,
    ApplicationFormModal
} from './_components';
import styles from './ZakatPage.module.scss';

/**
 * Financial Aid Page
 * 
 * Architecture:
 * - _data/      → Assistance programs, process steps, FAQs, fund stats
 * - _hooks/     → useFinancialAidState (FAQ toggle, form modal)
 * - _components/→ Hero, Programs, Process, FAQ, Contact, Modal
 */
export default function FinancialAidPage() {
    const {
        expandedFaq, toggleFaq,
        isFormOpen, selectedProgram,
        openForm, closeForm
    } = useFinancialAidState();

    return (
        <main className={styles.financialAidPage}>
            <HeroSection />
            <ProgramsSection onApply={openForm} />
            <ProcessSection />
            <FAQSection expandedFaq={expandedFaq} onToggle={toggleFaq} />
            <ContactSection onOpenForm={() => openForm()} />
            <ApplicationFormModal
                isOpen={isFormOpen}
                selectedProgram={selectedProgram}
                onClose={closeForm}
            />
        </main>
    );
}
