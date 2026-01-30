'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle } from 'lucide-react';
import styles from '../Team.module.css';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const },
    },
};

export function AskImam() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        question: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Question submitted:', formData);
    };

    return (
        <section className={styles.askImamSection}>
            <div className={styles.container}>
                <motion.div
                    className={styles.askImamGrid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={fadeIn}
                >
                    <div className={styles.askImamContent}>
                        <h2>
                            <MessageCircle size={28} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                            Ask the Imam
                        </h2>
                        <p>
                            Have a question about Islamic practice, family matters,
                            or spiritual guidance? Submit your question and our
                            scholars will respond within 48 hours. All questions
                            are handled with complete confidentiality.
                        </p>
                    </div>

                    <form className={styles.askImamForm} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.formLabel}>
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className={styles.formInput}
                                placeholder="Brother/Sister Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.formLabel}>
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className={styles.formInput}
                                placeholder="email@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="question" className={styles.formLabel}>
                                Your Question
                            </label>
                            <textarea
                                id="question"
                                className={styles.formTextarea}
                                placeholder="What would you like to ask?"
                                rows={4}
                                value={formData.question}
                                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                                required
                            />
                        </div>

                        <motion.button
                            type="submit"
                            className={styles.formSubmit}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Send size={18} />
                            Submit Question
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
