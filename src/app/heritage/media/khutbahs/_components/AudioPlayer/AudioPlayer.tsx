import { Play, Pause, RotateCcw, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { audioTracks, latestKhutbah } from '../../_data';
import styles from '../_shared.module.scss';

interface AudioPlayerProps {
    showPlayer: boolean;
    currentKhutbah: typeof latestKhutbah;
    isPlaying: boolean;
    playbackSpeed: number;
    currentTime: number;
    duration: number;
    currentTrackIndex: number;
    audioRef: React.RefObject<HTMLAudioElement | null>;
    setCurrentTime: (time: number) => void;
    setDuration: (duration: number) => void;
    setIsPlaying: (playing: boolean) => void;
    setPlaybackSpeed: (speed: number) => void;
    setCurrentTrackIndex: (index: number) => void;
    setCurrentKhutbah: (khutbah: typeof latestKhutbah) => void;
    onClose: () => void;
}

export function AudioPlayer({
    showPlayer,
    currentKhutbah,
    isPlaying,
    playbackSpeed,
    currentTime,
    duration,
    currentTrackIndex,
    audioRef,
    setCurrentTime,
    setDuration,
    setIsPlaying,
    setPlaybackSpeed,
    setCurrentTrackIndex,
    setCurrentKhutbah,
    onClose
}: AudioPlayerProps) {
    if (!showPlayer) return null;

    const handlePrevTrack = () => {
        if (currentTrackIndex > 0) {
            const prevTrack = audioTracks[currentTrackIndex - 1];
            setCurrentTrackIndex(currentTrackIndex - 1);
            setCurrentKhutbah({ ...currentKhutbah, title: prevTrack.title, speaker: prevTrack.speaker, audioUrl: prevTrack.src });
        }
    };

    const handleNextTrack = () => {
        if (currentTrackIndex < audioTracks.length - 1) {
            const nextTrack = audioTracks[currentTrackIndex + 1];
            setCurrentTrackIndex(currentTrackIndex + 1);
            setCurrentKhutbah({ ...currentKhutbah, title: nextTrack.title, speaker: nextTrack.speaker, audioUrl: nextTrack.src });
        }
    };

    const handleRewind = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 15);
        }
    };

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
        }
    };

    const handleSpeedChange = () => {
        const speeds = [1, 1.25, 1.5, 2];
        const currentSpeedIndex = speeds.indexOf(playbackSpeed);
        const newSpeed = speeds[(currentSpeedIndex + 1) % speeds.length];
        setPlaybackSpeed(newSpeed);
        if (audioRef.current) {
            audioRef.current.playbackRate = newSpeed;
        }
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (audioRef.current && duration) {
            const rect = e.currentTarget.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            audioRef.current.currentTime = pos * duration;
        }
    };

    return (
        <div className={styles.audioPlayerWrapper}>
            <audio
                ref={audioRef}
                src={currentKhutbah.audioUrl}
                onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
                onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
                onEnded={() => {
                    if (currentTrackIndex < audioTracks.length - 1) {
                        handleNextTrack();
                    } else {
                        setIsPlaying(false);
                    }
                }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />

            <button className={styles.closePlayer} onClick={onClose} aria-label="Close player">×</button>

            <div className={styles.playerContent}>
                <div className={styles.nowPlaying}>
                    <Volume2 size={16} className={styles.volumeIcon} />
                    <div className={styles.nowPlayingInfo}>
                        <span className={styles.nowPlayingTitle}>{currentKhutbah.title}</span>
                        <span className={styles.nowPlayingSpeaker}>{currentKhutbah.speaker}</span>
                    </div>
                </div>

                <div className={styles.playerControls}>
                    <button className={styles.skipBtn} onClick={handlePrevTrack} disabled={currentTrackIndex === 0} aria-label="Previous track">
                        <SkipBack size={18} />
                    </button>
                    <button className={styles.rewindBtn} onClick={handleRewind} aria-label="Rewind 15 seconds">
                        <RotateCcw size={16} /><span>15</span>
                    </button>
                    <button className={styles.mainPlayBtn} onClick={handlePlayPause} aria-label={isPlaying ? 'Pause' : 'Play'}>
                        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </button>
                    <button className={styles.speedBtn} onClick={handleSpeedChange}>{playbackSpeed}x</button>
                    <button className={styles.skipBtn} onClick={handleNextTrack} disabled={currentTrackIndex === audioTracks.length - 1} aria-label="Next track">
                        <SkipForward size={18} />
                    </button>
                </div>

                <div className={styles.playerProgress}>
                    <span className={styles.progressTime}>
                        {Math.floor(currentTime / 60)}:{String(Math.floor(currentTime % 60)).padStart(2, '0')}
                    </span>
                    <div className={styles.progressBar} onClick={handleProgressClick}>
                        <div className={styles.progressFill} style={{ width: `${(currentTime / duration) * 100}%` }} />
                    </div>
                    <span className={styles.progressTime}>
                        {Math.floor(duration / 60)}:{String(Math.floor(duration % 60)).padStart(2, '0')}
                    </span>
                </div>
            </div>
        </div>
    );
}
