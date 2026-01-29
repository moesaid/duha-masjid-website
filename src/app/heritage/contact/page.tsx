// Contact Page - Heritage Design
// Contact Us & Community Connection
'use client';

import { useContactState } from './_hooks';
import {
    HeroSection,
    ContactMethodsSection,
    HoursSection,
    DepartmentsSection,
    ContactFormSection,
    MapSection
} from './_components';
import styles from './ContactPage.module.scss';

/**
 * Contact Page
 * 
 * Architecture:
 * - _data/      → Contact methods, hours, departments, form topics
 * - _hooks/     → useContactState (form data, submission status)
 * - _components/→ Hero, Methods, Hours, Departments, Form, Map
 */
export default function ContactPage() {
    const { formData, updateFormField, isMessageSent, submitForm } = useContactState();

    return (
        <main className={styles.contactPage}>
            <HeroSection />
            <ContactMethodsSection />
            <HoursSection />
            <DepartmentsSection />
            <ContactFormSection
                formData={formData}
                onUpdate={updateFormField}
                onSubmit={submitForm}
                isMessageSent={isMessageSent}
            />
            <MapSection />
        </main>
    );
}
