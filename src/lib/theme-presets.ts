import type { ThemeConfig, ThemePalette, ThemeColor } from '@/types/theme';

/**
 * Helper to create a theme color with light/dark variants
 */
function color(light: string, dark: string): ThemeColor {
    return { light, dark };
}

/**
 * Emerald Theme - Traditional Islamic Green
 * Represents growth, paradise, and Islamic heritage
 */
const emeraldPalette: ThemePalette = {
    primary: color('oklch(0.45 0.15 160)', 'oklch(0.65 0.18 160)'),
    primaryForeground: color('oklch(0.98 0.01 160)', 'oklch(0.15 0.02 160)'),
    secondary: color('oklch(0.95 0.02 160)', 'oklch(0.25 0.04 160)'),
    secondaryForeground: color('oklch(0.25 0.05 160)', 'oklch(0.95 0.02 160)'),
    accent: color('oklch(0.75 0.12 80)', 'oklch(0.65 0.15 80)'),
    accentForeground: color('oklch(0.20 0.02 80)', 'oklch(0.98 0.01 80)'),
    background: color('oklch(0.99 0.002 160)', 'oklch(0.15 0.01 160)'),
    foreground: color('oklch(0.20 0.02 160)', 'oklch(0.95 0.01 160)'),
    muted: color('oklch(0.96 0.01 160)', 'oklch(0.25 0.02 160)'),
    mutedForeground: color('oklch(0.50 0.02 160)', 'oklch(0.70 0.02 160)'),
    card: color('oklch(1 0 0)', 'oklch(0.20 0.015 160)'),
    cardForeground: color('oklch(0.20 0.02 160)', 'oklch(0.95 0.01 160)'),
    border: color('oklch(0.90 0.02 160)', 'oklch(0.30 0.02 160)'),
    input: color('oklch(0.90 0.02 160)', 'oklch(0.30 0.02 160)'),
    ring: color('oklch(0.45 0.15 160)', 'oklch(0.65 0.18 160)'),
    destructive: color('oklch(0.55 0.22 25)', 'oklch(0.65 0.20 25)'),
};

/**
 * Sapphire Theme - Modern Blue
 * Represents trust, stability, and professionalism
 */
const sapphirePalette: ThemePalette = {
    primary: color('oklch(0.50 0.18 250)', 'oklch(0.65 0.20 250)'),
    primaryForeground: color('oklch(0.98 0.01 250)', 'oklch(0.15 0.02 250)'),
    secondary: color('oklch(0.95 0.02 250)', 'oklch(0.25 0.04 250)'),
    secondaryForeground: color('oklch(0.25 0.05 250)', 'oklch(0.95 0.02 250)'),
    accent: color('oklch(0.70 0.15 200)', 'oklch(0.60 0.18 200)'),
    accentForeground: color('oklch(0.20 0.02 200)', 'oklch(0.98 0.01 200)'),
    background: color('oklch(0.99 0.002 250)', 'oklch(0.14 0.015 250)'),
    foreground: color('oklch(0.18 0.02 250)', 'oklch(0.95 0.01 250)'),
    muted: color('oklch(0.96 0.01 250)', 'oklch(0.25 0.02 250)'),
    mutedForeground: color('oklch(0.50 0.02 250)', 'oklch(0.70 0.02 250)'),
    card: color('oklch(1 0 0)', 'oklch(0.18 0.02 250)'),
    cardForeground: color('oklch(0.18 0.02 250)', 'oklch(0.95 0.01 250)'),
    border: color('oklch(0.90 0.02 250)', 'oklch(0.30 0.02 250)'),
    input: color('oklch(0.90 0.02 250)', 'oklch(0.30 0.02 250)'),
    ring: color('oklch(0.50 0.18 250)', 'oklch(0.65 0.20 250)'),
    destructive: color('oklch(0.55 0.22 25)', 'oklch(0.65 0.20 25)'),
};

/**
 * Amber Theme - Warm Golden
 * Represents warmth, welcome, and tradition
 */
const amberPalette: ThemePalette = {
    primary: color('oklch(0.55 0.15 65)', 'oklch(0.70 0.18 65)'),
    primaryForeground: color('oklch(0.15 0.02 65)', 'oklch(0.15 0.02 65)'),
    secondary: color('oklch(0.95 0.03 65)', 'oklch(0.25 0.04 65)'),
    secondaryForeground: color('oklch(0.30 0.05 65)', 'oklch(0.95 0.02 65)'),
    accent: color('oklch(0.60 0.12 40)', 'oklch(0.55 0.15 40)'),
    accentForeground: color('oklch(0.98 0.01 40)', 'oklch(0.98 0.01 40)'),
    background: color('oklch(0.99 0.005 65)', 'oklch(0.16 0.015 65)'),
    foreground: color('oklch(0.22 0.02 65)', 'oklch(0.94 0.01 65)'),
    muted: color('oklch(0.95 0.02 65)', 'oklch(0.25 0.02 65)'),
    mutedForeground: color('oklch(0.50 0.02 65)', 'oklch(0.70 0.02 65)'),
    card: color('oklch(1 0 0)', 'oklch(0.20 0.02 65)'),
    cardForeground: color('oklch(0.22 0.02 65)', 'oklch(0.94 0.01 65)'),
    border: color('oklch(0.90 0.03 65)', 'oklch(0.32 0.02 65)'),
    input: color('oklch(0.90 0.03 65)', 'oklch(0.32 0.02 65)'),
    ring: color('oklch(0.55 0.15 65)', 'oklch(0.70 0.18 65)'),
    destructive: color('oklch(0.55 0.22 25)', 'oklch(0.65 0.20 25)'),
};

