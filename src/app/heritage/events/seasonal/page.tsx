// Ramadan & Eid Page - HERITAGE ALIGNED
// Design: Night Sky Blue + Lantern Gold + Deep Purple (Luminous)
// Vibe: Atmospheric, Luminous, Joyful
'use client';

import { useSeasonalState } from './_hooks';
import {
    HeroSection,
    TaraweehSection,
    IftarSection,
    ZakatSection,
    ItikafSection,
    EidSection,
    SponsorModal
} from './_components';
import sharedStyles from './_components/_shared.module.scss';

/**
 * Ramadan & Eid Page - Seasonal Events
 * 
 * Architecture:
 * - _data/      → Taraweeh info, calendar, iftar menu, eid prayers, festivities
 * - _hooks/     → useSeasonalState (countdown, zakat calc, sponsor form)
 * - _components/→ Hero, Taraweeh, Iftar, Zakat, Itikaf, Eid, SponsorModal
 */
export default function RamadanPage() {
    const state = useSeasonalState();

    return (
        <main className={sharedStyles.ramadanPage}>
            <HeroSection countdown={state.countdown} />
            <TaraweehSection />
            <IftarSection onDaySelect={state.setSelectedDay} />
            <ZakatSection
                fitrCount={state.fitrCount}
                setFitrCount={state.setFitrCount}
                fidyaCount={state.fidyaCount}
                setFidyaCount={state.setFidyaCount}
                zakatTotal={state.zakatTotal}
            />
            <ItikafSection />
            <EidSection />
            <SponsorModal
                selectedDay={state.selectedDay}
                sponsorForm={state.sponsorForm}
                onClose={() => state.setSelectedDay(null)}
                setSponsorName={state.setSponsorName}
                setSponsorEmail={state.setSponsorEmail}
                setSponsorPhone={state.setSponsorPhone}
                setContributionAmount={state.setContributionAmount}
                setAnonymous={state.setAnonymous}
                onSubmit={state.handleSponsorSubmit}
            />
        </main>
    );
}
