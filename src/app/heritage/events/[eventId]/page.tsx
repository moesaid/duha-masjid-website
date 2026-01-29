// Single Event Detail Page - HERITAGE ALIGNED
// Design: The Royal Invitation - Formal, Ceremonial, Elegant
// Palette: Deep Maroon + Midnight Blue + Gold Foil
'use client';

import { eventData } from './_data';
import { useReservation, useFaq, useVideoPlayer } from './_hooks';
import {
    EventHero,
    VideoSection,
    EventDetailsSection,
    PricingSection,
    VenueSection,
    FaqSection,
    ReservationModal
} from './_components';
import styles from './EventPage.module.scss';

/**
 * Single Event Page - Royal Invitation Design
 * 
 * Architecture:
 * - _data/      → Event types & static data
 * - _hooks/     → useReservation, useFaq, useVideoPlayer
 * - _components/→ 7 presentational sections + modal
 */
export default function SingleEventPage() {
    const reservation = useReservation();
    const faqState = useFaq();
    const videoPlayer = useVideoPlayer();

    return (
        <main className={styles.eventPage}>
            <EventHero
                event={eventData}
                onReserve={reservation.openModal}
            />

            <VideoSection
                videoUrl={eventData.promoVideoUrl}
                posterUrl={eventData.promoVideoPoster}
                player={videoPlayer}
            />

            <EventDetailsSection
                description={eventData.description}
                schedule={eventData.schedule}
                speakers={eventData.speakers}
            />

            <PricingSection
                pricing={eventData.pricing}
                onReserve={reservation.openModal}
            />

            <VenueSection
                venue={eventData.venue}
                address={eventData.address}
                logistics={eventData.logistics}
            />

            <FaqSection
                faqs={eventData.faqs}
                faqState={faqState}
            />

            <ReservationModal
                event={eventData}
                reservation={reservation}
            />
        </main>
    );
}
