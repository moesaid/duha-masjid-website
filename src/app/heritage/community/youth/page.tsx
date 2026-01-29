// Youth Group Page - "The Next Generation"
// Design: Noble, Adventurous, Grounded - "Scouts meets Classical Seminarian"
'use client';

import { pillars, programTracks, weeklySchedule, upcomingEvents } from './_data';
import { useYouthState } from './_hooks';
import {
    HeroSection,
    PillarsSection,
    TracksSection,
    ScheduleSection,
    EventsSection,
    ParentsSection
} from './_components';
import styles from './YouthPage.module.scss';

/**
 * Youth Page - "The Next Generation"
 * 
 * Architecture:
 * - _data/      → Pillars, tracks, schedule, events
 * - _hooks/     → useYouthState (track selection, event carousel)
 * - _components/→ Hero, Pillars, Tracks, Schedule, Events, Parents
 */
export default function YouthPage() {
    const {
        activeTrack,
        setActiveTrack,
        currentTrack,
        eventIndex,
        nextEvent,
        prevEvent,
        setEventIndex
    } = useYouthState();

    return (
        <main className={styles.youthPage}>
            <HeroSection />
            <PillarsSection pillars={pillars} />
            <TracksSection
                tracks={programTracks}
                activeTrack={activeTrack}
                currentTrack={currentTrack}
                onSelectTrack={setActiveTrack}
            />
            <ScheduleSection schedule={weeklySchedule} />
            <EventsSection
                events={upcomingEvents}
                eventIndex={eventIndex}
                onPrev={prevEvent}
                onNext={nextEvent}
                onSelect={setEventIndex}
            />
            <ParentsSection />
        </main>
    );
}
