// Free Clinic Data - Al-Shifa (The House of Healing)
// Design: Medical White, Herbal Green, Slate Blue
// Vibe: Clean, Compassionate, Historic

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface ClinicStatus {
    isWalkIn: boolean;
    cost: string;
    eligibility: string;
    nextClinicDate: string;
    nextClinicTime: string;
}

export interface VolunteerRole {
    id: string;
    title: string;
    description: string;
}

export interface ImpactStat {
    value: string;
    label: string;
}

// Clinic Status
export const clinicStatus: ClinicStatus = {
    isWalkIn: true,
    cost: '100% Free of Charge',
    eligibility: 'Open to all, regardless of faith or insurance status.',
    nextClinicDate: 'Saturday, Feb 14th',
    nextClinicTime: '9:00 AM'
};

// Services offered
export const services: Service[] = [
    {
        id: 'primary-care',
        title: 'Primary Care',
        description: 'General checkups, physicals, and flu shots.',
        icon: '🩺'
    },
    {
        id: 'screenings',
        title: 'Health Screenings',
        description: 'Blood pressure, diabetes (glucose), and cholesterol monitoring.',
        icon: '💉'
    },
    {
        id: 'referrals',
        title: 'Referrals',
        description: 'Coordination with local hospitals for advanced care and x-rays.',
        icon: '🏥'
    }
];

// Pharmacy info
export const pharmacyInfo = {
    onSite: 'We provide basic antibiotics and maintenance medications on-site.',
    vouchers: 'For other prescriptions, we offer discount vouchers for local pharmacies.'
};

// Location & Transport
export const locationInfo = {
    entrance: 'Clinic Entrance (Side Door B)',
    parking: 'Reserved spots available for patients',
    busRoute: 'Bus #55 stops directly in front'
};

// Operating Hours
export const operatingHours = {
    regular: 'Saturdays 9 AM - 1 PM',
    special: 'Pediatrics available on the 1st Saturday of the month'
};

// Contact
export const contactInfo = {
    nurseLine: '(555) 000-0000',
    nurseLineLabel: 'Confidential Nurse Line'
};

// Impact Stats
export const impactStats: ImpactStat[] = [
    { value: '2,500+', label: 'Patients Served Annually' },
    { value: '25+', label: 'Volunteer Medical Professionals' },
    { value: '10+', label: 'Years of Service' }
];

// Volunteer Roles
export const volunteerRoles: VolunteerRole[] = [
    {
        id: 'physician',
        title: 'Physicians',
        description: 'Board-certified doctors providing consultations and care.'
    },
    {
        id: 'nurse',
        title: 'Nurses',
        description: 'RNs and LPNs assisting with patient care and triage.'
    },
    {
        id: 'pharmacist',
        title: 'Pharmacists',
        description: 'Licensed pharmacists managing our on-site dispensary.'
    }
];

// What we don't offer (important disclaimer)
export const limitations = [
    'No Emergency Room Services. Call 911 for emergencies.',
    'No surgical procedures or overnight care.',
    'No controlled substance prescriptions.'
];
