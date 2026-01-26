import type { ApiResponse, ApiError } from '@/types';

/**
 * API client configuration
 */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

/**
 * Custom error class for API errors
 */
export class ApiClientError extends Error {
    public code: string;
    public details?: Record<string, unknown>;

    constructor(error: ApiError) {
        super(error.message);
        this.name = 'ApiClientError';
        this.code = error.code;
        this.details = error.details;
    }
}

/**
 * Request options for the API client
 */
interface RequestOptions extends RequestInit {
    params?: Record<string, string | number | boolean | undefined>;
}

/**
 * Build URL with query parameters
 */
function buildUrl(endpoint: string, params?: RequestOptions['params']): string {
    const url = new URL(endpoint, API_BASE_URL || 'http://localhost');

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                url.searchParams.append(key, String(value));
            }
        });
    }

    // If no base URL, return just the path with query string
    if (!API_BASE_URL) {
        return `${endpoint}${url.search}`;
    }

    return url.toString();
}

/**
 * Shared API client for making HTTP requests
 * Used by all template-specific API modules
 */
export async function apiClient<T>(
    endpoint: string,
    options: RequestOptions = {}
): Promise<ApiResponse<T>> {
    const { params, ...fetchOptions } = options;

    const url = buildUrl(endpoint, params);

    const response = await fetch(url, {
        ...fetchOptions,
        headers: {
            'Content-Type': 'application/json',
            ...fetchOptions.headers,
        },
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({
            code: 'UNKNOWN_ERROR',
            message: `Request failed with status ${response.status}`,
        }));

        throw new ApiClientError(errorData);
    }

    const data = await response.json();

    return {
        data,
        success: true,
    };
}

/**
 * Convenience methods for common HTTP verbs
 */
export const api = {
    get: <T>(endpoint: string, params?: RequestOptions['params']) =>
        apiClient<T>(endpoint, { method: 'GET', params }),

    post: <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
        apiClient<T>(endpoint, {
            method: 'POST',
            body: body ? JSON.stringify(body) : undefined,
            ...options,
        }),

    put: <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
        apiClient<T>(endpoint, {
            method: 'PUT',
            body: body ? JSON.stringify(body) : undefined,
            ...options,
        }),

    patch: <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
        apiClient<T>(endpoint, {
            method: 'PATCH',
            body: body ? JSON.stringify(body) : undefined,
            ...options,
        }),

    delete: <T>(endpoint: string, options?: RequestOptions) =>
        apiClient<T>(endpoint, { method: 'DELETE', ...options }),
};
