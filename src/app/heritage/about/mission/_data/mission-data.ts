// About Mission Page Data
import { LucideIcon, Heart, Users, BookOpen, Globe, Star, Target } from 'lucide-react';

export interface CoreValue {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
}

export const coreValues: CoreValue[] = [
    { id: 'faith', icon: Heart, title: 'Faith', description: 'Rooted in sincere devotion to Allah and adherence to the Quran and Sunnah.' },
    { id: 'community', icon: Users, title: 'Community', description: 'Building strong bonds of brotherhood and sisterhood.' },
    { id: 'education', icon: BookOpen, title: 'Education', description: 'Fostering knowledge and understanding of Islamic teachings.' },
    { id: 'outreach', icon: Globe, title: 'Outreach', description: 'Serving the broader community and representing Islam positively.' }
];

export const missionStatement = "To serve as a beacon of Islamic knowledge, worship, and community service, nurturing the spiritual growth of Muslims while building bridges with our neighbors.";

export const visionStatement = "A thriving Muslim community that upholds Islamic values, contributes positively to society, and is a resource for all seeking to understand Islam.";

export const historyTimeline = [
    { year: '1998', event: 'Masjid founded with 20 families' },
    { year: '2005', event: 'Expansion to current location' },
    { year: '2015', event: 'Weekend school program launched' },
    { year: '2020', event: 'Digital outreach programs initiated' }
];
