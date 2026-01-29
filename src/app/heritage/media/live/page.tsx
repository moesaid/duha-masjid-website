// Live Stream Page - HERITAGE ALIGNED
// Design: Heritage Green + Lantern Gold + Compact Layout
'use client';

import Link from 'next/link';
import {
    Radio,
    User,
    Eye,
    Heart,
    Share2,
    Calendar,
    BookOpen,
    ExternalLink,
    Play,
    ChevronRight
} from 'lucide-react';
import styles from './LiveStreamPage.module.scss';

// ========================================
// DATA
// ========================================
const currentStream = {
    isLive: true, // Toggle this to test live/offline states
    title: 'Isha Prayer & Khatira',
    speaker: 'Sh. Abdullah Smith',
    viewers: 1247,
    youtubeId: 'oOEhCAvIl5I'
};

const nextBroadcast = {
    title: 'Friday Khutbah',
    time: 'Tomorrow 1:00 PM',
    countdown: { hours: 14, minutes: 30, seconds: 0 }
};

const schedule = [
    { id: 1, time: '1:00 PM', title: 'Jumu\'ah Khutbah', day: 'Tomorrow', upcoming: true },
    { id: 2, time: '6:15 PM', title: 'Maghrib Prayer', day: 'Tomorrow', upcoming: false },
    { id: 3, time: '7:30 PM', title: 'Isha & Khatira', day: 'Tomorrow', upcoming: false },
    { id: 4, time: '8:00 PM', title: 'Sisters Halaqa', day: 'Thursday', upcoming: false }
];

// Resources removed per user request

const archives = {
    khutbahs: [
        { id: 1, title: 'The Rights of Neighbors in Islam', date: 'Jan 24, 2026', duration: '42:15' },
        { id: 2, title: 'Preparing for Ramadan', date: 'Jan 17, 2026', duration: '38:22' },
        { id: 3, title: 'Patience in Times of Trial', date: 'Jan 10, 2026', duration: '45:10' },
        { id: 4, title: 'The Importance of Community', date: 'Jan 3, 2026', duration: '40:55' }
    ],
    reminders: [
        { id: 1, title: 'Morning Adhkar Reminder', date: 'Jan 26, 2026', duration: '8:15' },
        { id: 2, title: 'The Power of Istighfar', date: 'Jan 25, 2026', duration: '12:30' },
        { id: 3, title: 'Virtues of Tahajjud', date: 'Jan 24, 2026', duration: '10:45' },
        { id: 4, title: 'Gratitude in Daily Life', date: 'Jan 23, 2026', duration: '9:20' }
    ]
};

