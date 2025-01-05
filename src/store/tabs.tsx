import { create } from 'zustand';
import type { TabsProps } from 'antd';
import { DASHBOARD } from '@/const/const';
import { FormattedMessage } from 'react-intl';

export type Tabs = NonNullable<TabsProps['items']>;
interface TabsState {
  tabs: Tabs; // Handling the overall layout of a page.
  setTabs: (tab: Tabs) => void;
}

export const useTabsStore = create<TabsState>((set) => ({
  tabs: [
    {
      key: DASHBOARD,
      label: <FormattedMessage id="/dashboard" />,
    },
  ],
  setTabs: (tabs: Tabs) => set({ tabs }),
}));
