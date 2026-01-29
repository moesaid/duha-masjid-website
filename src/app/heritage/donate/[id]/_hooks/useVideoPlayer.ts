'use client';

import { useState, useCallback } from 'react';

export interface UseVideoPlayerReturn {
    showVideo: boolean;
    openVideo: () => void;
    closeVideo: () => void;
}

export function useVideoPlayer(): UseVideoPlayerReturn {
    const [showVideo, setShowVideo] = useState(false);

    const openVideo = useCallback(() => setShowVideo(true), []);
    const closeVideo = useCallback(() => setShowVideo(false), []);

    return { showVideo, openVideo, closeVideo };
}
