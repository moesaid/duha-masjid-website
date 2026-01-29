import { Star } from 'lucide-react';
import { featuredBook } from '../../_data';
import styles from './SpotlightSection.module.scss';

export function SpotlightSection() {
    return (
        <section className={styles.spotlightSection}>
            <div className={styles.spotlightContent}>
                <div className={styles.bookCover}>
                    <div className={styles.bookMockup}>
                        <div className={styles.bookFront}>
                            <span className={styles.bookBadge}><Star size={12} />Featured</span>
                            <div className={styles.coverContent}>
                                <h4>The Sealed Nectar</h4>
                                <span className={styles.coverArabic}>{featuredBook.arabicTitle}</span>
                                <span className={styles.coverAuthor}>{featuredBook.author}</span>
                            </div>
                        </div>
                        <div className={styles.bookSpineSide} />
                    </div>
                </div>

                <div className={styles.bookDetails}>
                    <span className={styles.monthLabel}>Book of the Month</span>
                    <h3>{featuredBook.title}</h3>
                    <p className={styles.bookAuthor}>By {featuredBook.author}</p>

                    <div className={styles.librarianReview}>
                        <h4>Librarian's Review</h4>
                        <p>{featuredBook.review}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
