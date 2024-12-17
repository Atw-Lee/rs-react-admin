import { Flex } from 'antd';
import { FormattedMessage } from 'react-intl';
import { useAppStore } from '@/store';
import classNames from 'classnames';
import Layout from './components/Layout';

function Index({ className }: { className: string }) {
  const flexCls = 'flex flex-col py-4';
  const h3Cls = 'mb-2 h-6 font-semibold tracking-tight';
  const primaryColor = useAppStore((state) => state.primaryColor);
  const setPrimaryColor = useAppStore((state) => state.setPrimaryColor);

  return (
    <Flex className={classNames([className, 'mt-2'])} vertical>
      <Flex className={flexCls}>
        <h3 className={h3Cls}>
          <FormattedMessage id="app.preference.layout" />
        </h3>
        <Layout />
      </Flex>
    </Flex>
  );
}

export default Index;
