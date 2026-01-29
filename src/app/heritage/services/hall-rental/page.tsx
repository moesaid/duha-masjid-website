// Hall Rental Page - HERITAGE ALIGNED
// Design: Calendar-based booking with fixed-size venue cards
'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isBefore, isWeekend, isSameDay, startOfToday } from 'date-fns';
import styles from './HallRentalPage.module.scss';
import { Calendar as CalendarIcon, Users, Clock, DollarSign, CheckCircle, Phone, Mail, ChevronLeft, ChevronRight, Info, X } from 'lucide-react';

// Hall Options
const halls = [
    {
        id: 'main-hall',
        name: 'Grand Assembly Hall',
        capacity: 500,
        description: 'Our largest venue, perfect for weddings, community banquets, and large gatherings.',
        amenities: ['Full Stage', 'Sound System', 'Projector & Screen', 'Kitchen Access', 'Bridal Suite', 'Separate Entrances'],
        image: '/images/heritage/mosque-interior.jpg',
        rates: {
            weekday: 800,
            weekend: 1200,
            nonprofit: 500
        },
        // Simulated booked dates
        bookedDates: [
            new Date(2026, 1, 14), // Feb 14
            new Date(2026, 1, 15),
            new Date(2026, 1, 21),
            new Date(2026, 2, 7),  // March 7
            new Date(2026, 2, 14),
            new Date(2026, 2, 21),
        ]
    },
    {
        id: 'multi-purpose',
        name: 'Multi-Purpose Room',
        capacity: 150,
        description: 'A versatile space ideal for medium-sized events, lectures, classes, and family gatherings. Includes modular seating arrangements.',
        amenities: ['Flexible Seating', 'Whiteboard', 'Basic AV', 'Kitchen Access'],
        image: '/images/heritage/library-shelves.jpg',
        rates: {
            weekday: 300,
            weekend: 450,
            nonprofit: 200
        },
        bookedDates: [
            new Date(2026, 1, 8),
            new Date(2026, 1, 22),
            new Date(2026, 2, 1),
            new Date(2026, 2, 15),
        ]
    },
    {
        id: 'conference',
        name: 'Conference Room',
        capacity: 30,
        description: 'Professional meeting space for board meetings, small classes, or private consultations. Quiet and well-equipped.',
        amenities: ['Conference Table', 'Video Conferencing', 'Whiteboard', 'Coffee Service'],
        image: '/images/heritage/shykh.jpg',
        rates: {
            weekday: 100,
            weekend: 150,
            nonprofit: 75
        },
        bookedDates: [
            new Date(2026, 1, 5),
            new Date(2026, 1, 12),
            new Date(2026, 2, 5),
        ]
    }
];

// Policies
const policies = [
    'All events must adhere to Islamic guidelines. No music, alcohol, or inappropriate content permitted.',
    'A non-refundable deposit of 50% is required to secure your booking.',
    'Cancellations made less than 14 days before the event forfeit the deposit.',
    'Renters are responsible for clean-up or may pay an additional cleaning fee.',
    'Events must conclude by 11:00 PM unless prior arrangements are made.',
    'Decorations must not damage walls or fixtures. No tape on painted surfaces.'
];

interface BookingFormData {
    fullName: string;
    email: string;
    phone: string;
    eventType: string;
    guestCount: string;
    duration: string;
    notes: string;
    agreedToPolicies: boolean;
}

