'use client';

import { useState } from 'react';
import { X, Shield, ChevronRight, User, Mail, Phone } from 'lucide-react';
import { FormDropdown, FormDatePicker } from '../../../../_components';
import styles from './ApplicationModal.module.scss';

interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ApplicationModal({ isOpen, onClose }: ApplicationModalProps) {
    const [gradeLevel, setGradeLevel] = useState('');
    const [relationship, setRelationship] = useState('');
    const [howHeard, setHowHeard] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(undefined);

    if (!isOpen) return null;

    // Build grade options
    const gradeOptions = [
        { value: 'prek', label: 'Pre-K (Ages 3-4)' },
        { value: 'k', label: 'Kindergarten' },
        ...Array.from({ length: 12 }, (_, i) => ({
            value: String(i + 1),
            label: `Grade ${i + 1}`
        })),
        { value: 'hifz', label: 'Hifz Program' }
    ];

    const relationshipOptions = [
        { value: 'mother', label: 'Mother' },
        { value: 'father', label: 'Father' },
        { value: 'guardian', label: 'Legal Guardian' }
    ];

    const howHeardOptions = [
        { value: 'referral', label: 'Friend/Family Referral' },
        { value: 'masjid', label: 'Masjid Announcement' },
        { value: 'social', label: 'Social Media' },
        { value: 'website', label: 'Website' },
        { value: 'other', label: 'Other' }
    ];

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
                                <FormDatePicker
                                    label="Date of Birth"
                                    placeholder="Select birth date"
                                    date={dateOfBirth}
                                    onSelect={setDateOfBirth}
                                    maxDate={new Date()}
                                    captionLayout="dropdown-years"
                                    fromYear={2005}
                                    toYear={new Date().getFullYear()}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <FormDropdown
                                    label="Applying for Grade"
                                    placeholder="Select Grade Level"
                                    options={gradeOptions}
                                    value={gradeLevel}
                                    onValueChange={setGradeLevel}
                                    required
                                />
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
                                <FormDropdown
                                    label="Relationship"
                                    placeholder="Select Relationship"
                                    options={relationshipOptions}
                                    value={relationship}
                                    onValueChange={setRelationship}
                                    required
                                />
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
                            <FormDropdown
                                label="How did you hear about us?"
                                placeholder="Select an option"
                                options={howHeardOptions}
                                value={howHeard}
                                onValueChange={setHowHeard}
                            />
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
