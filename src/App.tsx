/*
 * @Author: atwlee
 * @Date: 2024-12-10 15:06:45
 * @LastEditors: atwlee
 * @LastEditTime: 2024-12-11 17:37:10
 * @Description:
 * @FilePath: /rsbuild-project/src/App.tsx
 */
import { RouterProvider } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import { i18nMessages } from '@/const/i18n';
import { theme } from '@/const/theme';
import { router } from '@/router';
import { useState } from 'react';

const queryClient = new QueryClient();
const App = () => {
  const [locale] = useState<keyof typeof i18nMessages>('en-US');
  return (
    <ConfigProvider theme={theme}>
      <IntlProvider locale={locale} messages={i18nMessages[locale]}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </IntlProvider>
    </ConfigProvider>
  );
};

export default App;
