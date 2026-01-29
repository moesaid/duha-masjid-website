import Link from 'next/link';
import { Globe, Calendar, ChevronRight, Sparkle } from 'lucide-react';
import styles from './HeroSection.module.scss';

export function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroPattern} />

            <div className={styles.heroLayout}>
                {/* Left Column - Welcome Portal */}
                <div className={styles.welcomePortal}>
                    <div className={styles.portalFrame}>
                        <div className={styles.portalInner}>
                            <Globe size={40} className={styles.portalIcon} />
                            <span className={styles.portalLabel}>Our Door is</span>
                            <span className={styles.portalHighlight}>Always Open</span>
                            <div className={styles.portalDivider}>
                                <Sparkle size={12} />
                            </div>
                            <span className={styles.portalSubtext}>مرحبا بكم</span>
                        </div>
                    </div>
                </div>

                {/* Right Column - Content */}
                <div className={styles.heroContent}>
                    <p className={styles.heroVerse}>
                        &ldquo;And We made you into nations and tribes that you may know one another.&rdquo;
                    </p>
                    <span className={styles.verseRef}>— Quran 49:13</span>

                    <h1 className={styles.heroTitle}>
                        Building Bridges of <span className={styles.titleAccent}>Understanding</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Whether you're a curious neighbor, a teacher planning a field trip, or someone
                        seeking to learn about Islam — you're invited to visit, ask questions, and
                        share a cup of tea with us.
                    </p>

                    <div className={styles.heroStats}>
                        <div className={styles.heroStat}>
                            <span className={styles.statNum}>12+</span>
                            <span className={styles.statLabel}>Years Serving</span>
                        </div>
                        <div className={styles.heroStat}>
                            <span className={styles.statNum}>2,500+</span>
                            <span className={styles.statLabel}>Guests Welcomed</span>
                        </div>
                        <div className={styles.heroStat}>
                            <span className={styles.statNum}>85</span>
                            <span className={styles.statLabel}>School Tours</span>
                        </div>
                    </div>

                    <div className={styles.heroActions}>
                        <Link href="/contact" className={styles.primaryCta}>
                            <Calendar size={18} />
                            Schedule a Visit
                        </Link>
                        <Link href="#services" className={styles.secondaryCta}>
                            Explore Programs
                            <ChevronRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
