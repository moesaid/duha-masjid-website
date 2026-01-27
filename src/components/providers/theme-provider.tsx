'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { createContext, useContext, useMemo, type ReactNode } from 'react';
import type { ThemeConfig, ThemePreset, SiteThemeSettings } from '@/types/theme';
import { getThemePreset } from '@/lib/theme-presets';

/**
 * Theme context value
 */
interface ThemeContextValue {
    theme: ThemeConfig;
    settings: SiteThemeSettings;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Hook to access theme configuration
 */
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

/**
 * Props for ThemeProvider
 */
interface ThemeProviderProps {
    children: ReactNode;
    settings?: Partial<SiteThemeSettings>;
}

/**
 * Default theme settings
 */
const defaultSettings: SiteThemeSettings = {
    preset: 'emerald',
    defaultMode: 'system',
    allowModeToggle: true,
};

/**
 * Theme Provider Component
 * Wraps the app with theme context and next-themes provider
 */
export function ThemeProvider({ children, settings: settingsOverride }: ThemeProviderProps) {
    const settings: SiteThemeSettings = {
        ...defaultSettings,
        ...settingsOverride,
    };

    const theme = useMemo(() => {
        const baseTheme = getThemePreset(settings.preset);

        // Apply custom color overrides if provided
        if (settings.customColors) {
            return {
                ...baseTheme,
                colors: {
                    ...baseTheme.colors,
                    ...settings.customColors,
                },
            };
        }

        return baseTheme;
    }, [settings.preset, settings.customColors]);

    const contextValue = useMemo(() => ({ theme, settings }), [theme, settings]);

    return (
        <ThemeContext.Provider value={contextValue}>
            <NextThemesProvider
                attribute="class"
                defaultTheme={settings.defaultMode}
                enableSystem={settings.defaultMode === 'system'}
                disableTransitionOnChange
            >
                <ThemeStyleInjector theme={theme} />
                {children}
            </NextThemesProvider>
        </ThemeContext.Provider>
    );
}

/**
 * Injects CSS custom properties based on theme configuration
 */
function ThemeStyleInjector({ theme }: { theme: ThemeConfig }) {
    const cssVars = useMemo(() => {
        const { colors, spacing } = theme;

        // Generate light mode CSS variables
        const lightVars = Object.entries(colors).map(([key, value]) => {
            const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
            return `--${cssKey}: ${value.light};`;
        }).join('\n  ');

        // Generate dark mode CSS variables
        const darkVars = Object.entries(colors).map(([key, value]) => {
            const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
            return `--${cssKey}: ${value.dark};`;
        }).join('\n  ');

        return `
      :root {
        --radius: ${spacing.radius};
        --radius-sm: ${spacing.radiusSm};
        --radius-md: ${spacing.radiusMd};
        --radius-lg: ${spacing.radiusLg};
        ${lightVars}
      }
      
      .dark {
        ${darkVars}
      }
    `;
    }, [theme]);

    return <style dangerouslySetInnerHTML={{ __html: cssVars }} />;
}

export { ThemeContext };
