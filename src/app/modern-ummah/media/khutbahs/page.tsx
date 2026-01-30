'use client';

import { KhutbahHero } from './_components/KhutbahHero';
import { KhutbahGrid } from './_components/KhutbahGrid';
import { SeriesSection } from './_components/SeriesSection';
import { AudioPlayer } from './_components/AudioPlayer';
import { useKhutbahsLogic } from './_hooks/useKhutbahsLogic';

export default function KhutbahsPage() {
    const {
        searchQuery, setSearchQuery,
        selectedSpeaker, setSelectedSpeaker,
        handlePlay, handleSeriesPlay, handleClosePlayer,
        displayedKhutbahs, isLoading, hasMore, loadMore,
        showPlayer, currentKhutbah, isPlaying, playbackSpeed,
        playlist, showPlaylist, currentTrackIndex,
        audioRef, currentTime, duration,
        setCurrentTime, setDuration, setIsPlaying, setPlaybackSpeed,
        setShowPlaylist, handleNextTrack, handlePrevTrack, handleTrackSelect
    } = useKhutbahsLogic();

    // Latest Khutbah Handler
    const handlePlayLatest = () => {
        // We import latestKhutbah inside the hook file or here? 
        // Logic hook has handlePlay. We can just use that if we import latestKhutbah here or expose a specialized handler.
        // Easier: import latestKhutbah here and pass to handlePlay.
        // Actually, let's just make the KhutbahHero call the raw handlePlay if we pass it the data?
        // KhutbahHero has data internally. Let's import latestKhutbah here to be safe and clean.
    };

    // Better: Helper to import data here? 
    // Or just let KhutbahHero pass the data back?
    // Let's modify KhutbahHero to take an `onPlay` that DOES NOT require args, or we pass the arg from Hero.
    // The Hero knows the `latestKhutbah`. So `handlePlay` expects an arg.
    // So: `onPlay={() => handlePlay(latestKhutbah)}` inside Page.tsx?
    // But Page.tsx doesn't import latestKhutbah.
    // I will import latestKhutbah in Page.tsx.

    return (
        <main className="min-h-screen bg-slate-50 pb-24">
            <KhutbahHero onPlay={() => handlePlay(require('./_data').latestKhutbah)} />

            <SeriesSection
                onSeriesPlay={handleSeriesPlay}
            />

            <KhutbahGrid
                displayedKhutbahs={displayedKhutbahs}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedSpeaker={selectedSpeaker}
                setSelectedSpeaker={setSelectedSpeaker}
                handlePlay={handlePlay}
                isLoading={isLoading}
                hasMore={hasMore}
                loadMore={loadMore}
            />

            <AudioPlayer
                showPlayer={showPlayer}
                currentKhutbah={currentKhutbah}
                isPlaying={isPlaying}
                playbackSpeed={playbackSpeed}
                currentTime={currentTime}
                duration={duration}
                playlist={playlist}
                showPlaylist={showPlaylist}
                currentTrackIndex={currentTrackIndex}
                audioRef={audioRef}
                setCurrentTime={setCurrentTime}
                setDuration={setDuration}
                setIsPlaying={setIsPlaying}
                setPlaybackSpeed={setPlaybackSpeed}
                setShowPlaylist={setShowPlaylist}
                onNext={handleNextTrack}
                onPrev={handlePrevTrack}
                onTrackSelect={handleTrackSelect}
                onClose={handleClosePlayer}
            />
        </main>
    );
}