// ========================================
// COMPONENT
// ========================================
export default function LiveStreamPage() {
    const isLive = currentStream.isLive;

    return (
        <div className={styles.liveStreamPage}>
            {/* 1. BISMILLAH HEADER */}
            <header className={styles.headerSection}>
                <div className={styles.headerContent}>
                    <p className={styles.headerCalligraphy}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
                    <h1 className={styles.headerTitle}>Live Stream</h1>
                </div>
            </header>

            {/* 2. MAIN CONTENT */}
            <section className={styles.mainSection}>
                <div className={styles.contentGrid}>
                    {/* Video Player Card */}
                    <div className={styles.playerCard}>
                        <div className={styles.playerWrapper}>
                            <div className={styles.videoFrame}>
                                {isLive ? (
                                    <>
                                        <div className={`${styles.statusBadge} ${styles.live}`}>
                                            <span className={styles.statusDot} />
                                            <span className={styles.statusText}>LIVE</span>
                                        </div>
                                        <iframe
                                            className={styles.videoEmbed}
                                            src={`https://www.youtube.com/embed/${currentStream.youtubeId}?autoplay=1&mute=1`}
                                            title={currentStream.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </>
                                ) : (
                                    <>
                                        <div className={`${styles.statusBadge} ${styles.offline}`}>
                                            <span className={styles.statusDot} />
                                            <span className={styles.statusText}>OFFLINE</span>
                                        </div>
                                        <div className={styles.standbyOverlay}>
                                            <div className={styles.standbyContent}>
                                                <Radio size={36} className={styles.standbyIcon} />
                                                <h2 className={styles.standbyTitle}>Next Broadcast</h2>
                                                <p className={styles.nextBroadcast}>{nextBroadcast.title} • {nextBroadcast.time}</p>
                                                <div className={styles.countdown}>
                                                    <div className={styles.countdownUnit}>
                                                        <span className={styles.countdownValue}>{String(nextBroadcast.countdown.hours).padStart(2, '0')}</span>
                                                        <span className={styles.countdownLabel}>HRS</span>
                                                    </div>
                                                    <div className={styles.countdownUnit}>
                                                        <span className={styles.countdownValue}>{String(nextBroadcast.countdown.minutes).padStart(2, '0')}</span>
                                                        <span className={styles.countdownLabel}>MIN</span>
                                                    </div>
                                                    <div className={styles.countdownUnit}>
                                                        <span className={styles.countdownValue}>{String(nextBroadcast.countdown.seconds).padStart(2, '0')}</span>
                                                        <span className={styles.countdownLabel}>SEC</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Control Bar */}
                        <div className={styles.controlBar}>
                            <div className={styles.streamInfo}>
                                <h2 className={styles.streamTitle}>{currentStream.title}</h2>
                                <div className={styles.streamMeta}>
                                    <span><User size={12} /> {currentStream.speaker}</span>
                                    <span><Eye size={12} /> {currentStream.viewers.toLocaleString()} watching</span>
                                </div>
                            </div>
                            <div className={styles.streamActions}>
                                <button className={styles.donateBtn}>
                                    <Heart size={14} />
                                    Donate
                                </button>
                                <button className={styles.shareBtn} aria-label="Share">
                                    <Share2 size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Cards */}
                    <aside className={styles.sidebar}>
                        {/* Schedule Card */}
                        <div className={styles.sidebarCard}>
                            <div className={styles.sidebarHeader}>
                                <Calendar size={16} />
                                <h3>Upcoming Broadcasts</h3>
                            </div>
                            <div className={styles.sidebarBody}>
                                <div className={styles.scheduleList}>
                                    {schedule.map((item) => (
                                        <div key={item.id} className={`${styles.scheduleItem} ${item.upcoming ? styles.upcoming : ''}`}>
                                            <span className={styles.scheduleTime}>{item.time}</span>
                                            <div className={styles.scheduleInfo}>
                                                <span className={styles.scheduleTitle}>{item.title}</span>
                                                <span className={styles.scheduleDay}>{item.day}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Mushaf Card */}
                        <div className={styles.sidebarCard}>
                            <div className={styles.sidebarHeader}>
                                <BookOpen size={16} />
                                <h3>Digital Mushaf</h3>
                            </div>
                            <div className={styles.sidebarBody}>
                                <div className={styles.mushafWidget}>
                                    <BookOpen size={32} className={styles.mushafIcon} />
                                    <h4 className={styles.mushafTitle}>Follow Along</h4>
                                    <p className={styles.mushafSubtitle}>
                                        Open the Quran to follow the recitation
                                    </p>
                                    <Link href="https://quran.com" target="_blank" className={styles.mushafLink}>
                                        <ExternalLink size={14} />
                                        Open Quran.com
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* 3. ARCHIVES SECTION */}
            <section className={styles.archivesSection}>
                <div className={styles.archivesContainer}>
                    <div className={styles.archivesHeader}>
                        <h2 className={styles.archivesTitle}>Recent Broadcasts</h2>
                        <Link href="/heritage/media/archive" className={styles.viewAllLink}>
                            View All <ChevronRight size={16} />
                        </Link>
                    </div>

                    {/* Khutbahs Rail */}
                    <div className={styles.categoryRail}>
                        <h3 className={styles.categoryTitle}>Khutbahs</h3>
                        <div className={styles.railScroll}>
                            {archives.khutbahs.map((video) => (
                                <div key={video.id} className={styles.archiveCard}>
                                    <div className={styles.archiveThumbnail}>
                                        <div className={styles.thumbnailPlaceholder}>
                                            <Play size={24} />
                                        </div>
                                        <span className={styles.archiveDuration}>{video.duration}</span>
                                    </div>
                                    <div className={styles.archiveInfo}>
                                        <h4 className={styles.archiveTitle}>{video.title}</h4>
                                        <span className={styles.archiveDate}>{video.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Daily Reminders Rail */}
                    <div className={styles.categoryRail}>
                        <h3 className={styles.categoryTitle}>Daily Reminders</h3>
                        <div className={styles.railScroll}>
                            {archives.reminders.map((video) => (
                                <div key={video.id} className={styles.archiveCard}>
                                    <div className={styles.archiveThumbnail}>
                                        <div className={styles.thumbnailPlaceholder}>
                                            <Play size={24} />
                                        </div>
                                        <span className={styles.archiveDuration}>{video.duration}</span>
                                    </div>
                                    <div className={styles.archiveInfo}>
                                        <h4 className={styles.archiveTitle}>{video.title}</h4>
                                        <span className={styles.archiveDate}>{video.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. HELP FOOTER */}
            <footer className={styles.helpFooter}>
                <p className={styles.helpText}>
                    Having trouble? <a href={`https://youtube.com/watch?v=${currentStream.youtubeId}`} target="_blank" rel="noopener noreferrer">Watch on YouTube</a> • Your donations keep these broadcasts free worldwide.
                </p>
            </footer>
        </div>
    );
}
