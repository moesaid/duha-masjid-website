import { notFound } from 'next/navigation';
import { getTemplate } from '@/templates';

interface TemplatePageProps {
    params: Promise<{
        template: string;
        slug?: string[];
    }>;
}

export default async function TemplatePage({ params }: TemplatePageProps) {
    const { template, slug = [] } = await params;

    const templateConfig = getTemplate(template);

    if (!templateConfig) {
        notFound();
    }

    const { Page } = templateConfig;

    return <Page slug={slug} templateId={template} />;
}

/**
 * Generate metadata based on template and slug
 */
export async function generateMetadata({ params }: TemplatePageProps) {
    const { template, slug = [] } = await params;
    const templateConfig = getTemplate(template);

    if (!templateConfig) {
        return { title: 'Not Found' };
    }

    const pageName = slug.length > 0 ? slug[0] : 'Home';
    const capitalizedPage = pageName.charAt(0).toUpperCase() + pageName.slice(1);

    return {
        title: `${capitalizedPage} | ${templateConfig.name}`,
        description: templateConfig.description,
    };
}
