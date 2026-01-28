// Ramadan & Eid Page - HERITAGE ALIGNED
// Design: Night Sky Blue + Lantern Gold + Deep Purple (Luminous)
// Vibe: Atmospheric, Luminous, Joyful
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Moon,
    Clock,
    Users,
    Calendar,
    HandCoins,
    Heart,
    Star,
    MapPin,
    Car,
    ChevronRight,
    AlertCircle,
    Utensils,
    Gift,
    Music,
    Tent,
    X,
    CreditCard
} from 'lucide-react';
import styles from './RamadanPage.module.scss';

// ========================================
// DATA
// ========================================
const taraweehInfo = {
    startTime: 'Immediately after Isha (Iqamah 9:30 PM)',
    reciters: 'Led by Sh. Ahmad Al-Khalil and Guest Reciter Qari Yusuf',
    currentJuz: 4,
    totalJuz: 30
};

// Generate all 30 Ramadan days with sample sponsored/available status
const generateRamadanCalendar = () => {
    const days = [];
    // Ramadan 2025 starts on a Saturday (sample)
    const weekdayHeaders = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    weekdayHeaders.forEach(day => days.push({ day, status: 'header', ramadanDay: 0 }));

    // Add empty cells for offset (Ramadan starts on Saturday = no offset needed)
    const sponsoredDays = [1, 2, 4, 6, 7, 11, 14, 17, 19, 21, 23, 25, 27, 29]; // Sample sponsored

    for (let i = 1; i <= 30; i++) {
        days.push({
            day: String(i),
            status: sponsoredDays.includes(i) ? 'sponsored' : 'available',
            ramadanDay: i
        });
    }
    return days;
};

const ramadanCalendar = generateRamadanCalendar();

const iftarMenu = [
    { item: 'Friday: Biryani Night - Catered by Salam Kitchen' },
    { item: 'Saturday: Mediterranean Feast - Catered by Olive Garden Halal' },
    { item: 'Dates, Water, and Samosas provided daily' }
];

const eidPrayers = [
    { shift: 'First Prayer', takbeer: '7:00 AM', prayer: '7:30 AM' },
    { shift: 'Second Prayer', takbeer: '9:00 AM', prayer: '9:30 AM' }
];

const festivities = [
    { icon: Tent, label: 'Carnival Games' },
    { icon: Gift, label: 'Petting Zoo' },
    { icon: Utensils, label: 'Food Trucks' },
    { icon: Music, label: 'Nasheed Performance' }
];

