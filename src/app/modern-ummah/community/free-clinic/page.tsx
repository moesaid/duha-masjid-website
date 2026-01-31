import { ClinicHero } from './_components/ClinicHero';
import { ClinicServices } from './_components/ClinicServices';
import { PatientInfo } from './_components/PatientInfo';

export default function FreeClinicPage() {
    return (
        <main className="min-h-screen bg-white">
            <ClinicHero />
            <ClinicServices />
            <PatientInfo />
        </main>
    );
}
