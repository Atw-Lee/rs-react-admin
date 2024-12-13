/*
 * @Author: atwlee
 * @Date: 2024-12-11 10:56:04
 * @LastEditors: atwlee
 * @LastEditTime: 2024-12-11 17:07:41
 * @Description:
 * @FilePath: /rsbuild-project/src/layout/index.tsx
 */
import { Outlet } from '@tanstack/react-router';
import { Breadcrumb, Layout } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import Sider from './components/Sider';

const { Content } = Layout;

function Index() {
  return (
    <Layout className="h-[100vh]">
      <Header />
      <Layout>
        <Sider />
        <Layout>
          <Breadcrumb
            items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
          />
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </Layout>
  );
}

export default Index;
