import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, Tag, Share2, ChevronLeft, Facebook, Twitter, Link as LinkIcon, MessageCircle } from 'lucide-react';
import { getFacebookUrl, getTwitterUrl, getWhatsAppUrl, copyToClipboard } from '@phntms/react-share';
import { samplePost, relatedPosts, BlogPost } from '../_data';
import styles from './_shared.module.scss';

interface HeaderProps {
    post: BlogPost;
}

export function PostHeader({ post }: HeaderProps) {
    return (
        <header className={styles.postHeader}>
            <Link href="/heritage/media/blog" className={styles.backLink}>
                <ChevronLeft size={20} />
                <span>Back to Blog</span>
            </Link>
            <div className={styles.headerImage}>
                <Image src={post.image} alt={post.title} fill className={styles.image} />
                <div className={styles.headerOverlay} />
            </div>
            <div className={styles.headerContent}>
                <span className={styles.category}>{post.category}</span>
                <h1>{post.title}</h1>
                <div className={styles.meta}>
                    <span><User size={16} />{post.author}</span>
                    <span><Calendar size={16} />{post.date}</span>
                    <span><Clock size={16} />{post.readTime}</span>
                </div>
            </div>
        </header>
    );
}

interface ContentProps {
    post: BlogPost;
}

export function PostContent({ post }: ContentProps) {
    return (
        <article className={styles.postContent}>
            <div
                className={styles.richContent}
                dangerouslySetInnerHTML={{ __html: post.richContent }}
            />
        </article>
    );
}

interface ShareProps {
    isOpen: boolean;
    onToggle: () => void;
}

export function ShareSection({ isOpen, onToggle }: ShareProps) {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://duhamasjid.com/heritage/media/blog';
    const shareTitle = 'Check out this article from Duha Masjid';

    const handleCopyLink = async () => {
        await copyToClipboard(shareUrl);
        alert('Link copied to clipboard!');
    };

    return (
        <div className={styles.shareSection}>
            <button className={styles.shareBtn} onClick={onToggle}>
                <Share2 size={20} />
                <span>Share</span>
            </button>
            {isOpen && (
                <div className={styles.shareOptions}>
                    <a
                        href={getFacebookUrl({ url: shareUrl })}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on Facebook"
                    >
                        <Facebook size={20} />
                    </a>
                    <a
                        href={getTwitterUrl({ url: shareUrl, text: shareTitle })}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on Twitter"
                    >
                        <Twitter size={20} />
                    </a>
                    <a
                        href={getWhatsAppUrl({ url: shareUrl })}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on WhatsApp"
                    >
                        <MessageCircle size={20} />
                    </a>
                    <button onClick={handleCopyLink} aria-label="Copy link">
                        <LinkIcon size={20} />
                    </button>
                </div>
            )}
        </div>
    );
}

export function RelatedSection() {
    return (
        <section className={styles.relatedSection}>
            <h3>Related Articles</h3>
            <div className={styles.relatedGrid}>
                {relatedPosts.map((post, idx) => (
                    <Link key={idx} href={`/heritage/media/blog/${post.slug}`} className={styles.relatedCard}>
                        <span className={styles.relatedCategory}>{post.category}</span>
                        <h4>{post.title}</h4>
                    </Link>
                ))}
            </div>
        </section>
    );
}
