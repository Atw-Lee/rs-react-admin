import { useEffect } from 'react';
import {
  createRootRoute,
  useRouter,
  useLocation,
} from '@tanstack/react-router';
import { transformRoutesToMenu } from '@/utils/transform';
import { useAppStore } from '@/store';
import Layout from '@/layout';
import useTabs from '@/hooks/useTabs';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const router = useRouter();
  const pathname = useLocation({
    select: (location) => location.pathname,
  });
  const setMenu = useAppStore((state) => state.setMenu);

  const { listenerPathname } = useTabs();

  useEffect(() => {
    const menu = transformRoutesToMenu(router.routesByPath);
    setMenu(menu);
  }, [router.routesByPath, setMenu]);

  useEffect(() => {
    listenerPathname(pathname);
  }, [listenerPathname, pathname]);

  return <Layout />;
}
