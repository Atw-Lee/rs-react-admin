import { create } from 'zustand';
import type { TabsProps } from 'antd';

export type Tabs = NonNullable<TabsProps['items']>;
interface TabsState {
  tabs: Tabs; // Handling the overall layout of a page.
  setTabs: (tab: Tabs) => void;
}

export const useTabsStore = create<TabsState>((set) => ({
  tabs: [],
  setTabs: (tabs: Tabs) => set({ tabs }),
}));
