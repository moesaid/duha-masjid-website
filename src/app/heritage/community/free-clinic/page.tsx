// Free Clinic Page - HERITAGE ALIGNED
// Design: Emerald Green, Heritage Gold, Cream (Dignified, Compassionate)
// Vibe: Healing, Trust, Dignity
'use client';

import { useState } from 'react';
import {
    HeroSection,
    PatientInfoSection,
    ServicesSection,
    MedicalTeamSection,
    PharmacySection,
    LocationSection,
    FooterSection,
    AppointmentModal
} from './_components';
import styles from './_components/_shared.module.scss';

/**
 * Free Clinic Page - Al-Shifa (The House of Healing)
 * 
 * Architecture:
 * - _data/      → Clinic status, services, hours, contact, impact stats
 * - _components/→ Hero, PatientInfo, Services, MedicalTeam, Pharmacy, Location, Footer, AppointmentModal
 */
export default function FreeClinicPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main className={styles.freeClinicPage}>
            <HeroSection onBookAppointment={() => setIsModalOpen(true)} />
            <PatientInfoSection />
            <ServicesSection />
            <MedicalTeamSection />
            <PharmacySection />
            <LocationSection />
            <FooterSection />

            <AppointmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </main>
    );
}
