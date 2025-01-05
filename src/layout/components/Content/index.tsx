import { Tabs } from 'antd';
import { Outlet, useLocation } from '@tanstack/react-router';
import { Layout } from 'antd';
import useTabs from '@/hooks/useTabs';
import useGO from '@/hooks/useGO';
import { useAppStore } from '@/store';
import './index.less';

const { Content } = Layout;

function Index() {
  const { tabs } = useTabs();
  const go = useGO();
  const pathname = useLocation({
    select: (location) => location.pathname,
  });
  const layout = useAppStore((state) => state.layout);

  if (layout === 'none') return <Outlet />;
  return (
    <Content>
      <Tabs
        className="h-full"
        activeKey={pathname}
        onChange={go}
        type="editable-card"
        hideAdd
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
