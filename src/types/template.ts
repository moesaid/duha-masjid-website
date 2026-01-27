import type { ReactNode } from 'react';

/**
 * Props for layout components
 */
export interface LayoutProps {
  children: ReactNode;
  templateId: string;
}

/**
 * Template configuration that each template must export
 */
export interface TemplateConfig {
  /** Unique identifier for the template */
  id: string;
  /** Display name of the template */
  name: string;
  /** Description of the template */
  description: string;
  /** Default theme settings */
  defaultTheme?: {
    preset: string;
    defaultMode: 'light' | 'dark' | 'system';
  };
  /** The main layout component for the template */
  Layout: React.ComponentType<LayoutProps>;
  /** Page component that handles routing within the template */
  Page: React.ComponentType<PageProps>;
}

/**
 * Props passed to template page components
 */
export interface PageProps {
  /** URL slug segments (e.g., ['about', 'team'] for /template/about/team) */
  slug: string[];
  /** Template identifier */
  templateId: string;
}

/**
 * Registry mapping template slugs to their configurations
 */
export type TemplateRegistry = Record<string, TemplateConfig>;
