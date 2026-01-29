import { BookOpen } from 'lucide-react';
import { borrowingRules } from '../../_data';
import styles from './RulesSection.module.scss';

export function RulesSection() {
    return (
        <section className={styles.rulesSection}>
            <div className={styles.rulesPlaque}>
                <div className={styles.plaqueHeader}>
                    <div className={styles.exLibris}>
                        <BookOpen size={24} />
                        <span>Ex Libris</span>
                    </div>
                    <h2>Library Rules & Policies</h2>
                </div>

                <div className={styles.rulesGrid}>
                    {borrowingRules.map((rule) => {
                        const IconComponent = rule.icon;
                        return (
                            <div key={rule.title} className={styles.ruleItem}>
                                <div className={styles.ruleIcon}><IconComponent size={20} /></div>
                                <div className={styles.ruleContent}>
                                    <h4>{rule.title}</h4>
                                    <p>{rule.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
