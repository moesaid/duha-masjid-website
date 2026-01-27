import {
    Header,
    Footer,
} from './_components';
import templateStyles from './_styles/template.module.scss';

export default function HeritageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={templateStyles.template}>
            <Header templateId="heritage" />
            <main>{children}</main>
            <Footer templateId="heritage" />
        </div>
    );
}
