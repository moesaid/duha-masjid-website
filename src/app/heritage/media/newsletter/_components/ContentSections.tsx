import Image from 'next/image';
import { Mail, Calendar, Check, ChevronRight } from 'lucide-react';
import { recentNewsletters, subscriptionBenefits, categories, Newsletter } from '../_data';
import styles from '../NewsletterPage.module.scss';

export function HeroSection() {
    return (
        <section className={styles.newsletterHero}>
            <div className={styles.heroBackground}>
                <Image src="/images/heritage/newsletter.jpg" alt="" fill priority className={styles.heroImage} />
                <div className={styles.heroOverlay} />
            </div>
            <div className={styles.heroContent}>
                <div className={styles.mailIcon}><Mail size={32} /></div>
                <span className={styles.arabicTitle}>النَّشْرَة</span>
                <h1 className={styles.heroTitle}>Newsletter</h1>
                <p className={styles.heroTagline}>Stay connected with our community updates</p>
            </div>
        </section>
    );
}

interface SubscribeProps {
    email: string;
    setEmail: (v: string) => void;
    isSubscribed: boolean;
    onSubscribe: (e: React.FormEvent) => void;
}

export function SubscribeSection({ email, setEmail, isSubscribed, onSubscribe }: SubscribeProps) {
    return (
        <section className={styles.subscribeSection}>
            <div className={styles.subscribeCard}>
                {isSubscribed ? (
                    <div className={styles.successMessage}>
                        <Check size={32} />
                        <h3>Successfully Subscribed!</h3>
                        <p>Check your inbox for a confirmation email.</p>
                    </div>
                ) : (
                    <>
                        <h2>Subscribe to Our Newsletter</h2>
                        <ul className={styles.benefits}>
                            {subscriptionBenefits.map((b, i) => (
                                <li key={i}><Check size={16} /><span>{b}</span></li>
                            ))}
                        </ul>
                        <form onSubmit={onSubscribe}>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                            <button type="submit">Subscribe</button>
                        </form>
                    </>
                )}
            </div>
        </section>
    );
}

interface ArchiveProps {
    activeCategory: string;
    setActiveCategory: (c: string) => void;
}

export function ArchiveSection({ activeCategory, setActiveCategory }: ArchiveProps) {
    return (
        <section className={styles.archiveSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Past Issues</span>
                <h2 className={styles.sectionTitle}>Newsletter Archive</h2>
            </div>
            <div className={styles.categoryFilter}>
                {categories.map((cat) => (
                    <button key={cat} className={activeCategory === cat ? styles.active : ''} onClick={() => setActiveCategory(cat)}>
                        {cat}
                    </button>
                ))}
            </div>
            <div className={styles.archiveGrid}>
                {recentNewsletters.map((nl: Newsletter) => (
                    <div key={nl.id} className={styles.newsletterCard}>
                        <span className={styles.date}><Calendar size={14} />{nl.date}</span>
                        <h3>{nl.title}</h3>
                        <p>{nl.preview}</p>
                        <button className={styles.readBtn}>Read <ChevronRight size={16} /></button>
                    </div>
                ))}
            </div>
        </section>
    );
}
