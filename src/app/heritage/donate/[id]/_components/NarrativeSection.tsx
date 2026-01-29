import { ChevronDown, ChevronUp } from 'lucide-react';
import { SectionHeader } from '@/app/heritage/_components';
import { ImpactTier, Donor, CampaignUpdate, FAQ, CampaignData } from '../_data';
import styles from '../CampaignPage.module.scss';

interface NarrativeSectionProps {
    campaign: CampaignData;
    impactTiers: ImpactTier[];
    recentDonors: Donor[];
    campaignUpdates: CampaignUpdate[];
    faqData: FAQ[];
    openFaq: number | null;
    onFaqToggle: (idx: number) => void;
    onAmountSelect: (amount: number) => void;
    onSeeAllUpdates: () => void;
}

export function NarrativeSection({
    campaign,
    impactTiers,
    recentDonors,
    campaignUpdates,
    faqData,
    openFaq,
    onFaqToggle,
    onAmountSelect,
    onSeeAllUpdates
}: NarrativeSectionProps) {
    return (
        <>
            {/* THE NARRATIVE */}
            <section className={styles.narrativeSection}>
                <h2 className={styles.narrativeTitle}>Why This Matters</h2>
                <div className={styles.narrativeBlock}>
                    <h3 className={styles.narrativeSubtitle}>The Challenge</h3>
                    <p className={styles.narrativeText}>
                        Our beloved masjid has been the heart of our community for over two decades.
                        Yet, we lack a defining architectural feature that announces our presence
                        and calls the faithful to prayer.
                    </p>
                </div>
                <div className={styles.narrativeBlock}>
                    <h3 className={styles.narrativeSubtitle}>The Vision</h3>
                    <p className={styles.narrativeText}>
                        The new minaret will rise 65 feet tall, featuring traditional Islamic
                        geometric patterns illuminated with LED lighting.
                    </p>
                </div>
                <div className={styles.narrativeBlock}>
                    <h3 className={styles.narrativeSubtitle}>The Eternal Reward</h3>
                    <div className={styles.hadithCard}>
                        <p className={styles.hadithArabic}>مَنْ بَنَى مَسْجِدًا لِلَّهِ بَنَى اللَّهُ لَهُ بَيْتًا فِي الْجَنَّةِ</p>
                        <p className={styles.hadithTranslation}>"Whoever builds a mosque for Allah, Allah will build for him a house in Paradise."</p>
                        <span className={styles.hadithSource}>— Sahih al-Bukhari</span>
                    </div>
                </div>
            </section>

            {/* IMPACT TIERS */}
            <section className={styles.impactSection}>
                <SectionHeader title="Make Your Gift Tangible" subtitle="See exactly what your donation provides" />
                <div className={styles.impactGrid}>
                    {impactTiers.map((tier, idx) => (
                        <div key={idx} className={styles.impactCard} onClick={() => onAmountSelect(tier.amount)}>
                            <div className={styles.impactIcon}><tier.icon size={24} /></div>
                            <div className={styles.impactAmount}>${tier.amount.toLocaleString()}</div>
                            <h3 className={styles.impactTitle}>{tier.title}</h3>
                            <p className={styles.impactDesc}>{tier.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* UPDATES PREVIEW */}
            <section className={styles.updatesSection}>
                <SectionHeader title="Latest Updates" subtitle="Recent progress from the field" />
                <div className={styles.timeline}>
                    {campaignUpdates.slice(0, 2).map((update, idx) => (
                        <div key={idx} className={styles.timelineItem}>
                            <div className={styles.timelineMarker}></div>
                            <div className={styles.timelineContent}>
                                <span className={styles.updateDate}>{update.date}</span>
                                <h3 className={styles.updateTitle}>{update.title}</h3>
                                <p className={styles.updateText}>{update.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.seeAllUpdates}>
                    <button className={styles.seeAllBtn} onClick={onSeeAllUpdates}>
                        Read All Updates ({campaignUpdates.length})
                    </button>
                </div>
            </section>

            {/* RECENT DONORS */}
            <section className={styles.donorsSection}>
                <SectionHeader title="Recent Supporters" subtitle={`Join ${campaign.donors}+ donors who have contributed`} />
                <div className={styles.donorsList}>
                    {recentDonors.map((donor, idx) => (
                        <div key={idx} className={styles.donorItem}>
                            <div className={styles.donorAvatar}>{donor.name === 'Anonymous' ? '?' : donor.name.charAt(0)}</div>
                            <div className={styles.donorInfo}>
                                <span className={styles.donorName}>{donor.name}</span>
                                {donor.message && <span className={styles.donorMessage}>"{donor.message}"</span>}
                            </div>
                            <span className={styles.donorAmount}>${donor.amount.toLocaleString()}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className={styles.faqSection}>
                <SectionHeader title="Frequently Asked Questions" />
                <div className={styles.faqList}>
                    {faqData.map((faq, idx) => (
                        <div key={idx} className={`${styles.faqItem} ${openFaq === idx ? styles.open : ''}`}>
                            <button className={styles.faqQuestion} onClick={() => onFaqToggle(idx)}>
                                <span>{faq.question}</span>
                                <div className={styles.faqBadges}>
                                    {faq.isZakatEligible !== undefined && (
                                        <span className={`${styles.zakatBadge} ${faq.isZakatEligible ? styles.eligible : styles.notEligible}`}>
                                            {faq.isZakatEligible ? 'Zakat Eligible' : 'Not Zakat Eligible'}
                                        </span>
                                    )}
                                    {openFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </div>
                            </button>
                            {openFaq === idx && <div className={styles.faqAnswer}><p>{faq.answer}</p></div>}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
