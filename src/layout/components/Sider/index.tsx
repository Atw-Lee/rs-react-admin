import { Layout, Menu } from 'antd';
import { useNavigate, useLocation } from '@tanstack/react-router';
import { useAppStore } from '@/store';
import { splitPathIntoSegments } from '@/utils/transform';
import { useTheme } from '@/hooks/useTheme';
const { Sider } = Layout;

function Index() {
  const menu = useAppStore((state) => state.menu);
  const navigate = useNavigate();
  const pathname = useLocation({
    select: (location) => location.pathname,
  });
  const [theme] = useTheme();

  const handleClick = ({ key }: { key: string }) => {
    navigate({
      to: key,
    });
  };

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
