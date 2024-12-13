import { createRootRoute, useRouter } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Layout from '@/layout';
import { transformRoutesToMenu } from '@/utils/transform';
import { useEffect } from 'react';
import { useAppStore } from '@/store';

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

  return (
    <>
      <Layout />
      <TanStackRouterDevtools position="bottom-right" />
      <ReactQueryDevtools />
    </>
  );
}
