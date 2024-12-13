import { createFileRoute } from '@tanstack/react-router'
import { FormattedMessage } from 'react-intl'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
  staticData: {
    name: <FormattedMessage id="/dashboard" />,
    icon: '',
  },
})

function RouteComponent() {
  return <div>Hello "/dashboard"!</div>
}
