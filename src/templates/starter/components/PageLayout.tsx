import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import templateStyles from '../styles/template.module.css';

interface PageLayoutProps {
    children: ReactNode;
    templateId: string;
}

export function PageLayout({ children, templateId }: PageLayoutProps) {
    return (
        <div className={templateStyles.template}>
            <div className={templateStyles.container}>
                <Header templateId={templateId} />
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    );
}
