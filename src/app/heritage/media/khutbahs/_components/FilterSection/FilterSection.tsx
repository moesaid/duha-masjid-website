import { Search, ChevronDown } from 'lucide-react';
import { speakers, years, languages } from '../../_data';
import styles from '../_shared.module.scss';

interface FilterSectionProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    selectedSpeaker: string;
    setSelectedSpeaker: (speaker: string) => void;
    selectedYear: string;
    setSelectedYear: (year: string) => void;
    selectedLanguage: string;
    setSelectedLanguage: (lang: string) => void;
}

export function FilterSection({
    searchQuery, setSearchQuery,
    selectedSpeaker, setSelectedSpeaker,
    selectedYear, setSelectedYear,
    selectedLanguage, setSelectedLanguage
}: FilterSectionProps) {
    return (
        <section className={styles.filterSection}>
            <div className={styles.container}>
                <div className={styles.filterBar}>
                    <div className={styles.searchBox}>
                        <Search size={18} className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Search by topic (e.g., 'Patience', 'Finance')..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={styles.searchInput}
                        />
                    </div>
                    <div className={styles.filterDropdowns}>
                        <div className={styles.dropdown}>
                            <select value={selectedSpeaker} onChange={(e) => setSelectedSpeaker(e.target.value)}>
                                {speakers.map(speaker => (<option key={speaker} value={speaker}>{speaker}</option>))}
                            </select>
                            <ChevronDown size={16} />
                        </div>
                        <div className={styles.dropdown}>
                            <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                                {years.map(year => (<option key={year} value={year}>{year}</option>))}
                            </select>
                            <ChevronDown size={16} />
                        </div>
                        <div className={styles.dropdown}>
                            <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
                                {languages.map(lang => (<option key={lang} value={lang}>{lang}</option>))}
                            </select>
                            <ChevronDown size={16} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
