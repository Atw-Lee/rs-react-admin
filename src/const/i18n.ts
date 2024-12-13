/*
 * @Author: atwlee
 * @Date: 2024-12-11 10:42:12
 * @LastEditors: atwlee
 * @LastEditTime: 2024-12-12 08:57:41
 * @Description:
 * @FilePath: /rsbuild-project/src/const/i18n.ts
 */
import enMessages from '@/i18n/en-US.json';
import zhMessages from '@/i18n/zh-CN.json';
import enRoutesMessages from '@/i18n/routes/en-US.json';
import zhRoutesMessages from '@/i18n/routes/zh-CN.json';

export const i18nMessages = {
  'en-US': Object.assign(enMessages, enRoutesMessages),
  'zh-CNS': Object.assign(zhMessages, zhRoutesMessages),
};
