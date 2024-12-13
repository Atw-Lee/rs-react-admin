import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginLess } from '@rsbuild/plugin-less';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { TanStackRouterRspack } from '@tanstack/router-plugin/rspack';
import customScaffolding from './src/const/customScaffolding';

export default defineConfig({
  plugins: [pluginReact(), pluginLess(), pluginSvgr()],
  html: {
    title: 'Rs React Admin',
    favicon: './public/favicon.svg',
  },
  server: {
    base: '/baseUrl',
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  tools: {
    rspack: {
      plugins: [
        TanStackRouterRspack({
          customScaffolding,
        }),
      ],
    },
  },
});
