import { useState } from 'react';
import { blogPosts, categories } from '../_data';

export function useBlogState() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);

    const filteredPosts = regularPosts.filter(post => {
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return {
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
        featuredPost,
        filteredPosts,
        categories
    };
}
