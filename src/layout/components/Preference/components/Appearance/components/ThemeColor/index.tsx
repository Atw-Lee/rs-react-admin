import { Flex, theme } from 'antd';
import { CSSProperties, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useAppStore } from '@/store';
import OutlineBox from '@/components/OutlineBox';
const { useToken } = theme;

function Index() {
  const intl = useIntl();
  const { token } = useToken();
  const primaryColor = useAppStore((state) => state.primaryColor);
  const setPrimaryColor = useAppStore((state) => state.setPrimaryColor);

  const options = useMemo<{ key: string; color: CSSProperties['color'] }[]>(
    () => [
      {
        key: 'default',
        color: '#1677FF',
      },
      {
        key: 'dustRed',
        color: '#f5222d',
      },
      {
        key: 'volcano',
        color: '#fa541c',
      },
      {
        key: 'sunsetOrange',
        color: '#fa8c16',
      },
      {
        key: 'calendulaGold',
        color: '#faad14',
      },
      {
        key: 'sunriseYellow',
        color: '#fadb14',
      },
      {
        key: 'lime',
        color: '#a0d911',
      },
      {
        key: 'polarGreen',
        color: '#52c41a',
      },
      {
        key: 'cyan',
        color: '#13c2c2',
      },
      {
        key: 'geekBlue',
        color: '#2f54eb',
      },
      {
        key: 'goldenPurple',
        color: '#722ed1',
      },
      {
        key: 'magenta',
        color: '#eb2f96',
      },
    ],
    [],
  );

  return (
    <Flex gap={12} wrap>
      {options.map((item) => (
        <OutlineBox
          key={item.key}
          text={intl.formatMessage({
            id: `app.preference.appearance.primaryColor.${item.key}`,
          })}
          active={primaryColor === item.color}
          onClick={setPrimaryColor}
          id={item.color}
          className="flex-1 basis-[calc(33.33%-12px)]"
          outlineBoxClassName="py-3 leading-3"
        >
          <span
            className="inline-block w-5 h-5"
            style={{
              backgroundColor: item.color,
              borderRadius: token.borderRadius,
            }}
          />
        </OutlineBox>
      ))}
    </Flex>
  );
}

export default Index;
