<script setup lang="ts">
import type { FormInst, FormRules } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import { useAppStore } from '@/stores/app'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const message = useMessage()
const { t } = useI18n()
const appStore = useAppStore()
const userStore = useUserStore()
const formRef = ref<FormInst | null>(null)
const loading = ref(false)

const form = reactive({
  username: '',
  password: '',
})

const rules: FormRules = {
  username: [{ required: true, message: t('auth.usernamePlaceholder'), trigger: 'blur' }],
  password: [{ required: true, message: t('auth.passwordPlaceholder'), trigger: 'blur' }],
}

async function handleSubmit() {
  await formRef.value?.validate()
  loading.value = true

  try {
    await userStore.login(form)
    await router.push('/')
  } catch (error) {
    message.error(error instanceof Error ? error.message : 'Login failed')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="login-page">
    <div class="login-page__panel">
      <div class="login-page__header">
        <h1>{{ t('auth.login') }}</h1>
        <n-button text @click="appStore.setLocale(appStore.locale === 'zh-CN' ? 'en-US' : 'zh-CN')">
          {{ appStore.locale === 'zh-CN' ? 'EN' : '中文' }}
        </n-button>
      </div>
      <n-form ref="formRef" :model="form" :rules="rules" label-placement="top">
        <n-form-item path="username" :label="t('auth.username')">
          <n-input v-model:value="form.username" :placeholder="t('auth.usernamePlaceholder')" />
        </n-form-item>
        <n-form-item path="password" :label="t('auth.password')">
          <n-input
            v-model:value="form.password"
            type="password"
            show-password-on="click"
            :placeholder="t('auth.passwordPlaceholder')"
          />
        </n-form-item>
        <n-button block type="primary" :loading="loading" @click="handleSubmit">
          {{ loading ? t('auth.loggingIn') : t('auth.submit') }}
        </n-button>
      </n-form>
      <p class="login-page__tip">{{ t('auth.demoTip') }}</p>
    </div>
  </section>
</template>
