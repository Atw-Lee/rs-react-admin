import { create } from 'zustand';

interface TabsState {
  tabs: Set<string>; // Handling the overall layout of a page.
}

export const useTabsStore = create<TabsState>(() => ({
  tabs: new Set(),
}));
