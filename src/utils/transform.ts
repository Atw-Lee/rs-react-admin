import { ReactNode } from 'react';
import type {
  AnyRoute,
  Router,
  TrailingSlashOption,
} from '@tanstack/react-router';
import type { ItemType, SubMenuType } from 'antd/es/menu/interface';

type Route = AnyRoute & {
  name: ReactNode;
  icon: ReactNode;
  parentName?: ReactNode;
  parentIcon?: ReactNode;
};

export function transformRoutesToMenu(
  routes: Router<Route, TrailingSlashOption, boolean>['routesByPath'],
) {
  const menuMap: Record<string, ItemType> = {}; // 存储已处理的菜单节点
  const result: ItemType[] = []; // 最终返回的菜单树

  function addNode(path: string, staticData?: Record<string, React.ReactNode>) {
    const { name, icon, parentName, parentIcon } = staticData || {};

    // 如果当前路径节点已经存在，则返回
    if (menuMap[path]) return menuMap[path];

    // 创建当前节点
    const node: ItemType = {
      key: path,
      label: name || path,
      icon: icon || null,
      children: [], // 初始化为空数组，稍后再处理
    };

    // 将当前节点加入映射
    menuMap[path] = node;

    // 处理父路径
    const segments = path.split('/').filter(Boolean);
    if (segments.length > 1) {
      // 构造父路径
      const parentPath = `/${segments.slice(0, -1).join('/')}`;

      // 递归创建父节点
      const parentNode = addNode(parentPath, {
        name: parentName,
        icon: parentIcon,
      });

      // 将当前节点加入父节点的 children
      (parentNode as SubMenuType).children.push(node);
    } else {
      // 如果是顶层节点，直接加入结果
      result.push(node);
    }

    return node;
  }

  // 遍历所有路由
  for (const path in routes) {
    // 路由过滤逻辑：排除根路径和包含特殊字符的路径
    if (path === '/' || /[^a-zA-Z0-9/]/.test(path)) continue;

    const { staticData } = routes[path].options || {};
    addNode(path, staticData as Record<string, React.ReactNode>);
  }

  // 清理叶子节点的 children 属性
  function cleanChildren(node: ItemType) {
    if (!node) return;
    if ((node as SubMenuType).children.length > 0) {
      (node as SubMenuType).children.forEach(cleanChildren); // 递归清理子节点
    } else {
      delete (node as { children?: [] }).children; // 设置为 undefined
    }
  }

  result.forEach(cleanChildren); // 从顶层节点开始清理

  return result;
}

export function splitPathIntoSegments(path: string) {
  if (!path || typeof path !== 'string') {
    throw new Error('Invalid input: path must be a non-empty string');
  }

  const segments = [];
  let currentSegment = '';

  for (const part of path.split('/')) {
    if (part) {
      // 跳过空段
      currentSegment += `/${part}`;
      segments.push(currentSegment);
    }
  }

  return segments;
}
