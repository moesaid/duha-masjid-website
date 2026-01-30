'use client';

import {
    WeeklyHero,
    WeeklyRhythm,
    ProgramCardsGrid,
    HalaqaTimeline,
    VolunteerCta,
    UpdatesBanner
} from './_components';
export default function WeeklyPage() {
    return (
        <main className="min-h-screen bg-white">
            <WeeklyHero />
            <WeeklyRhythm />
            <ProgramCardsGrid />
            <HalaqaTimeline />
            <VolunteerCta />
            <UpdatesBanner />
        </main>
    );
}
