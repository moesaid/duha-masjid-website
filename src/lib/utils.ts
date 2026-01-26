import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility for merging class names
 * Combines clsx for conditional classes with tailwind-merge for deduplication
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Capitalize first letter of a string
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Convert slug to title (e.g., "about-us" → "About Us")
 */
export function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(capitalize)
    .join(' ');
}

/**
 * Format a date string for display
 */
export function formatDate(dateString: string, locale = 'en-US'): string {
  return new Date(dateString).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

