import {
    AidHero,
    ZakatCalculator,
    AssistanceTabs,
    PrivacyNotice
} from './_components';

export default function FinancialAidPage() {
    return (
        <main>
            <AidHero />
            <ZakatCalculator />
            <AssistanceTabs />
            <PrivacyNotice />
        </main>
    );
}
