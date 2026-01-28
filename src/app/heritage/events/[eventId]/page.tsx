// Single Event Detail Page - HERITAGE ALIGNED
// Design: The Royal Invitation - Formal, Ceremonial, Elegant
// Palette: Deep Maroon + Midnight Blue + Gold Foil
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    Calendar,
    Clock,
    MapPin,
    Users,
    Ticket,
    ChevronRight,
    ChevronDown,
    Car,
    Baby,
    Accessibility,
    Gift,
    Star,
    Check,
    Minus,
    Plus,
    ArrowLeft,
    X,
    Play,
    Mail,
    Phone,
    User
} from 'lucide-react';
import styles from './EventPage.module.scss';

// ========================================
// DATA
// ========================================
const eventData = {
    title: 'Honoring the Legacy',
    subtitle: 'Annual Fundraising Gala',
    tagline: 'A Night of Reflection and Inspiration',
    date: 'October 24, 2026',
    dateShort: { month: 'OCT', day: '24' },
    dayOfWeek: 'Saturday',
    time: '6:00 PM - 10:00 PM',
    venue: 'Grand Ballroom, Heritage Center',
    address: '123 Islamic Way, Springfield, IL 62701',
    status: 'Early Bird',
    promoVideoUrl: 'https://www.youtube.com/embed/oOEhCAvIl5I',
    promoVideoPoster: '/images/heritage/halaqa-circle.jpg',
    description: `Join us for an extraordinary evening as we gather to honor the legacy of our beloved 
    community and celebrate the vision for our future. This prestigious gala brings together families, 
    scholars, and community leaders for a night of inspiration, fine dining, and fellowship.
    
    All proceeds support the Masjid expansion project, Islamic education programs, and community outreach initiatives.`,
    schedule: [
        { time: '6:00 PM', title: 'Reception & Welcome', description: 'Hors d\'oeuvres and networking' },
        { time: '7:00 PM', title: 'Keynote Address', description: 'Sh. Omar Suleiman' },
        { time: '8:00 PM', title: 'Dinner Service', description: 'Gourmet halal cuisine' },
        { time: '9:00 PM', title: 'Live Fundraising', description: 'Pledge drive & silent auction' },
        { time: '9:45 PM', title: 'Closing Du\'a', description: 'Community supplication' }
    ],
    speakers: [
        {
            name: 'Sh. Omar Suleiman',
            title: 'Keynote Speaker',
            bio: 'Founder of Yaqeen Institute, renowned scholar and author.',
            image: null
        },
        {
            name: 'Dr. Fatima Hassan',
            title: 'Guest of Honor',
            bio: 'Community leader and philanthropist.',
            image: null
        }
    ],
    pricing: {
        adult: 75,
        child: 35 // Ages 5-12
    },
    logistics: {
        parking: 'Complimentary valet parking at the North Entrance. Self-parking available in Lot B.',
        childcare: 'Supervised childcare for ages 3-10 available ($15/child). Limited spots - reserve at checkout.',
        dressCode: 'Formal / Traditional Islamic Attire encouraged.',
        accessibility: 'Venue is fully wheelchair accessible. ASL interpretation available upon request.'
    },
    faqs: [
        {
            question: 'Is dinner included with my ticket?',
            answer: 'Yes! All ticket types include a gourmet halal dinner prepared by our award-winning catering team.'
        },
        {
            question: 'What is the refund policy?',
            answer: 'Tickets are non-refundable but fully transferable up to 48 hours before the event. Contact us to transfer your ticket to another guest.'
        },
        {
            question: 'Is the venue wheelchair accessible?',
            answer: 'Yes, the Heritage Center Grand Ballroom is fully wheelchair accessible with designated seating areas and accessible restrooms.'
        },
        {
            question: 'Can I purchase tickets at the door?',
            answer: 'Door sales are available if tickets remain, but we strongly recommend purchasing in advance as this event typically sells out.'
        },
        {
            question: 'Is there a dress code?',
            answer: 'We encourage formal or traditional Islamic attire. Business formal is also appropriate.'
        }
    ]
};

