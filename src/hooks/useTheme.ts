import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

import { useThemeStore } from '@/stores/theme'

export function useTheme() {
  const themeStore = useThemeStore()
  const { theme } = storeToRefs(themeStore)

  onMounted(() => {
    themeStore.initTheme()
  })

  return {
    theme,
    setTheme: themeStore.setTheme,
    toggleTheme: themeStore.toggleTheme,
  }
}
