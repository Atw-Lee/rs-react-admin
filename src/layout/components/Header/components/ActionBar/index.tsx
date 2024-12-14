import {
  FullscreenExitOutlined,
  FullscreenOutlined,
  GlobalOutlined,
  MoonOutlined,
  SettingOutlined,
  SunOutlined,
} from '@ant-design/icons';
import { Flex } from 'antd';

function Index() {
  const iconStyle =
    'w-9 h-full flex justify-center text-[14px] text-white cursor-pointer hover:bg-[#ffffff40]';
  return (
    <Flex className="h-full">
      <SettingOutlined className={iconStyle} />
      <SunOutlined className={iconStyle} />
      {/* <MoonOutlined /> */}
      <GlobalOutlined className={iconStyle} />
      <FullscreenOutlined className={iconStyle} />
      {/* <FullscreenExitOutlined /> */}
    </Flex>
  );
}

export default Index;
