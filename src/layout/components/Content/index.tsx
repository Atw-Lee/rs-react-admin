import { Tabs } from 'antd';
import { Outlet, useLocation } from '@tanstack/react-router';
import { Layout } from 'antd';
import useTabs from '@/hooks/useTabs';
import useGO from '@/hooks/useGO';

const { Content } = Layout;

function Index() {
  const { tabs } = useTabs();
  const go = useGO();
  const pathname = useLocation({
    select: (location) => location.pathname,
  });
  return (
    <Content>
      <Tabs
        activeKey={pathname}
        onChange={go}
        items={tabs.map((tab) => ({
          key: tab.key,
          label: tab.label,
          children: <Outlet />,
        }))}
      />
    </Content>
  );
}

export default Index;
