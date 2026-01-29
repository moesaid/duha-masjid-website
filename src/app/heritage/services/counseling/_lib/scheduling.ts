/**
 * Scheduling utilities for counseling booking
 */

export interface AvailableDate {
    date: Date;
    label: string;
}

/**
 * Get next N available dates (Monday-Thursday only)
 * @param count Number of dates to return (default 7)
 * @returns Array of available dates with formatted labels
 */
export function getAvailableDates(count: number = 7): AvailableDate[] {
    const dates: AvailableDate[] = [];
    const today = new Date();
    let found = 0;
    let daysChecked = 0;
    const maxDaysToCheck = 21; // Safety limit

    while (found < count && daysChecked < maxDaysToCheck) {
        const checkDate = new Date(today);
        checkDate.setDate(today.getDate() + daysChecked + 1);
        const dayOfWeek = checkDate.getDay();

        // Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4
        if (dayOfWeek >= 1 && dayOfWeek <= 4) {
            dates.push({
                date: checkDate,
                label: checkDate.toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric'
                })
            });
            found++;
        }
        daysChecked++;
    }

    return dates;
}

/**
 * Check if a time slot is available for a given date and counselor
 * (Placeholder for future API integration)
 */
export function isTimeSlotAvailable(
    _date: Date,
    _time: string,
    _counselorId: number
): boolean {
    // TODO: Replace with actual API call
    return true;
}
