<script setup lang="ts">
import { darkTheme, type GlobalThemeOverrides } from 'naive-ui'
import { computed } from 'vue'

import { useTheme } from './hooks/useTheme'

const { theme } = useTheme()

const naiveTheme = computed(() => (theme.value === 'dark' ? darkTheme : null))

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#2f7d6d',
    primaryColorHover: '#3f927f',
    primaryColorPressed: '#246657',
    borderRadius: '8px',
  },
}
</script>

<template>
  <n-config-provider :theme="naiveTheme" :theme-overrides="themeOverrides">
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>
