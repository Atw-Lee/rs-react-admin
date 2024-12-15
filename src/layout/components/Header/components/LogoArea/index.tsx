import { Flex } from 'antd';
import { FormattedMessage } from 'react-intl';
import logo from '@/static/images/logo.svg';

function Index() {
  return (
    <Flex>
      <img src={logo} alt="logo" className="w-8 mr-4" />
      <FormattedMessage id="app.name" />
    </Flex>
  );
}

export default Index;
