import { Tabs, useTabsStore } from '@/store';

function Index() {
  const tabs = useTabsStore((state) => state.tabs);
  const setTabs = useTabsStore((state) => state.setTabs);

  const addTab = (tab: Tabs[number]) => {
    setTabs([...tabs, tab]);
  };

  return { tabs, addTab };
}

export default Index;
