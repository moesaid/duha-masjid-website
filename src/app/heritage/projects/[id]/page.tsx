// Project Detail Page - Blueprint Design System
// Dynamic route for individual project pages
'use client';

import { use } from 'react';
import { getProject } from './_data';
import { useProjectState } from './_hooks';
import {
    HeroSection,
    ScopeSection,
    GallerySection,
    RoadmapSection,
    SpecsSection,
    FieldNotesSection,
    CtaSection
} from './_components';
import styles from './ProjectPage.module.scss';

interface ProjectPageProps {
    params: Promise<{ id: string }>;
}

/**
 * Project Detail Page
 * 
 * Architecture:
 * - _data/      → Project types and static project data
 * - _hooks/     → useProjectState (gallery navigation)
 * - _components/→ Hero, Scope, Gallery, Roadmap, Specs, FieldNotes, CTA
 */
export default function ProjectPage({ params }: ProjectPageProps) {
    const { id } = use(params);
    const project = getProject(id);
    const { galleryIndex, setGalleryIndex, nextSlide, prevSlide } = useProjectState(project.gallery.length);

    return (
        <main className={styles.projectPage}>
            <HeroSection project={project} />
            <ScopeSection project={project} />
            <GallerySection
                gallery={project.gallery}
                galleryIndex={galleryIndex}
                setGalleryIndex={setGalleryIndex}
                nextSlide={nextSlide}
                prevSlide={prevSlide}
            />
            <RoadmapSection timeline={project.timeline} />
            <SpecsSection specs={project.specs} contractor={project.contractor} />
            <FieldNotesSection fieldNotes={project.fieldNotes} />
            <CtaSection donationNote={project.donationNote} />
        </main>
    );
}
