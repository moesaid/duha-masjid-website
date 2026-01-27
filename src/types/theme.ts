/**
 * Theme Configuration Types
 * Defines the structure for customizable masjid themes
 */

/**
 * Color mode preference
 */
export type ColorMode = 'light' | 'dark' | 'system';

/**
 * Theme preset identifier
 */
export type ThemePreset =
    | 'emerald'      // Green - Traditional Islamic
    | 'sapphire'     // Blue - Modern, trustworthy
    | 'amber'        // Gold/Brown - Warm, welcoming
    | 'ruby'         // Red - Bold, energetic
    | 'slate'        // Gray - Professional, neutral
    | 'custom';      // Custom color configuration

/**
 * Individual color definition with light/dark variants
 */
export interface ThemeColor {
    light: string;
    dark: string;
}

/**
 * Complete color palette for a theme
 */
export interface ThemePalette {
    primary: ThemeColor;
    primaryForeground: ThemeColor;
    secondary: ThemeColor;
    secondaryForeground: ThemeColor;
    accent: ThemeColor;
    accentForeground: ThemeColor;
    background: ThemeColor;
    foreground: ThemeColor;
    muted: ThemeColor;
    mutedForeground: ThemeColor;
    card: ThemeColor;
    cardForeground: ThemeColor;
    border: ThemeColor;
    input: ThemeColor;
    ring: ThemeColor;
    destructive: ThemeColor;
}

/**
 * Typography configuration
 */
export interface ThemeTypography {
    fontFamily: string;
    fontFamilyArabic?: string;
    headingFontFamily?: string;
}

/**
 * Spacing and radius configuration
 */
export interface ThemeSpacing {
    radius: string;
    radiusSm: string;
    radiusMd: string;
    radiusLg: string;
}

/**
 * Complete theme configuration
 */
export interface ThemeConfig {
    id: string;
    name: string;
    preset: ThemePreset;
    colors: ThemePalette;
    typography: ThemeTypography;
    spacing: ThemeSpacing;
}

/**
 * Site theme settings (stored in database/API)
 */
export interface SiteThemeSettings {
    preset: ThemePreset;
    defaultMode: ColorMode;
    allowModeToggle: boolean;
    customColors?: Partial<ThemePalette>;
    customTypography?: Partial<ThemeTypography>;
}
