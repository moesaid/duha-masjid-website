'use client';

import { useState } from 'react';
import { BookOpen, X } from 'lucide-react';
import { gradeLevels } from '../../_data';
import { FormDropdown } from '../../../../_components';
import styles from './RegistrationModal.module.scss';

interface RegistrationModalProps {
    isOpen: boolean;
    selectedGrade: string | null;
    onClose: () => void;
}

export function RegistrationModal({ isOpen, selectedGrade, onClose }: RegistrationModalProps) {
    const [gradeValue, setGradeValue] = useState(selectedGrade || '');

    if (!isOpen) return null;

    const selectedGradeData = gradeLevels.find(g => g.id === gradeValue);

    // Convert grade levels to dropdown options
    const gradeOptions = gradeLevels.map(g => ({
        value: g.id,
        label: `${g.name} - ${g.ageRange}`
    }));

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose}>
                    <X size={24} />
                </button>

                <div className={styles.modalHeader}>
                    <BookOpen size={24} />
                    <h2>Weekend School Registration</h2>
                    {selectedGradeData && (
                        <span className={styles.gradeLabel}>Grade: {selectedGradeData.name}</span>
                    )}
                </div>

                <form className={styles.registrationForm} onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                    <div className={styles.formSection}>
                        <h4>Student Information</h4>
                        <div className={styles.formRow}>
                            <input type="text" placeholder="Student Full Name" required />
                            <input type="number" placeholder="Age" required min="4" max="18" />
                        </div>
                        <FormDropdown
                            placeholder="Select Grade Level"
                            options={gradeOptions}
                            value={gradeValue}
                            onValueChange={setGradeValue}
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
                        <textarea placeholder="Any allergies, special needs, or notes..." rows={3} />
                    </div>

                    <div className={styles.formFooter}>
                        <button type="submit" className={styles.submitBtn}>Submit Registration</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
