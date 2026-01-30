import {
    AcademyHero,
    AcademicPathways,
    TuitionGuide,
    DistinctionSection,
    AdmissionsProcess,
    FacultySpotlight,
} from './_components';

export default function FullTimeSchoolPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <AcademyHero />

            <div className="bg-slate-50 pb-12">
                <AcademicPathways />
            </div>

            <DistinctionSection />

            <div className="bg-white">
                <TuitionGuide />
            </div>

            <div className="bg-slate-50">
                <FacultySpotlight />
            </div>

            <div className="bg-white">
                <AdmissionsProcess />
            </div>
        </main>
    );
}
