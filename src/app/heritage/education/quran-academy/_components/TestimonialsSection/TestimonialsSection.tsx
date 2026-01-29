import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../_data';
import styles from './TestimonialsSection.module.scss';

interface TestimonialsSectionProps {
    activeIndex: number;
    onPrev: () => void;
    onNext: () => void;
}

export function TestimonialsSection({ activeIndex, onPrev, onNext }: TestimonialsSectionProps) {
    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Success Stories</span>
                <h2 className={styles.sectionTitle}>Words from Our Community</h2>
            </div>

            <div className={styles.testimonialCarousel}>
                <button className={styles.carouselBtn} onClick={onPrev}>
                    <ChevronLeft size={24} />
                </button>

                <div className={styles.testimonialCard}>
                    <p className={styles.testimonialQuote}>
                        &ldquo;{testimonials[activeIndex].quote}&rdquo;
                    </p>
                    <div className={styles.testimonialAuthor}>
                        <span className={styles.authorName}>{testimonials[activeIndex].author}</span>
                        <span className={styles.authorRole}>{testimonials[activeIndex].role}</span>
                    </div>
                </div>

                <button className={styles.carouselBtn} onClick={onNext}>
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className={styles.carouselDots}>
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        className={`${styles.dot} ${idx === activeIndex ? styles.active : ''}`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
