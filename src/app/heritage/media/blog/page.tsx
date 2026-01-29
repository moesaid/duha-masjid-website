// Blog Listing Page - Heritage Design
'use client';

import { useBlogState } from './_hooks';
import { HeroSection, FilterSection, PostsSection } from './_components';
import styles from './BlogPage.module.scss';

export default function BlogPage() {
    const { activeCategory, setActiveCategory, searchQuery, setSearchQuery } = useBlogState();

    return (
        <main className={styles.blogPage}>
            <HeroSection />
            <FilterSection activeCategory={activeCategory} setActiveCategory={setActiveCategory} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <PostsSection activeCategory={activeCategory} searchQuery={searchQuery} />
        </main>
    );
}
