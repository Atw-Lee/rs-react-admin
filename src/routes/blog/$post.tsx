import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/blog/$post')({
  component: RouteComponent,
  //   Dynamic Route does not need to be added to the menu
  //   staticData: {
  //     name: <FormattedMessage id="/blog/$post" />,
  //     icon: '',
  //   },
});

function RouteComponent() {
  const { post } = Route.useParams();
  return <div>Hello "/blog/$post"! {post}</div>;
}
