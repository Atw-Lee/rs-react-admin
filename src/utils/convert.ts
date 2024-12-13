/*
 * @Author: atwlee
 * @Date: 2024-12-11 15:06:20
 * @LastEditors: atwlee
 * @LastEditTime: 2024-12-12 10:22:22
 * @Description:
 * @FilePath: /rsbuild-project/src/utils/convert.ts
 */

import type {
  AnyRoute,
  Router,
  TrailingSlashOption,
} from '@tanstack/react-router';

import type { MenuProps } from 'antd';

/**
 * @description: 递归解析路由树
 * @param {any} routeTree
 * @return {*}
 */
type Route = AnyRoute & { label: React.ReactNode; icon: React.ReactNode };
export const parseRouteTree = (
  routeTree: Router<Route, TrailingSlashOption, boolean>['routesByPath'],
) => {
  const traverseRoutes = (
    routes: Record<string, Route>,
  ): MenuProps['items'] => {
    return Object.keys(routes).map((path) => {
      const route = routes[path];
      return {
        key: path,
        label: route.label || path,
        icon: route.icon,
      };
    });
  };

  return traverseRoutes(routeTree);
};
