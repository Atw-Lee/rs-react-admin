import { MenuProps } from 'antd';
import { create } from 'zustand';

type LayoutType = 'horizontal' | 'side' | 'side-inline' | 'none';
interface AppState {
  layout: LayoutType;
  setLayout: (layout: LayoutType) => void;
  menu: MenuProps['items'];
  setMenu: (menu: MenuProps['items']) => void;
  menuMix: boolean; // Whether the menu is mixed in the navigation bar and sidebar
  setMenuMix: (menuMix: boolean) => void;
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
}));
