import { Flower2 } from 'lucide-react';
import { Testimonial } from '../../_data';
import styles from './TestimonialSection.module.scss';

interface TestimonialSectionProps {
    testimonials: Testimonial[];
    activeIndex: number;
    onSelect: (index: number) => void;
}

export function TestimonialSection({ testimonials, activeIndex, onSelect }: TestimonialSectionProps) {
    return (
        <section className={styles.testimonialSection}>
            <div className={styles.testimonialContent}>
                <Flower2 size={32} className={styles.testimonialFlower} />
                <blockquote className={styles.testimonialQuote}>
                    &ldquo;{testimonials[activeIndex].quote}&rdquo;
                </blockquote>
                <cite className={styles.testimonialAuthor}>
                    — {testimonials[activeIndex].author},
                    <span>{testimonials[activeIndex].role}</span>
                </cite>
                <div className={styles.testimonialDots}>
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            className={`${styles.dot} ${idx === activeIndex ? styles.activeDot : ''}`}
                            onClick={() => onSelect(idx)}
                            aria-label={`View testimonial ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
