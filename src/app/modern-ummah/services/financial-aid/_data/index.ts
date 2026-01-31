import {
    Coins,
    Wheat,
    Heart
} from 'lucide-react';

export const zakatTypes = [
    {
        id: 'maal',
        label: 'Zakat al-Maal',
        subtitle: '2.5% on Wealth',
        description: 'The obligatory annual charity on accumulated wealth above the Nisab threshold. Due on savings, gold, investments, and business assets held for one lunar year.',
        icon: Coins,
    },
    {
        id: 'fitr',
        label: 'Zakat al-Fitr',
        subtitle: 'Ramadan Food Charity',
        description: 'A fixed amount given before Eid al-Fitr prayer to ensure the poor can celebrate Eid. Approximately $15 per person in the household.',
        icon: Wheat,
    },
    {
        id: 'sadaqah',
        label: 'Sadaqah',
        subtitle: 'Voluntary Charity',
        description: 'Any voluntary act of giving, from financial donations to a kind word. Unlike Zakat, there is no minimum amount or specific calculation.',
        icon: Heart,
    },
];

export const distributionData = [
    { category: 'Local Families in Need', percentage: 45 },
    { category: 'Emergency Assistance', percentage: 25 },
    { category: 'Medical Bills Support', percentage: 15 },
    { category: 'New Muslim Support', percentage: 10 },
    { category: 'Student Aid', percentage: 5 },
];

export const eligibilityCriteria = [
    'Must be a resident of the local community',
    'Demonstrate genuine financial hardship',
    'Provide required documentation (ID, bank statements)',
    'Meet the Islamic criteria for Zakat recipients',
    'Complete an interview with the Zakat Committee',
];

export const applicationSteps = [
    { number: 1, title: 'Download Form', description: 'Get the confidential application form' },
    { number: 2, title: 'Gather Documents', description: 'ID, proof of income, bank statements' },
    { number: 3, title: 'Submit Application', description: 'Email or drop off sealed envelope' },
    { number: 4, title: 'Committee Review', description: 'Confidential meeting within 2 weeks' },
];

export const faqItems = [
    {
        question: 'Can I pay my Zakat in advance?',
        answer: 'Yes, you may pay Zakat before your wealth has been held for a full lunar year, especially if there is an urgent need in the community. This is the opinion of the Hanafi and Shafi\'i schools.',
    },
    {
        question: 'Does the masjid help with rent and utility bills?',
        answer: 'Yes, emergency assistance for rent, utilities, and medical bills is available through our Zakat fund for eligible recipients.',
    },
    {
        question: 'Is my Zakat tax-deductible?',
        answer: 'Yes, all donations to Al-Noor Masjid are tax-deductible under section 501(c)(3). You will receive a receipt for your records.',
    },
    {
        question: 'How is Nisab calculated?',
        answer: 'Nisab is the minimum threshold of wealth upon which Zakat becomes obligatory. It is equivalent to 85 grams of gold or 595 grams of silver. We use the silver standard (approximately $500 USD).',
    },
    {
        question: 'Can I specify where my Zakat goes?',
        answer: 'Zakat must be distributed among the eight categories mentioned in the Quran. However, you may express a preference (e.g., local families vs. students), and we will honor it when possible.',
    },
];
