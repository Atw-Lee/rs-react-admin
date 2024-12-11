/*
 * @Author: atwlee
 * @Date: 2024-12-10 16:45:09
 * @LastEditors: atwlee
 * @LastEditTime: 2024-12-11 10:59:13
 * @Description:
 * @FilePath: /rsbuild-project/src/routes/__root.tsx
 */
import { createRootRoute, useNavigate } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Layout from '@/layout';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const navigate = useNavigate({ from: '/posts/$postId' });

  return (
    <>
      {/* <Link to="/">Home</Link>
        <Link
          to="/about"
          search={{
            name: 'PanSoft',
          }}
        >
          About
        </Link>
        <Link
          to="/posts/$postId"
          params={{
            postId: '10086',
          }}
        >
          person
        </Link> */}

      {/* <div
          onClick={() => {
            // 建议使用Link组件进行调整
            // 例如: 一个请求结束后导致了跳转使用该hook是必要的
            navigate({
              to: '/posts/$postId',
              params: {
                postId: '10010',
              },
            });
          }}
        >
          person
        </div> */}
      <Layout />
      <TanStackRouterDevtools position="bottom-right" />
      <ReactQueryDevtools />
    </>
  );
}
