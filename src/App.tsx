import { useMemo } from 'react';
import { RouterProvider } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, App as AntDApp, theme as AntTheme } from 'antd';
import { IntlProvider } from 'react-intl';
import { i18nMessages } from '@/i18n';
import { defaultTheme } from '@/const/theme';
import { messageConfig, notificationConfig } from '@/const/antdConfig';
import { router } from '@/router';
import { ANTD_PREFIX_CLS, ANTD_ICON_PREFIX_CLS } from '@/const/const';
import { useAppStore } from '@/store';
import useTheme from '@/hooks/useTheme';

const queryClient = new QueryClient();
const App = () => {
  const lang = useAppStore((state) => state.lang);
  const [theme] = useTheme();
  const algorithm = useMemo(
    () => AntTheme[theme === 'light' ? 'defaultAlgorithm' : 'darkAlgorithm'],
    [theme],
  );

  return (
    <ConfigProvider
      theme={{ ...defaultTheme, algorithm }}
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
