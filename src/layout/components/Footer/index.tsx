import { Layout, theme } from 'antd';
import { FormattedMessage } from 'react-intl';
const { Footer } = Layout;
const { useToken } = theme;

function Index() {
  const { token } = useToken();

  return (
    <Footer
      className="text-center border-t text-xs"
      style={{ borderTopColor: token.colorSplit }}
    >
      <FormattedMessage id="app.copyright" />
    </Footer>
  );
}

export default Index;
