'use client';

import { useState } from 'react';
import styles from './ContactPage.module.scss';
import templateStyles from '../_styles/template.module.scss';
import {
    MapPin,
    Phone,
    Clock,
    Navigation,
    Car,
    Bus,
    Accessibility,
    Ear,
    Calendar,
    Mail,
    Send,
    Volume2,
    Users,
    Heart,
    BookOpen,
    DollarSign,
    Footprints,
    Shirt,
    VolumeX,
    UsersRound,
    LucideIcon
} from 'lucide-react';

// Office Hours Data
const officeHours = [
    { day: 'Monday - Thursday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 12:30 PM' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
];

// Department Contacts
const departmentContacts = [
    { dept: 'Head Imam', email: 'imam@alnoormasjid.org', icon: BookOpen },
    { dept: 'Weddings & Nikah', email: 'matrimony@alnoormasjid.org', icon: Heart },
    { dept: 'Donations & Finance', email: 'finance@alnoormasjid.org', icon: DollarSign },
    { dept: 'Youth Programs', email: 'youth@alnoormasjid.org', icon: Users },
    { dept: 'General Inquiries', email: 'info@alnoormasjid.org', icon: Mail },
];

// Etiquette Guidelines
const etiquetteItems: { title: string; icon: LucideIcon; description: string }[] = [
    {
        title: 'Shoes Off',
        icon: Footprints,
        description: 'To maintain the purity of the prayer space, we remove our shoes at the entrance. Shoe racks are provided.',
    },
    {
        title: 'Modest Dress',
        icon: Shirt,
        description: 'Loose, non-transparent clothing is appreciated. Scarves are available for women visitors if needed.',
    },
    {
        title: 'Quiet Reverence',
        icon: VolumeX,
        description: 'Please silence your phones and speak softly, especially during prayer times and in the main hall.',
    },
    {
        title: 'Separate Spaces',
        icon: UsersRound,
        description: 'Men and women have designated prayer areas. Clear signage will guide you to the appropriate entrance.',
    },
];

// Contact Form Topics
const contactTopics = [
    'General Inquiry',
    'Prayer Times',
    'Marriage Services',
    'Funeral Services',
    'Membership',
    'Hall Rental',
    'Volunteer',
    'Feedback',
    'Other',
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        topic: '',
        message: '',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 4000);
        setFormData({ name: '', email: '', phone: '', topic: '', message: '' });
    };

    // Google Maps URL for directions
    const mapsUrl = 'https://www.google.com/maps/dir/?api=1&destination=123+Masjid+Street+Springfield+IL+62701';

    return (
        <div className={templateStyles.template}>
            {/* 1. Map Hero with Floating Card */}
            <section className={styles.mapHero}>
                <div className={styles.mapContainer}>
                    {/* Grayscale styled map embed */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.0284089813386!2d-89.65369!3d39.7817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ2JzU0LjEiTiA4OcKwMzknMTMuMyJX!5e0!3m2!1sen!2sus!4v1706000000000!5m2!1sen!2sus"
                        className={styles.mapEmbed}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Masjid Location"
                    />
                    <div className={styles.mapOverlay} />
                </div>

                {/* Floating Business Card */}
                <div className={styles.floatingCard}>
                    <div className={styles.cardGoldBar} />
                    <div className={styles.cardContent}>
                        <h1 className={styles.cardTitle}>Al-Noor Masjid</h1>
                        <p className={styles.cardTagline}>A sacred sanctuary since 1985</p>

                        <div className={styles.cardDetails}>
                            <div className={styles.detailItem}>
                                <MapPin size={18} />
                                <span>123 Masjid Street<br />Springfield, IL 62701</span>
                            </div>
                            <div className={styles.detailItem}>
                                <Phone size={18} />
                                <span>(555) 123-4567</span>
                            </div>
                            <div className={styles.statusBadge}>
                                <Clock size={14} />
                                <span>Open Now — Dhuhr in 20 mins</span>
                            </div>
                        </div>

                        <a
                            href={mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.directionsButton}
                        >
                            <Navigation size={16} />
                            Get Directions
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. Plan Your Visit - Logistics Grid */}
            <section className={styles.logisticsSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Plan Your Visit</span>
                    <h2 className={styles.sectionTitle}>Getting Here</h2>
                </div>

                <div className={styles.logisticsGrid}>
                    {/* Parking & Transport */}
                    <div className={styles.logisticsCard}>
                        <div className={styles.cardIconHeader}>
                            <Car className={styles.cardIcon} size={28} />
                        </div>
                        <h3 className={styles.cardHeading}>Parking & Transport</h3>
                        <div className={styles.cardText}>
                            <p><strong>Main Lot:</strong> 120 spaces available in the rear parking lot. Enter via Oak Street.</p>
                            <p><strong>Overflow:</strong> Street parking permitted on Elm Avenue (except Fridays 12-2pm).</p>
                            <p><strong>Transit:</strong> <Bus size={14} className={styles.inlineIcon} /> Route 7 bus stops at Main & Oak (2-min walk).</p>
                        </div>
                    </div>

                    {/* Accessibility */}
                    <div className={styles.logisticsCard}>
                        <div className={styles.cardIconHeader}>
                            <Accessibility className={styles.cardIcon} size={28} />
                        </div>
                        <h3 className={styles.cardHeading}>Accessibility</h3>
                        <div className={styles.cardText}>
                            <p><strong>Ramp Access:</strong> Wheelchair ramps at both main and side entrances.</p>
                            <p><strong>Elevator:</strong> Located near the main lobby for access to all floors.</p>
                            <p><strong>Hearing Loop:</strong> <Ear size={14} className={styles.inlineIcon} /> Available in the main prayer hall—ask the office for a receiver.</p>
                        </div>
                    </div>

                    {/* Office Hours */}
                    <div className={styles.logisticsCard}>
                        <div className={styles.cardIconHeader}>
                            <Calendar className={styles.cardIcon} size={28} />
                        </div>
                        <h3 className={styles.cardHeading}>Office Hours</h3>
                        <div className={styles.hoursTable}>
                            {officeHours.map((slot, idx) => (
                                <div key={idx} className={styles.hoursRow}>
                                    <span className={styles.hoursDay}>{slot.day}</span>
                                    <span className={styles.hoursTime}>{slot.hours}</span>
                                </div>
                            ))}
                        </div>
                        <p className={styles.hoursNote}>
                            <em>Administrative office hours only. The masjid is open for all five daily prayers.</em>
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Hospitality & Etiquette Guide */}
            <section className={styles.hospitalitySection}>
                <div className={styles.hospitalityLayout}>
                    {/* Left - Etiquette Icons Grid */}
                    <div className={styles.etiquetteGrid}>
                        {etiquetteItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className={styles.etiquetteItem}>
                                    <Icon className={styles.etiquetteIcon} size={32} />
                                    <h4 className={styles.etiquetteTitle}>{item.title}</h4>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right - Narrative */}
                    <div className={styles.hospitalityNarrative}>
                        <h2 className={styles.hospitalityTitle}>Entering the Sanctuary</h2>
                        <p className={styles.hospitalityIntro}>
                            We welcome visitors of all backgrounds to experience the peace and
                            serenity of our masjid. Here are some simple courtesies that help
                            us maintain a respectful atmosphere for everyone.
                        </p>
                        <div className={styles.etiquetteDescriptions}>
                            {etiquetteItems.map((item, index) => (
                                <div key={index} className={styles.etiquetteDescription}>
                                    <strong>{item.title}:</strong> {item.description}
                                </div>
                            ))}
                        </div>
                        <p className={styles.hospitalityClosing}>
                            <em>If you have any questions upon arrival, our volunteers are
                                always happy to assist you.</em>
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Department Directory */}
            <section className={styles.directorySection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Direct Contact</span>
                    <h2 className={styles.sectionTitle}>Department Directory</h2>
                </div>
                <div className={styles.directoryTicker}>
                    {departmentContacts.map((contact, index) => {
                        const Icon = contact.icon;
                        return (
                            <a
                                key={index}
                                href={`mailto:${contact.email}`}
                                className={styles.directoryItem}
                            >
                                <Icon className={styles.deptIcon} size={20} />
                                <span className={styles.deptName}>{contact.dept}</span>
                                <span className={styles.deptEmail}>{contact.email}</span>
                            </a>
                        );
                    })}
                </div>
            </section>

            {/* 5. Contact Form - Ledger Style */}
            <section className={styles.formSection}>
                <div className={styles.formContainer}>
                    <div className={styles.ledgerHeader}>
                        <h2 className={styles.ledgerTitle}>Write to Us</h2>
                        <p className={styles.ledgerSubtitle}>
                            We value your feedback and inquiries. Fill out this form and
                            we&apos;ll respond within 1-2 business days.
                        </p>
                    </div>

                    {formSubmitted ? (
                        <div className={styles.formSuccess}>
                            <Volume2 size={32} />
                            <h3>Message Received</h3>
                            <p>JazakAllah Khair! We will be in touch shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className={styles.ledgerForm}>
                            <div className={styles.formRow}>
                                <div className={styles.formField}>
                                    <label className={styles.formLabel}>Your Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className={styles.formInput}
                                    />
                                </div>
                                <div className={styles.formField}>
                                    <label className={styles.formLabel}>Email Address</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className={styles.formInput}
                                    />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formField}>
                                    <label className={styles.formLabel}>Phone Number</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className={styles.formInput}
                                    />
                                </div>
                                <div className={styles.formField}>
                                    <label className={styles.formLabel}>Topic</label>
                                    <select
                                        value={formData.topic}
                                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                                        required
                                        className={styles.formSelect}
                                    >
                                        <option value="">Select a topic...</option>
                                        {contactTopics.map((topic, idx) => (
                                            <option key={idx} value={topic}>{topic}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className={styles.formFieldFull}>
                                <label className={styles.formLabel}>Your Message</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    rows={5}
                                    className={styles.formTextarea}
                                />
                            </div>

                            <button type="submit" className={styles.submitButton}>
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
}
