'use client';

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { allKhutbahs, latestKhutbah, audioTracks, ITEMS_PER_PAGE, Khutbah } from '../_data';

export interface UseKhutbahsStateReturn {
    // Filters
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    selectedSpeaker: string;
    setSelectedSpeaker: (speaker: string) => void;
    selectedYear: string;
    setSelectedYear: (year: string) => void;
    selectedLanguage: string;
    setSelectedLanguage: (lang: string) => void;

    // Player state
    isPlaying: boolean;
    setIsPlaying: (playing: boolean) => void;
    currentKhutbah: typeof latestKhutbah;
    setCurrentKhutbah: (khutbah: typeof latestKhutbah) => void;
    showPlayer: boolean;
    setShowPlayer: (show: boolean) => void;
    playbackSpeed: number;
    setPlaybackSpeed: (speed: number) => void;

    // Audio state
    currentTime: number;
    setCurrentTime: (time: number) => void;
    duration: number;
    setDuration: (duration: number) => void;
    volume: number;
    setVolume: (volume: number) => void;
    isMuted: boolean;
    setIsMuted: (muted: boolean) => void;
    showPlaylist: boolean;
    setShowPlaylist: (show: boolean) => void;
    currentTrackIndex: number;
    setCurrentTrackIndex: (index: number) => void;

    // Infinite scroll
    displayedKhutbahs: Khutbah[];
    isLoading: boolean;
    hasMore: boolean;
    loadMoreRef: React.RefObject<HTMLButtonElement | null>;
    loadMore: () => void;

    // Refs
    audioRef: React.RefObject<HTMLAudioElement | null>;

    // Handlers
    handlePlay: (khutbah: typeof latestKhutbah) => void;
    handleSeriesPlay: (seriesId: number) => void;
    handleClosePlayer: () => void;
}

export function useKhutbahsState(): UseKhutbahsStateReturn {
    // Filter state
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSpeaker, setSelectedSpeaker] = useState('All Speakers');
    const [selectedYear, setSelectedYear] = useState('All Years');
    const [selectedLanguage, setSelectedLanguage] = useState('All Languages');

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

    // Audio player state
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.8);
    const [isMuted, setIsMuted] = useState(false);
    const [showPlaylist, setShowPlaylist] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

    // Filter khutbahs based on search and filters
    const filteredKhutbahs = useMemo(() => {
        return allKhutbahs.filter(khutbah => {
            const matchesSearch = searchQuery === '' ||
                khutbah.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                khutbah.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
                khutbah.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesSpeaker = selectedSpeaker === 'All Speakers' ||
                khutbah.speaker.includes(selectedSpeaker.replace('Sh. ', 'Sheikh ').replace('Sh. ', ''));

            const matchesYear = selectedYear === 'All Years' ||
                khutbah.date.includes(selectedYear);

            return matchesSearch && matchesSpeaker && matchesYear;
        });
    }, [searchQuery, selectedSpeaker, selectedYear]);

    // Reset displayed khutbahs when filters change
    useEffect(() => {
        setDisplayedKhutbahs(filteredKhutbahs.slice(0, ITEMS_PER_PAGE));
        setHasMore(filteredKhutbahs.length > ITEMS_PER_PAGE);
    }, [filteredKhutbahs]);

    // Load more function
    const loadMore = useCallback(() => {
        if (isLoading || !hasMore) return;
        setIsLoading(true);
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
        }, 800);
    }, [displayedKhutbahs.length, isLoading, hasMore, filteredKhutbahs]);

    // Intersection Observer for infinite scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !isLoading) {
                    loadMore();
                }
            },
            { threshold: 0.1 }
        );
        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }
        return () => observer.disconnect();
    }, [loadMore, hasMore, isLoading]);

    // Audio playback control
    useEffect(() => {
        if (audioRef.current && showPlayer) {
            if (isPlaying) {
                audioRef.current.play().catch(console.error);
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentKhutbah.audioUrl, showPlayer]);

    // Handlers
    const handlePlay = (khutbah: typeof latestKhutbah) => {
        setCurrentKhutbah(khutbah);
        setIsPlaying(true);
        setShowPlayer(true);
    };

    const handleSeriesPlay = (seriesId: number) => {
        const seriesKhutbahs = allKhutbahs.filter(k => k.seriesId === seriesId);
        if (seriesKhutbahs.length > 0) {
            const firstKhutbah = seriesKhutbahs[0];
            setCurrentKhutbah({
                ...latestKhutbah,
                title: firstKhutbah.title,
                speaker: firstKhutbah.speaker,
                audioUrl: firstKhutbah.audioUrl
            });
            setCurrentTrackIndex(0);
            setIsPlaying(true);
            setShowPlayer(true);
            setShowPlaylist(true);
        }
    };

    const handleClosePlayer = () => {
        setShowPlayer(false);
        audioRef.current?.pause();
        setIsPlaying(false);
    };

    return {
        searchQuery, setSearchQuery,
        selectedSpeaker, setSelectedSpeaker,
        selectedYear, setSelectedYear,
        selectedLanguage, setSelectedLanguage,
        isPlaying, setIsPlaying,
        currentKhutbah, setCurrentKhutbah,
        showPlayer, setShowPlayer,
        playbackSpeed, setPlaybackSpeed,
        currentTime, setCurrentTime,
        duration, setDuration,
        volume, setVolume,
        isMuted, setIsMuted,
        showPlaylist, setShowPlaylist,
        currentTrackIndex, setCurrentTrackIndex,
        displayedKhutbahs,
        isLoading,
        hasMore,
        loadMoreRef,
        loadMore,
        audioRef,
        handlePlay,
        handleSeriesPlay,
        handleClosePlayer
    };
}
