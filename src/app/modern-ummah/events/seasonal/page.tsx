'use client';

import {
    RamadanHero,
    TaraweehCard,
    IftarCalendar,
    ZakatCalculator,
    ItikafInfo,
    EidSection,
    SponsorModal
} from './_components';
import { useRamadanState } from './_hooks';

export default function SeasonalPage() {
    const {
        countdown,
        selectedDay,
        setSelectedDay,
        fitrCount,
        setFitrCount,
        fidyaCount,
        setFidyaCount,
        zakatTotal,
        sponsorForm,
        setSponsorName,
        setSponsorEmail,
        setSponsorPhone,
        setContributionAmount,
        setAnonymous,
        handleSponsorSubmit
    } = useRamadanState();

    return (
        <main className="bg-slate-50 min-h-screen">
            <RamadanHero countdown={countdown} />
            <TaraweehCard />
            <ItikafInfo />
            <IftarCalendar onDaySelect={setSelectedDay} />
            <ZakatCalculator
                fitrCount={fitrCount}
                setFitrCount={setFitrCount}
                fidyaCount={fidyaCount}
                setFidyaCount={setFidyaCount}
                zakatTotal={zakatTotal}
            />
            <EidSection />

            <SponsorModal
                selectedDay={selectedDay}
                sponsorForm={sponsorForm}
                onClose={() => setSelectedDay(null)}
                setSponsorName={setSponsorName}
                setSponsorEmail={setSponsorEmail}
                setSponsorPhone={setSponsorPhone}
                setContributionAmount={setContributionAmount}
                setAnonymous={setAnonymous}
                onSubmit={handleSponsorSubmit}
            />
        </main>
    );
}
