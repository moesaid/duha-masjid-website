// Funeral Services Page Data
import { LucideIcon, Heart, Phone, Calendar, DollarSign, Users, BookOpen, Clock } from 'lucide-react';

// Types
export interface FuneralService {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

// Services
export const funeralServices: FuneralService[] = [
    { id: 'prayer', icon: BookOpen, title: 'Janazah Prayer', description: 'We conduct the funeral prayer at the masjid or funeral home, led by our Imam.' },
    { id: 'washing', icon: Heart, title: 'Ghusl (Ritual Washing)', description: 'Trained volunteers perform the ritual washing according to Islamic tradition.' },
    { id: 'shrouding', icon: Users, title: 'Kafan (Shrouding)', description: 'We provide and assist with the proper Islamic shrouding.' },
    { id: 'burial', icon: Calendar, title: 'Burial Coordination', description: 'We coordinate with local cemeteries that offer Muslim-appropriate burial plots.' },
    { id: 'support', icon: Phone, title: '24/7 Support Line', description: 'Our team is available around the clock to assist families in their time of need.' },
    { id: 'financial', icon: DollarSign, title: 'Financial Assistance', description: 'Zakat funds available for families who need help with funeral expenses.' }
];

// FAQs
export const faqs: FAQ[] = [
    { question: 'How soon should a Muslim be buried?', answer: 'Islam encourages quick burial, ideally within 24 hours. We work to expedite all arrangements.' },
    { question: 'Can non-Muslims attend the janazah?', answer: 'Yes, non-Muslim family and friends are welcome to attend to pay their respects.' },
    { question: 'What if someone passes away at night?', answer: 'Call our 24/7 support line. We have volunteers available at all times.' },
    { question: 'Is there a cost for janazah services?', answer: 'Basic services are free. There may be costs for cemetery plots and funeral home services, and we can help with those if needed.' }
];

// Contact
export const emergencyContact = {
    phone: '(555) 123-4567',
    available: '24 hours / 7 days',
    email: 'janazah@masjid.org'
};
