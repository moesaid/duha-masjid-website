'use client';

import { useState, useEffect } from 'react';
import { getPageContent } from '../api/content';
import type { PageContent } from '@/types';

interface UseContentResult {
    content: PageContent | null;
    isLoading: boolean;
    error: string | null;
}

/**
 * Hook for fetching page content in the starter template
 */
export function useContent(siteId: string, slug: string[]): UseContentResult {
    const [content, setContent] = useState<PageContent | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchContent() {
            setIsLoading(true);
            setError(null);

            try {
                const response = await getPageContent(siteId, slug);
                setContent(response.data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch content');
            } finally {
                setIsLoading(false);
            }
        }

        fetchContent();
    }, [siteId, slug.join('/')]);

    return { content, isLoading, error };
}
