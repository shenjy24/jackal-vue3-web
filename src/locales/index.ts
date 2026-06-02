import { createI18n } from 'vue-i18n'

import { appConfig } from '@/config/app'

import enUS from './messages/en-US'
import zhCN from './messages/zh-CN'

export const i18n = createI18n({
  legacy: false,
  locale: appConfig.defaultLocale,
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS,
  },
})
