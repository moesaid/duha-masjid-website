// Team Page - Spiritual Leadership
// HERITAGE ALIGNED: Guiding the Heart & Mind
'use client';

import { seniorImam, residentScholars, recentKhutbahs } from './_data';
import { useTeamState } from './_hooks';
import {
    HeroSection,
    ImamFeature,
    ScholarsGrid,
    AskImamForm,
    KhutbahsSection
} from './_components';
import templateStyles from '../../_styles/template.module.scss';

/**
 * Team Page - Religious Leadership
 * 
 * Architecture:
 * - _data/      → Imam, scholars, khutbahs data
 * - _hooks/     → useTeamState (form state, slider)
 * - _components/→ Hero, ImamFeature, ScholarsGrid, AskImamForm, KhutbahsSection
 */
export default function TeamPage() {
    const { formData, setFormData, formSubmitted, handleSubmit, sliderRef, scrollSlider } = useTeamState();

    return (
        <div className={templateStyles.template}>
            <HeroSection />
            <ImamFeature imam={seniorImam} />
            <ScholarsGrid scholars={residentScholars} />
            <AskImamForm
                formData={formData}
                setFormData={setFormData}
                formSubmitted={formSubmitted}
                handleSubmit={handleSubmit}
            />
            <KhutbahsSection
                khutbahs={recentKhutbahs}
                sliderRef={sliderRef}
                scrollSlider={scrollSlider}
            />
        </div>
    );
}
