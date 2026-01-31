'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, Input } from '../../../_components';
import { Calculator, ArrowRight, Shield } from 'lucide-react';
import styles from './ZakatCalculator.module.css';
import { distributionData } from '../_data';

export function ZakatCalculator() {
    const [goldValue, setGoldValue] = useState('');
    const [savings, setSavings] = useState('');
    const [investments, setInvestments] = useState('');
    const [businessAssets, setBusinessAssets] = useState('');

    const calculateZakat = () => {
        const total =
            (parseFloat(goldValue) || 0) +
            (parseFloat(savings) || 0) +
            (parseFloat(investments) || 0) +
            (parseFloat(businessAssets) || 0);
        return (total * 0.025).toFixed(2);
    };

    const totalAssets = () => {
        return (
            (parseFloat(goldValue) || 0) +
            (parseFloat(savings) || 0) +
            (parseFloat(investments) || 0) +
            (parseFloat(businessAssets) || 0)
        ).toFixed(2);
    };

    return (
        <section id="calculator" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.header}>
                        <div className={styles.headerIcon}>
                            <Calculator size={28} />
                        </div>
                        <div>
                            <h2 className={styles.title}>Zakat Calculator</h2>
                            <span className={styles.subtitle}>Calculate your 2.5% Zakat al-Maal accurately knowing Nisab threshold.</span>
                        </div>
                    </div>

                    <div className={styles.body}>
                        <div className={styles.grid}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Gold & Silver Value ($)</label>
                                <Input
                                    type="number"
                                    value={goldValue}
                                    onChange={(e) => setGoldValue(e.target.value)}
                                    placeholder="0.00"
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Cash & Savings ($)</label>
                                <Input
                                    type="number"
                                    value={savings}
                                    onChange={(e) => setSavings(e.target.value)}
                                    placeholder="0.00"
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Investments & Stocks ($)</label>
                                <Input
                                    type="number"
                                    value={investments}
                                    onChange={(e) => setInvestments(e.target.value)}
                                    placeholder="0.00"
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Business Assets ($)</label>
                                <Input
                                    type="number"
                                    value={businessAssets}
                                    onChange={(e) => setBusinessAssets(e.target.value)}
                                    placeholder="0.00"
                                />
                            </div>
                        </div>

                        <div className={styles.results}>
                            <div className={styles.row}>
                                <span>Total Zakatable Assets:</span>
                                <strong>${totalAssets()}</strong>
                            </div>
                            <div className={styles.totalRow}>
                                <span>Zakat Due (2.5%):</span>
                                <strong>${calculateZakat()}</strong>
                            </div>
                        </div>

                        <Button href="/modern-ummah/donate?fund=zakat" variant="primary" className={styles.payButton}>
                            Pay Your Zakat Now
                            <ArrowRight size={18} />
                        </Button>
                    </div>
                </div>

                <div className={styles.transparency}>
                    <div className={styles.guarantee}>
                        <Shield size={20} />
                        100% Zakat Guarantee
                    </div>
                    <div className={styles.chart}>
                        {distributionData.map((item, index) => (
                            <div key={index} className={styles.chartItem}>
                                <span className={styles.chartLabel}>{item.category}</span>
                                <div className={styles.chartBarBg}>
                                    <div
                                        className={styles.chartBarFill}
                                        style={{ width: `${item.percentage}%` }}
                                    />
                                </div>
                                <span className={styles.chartValue}>{item.percentage}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
