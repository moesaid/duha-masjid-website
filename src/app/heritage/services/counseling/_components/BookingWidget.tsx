'use client';

import { Calendar, ChevronRight, Mail, CheckCircle, User } from 'lucide-react';
import { UseBookingWizardReturn } from '../_hooks';
import { GuidanceService, Counselor, timeSlots } from '../_data';
import styles from '../CounselingPage.module.scss';

interface BookingWidgetProps {
    wizard: UseBookingWizardReturn;
    services: GuidanceService[];
    counselors: Counselor[];
}

const STEPS = ['Service', 'Counselor', 'Time', 'Confirm'] as const;

export function BookingWidget({ wizard, services, counselors }: BookingWidgetProps) {
    const {
        state,
        availableDates,
        canProceed,
        selectedServiceData,
        selectedCounselorData,
        setService,
        setCounselor,
        setDate,
        setTime,
        nextStep,
        prevStep
    } = wizard;

    return (
        <section className={styles.bookingSection}>
            <div className={styles.bookingContainer}>
                {/* Header */}
                <div className={styles.bookingHeader}>
                    <Calendar size={28} />
                    <h2>Book a Session</h2>
                    <p>Schedule a private consultation with one of our counselors</p>
                </div>

                {/* Progress Steps */}
                <div className={styles.bookingProgress}>
                    {STEPS.map((step, idx) => (
                        <div
                            key={step}
                            className={`${styles.progressStep} ${state.step > idx + 1 ? styles.completed : ''} ${state.step === idx + 1 ? styles.active : ''}`}
                        >
                            <span className={styles.stepNumber}>{idx + 1}</span>
                            <span className={styles.stepLabel}>{step}</span>
                        </div>
                    ))}
                </div>

                {/* Step 1: Select Service */}
                {state.step === 1 && (
                    <div className={styles.bookingStep}>
                        <h3>What type of guidance do you need?</h3>
                        <div className={styles.serviceOptions}>
                            {services.map((service) => {
                                const IconComponent = service.icon;
                                return (
                                    <button
                                        key={service.id}
                                        className={`${styles.serviceOption} ${state.selectedService === service.id ? styles.selected : ''}`}
                                        onClick={() => setService(service.id)}
                                    >
                                        <IconComponent size={20} />
                                        <span>{service.title}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Step 2: Select Counselor */}
                {state.step === 2 && (
                    <div className={styles.bookingStep}>
                        <h3>Choose your counselor</h3>
                        <div className={styles.counselorOptions}>
                            {counselors.map((counselor) => (
                                <button
                                    key={counselor.id}
                                    className={`${styles.counselorOption} ${state.selectedCounselor === counselor.id ? styles.selected : ''}`}
                                    onClick={() => setCounselor(counselor.id)}
                                >
                                    <div className={styles.optionAvatar}>
                                        <User size={24} />
                                    </div>
                                    <div className={styles.optionInfo}>
                                        <strong>{counselor.name}</strong>
                                        <span>{counselor.title}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 3: Select Date & Time */}
                {state.step === 3 && (
                    <div className={styles.bookingStep}>
                        <h3>Select your preferred date and time</h3>

                        <div className={styles.dateTimeGrid}>
                            <div className={styles.dateSelection}>
                                <h4>Available Dates</h4>
                                <div className={styles.dateOptions}>
                                    {availableDates.map((d) => (
                                        <button
                                            key={d.label}
                                            className={`${styles.dateOption} ${state.selectedDate === d.label ? styles.selected : ''}`}
                                            onClick={() => setDate(d.label)}
                                        >
                                            {d.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.timeSelection}>
                                <h4>Available Times</h4>
                                <div className={styles.timeOptions}>
                                    {timeSlots.map((time) => (
                                        <button
                                            key={time}
                                            className={`${styles.timeOption} ${state.selectedTime === time ? styles.selected : ''}`}
                                            onClick={() => setTime(time)}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 4: Confirmation */}
                {state.step === 4 && (
                    <div className={styles.bookingStep}>
                        <div className={styles.confirmationBox}>
                            <CheckCircle size={48} className={styles.confirmIcon} />
                            <h3>Confirm Your Appointment</h3>

                            <div className={styles.confirmationDetails}>
                                <div className={styles.confirmRow}>
                                    <span>Service:</span>
                                    <strong>{selectedServiceData?.title}</strong>
                                </div>
                                <div className={styles.confirmRow}>
                                    <span>Counselor:</span>
                                    <strong>{selectedCounselorData?.name}</strong>
                                </div>
                                <div className={styles.confirmRow}>
                                    <span>Date & Time:</span>
                                    <strong>{state.selectedDate} at {state.selectedTime}</strong>
                                </div>
                            </div>

                            <button className={styles.confirmButton}>
                                <CheckCircle size={18} />
                                Confirm Booking
                            </button>
                        </div>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className={styles.bookingNav}>
                    {state.step > 1 && (
                        <button className={styles.backButton} onClick={prevStep}>
                            Back
                        </button>
                    )}
                    {state.step < 4 && (
                        <button
                            className={styles.nextButton}
                            onClick={nextStep}
                            disabled={!canProceed}
                        >
                            Continue
                            <ChevronRight size={18} />
                        </button>
                    )}
                </div>

                {/* Alternative Contact */}
                <div className={styles.alternativeContact}>
                    <p>Prefer to email?</p>
                    <a href="mailto:counseling@duhamasjid.org">
                        <Mail size={16} />
                        counseling@duhamasjid.org
                    </a>
                </div>
            </div>
        </section>
    );
}
