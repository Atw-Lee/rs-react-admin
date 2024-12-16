import type { CSSProperties } from 'react';
import type { MenuProps } from 'antd';
import { create } from 'zustand';
import { i18nMessages } from '@/i18n';

type LayoutType = 'horizontal' | 'side' | 'side-inline' | 'none';
type ThemeType = 'light' | 'dark' | 'system';
interface AppState {
  layout: LayoutType; // Handling the overall layout of a page.
  setLayout: (layout: LayoutType) => void;
  menu: MenuProps['items']; // Menu
  setMenu: (menu: MenuProps['items']) => void;
  menuMix: boolean; // Whether the menu is mixed in the navigation bar and sidebar
  setMenuMix: (menuMix: boolean) => void;
  isPreferencePanelVisible: boolean; // Is Visible Preference Setting Panel
  setPreferencePanelVisible: (isVisible: boolean) => void;
  lang: keyof typeof i18nMessages; // Language
  setLang: (lang: keyof typeof i18nMessages) => void;
  theme: ThemeType; // Theme
  setTheme: (theme: ThemeType) => void;
  primaryColor: CSSProperties['color']; // Primary Color
  setPrimaryColor: (primaryColor: CSSProperties['color']) => void;
}

export const useAppStore = create<AppState>((set) => ({
  layout: 'side-inline',
  setLayout: (layout: LayoutType) => {
    set({ layout });
    if (layout === 'horizontal') set({ menuMix: false });
  },
  menu: [],
  setMenu: (menu: MenuProps['items']) => set({ menu }),
  menuMix: false,
  setMenuMix: (menuMix: boolean) => set({ menuMix }),
  isPreferencePanelVisible: false,
  setPreferencePanelVisible: (visible: boolean) =>
    set({ isPreferencePanelVisible: visible }),
  lang: 'en-US',
  setLang: (lang: keyof typeof i18nMessages) => set({ lang }),
  theme: 'system',
  setTheme: (theme: ThemeType) => set({ theme }),
  primaryColor: '#1677FF',
  setPrimaryColor: (primaryColor: CSSProperties['color']) =>
    set({ primaryColor }),
}));
