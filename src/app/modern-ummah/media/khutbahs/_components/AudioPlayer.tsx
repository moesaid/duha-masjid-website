'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, RotateCcw, X, Volume2, Maximize2 } from 'lucide-react';
import { latestKhutbah, audioTracks } from '../_data';

interface AudioPlayerProps {
    showPlayer: boolean;
    currentKhutbah: typeof latestKhutbah;
    isPlaying: boolean;
    playbackSpeed: number;
    currentTime: number;
    duration: number;
    playlist: typeof latestKhutbah[];
    showPlaylist: boolean;
    currentTrackIndex: number;
    audioRef: React.RefObject<HTMLAudioElement | null>;
    setCurrentTime: (time: number) => void;
    setDuration: (duration: number) => void;
    setIsPlaying: (playing: boolean) => void;
    setPlaybackSpeed: (speed: number) => void;
    setShowPlaylist: (show: boolean) => void;
    onNext: () => void;
    onPrev: () => void;
    onTrackSelect: (index: number) => void;
    onClose: () => void;
}

export function AudioPlayer({
    showPlayer,
    currentKhutbah,
    isPlaying,
    playbackSpeed,
    currentTime,
    duration,
    playlist,
    showPlaylist,
    currentTrackIndex,
    audioRef,
    setCurrentTime,
    setDuration,
    setIsPlaying,
    setPlaybackSpeed,
    setShowPlaylist,
    onNext,
    onPrev,
    onTrackSelect,
    onClose
}: AudioPlayerProps) {

    // Derived state for formatting
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (audioRef.current && duration) {
            const rect = e.currentTarget.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            audioRef.current.currentTime = pos * duration;
        }
    };

    const changeSpeed = () => {
        const speeds = [1, 1.25, 1.5, 2];
        const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
        setPlaybackSpeed(speeds[nextIdx]);
        if (audioRef.current) audioRef.current.playbackRate = speeds[nextIdx];
    };

    return (
        <AnimatePresence>
            {showPlayer && (
                <>
                    {/* Playlist Overlay */}
                    <AnimatePresence>
                        {showPlaylist && playlist.length > 1 && (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                className="fixed bottom-24 right-4 md:right-8 z-40 w-full max-w-sm bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden mb-safe"
                            >
                                <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                                    <h5 className="text-white font-bold text-sm">Up Next</h5>
                                    <button onClick={() => setShowPlaylist(false)} className="text-slate-400 hover:text-white">
                                        <X size={16} />
                                    </button>
                                </div>
                                <div className="max-h-64 overflow-y-auto p-2 space-y-1 custom-scrollbar">
                                    {playlist.map((track, idx) => (
                                        <div
                                            key={track.id}
                                            onClick={() => onTrackSelect(idx)}
                                            className={`flex items-center gap-3 p-3 rounded-xl text-sm transition-colors cursor-pointer ${idx === currentTrackIndex
                                                    ? 'bg-emerald-900/30 border border-emerald-900/50'
                                                    : 'hover:bg-slate-800 border border-transparent'
                                                }`}
                                        >
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${idx === currentTrackIndex ? 'bg-emerald-500 text-emerald-950' : 'bg-slate-800 text-slate-400'
                                                }`}>
                                                {idx === currentTrackIndex ? <Volume2 size={12} /> : idx + 1}
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className={`font-medium truncate ${idx === currentTrackIndex ? 'text-emerald-400' : 'text-slate-200'}`}>
                                                    {track.title}
                                                </p>
                                                <p className="text-slate-500 text-xs truncate">{track.speaker}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-800 shadow-2xl safe-area-bottom"
                    >
                        {/* Audio Element (Hidden) */}
                        <audio
                            ref={audioRef}
                            src={currentKhutbah.audioUrl}
                            onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
                            onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
                            onEnded={onNext} // Should ideally verify if has next, but onNext in hook handles it
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                        />

                        {/* Progress Bar (Top Edge) */}
                        <div
                            className="absolute top-0 left-0 right-0 h-1 bg-slate-800 cursor-pointer group"
                            onClick={handleProgressClick}
                        >
                            <div
                                className="h-full bg-emerald-500 relative transition-all duration-100"
                                style={{ width: `${(currentTime / duration) * 100}%` }}
                            >
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 shadow-lg transform scale-0 group-hover:scale-100 transition-all" />
                            </div>
                        </div>

                        <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 flex items-center justify-between gap-4 md:gap-8">
                            {/* Info Section */}
                            <div className="flex items-center gap-4 min-w-0 flex-1 md:flex-none">
                                <div
                                    className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700 cursor-pointer hover:bg-slate-700 transition-colors relative"
                                    onClick={() => playlist.length > 1 && setShowPlaylist(!showPlaylist)}
                                >
                                    <Volume2 className="text-emerald-500" size={20} />
                                    {playlist.length > 1 && (
                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-slate-900">
                                            {playlist.length}
                                        </div>
                                    )}
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-white font-bold truncate">{currentKhutbah.title}</h4>
                                    <p className="text-slate-400 text-sm truncate">{currentKhutbah.speaker}</p>
                                </div>
                            </div>

                            {/* Controls Section (Center) */}
                            <div className="flex items-center gap-2 md:gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 invisible md:visible">
                                <button
                                    className="text-slate-400 hover:text-white transition-colors p-2 disabled:opacity-30 disabled:hover:text-slate-400"
                                    onClick={onPrev}
                                    disabled={currentTrackIndex === 0}
                                >
                                    <SkipBack size={20} />
                                </button>

                                <button className="text-slate-400 hover:text-white transition-colors p-2" onClick={() => { if (audioRef.current) audioRef.current.currentTime -= 15; }}>
                                    <RotateCcw size={20} />
                                </button>

                                <button
                                    className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-105 transition-transform"
                                    onClick={() => isPlaying ? audioRef.current?.pause() : audioRef.current?.play()}
                                >
                                    {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
                                </button>

                                <button
                                    className="text-slate-400 hover:text-white transition-colors p-2 disabled:opacity-30 disabled:hover:text-slate-400"
                                    onClick={onNext}
                                    disabled={currentTrackIndex === playlist.length - 1}
                                >
                                    <SkipForward size={20} />
                                </button>

                                <button className="text-slate-400 hover:text-white transition-colors p-2 font-mono text-sm font-bold w-12" onClick={changeSpeed}>
                                    {playbackSpeed}x
                                </button>
                            </div>

                            {/* Mobile Controls (simplified) - Keep same but maybe add Next btn? */}
                            <div className="flex items-center gap-3 md:hidden">
                                <button
                                    className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center"
                                    onClick={() => isPlaying ? audioRef.current?.pause() : audioRef.current?.play()}
                                >
                                    {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-1" />}
                                </button>
                                {playlist.length > 1 && (
                                    <button
                                        className="p-2 text-slate-400"
                                        onClick={() => setShowPlaylist(!showPlaylist)}
                                    >
                                        <Maximize2 size={18} />
                                    </button>
                                )}
                            </div>

                            {/* Time & Close */}
                            <div className="flex items-center gap-4 md:gap-6 hidden md:flex">
                                <div className="font-mono text-sm text-slate-400">
                                    {formatTime(currentTime)} / {formatTime(duration)}
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 text-slate-500 hover:text-red-400 transition-colors bg-slate-800/50 rounded-lg hover:bg-slate-800"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
