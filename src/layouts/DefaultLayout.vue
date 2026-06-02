<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import { useTheme } from '@/hooks/useTheme'
import { useAppStore } from '@/stores/app'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const { t } = useI18n()
const appStore = useAppStore()
const userStore = useUserStore()
const { theme, toggleTheme } = useTheme()

const isDark = computed(() => theme.value === 'dark')

onMounted(() => {
  appStore.initLocale()
})

async function handleLogout() {
  await userStore.logout()
  await router.push('/login')
}
</script>

<template>
  <n-layout class="app-shell">
    <n-layout-header bordered class="app-header">
      <div class="app-header__brand">{{ t('app.name') }}</div>
      <n-space align="center" :size="12" class="app-header__actions">
        <n-button text @click="appStore.setLocale(appStore.locale === 'zh-CN' ? 'en-US' : 'zh-CN')">
          {{ appStore.locale === 'zh-CN' ? 'EN' : '中文' }}
        </n-button>
        <n-switch :value="isDark" @update:value="toggleTheme">
          <template #checked>{{ t('theme.dark') }}</template>
          <template #unchecked>{{ t('theme.light') }}</template>
        </n-switch>
        <n-button v-if="userStore.isLoggedIn" tertiary @click="handleLogout">
          {{ t('auth.logout') }}
        </n-button>
        <n-button v-else tertiary @click="router.push('/login')">
          {{ t('auth.login') }}
        </n-button>
      </n-space>
    </n-layout-header>
    <n-layout-content class="app-main">
      <router-view />
    </n-layout-content>
  </n-layout>
</template>
