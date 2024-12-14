import { Flex } from 'antd';
import logo from '@/static/images/logo.svg';
import { FormattedMessage } from 'react-intl';

function Index() {
  return (
    <Flex>
      <img src={logo} alt="logo" className="w-8 mr-4" />
      <FormattedMessage id="AppName" />
    </Flex>
  );
}

export default Index;
