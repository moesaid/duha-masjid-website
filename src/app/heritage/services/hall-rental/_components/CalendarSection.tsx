import { format, isSameMonth, isToday, isWeekend, isSameDay } from 'date-fns';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Hall } from '../_data';
import styles from '../HallRentalPage.module.scss';

interface CalendarSectionProps {
    selectedHall: Hall;
    currentMonth: Date;
    calendarDays: Date[];
    firstDayOffset: number;
    selectedDate: Date | null;
    today: Date;
    isDateBooked: (date: Date) => boolean;
    isPastDate: (date: Date) => boolean;
    getDateRate: (date: Date) => number;
    goToPreviousMonth: () => void;
    goToNextMonth: () => void;
    onDateSelect: (date: Date) => void;
}

export function CalendarSection({
    selectedHall,
    currentMonth,
    calendarDays,
    firstDayOffset,
    selectedDate,
    today,
    isDateBooked,
    isPastDate,
    getDateRate,
    goToPreviousMonth,
    goToNextMonth,
    onDateSelect
}: CalendarSectionProps) {
    return (
        <section className={styles.calendarSection}>
            <div className={styles.calendarContainer}>
                <div className={styles.calendarHeader}>
                    <h2 className={styles.calendarTitle}>
                        <CalendarIcon size={24} />
                        Select a Date for {selectedHall.name}
                    </h2>
                    <p className={styles.calendarSubtitle}>
                        Click on an available date to book. Green dates are available, gray dates are booked.
                    </p>
                </div>

                <div className={styles.calendarWidget}>
                    {/* Month Navigation */}
                    <div className={styles.monthNav}>
                        <button
                            className={styles.navButton}
                            onClick={goToPreviousMonth}
                            disabled={isSameMonth(currentMonth, today)}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <span className={styles.monthLabel}>
                            {format(currentMonth, 'MMMM yyyy')}
                        </span>
                        <button className={styles.navButton} onClick={goToNextMonth}>
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    {/* Weekday Headers */}
                    <div className={styles.weekdayHeaders}>
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                            <div key={day} className={styles.weekdayHeader}>{day}</div>
                        ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className={styles.calendarGrid}>
                        {/* Empty cells for offset */}
                        {Array.from({ length: firstDayOffset }).map((_, idx) => (
                            <div key={`empty-${idx}`} className={styles.emptyCell} />
                        ))}

                        {/* Day cells */}
                        {calendarDays.map(day => {
                            const booked = isDateBooked(day);
                            const past = isPastDate(day);
                            const weekend = isWeekend(day);
                            const rate = getDateRate(day);
                            const isSelected = selectedDate && isSameDay(day, selectedDate);

                            return (
                                <button
                                    key={day.toISOString()}
                                    className={`${styles.dayCell} 
                                        ${booked ? styles.booked : ''} 
                                        ${past ? styles.past : ''} 
                                        ${isToday(day) ? styles.today : ''} 
                                        ${weekend ? styles.weekend : ''}
                                        ${isSelected ? styles.selected : ''}
                                        ${!booked && !past ? styles.available : ''}`}
                                    onClick={() => onDateSelect(day)}
                                    disabled={booked || past}
                                >
                                    <span className={styles.dayNumber}>{format(day, 'd')}</span>
                                    {!booked && !past && (
                                        <span className={styles.dayPrice}>${rate}</span>
                                    )}
                                    {booked && <span className={styles.bookedLabel}>Booked</span>}
                                </button>
                            );
                        })}
                    </div>

                    {/* Legend */}
                    <div className={styles.calendarLegend}>
                        <div className={styles.legendItem}>
                            <span className={`${styles.legendDot} ${styles.availableDot}`} />
                            <span>Available</span>
                        </div>
                        <div className={styles.legendItem}>
                            <span className={`${styles.legendDot} ${styles.bookedDot}`} />
                            <span>Booked</span>
                        </div>
                        <div className={styles.legendItem}>
                            <span className={`${styles.legendDot} ${styles.weekendDot}`} />
                            <span>Weekend Rate</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
