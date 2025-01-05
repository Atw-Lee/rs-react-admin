import { Layout } from 'antd';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useAppStore } from '@/store';
import Header from './components/Header';
import Footer from './components/Footer';
import Side from './components/Side';
import Content from './components/Content';
import Preference from './components/Preference';

function Index() {
  const layout = useAppStore((state) => state.layout);

  return (
    <Layout className="h-[100vh] flex-row">
      {/** Layout is Side */}
      {layout === 'side' && <Side />}

      <Layout className="h-full flex-col">
        {layout !== 'none' && <Header />}
        <Layout className="flex-row">
          {/** Layout is Side-Inline */}
          {layout === 'side-inline' && <Side />}
          <Content />
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
