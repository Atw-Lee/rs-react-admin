import { Outlet } from '@tanstack/react-router';
import { Breadcrumb, Layout } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import Sider from './components/Sider';
import Preference from './components/Preference';

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
      <Preference />
    </Layout>
  );
}

export default Index;
