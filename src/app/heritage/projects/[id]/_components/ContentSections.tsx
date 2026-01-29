import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Compass, CheckCircle, Circle, Calendar, Camera, ChevronLeft, ChevronRight, Ruler, ImageIcon, DollarSign, Maximize, Users, Clock, ExternalLink } from 'lucide-react';
import { Project, GalleryItem } from '../_data';
import styles from '../ProjectPage.module.scss';

// ============================================
// Hero Section
// ============================================

interface HeroSectionProps {
    project: Project;
}

export function HeroSection({ project }: HeroSectionProps) {
    return (
        <header className={styles.heroSection}>
            <div className={styles.heroBackground}>
                <Image
                    src={project.heroImage}
                    alt={project.name}
                    fill
                    className={styles.heroImage}
                    priority
                />
                <div className={styles.heroOverlay} />
                <div className={styles.gridPattern} />
            </div>

            <div className={styles.heroContent}>
                <Link href="/heritage/about/committees/youth" className={styles.backLink}>
                    <ArrowLeft size={18} />
                    Youth Committee
                </Link>
                <span className={styles.projectCode}>{project.code}</span>
                <h1 className={styles.heroTitle}>{project.name}</h1>
                <p className={styles.heroTagline}>{project.tagline}</p>
                <div className={styles.statusBadge} data-status={project.status}>
                    <Compass size={18} />
                    {project.statusLabel}
                </div>
            </div>

            <div className={styles.progressMeter}>
                <div className={styles.progressInfo}>
                    <span className={styles.progressLabel}>Project Completion</span>
                    <span className={styles.progressPercent}>{project.progress}%</span>
                </div>
                <div className={styles.progressTrack}>
                    <div className={styles.progressFill} style={{ width: `${project.progress}%` }} />
                </div>
            </div>
        </header>
    );
}

// ============================================
// Scope Section
// ============================================

interface ScopeSectionProps {
    project: Project;
}

