/*
 * @Author: atwlee
 * @Date: 2024-12-11 13:51:42
 * @LastEditors: atwlee
 * @LastEditTime: 2024-12-13 10:03:19
 * @Description:
 * @FilePath: /rsbuild-project/src/layout/components/Footer/index.tsx
 */
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
