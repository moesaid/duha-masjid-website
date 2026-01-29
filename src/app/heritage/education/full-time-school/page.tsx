// Full-Time School Page - "The Academy"
// Design: Ivy League Academia with Islamic Excellence
'use client';

import { academicLevels, additionalFees, admissionSteps, faculty } from './_data';
import { useSchoolState } from './_hooks';
import {
    SchoolHero,
    AcademicLevelsSection,
    TuitionSection,
    ValueSection,
    AdmissionsSection,
    FacultySection,
    ApplicationModal
} from './_components';
import styles from './_components/_shared.module.scss';

/**
 * Full-Time School Page - K-12 Academy with Hifz Track
 * 
 * Architecture:
 * - _data/      → Academic levels, tuition, fees, admissions, faculty
 * - _hooks/     → useSchoolState (tabs, carousel, modal)
 * - _components/→ Hero, Levels, Tuition, Value, Admissions, Faculty, Modal
 */
export default function FullTimeSchoolPage() {
    const {
        activeTab,
        setActiveTab,
        currentTuition,
        facultyIndex,
        nextFaculty,
        prevFaculty,
        setFacultyIndex,
        isApplicationOpen,
        openApplication,
        closeApplication
    } = useSchoolState();

    return (
        <main className={styles.academyPage}>
            <SchoolHero />

            <AcademicLevelsSection levels={academicLevels} />

            <TuitionSection
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                currentTuition={currentTuition}
                additionalFees={additionalFees}
            />

            <ValueSection />

            <AdmissionsSection
                steps={admissionSteps}
                onApply={openApplication}
            />

            <FacultySection
                faculty={faculty}
                facultyIndex={facultyIndex}
                onPrev={prevFaculty}
                onNext={nextFaculty}
                onSelect={setFacultyIndex}
            />

            <ApplicationModal
                isOpen={isApplicationOpen}
                onClose={closeApplication}
            />
        </main>
    );
}
