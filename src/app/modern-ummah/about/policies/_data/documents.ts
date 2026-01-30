export interface PolicyDocument {
    id: string;
    title: string;
    description: string;
    fileType: string;
    fileSize: string;
    updated: string;
    downloadUrl: string;
    iconType: 'constitution' | 'financial' | 'membership' | 'facility';
}

export const policyDocuments: PolicyDocument[] = [
    {
        id: 'constitution-bylaws',
        title: 'Constitution & Bylaws (2026)',
        description: 'The foundational legal document governing our organization.',
        fileType: 'PDF',
        fileSize: '2.4 MB',
        updated: 'Jan 2026',
        downloadUrl: '/documents/constitution-bylaws-2026.pdf',
        iconType: 'constitution',
    },
    {
        id: 'financial-policies',
        title: 'Financial Policies',
        description: 'Guidelines for donations, expenditures, and financial transparency.',
        fileType: 'PDF',
        fileSize: '1.8 MB',
        updated: 'Dec 2025',
        downloadUrl: '/documents/financial-policies.pdf',
        iconType: 'financial',
    },
    {
        id: 'membership-agreement',
        title: 'Membership Agreement',
        description: 'Rights and responsibilities of community members.',
        fileType: 'PDF',
        fileSize: '890 KB',
        updated: 'Nov 2025',
        downloadUrl: '/documents/membership-agreement.pdf',
        iconType: 'membership',
    },
    {
        id: 'facility-guidelines',
        title: 'Facility Usage Guidelines',
        description: 'Rules for reserving and using masjid spaces and equipment.',
        fileType: 'PDF',
        fileSize: '1.2 MB',
        updated: 'Oct 2025',
        downloadUrl: '/documents/facility-guidelines.pdf',
        iconType: 'facility',
    },
];
