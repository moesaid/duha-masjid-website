'use client';

import { X, User, Mail, Phone, Clock, ChevronRight, Heart } from 'lucide-react';
import { FormDropdown, FormDatePicker } from '../../../../_components';
import styles from './AppointmentModal.module.scss';

interface AppointmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const visitTypeOptions = [
    { value: 'new', label: 'New Patient Visit' },
    { value: 'followup', label: 'Follow-up Appointment' },
    { value: 'wellness', label: 'Wellness Check' },
    { value: 'chronic', label: 'Chronic Disease Management' },
    { value: 'womens', label: "Women's Health" },
    { value: 'pediatric', label: 'Pediatric Care' },
];

const timeSlotOptions = [
    { value: '9:00', label: '9:00 AM' },
    { value: '9:30', label: '9:30 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '10:30', label: '10:30 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '11:30', label: '11:30 AM' },
    { value: '13:00', label: '1:00 PM' },
    { value: '13:30', label: '1:30 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '14:30', label: '2:30 PM' },
    { value: '15:00', label: '3:00 PM' },
];

export function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose}>
                    <X size={24} />
                </button>

                <div className={styles.modalHeader}>
                    <div className={styles.modalIcon}>
                        <Heart size={28} />
                    </div>
                    <h2>Book Your Appointment</h2>
                    <p>Free healthcare for those in need</p>
                </div>

                <form className={styles.appointmentForm} onSubmit={(e) => e.preventDefault()}>
                    <div className={styles.formSection}>
                        <h3>Patient Information</h3>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>Full Name *</label>
                                <div className={styles.inputWrapper}>
                                    <User size={16} />
                                    <input type="text" placeholder="Your full name" required />
                                </div>
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>Email Address</label>
                                <div className={styles.inputWrapper}>
                                    <Mail size={16} />
                                    <input type="email" placeholder="email@example.com" />
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
                        <h3>Appointment Details</h3>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <FormDatePicker
                                    label="Preferred Date"
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <FormDropdown
                                    label="Preferred Time"
                                    placeholder="Select time"
                                    options={timeSlotOptions}
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <FormDropdown
                                label="Type of Visit"
                                placeholder="Select type of visit"
                                options={visitTypeOptions}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Brief Description of Concern</label>
                            <textarea
                                placeholder="Please briefly describe your health concern or reason for visit..."
                                rows={3}
                            />
                        </div>
                    </div>

                    <div className={styles.formFooter}>
                        <div className={styles.noInsuranceNote}>
                            <Heart size={16} />
                            <span>No insurance required. All services are free.</span>
                        </div>
                        <button type="submit" className={styles.submitBtn}>
                            Request Appointment
                            <ChevronRight size={18} />
                        </button>
                        <p className={styles.confirmNote}>
                            We will call to confirm your appointment within 24 hours.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
