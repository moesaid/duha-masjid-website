import type { ReactNode } from 'react';
import type { TemplateConfig, PageProps } from '@/types';
import { PageLayout } from './components';
import { slugToTitle } from '@/lib/utils';

/**
 * Starter Template Layout
 * Wraps all pages in the template's layout
 */
function Layout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}

/**
 * Starter Template Page
 * Renders content based on the URL slug
 */
function Page({ slug, templateId }: PageProps) {
    const pageName = slug.length > 0 ? slugToTitle(slug[0]) : 'Home';

    return (
        <PageLayout templateId={templateId}>
            <div style={{ padding: '4rem 0' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{pageName}</h1>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                    This is the <strong>{pageName}</strong> page rendered by the{' '}
                    <strong>Starter</strong> template.
                </p>
                <p style={{ color: 'var(--color-text-muted)' }}>
                    Current path: <code>/{templateId}/{slug.join('/') || '(home)'}</code>
                </p>
                <div
                    style={{
                        marginTop: '2rem',
                        padding: '1rem',
                        background: 'var(--color-surface)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                    }}
                >
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                        💡 This content is placeholder. In a real implementation, content would
                        be fetched from your API using the <code>useContent</code> hook or
                        server-side data fetching.
                    </p>
                </div>
            </div>
        </PageLayout>
    );
}

/**
 * Template Configuration
 * Exported and registered in src/templates/index.ts
 */
export const config: TemplateConfig = {
    id: 'starter',
    name: 'Starter Template',
    description: 'A minimal template demonstrating the isolation architecture',
    Layout,
    Page,
};
