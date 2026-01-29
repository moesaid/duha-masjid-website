import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Calendar, Clock, Search, ChevronRight } from 'lucide-react';
import { blogPosts, categories, BlogPostPreview } from '../_data';
import styles from '../BlogPage.module.scss';

export function HeroSection() {
    return (
        <section className={styles.blogHero}>
            <div className={styles.heroBackground}>
                <Image src="/images/heritage/blog.jpg" alt="" fill priority className={styles.heroImage} />
                <div className={styles.heroOverlay} />
            </div>
            <div className={styles.heroContent}>
                <div className={styles.bookIcon}><BookOpen size={32} /></div>
                <span className={styles.arabicTitle}>المَقَالَات</span>
                <h1 className={styles.heroTitle}>Blog</h1>
                <p className={styles.heroTagline}>Insights, reflections, and community stories</p>
            </div>
        </section>
    );
}

interface FilterProps {
    activeCategory: string;
    setActiveCategory: (c: string) => void;
    searchQuery: string;
    setSearchQuery: (q: string) => void;
}

export function FilterSection({ activeCategory, setActiveCategory, searchQuery, setSearchQuery }: FilterProps) {
    return (
        <section className={styles.filterSection}>
            <div className={styles.searchBox}>
                <Search size={20} />
                <input type="text" placeholder="Search articles..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            <div className={styles.categoryFilter}>
                {categories.map((cat) => (
                    <button key={cat} className={activeCategory === cat ? styles.active : ''} onClick={() => setActiveCategory(cat)}>
                        {cat}
                    </button>
                ))}
            </div>
        </section>
    );
}

interface PostsProps {
    activeCategory: string;
    searchQuery: string;
}

export function PostsSection({ activeCategory, searchQuery }: PostsProps) {
    const filteredPosts = blogPosts.filter((post) => {
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
        const matchesSearch = !searchQuery || post.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className={styles.postsSection}>
            <div className={styles.postsGrid}>
                {filteredPosts.map((post: BlogPostPreview) => (
                    <Link key={post.slug} href={`/heritage/media/blog/${post.slug}`} className={`${styles.postCard} ${post.featured ? styles.featured : ''}`}>
                        <span className={styles.category}>{post.category}</span>
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <div className={styles.meta}>
                            <span><Calendar size={14} />{post.date}</span>
                            <span><Clock size={14} />{post.readTime}</span>
                        </div>
                        <span className={styles.readMore}>Read More <ChevronRight size={16} /></span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
