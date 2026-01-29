'use client';

import { Ticket, User, Users, X, Minus, Plus, ChevronRight, ArrowLeft, Mail, Phone } from 'lucide-react';
import { UseReservationReturn } from '../_hooks';
import { EventData } from '../_data';
import styles from '../EventPage.module.scss';

interface ReservationModalProps {
    event: EventData;
    reservation: UseReservationReturn;
}

export function ReservationModal({ event, reservation }: ReservationModalProps) {
    if (!reservation.isOpen) return null;

    const { pricing } = event;

    return (
        <div className={styles.modalOverlay} onClick={reservation.closeModal}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={reservation.closeModal}>
                    <X size={24} />
                </button>

                <div className={styles.modalHeader}>
                    <Ticket size={28} />
                    <h3>Reserve Your Seats</h3>
                    <p>{event.title} - {event.subtitle}</p>
                </div>

                {reservation.formStep === 'seats' ? (
                    <>
                        {/* Seat Selection Step */}
                        <div className={styles.modalBody}>
                            <div className={styles.seatCounters}>
                                {/* Adults */}
                                <div className={styles.seatRow}>
                                    <div className={styles.seatInfo}>
                                        <User size={20} />
                                        <div>
                                            <h4>Adult (13+)</h4>
                                            <span className={styles.seatPrice}>${pricing.adult} each</span>
                                        </div>
                                    </div>
                                    <div className={styles.seatCounter}>
                                        <button
                                            onClick={() => reservation.updateSeats('adults', -1)}
                                            disabled={reservation.seats.adults === 0}
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span>{reservation.seats.adults}</span>
                                        <button onClick={() => reservation.updateSeats('adults', 1)}>
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </div>

                                {/* Children */}
                                <div className={styles.seatRow}>
                                    <div className={styles.seatInfo}>
                                        <Users size={20} />
                                        <div>
                                            <h4>Child (5-12)</h4>
                                            <span className={styles.seatPrice}>${pricing.child} each</span>
                                        </div>
                                    </div>
                                    <div className={styles.seatCounter}>
                                        <button
                                            onClick={() => reservation.updateSeats('children', -1)}
                                            disabled={reservation.seats.children === 0}
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span>{reservation.seats.children}</span>
                                        <button onClick={() => reservation.updateSeats('children', 1)}>
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <p className={styles.freeNote}>Children under 5 are free and do not require a ticket.</p>
                        </div>

                        {/* Summary Footer */}
                        <div className={styles.modalFooter}>
                            <div className={styles.summaryRow}>
                                <span>{reservation.totalSeats} {reservation.totalSeats === 1 ? 'Seat' : 'Seats'}</span>
                                <span className={styles.totalPrice}>${reservation.totalPrice}</span>
                            </div>
                            <button
                                className={styles.proceedBtn}
                                onClick={reservation.goToDetails}
                                disabled={!reservation.canProceed}
                            >
                                Continue to Details
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Attendee Details Step */}
                        <div className={styles.modalBody}>
                            <button className={styles.backToSeats} onClick={reservation.goToSeats}>
                                <ArrowLeft size={16} />
                                Back to seat selection
                            </button>

                            {/* Contact Information */}
                            <div className={styles.contactSection}>
                                <h4>Contact Information</h4>
                                <p className={styles.contactNote}>Required for ticket confirmation</p>

                                <div className={styles.inputGroup}>
                                    <div className={styles.inputIcon}><Mail size={18} /></div>
                                    <input
                                        type="email"
                                        placeholder="Email address *"
                                        value={reservation.form.email}
                                        onChange={e => reservation.updateEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <div className={styles.inputIcon}><Phone size={18} /></div>
                                    <input
                                        type="tel"
                                        placeholder="Phone number *"
                                        value={reservation.form.phone}
                                        onChange={e => reservation.updatePhone(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Attendee Names */}
                            <div className={styles.attendeesSection}>
                                <h4>Attendee Names</h4>
                                <p className={styles.attendeeNote}>Names will appear on tickets</p>

                                {reservation.form.attendees.map((attendee, idx) => (
                                    <div key={idx} className={styles.attendeeRow}>
                                        <span className={styles.attendeeLabel}>
                                            {attendee.type === 'adult' ? 'Adult' : 'Child'} {
                                                reservation.form.attendees
                                                    .slice(0, idx + 1)
                                                    .filter(a => a.type === attendee.type).length
                                            }
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Full name"
                                            value={attendee.name}
                                            onChange={e => reservation.updateAttendeeName(idx, e.target.value)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Confirm Footer */}
                        <div className={styles.modalFooter}>
                            <div className={styles.summaryRow}>
                                <span>
                                    {reservation.seats.adults} Adult{reservation.seats.adults !== 1 && 's'}
                                    {reservation.seats.children > 0 && `, ${reservation.seats.children} Child${reservation.seats.children !== 1 ? 'ren' : ''}`}
                                </span>
                                <span className={styles.totalPrice}>${reservation.totalPrice}</span>
                            </div>
                            <button
                                className={styles.proceedBtn}
                                onClick={reservation.submitReservation}
                            >
                                Confirm Reservation
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
