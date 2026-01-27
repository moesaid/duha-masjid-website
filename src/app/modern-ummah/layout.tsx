import { Header, Footer, StickyPrayerPill } from './_components';
import templateStyles from './_styles/template.module.css';

export default function ModernUmmahLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={templateStyles.template}>
            <Header templateId="modern-ummah" />
            <main>{children}</main>
            <Footer templateId="modern-ummah" />
            <StickyPrayerPill templateId="modern-ummah" />
        </div>
    );
}
