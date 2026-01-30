'use client';

import { OpenDoorHero } from './_components/OpenDoorHero';
import { ProgramPillars } from './_components/ProgramPillars';
import { WeeklyRhythm } from './_components/WeeklyRhythm';
import { MentorsRow } from './_components/MentorsRow';
import { ParentsNote } from './_components/ParentsNote';
import { YouthContact } from './_components/YouthContact';
import { InstagramFeed } from './_components/InstagramFeed';

/**
 * Youth Page - "Neo-Islamic" Minimalist Design
 * Suhbah & Serenity aesthetic for youth
 * Clean, sophisticated, whitespace-driven
 */
export default function YouthPage() {
    return (
        <main className="min-h-screen bg-white w-full">
            <OpenDoorHero />
            <ProgramPillars />
            <WeeklyRhythm />
            <MentorsRow />
            <ParentsNote />
            <YouthContact />
            <InstagramFeed />
        </main>
    );
}
