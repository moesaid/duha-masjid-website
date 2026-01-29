'use client';

import { Heart, CheckCircle } from 'lucide-react';
import { BackLink } from '@/app/heritage/_components';
import { CampaignData, presetAmounts, formatCurrency } from '../_data';
import { UseDonationReturn } from '../_hooks';
import styles from '../CampaignPage.module.scss';

interface DonationWidgetProps {
    campaign: CampaignData;
    donation: UseDonationReturn;
}

export function DonationWidget({ campaign, donation }: DonationWidgetProps) {
    const percentage = Math.round((campaign.raised / campaign.goal) * 100);

    return (
        <aside className={styles.donationSidebar}>
            <div className={styles.donationWidget}>
                <div className={styles.widgetHeader}>
                    <div className={styles.progressCircle}>
                        <svg viewBox="0 0 100 100">
                            <circle className={styles.progressBg} cx="50" cy="50" r="45" />
                            <circle
                                className={styles.progressFill}
                                cx="50" cy="50" r="45"
                                strokeDasharray={`${percentage * 2.83} 283`}
                            />
                        </svg>
                        <div className={styles.progressText}>
                            <span className={styles.progressPercent}>{percentage}%</span>
                            <span className={styles.progressLabel}>Funded</span>
                        </div>
                    </div>

                    <div className={styles.fundingStats}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>{formatCurrency(campaign.raised)}</span>
                            <span className={styles.statLabel}>raised of {formatCurrency(campaign.goal)}</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>{campaign.donors}</span>
                            <span className={styles.statLabel}>donors</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>{campaign.daysLeft}</span>
                            <span className={styles.statLabel}>days left</span>
                        </div>
                    </div>
                </div>

                <div className={styles.widgetBody}>
                    {/* Amount Selector */}
                    <div className={styles.amountSection}>
                        <label className={styles.fieldLabel}>Select Amount</label>
                        <div className={styles.amountGrid}>
                            {presetAmounts.map((amount) => (
                                <button
                                    key={amount}
                                    className={`${styles.amountBtn} ${donation.selectedAmount === amount ? styles.selected : ''}`}
                                    onClick={() => donation.handleAmountSelect(amount)}
                                >
                                    ${amount}
                                </button>
                            ))}
                        </div>
                        <div className={styles.customAmount}>
                            <span className={styles.currencySymbol}>$</span>
                            <input
                                type="number"
                                placeholder="Custom Amount"
                                value={donation.customAmount}
                                onChange={(e) => donation.handleCustomAmount(e.target.value)}
                                className={styles.customInput}
                            />
                        </div>
                    </div>

                    {/* Frequency Toggle */}
                    <div className={styles.frequencySection}>
                        <label className={styles.fieldLabel}>Donation Frequency</label>
                        <div className={styles.frequencyToggle}>
                            <button
                                className={`${styles.frequencyBtn} ${!donation.isMonthly ? styles.active : ''}`}
                                onClick={() => donation.setIsMonthly(false)}
                            >
                                One-Time
                            </button>
                            <button
                                className={`${styles.frequencyBtn} ${donation.isMonthly ? styles.active : ''}`}
                                onClick={() => donation.setIsMonthly(true)}
                            >
                                Monthly
                            </button>
                        </div>
                        {donation.isMonthly && (
                            <p className={styles.monthlyNote}>✨ Monthly donors are recognized as "Sustainers"</p>
                        )}
                    </div>

                    {/* Privacy Option */}
                    <div className={styles.privacySection}>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                checked={donation.hideName}
                                onChange={(e) => donation.setHideName(e.target.checked)}
                            />
                            <span className={styles.checkmark}></span>
                            Hide my name from donor list
                        </label>
                    </div>

                    {/* Donate Button */}
                    <button className={styles.donateBtn}>
                        <Heart size={20} />
                        Donate {donation.getFinalAmount() > 0 ? `$${donation.getFinalAmount().toLocaleString()}` : 'Now'}
                        {donation.isMonthly && donation.getFinalAmount() > 0 && '/mo'}
                    </button>

                    <p className={styles.secureNote}><CheckCircle size={14} /> Secure, encrypted donation</p>
                </div>

                <div className={styles.widgetFooter}>
                    <BackLink href="/heritage/donate" label="View All Campaigns" variant="dark" />
                </div>
            </div>
        </aside>
    );
}
