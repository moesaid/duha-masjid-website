import { TuitionProgram, AdditionalFee, tuitionData } from '../_data';
import styles from '../FullTimeSchoolPage.module.scss';

interface TuitionSectionProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    currentTuition: TuitionProgram;
    additionalFees: AdditionalFee[];
}

export function TuitionSection({ activeTab, setActiveTab, currentTuition, additionalFees }: TuitionSectionProps) {
    return (
        <section className={styles.tuitionSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Transparent Pricing</span>
                <h2 className={styles.sectionTitle}>Tuition & Fees</h2>
                <p className={styles.sectionSubtitle}>
                    Sibling discounts available — 10% off 2nd child, 20% off 3rd+ child
                </p>
            </div>

            <div className={styles.tuitionTabs}>
                {Object.entries(tuitionData).map(([key, data]) => (
                    <button
                        key={key}
                        className={`${styles.tuitionTab} ${activeTab === key ? styles.active : ''}`}
                        onClick={() => setActiveTab(key)}
                    >
                        {data.title.split(' ')[0]}
                    </button>
                ))}
            </div>

            <div className={styles.tuitionCard}>
                <div className={styles.tuitionHeader}>
                    <h3>{currentTuition.title}</h3>
                    <span>{currentTuition.grades}</span>
                </div>

                <table className={styles.tuitionTable}>
                    <thead>
                        <tr>
                            <th>Program</th>
                            <th>1st Child</th>
                            <th>2nd Child</th>
                            <th>3rd+ Child</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentTuition.tiers.map((tier, index) => (
                            <tr key={index}>
                                <td>{tier.name}</td>
                                <td className={styles.price}>${tier.first.toLocaleString()}</td>
                                <td className={styles.price}>${tier.second.toLocaleString()}</td>
                                <td className={styles.price}>${tier.third.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {currentTuition.installment && (
                    <p className={styles.installmentNote}>
                        * 10-month installment plans available. Contact admissions for details.
                    </p>
                )}
            </div>

            <div className={styles.feesGrid}>
                <h4 className={styles.feesTitle}>Additional Fees</h4>
                <div className={styles.feeCards}>
                    {additionalFees.map((fee) => (
                        <div key={fee.name} className={styles.feeCard}>
                            <span className={styles.feeName}>{fee.name}</span>
                            <span className={styles.feeAmount}>${fee.amount}</span>
                            <span className={`${styles.feeNote} ${fee.nonRefundable ? styles.nonRefundable : ''}`}>
                                {fee.note}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
