// Membership Configuration
// Centralized settings for membership fees and rules

/**
 * Membership fee for adults (18+)
 * This value can be adjusted as needed
 */
export const MEMBERSHIP_FEE = 100;

/**
 * Age threshold for free membership
 * Members under this age are free
 */
export const FREE_AGE_THRESHOLD = 18;

/**
 * Membership types available
 */
export const MEMBERSHIP_TYPES = {
    INDIVIDUAL: 'individual',
    FAMILY: 'family',
} as const;

export type MembershipType = typeof MEMBERSHIP_TYPES[keyof typeof MEMBERSHIP_TYPES];

/**
 * Calculate age from date of birth
 */
export function calculateAge(dateOfBirth: Date): number {
    const today = new Date();
    let age = today.getFullYear() - dateOfBirth.getFullYear();
    const monthDiff = today.getMonth() - dateOfBirth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateOfBirth.getDate())) {
        age--;
    }

    return age;
}

/**
 * Calculate membership fee based on age
 * Returns 0 for members under FREE_AGE_THRESHOLD, otherwise returns MEMBERSHIP_FEE
 */
export function calculateMembershipFee(dateOfBirth: Date | null): number {
    if (!dateOfBirth) return 0;

    const age = calculateAge(dateOfBirth);
    return age < FREE_AGE_THRESHOLD ? 0 : MEMBERSHIP_FEE;
}

/**
 * Check if a member qualifies for free membership
 */
export function isFreeMember(dateOfBirth: Date | null): boolean {
    if (!dateOfBirth) return false;
    return calculateAge(dateOfBirth) < FREE_AGE_THRESHOLD;
}
