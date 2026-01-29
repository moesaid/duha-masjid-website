'use client';

import { useState } from 'react';

export interface UseVideoPlayerReturn {
    isPlaying: boolean;
    play: () => void;
}

export function useVideoPlayer(): UseVideoPlayerReturn {
    const [isPlaying, setIsPlaying] = useState(false);

    const play = () => setIsPlaying(true);

    return { isPlaying, play };
}
