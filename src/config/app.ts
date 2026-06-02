export type AppLocale = 'zh-CN' | 'en-US'

export const appConfig = {
  title: import.meta.env.VITE_APP_TITLE || 'Jackal 用户端',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
  apiTimeout: Number(import.meta.env.VITE_API_TIMEOUT || 15000),
  defaultLocale: (import.meta.env.VITE_DEFAULT_LOCALE || 'zh-CN') as AppLocale,
}
