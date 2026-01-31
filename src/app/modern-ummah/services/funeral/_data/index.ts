import {
    MessageCircle,
    Truck,
    Droplets,
    Users,
    Landmark,
    Heart,
    Clock,
    BookOpen
} from 'lucide-react';

export const janazahSteps = [
    {
        number: 1,
        title: 'Notification',
        subtitle: 'Contacting the Masjid',
        description: 'Call our 24/7 funeral hotline immediately. Our funeral director will guide you through the process and begin arrangements.',
        icon: MessageCircle,
    },
    {
        number: 2,
        title: 'Transportation',
        subtitle: 'Moving the Deceased',
        description: 'We coordinate transport from the hospital, home, or medical examiner to our Ghusl facility. We work with licensed funeral homes.',
        icon: Truck,
    },
    {
        number: 3,
        title: 'Ghusl & Kafan',
        subtitle: 'Washing & Shrouding',
        description: 'The deceased is ritually washed and shrouded in white cloth by trained volunteers. Separate facilities for men and women. Kafan is provided.',
        icon: Droplets,
    },
    {
        number: 4,
        title: 'Janazah Prayer',
        subtitle: 'The Funeral Prayer',
        description: 'The Janazah prayer is typically held after Dhuhr prayer at the masjid. Community members are encouraged to attend.',
        icon: Users,
    },
    {
        number: 5,
        title: 'Burial',
        subtitle: 'The Final Journey',
        description: 'The burial takes place at the Muslim section of the local cemetery. Family and community accompany the deceased to the grave.',
        icon: Landmark,
    },
];

export const pricingItems = [
    { item: 'Grave Plot', price: '$2,500', note: 'One-time purchase' },
    { item: 'Opening & Closing', price: '$850', note: 'Per burial' },
    { item: 'Ghusl Services', price: 'No charge', note: 'Community service' },
    { item: 'Kafan (Shroud)', price: 'No charge', note: 'Provided by masjid' },
    { item: 'Headstone', price: '$400 - $1,200', note: 'Optional, various styles' },
];

export const communityGuidelines = [
    {
        title: 'Food for the Family',
        description: 'Sign up to provide meals for the bereaved family during the first week.',
        icon: Heart,
    },
    {
        title: 'Visiting Hours',
        description: 'Respect the family\'s need for rest. Brief condolence visits are appreciated.',
        icon: Clock,
    },
    {
        title: 'Janazah Attendance',
        description: 'Attend the Janazah prayer if possible. Silence phones and maintain dignity.',
        icon: Users,
    },
    {
        title: 'Make Dua',
        description: 'The Prophet ﷺ said: "When you pray over the deceased, make sincere dua for them."',
        icon: BookOpen,
    },
];

export const cemeteryInfo = {
    name: 'Al-Noor Memorial Gardens',
    address: '2500 Memorial Drive, Springfield, IL 62704',
    hours: 'Daily: Sunrise to Sunset',
    note: 'All graves face towards Mecca (Qibla)',
    mapLink: 'https://maps.google.com'
};

export const emergencyContact = {
    phone: '(555) 123-4567',
    tel: '+15551234567',
    label: 'Call Funeral Director (24/7)'
};
