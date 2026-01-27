import { Header, Footer } from './_components';
import templateStyles from './_styles/template.module.css';

export default function InstitutionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={templateStyles.template}>
            <Header templateId="institution" />
            <main>{children}</main>
            <Footer templateId="institution" />
        </div>
    );
}
