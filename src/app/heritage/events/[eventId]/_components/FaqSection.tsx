'use client';

import { ChevronDown } from 'lucide-react';
import { FAQ } from '../_data';
import { UseFaqReturn } from '../_hooks';
import styles from '../EventPage.module.scss';

interface FaqSectionProps {
    faqs: FAQ[];
    faqState: UseFaqReturn;
}

export function FaqSection({ faqs, faqState }: FaqSectionProps) {
    return (
        <section className={styles.faqSection}>
            <div className={styles.faqContainer}>
                <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>

                <div className={styles.faqList}>
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`${styles.faqItem} ${faqState.expandedIndex === idx ? styles.expanded : ''}`}
                        >
                            <button
                                className={styles.faqQuestion}
                                onClick={() => faqState.toggle(idx)}
                            >
                                <span>{faq.question}</span>
                                <ChevronDown size={20} />
                            </button>
                            <div className={styles.faqAnswer}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
