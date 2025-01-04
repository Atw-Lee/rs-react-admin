import { Layout } from 'antd';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useAppStore } from '@/store';
import Header from './components/Header';
import Footer from './components/Footer';
import Sider from './components/Sider';
import Tabs from './components/Tabs';
import Preference from './components/Preference';

const { Content } = Layout;

function Index() {
  const layout = useAppStore((state) => state.layout);

  return (
    <Layout className="h-[100vh] flex-row">
      {/** Side 布局的 Sider 放在最外层 */}
      {layout === 'side' && <Sider />}

      <Layout className="h-full flex-col">
        {layout !== 'none' && <Header />}

        <Layout className="flex-row">
          {/** Side-Inline 类型的 Sider 放在这里 */}
          {layout === 'side-inline' && <Sider />}

          {/* Content 区域 */}
          <Content>
            <Tabs />
          </Content>
        </Layout>

        {layout !== 'none' && <Footer />}
        <Preference />
        <TanStackRouterDevtools />
        <ReactQueryDevtools />
      </Layout>
    </Layout>
  );
}

export default Index;
