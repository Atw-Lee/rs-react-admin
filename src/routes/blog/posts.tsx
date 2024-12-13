import { createFileRoute } from '@tanstack/react-router';
import { FormattedMessage } from 'react-intl';

export const Route = createFileRoute('/blog/posts')({
  component: RouteComponent,
  staticData: {
    parentName: <FormattedMessage id="/blog" />,
    name: <FormattedMessage id="/blog/posts" />,
    icon: '',
  },
});

function RouteComponent() {
  return <div>Hello "/blog/posts"!</div>;
}
