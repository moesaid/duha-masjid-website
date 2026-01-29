// Blog Post Page - Heritage Design
'use client';

import { samplePost } from './_data';
import { useBlogPostState } from './_hooks';
import { PostHeader, PostContent, ShareSection, RelatedSection } from './_components';
import styles from './_components/_shared.module.scss';

export default function BlogPostPage() {
    const { isShareOpen, toggleShare } = useBlogPostState();

    return (
        <main className={styles.blogPostPage}>
            <PostHeader post={samplePost} />
            <PostContent post={samplePost} />
            <ShareSection isOpen={isShareOpen} onToggle={toggleShare} />
            <RelatedSection />
        </main>
    );
}
