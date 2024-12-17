import { useEffect } from 'react';
import { createRootRoute, useRouter } from '@tanstack/react-router';
import { transformRoutesToMenu } from '@/utils/transform';
import { useAppStore } from '@/store';
import Layout from '@/layout';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const router = useRouter();
  const setMenu = useAppStore((state) => state.setMenu);

  useEffect(() => {
    const menu = transformRoutesToMenu(router.routesByPath);
    setMenu(menu);
  }, [router.routesByPath, setMenu]);

  return <Layout />;
}