// ========================================
// COUNTDOWN HOOK
// ========================================
function useCountdown(targetTime: Date) {
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const diff = targetTime.getTime() - now.getTime();

            if (diff > 0) {
                const hours = Math.floor(diff / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                setTimeLeft({ hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetTime]);

    return timeLeft;
}

// ========================================
// COMPONENT
// ========================================
export default function RamadanPage() {
    const [fitrCount, setFitrCount] = useState(1);
    const [fidyaCount, setFidyaCount] = useState(0);
    const [selectedDay, setSelectedDay] = useState<number | null>(null);
    const [sponsorName, setSponsorName] = useState('');
    const [sponsorEmail, setSponsorEmail] = useState('');
    const [sponsorPhone, setSponsorPhone] = useState('');
    const [contributionAmount, setContributionAmount] = useState('800');

    // Mock countdown to Maghrib (6:30 PM today)
    const today = new Date();
    today.setHours(18, 30, 0, 0);
    if (today < new Date()) {
        today.setDate(today.getDate() + 1);
    }
    const countdown = useCountdown(today);

    const zakatTotal = (fitrCount * 15) + (fidyaCount * 15);

    return (
        <main className={styles.ramadanPage}>
            {/* ========================================
                1. HILAL HERO (Status Board)
            ======================================== */}
            <section className={styles.heroSection}>
                <div className={styles.starsBackground} />
                <div className={styles.heroContent}>
                    <div className={styles.moonPhase}>
                        <Moon size={48} />
                    </div>

                    <p className={styles.heroCalligraphy}>رمضان مبارك</p>
                    <h1 className={styles.heroTitle}>Ramadan 1447</h1>
                    <p className={styles.heroSubtitle}>Time until Maghrib (Iftar)</p>

                    <div className={styles.countdown}>
                        <div className={styles.countdownItem}>
                            <span className={styles.countdownNumber}>
                                {String(countdown.hours).padStart(2, '0')}
                            </span>
                            <span className={styles.countdownLabel}>Hours</span>
                        </div>
                        <span className={styles.countdownColon}>:</span>
                        <div className={styles.countdownItem}>
                            <span className={styles.countdownNumber}>
                                {String(countdown.minutes).padStart(2, '0')}
                            </span>
                            <span className={styles.countdownLabel}>Minutes</span>
                        </div>
                        <span className={styles.countdownColon}>:</span>
                        <div className={styles.countdownItem}>
                            <span className={styles.countdownNumber}>
                                {String(countdown.seconds).padStart(2, '0')}
                            </span>
                            <span className={styles.countdownLabel}>Seconds</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================
                2. TARAWEEH SCHEDULE
            ======================================== */}
            <section className={styles.taraweehSection}>
                <div className={styles.taraweehCard}>
                    <div className={styles.taraweehHeader}>
                        <Moon size={28} />
                        <h2 className={styles.taraweehTitle}>
                            Qiyam al-Layl
                            <span className={styles.taraweehArabic}>قيام الليل</span>
                        </h2>
                    </div>

                    <div className={styles.taraweehGrid}>
                        <div className={styles.taraweehItem}>
                            <span className={styles.taraweehLabel}>Start Time</span>
                            <span className={styles.taraweehValue}>{taraweehInfo.startTime}</span>
                        </div>
                        <div className={styles.taraweehItem}>
                            <span className={styles.taraweehLabel}>Reciters</span>
                            <span className={styles.taraweehValue}>{taraweehInfo.reciters}</span>
                        </div>
                        <div className={styles.taraweehItem}>
                            <span className={styles.taraweehLabel}>Tonight</span>
                            <span className={styles.taraweehValue}>Juz {taraweehInfo.currentJuz}</span>
                        </div>
                    </div>

                    <div className={styles.juzProgress}>
                        <div className={styles.juzLabel}>
                            <span>Khatm Progress</span>
                            <span>{taraweehInfo.currentJuz} / {taraweehInfo.totalJuz} Juz</span>
                        </div>
                        <div className={styles.juzBar}>
                            <div
                                className={styles.juzFill}
                                style={{ width: `${(taraweehInfo.currentJuz / taraweehInfo.totalJuz) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================
                3. COMMUNITY IFTAR
            ======================================== */}
            <section className={styles.iftarSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>Breaking Bread Together</span>
                    <h2 className={styles.sectionTitle}>Community Iftar</h2>
                </div>

                <div className={styles.iftarGrid}>
                    {/* Sponsorship */}
                    <div className={styles.iftarCard}>
                        <div className={styles.iftarCardHeader}>
                            <Heart size={24} />
                            <h3>Sponsor an Iftar</h3>
                        </div>
                        <p className={styles.iftarText}>
                            Earn the reward of feeding a fasting person. Click on an available night to sponsor ($500/night).
                        </p>
                        <div className={styles.calendarLegend}>
                            <span><span className={styles.legendAvailable}></span> Available</span>
                            <span><span className={styles.legendSponsored}></span> Sponsored</span>
                        </div>
                        <div className={styles.calendarGrid}>
                            {ramadanCalendar.map((day, idx) => (
                                <div
                                    key={idx}
                                    className={`${styles.calendarDay} ${styles[day.status]} ${day.status === 'available' ? styles.clickable : ''}`}
                                    onClick={() => day.status === 'available' && day.ramadanDay > 0 && setSelectedDay(day.ramadanDay)}
                                    role={day.status === 'available' ? 'button' : undefined}
                                    tabIndex={day.status === 'available' ? 0 : undefined}
                                >
                                    {day.day}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Menu */}
                    <div className={styles.iftarCard}>
                        <div className={styles.iftarCardHeader}>
                            <Utensils size={24} />
                            <h3>Friday & Saturday Iftars</h3>
                        </div>
                        <p className={styles.iftarText}>
                            Join us for community iftars every Friday and Saturday evening.
                        </p>
                        <ul className={styles.menuList}>
                            {iftarMenu.map((item, idx) => (
                                <li key={idx}>
                                    <Utensils size={16} />
                                    {item.item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ========================================
                4. ZAKAT AL-FITR
            ======================================== */}
            <section className={styles.zakatSection}>
                <div className={styles.zakatCard}>
                    <div className={styles.zakatIcon}>
                        <HandCoins size={28} />
                    </div>
                    <h2 className={styles.zakatTitle}>Purify Your Fast</h2>
                    <p className={styles.zakatSubtitle}>Zakat al-Fitr & Fidya</p>

                    <div className={styles.zakatInputs}>
                        <div className={styles.zakatRow}>
                            <div className={styles.zakatLabel}>
                                Zakat al-Fitr
                                <span>$15 per person</span>
                            </div>
                            <div className={styles.zakatInput}>
                                <span>×</span>
                                <input
                                    type="number"
                                    min="0"
                                    value={fitrCount}
                                    onChange={(e) => setFitrCount(Math.max(0, parseInt(e.target.value) || 0))}
                                />
                                <span>persons</span>
                            </div>
                        </div>

                        <div className={styles.zakatRow}>
                            <div className={styles.zakatLabel}>
                                Fidya
                                <span>For those unable to fast - $15/day</span>
                            </div>
                            <div className={styles.zakatInput}>
                                <span>×</span>
                                <input
                                    type="number"
                                    min="0"
                                    value={fidyaCount}
                                    onChange={(e) => setFidyaCount(Math.max(0, parseInt(e.target.value) || 0))}
                                />
                                <span>days</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.zakatTotal}>
                        Total: ${zakatTotal}
                    </div>

                    <button className={styles.payNowBtn}>
                        Pay Now
                        <ChevronRight size={18} />
                    </button>

                    <p className={styles.zakatNote}>
                        Must be paid before Eid Prayer
                    </p>
                </div>
            </section>

            {/* ========================================
                5. I'TIKAF & LAYLATUL QADR
            ======================================== */}
            <section className={styles.itikafSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>
                        The Last Ten Nights
                    </span>
                    <h2 className={styles.sectionTitle}>
                        I'tikaf & Laylatul Qadr
                    </h2>
                </div>

                <div className={styles.itikafGrid}>
                    <div className={styles.itikafCard}>
                        <div className={styles.itikafHeader}>
                            <Star size={24} />
                            <h3>I'tikaf Registration</h3>
                        </div>
                        <p className={styles.itikafText}>
                            Seclude yourself in the Masjid during the blessed last ten nights.
                            Space is limited — register early to secure your spot.
                        </p>
                        <Link href="/heritage/join/register?program=itikaf" className={styles.registerBtn}>
                            Register for I'tikaf
                            <ChevronRight size={16} />
                        </Link>
                    </div>

                    <div className={styles.itikafCard}>
                        <div className={styles.itikafHeader}>
                            <Moon size={24} />
                            <h3>The 27th Night (Khatm)</h3>
                        </div>
                        <span className={styles.itikafHighlight}>
                            "Allahumma innaka 'afuwwun tuhibbul-'afwa fa'fu 'anni"
                            <br />
                            (O Allah, You are Forgiving and love forgiveness, so forgive me)
                        </span>
                        <p className={styles.itikafText}>
                            Special Qiyam program with Khatm al-Quran completion.
                            Program begins after Isha and continues until Fajr.
                        </p>
                    </div>
                </div>
            </section>

            {/* ========================================
                6. EID CELEBRATION
            ======================================== */}
            <section className={styles.eidSection}>
                <div className={styles.eidCard}>
                    <div className={styles.eidHeader}>
                        <div className={styles.eidEmoji}>🎉</div>
                        <h2 className={styles.eidTitle}>Eid al-Fitr Celebration</h2>
                        <p className={styles.eidSubtitle}>عيد مبارك</p>
                    </div>

                    <div className={styles.eidGrid}>
                        <div className={styles.eidItem}>
                            <div className={styles.eidItemHeader}>
                                <Clock size={20} />
                                <h4>Prayer Times</h4>
                            </div>
                            <ul className={styles.prayerTimes}>
                                {eidPrayers.map((prayer, idx) => (
                                    <li key={idx}>
                                        <span>{prayer.shift}</span>
                                        <span>
                                            Takbeer <strong>{prayer.takbeer}</strong> | Prayer <strong>{prayer.prayer}</strong>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.eidItem}>
                            <div className={styles.eidItemHeader}>
                                <MapPin size={20} />
                                <h4>Location</h4>
                            </div>
                            <p className={styles.eidLocation}>
                                <strong>Springfield Convention Center</strong><br />
                                123 Main Street, Springfield<br /><br />
                                <a href="#">
                                    <Car size={16} />
                                    Download Parking Map
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className={styles.eidFestivities}>
                        <h4 className={styles.festivitiesTitle}>After-Prayer Festivities</h4>
                        <div className={styles.festivitiesList}>
                            {festivities.map((item, idx) => {
                                const IconComponent = item.icon;
                                return (
                                    <span key={idx} className={styles.festivityTag}>
                                        <IconComponent size={16} />
                                        {item.label}
                                    </span>
                                );
                            })}
                        </div>
                    </div>

                    <p className={styles.eidPolicy}>
                        <AlertCircle size={16} />
                        Please park in designated overflow lots. Do not block neighbor driveways.
                    </p>
                </div>
            </section>

            {/* ========================================
                SPONSORSHIP MODAL
            ======================================== */}
            {selectedDay && (
                <div className={styles.modalOverlay} onClick={() => setSelectedDay(null)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button
                            className={styles.modalClose}
                            onClick={() => setSelectedDay(null)}
                            aria-label="Close modal"
                        >
                            <X size={24} />
                        </button>

                        <div className={styles.modalHeader}>
                            <div className={styles.modalIconWrapper}>
                                <Heart size={32} />
                            </div>
                            <h2>Sponsor Iftar Night {selectedDay}</h2>
                            <p className={styles.modalSubtitle}>Ramadan 1447</p>
                        </div>

                        <div className={styles.modalBody}>
                            <p className={styles.modalQuote}>
                                "Whoever feeds a fasting person will have a reward like that of the fasting person,
                                without any reduction in his reward."
                            </p>
                            <p className={styles.modalQuoteSource}>— Prophet Muhammad ﷺ (Tirmidhi)</p>

                            <form className={styles.sponsorForm} onSubmit={(e) => e.preventDefault()}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="sponsorName">First & Last Name <span className={styles.required}>*</span></label>
                                    <input
                                        type="text"
                                        id="sponsorName"
                                        placeholder="Your answer"
                                        value={sponsorName}
                                        onChange={(e) => setSponsorName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="sponsorEmail">Email Address <span className={styles.required}>*</span></label>
                                    <input
                                        type="email"
                                        id="sponsorEmail"
                                        placeholder="your@email.com"
                                        value={sponsorEmail}
                                        onChange={(e) => setSponsorEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="sponsorPhone">Phone Number <span className={styles.required}>*</span></label>
                                    <input
                                        type="tel"
                                        id="sponsorPhone"
                                        placeholder="(555) 123-4567"
                                        value={sponsorPhone}
                                        onChange={(e) => setSponsorPhone(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label>I would like to contribute <span className={styles.required}>*</span></label>
                                    <div className={styles.radioGroup}>
                                        <label className={styles.radioOption}>
                                            <input
                                                type="radio"
                                                name="contribution"
                                                value="1600"
                                                checked={contributionAmount === '1600'}
                                                onChange={(e) => setContributionAmount(e.target.value)}
                                            />
                                            <span>$1600 (Sponsor a full day)</span>
                                        </label>
                                        <label className={styles.radioOption}>
                                            <input
                                                type="radio"
                                                name="contribution"
                                                value="800"
                                                checked={contributionAmount === '800'}
                                                onChange={(e) => setContributionAmount(e.target.value)}
                                            />
                                            <span>$800 (Sponsor half a day)</span>
                                        </label>
                                        <label className={styles.radioOption}>
                                            <input
                                                type="radio"
                                                name="contribution"
                                                value="400"
                                                checked={contributionAmount === '400'}
                                                onChange={(e) => setContributionAmount(e.target.value)}
                                            />
                                            <span>$400 (Contribute towards an Iftar)</span>
                                        </label>
                                    </div>
                                </div>

                                <div className={styles.anonymousOption}>
                                    <input type="checkbox" id="anonymous" />
                                    <label htmlFor="anonymous">Sponsor anonymously</label>
                                </div>

                                <button type="submit" className={styles.paymentBtn}>
                                    <CreditCard size={20} />
                                    Proceed to Payment
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
