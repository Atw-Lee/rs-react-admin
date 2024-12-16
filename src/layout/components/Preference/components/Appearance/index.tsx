import { Flex } from 'antd';
import { FormattedMessage } from 'react-intl';
import Theme from './components/Theme';

function Index() {
  const flexCls = 'flex flex-col py-4';
  const h3Cls = 'mb-3 font-semibold leading-none tracking-tight';

  return (
    <Flex className="mt-2" vertical>
      <Flex className={flexCls}>
        <h3 className={h3Cls}>
          <FormattedMessage id="app.preference.appearance.theme" />
        </h3>
        <Theme />
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
