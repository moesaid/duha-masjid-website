import { api } from '@/lib/api-client';
import type { PageContent, SiteConfig, ApiResponse } from '@/types';

/**
 * API functions specific to the starter template
 * Each template can shape its API calls differently
 */

/**
 * Fetch page content by slug
 */
export async function getPageContent(
    siteId: string,
    slug: string[]
): Promise<ApiResponse<PageContent | null>> {
    try {
        const path = slug.join('/') || 'home';
        return await api.get<PageContent>(`/api/sites/${siteId}/pages/${path}`);
    } catch {
        // Return null content for demo (no real API yet)
        return {
            data: null,
            success: true,
            message: 'No API configured - using placeholder content',
        };
    }
}

/**
 * Fetch site configuration
 */
export async function getSiteConfig(siteId: string): Promise<ApiResponse<SiteConfig | null>> {
    try {
        return await api.get<SiteConfig>(`/api/sites/${siteId}/config`);
    } catch {
        // Return null config for demo
        return {
            data: null,
            success: true,
            message: 'No API configured - using placeholder content',
        };
    }
}
