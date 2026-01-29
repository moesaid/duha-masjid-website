// Food Pantry Page - HERITAGE ALIGNED
// Design: Harvest Gold + Wheat + Sage Green (Earthy abundance)
// Vibe: Generous, Organized, Dignified
'use client';

import { offerings, wantedItems, impactStats, volunteerRoles } from './_data';
import {
    HeroSection,
    GetHelpSection,
    OfferingsSection,
    GiveHelpSection,
    VolunteerSection,
    ImpactSection,
    FooterSection
} from './_components';
import styles from './FoodPantryPage.module.scss';

/**
 * Food Pantry Page - Community Sustenance
 * 
 * Architecture:
 * - _data/      → Offerings, wanted items, impact stats, volunteer roles
 * - _components/→ Hero, GetHelp, Offerings, GiveHelp, Volunteer, Impact, Footer
 */
export default function FoodPantryPage() {
    return (
        <main className={styles.foodPantryPage}>
            <HeroSection />
            <GetHelpSection />
            <OfferingsSection offerings={offerings} />
            <GiveHelpSection wantedItems={wantedItems} />
            <VolunteerSection roles={volunteerRoles} />
            <ImpactSection stats={impactStats} />
            <FooterSection />
        </main>
    );
}
