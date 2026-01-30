export interface CoreValue {
    id: string;
    name: string;
    arabicName: string;
    description: string;
    icon: 'star' | 'book' | 'heart' | 'link' | 'shield' | 'compass';
}

export const coreValues: CoreValue[] = [
    {
        id: 'ihsan',
        name: 'Ihsan',
        arabicName: 'الإحسان',
        description: 'Striving for excellence and beauty in all we do, as if Allah is watching.',
        icon: 'star',
    },
    {
        id: 'ilm',
        name: 'Ilm',
        arabicName: 'العلم',
        description: 'Cultivating minds with sacred and secular learning, from cradle to grave.',
        icon: 'book',
    },
    {
        id: 'khidmah',
        name: 'Khidmah',
        arabicName: 'الخدمة',
        description: 'Serving our neighbors regardless of faith, background, or circumstance.',
        icon: 'heart',
    },
    {
        id: 'ukhuwwah',
        name: 'Ukhuwwah',
        arabicName: 'الأخوة',
        description: 'Strengthening bonds of brotherhood and sisterhood across all backgrounds.',
        icon: 'link',
    },
    {
        id: 'amanah',
        name: 'Amānah',
        arabicName: 'الأمانة',
        description: 'Stewarding resources with transparency, accountability, and integrity.',
        icon: 'shield',
    },
    {
        id: 'tawakkul',
        name: 'Tawakkul',
        arabicName: 'التوكل',
        description: 'Moving forward with faith in Allah\'s plan while taking purposeful action.',
        icon: 'compass',
    },
];
