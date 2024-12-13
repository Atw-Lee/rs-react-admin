import { createFileRoute } from '@tanstack/react-router';
import { FormattedMessage } from 'react-intl';

export const Route = createFileRoute('/overview/analytics')({
  component: RouteComponent,
  staticData: {
    parentName: <FormattedMessage id="/overview" />,
    name: <FormattedMessage id="/overview/analytics" />,
    icon: '',
  },
});

function RouteComponent() {
  return <div>Hello "/overview/analytics"!</div>;
}
