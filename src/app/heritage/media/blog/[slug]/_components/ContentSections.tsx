import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, Tag, Share2, ChevronLeft, Facebook, Twitter, Link as LinkIcon } from 'lucide-react';
import { samplePost, relatedPosts, BlogPost } from '../_data';
import styles from '../ArticlePage.module.scss';

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
            <p className={styles.excerpt}>{post.excerpt}</p>
            {post.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
            ))}
        </article>
    );
}

interface ShareProps {
    isOpen: boolean;
    onToggle: () => void;
}

export function ShareSection({ isOpen, onToggle }: ShareProps) {
    return (
        <div className={styles.shareSection}>
            <button className={styles.shareBtn} onClick={onToggle}>
                <Share2 size={20} />
                <span>Share</span>
            </button>
            {isOpen && (
                <div className={styles.shareOptions}>
                    <button><Facebook size={20} /></button>
                    <button><Twitter size={20} /></button>
                    <button><LinkIcon size={20} /></button>
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
