export interface GovernanceDocument {
    id: string;
    title: string;
    description: string;
    type: 'report' | 'policy' | 'minutes';
    date: string;
    downloadUrl: string;
}

export const governanceDocuments: GovernanceDocument[] = [
    {
        id: 'annual-report-2025',
        title: 'Annual Report 2025',
        description: 'Comprehensive overview of our programs, financials, and community impact.',
        type: 'report',
        date: 'December 2025',
        downloadUrl: '/documents/annual-report-2025.pdf',
    },
    {
        id: 'bylaws-constitution',
        title: 'Bylaws & Constitution',
        description: 'The foundational document governing our organization structure and operations.',
        type: 'policy',
        date: 'Amended June 2024',
        downloadUrl: '/documents/bylaws.pdf',
    },
    {
        id: 'meeting-minutes-jan-2026',
        title: 'Meeting Minutes (Jan 2026)',
        description: 'Summary of board decisions and discussions from our latest meeting.',
        type: 'minutes',
        date: 'January 15, 2026',
        downloadUrl: '/documents/minutes-jan-2026.pdf',
    },
    {
        id: 'financial-statements-q4',
        title: 'Q4 Financial Statements',
        description: 'Quarterly financial report with detailed income and expenditure breakdown.',
        type: 'report',
        date: 'Q4 2025',
        downloadUrl: '/documents/q4-financials-2025.pdf',
    },
];
