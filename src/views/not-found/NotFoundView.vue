<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <section class="not-found-page">
    <div>
      <strong>404</strong>
      <h1>{{ t('page.notFound') }}</h1>
      <n-button type="primary" @click="router.push('/')">{{ t('page.backHome') }}</n-button>
    </div>
  </section>
</template>
