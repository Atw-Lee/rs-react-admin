import {
  FullscreenExitOutlined,
  FullscreenOutlined,
  GlobalOutlined,
  MoonOutlined,
  SettingOutlined,
  SunOutlined,
} from '@ant-design/icons';
import { Flex, Dropdown } from 'antd';
import { useFullscreenToggle } from '@/hooks/useFullscreenToggle';
import { useMemo } from 'react';
import { i18nMessages } from '@/i18n';
import { useAppStore } from '@/store';
import { FormattedMessage } from 'react-intl';

function Index() {
  const iconStyle =
    'w-9 h-full flex justify-center text-[14px] text-white cursor-pointer hover:bg-[#ffffff40]';
  const { isFullscreen, toggle } = useFullscreenToggle();
  const lang = useAppStore((state) => state.lang);
  const setLang = useAppStore((state) => state.setLang);

  const langs = useMemo(() => {
    const items = [];
    for (const key in i18nMessages) {
      if (Object.prototype.hasOwnProperty.call(i18nMessages, key)) {
        items.push({
          key,
          label: <FormattedMessage id={key} defaultMessage={key} />,
        });
      }
    }
    return items;
  }, []);

  return (
    <Flex className="h-full">
      <SettingOutlined className={iconStyle} />
      <SunOutlined className={iconStyle} />
      {/* <MoonOutlined /> */}
      <Dropdown
        menu={{
          items: langs,
          selectable: true,
          defaultSelectedKeys: [lang],
          onSelect: ({ key }) => setLang(key as typeof lang),
        }}
        trigger={['click']}
      >
        <GlobalOutlined className={iconStyle} />
      </Dropdown>
      {isFullscreen ? (
        <FullscreenExitOutlined onClick={toggle} className={iconStyle} />
      ) : (
        <FullscreenOutlined onClick={toggle} className={iconStyle} />
      )}
    </Flex>
  );
}

export default Index;
