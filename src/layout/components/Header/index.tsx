import { Layout } from 'antd';
import logo from '@/static/images/logo.svg';
import { FormattedMessage } from 'react-intl';
const { Header } = Layout;

function Index() {
  return (
    <Header className="flex items-center">
      <img src={logo} alt="logo" className="w-8 mr-4" />
      <FormattedMessage id="AppName" />
    </Header>
  );
}

export default Index;
