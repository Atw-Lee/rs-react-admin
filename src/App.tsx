import { RouterProvider } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, App as AntDApp } from 'antd';
import { IntlProvider } from 'react-intl';
import { i18nMessages } from '@/i18n';
import { theme } from '@/const/theme';
import { messageConfig, notificationConfig } from '@/const/antdConfig';
import { router } from '@/router';
import { ANTD_PREFIX_CLS, ANTD_ICON_PREFIX_CLS } from '@/const/const';
import { useAppStore } from '@/store';

const queryClient = new QueryClient();
const App = () => {
  const lang = useAppStore((state) => state.lang);
  return (
    <ConfigProvider
      theme={theme}
      prefixCls={ANTD_PREFIX_CLS}
      iconPrefixCls={ANTD_ICON_PREFIX_CLS}
    >
      <AntDApp message={messageConfig} notification={notificationConfig}>
        <IntlProvider locale={lang} messages={i18nMessages[lang]}>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </IntlProvider>
      </AntDApp>
    </ConfigProvider>
  );
};

export default App;
