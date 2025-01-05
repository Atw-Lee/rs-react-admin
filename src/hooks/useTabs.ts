import { Tabs, useTabsStore } from '@/store';
import { type Routes, transformRouteToTabs } from '@/utils/transform';
import { useLocation, useRouter } from '@tanstack/react-router';
import { DASHBOARD } from '@/const/const';
import useGO from './useGO';

function useTabs() {
  const tabs = useTabsStore((state) => state.tabs);
  const setTabs = useTabsStore((state) => state.setTabs);
  const pathname = useLocation({
    select: (location) => location.pathname,
  });
  const { routesByPath: routes } = useRouter() as { routesByPath: Routes };
  const go = useGO();

  const addTab = (tab: Tabs[number]) => {
    setTabs([...tabs, tab]);
  };

  if (!tabs.some((i) => i.key === DASHBOARD)) {
    const route = routes[DASHBOARD];
    const tab = transformRouteToTabs(route);
    addTab(tab);
  }

  const listenerPathname = (to: string) => {
    // If the tab does not exist, add a new tab.
    const isExist = tabs.some((tab) => tab.key === to);
    const route = routes[to];
    if (!isExist && route) {
      const tab = transformRouteToTabs(route);
      addTab(tab);
    }
  };

  const closeTab = (key: string) => {
    const index = tabs.findIndex((tab) => tab.key === key);
    const updatedTabs = [...tabs];
    updatedTabs.splice(index, 1);
    setTabs(updatedTabs);

    // 如果关闭的是当前激活的标签，切换相同下标的tab
    const isCurrentTab = pathname === key;
    if (isCurrentTab) {
      const tab = updatedTabs[index] ?? updatedTabs[updatedTabs.length - 1];
      go(tab.key);
    }
  };

  return { tabs, listenerPathname, closeTab };
}

export default useTabs;
