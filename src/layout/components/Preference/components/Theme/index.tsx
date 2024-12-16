import { Flex } from 'antd';
import Box from '../Box';
import {
  ClockCircleOutlined,
  MoonOutlined,
  SunOutlined,
} from '@ant-design/icons';
import { useMemo } from 'react';
import { useAppStore } from '@/store';
import { useIntl } from 'react-intl';

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
        <Box
          key={item.key}
          id={item.key}
          text={intl.formatMessage({
            id: `app.preference.appearance.theme.${item.key}`,
          })}
          onClick={setTheme}
          active={theme === item.key}
        >
          {item.icon}
        </Box>
      ))}
    </Flex>
  );
}

export default Index;
