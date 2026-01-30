import {
    WeekendHero,
    GrowthLevels,
    WeeklySchedule,
    ParentVoices,
    EnrollmentCTA
} from './_components';

export default function WeekendSchoolPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <WeekendHero />
            <GrowthLevels />
            <WeeklySchedule />
            <ParentVoices />
            <EnrollmentCTA />
        </main>
    );
}
