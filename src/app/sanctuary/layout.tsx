import { Header, Footer } from './_components';
import templateStyles from './_styles/template.module.css';

export default function SanctuaryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={templateStyles.template}>
            <Header templateId="sanctuary" />
            <main>{children}</main>
            <Footer templateId="sanctuary" />
        </div>
    );
}
