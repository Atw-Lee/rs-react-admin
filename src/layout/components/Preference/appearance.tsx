import { Flex } from 'antd';
import Box from './components/Box';
import {
  ClockCircleOutlined,
  MoonOutlined,
  SunOutlined,
} from '@ant-design/icons';
import { FormattedMessage, useIntl } from 'react-intl';

function Index() {
  const flexCls = 'flex flex-col py-4';
  const h3Cls = 'mb-3 font-semibold leading-none tracking-tight';
  const intl = useIntl();

  return (
    <Flex className="mt-2" vertical>
      <Flex className={flexCls}>
        <h3 className={h3Cls}>
          <FormattedMessage id="app.preference.appearance.theme" />
        </h3>
        <Flex gap={20}>
          <Box
            text={intl.formatMessage({
              id: 'app.preference.appearance.theme.light',
            })}
          >
            <SunOutlined className="text-lg" />
          </Box>
          <Box
            text={intl.formatMessage({
              id: 'app.preference.appearance.theme.dark',
            })}
          >
            <MoonOutlined className="text-lg" />
          </Box>
          <Box
            text={intl.formatMessage({
              id: 'app.preference.appearance.theme.system',
            })}
          >
            <ClockCircleOutlined className="text-lg" />
          </Box>
        </Flex>
      </Flex>
      <Flex className={flexCls}>
        <h3 className={h3Cls}>内置主题</h3>
      </Flex>
      <Flex className={flexCls}>
        <h3 className={h3Cls}>圆角</h3>
      </Flex>
    </Flex>
  );
}

export default Index;
