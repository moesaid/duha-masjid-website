// Khutbah Archive Page - "The Pulpit" - HERITAGE ALIGNED
// Design: Deep Charcoal + Metallic Gold + Off-White
// Vibe: Intellectual, Resonant, Accessible
'use client';

import { latestKhutbah } from './_data';
import { useKhutbahsState } from './_hooks';
import {
    HeaderSection,
    FeaturedBanner,
    FilterSection,
    SeriesSection,
    ArchiveSection,
    SubscribeSection,
    AudioPlayer
} from './_components';
import styles from './_components/_shared.module.scss';

/**
 * Khutbahs Page - Audio Archive
 * 
 * Architecture:
 * - _data/      → Khutbahs, series, audio tracks, filter options
 * - _hooks/     → useKhutbahsState (filters, player, infinite scroll)
 * - _components/→ Header, Featured, Filter, Series, Archive, Subscribe, AudioPlayer
 */
export default function KhutbahsPage() {
    const state = useKhutbahsState();

    return (
        <div className={styles.khutbahsPage}>
            <HeaderSection />
            <FeaturedBanner onPlay={() => state.handlePlay(latestKhutbah)} />
            <FilterSection
                searchQuery={state.searchQuery}
                setSearchQuery={state.setSearchQuery}
                selectedSpeaker={state.selectedSpeaker}
                setSelectedSpeaker={state.setSelectedSpeaker}
                selectedYear={state.selectedYear}
                setSelectedYear={state.setSelectedYear}
                selectedLanguage={state.selectedLanguage}
                setSelectedLanguage={state.setSelectedLanguage}
            />
            <SeriesSection onSeriesPlay={state.handleSeriesPlay} />
            <ArchiveSection
                displayedKhutbahs={state.displayedKhutbahs}
                hasMore={state.hasMore}
                isLoading={state.isLoading}
                loadMoreRef={state.loadMoreRef}
                loadMore={state.loadMore}
                onPlay={state.handlePlay}
            />
            <SubscribeSection />
            <AudioPlayer
                showPlayer={state.showPlayer}
                currentKhutbah={state.currentKhutbah}
                isPlaying={state.isPlaying}
                playbackSpeed={state.playbackSpeed}
                currentTime={state.currentTime}
                duration={state.duration}
                currentTrackIndex={state.currentTrackIndex}
                audioRef={state.audioRef}
                setCurrentTime={state.setCurrentTime}
                setDuration={state.setDuration}
                setIsPlaying={state.setIsPlaying}
                setPlaybackSpeed={state.setPlaybackSpeed}
                setCurrentTrackIndex={state.setCurrentTrackIndex}
                setCurrentKhutbah={state.setCurrentKhutbah}
                onClose={state.handleClosePlayer}
            />
        </div>
    );
}
