import { useEffect, useState, useCallback } from 'react';
import { useAppStore } from '@/store';

const useTheme = (): [
  'light' | 'dark',
  (theme: 'light' | 'dark' | 'system') => void,
] => {
  const theme = useAppStore((state) => state.theme);
  const setTheme = useAppStore((state) => state.setTheme);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  // 提取 updateTheme，监听系统主题变化
  const updateTheme = useCallback(() => {
    const isDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    setCurrentTheme(isDarkMode ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      setCurrentTheme('light');
    } else if (theme === 'dark') {
      setCurrentTheme('dark');
    } else {
      // 自动模式：监听系统主题
      updateTheme();
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', updateTheme);

      return () => {
        mediaQuery.removeEventListener('change', updateTheme);
      };
    }
  }, [theme, updateTheme]);

  return [currentTheme, setTheme];
};

export default useTheme;
