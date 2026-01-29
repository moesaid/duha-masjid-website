import { BookOpen, Send, Lock, Heart } from 'lucide-react';
import { FormData } from '../_hooks';
import styles from '../TeamPage.module.scss';

interface AskImamFormProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    formSubmitted: boolean;
    handleSubmit: (e: React.FormEvent) => void;
}

export function AskImamForm({ formData, setFormData, formSubmitted, handleSubmit }: AskImamFormProps) {
    return (
        <section className={styles.askSection}>
            <div className={styles.askContainer}>
                <div className={styles.askHeader}>
                    <BookOpen className={styles.askIcon} size={32} />
                    <h2 className={styles.askTitle}>Ask the Imam</h2>
                    <p className={styles.askSubtitle}>
                        Have a religious question? Submit your inquiry and our scholars will respond.
                    </p>
                </div>

                {formSubmitted ? (
                    <div className={styles.formSuccess}>
                        <Heart size={24} />
                        <p>JazakAllah Khair! Your question has been submitted.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className={styles.askForm}>
                        <div className={styles.formRow}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className={styles.formInput}
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className={styles.formInput}
                            />
                        </div>
                        <textarea
                            placeholder="Your Question..."
                            value={formData.question}
                            onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                            required
                            rows={5}
                            className={styles.formTextarea}
                        />
                        <div className={styles.formFooter}>
                            <span className={styles.privacyNote}>
                                <Lock size={14} />
                                Private & Confidential
                            </span>
                            <button type="submit" className={styles.submitButton}>
                                <Send size={16} />
                                Submit Question
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
}
