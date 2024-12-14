import {
  FullscreenExitOutlined,
  FullscreenOutlined,
  GlobalOutlined,
  MoonOutlined,
  SettingOutlined,
  SunOutlined,
} from '@ant-design/icons';
import { Flex } from 'antd';
import { useFullscreenToggle } from '@/hooks/useFullscreenToggle';

function Index() {
  const iconStyle =
    'w-9 h-full flex justify-center text-[14px] text-white cursor-pointer hover:bg-[#ffffff40]';

  const { isFullscreen, toggle } = useFullscreenToggle();

  return (
    <Flex className="h-full">
      <SettingOutlined className={iconStyle} />
      <SunOutlined className={iconStyle} />
      {/* <MoonOutlined /> */}
      <GlobalOutlined className={iconStyle} />
      {isFullscreen ? (
        <FullscreenExitOutlined onClick={toggle} className={iconStyle} />
      ) : (
        <FullscreenOutlined onClick={toggle} className={iconStyle} />
      )}
    </Flex>
  );
}

export default Index;
