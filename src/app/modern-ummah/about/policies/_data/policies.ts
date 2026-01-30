export interface PolicyItem {
    id: string;
    title: string;
    content: string[];
    warnings?: string[];
}

export const policyItems: PolicyItem[] = [
    {
        id: 'code-of-conduct',
        title: 'Code of Conduct & Ethics',
        content: [
            'All members and visitors are expected to treat each other with respect, dignity, and kindness.',
            'Maintain Islamic etiquette (adab) in speech, dress, and behavior within masjid premises.',
            'Engage in constructive dialogue and avoid backbiting, gossip, or harmful speech.',
            'Respect the diverse backgrounds and viewpoints within our community.',
            'Support an environment of learning, worship, and community building.',
        ],
    },
    {
        id: 'harassment-policy',
        title: 'Harassment & Safety Policy',
        content: [
            'The masjid maintains a zero-tolerance policy for harassment, discrimination, or abuse of any kind.',
            'All allegations of misconduct are taken seriously and investigated promptly.',
            'Victims and reporters are protected from retaliation.',
            'Background checks are required for all staff and volunteers working with children.',
            'Safety protocols are in place for all youth programs and events.',
        ],
        warnings: [
            'Any person found violating this policy may be permanently banned from the premises.',
            'Criminal conduct will be reported to law enforcement authorities.',
        ],
    },
    {
        id: 'facility-usage',
        title: 'Facility Usage Rules',
        content: [
            'All facility reservations must be made at least 7 days in advance.',
            'A refundable security deposit may be required for private events.',
            'The facility must be left clean and in the same condition as found.',
            'Outside catering is permitted but must be halal-certified.',
            'Amplified sound is restricted after 10:00 PM on weekdays.',
            'Smoking, vaping, and alcohol are strictly prohibited on all premises.',
        ],
    },
    {
        id: 'donation-refund',
        title: 'Donation & Refund Policy',
        content: [
            'All donations are tax-deductible as permitted by law (501(c)(3) status).',
            'Donors receive annual statements for tax purposes.',
            'Designated donations (e.g., Zakat, Building Fund) are used only for their stated purpose.',
            'General donations support operational expenses and community programs.',
            'Refunds for event registrations are available up to 48 hours before the event.',
            'Membership fees are non-refundable but may be transferred at board discretion.',
        ],
    },
];
