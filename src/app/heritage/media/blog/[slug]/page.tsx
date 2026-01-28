// Blog Article Page - Dynamic Route with Rich Text Demo
// Design: Classic editorial layout showcasing all rich text capabilities
'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ArticlePage.module.scss';
import { Calendar, User, ArrowLeft, Clock, Share2 } from 'lucide-react';

// Demo article data with full rich text showcase
const demoArticle = {
    id: 'building-ummah-together',
    title: 'Building the Ummah Together: Reflections on Community Growth',
    subtitle: 'A comprehensive look at our journey and the road ahead',
    author: 'Imam Muhammad Ali',
    authorBio: 'Senior Imam and Spiritual Director at Al-Noor Masjid since 2015',
    date: 'January 25, 2026',
    readTime: '8 min read',
    category: 'Community',
    image: '/images/heritage/mosque-interior.jpg',
    content: `
        <p class="lead">As we gather for our weekly prayers, we see new faces joining our community every week. This growth brings both blessings and responsibilities that we must embrace together as one unified ummah.</p>

        <h2>The Foundation of Our Community</h2>
        <p>When Al-Noor Masjid was first established in 1985, it began with just a handful of families gathering in a rented hall. Today, alhamdulillah, we have grown into one of the largest and most vibrant Muslim communities in the region. This growth did not happen by accident—it was built on the foundation of <strong>sincere intention</strong>, <strong>community service</strong>, and <strong>unwavering faith</strong>.</p>

        <blockquote>
            <p>"The believers, in their mutual kindness, compassion, and sympathy, are like one body. When one limb aches, the whole body reacts with sleeplessness and fever."</p>
            <cite>— Prophet Muhammad ﷺ (Bukhari & Muslim)</cite>
        </blockquote>

        <h2>Our Vision for the Future</h2>
        <p>Looking ahead, we have outlined several key priorities for our community's continued growth:</p>

        <ul>
            <li><strong>Education Excellence:</strong> Expanding our weekend school and establishing a full-time Islamic school</li>
            <li><strong>Youth Development:</strong> Creating comprehensive programs that address the unique challenges facing young Muslims</li>
            <li><strong>Community Outreach:</strong> Building bridges with our neighbors and showcasing the beauty of Islam</li>
            <li><strong>Facility Expansion:</strong> Completing Phase 2 of our building project to accommodate our growing congregation</li>
            <li><strong>Financial Sustainability:</strong> Establishing an endowment fund for long-term stability</li>
        </ul>

        <figure>
            <img src="/images/heritage/mosque-dome.jpg" alt="Al-Noor Masjid dome at sunset" />
            <figcaption>The iconic dome of Al-Noor Masjid, a beacon of faith in our community since 1985</figcaption>
        </figure>

        <h2>A Message from the Heart</h2>
        <p>I want to take this opportunity to address something that has been on my heart. In recent months, I have observed both the incredible generosity of our community and also some areas where we can improve.</p>

        <h3>What We're Doing Well</h3>
        <ol>
            <li>Our food pantry has served over 500 families this quarter alone</li>
            <li>Volunteer participation has increased by 35% compared to last year</li>
            <li>Our youth programs now engage over 200 young Muslims weekly</li>
            <li>Interfaith dialogue events have attracted positive media coverage</li>
        </ol>

        <h3>Areas for Improvement</h3>
        <p>However, we must also be honest about our challenges. Attendance at daily prayers has declined, and we need more families to commit to regular participation in educational programs. These are not criticisms—they are calls to action for each of us.</p>

        <div class="videoWrapper">
            <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Community Message from Imam Muhammad Ali"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        <p class="caption">Watch the full video message from Imam Muhammad Ali</p>

        <h2>Practical Steps Forward</h2>
        <p>Here are concrete actions each family can take to strengthen our community:</p>

        <table>
            <thead>
                <tr>
                    <th>Action</th>
                    <th>Time Commitment</th>
                    <th>Impact</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Attend one extra prayer weekly</td>
                    <td>30 minutes</td>
                    <td>Spiritual growth</td>
                </tr>
                <tr>
                    <td>Volunteer monthly</td>
                    <td>2-3 hours</td>
                    <td>Community service</td>
                </tr>
                <tr>
                    <td>Invite a neighbor to open house</td>
                    <td>1 hour</td>
                    <td>Dawah & outreach</td>
                </tr>
                <tr>
                    <td>Contribute to building fund</td>
                    <td>N/A</td>
                    <td>Facility expansion</td>
                </tr>
            </tbody>
        </table>

        <h2>Conclusion</h2>
        <p>In closing, I remind myself and all of you of the words of Allah (SWT) in the Quran:</p>

        <blockquote class="quran">
            <p>وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا</p>
            <p>"And hold firmly to the rope of Allah all together and do not become divided."</p>
            <cite>— Surah Aal-Imran (3:103)</cite>
        </blockquote>

        <p>May Allah bless our community, unite our hearts, and guide us on the straight path. May He accept our efforts and make us among those who serve His deen with sincerity.</p>

        <p><em>Wa assalamu alaikum wa rahmatullahi wa barakatuh.</em></p>
    `
};

