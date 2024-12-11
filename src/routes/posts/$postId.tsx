/*
 * @Author: atwlee
 * @Date: 2024-12-10 17:23:58
 * @LastEditors: atwlee
 * @LastEditTime: 2024-12-10 19:19:40
 * @Description:
 * @FilePath: /rsbuild-project/src/routes/posts/$postId.tsx
 */
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { postId } = Route.useParams();
  return (
    <div className="p-2">
      <h3>Hello {postId}!</h3>
    </div>
  );
}
