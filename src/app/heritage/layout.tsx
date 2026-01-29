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
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
