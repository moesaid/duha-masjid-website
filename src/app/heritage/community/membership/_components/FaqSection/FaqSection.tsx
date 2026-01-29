import { FAQ } from '../../_data';
import styles from './FaqSection.module.scss';

interface FaqSectionProps {
    faqs: FAQ[];
}

export function FaqSection({ faqs }: FaqSectionProps) {
    return (
        <section className={styles.faqSection}>
            <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
                {faqs.map((faq, idx) => (
                    <div key={idx} className={styles.faqItem}>
                        <h4 className={styles.faqQuestion}>{faq.question}</h4>
                        <p className={styles.faqAnswer}>{faq.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