export function ScopeSection({ project }: ScopeSectionProps) {
    return (
        <section className={styles.scopeSection}>
            <div className={styles.scopeContainer}>
                <div className={styles.scopeImage}>
                    <Image
                        src={project.gallery[0]?.image || project.heroImage}
                        alt="Project Vision"
                        fill
                        className={styles.scopeImg}
                    />
                    <div className={styles.blueprintFrame} />
                </div>
                <div className={styles.scopeContent}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleNumber}>01</span>
                        The Scope
                    </h2>
                    <div className={styles.manifestoBlock}>
                        <h3>The Objective</h3>
                        <p className={styles.dropCap}>{project.scope.objective}</p>
                    </div>
                    <div className={styles.manifestoBlock}>
                        <h3>The Why</h3>
                        <p>{project.scope.why}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ============================================
// Gallery Section
// ============================================

interface GallerySectionProps {
    gallery: GalleryItem[];
    galleryIndex: number;
    setGalleryIndex: (index: number) => void;
    nextSlide: () => void;
    prevSlide: () => void;
}

const getGalleryIcon = (type: string) => {
    switch (type) {
        case 'floorplan': return <Ruler size={16} />;
        case 'render': return <ImageIcon size={16} />;
        case 'construction': return <Camera size={16} />;
        default: return <ImageIcon size={16} />;
    }
};

export function GallerySection({ gallery, galleryIndex, setGalleryIndex, nextSlide, prevSlide }: GallerySectionProps) {
    return (
        <section className={styles.gallerySection}>
            <h2 className={styles.sectionTitle}>
                <span className={styles.titleNumber}>02</span>
                The Blueprints
            </h2>
            <div className={styles.galleryCarousel}>
                <button className={styles.carouselArrow} onClick={prevSlide} aria-label="Previous slide">
                    <ChevronLeft size={24} />
                </button>
                <div className={styles.draftingPlate}>
                    <div className={styles.plateHeader}>
                        {getGalleryIcon(gallery[galleryIndex].type)}
                        <span>{gallery[galleryIndex].title}</span>
                    </div>
                    <div className={styles.plateImage}>
                        <Image
                            src={gallery[galleryIndex].image}
                            alt={gallery[galleryIndex].title}
                            fill
                            className={styles.plateImg}
                        />
                    </div>
                    <div className={styles.plateCaption}>
                        {gallery[galleryIndex].caption}
                    </div>
                </div>
                <button className={styles.carouselArrow} onClick={nextSlide} aria-label="Next slide">
                    <ChevronRight size={24} />
                </button>
            </div>
            <div className={styles.galleryDots}>
                {gallery.map((_, idx) => (
                    <button
                        key={idx}
                        className={`${styles.dot} ${idx === galleryIndex ? styles.active : ''}`}
                        onClick={() => setGalleryIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

// ============================================
// Roadmap Section
// ============================================

interface RoadmapSectionProps {
    timeline: Project['timeline'];
}

export function RoadmapSection({ timeline }: RoadmapSectionProps) {
    return (
        <section className={styles.roadmapSection}>
            <h2 className={styles.sectionTitle}>
                <span className={styles.titleNumber}>03</span>
                The Roadmap
            </h2>
            <div className={styles.timeline}>
                {timeline.map((milestone, idx) => (
                    <div key={idx} className={`${styles.timelineNode} ${styles[milestone.status]}`}>
                        <div className={styles.nodeMarker}>
                            {milestone.status === 'completed' ? (
                                <CheckCircle size={24} />
                            ) : milestone.status === 'active' ? (
                                <div className={styles.pulsingDot} />
                            ) : (
                                <Circle size={24} />
                            )}
                        </div>
                        <div className={styles.nodeContent}>
                            <span className={styles.nodeDate}>{milestone.date}</span>
                            <h4 className={styles.nodeTitle}>{milestone.title}</h4>
                            {milestone.description && (
                                <p className={styles.nodeDesc}>{milestone.description}</p>
                            )}
                        </div>
                    </div>
                ))}
                <div className={`${styles.timelineNode} ${styles.ribbon}`}>
                    <div className={styles.nodeMarker}>
                        <div className={styles.ribbonIcon}>🎀</div>
                    </div>
                    <div className={styles.nodeContent}>
                        <h4 className={styles.nodeTitle}>Grand Opening</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ============================================
// Specs Section
// ============================================

interface SpecsSectionProps {
    specs: Project['specs'];
    contractor: string;
}

export function SpecsSection({ specs, contractor }: SpecsSectionProps) {
    return (
        <section className={styles.specsSection}>
            <div className={styles.specsGrid}>
                <div className={styles.specCard}>
                    <DollarSign size={28} />
                    <span className={styles.specLabel}>Budget</span>
                    <span className={styles.specValue}>{specs.budget}</span>
                </div>
                <div className={styles.specCard}>
                    <Maximize size={28} />
                    <span className={styles.specLabel}>Square Footage</span>
                    <span className={styles.specValue}>{specs.squareFeet}</span>
                </div>
                <div className={styles.specCard}>
                    <Users size={28} />
                    <span className={styles.specLabel}>Capacity</span>
                    <span className={styles.specValue}>{specs.capacity}</span>
                </div>
                <div className={styles.specCard}>
                    <Clock size={28} />
                    <span className={styles.specLabel}>Completion</span>
                    <span className={styles.specValue}>{specs.completionDate}</span>
                </div>
            </div>
            <div className={styles.contractorNote}>
                <strong>Contractor:</strong> {contractor}
            </div>
        </section>
    );
}

// ============================================
// Field Notes Section
// ============================================

interface FieldNotesSectionProps {
    fieldNotes: Project['fieldNotes'];
}

export function FieldNotesSection({ fieldNotes }: FieldNotesSectionProps) {
    return (
        <section className={styles.fieldNotesSection}>
            <h2 className={styles.sectionTitle}>
                <span className={styles.titleNumber}>04</span>
                Field Notes
            </h2>
            <div className={styles.logbook}>
                {fieldNotes.map((note, idx) => (
                    <div key={idx} className={styles.logEntry}>
                        <div className={styles.logDate}>
                            <Calendar size={16} />
                            {note.date}
                        </div>
                        <p className={styles.logText}>{note.entry}</p>
                        {note.hasPhotos && (
                            <button className={styles.viewPhotosBtn}>
                                <Camera size={14} />
                                View Photos
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

// ============================================
// CTA Section
// ============================================

interface CtaSectionProps {
    donationNote: string;
}

export function CtaSection({ donationNote }: CtaSectionProps) {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.ctaSplit}>
                <div className={styles.ctaCard}>
                    <h3>Volunteer Your Skills</h3>
                    <p>We need skilled tradesmen, professionals, and dedicated community members to help bring this project to life.</p>
                    <Link href="/heritage/community/volunteers" className={styles.ctaButton}>
                        <Users size={18} />
                        Volunteer Now
                    </Link>
                </div>
                <div className={styles.ctaDivider}>
                    <span>or</span>
                </div>
                <div className={`${styles.ctaCard} ${styles.donateCard}`}>
                    <h3>Support This Project</h3>
                    <p>{donationNote}</p>
                    <Link href="/heritage/donate" className={`${styles.ctaButton} ${styles.donateBtn}`}>
                        <DollarSign size={18} />
                        Donate to Project
                        <ExternalLink size={14} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
