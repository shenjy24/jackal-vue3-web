import { defineStore } from 'pinia'

import { appConfig, type AppLocale } from '@/config/app'
import { i18n } from '@/locales'

interface AppState {
  locale: AppLocale
}

const localeKey = 'jackal-locale'

function getInitialLocale(): AppLocale {
  const saved = localStorage.getItem(localeKey)
  if (saved === 'zh-CN' || saved === 'en-US') {
    return saved
  }
  return appConfig.defaultLocale
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    locale: getInitialLocale(),
  }),
  actions: {
    setLocale(locale: AppLocale) {
      this.locale = locale
      i18n.global.locale.value = locale
      localStorage.setItem(localeKey, locale)
      document.documentElement.lang = locale
    },
    initLocale() {
      this.setLocale(this.locale)
    },
  },
})
