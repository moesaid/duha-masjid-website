'use client';

import { useState, useCallback } from 'react';
import { programTracks, upcomingEvents, ProgramTrack } from '../_data';

export interface UseYouthStateReturn {
    // Track selection
    activeTrack: string;
    setActiveTrack: (trackId: string) => void;
    currentTrack: ProgramTrack;

    // Event carousel
    eventIndex: number;
    nextEvent: () => void;
    prevEvent: () => void;
    setEventIndex: (index: number) => void;
}

export function useYouthState(): UseYouthStateReturn {
    const [activeTrack, setActiveTrack] = useState('believers');
    const [eventIndex, setEventIndex] = useState(0);

    const currentTrack = programTracks.find(t => t.id === activeTrack) || programTracks[1];

    const nextEvent = useCallback(() => {
        setEventIndex((prev) => (prev + 1) % upcomingEvents.length);
    }, []);

    const prevEvent = useCallback(() => {
        setEventIndex((prev) => (prev - 1 + upcomingEvents.length) % upcomingEvents.length);
    }, []);

    return {
        activeTrack,
        setActiveTrack,
        currentTrack,
        eventIndex,
        nextEvent,
        prevEvent,
        setEventIndex
    };
}
