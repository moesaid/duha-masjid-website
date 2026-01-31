'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '../../../_components';
import { Users, FileText, CheckCircle, FileDown, ArrowRight } from 'lucide-react';
import styles from './AssistanceTabs.module.css';
import { eligibilityCriteria, applicationSteps } from '../_data';

export function AssistanceTabs() {
    const [activeTab, setActiveTab] = useState<'eligibility' | 'process'>('eligibility');

    return (
        <section id="assistance" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Community Assistance Program</h2>
                    <p className={styles.description}>
                        Confidential support for those facing financial hardship in our community.
                    </p>
                </div>

                <div className={styles.tabs}>
                    <button
                        className={`${styles.tabBtn} ${activeTab === 'eligibility' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('eligibility')}
                    >
                        <Users size={18} />
                        Eligibility Criteria
                    </button>
                    <button
                        className={`${styles.tabBtn} ${activeTab === 'process' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('process')}
                    >
                        <FileText size={18} />
                        Application Process
                    </button>
                </div>

                <div className={styles.contentContainer}>
                    <div className={styles.infoArea}>
                        {activeTab === 'eligibility' ? (
                            <>
                                <h3 className={styles.contentTitle}>Who Qualifies?</h3>
                                <span className={styles.contentSubtitle}>Requirements for Assistance</span>
                                <p className={styles.contentText}>
                                    Our Zakat funds are distributed according to strict Islamic guidelines and local residency requirements.
                                </p>
                                <ul className={styles.list}>
                                    {eligibilityCriteria.map((item, index) => (
                                        <li key={index} className={styles.listItem}>
                                            <CheckCircle className={styles.checkIcon} size={20} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <>
                                <h3 className={styles.contentTitle}>How to Apply</h3>
                                <span className={styles.contentSubtitle}>Step-by-Step Guide</span>
                                <p className={styles.contentText}>
                                    We strive to make the application process as dignified and simple as possible.
                                </p>
                                <ul className={styles.list}>
                                    {applicationSteps.map((step) => (
                                        <li key={step.number} className={styles.listItem}>
                                            <div className={`${styles.checkIcon} ${styles.numberIcon}`}>
                                                {step.number}
                                            </div>
                                            <div>
                                                <strong>{step.title}</strong>
                                                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-tertiary)' }}>{step.description}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>

                    <div className={styles.actionArea}>
                        <h3>Ready to apply?</h3>
                        <p className={styles.contentText}>
                            Download the application form or contact us for a confidential consultation.
                        </p>

                        <Button href="/documents/zakat-application-form.pdf" variant="outline" className={styles.downloadButton}>
                            <FileDown size={18} />
                            Download Application Form
                        </Button>

                        <Button href="mailto:zakat@alnoormasjid.org" variant="outline" className={styles.downloadButton}>
                            Contact Zakat Committee
                            <ArrowRight size={18} />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
