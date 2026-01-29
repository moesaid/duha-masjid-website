// Live Stream Page Data
import { LucideIcon, Play, Video, Clock, Calendar, Users, ExternalLink } from 'lucide-react';

export interface LiveStream {
    id: string;
    title: string;
    time: string;
    platform: string;
    url: string;
}

export const regularStreams: LiveStream[] = [
    { id: 'jumuah', title: "Jumu'ah Khutbah", time: 'Fridays at 1:00 PM', platform: 'YouTube', url: 'https://youtube.com/@masjid' },
    { id: 'taraweeh', title: 'Taraweeh Prayer', time: 'Ramadan Nights', platform: 'YouTube', url: 'https://youtube.com/@masjid' },
    { id: 'halaqah', title: 'Weekly Halaqah', time: 'Mondays at 7:30 PM', platform: 'Facebook', url: 'https://facebook.com/masjid' }
];

export const socialLinks = {
    youtube: 'https://youtube.com/@masjid',
    facebook: 'https://facebook.com/masjid',
    instagram: 'https://instagram.com/masjid'
};

export const liveInfo = {
    currentlyLive: false,
    nextStream: "Jumu'ah Khutbah - Friday 1:00 PM"
};
