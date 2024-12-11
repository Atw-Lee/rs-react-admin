/*
 * @Author: atwlee
 * @Date: 2024-12-10 16:45:56
 * @LastEditors: atwlee
 * @LastEditTime: 2024-12-11 11:32:36
 * @Description:
 * @FilePath: /rsbuild-project/src/routes/index.tsx
 */
import { createFileRoute } from '@tanstack/react-router';
import { useAppStore } from '@/store';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  const { count, increment, decrement, reset } = useAppStore();
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <h4>Count: {count}</h4>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
