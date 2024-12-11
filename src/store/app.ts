/*
 * @Author: atwlee
 * @Date: 2024-12-11 11:24:42
 * @LastEditors: atwlee
 * @LastEditTime: 2024-12-11 11:34:23
 * @Description:
 * @FilePath: /rsbuild-project/src/store/app.ts
 */
import { create } from 'zustand';

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useAppStore = create<CounterState>((set) => ({
  count: 0,
  increment: () =>
    set((state: { count: number }) => ({ count: state.count + 1 })),
  decrement: () =>
    set((state: { count: number }) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
