
import { Metadata } from 'next';
import {
    MatrimonyHero,
    ProcessTimeline,
    PackagesGrid,
    RequirementsList,
    BookingForm
} from './_components';

export const metadata: Metadata = {
    title: 'Matrimony Services | Duha Masjid',
    description: 'Nikkah and matrimonial services at Duha Masjid. Complete half your Deen in the house of Allah.',
};

export default function MatrimonyPage() {
    return (
        <main className="bg-white min-h-screen">
            <MatrimonyHero />
            <ProcessTimeline />
            <PackagesGrid />
            <RequirementsList />
            <BookingForm />
        </main>
    );
}
