import { useNavigate, useRouter } from '@tanstack/react-router';
import useTabs from './useTabs';
import { Routes, transformRouteToTabs } from '@/utils/transform';

const useGO = () => {
  const navigate = useNavigate();
  const { routesByPath: routes } = useRouter() as { routesByPath: Routes };

  const { tabs, addTab } = useTabs();

  const go = (to: string) => {
    // If the tab does not exist, add a new tab.
    const isExist = tabs.some((tab) => tab.key === to);
    const route = routes[to];
    if (!isExist && route) {
      const tab = transformRouteToTabs(route);
      addTab(tab);
    }
    navigate({
      to,
    });
  };

  return go;
};

export default useGO;
