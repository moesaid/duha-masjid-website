'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Shield } from 'lucide-react';
import styles from '../Youth.module.css';

const features = [
    { icon: Heart, text: 'A welcoming community that feels like family' },
    { icon: Shield, text: 'Safe, supervised environment' },
    { icon: Users, text: 'Mentors who genuinely care about you' },
];

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
};

export function JoinSplit() {
    return (
        <section id="join" className={styles.joinSection}>
            <div className={styles.container}>
                <motion.div
                    className={styles.joinCard}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={fadeIn}
                >
                    <div className={styles.joinContent}>
                        <h2>You&apos;re Welcome Here</h2>
                        <p>
                            Whether you&apos;re super practicing or just starting to explore your faith,
                            there&apos;s a place for you here. Come as you are. We&apos;d love to meet you.
                        </p>
                        <div className={styles.joinFeatures}>
                            {features.map((feature) => {
                                const Icon = feature.icon;
                                return (
                                    <div key={feature.text} className={styles.joinFeature}>
                                        <Icon size={18} />
                                        <span>{feature.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <form className={styles.joinForm} onSubmit={(e) => e.preventDefault()}>
                        <h3 className={styles.joinFormTitle}>Get Connected</h3>

                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Your Name</label>
                            <input
                                type="text"
                                className={styles.formInput}
                                placeholder="What should we call you?"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Email</label>
                            <input
                                type="email"
                                className={styles.formInput}
                                placeholder="We'll send you updates"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Age Group</label>
                            <select className={styles.formSelect}>
                                <option value="">Which group fits you?</option>
                                <option value="explorers">11-13 (Explorers)</option>
                                <option value="believers">14-17 (Young Believers)</option>
                                <option value="young-adults">18-25 (Young Adults)</option>
                            </select>
                        </div>

                        <button type="submit" className={styles.formSubmit}>
                            I&apos;m In!
                            <ArrowRight size={16} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
