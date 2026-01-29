'use client';

import { format, isWeekend } from 'date-fns';
import { Calendar as CalendarIcon, X } from 'lucide-react';
import { Hall, BookingFormData, eventTypes, durationOptions } from '../_data';
import { FormDropdown } from '../../../_components';
import styles from '../HallRentalPage.module.scss';

interface BookingModalProps {
    show: boolean;
    selectedHall: Hall;
    selectedDate: Date | null;
    formData: BookingFormData;
    getDateRate: (date: Date) => number;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    onSelectChange: (name: string, value: string) => void;
    onSubmit: (e: React.FormEvent) => void;
    onClose: () => void;
}

export function BookingModal({
    show,
    selectedHall,
    selectedDate,
    formData,
    getDateRate,
    onInputChange,
    onSelectChange,
    onSubmit,
    onClose
}: BookingModalProps) {
    if (!show || !selectedDate) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.bookingModal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeModal} onClick={onClose}>
                    <X size={24} />
                </button>

                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>Complete Your Booking</h2>
                    <div className={styles.bookingSummary}>
                        <div className={styles.summaryItem}>
                            <strong>Venue:</strong> {selectedHall.name}
                        </div>
                        <div className={styles.summaryItem}>
                            <strong>Date:</strong> {format(selectedDate, 'EEEE, MMMM d, yyyy')}
                        </div>
                        <div className={styles.summaryItem}>
                            <strong>Rate:</strong> ${getDateRate(selectedDate)}
                            {isWeekend(selectedDate) ? ' (Weekend)' : ' (Weekday)'}
                        </div>
                    </div>
                </div>

                <form className={styles.bookingForm} onSubmit={onSubmit}>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="fullName">Full Name *</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                required
                                placeholder="Your full name"
                                value={formData.fullName}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={onInputChange}
                            />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Phone Number *</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                placeholder="(555) 123-4567"
                                value={formData.phone}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="guestCount">Expected Guests *</label>
                            <input
                                type="number"
                                id="guestCount"
                                name="guestCount"
                                required
                                min="1"
                                max={selectedHall.capacity}
                                placeholder={`Max ${selectedHall.capacity}`}
                                value={formData.guestCount}
                                onChange={onInputChange}
                            />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <FormDropdown
                                label="Event Type"
                                placeholder="Select event type"
                                options={eventTypes}
                                value={formData.eventType}
                                onValueChange={(value) => onSelectChange('eventType', value)}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <FormDropdown
                                label="Duration"
                                placeholder="Select duration"
                                options={durationOptions}
                                value={formData.duration}
                                onValueChange={(value) => onSelectChange('duration', value)}
                                required
                            />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="notes">Additional Notes</label>
                        <textarea
                            id="notes"
                            name="notes"
                            rows={3}
                            placeholder="Any special requirements or questions..."
                            value={formData.notes}
                            onChange={onInputChange}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                name="agreedToPolicies"
                                required
                                checked={formData.agreedToPolicies}
                                onChange={onInputChange}
                            />
                            <span>I have read and agree to the rental policies *</span>
                        </label>
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        <CalendarIcon size={18} />
                        Confirm Booking Request
                    </button>
                </form>
            </div>
        </div>
    );
}
