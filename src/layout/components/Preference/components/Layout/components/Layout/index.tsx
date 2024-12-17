import { Flex, Layout, theme } from 'antd';
import { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useAppStore } from '@/store';
import { OutlineBox } from '@/components';

const { Header, Footer, Sider, Content } = Layout;
function Index() {
  const intl = useIntl();
  const { token } = theme.useToken();
  const layout = useAppStore((state) => state.layout);
  const setLayout = useAppStore((state) => state.setLayout);

  const options = useMemo<{ key: typeof layout; layout: React.ReactNode }[]>(
    () => [
      {
        key: 'horizontal',
        layout: (
          <Layout className="rounded-[inherit] overflow-hidden">
            <Header
              className="h-7 leading-7 text-xs text-center"
              style={{ backgroundColor: token.colorPrimaryHover }}
            >
              Header
            </Header>
            <Content
              className="h-11 leading-[44px] text-center text-xs text-white"
              style={{ backgroundColor: token.colorPrimaryActive }}
            >
              Content
            </Content>
            <Footer
              className="h-7 leading-7 p-0 text-xs text-center text-white"
              style={{ backgroundColor: token.colorPrimaryHover }}
            >
              Footer
            </Footer>
          </Layout>
        ),
      },
      {
        key: 'side',
        layout: (
          <Layout className="rounded-[inherit] overflow-hidden relative">
            <Sider
              width="30%"
              className="pt-6 text-white"
              style={{ backgroundColor: token.colorPrimary }}
            >
              Side
            </Sider>
            <Layout>
              <Header
                className="h-7 leading-7 text-xs text-center"
                style={{ backgroundColor: token.colorPrimaryHover }}
              >
                Header
              </Header>
              <Content
                className="h-11 leading-[44px] text-center text-xs text-white"
                style={{ backgroundColor: token.colorPrimaryActive }}
              >
                Content
              </Content>
              <Footer
                className="h-7 leading-7 p-0 text-xs text-center text-white"
                style={{ backgroundColor: token.colorPrimaryHover }}
              >
                Footer
              </Footer>
            </Layout>
          </Layout>
        ),
      },
      {
        key: 'side-inline',
        layout: (
          <Layout className="rounded-[inherit] overflow-hidden relative">
            <Header
              className="h-7 leading-7 text-xs text-center"
              style={{ backgroundColor: token.colorPrimaryHover }}
            >
              Header
            </Header>
            <Layout>
              <Sider
                width="30%"
                className="pt-2 text-white"
                style={{ backgroundColor: token.colorPrimary }}
              >
                Side
              </Sider>
              <Content
                className="h-11 leading-[44px] text-center text-xs text-white"
                style={{ backgroundColor: token.colorPrimaryActive }}
              >
                Content
              </Content>
            </Layout>

            <Footer
              className="h-7 leading-7 p-0 text-xs text-center text-white"
              style={{ backgroundColor: token.colorPrimaryHover }}
            >
              Footer
            </Footer>
          </Layout>
        ),
      },
      {
        key: 'none',
        layout: (
          <Layout className="rounded-[inherit] overflow-hidden">
            <Content
              className="h-[100px] leading-[100px] text-white"
              style={{ backgroundColor: token.colorPrimaryActive }}
            >
              Content
            </Content>
          </Layout>
        ),
      },
    ],
    [token.colorPrimary, token.colorPrimaryActive, token.colorPrimaryHover],
  );

  return (
    <Flex gap={16} wrap>
      {options.map((item) => (
        <OutlineBox
          key={item.key}
          id={item.key}
          text={intl.formatMessage({
            id: `app.preference.layout.${item.key}`,
          })}
          onClick={setLayout}
          active={layout === item.key}
          className="flex-1 basis-[calc(50%-15px)]"
          outlineBoxClassName="py-1 px-1"
        >
          {item.layout}
        </OutlineBox>
      ))}
    </Flex>
  );
}

export default Index;
