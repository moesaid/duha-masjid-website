'use client';

import { useState, useEffect } from 'react';
import type { PageContent } from '@/types';

interface UseContentResult {
    content: PageContent | null;
    isLoading: boolean;
    error: string | null;
}

/**
 * Shared hook for fetching page content
 * Used by all templates for content management
 */
export function useContent(templateId: string, slug: string[]): UseContentResult {
    const [content, setContent] = useState<PageContent | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchContent() {
            setIsLoading(true);
            setError(null);

            try {
                // TODO: Replace with actual API call
                // const response = await api.get(`/${templateId}/pages/${slug.join('/')}`);
                // setContent(response.data);

                // Mock implementation for now
                setContent({
                    id: '1',
                    title: slug[0] || 'Home',
                    slug: slug.join('/') || 'home',
                    content: 'Content placeholder',
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                });
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch content');
            } finally {
                setIsLoading(false);
            }
        }

        fetchContent();
    }, [templateId, slug.join('/')]);

    return { content, isLoading, error };
}
