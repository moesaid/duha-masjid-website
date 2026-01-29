// Membership Page - HERITAGE ALIGNED
// Design: Dynamic membership application form with fee calculation
'use client';

import { benefits, faqs } from './_data';
import { useMembershipForm } from './_hooks';
import { HeroSection, BenefitsSection, ApplicationForm, FaqSection } from './_components';
import styles from './MembershipPage.module.scss';

/**
 * Membership Page - Community membership application
 * 
 * Architecture:
 * - _data/      → Benefits, FAQs, types
 * - _hooks/     → useMembershipForm with fee calculation
 * - _components/→ Hero, Benefits, ApplicationForm, FAQ
 */
export default function MembershipPage() {
    const form = useMembershipForm();

    return (
        <main className={styles.membershipPage}>
            <HeroSection />
            <BenefitsSection benefits={benefits} />
            <ApplicationForm form={form} />
            <FaqSection faqs={faqs} />
        </main>
    );
}
