import { Layout, Menu } from 'antd';
import { useNavigate, useLocation } from '@tanstack/react-router';
import { useAppStore } from '@/store';
import { splitPathIntoSegments } from '@/utils/transform';
const { Sider } = Layout;

function Index() {
  const menu = useAppStore((state) => state.menu);
  const navigate = useNavigate();
  const pathname = useLocation({
    select: (location) => location.pathname,
  });

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
      />
    </Sider>
  );
}

export default Index;
