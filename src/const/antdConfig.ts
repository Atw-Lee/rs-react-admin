import { ANTD_PREFIX_CLS } from '@/const/const';
import type { ConfigOptions } from 'antd/es/message/interface';
import type { NotificationConfig } from 'antd/es/notification/interface';
export const messageConfig: ConfigOptions = {
  prefixCls: ANTD_PREFIX_CLS,
  top: 100,
  duration: 2,
  maxCount: 1,
};

export const notificationConfig: NotificationConfig = {
  prefixCls: ANTD_PREFIX_CLS,
  top: 100,
  duration: 2,
  maxCount: 1,
};
