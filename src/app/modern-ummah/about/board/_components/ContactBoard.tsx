'use client';

import { useState } from 'react';
import styles from '../Board.module.css';

export function ContactBoard() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <section className={styles.contactSection}>
            <div className={styles.container}>
                <div className={styles.contactCard}>
                    <div className={styles.contactContent}>
                        <div className={styles.contactIcon}>
                            <MailIcon />
                        </div>
                        <h2 className={styles.contactTitle}>Have a Suggestion or Concern?</h2>
                        <p className={styles.contactSubtitle}>
                            We value your feedback. The board is committed to listening to and serving our community.
                        </p>
                        <button
                            className={styles.contactButton}
                            onClick={() => setIsFormOpen(!isFormOpen)}
                        >
                            <MessageIcon />
                            Contact the Board
                        </button>
                    </div>

                    {isFormOpen && (
                        <div className={styles.contactForm}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.formLabel}>Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className={styles.formInput}
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.formLabel}>Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className={styles.formInput}
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.formLabel}>Your Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className={styles.formTextarea}
                                    placeholder="Share your thoughts, suggestions, or concerns..."
                                />
                            </div>
                            <button type="submit" className={styles.formSubmit}>
                                Send Message
                                <SendIcon />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

function MailIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
        </svg>
    );
}

function MessageIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
    );
}

function SendIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22,2 15,22 11,13 2,9" />
        </svg>
    );
}
