/*
 * @Author: atwlee
 * @Date: 2024-12-10 16:46:03
 * @LastEditors: atwlee
 * @LastEditTime: 2024-12-10 19:24:44
 * @Description:
 * @FilePath: /rsbuild-project/src/routes/about.tsx
 */
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: AboutComponent,
});

function AboutComponent() {
  const { name } = Route.useSearch();
  return (
    <div className="p-2">
      <h3>About {name}</h3>
    </div>
  );
}
