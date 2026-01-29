import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../../_data';
import styles from './TestimonialsSection.module.scss';

interface TestimonialsSectionProps {
    testimonials: Testimonial[];
    activeIndex: number;
    onPrev: () => void;
    onNext: () => void;
    onSelect: (index: number) => void;
}

export function TestimonialsSection({
    testimonials,
    activeIndex,
    onPrev,
    onNext,
    onSelect
}: TestimonialsSectionProps) {
    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Community Voices</span>
                <h2 className={styles.sectionTitle}>What Our Neighbors Say</h2>
            </div>

            <div className={styles.testimonialCarousel}>
                <button
                    className={styles.carouselBtn}
                    onClick={onPrev}
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft size={24} />
                </button>

                <div className={styles.testimonialCard}>
                    <Quote size={32} className={styles.quoteIcon} />
                    <p className={styles.testimonialQuote}>
                        {testimonials[activeIndex].quote}
                    </p>
                    <div className={styles.testimonialAuthor}>
                        <span className={styles.authorName}>
                            {testimonials[activeIndex].author}
                        </span>
                        <span className={styles.authorRole}>
                            {testimonials[activeIndex].role}
                        </span>
                    </div>
                    <div className={styles.testimonialDots}>
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                className={`${styles.dot} ${idx === activeIndex ? styles.activeDot : ''}`}
                                onClick={() => onSelect(idx)}
                                aria-label={`Go to testimonial ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <button
                    className={styles.carouselBtn}
                    onClick={onNext}
                    aria-label="Next testimonial"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </section>
    );
}
