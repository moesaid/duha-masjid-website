import { notFound } from 'next/navigation';
import { getTemplate, templateExists } from '@/templates';

interface TemplateLayoutProps {
    children: React.ReactNode;
    params: Promise<{ template: string }>;
}

export default async function TemplateLayout({
    children,
    params,
}: TemplateLayoutProps) {
    const { template } = await params;

    if (!templateExists(template)) {
        notFound();
    }

    const templateConfig = getTemplate(template);

    if (!templateConfig) {
        notFound();
    }

    const { Layout } = templateConfig;

    return <Layout>{children}</Layout>;
}

/**
 * Generate static params for known templates
 * This enables static generation for template routes
 */
export async function generateStaticParams() {
    const { getTemplateIds } = await import('@/templates');
    return getTemplateIds().map((template) => ({ template }));
}
