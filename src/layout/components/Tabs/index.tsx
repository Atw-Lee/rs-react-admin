import { Outlet, useLocation } from '@tanstack/react-router';
import { Tabs } from 'antd';

function Index() {
  const { href } = useLocation();

  return (
    <>
      <Tabs />
      <Outlet />
    </>
  );
}

export default Index;
