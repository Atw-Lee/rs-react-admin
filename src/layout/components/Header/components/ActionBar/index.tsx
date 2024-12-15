import {
  FullscreenExitOutlined,
  FullscreenOutlined,
  GlobalOutlined,
  MoonOutlined,
  SettingOutlined,
  SunOutlined,
} from '@ant-design/icons';
import { Flex, Dropdown } from 'antd';
import { useCallback, useMemo } from 'react';
import { i18nMessages } from '@/i18n';
import { useAppStore } from '@/store';
import { FormattedMessage } from 'react-intl';
import useFullscreenToggle from '@/hooks/useFullscreenToggle';
import useTheme from '@/hooks/useTheme';
import useThemeAnimation from '@/hooks/useThemeAnimation';
const iconStyle =
  'w-9 h-full flex justify-center text-[14px] text-white cursor-pointer hover:bg-[#ffffff40]';
function Index() {
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
  const [theme, setTheme] = useTheme();
  const toggleAnimationTheme = useThemeAnimation();
  const toggleTheme = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      setTheme(theme === 'light' ? 'dark' : 'light');
      toggleAnimationTheme(e, theme === 'dark');
    },
    [setTheme, theme, toggleAnimationTheme],
  );

  return (
    <Flex className="h-full">
      <SettingOutlined className={iconStyle} />
      {theme === 'light' ? (
        <MoonOutlined className={iconStyle} onClick={toggleTheme} />
      ) : (
        <SunOutlined className={iconStyle} onClick={toggleTheme} />
      )}
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
