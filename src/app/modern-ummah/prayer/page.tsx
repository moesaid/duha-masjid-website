'use client';

import { DAILY_PRAYERS, JUMMAH_TIMES } from './_data';
import { usePrayerTimes } from './_hooks';
import {
    PageHeader,
    PrayerGrid,
    IqamahTable,
    JumuahBanner,
    FooterActions
} from './_components';

/**
 * Prayer Times Page
 * 
 * Thin orchestrator following the page-architecture workflow pattern.
 * - Data: _data/prayer-times.ts
 * - State: _hooks/usePrayerTimes.ts
 * - UI: _components/
 */
export default function PrayerPage() {
    const { activePrayer, currentTime, isFriday, dateString } = usePrayerTimes();

    return (
        <div className="min-h-screen bg-slate-50 pt-20">
            <PageHeader dateString={dateString} currentTime={currentTime} />
            <PrayerGrid prayers={DAILY_PRAYERS} activePrayer={activePrayer} />
            <IqamahTable prayers={DAILY_PRAYERS} activePrayer={activePrayer} />
            <JumuahBanner jummahTimes={JUMMAH_TIMES} isFriday={isFriday} />
            {/* <FooterActions /> */}
        </div>
    );
}
