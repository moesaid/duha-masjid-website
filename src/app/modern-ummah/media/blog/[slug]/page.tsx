'use client';

import { useParams } from 'next/navigation';
import { blogPosts } from '../_data';
import { PostHeader, PostContent, AuthorBio, RelatedPosts, BlogNewsletter } from '../_components';

export default function BlogPostPage() {
    const params = useParams();
    const slug = params.slug as string;
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <main className="min-h-screen pt-32 pb-20 text-center">
                <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Article Not Found</h1>
                <p className="text-slate-600 mb-8">The article you are looking for does not exist.</p>
                <a href="/modern-ummah/media/blog" className="px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors">
                    Back to Blog
                </a>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            <PostHeader post={post} />
            <PostContent post={post} />
            <AuthorBio post={post} />
            <RelatedPosts currentPostId={post.id} category={post.category} />
            <BlogNewsletter />
        </main>
    );
}
