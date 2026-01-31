'use client';

import * as React from 'react';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogClose
} from '../ui/Dialog';
import { X } from 'lucide-react';

interface GlobalVideoProps {
    videoUrl?: string;
    children: React.ReactNode;
}

const DEFAULT_VIDEO_URL = 'https://www.youtube.com/embed/HXb-B8exuYE';
const FALLBACK_LINK = 'https://www.youtube.com/watch?v=HXb-B8exuYE';

export function GlobalVideo({ videoUrl, children }: GlobalVideoProps) {
    const getEmbedUrl = (url: string) => {
        if (!url) return DEFAULT_VIDEO_URL;
        if (url.includes('embed')) return url;
        if (url.includes('watch?v=')) {
            const videoId = url.split('watch?v=')[1]?.split('&')[0];
            return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        }
        if (url.includes('youtu.be/')) {
            const videoId = url.split('youtu.be/')[1]?.split('?')[0];
            return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        }
        return url;
    };

    const finalUrl = getEmbedUrl(videoUrl || FALLBACK_LINK);

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            {/* [&>button]:hidden hides the default Shadcn Close button so we can use our custom one */}
            <DialogContent className="max-w-4xl w-[90vw] p-0 bg-transparent border-none shadow-none [&>button]:hidden">
                <DialogTitle className="sr-only">Video Player</DialogTitle>
                <DialogDescription className="sr-only">
                    Plays the campaign video.
                </DialogDescription>

                <div className="relative w-full">
                    {/* External Close Button */}
                    <DialogClose className="absolute -top-12 right-0 z-50 rounded-full h-10 w-10 flex items-center justify-center bg-white/20 hover:bg-white/30 text-white border-0 transition-colors cursor-pointer outline-none mt-0 backdrop-blur-md ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2">
                        <X size={20} strokeWidth={2.5} />
                        <span className="sr-only">Close</span>
                    </DialogClose>

                    <div className="relative aspect-video w-full bg-black rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                        <iframe
                            width="100%"
                            height="100%"
                            src={finalUrl}
                            title="Video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
