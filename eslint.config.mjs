/*
 * @Author: atwlee
 * @Date: 2024-12-10 15:06:45
 * @LastEditors: atwlee
 * @LastEditTime: 2024-12-10 18:03:45
 * @Description:
 * @FilePath: /rsbuild-project/eslint.config.mjs
 */
import { fixupConfigRules } from '@eslint/compat';
import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactJsx from 'eslint-plugin-react/configs/jsx-runtime.js';
import react from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';
import ts from 'typescript-eslint';

export default [
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...fixupConfigRules([
    {
      ...react,
      settings: {
        react: { version: 'detect' },
      },
    },
    reactJsx,
  ]),
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  { ignores: ['dist/', 'src/routeTree.gen.ts'] },
];
