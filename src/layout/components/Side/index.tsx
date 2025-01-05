import { Layout, Menu } from 'antd';
import { useLocation } from '@tanstack/react-router';
import { useAppStore } from '@/store';
import useTheme from '@/hooks/useTheme';
import useGO from '@/hooks/useGO';
const { Sider } = Layout;

function Index() {
  const menu = useAppStore((state) => state.menu);
  const pathname = useLocation({
    select: (location) => location.pathname,
  });
  const [theme] = useTheme();
  const go = useGO();

  const handleClick = ({ key }: { key: string }) => {
    go(key);
  };

  function splitPathIntoSegments(path: string) {
    if (!path || typeof path !== 'string') {
      throw new Error('Invalid input: path must be a non-empty string');
    }

    const segments = [];
    let currentSegment = '';

    for (const part of path.split('/')) {
      if (part) {
        // 跳过空段
        currentSegment += `/${part}`;
        segments.push(currentSegment);
      }
    }

    return segments;
  }

  return (
    <Sider>
      <Menu
        mode="inline"
        className="h-full"
        items={menu}
        onClick={handleClick}
        defaultSelectedKeys={[pathname]}
        defaultOpenKeys={splitPathIntoSegments(pathname)}
        theme={theme}
      />
    </Sider>
  );
}

export default Index;
