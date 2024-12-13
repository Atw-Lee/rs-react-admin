/*
 * @Author: atwlee
 * @Date: 2024-12-11 14:55:33
 * @LastEditors: atwlee
 * @LastEditTime: 2024-12-11 17:49:57
 * @Description:
 * @FilePath: /rsbuild-project/src/layout/components/Sider/index.tsx
 */
import { Layout, Menu } from 'antd';
import { useRouter } from '@tanstack/react-router';
import { parseRouteTree } from '@/utils/convert';

const { Sider } = Layout;
function Index() {
  const router = useRouter();

  const menu = parseRouteTree(router.routesByPath);
  console.log('menu', router.routesByPath, menu);

  return (
    <Sider>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        items={menu}
      />
    </Sider>
  );
}

export default Index;
