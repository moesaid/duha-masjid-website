// App Download Page - HERITAGE ALIGNED
// Design: Modern app showcase with download links
'use client';

import { features, screenshots, benefits } from './_data';
import {
    HeroSection,
    FeaturesSection,
    ScreenshotsSection,
    BenefitsSection,
    CtaSection
} from './_components';
import styles from './AppPage.module.scss';

/**
 * App Page - Download & Features Showcase
 * 
 * Architecture:
 * - _data/      → Features, screenshots, benefits
 * - _components/→ Hero, Features, Screenshots, Benefits, CTA
 */
export default function AppPage() {
    return (
        <main className={styles.appPage}>
            <HeroSection />
            <FeaturesSection features={features} />
            <ScreenshotsSection screenshots={screenshots} />
            <BenefitsSection benefits={benefits} />
            <CtaSection />
        </main>
    );
}
