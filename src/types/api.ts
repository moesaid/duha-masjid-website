/**
 * Common API response types
 */

export interface ApiResponse<T> {
    data: T;
    success: boolean;
    message?: string;
}

export interface ApiError {
    code: string;
    message: string;
    details?: Record<string, unknown>;
}

export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
}

/**
 * Common content types that templates might fetch
 */
export interface PageContent {
    id: string;
    slug: string;
    title: string;
    content: string;
    metadata?: Record<string, unknown>;
    createdAt: string;
    updatedAt: string;
}

export interface SiteConfig {
    id: string;
    name: string;
    templateId: string;
    settings: Record<string, unknown>;
}
