/*
 * @Author: atwlee
 * @Date: 2024-12-10 15:06:45
 * @LastEditors: atwlee
 * @LastEditTime: 2024-12-11 10:02:10
 * @Description:
 * @FilePath: /rsbuild-project/rsbuild.config.ts
 */
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginLess } from '@rsbuild/plugin-less';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { TanStackRouterRspack } from '@tanstack/router-plugin/rspack';

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
      plugins: [TanStackRouterRspack()],
    },
  },
});
