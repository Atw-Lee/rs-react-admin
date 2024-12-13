/** root directory redirect to /dashboard */
import { createFileRoute, redirect } from '@tanstack/react-router';
export const Route = createFileRoute('/')({
  loader() {
    throw redirect({ to: '/dashboard' });
  },
});
