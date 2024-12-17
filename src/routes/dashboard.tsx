import { DashboardOutlined } from '@ant-design/icons';
import { createFileRoute } from '@tanstack/react-router';
import { Input } from 'antd';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
  staticData: {
    name: <FormattedMessage id="/dashboard" />,
    icon: <DashboardOutlined />,
  },
});

function RouteComponent() {
  const [value, setValue] = useState('');
  return (
    <div>
      Hello "/dashboard"!
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
