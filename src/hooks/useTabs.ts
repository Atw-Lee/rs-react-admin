import { useTabsStore } from '@/store';

function Index() {
  const tabs = useTabsStore((state) => state.tabs);

  const addTab = (tab: string) => tabs.add(tab);

  return { tabs, addTab };
}

export default Index;