/**
 * Ruby Theme - Bold Red
 * Represents energy, passion, and importance
 */
const rubyPalette: ThemePalette = {
    primary: color('oklch(0.50 0.20 15)', 'oklch(0.60 0.22 15)'),
    primaryForeground: color('oklch(0.98 0.01 15)', 'oklch(0.98 0.01 15)'),
    secondary: color('oklch(0.95 0.02 15)', 'oklch(0.25 0.04 15)'),
    secondaryForeground: color('oklch(0.30 0.05 15)', 'oklch(0.95 0.02 15)'),
    accent: color('oklch(0.65 0.12 350)', 'oklch(0.55 0.15 350)'),
    accentForeground: color('oklch(0.98 0.01 350)', 'oklch(0.98 0.01 350)'),
    background: color('oklch(0.99 0.003 15)', 'oklch(0.14 0.01 15)'),
    foreground: color('oklch(0.20 0.02 15)', 'oklch(0.95 0.01 15)'),
    muted: color('oklch(0.96 0.01 15)', 'oklch(0.25 0.02 15)'),
    mutedForeground: color('oklch(0.50 0.02 15)', 'oklch(0.70 0.02 15)'),
    card: color('oklch(1 0 0)', 'oklch(0.18 0.015 15)'),
    cardForeground: color('oklch(0.20 0.02 15)', 'oklch(0.95 0.01 15)'),
    border: color('oklch(0.90 0.02 15)', 'oklch(0.30 0.02 15)'),
    input: color('oklch(0.90 0.02 15)', 'oklch(0.30 0.02 15)'),
    ring: color('oklch(0.50 0.20 15)', 'oklch(0.60 0.22 15)'),
    destructive: color('oklch(0.55 0.22 25)', 'oklch(0.65 0.20 25)'),
};

/**
 * Slate Theme - Professional Neutral
 * Represents professionalism and sophistication
 */
const slatePalette: ThemePalette = {
    primary: color('oklch(0.30 0.02 260)', 'oklch(0.85 0.01 260)'),
    primaryForeground: color('oklch(0.98 0.005 260)', 'oklch(0.15 0.01 260)'),
    secondary: color('oklch(0.95 0.005 260)', 'oklch(0.25 0.01 260)'),
    secondaryForeground: color('oklch(0.25 0.01 260)', 'oklch(0.95 0.005 260)'),
    accent: color('oklch(0.55 0.12 250)', 'oklch(0.60 0.15 250)'),
    accentForeground: color('oklch(0.98 0.005 250)', 'oklch(0.15 0.01 250)'),
    background: color('oklch(0.99 0.001 260)', 'oklch(0.14 0.005 260)'),
    foreground: color('oklch(0.15 0.01 260)', 'oklch(0.95 0.005 260)'),
    muted: color('oklch(0.96 0.005 260)', 'oklch(0.22 0.008 260)'),
    mutedForeground: color('oklch(0.50 0.01 260)', 'oklch(0.70 0.008 260)'),
    card: color('oklch(1 0 0)', 'oklch(0.18 0.006 260)'),
    cardForeground: color('oklch(0.15 0.01 260)', 'oklch(0.95 0.005 260)'),
    border: color('oklch(0.90 0.005 260)', 'oklch(0.28 0.008 260)'),
    input: color('oklch(0.90 0.005 260)', 'oklch(0.28 0.008 260)'),
    ring: color('oklch(0.30 0.02 260)', 'oklch(0.70 0.015 260)'),
    destructive: color('oklch(0.55 0.22 25)', 'oklch(0.65 0.20 25)'),
};

/**
 * Default typography configuration
 */
const defaultTypography = {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontFamilyArabic: '"Noto Naskh Arabic", "Amiri", serif',
    headingFontFamily: 'inherit',
};

/**
 * Default spacing configuration
 */
const defaultSpacing = {
    radius: '0.625rem',
    radiusSm: '0.375rem',
    radiusMd: '0.5rem',
    radiusLg: '0.75rem',
};

/**
 * All available theme presets
 */
export const themePresets: Record<string, ThemeConfig> = {
    emerald: {
        id: 'emerald',
        name: 'Emerald',
        preset: 'emerald',
        colors: emeraldPalette,
        typography: defaultTypography,
        spacing: defaultSpacing,
    },
    sapphire: {
        id: 'sapphire',
        name: 'Sapphire',
        preset: 'sapphire',
        colors: sapphirePalette,
        typography: defaultTypography,
        spacing: defaultSpacing,
    },
    amber: {
        id: 'amber',
        name: 'Amber',
        preset: 'amber',
        colors: amberPalette,
        typography: defaultTypography,
        spacing: defaultSpacing,
    },
    ruby: {
        id: 'ruby',
        name: 'Ruby',
        preset: 'ruby',
        colors: rubyPalette,
        typography: defaultTypography,
        spacing: defaultSpacing,
    },
    slate: {
        id: 'slate',
        name: 'Slate',
        preset: 'slate',
        colors: slatePalette,
        typography: defaultTypography,
        spacing: defaultSpacing,
    },
};

/**
 * Get a theme preset by ID
 */
export function getThemePreset(preset: string): ThemeConfig {
    return themePresets[preset] || themePresets.emerald;
}

/**
 * Get all available preset IDs
 */
export function getThemePresetIds(): string[] {
    return Object.keys(themePresets);
}
