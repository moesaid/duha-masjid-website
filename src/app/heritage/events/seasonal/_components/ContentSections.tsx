import Link from 'next/link';
import { Moon, Clock, Heart, Utensils, Star, ChevronRight, MapPin, Car, AlertCircle } from 'lucide-react';
import { taraweehInfo, ramadanCalendar, iftarMenu, eidPrayers, festivities } from '../_data';
import styles from '../RamadanPage.module.scss';

interface HeroSectionProps {
    countdown: { hours: number; minutes: number; seconds: number };
}

export function HeroSection({ countdown }: HeroSectionProps) {
    return (
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
                        <span className={styles.countdownNumber}>{String(countdown.hours).padStart(2, '0')}</span>
                        <span className={styles.countdownLabel}>Hours</span>
                    </div>
                    <span className={styles.countdownColon}>:</span>
                    <div className={styles.countdownItem}>
                        <span className={styles.countdownNumber}>{String(countdown.minutes).padStart(2, '0')}</span>
                        <span className={styles.countdownLabel}>Minutes</span>
                    </div>
                    <span className={styles.countdownColon}>:</span>
                    <div className={styles.countdownItem}>
                        <span className={styles.countdownNumber}>{String(countdown.seconds).padStart(2, '0')}</span>
                        <span className={styles.countdownLabel}>Seconds</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function TaraweehSection() {
    return (
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
                        <div className={styles.juzFill} style={{ width: `${(taraweehInfo.currentJuz / taraweehInfo.totalJuz) * 100}%` }} />
                    </div>
                </div>
            </div>
        </section>
    );
}

interface IftarSectionProps {
    onDaySelect: (day: number) => void;
}

export function IftarSection({ onDaySelect }: IftarSectionProps) {
    return (
        <section className={styles.iftarSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Breaking Bread Together</span>
                <h2 className={styles.sectionTitle}>Community Iftar</h2>
            </div>
            <div className={styles.iftarGrid}>
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
                                onClick={() => day.status === 'available' && day.ramadanDay > 0 && onDaySelect(day.ramadanDay)}
                                role={day.status === 'available' ? 'button' : undefined}
                                tabIndex={day.status === 'available' ? 0 : undefined}
                            >
                                {day.day}
                            </div>
                        ))}
                    </div>
                </div>
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
    );
}

export function ItikafSection() {
    return (
        <section className={styles.itikafSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>The Last Ten Nights</span>
                <h2 className={styles.sectionTitle}>I'tikaf & Laylatul Qadr</h2>
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
    );
}

export function EidSection() {
    return (
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
    );
}
