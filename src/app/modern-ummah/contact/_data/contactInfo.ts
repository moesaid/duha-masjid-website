export interface ContactInfo {
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
        directionsUrl: string;
    };
    phone: {
        office: string;
        emergency: string;
    };
    email: string;
    hours: {
        weekday: string;
        friday: string;
        weekend: string;
    };
}

export const contactInfo: ContactInfo = {
    address: {
        street: '123 Community Drive',
        city: 'City',
        state: 'State',
        zip: '12345',
        directionsUrl: 'https://maps.google.com',
    },
    phone: {
        office: '(555) 123-4567',
        emergency: '(555) 911-HELP',
    },
    email: 'info@ummahcenter.org',
    hours: {
        weekday: 'Mon-Thu: 9am - 9pm',
        friday: 'Friday: 12pm - 10pm',
        weekend: 'Sat-Sun: 8am - 10pm',
    },
};
