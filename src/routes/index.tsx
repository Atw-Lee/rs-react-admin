/** root directory redirect to /dashboard */
import { createFileRoute, redirect } from '@tanstack/react-router';
import { DASHBOARD } from '@/const/const';
export const Route = createFileRoute('/')({
  loader() {
    throw redirect({ to: DASHBOARD });
  },
});
