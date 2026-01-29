// Blog Page - HERITAGE ALIGNED
// Design: Classic editorial layout with featured posts and categories
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './_components/_shared.module.scss';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

// Blog Posts Data
const blogPosts = [
    {
        id: 'building-ummah-together',
        title: 'Building the Ummah Together: Reflections on Our Community Growth',
        excerpt: 'As we gather for our weekly prayers, we see new faces joining our community every week. This growth brings both blessings and responsibilities...',
        author: 'Imam Muhammad Ali',
        date: 'January 25, 2026',
        category: 'Community',
        image: '/images/mosque-interior.jpg',
        featured: true
    },
    {
        id: 'ramadan-preparation',
        title: 'Preparing Hearts and Homes for Ramadan',
        excerpt: 'With just weeks until the blessed month, now is the time to begin our spiritual preparation. Here are practical steps to maximize your Ramadan...',
        author: 'Sr. Fatima Hassan',
        date: 'January 20, 2026',
        category: 'Spirituality',
        image: '/images/mosque-dome.jpg',
        featured: false
    },
    {
        id: 'youth-leadership-program',
        title: 'Announcing Our New Youth Leadership Program',
        excerpt: 'We are excited to announce a comprehensive leadership development program for young Muslims ages 16-25. Applications now open...',
        author: 'Br. Ahmad Malik',
        date: 'January 18, 2026',
        category: 'Youth',
        image: '/images/shykh.jpg',
        featured: false
    },
    {
        id: 'friday-reflections-patience',
        title: 'Friday Reflections: The Beauty of Patience',
        excerpt: 'In our fast-paced world, the virtue of sabr (patience) becomes ever more crucial. Let us explore what the Quran and Sunnah teach us...',
        author: 'Imam Muhammad Ali',
        date: 'January 15, 2026',
        category: 'Khutbah',
        image: '/images/mosque-interior.jpg',
        featured: false
    },
    {
        id: 'interfaith-dialogue-success',
        title: 'Interfaith Dialogue Day: A Resounding Success',
        excerpt: 'Last Saturday, we hosted over 100 guests from different faith communities for our annual interfaith dialogue event. The conversations were rich...',
        author: 'Dr. Layla Ahmed',
        date: 'January 12, 2026',
        category: 'Outreach',
        image: '/images/mosque-dome.jpg',
        featured: false
    },
    {
        id: 'construction-update-january',
        title: 'Construction Update: Phase 2 Progress Report',
        excerpt: 'Alhamdulillah, the expansion project continues on schedule. This month we completed the foundation work for the new education wing...',
        author: 'Br. Khalid Mansour',
        date: 'January 8, 2026',
        category: 'Announcements',
        image: '/images/shykh.jpg',
        featured: false
    }
];

// Categories
const categories = ['All', 'Community', 'Spirituality', 'Youth', 'Khutbah', 'Outreach', 'Announcements'];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);

    const filteredPosts = activeCategory === 'All'
        ? regularPosts
        : regularPosts.filter(post => post.category === activeCategory);

    return (
        <main className={styles.blogPage}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroPattern} />
                <div className={styles.heroContent}>
                    <span className={styles.heroBadge}>Our Stories</span>
                    <h1 className={styles.heroTitle}>The Masjid Blog</h1>
                    <p className={styles.heroSubtitle}>
                        Reflections, announcements, and stories from our community
                    </p>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && (
                <section className={styles.featuredSection}>
                    <div className={styles.featuredContainer}>
                        <div className={styles.featuredImageWrapper}>
                            <Image
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                fill
                                className={styles.featuredImage}
                            />
                            <span className={styles.featuredBadge}>Featured</span>
                        </div>
                        <div className={styles.featuredContent}>
                            <span className={styles.postCategory}>{featuredPost.category}</span>
                            <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
                            <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
                            <div className={styles.postMeta}>
                                <span className={styles.metaItem}>
                                    <User size={14} />
                                    {featuredPost.author}
                                </span>
                                <span className={styles.metaItem}>
                                    <Calendar size={14} />
                                    {featuredPost.date}
                                </span>
                            </div>
                            <Link href={`/heritage/media/blog/${featuredPost.id}`} className={styles.readMoreLink}>
                                Read Full Article
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Category Filter */}
            <section className={styles.filterSection}>
                <div className={styles.categoryTabs}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`${styles.categoryTab} ${activeCategory === category ? styles.active : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Posts Grid */}
            <section className={styles.postsSection}>
                <div className={styles.postsGrid}>
                    {filteredPosts.map((post) => (
                        <article key={post.id} className={styles.postCard}>
                            <div className={styles.postImageWrapper}>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className={styles.postImage}
                                />
                            </div>
                            <div className={styles.postContent}>
                                <span className={styles.postCategory}>{post.category}</span>
                                <h3 className={styles.postTitle}>{post.title}</h3>
                                <p className={styles.postExcerpt}>{post.excerpt}</p>
                                <div className={styles.postMeta}>
                                    <span className={styles.metaItem}>
                                        <Calendar size={12} />
                                        {post.date}
                                    </span>
                                </div>
                                <Link href={`/heritage/media/blog/${post.id}`} className={styles.postLink}>
                                    Read More →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className={styles.newsletterSection}>
                <div className={styles.newsletterContent}>
                    <h2 className={styles.newsletterTitle}>Stay Connected</h2>
                    <p className={styles.newsletterText}>
                        Subscribe to receive blog updates, community news, and event announcements.
                    </p>
                    <Link href="/heritage/media/newsletter" className={styles.newsletterButton}>
                        Subscribe to Newsletter
                    </Link>
                </div>
            </section>
        </main>
    );
}
