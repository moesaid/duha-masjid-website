'use client';

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { allKhutbahs, latestKhutbah, audioTracks, ITEMS_PER_PAGE, Khutbah } from '../_data';

export function useKhutbahsLogic() {
    // Filter state
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSpeaker, setSelectedSpeaker] = useState('All Speakers');

    // Player state
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentKhutbah, setCurrentKhutbah] = useState(latestKhutbah);
    const [showPlayer, setShowPlayer] = useState(false);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);

    // Infinite scroll state
    const [displayedKhutbahs, setDisplayedKhutbahs] = useState(allKhutbahs.slice(0, ITEMS_PER_PAGE));
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const loadMoreRef = useRef<HTMLButtonElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Audio player details
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [playlist, setPlaylist] = useState<typeof latestKhutbah[]>([]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [showPlaylist, setShowPlaylist] = useState(false);

    // Filter logic
    const filteredKhutbahs = useMemo(() => {
        return allKhutbahs.filter(khutbah => {
            const matchesSearch = searchQuery === '' ||
                khutbah.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                khutbah.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
                khutbah.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesSpeaker = selectedSpeaker === 'All Speakers' ||
                khutbah.speaker.includes(selectedSpeaker.replace('Sh. ', 'Sheikh ').replace('Sh. ', ''));

            return matchesSearch && matchesSpeaker;
        });
    }, [searchQuery, selectedSpeaker]);

    // Reset list when filters change
    useEffect(() => {
        setDisplayedKhutbahs(filteredKhutbahs.slice(0, ITEMS_PER_PAGE));
        setHasMore(filteredKhutbahs.length > ITEMS_PER_PAGE);
    }, [filteredKhutbahs]);

    // Playback control
    useEffect(() => {
        if (audioRef.current && showPlayer) {
            if (isPlaying) {
                audioRef.current.play().catch(console.error);
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentKhutbah.audioUrl, showPlayer]);

    // Load More
    const loadMore = useCallback(() => {
        if (isLoading || !hasMore) return;
        setIsLoading(true);

        // Simulating network delay
        setTimeout(() => {
            const currentLength = displayedKhutbahs.length;
            const nextItems = filteredKhutbahs.slice(currentLength, currentLength + ITEMS_PER_PAGE);

            if (nextItems.length === 0) {
                setHasMore(false);
            } else {
                setDisplayedKhutbahs(prev => [...prev, ...nextItems]);
                if (currentLength + ITEMS_PER_PAGE >= filteredKhutbahs.length) {
                    setHasMore(false);
                }
            }
            setIsLoading(false);
        }, 600);
    }, [displayedKhutbahs.length, isLoading, hasMore, filteredKhutbahs]);

    // Play Handlers
    const handlePlay = (khutbah: typeof latestKhutbah) => {
        setPlaylist([khutbah]);
        setCurrentTrackIndex(0);
        setCurrentKhutbah(khutbah);
        setIsPlaying(true);
        setShowPlayer(true);
        setShowPlaylist(false);
    };

    const handleSeriesPlay = (seriesId: number) => {
        const seriesKhutbahs = allKhutbahs.filter(k => k.seriesId === seriesId);
        if (seriesKhutbahs.length > 0) {
            // Sort by ID or Date if needed, assuming data order is correct for now
            setPlaylist(seriesKhutbahs);
            setCurrentTrackIndex(0);
            setCurrentKhutbah(seriesKhutbahs[0]);
            setIsPlaying(true);
            setShowPlayer(true);
            setShowPlaylist(true);
        }
    };

    const handleNextTrack = () => {
        if (currentTrackIndex < playlist.length - 1) {
            const nextIdx = currentTrackIndex + 1;
            setCurrentTrackIndex(nextIdx);
            setCurrentKhutbah(playlist[nextIdx]);
            setIsPlaying(true);
        }
    };

    const handlePrevTrack = () => {
        if (currentTrackIndex > 0) {
            const prevIdx = currentTrackIndex - 1;
            setCurrentTrackIndex(prevIdx);
            setCurrentKhutbah(playlist[prevIdx]);
            setIsPlaying(true);
        }
    };

    const handleTrackSelect = (index: number) => {
        if (index >= 0 && index < playlist.length) {
            setCurrentTrackIndex(index);
            setCurrentKhutbah(playlist[index]);
            setIsPlaying(true);
        }
    };

    const handleClosePlayer = () => {
        setShowPlayer(false);
        setIsPlaying(false);
        if (audioRef.current) audioRef.current.pause();
    };

    return {
        searchQuery, setSearchQuery,
        selectedSpeaker, setSelectedSpeaker,
        isPlaying, setIsPlaying,
        currentKhutbah, setCurrentKhutbah,
        showPlayer, setShowPlayer,
        playbackSpeed, setPlaybackSpeed,
        displayedKhutbahs,
        isLoading,
        hasMore,
        loadMoreRef,
        loadMore,
        audioRef,
        currentTime, setCurrentTime,
        duration, setDuration,
        playlist, showPlaylist, setShowPlaylist,
        currentTrackIndex, setCurrentTrackIndex,
        handlePlay,
        handleSeriesPlay,
        handleNextTrack,
        handlePrevTrack,
        handleTrackSelect,
        handleClosePlayer
    };
}
