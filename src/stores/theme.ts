import { defineStore } from 'pinia'

export type AppTheme = 'light' | 'dark'

interface ThemeState {
  theme: AppTheme
}

const themeKey = 'jackal-theme'

function getInitialTheme(): AppTheme {
  const saved = localStorage.getItem(themeKey)
  if (saved === 'light' || saved === 'dark') {
    return saved
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export const useThemeStore = defineStore('theme', {
  state: (): ThemeState => ({
    theme: getInitialTheme(),
  }),
  actions: {
    setTheme(theme: AppTheme) {
      this.theme = theme
      localStorage.setItem(themeKey, theme)
      document.documentElement.dataset.theme = theme
    },
    toggleTheme() {
      this.setTheme(this.theme === 'dark' ? 'light' : 'dark')
    },
    initTheme() {
      this.setTheme(this.theme)
    },
  },
})
