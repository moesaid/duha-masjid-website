export interface Newsletter {
    id: string;
    title: string;
    date: string;
    preview: string;
    tag: string;
}

export const latestIssue = {
    title: 'Preparing for Rajab: The Sacred Months Approach',
    excerpt: 'As the sacred months approach, we reflect on the spiritual significance of Rajab and how our community can prepare for the blessed season ahead. This week, we explore the traditions of our predecessors and practical ways to increase our worship.',
    date: 'January 24, 2026'
};

export const archiveIssues: Newsletter[] = [
    { id: '1', date: 'JAN 17', title: 'Construction Update: Phase 2 Begins', tag: 'Community News', preview: 'We are excited to share the progress on the community center...' },
    { id: '2', date: 'JAN 10', title: 'New Weekend School Registration Open', tag: 'Education', preview: 'Registration for the Spring semester is now live...' },
    { id: '3', date: 'JAN 3', title: 'Year in Review: 2025 Highlights', tag: 'Annual Report', preview: 'A look back at everything we achieved together...' },
    { id: '4', date: 'DEC 27', title: 'Winter Break Program Schedule', tag: 'Youth', preview: 'Keep kids engaged during the break with our camps...' },
    { id: '5', date: 'DEC 20', title: 'Community Iftar Registration', tag: 'Events', preview: 'Join us for a community gathering...' },
    { id: '6', date: 'DEC 13', title: 'Meet Our New Youth Director', tag: 'Announcements', preview: 'We are pleased to welcome Brother Ahmed...' }
];
