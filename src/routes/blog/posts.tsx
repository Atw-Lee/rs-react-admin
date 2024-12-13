import { BookOutlined, ReadOutlined } from '@ant-design/icons';
import { createFileRoute } from '@tanstack/react-router';
import { FormattedMessage } from 'react-intl';

export const Route = createFileRoute('/blog/posts')({
  component: RouteComponent,
  staticData: {
    parentName: <FormattedMessage id="/blog" />,
    parentIcon: <BookOutlined />,
    name: <FormattedMessage id="/blog/posts" />,
    icon: <ReadOutlined />,
  },
});

function RouteComponent() {
  return <div>Hello "/blog/posts"!</div>;
}
