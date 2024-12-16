import { Flex } from 'antd';
import {
  ClockCircleOutlined,
  MoonOutlined,
  SunOutlined,
} from '@ant-design/icons';
import { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useAppStore } from '@/store';
import OutlineBox from '@/components/OutlineBox';

function Index() {
  const intl = useIntl();
  const theme = useAppStore((state) => state.theme);
  const setTheme = useAppStore((state) => state.setTheme);

  const themeOptions = useMemo<{ key: typeof theme; icon: React.ReactNode }[]>(
    () => [
      {
        key: 'light',
        icon: <SunOutlined className="text-lg" />,
      },
      {
        key: 'dark',
        icon: <MoonOutlined className="text-lg" />,
      },
      {
        key: 'system',
        icon: <ClockCircleOutlined className="text-lg" />,
      },
    ],
    [],
  );

  return (
    <Flex gap={20}>
      {themeOptions.map((item) => (
        <OutlineBox
          key={item.key}
          id={item.key}
          text={intl.formatMessage({
            id: `app.preference.appearance.theme.${item.key}`,
          })}
          onClick={setTheme}
          active={theme === item.key}
        >
          {item.icon}
        </OutlineBox>
      ))}
    </Flex>
  );
}

export default Index;
