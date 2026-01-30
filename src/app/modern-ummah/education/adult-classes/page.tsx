'use client';

import {
    ClassesHero,
    KhatiraGrid,
    CourseCatalog,
    SistersSpotlight,
    ArchiveGallery,
    ProgramRegistration
} from './_components';

export default function AdultClassesPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <ClassesHero />
            <KhatiraGrid />
            <CourseCatalog />
            <SistersSpotlight />
            <ArchiveGallery />
            <ProgramRegistration />
        </main>
    );
}
