/*
 * @Author: atwlee
 * @Date: 2024-12-11 11:24:42
 * @LastEditors: atwlee
 * @LastEditTime: 2024-12-11 14:47:08
 * @Description:
 * @FilePath: /rsbuild-project/src/store/app.ts
 */
import { create } from 'zustand';

type LayoutType = 'horizontal' | 'side' | 'side-inline' | 'none';
interface AppState {
  layout: LayoutType;
  setLayout: (layout: LayoutType) => void;
  menuMix: boolean; // Whether the menu is mixed in the navigation bar and sidebar
  setMenuMix: (menuMix: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  layout: 'side-inline',
  setLayout: (layout: LayoutType) => {
    set({ layout });
    if (layout === 'horizontal') set({ menuMix: false });
  },
  menuMix: false,
  setMenuMix: (menuMix: boolean) => set({ menuMix }),
}));