// All blog posts for fallback
const allPosts: Record<string, typeof demoArticle> = {
    'building-ummah-together': demoArticle,
    'ramadan-preparation': {
        ...demoArticle,
        id: 'ramadan-preparation',
        title: 'Preparing Hearts and Homes for Ramadan',
        subtitle: 'Practical steps to maximize the blessed month',
        category: 'Spirituality',
        date: 'January 20, 2026'
    },
    'youth-leadership-program': {
        ...demoArticle,
        id: 'youth-leadership-program',
        title: 'Announcing Our New Youth Leadership Program',
        subtitle: 'Applications now open for ages 16-25',
        author: 'Br. Ahmad Malik',
        category: 'Youth',
        date: 'January 18, 2026'
    },
    'friday-reflections-patience': {
        ...demoArticle,
        id: 'friday-reflections-patience',
        title: 'Friday Reflections: The Beauty of Patience',
        subtitle: 'Lessons from the Quran and Sunnah on sabr',
        category: 'Khutbah',
        date: 'January 15, 2026'
    },
    'interfaith-dialogue-success': {
        ...demoArticle,
        id: 'interfaith-dialogue-success',
        title: 'Interfaith Dialogue Day: A Resounding Success',
        subtitle: 'Over 100 guests from different faith communities joined us',
        author: 'Dr. Layla Ahmed',
        category: 'Outreach',
        date: 'January 12, 2026'
    },
    'construction-update-january': {
        ...demoArticle,
        id: 'construction-update-january',
        title: 'Construction Update: Phase 2 Progress Report',
        subtitle: 'Foundation work completed for the new education wing',
        author: 'Br. Khalid Mansour',
        category: 'Announcements',
        date: 'January 8, 2026'
    }
};

interface ArticlePageProps {
    params: Promise<{ slug: string }>;
}

export default function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = use(params);
    const article = allPosts[slug] || demoArticle;

    return (
        <main className={styles.articlePage}>
            {/* Hero Section */}
            <header className={styles.articleHero}>
                <div className={styles.heroOverlay} />
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className={styles.heroImage}
                    priority
                />
                <div className={styles.heroContent}>
                    <Link href="/heritage/media/blog" className={styles.backLink}>
                        <ArrowLeft size={18} />
                        Back to Blog
                    </Link>
                    <span className={styles.categoryBadge}>{article.category}</span>
                    <h1 className={styles.articleTitle}>{article.title}</h1>
                    <p className={styles.articleSubtitle}>{article.subtitle}</p>
                    <div className={styles.articleMeta}>
                        <span className={styles.metaItem}>
                            <User size={16} />
                            {article.author}
                        </span>
                        <span className={styles.metaItem}>
                            <Calendar size={16} />
                            {article.date}
                        </span>
                        <span className={styles.metaItem}>
                            <Clock size={16} />
                            {article.readTime}
                        </span>
                    </div>
                </div>
            </header>

            {/* Article Content */}
            <article className={styles.articleContainer}>
                <div className={styles.articleBody}>
                    {/* Author Card */}
                    <div className={styles.authorCard}>
                        <div className={styles.authorAvatar}>
                            <Image
                                src="/images/heritage/shykh.jpg"
                                alt={article.author}
                                fill
                                className={styles.avatarImage}
                            />
                        </div>
                        <div className={styles.authorInfo}>
                            <span className={styles.authorName}>{article.author}</span>
                            <span className={styles.authorBio}>{article.authorBio}</span>
                        </div>
                    </div>

                    {/* Rich Text Content */}
                    <div
                        className={styles.richContent}
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    {/* Share Section */}
                    <div className={styles.shareSection}>
                        <span className={styles.shareLabel}>Share this article:</span>
                        <div className={styles.shareButtons}>
                            <button className={styles.shareBtn} aria-label="Share on Facebook">
                                <Share2 size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className={styles.articleSidebar}>
                    <div className={styles.sidebarCard}>
                        <h3>Related Articles</h3>
                        <ul className={styles.relatedList}>
                            <li>
                                <Link href="/heritage/media/blog/ramadan-preparation">
                                    Preparing Hearts and Homes for Ramadan
                                </Link>
                            </li>
                            <li>
                                <Link href="/heritage/media/blog/friday-reflections-patience">
                                    Friday Reflections: The Beauty of Patience
                                </Link>
                            </li>
                            <li>
                                <Link href="/heritage/media/blog/youth-leadership-program">
                                    New Youth Leadership Program
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.sidebarCard}>
                        <h3>Subscribe</h3>
                        <p>Get the latest articles delivered to your inbox.</p>
                        <Link href="/heritage/media/newsletter" className={styles.subscribeBtn}>
                            Subscribe Now
                        </Link>
                    </div>
                </aside>
            </article>
        </main>
    );
}
