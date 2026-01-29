'use client';

import { useState } from 'react';
import { BookOpen, X } from 'lucide-react';
import { FormDropdown } from '../../../../_components';
import { programs } from '../../_data';
import styles from './RegistrationModal.module.scss';

interface RegistrationModalProps {
    isOpen: boolean;
    selectedProgram: string | null;
    onClose: () => void;
}

export function RegistrationModal({ isOpen, selectedProgram, onClose }: RegistrationModalProps) {
    const [programValue, setProgramValue] = useState(selectedProgram || '');

    if (!isOpen) return null;

    const selectedProgramData = programs.find(p => p.id === programValue);

    // Convert programs to dropdown options
    const programOptions = programs.map(p => ({
        value: p.id,
        label: `${p.title} - ${p.ageGroup}`
    }));

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose}>
                    <X size={24} />
                </button>

                <div className={styles.modalHeader}>
                    <BookOpen size={24} />
                    <h2>Student Registration</h2>
                    {selectedProgramData && (
                        <span className={styles.programLabel}>Program: {selectedProgramData.title}</span>
                    )}
                </div>

                <form className={styles.registrationForm} onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                    <div className={styles.formSection}>
                        <h4>Student Information</h4>
                        <div className={styles.formRow}>
                            <input type="text" placeholder="Student Full Name" required />
                            <input type="number" placeholder="Age" required min="5" max="100" />
                        </div>
                        <FormDropdown
                            placeholder="Select Program"
                            options={programOptions}
                            value={programValue}
                            onValueChange={setProgramValue}
                            triggerClassName={styles.modalDropdown}
                            required
                        />
                    </div>

                    <div className={styles.formSection}>
                        <h4>Parent/Guardian Information</h4>
                        <input type="text" placeholder="Parent/Guardian Name" required />
                        <div className={styles.formRow}>
                            <input type="tel" placeholder="Phone Number" required />
                            <input type="email" placeholder="Email Address" required />
                        </div>
                    </div>

                    <div className={styles.formSection}>
                        <h4>Additional Information</h4>
                        <textarea placeholder="Any previous Quran learning experience or special notes..." rows={3} />
                    </div>

                    <div className={styles.formFooter}>
                        <button type="submit" className={styles.submitBtn}>Submit Registration</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
