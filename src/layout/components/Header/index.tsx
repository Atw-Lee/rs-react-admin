import { Layout } from 'antd';
import LogoArea from './components/LogoArea';
import ActionBar from './components/ActionBar';
const { Header } = Layout;

function Index() {
  return (
    <Header className="flex items-center">
      <LogoArea />
      <div className="flex h-full min-w-0 flex-1 items-center" />
      <ActionBar />
    </Header>
  );
}

export default Index;
