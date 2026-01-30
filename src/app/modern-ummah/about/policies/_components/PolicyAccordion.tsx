'use client';

import { useState } from 'react';
import type { PolicyItem } from '../_data';
import styles from '../Policies.module.css';

interface PolicyAccordionProps {
    policies: PolicyItem[];
}

export function PolicyAccordion({ policies }: PolicyAccordionProps) {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className={styles.accordionSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>
                        <HandbookIcon />
                        Policy Handbook
                    </span>
                    <h2 className={styles.sectionTitle}>Quick Reference</h2>
                    <p className={styles.sectionSubtitle}>
                        Find answers to common policy questions without downloading documents.
                    </p>
                </div>

                <div className={styles.accordionContainer}>
                    {policies.map((policy) => (
                        <div key={policy.id} className={styles.accordionItem}>
                            <button
                                className={`${styles.accordionTrigger} ${openId === policy.id ? styles.open : ''}`}
                                onClick={() => toggle(policy.id)}
                                aria-expanded={openId === policy.id}
                            >
                                <span className={styles.accordionTitle}>{policy.title}</span>
                                <ChevronIcon isOpen={openId === policy.id} />
                            </button>
                            {openId === policy.id && (
                                <div className={styles.accordionContent}>
                                    <ul className={styles.policyList}>
                                        {policy.content.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                    {policy.warnings && policy.warnings.length > 0 && (
                                        <div className={styles.warningBox}>
                                            <WarningIcon />
                                            <div>
                                                {policy.warnings.map((warning, idx) => (
                                                    <p key={idx} className={styles.warningText}>{warning}</p>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function HandbookIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14,2 14,8 20,8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10,9 9,9 8,9" />
        </svg>
    );
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
        >
            <polyline points="6,9 12,15 18,9" />
        </svg>
    );
}

function WarningIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
    );
}
