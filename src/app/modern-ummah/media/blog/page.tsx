'use client';

import { useBlogState } from './_hooks';
import { BlogHero, FeaturedPost, BlogList, BlogNewsletter } from './_components';

export default function BlogPage() {
    const {
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
        featuredPost,
        filteredPosts,
        categories
    } = useBlogState();

    return (
        <main className="min-h-screen bg-slate-50">
            <BlogHero />

            {featuredPost && activeCategory === 'All' && !searchQuery && (
                <FeaturedPost post={featuredPost} />
            )}

            <BlogList
                posts={filteredPosts}
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            <BlogNewsletter />
        </main>
    );
}
