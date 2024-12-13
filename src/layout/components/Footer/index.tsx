import { Layout } from 'antd';
import { FormattedMessage } from 'react-intl';
const { Footer } = Layout;

function Index() {
  return (
    <Footer className="text-center border-t border-gray-200 text-xs">
      <FormattedMessage id="copyright" />
    </Footer>
  );
}

export default Index;
