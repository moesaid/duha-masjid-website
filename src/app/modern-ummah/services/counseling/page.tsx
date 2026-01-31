import {
    CounselingHero,
    ServicesGrid,
    CounselorProfiles,
    BookingFlow
} from './_components';

export default function CounselingPage() {
    return (
        <main>
            <CounselingHero />
            <ServicesGrid />
            <CounselorProfiles />
            <BookingFlow />
        </main>
    );
}