// ========================================
// INTERFACES
// ========================================
interface SeatSelection {
    adults: number;
    children: number;
}

interface AttendeeInfo {
    name: string;
    type: 'adult' | 'child';
}

interface ReservationForm {
    email: string;
    phone: string;
    attendees: AttendeeInfo[];
}

// ========================================
// COMPONENT
// ========================================
export default function SingleEventPage() {
    const router = useRouter();
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    // Reservation state
    const [showReservationModal, setShowReservationModal] = useState(false);
    const [seatSelection, setSeatSelection] = useState<SeatSelection>({
        adults: 0,
        children: 0
    });
    const [reservationForm, setReservationForm] = useState<ReservationForm>({
        email: '',
        phone: '',
        attendees: []
    });
    const [formStep, setFormStep] = useState<'seats' | 'details'>('seats');

    // Calculate pricing
    const adultPrice = eventData.pricing.adult;
    const childPrice = eventData.pricing.child;
    const totalPrice = (seatSelection.adults * adultPrice) + (seatSelection.children * childPrice);
    const totalSeats = seatSelection.adults + seatSelection.children;

    // Update seat counts
    const updateSeats = (type: 'adults' | 'children', delta: number) => {
        setSeatSelection(prev => ({
            ...prev,
            [type]: Math.max(0, Math.min(10, prev[type] + delta))
        }));
    };

    // Handle proceed to details
    const handleProceedToDetails = () => {
        if (totalSeats === 0) return;

        // Initialize attendees array
        const attendees: AttendeeInfo[] = [];
        for (let i = 0; i < seatSelection.adults; i++) {
            attendees.push({ name: '', type: 'adult' });
        }
        for (let i = 0; i < seatSelection.children; i++) {
            attendees.push({ name: '', type: 'child' });
        }
        setReservationForm(prev => ({ ...prev, attendees }));
        setFormStep('details');
    };

    // Update attendee name
    const updateAttendeeName = (index: number, name: string) => {
        setReservationForm(prev => ({
            ...prev,
            attendees: prev.attendees.map((a, i) => i === index ? { ...a, name } : a)
        }));
    };

    // Handle form submission
    const handleSubmitReservation = () => {
        // Validate
        if (!reservationForm.email || !reservationForm.phone) {
            alert('Please provide email and phone number for ticket confirmation.');
            return;
        }
        // In production, this would submit to an API
        alert(`Reservation confirmed! A confirmation will be sent to ${reservationForm.email}`);
        setShowReservationModal(false);
        resetForm();
    };

    // Reset form
    const resetForm = () => {
        setSeatSelection({ adults: 0, children: 0 });
        setReservationForm({ email: '', phone: '', attendees: [] });
        setFormStep('seats');
    };

    // Close modal
    const closeModal = () => {
        setShowReservationModal(false);
        resetForm();
    };

    return (
        <main className={styles.eventPage}>
            {/* ========================================
                1. THE ANNOUNCEMENT HERO
            ======================================== */}
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroPattern} />

                <div className={styles.heroContent}>
                    {/* Date & Status Badge Combined */}
                    <div className={styles.heroBadgeRow}>
                        <div className={styles.dateBadge}>
                            <span className={styles.dateMonth}>{eventData.dateShort.month}</span>
                            <span className={styles.dateDay}>{eventData.dateShort.day}</span>
                            <span className={styles.dateDayOfWeek}>{eventData.dayOfWeek}</span>
                        </div>
                        <span className={styles.statusTag}>
                            <Star size={14} />
                            {eventData.status}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className={styles.heroTitle}>{eventData.title}</h1>
                    <h2 className={styles.heroSubtitle}>{eventData.subtitle}</h2>
                    <p className={styles.heroTagline}>{eventData.tagline}</p>

                    {/* Quick Info */}
                    <div className={styles.heroMeta}>
                        <span><Clock size={16} /> {eventData.time}</span>
                        <span><MapPin size={16} /> {eventData.venue}</span>
                    </div>

                    {/* CTA */}
                    <button
                        className={styles.heroCta}
                        onClick={() => setShowReservationModal(true)}
                    >
                        <Ticket size={18} />
                        Reserve Your Seat
                    </button>

                    {/* Back Button - Under Reserve Your Seat */}
                    <button className={styles.backButton} onClick={() => router.back()}>
                        <ArrowLeft size={16} />
                        Go Back
                    </button>
                </div>

                {/* Decorative Wax Seal */}
                <div className={styles.waxSeal}>
                    <span>دعوة</span>
                </div>
            </section>

            {/* ========================================
                2. VIDEO PROMO SECTION
            ======================================== */}
            <section className={styles.videoSection}>
                <div className={styles.videoContainer}>
                    <div className={styles.videoHeader}>
                        <h3 className={styles.videoTitle}>Watch the Invitation</h3>
                        <p className={styles.videoSubtitle}>A glimpse into what awaits you</p>
                    </div>
                    <div className={styles.videoWrapper}>
                        {!isVideoPlaying ? (
                            <div
                                className={styles.videoThumbnail}
                                onClick={() => setIsVideoPlaying(true)}
                                style={{ backgroundImage: `url(${eventData.promoVideoPoster})` }}
                            >
                                <div className={styles.playButton}>
                                    <Play size={40} />
                                </div>
                                <div className={styles.thumbnailOverlay} />
                            </div>
                        ) : (
                            <iframe
                                src={`${eventData.promoVideoUrl}?autoplay=1`}
                                title="Event Promo Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className={styles.videoIframe}
                            />
                        )}
                    </div>
                </div>
            </section>

            {/* ========================================
                3. EVENT DETAILS (The Itinerary)
            ======================================== */}
            <section className={styles.detailsSection}>
                <div className={styles.detailsContainer}>
                    {/* Description */}
                    <div className={styles.descriptionBlock}>
                        <p className={styles.dropCap}>{eventData.description}</p>
                    </div>

                    {/* Schedule Timeline */}
                    <div className={styles.scheduleBlock}>
                        <h3 className={styles.sectionTitle}>
                            <Calendar size={20} />
                            Evening Program
                        </h3>
                        <div className={styles.timeline}>
                            {eventData.schedule.map((item, idx) => (
                                <div key={idx} className={styles.timelineItem}>
                                    <div className={styles.timelineDot} />
                                    <div className={styles.timelineTime}>{item.time}</div>
                                    <div className={styles.timelineContent}>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Speakers */}
                    <div className={styles.speakersBlock}>
                        <h3 className={styles.sectionTitle}>
                            <Users size={20} />
                            Distinguished Guests
                        </h3>
                        <div className={styles.speakersGrid}>
                            {eventData.speakers.map((speaker, idx) => (
                                <div key={idx} className={styles.speakerCard}>
                                    <div className={styles.speakerAvatar}>
                                        <span>{speaker.name.charAt(0)}</span>
                                    </div>
                                    <h4 className={styles.speakerName}>{speaker.name}</h4>
                                    <span className={styles.speakerTitle}>{speaker.title}</span>
                                    <p className={styles.speakerBio}>{speaker.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================
                4. PRICING OVERVIEW
            ======================================== */}
            <section id="tickets" className={styles.pricingSection}>
                <div className={styles.pricingContainer}>
                    <h3 className={styles.pricingSectionTitle}>
                        <Ticket size={24} />
                        Ticket Pricing
                    </h3>
                    <p className={styles.pricingSectionSubtitle}>
                        Reserve your seats for this special evening
                    </p>

                    {/* Single Pricing Card */}
                    <div className={styles.pricingCard}>
                        <div className={styles.pricingRow}>
                            <div className={styles.pricingLabel}>
                                <User size={18} />
                                <span>Adult (13+)</span>
                            </div>
                            <span className={styles.pricingAmount}>${eventData.pricing.adult}</span>
                        </div>
                        <div className={styles.pricingRow}>
                            <div className={styles.pricingLabel}>
                                <Users size={18} />
                                <span>Child (5-12)</span>
                            </div>
                            <span className={styles.pricingAmount}>${eventData.pricing.child}</span>
                        </div>
                        <p className={styles.pricingNote}>Children under 5 are free</p>
                        <div className={styles.pricingDivider} />
                        <ul className={styles.pricingIncludes}>
                            <li><Check size={14} /> Gourmet halal dinner</li>
                            <li><Check size={14} /> Reserved seating</li>
                            <li><Check size={14} /> Event program & gift</li>
                            <li><Check size={14} /> Complimentary valet parking</li>
                        </ul>
                    </div>

                    <button
                        className={styles.reserveMainBtn}
                        onClick={() => setShowReservationModal(true)}
                    >
                        <Ticket size={18} />
                        Reserve Your Seats Now
                    </button>
                </div>
            </section>

            {/* ========================================
                5. VENUE & LOGISTICS
            ======================================== */}
            <section className={styles.venueSection}>
                <div className={styles.venueContainer}>
                    <div className={styles.venueMap}>
                        <div className={styles.mapPlaceholder}>
                            <MapPin size={48} />
                            <span>Heritage Center</span>
                            <p>{eventData.address}</p>
                        </div>
                    </div>

                    <div className={styles.venueDetails}>
                        <h3 className={styles.sectionTitle}>Event Logistics</h3>

                        <div className={styles.logisticItem}>
                            <Car size={20} />
                            <div>
                                <h4>Parking</h4>
                                <p>{eventData.logistics.parking}</p>
                            </div>
                        </div>

                        <div className={styles.logisticItem}>
                            <Baby size={20} />
                            <div>
                                <h4>Childcare</h4>
                                <p>{eventData.logistics.childcare}</p>
                            </div>
                        </div>

                        <div className={styles.logisticItem}>
                            <Gift size={20} />
                            <div>
                                <h4>Dress Code</h4>
                                <p>{eventData.logistics.dressCode}</p>
                            </div>
                        </div>

                        <div className={styles.logisticItem}>
                            <Accessibility size={20} />
                            <div>
                                <h4>Accessibility</h4>
                                <p>{eventData.logistics.accessibility}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================
                6. FAQ & POLICIES
            ======================================== */}
            <section className={styles.faqSection}>
                <div className={styles.faqContainer}>
                    <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>

                    <div className={styles.faqList}>
                        {eventData.faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className={`${styles.faqItem} ${expandedFaq === idx ? styles.expanded : ''}`}
                            >
                                <button
                                    className={styles.faqQuestion}
                                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                                >
                                    <span>{faq.question}</span>
                                    <ChevronDown size={20} />
                                </button>
                                <div className={styles.faqAnswer}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================
                7. RESERVATION MODAL
            ======================================== */}
            {showReservationModal && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.modalClose} onClick={closeModal}>
                            <X size={24} />
                        </button>

                        <div className={styles.modalHeader}>
                            <Ticket size={28} />
                            <h3>Reserve Your Seats</h3>
                            <p>{eventData.title} - {eventData.subtitle}</p>
                        </div>

                        {formStep === 'seats' ? (
                            <>
                                {/* Seat Selection Step */}
                                <div className={styles.modalBody}>

                                    {/* Seat Counters */}
                                    <div className={styles.seatCounters}>
                                        {/* Adults */}
                                        <div className={styles.seatRow}>
                                            <div className={styles.seatInfo}>
                                                <User size={20} />
                                                <div>
                                                    <h4>Adult (13+)</h4>
                                                    <span className={styles.seatPrice}>${adultPrice} each</span>
                                                </div>
                                            </div>
                                            <div className={styles.seatCounter}>
                                                <button
                                                    onClick={() => updateSeats('adults', -1)}
                                                    disabled={seatSelection.adults === 0}
                                                >
                                                    <Minus size={16} />
                                                </button>
                                                <span>{seatSelection.adults}</span>
                                                <button onClick={() => updateSeats('adults', 1)}>
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
                                                    <span className={styles.seatPrice}>${childPrice} each</span>
                                                </div>
                                            </div>
                                            <div className={styles.seatCounter}>
                                                <button
                                                    onClick={() => updateSeats('children', -1)}
                                                    disabled={seatSelection.children === 0}
                                                >
                                                    <Minus size={16} />
                                                </button>
                                                <span>{seatSelection.children}</span>
                                                <button onClick={() => updateSeats('children', 1)}>
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
                                        <span>{totalSeats} {totalSeats === 1 ? 'Seat' : 'Seats'}</span>
                                        <span className={styles.totalPrice}>${totalPrice}</span>
                                    </div>
                                    <button
                                        className={styles.proceedBtn}
                                        onClick={handleProceedToDetails}
                                        disabled={totalSeats === 0}
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
                                    <button
                                        className={styles.backToSeats}
                                        onClick={() => setFormStep('seats')}
                                    >
                                        <ArrowLeft size={16} />
                                        Back to seat selection
                                    </button>

                                    {/* Contact Information */}
                                    <div className={styles.contactSection}>
                                        <h4>Contact Information</h4>
                                        <p className={styles.contactNote}>
                                            Required for ticket confirmation
                                        </p>

                                        <div className={styles.inputGroup}>
                                            <div className={styles.inputIcon}>
                                                <Mail size={18} />
                                            </div>
                                            <input
                                                type="email"
                                                placeholder="Email address *"
                                                value={reservationForm.email}
                                                onChange={e => setReservationForm(prev => ({
                                                    ...prev,
                                                    email: e.target.value
                                                }))}
                                                required
                                            />
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <div className={styles.inputIcon}>
                                                <Phone size={18} />
                                            </div>
                                            <input
                                                type="tel"
                                                placeholder="Phone number *"
                                                value={reservationForm.phone}
                                                onChange={e => setReservationForm(prev => ({
                                                    ...prev,
                                                    phone: e.target.value
                                                }))}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Attendee Names */}
                                    <div className={styles.attendeesSection}>
                                        <h4>Attendee Names</h4>
                                        <p className={styles.attendeeNote}>
                                            Names will appear on tickets
                                        </p>

                                        {reservationForm.attendees.map((attendee, idx) => (
                                            <div key={idx} className={styles.attendeeRow}>
                                                <span className={styles.attendeeLabel}>
                                                    {attendee.type === 'adult' ? 'Adult' : 'Child'} {
                                                        reservationForm.attendees
                                                            .slice(0, idx + 1)
                                                            .filter(a => a.type === attendee.type).length
                                                    }
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="Full name"
                                                    value={attendee.name}
                                                    onChange={e => updateAttendeeName(idx, e.target.value)}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Confirm Footer */}
                                <div className={styles.modalFooter}>
                                    <div className={styles.summaryRow}>
                                        <span>
                                            {seatSelection.adults} Adult{seatSelection.adults !== 1 && 's'}
                                            {seatSelection.children > 0 && `, ${seatSelection.children} Child${seatSelection.children !== 1 ? 'ren' : ''}`}
                                        </span>
                                        <span className={styles.totalPrice}>${totalPrice}</span>
                                    </div>
                                    <button
                                        className={styles.proceedBtn}
                                        onClick={handleSubmitReservation}
                                    >
                                        Confirm Reservation
                                        <ChevronRight size={18} />
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
}
