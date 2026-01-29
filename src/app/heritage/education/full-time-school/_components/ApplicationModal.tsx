'use client';

import { X, Shield, ChevronRight, User, Mail, Phone } from 'lucide-react';
import styles from '../FullTimeSchoolPage.module.scss';

interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ApplicationModal({ isOpen, onClose }: ApplicationModalProps) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose}>
                    <X size={24} />
                </button>

                <div className={styles.modalHeader}>
                    <div className={styles.modalCrest}>
                        <Shield size={32} />
                    </div>
                    <div>
                        <h2>School Application</h2>
                        <p>2026-2027 Academic Year</p>
                    </div>
                </div>

                <form className={styles.applicationForm} onSubmit={(e) => e.preventDefault()}>
                    <div className={styles.formSection}>
                        <h3>Student Information</h3>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>First Name *</label>
                                <div className={styles.inputWrapper}>
                                    <User size={16} />
                                    <input type="text" placeholder="Student's first name" required />
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Last Name *</label>
                                <div className={styles.inputWrapper}>
                                    <User size={16} />
                                    <input type="text" placeholder="Student's last name" required />
                                </div>
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>Date of Birth *</label>
                                <input type="date" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Applying for Grade *</label>
                                <select required>
                                    <option value="">Select Grade Level</option>
                                    <option value="prek">Pre-K (Ages 3-4)</option>
                                    <option value="k">Kindergarten</option>
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(g => (
                                        <option key={g} value={String(g)}>Grade {g}</option>
                                    ))}
                                    <option value="hifz">Hifz Program</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formSection}>
                        <h3>Parent/Guardian Information</h3>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>Parent/Guardian Name *</label>
                                <div className={styles.inputWrapper}>
                                    <User size={16} />
                                    <input type="text" placeholder="Full name" required />
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Relationship *</label>
                                <select required>
                                    <option value="">Select Relationship</option>
                                    <option value="mother">Mother</option>
                                    <option value="father">Father</option>
                                    <option value="guardian">Legal Guardian</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>Email Address *</label>
                                <div className={styles.inputWrapper}>
                                    <Mail size={16} />
                                    <input type="email" placeholder="email@example.com" required />
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label>Phone Number *</label>
                                <div className={styles.inputWrapper}>
                                    <Phone size={16} />
                                    <input type="tel" placeholder="(555) 123-4567" required />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formSection}>
                        <h3>Additional Information</h3>
                        <div className={styles.formGroup}>
                            <label>How did you hear about us?</label>
                            <select>
                                <option value="">Select an option</option>
                                <option value="referral">Friend/Family Referral</option>
                                <option value="masjid">Masjid Announcement</option>
                                <option value="social">Social Media</option>
                                <option value="website">Website</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label>Additional Notes</label>
                            <textarea placeholder="Any additional information you'd like to share..." rows={3} />
                        </div>
                    </div>

                    <div className={styles.formFooter}>
                        <p className={styles.feeNotice}>
                            <strong>Application Fee:</strong> $150 (Non-Refundable)
                        </p>
                        <button type="submit" className={styles.submitBtn}>
                            Submit Application
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
