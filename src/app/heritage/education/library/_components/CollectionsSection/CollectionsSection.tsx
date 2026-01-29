import { BookMarked } from 'lucide-react';
import { collections } from '../../_data';
import styles from './CollectionsSection.module.scss';

export function CollectionsSection() {
    return (
        <section className={styles.collectionsSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>Browse by Category</span>
                <h2 className={styles.sectionTitle}>The Shelves</h2>
            </div>

            <div className={styles.bookshelvesContainer}>
                {collections.map((collection) => (
                    <div key={collection.shelf} className={styles.shelfRow}>
                        <h3 className={styles.shelfLabel}>{collection.shelf}</h3>
                        <div className={styles.shelf}>
                            <div className={styles.books}>
                                {collection.books.map((book) => (
                                    <div key={book.title} className={styles.bookSpine} style={{ backgroundColor: book.color }} title={book.title}>
                                        <span className={styles.bookTitle}>{book.title}</span>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.shelfBoard} />
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.libraryQuote}>
                <BookMarked size={20} />
                <p>"A book is a garden carried in the pocket."</p>
            </div>
        </section>
    );
}
