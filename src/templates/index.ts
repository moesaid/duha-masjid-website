import type { TemplateConfig, TemplateRegistry } from '@/types';

// Import all templates
import * as starterTemplate from './starter/index';

/**
 * Template Registry
 * Maps template slugs to their configurations
 * Add new templates here as they are created
 */
const registry: TemplateRegistry = {
    starter: starterTemplate.config,
};

/**
 * Get a template configuration by its slug
 * Returns undefined if template not found
 */
export function getTemplate(slug: string): TemplateConfig | undefined {
    return registry[slug];
}

/**
 * Get all available template slugs
 */
export function getTemplateIds(): string[] {
    return Object.keys(registry);
}

/**
 * Check if a template exists
 */
export function templateExists(slug: string): boolean {
    return slug in registry;
}

export { registry };
