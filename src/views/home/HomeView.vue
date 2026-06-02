<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { useResponsive } from '@/hooks/useResponsive'

const { t } = useI18n()
const { isMobile } = useResponsive()
</script>

<template>
  <section class="home-page">
    <div class="home-page__content">
      <p class="home-page__label">{{ isMobile ? 'Mobile' : 'Desktop' }}</p>
      <h1>{{ t('app.welcome') }}</h1>
      <p>{{ t('app.description') }}</p>
      <div class="home-page__grid">
        <n-card size="small" title="Vue 3">Vite + TypeScript</n-card>
        <n-card size="small" title="State">Pinia + Cookie Session</n-card>
        <n-card size="small" title="Experience">Theme + i18n + Responsive</n-card>
      </div>
    </div>
  </section>
</template>
