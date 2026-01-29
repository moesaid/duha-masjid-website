import { X, Heart, CreditCard } from 'lucide-react';
import { contributionOptions, SponsorFormData } from '../_data';
import styles from '../RamadanPage.module.scss';

interface SponsorModalProps {
    selectedDay: number | null;
    sponsorForm: SponsorFormData;
    onClose: () => void;
    setSponsorName: (name: string) => void;
    setSponsorEmail: (email: string) => void;
    setSponsorPhone: (phone: string) => void;
    setContributionAmount: (amount: string) => void;
    setAnonymous: (anonymous: boolean) => void;
    onSubmit: (e: React.FormEvent) => void;
}

export function SponsorModal({
    selectedDay,
    sponsorForm,
    onClose,
    setSponsorName,
    setSponsorEmail,
    setSponsorPhone,
    setContributionAmount,
    setAnonymous,
    onSubmit
}: SponsorModalProps) {
    if (!selectedDay) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose} aria-label="Close modal">
                    <X size={24} />
                </button>

                <div className={styles.modalHeader}>
                    <div className={styles.modalIconWrapper}>
                        <Heart size={32} />
                    </div>
                    <h2>Sponsor Iftar Night {selectedDay}</h2>
                    <p className={styles.modalSubtitle}>Ramadan 1447</p>
                </div>

                <div className={styles.modalBody}>
                    <p className={styles.modalQuote}>
                        "Whoever feeds a fasting person will have a reward like that of the fasting person,
                        without any reduction in his reward."
                    </p>
                    <p className={styles.modalQuoteSource}>— Prophet Muhammad ﷺ (Tirmidhi)</p>

                    <form className={styles.sponsorForm} onSubmit={onSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="sponsorName">First & Last Name <span className={styles.required}>*</span></label>
                            <input
                                type="text"
                                id="sponsorName"
                                placeholder="Your answer"
                                value={sponsorForm.name}
                                onChange={(e) => setSponsorName(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="sponsorEmail">Email Address <span className={styles.required}>*</span></label>
                            <input
                                type="email"
                                id="sponsorEmail"
                                placeholder="your@email.com"
                                value={sponsorForm.email}
                                onChange={(e) => setSponsorEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="sponsorPhone">Phone Number <span className={styles.required}>*</span></label>
                            <input
                                type="tel"
                                id="sponsorPhone"
                                placeholder="(555) 123-4567"
                                value={sponsorForm.phone}
                                onChange={(e) => setSponsorPhone(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label>I would like to contribute <span className={styles.required}>*</span></label>
                            <div className={styles.radioGroup}>
                                {contributionOptions.map((opt) => (
                                    <label key={opt.value} className={styles.radioOption}>
                                        <input
                                            type="radio"
                                            name="contribution"
                                            value={opt.value}
                                            checked={sponsorForm.contributionAmount === opt.value}
                                            onChange={(e) => setContributionAmount(e.target.value)}
                                        />
                                        <span>{opt.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className={styles.anonymousOption}>
                            <input
                                type="checkbox"
                                id="anonymous"
                                checked={sponsorForm.anonymous}
                                onChange={(e) => setAnonymous(e.target.checked)}
                            />
                            <label htmlFor="anonymous">Sponsor anonymously</label>
                        </div>

                        <button type="submit" className={styles.paymentBtn}>
                            <CreditCard size={20} />
                            Proceed to Payment
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