export default function HallRentalPage() {
    const [selectedHall, setSelectedHall] = useState(halls[0]);
    const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [showBookingModal, setShowBookingModal] = useState(false);
    const [formData, setFormData] = useState<BookingFormData>({
        fullName: '',
        email: '',
        phone: '',
        eventType: '',
        guestCount: '',
        duration: '',
        notes: '',
        agreedToPolicies: false
    });

    const today = startOfToday();

    // Generate calendar days
    const calendarDays = useMemo(() => {
        const start = startOfMonth(currentMonth);
        const end = endOfMonth(currentMonth);
        return eachDayOfInterval({ start, end });
    }, [currentMonth]);

    // First day offset (for empty cells before month starts)
    const firstDayOffset = calendarDays[0]?.getDay() || 0;

    // Check if date is booked
    const isDateBooked = (date: Date) => {
        return selectedHall.bookedDates.some(bookedDate => isSameDay(date, bookedDate));
    };

    // Check if date is in the past
    const isPastDate = (date: Date) => {
        return isBefore(date, today);
    };

    // Get rate for a date
    const getDateRate = (date: Date) => {
        return isWeekend(date) ? selectedHall.rates.weekend : selectedHall.rates.weekday;
    };

    // Handle date selection
    const handleDateSelect = (date: Date) => {
        if (isPastDate(date) || isDateBooked(date)) return;
        setSelectedDate(date);
        setShowBookingModal(true);
    };

    // Navigate months
    const goToPreviousMonth = () => {
        setCurrentMonth(prev => addMonths(prev, -1));
    };

    const goToNextMonth = () => {
        setCurrentMonth(prev => addMonths(prev, 1));
    };

    // Handle form change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In production, this would submit to an API
        alert(`Booking request submitted for ${selectedHall.name} on ${selectedDate ? format(selectedDate, 'MMMM d, yyyy') : ''}`);
        setShowBookingModal(false);
        setSelectedDate(null);
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            eventType: '',
            guestCount: '',
            duration: '',
            notes: '',
            agreedToPolicies: false
        });
    };

    return (
        <main className={styles.hallRentalPage}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroPattern} />
                <div className={styles.heroContent}>
                    <span className={styles.heroBadge}>Facility Rentals</span>
                    <h1 className={styles.heroTitle}>Book Our Spaces</h1>
                    <p className={styles.heroSubtitle}>
                        Select a venue and choose from available dates on the calendar
                    </p>
                </div>
            </section>

            {/* Hall Selection */}
            <section className={styles.hallsSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Available Venues</h2>
                    <p className={styles.sectionSubtitle}>Select a venue to view availability and book</p>
                </div>

                <div className={styles.hallsContainer}>
                    {/* Hall Tabs */}
                    <div className={styles.hallTabs}>
                        {halls.map((hall) => (
                            <button
                                key={hall.id}
                                className={`${styles.hallTab} ${selectedHall.id === hall.id ? styles.active : ''}`}
                                onClick={() => {
                                    setSelectedHall(hall);
                                    setSelectedDate(null);
                                }}
                            >
                                <span className={styles.tabName}>{hall.name}</span>
                                <span className={styles.tabCapacity}>
                                    <Users size={14} />
                                    Up to {hall.capacity}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Hall Details - Fixed Height Container */}
                    <div className={styles.hallDetailsWrapper}>
                        <div className={styles.hallDetails} key={selectedHall.id}>
                            <div className={styles.hallImageWrapper}>
                                <Image
                                    src={selectedHall.image}
                                    alt={selectedHall.name}
                                    fill
                                    className={styles.hallImage}
                                    priority
                                />
                            </div>

                            <div className={styles.hallInfo}>
                                <h3 className={styles.hallName}>{selectedHall.name}</h3>
                                <p className={styles.hallDescription}>{selectedHall.description}</p>

                                <div className={styles.capacityBadge}>
                                    <Users size={18} />
                                    <span>Capacity: {selectedHall.capacity} guests</span>
                                </div>

                                <div className={styles.amenitiesList}>
                                    <h4>Amenities Included</h4>
                                    <ul>
                                        {selectedHall.amenities.map((amenity, idx) => (
                                            <li key={idx}>
                                                <CheckCircle size={16} />
                                                {amenity}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Pricing */}
                                <div className={styles.pricingGrid}>
                                    <div className={styles.priceCard}>
                                        <span className={styles.priceLabel}>Weekday</span>
                                        <span className={styles.priceAmount}>${selectedHall.rates.weekday}</span>
                                        <span className={styles.priceUnit}>per day</span>
                                    </div>
                                    <div className={styles.priceCard}>
                                        <span className={styles.priceLabel}>Weekend</span>
                                        <span className={styles.priceAmount}>${selectedHall.rates.weekend}</span>
                                        <span className={styles.priceUnit}>per day</span>
                                    </div>
                                    <div className={`${styles.priceCard} ${styles.nonprofit}`}>
                                        <span className={styles.priceLabel}>Non-Profit</span>
                                        <span className={styles.priceAmount}>${selectedHall.rates.nonprofit}</span>
                                        <span className={styles.priceUnit}>per day</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Calendar Booking Section */}
            <section className={styles.calendarSection}>
                <div className={styles.calendarContainer}>
                    <div className={styles.calendarHeader}>
                        <h2 className={styles.calendarTitle}>
                            <CalendarIcon size={24} />
                            Select a Date for {selectedHall.name}
                        </h2>
                        <p className={styles.calendarSubtitle}>
                            Click on an available date to book. Green dates are available, gray dates are booked.
                        </p>
                    </div>

                    <div className={styles.calendarWidget}>
                        {/* Month Navigation */}
                        <div className={styles.monthNav}>
                            <button
                                className={styles.navButton}
                                onClick={goToPreviousMonth}
                                disabled={isSameMonth(currentMonth, today)}
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <span className={styles.monthLabel}>
                                {format(currentMonth, 'MMMM yyyy')}
                            </span>
                            <button className={styles.navButton} onClick={goToNextMonth}>
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        {/* Weekday Headers */}
                        <div className={styles.weekdayHeaders}>
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                <div key={day} className={styles.weekdayHeader}>{day}</div>
                            ))}
                        </div>

                        {/* Calendar Grid */}
                        <div className={styles.calendarGrid}>
                            {/* Empty cells for offset */}
                            {Array.from({ length: firstDayOffset }).map((_, idx) => (
                                <div key={`empty-${idx}`} className={styles.emptyCell} />
                            ))}

                            {/* Day cells */}
                            {calendarDays.map(day => {
                                const booked = isDateBooked(day);
                                const past = isPastDate(day);
                                const weekend = isWeekend(day);
                                const rate = getDateRate(day);
                                const isSelected = selectedDate && isSameDay(day, selectedDate);

                                return (
                                    <button
                                        key={day.toISOString()}
                                        className={`${styles.dayCell} 
                                            ${booked ? styles.booked : ''} 
                                            ${past ? styles.past : ''} 
                                            ${isToday(day) ? styles.today : ''} 
                                            ${weekend ? styles.weekend : ''}
                                            ${isSelected ? styles.selected : ''}
                                            ${!booked && !past ? styles.available : ''}`}
                                        onClick={() => handleDateSelect(day)}
                                        disabled={booked || past}
                                    >
                                        <span className={styles.dayNumber}>{format(day, 'd')}</span>
                                        {!booked && !past && (
                                            <span className={styles.dayPrice}>${rate}</span>
                                        )}
                                        {booked && <span className={styles.bookedLabel}>Booked</span>}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Legend */}
                        <div className={styles.calendarLegend}>
                            <div className={styles.legendItem}>
                                <span className={`${styles.legendDot} ${styles.availableDot}`} />
                                <span>Available</span>
                            </div>
                            <div className={styles.legendItem}>
                                <span className={`${styles.legendDot} ${styles.bookedDot}`} />
                                <span>Booked</span>
                            </div>
                            <div className={styles.legendItem}>
                                <span className={`${styles.legendDot} ${styles.weekendDot}`} />
                                <span>Weekend Rate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Policies */}
            <section className={styles.policiesSection}>
                <h2 className={styles.policiesTitle}>Rental Policies</h2>
                <ul className={styles.policiesList}>
                    {policies.map((policy, idx) => (
                        <li key={idx}>
                            <span className={styles.policyNumber}>{idx + 1}</span>
                            <span className={styles.policyText}>{policy}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Contact Info Footer */}
            <section className={styles.contactSection}>
                <div className={styles.contactContent}>
                    <h3 className={styles.contactTitle}>Questions? Contact Our Facilities Team</h3>
                    <div className={styles.contactInfo}>
                        <a href="tel:+15551234567" className={styles.contactItem}>
                            <Phone size={20} />
                            (555) 123-4567
                        </a>
                        <a href="mailto:facilities@alnoormasjid.org" className={styles.contactItem}>
                            <Mail size={20} />
                            facilities@alnoormasjid.org
                        </a>
                    </div>
                </div>
            </section>

            {/* Booking Modal */}
            {showBookingModal && selectedDate && (
                <div className={styles.modalOverlay} onClick={() => setShowBookingModal(false)}>
                    <div className={styles.bookingModal} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeModal} onClick={() => setShowBookingModal(false)}>
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

                        <form className={styles.bookingForm} onSubmit={handleSubmit}>
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
                                        onChange={handleInputChange}
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
                                        onChange={handleInputChange}
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
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="eventType">Event Type *</label>
                                    <select
                                        id="eventType"
                                        name="eventType"
                                        required
                                        value={formData.eventType}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select event type</option>
                                        <option value="wedding">Wedding Reception</option>
                                        <option value="walima">Walima</option>
                                        <option value="aqeeqah">Aqeeqah</option>
                                        <option value="memorial">Memorial/Janazah</option>
                                        <option value="meeting">Meeting/Conference</option>
                                        <option value="class">Class/Workshop</option>
                                        <option value="community">Community Event</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.formRow}>
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
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="duration">Duration *</label>
                                    <select
                                        id="duration"
                                        name="duration"
                                        required
                                        value={formData.duration}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select duration</option>
                                        <option value="2">2 hours</option>
                                        <option value="3">3 hours</option>
                                        <option value="4">4 hours</option>
                                        <option value="5">5 hours</option>
                                        <option value="6">6+ hours (full day)</option>
                                    </select>
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
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        name="agreedToPolicies"
                                        required
                                        checked={formData.agreedToPolicies}
                                        onChange={handleInputChange}
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
            )}
        </main>
    );
}
