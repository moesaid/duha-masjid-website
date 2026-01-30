import {
    AcademyHero,
    ProgramJourney,
    InstructorSanad,
    RegistrationCta
} from './_components';

export default function QuranAcademyPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <AcademyHero />
            <ProgramJourney />
            <InstructorSanad />
            <RegistrationCta />
        </main>
    );
}
