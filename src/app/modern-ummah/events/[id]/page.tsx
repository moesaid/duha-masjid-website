'use client';

import { eventData } from './_data';
import { useReservation } from './_hooks/useReservation';
import { EventHero } from './_components/EventHero';
import { EventDetails } from './_components/EventDetails';
import { ReservationModal } from './_components/ReservationModal';

export default function SingleEventPage() {
    // Hook handles state logic
    const reservation = useReservation();

    return (
        <main className="bg-white min-h-screen">
            <EventHero
                event={eventData}
                onReserve={reservation.openModal}
            />

            <EventDetails
                event={eventData}
            />

            <ReservationModal
                event={eventData}
                reservation={reservation}
            />
        </main>
    );
}
