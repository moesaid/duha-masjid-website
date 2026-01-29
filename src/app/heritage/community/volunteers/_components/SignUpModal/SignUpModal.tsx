import { X, Heart } from 'lucide-react';
import { volunteerAreas } from '../../_data';
import styles from './SignUpModal.module.scss';

interface SignUpModalProps {
    isOpen: boolean;
    selectedArea: string | null;
    onClose: () => void;
}

export function SignUpModal({ isOpen, selectedArea, onClose }: SignUpModalProps) {
    if (!isOpen) return null;

    const selectedAreaData = volunteerAreas.find(a => a.id === selectedArea);

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
                    <select required defaultValue={selectedArea || ''}>
                        <option value="" disabled>Select Area</option>
                        {volunteerAreas.map(a => (
                            <option key={a.id} value={a.id}>{a.title}</option>
                        ))}
                    </select>
                    <textarea placeholder="Tell us about your availability and experience..." rows={3} />
                    <button type="submit" className={styles.submitBtn}>Submit Application</button>
                </form>
            </div>
        </div>
    );
}
