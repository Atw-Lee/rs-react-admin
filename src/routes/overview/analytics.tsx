import { BarChartOutlined, GlobalOutlined } from '@ant-design/icons';
import { createFileRoute } from '@tanstack/react-router';
import { FormattedMessage } from 'react-intl';

export const Route = createFileRoute('/overview/analytics')({
  component: RouteComponent,
  staticData: {
    parentName: <FormattedMessage id="/overview" />,
    parentIcon: <GlobalOutlined />,
    name: <FormattedMessage id="/overview/analytics" />,
    icon: <BarChartOutlined />,
  },
});

function RouteComponent() {
  return <div>Hello "/overview/analytics"!</div>;
}
