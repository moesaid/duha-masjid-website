import { X, Heart, ChevronRight } from 'lucide-react';
import { volunteerAreas } from '../../_data';
import { FormDropdown } from '../../../../_components';
import styles from './SignUpModal.module.scss';

interface SignUpModalProps {
    isOpen: boolean;
    selectedArea: string | null;
    onClose: () => void;
}

export function SignUpModal({ isOpen, selectedArea, onClose }: SignUpModalProps) {
    if (!isOpen) return null;

    const selectedAreaData = volunteerAreas.find(a => a.id === selectedArea);

    // Convert volunteer areas to dropdown options
    const areaOptions = volunteerAreas.map(a => ({
        value: a.id,
        label: a.title
    }));

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose}>
                    <X size={24} />
                </button>

                <div className={styles.modalHeader}>
                    <Heart size={24} />
                    <h2>Volunteer Sign Up</h2>
                    {selectedAreaData && <span className={styles.areaLabel}>{selectedAreaData.title}</span>}
                </div>

                <form className={styles.signUpForm} onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                    <input type="text" placeholder="Full Name" required />
                    <div className={styles.formRow}>
                        <input type="email" placeholder="Email" required />
                        <input type="tel" placeholder="Phone" required />
                    </div>
                    <FormDropdown
                        placeholder="Select Area"
                        options={areaOptions}
                        defaultValue={selectedArea || ''}
                        required
                    />
                    <textarea placeholder="Tell us about your availability and experience..." rows={3} />
                    <button type="submit" className={styles.submitBtn}>
                        Submit Application
                        <ChevronRight size={18} />
                    </button>
                </form>
            </div>
        </div>
    );
}
