import { Tabs, useTabsStore } from '@/store';
import { type Routes, transformRouteToTabs } from '@/utils/transform';
import { useRouter } from '@tanstack/react-router';

function useTabs() {
  const tabs = useTabsStore((state) => state.tabs);
  const setTabs = useTabsStore((state) => state.setTabs);
  const { routesByPath: routes } = useRouter() as { routesByPath: Routes };

  const addTab = (tab: Tabs[number]) => {
    setTabs([...tabs, tab]);
  };

  const listenerPathname = (to: string) => {
    // If the tab does not exist, add a new tab.
    const isExist = tabs.some((tab) => tab.key === to);
    const route = routes[to];
    if (!isExist && route) {
      const tab = transformRouteToTabs(route);
      addTab(tab);
    }
  };

  return { tabs, listenerPathname };
}

export default useTabs;
