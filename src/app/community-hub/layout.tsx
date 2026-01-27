import { Header, Footer } from './_components';
import templateStyles from './_styles/template.module.css';

export default function CommunityHubLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={templateStyles.template}>
            <Header templateId="community-hub" />
            <main>{children}</main>
            <Footer templateId="community-hub" />
        </div>
    );
}
