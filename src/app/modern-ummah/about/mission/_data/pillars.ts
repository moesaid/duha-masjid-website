export interface StrategicPillar {
    id: string;
    title: string;
    description: string;
    initiatives: string[];
}

export const strategicPillars: StrategicPillar[] = [
    {
        id: 'education',
        title: 'Educational Empowerment',
        description: 'Building a generation of Muslims who are confident in their faith and competent in their fields.',
        initiatives: [
            'Weekend Islamic school for youth ages 5-18',
            'Quran Academy with certified huffaz instructors',
            'Adult halaqas and continuing education programs',
            'Youth mentorship and career development',
        ],
    },
    {
        id: 'welfare',
        title: 'Social Welfare & Justice',
        description: 'Addressing the material needs of our community and standing for justice in our society.',
        initiatives: [
            'Weekly food pantry serving 200+ families',
            'Emergency financial assistance program',
            'Free legal aid clinics for immigrants',
            'Advocacy for housing and civil rights',
        ],
    },
    {
        id: 'interfaith',
        title: 'Interfaith Bridge Building',
        description: 'Creating authentic relationships with our neighbors of all faiths to build mutual understanding.',
        initiatives: [
            'Monthly open house and masjid tours',
            'Interfaith dialogue series with local churches and synagogues',
            'Joint community service projects',
            'Educational presentations at schools and civic groups',
        ],
    },
];
