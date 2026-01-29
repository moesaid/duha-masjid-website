import { X, Library, BookX, CheckCircle } from 'lucide-react';
import { Book } from '../../_data';
import styles from './SearchModal.module.scss';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
    results: Book[];
}

export function SearchModal({ isOpen, onClose, results }: SearchModalProps) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose}><X size={24} /></button>

                <div className={styles.modalHeader}>
                    <div className={styles.modalHeaderTop}>
                        <Library size={24} />
                        <h2>Search Results</h2>
                    </div>
                    <span className={styles.resultCount}>
                        {results.length} {results.length === 1 ? 'book' : 'books'} found
                    </span>
                </div>

                {results.length === 0 ? (
                    <div className={styles.emptyState}>
                        <BookX size={48} />
                        <h3>No Books Found</h3>
                        <p>We couldn&apos;t find any books matching your search. Try adjusting your filters or search terms.</p>
                    </div>
                ) : (
                    <div className={styles.resultsList}>
                        {results.map((book) => (
                            <div key={book.title} className={styles.resultItem}>
                                <div className={styles.resultBookSpine} style={{ backgroundColor: book.color }} />
                                <div className={styles.resultInfo}>
                                    <h4>{book.title}</h4>
                                    <p className={styles.resultAuthor}>by {book.author}</p>
                                    <div className={styles.resultMeta}>
                                        <span className={styles.resultSubject}>{book.subject}</span>
                                        <span className={styles.resultLanguage}>{book.language}</span>
                                    </div>
                                </div>
                                <div className={styles.resultStatus}>
                                    <CheckCircle size={16} />
                                    <span>Available</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
