/*
 * @Author: atwlee
 * @Date: 2024-12-11 10:56:04
 * @LastEditors: atwlee
 * @LastEditTime: 2024-12-11 10:57:03
 * @Description:
 * @FilePath: /rsbuild-project/src/layout/index.tsx
 */
import React from 'react';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { Breadcrumb, Layout, Menu } from 'antd';
import { FormattedMessage } from 'react-intl';
import type { MenuProps } from 'antd';
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import logo from '@/static/images/logo.svg';
const { Header, Content, Sider } = Layout;
const items2: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

function Index() {
  return (
    <Layout className="h-[100vh]">
      <Header className="flex items-center">
        <img src={logo} alt="logo" className="w-[30px]" />
        <FormattedMessage id="AppName" />
      </Header>
      <Layout>
        <Sider>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb
            items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
            style={{ margin: '16px 0' }}
          />
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Index;
