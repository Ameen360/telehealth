/**
 * Lakmed brand palette, pulled from the marketing site (globals.css / header / footer):
 * navy `#181F59` and teal `#43D6D6`. Light and dark variants are derived from those two.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Brand = {
  navy: '#181F59',
  teal: '#43D6D6',
  tealDark: '#2FB8B8',
} as const;

export const Colors = {
  light: {
    text: '#181F59',
    textSecondary: '#5B6280',
    background: '#F5F8FC',
    backgroundElement: '#FFFFFF',
    backgroundSelected: '#E6FBFB',
    border: '#E3E7F3',
    primary: '#43D6D6',
    primaryText: '#0B2A2A',
    navy: '#181F59',
    navyText: '#FFFFFF',
  },
  dark: {
    text: '#F3F5FF',
    textSecondary: '#A9AFCB',
    background: '#0C0F2E',
    backgroundElement: '#151A42',
    backgroundSelected: '#1E2A52',
    border: '#262C57',
    primary: '#43D6D6',
    primaryText: '#04211F',
    navy: '#10143A',
    navyText: '#FFFFFF',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
