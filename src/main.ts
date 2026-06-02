import { createApp } from 'vue'
import {
  create,
  NButton,
  NCard,
  NConfigProvider,
  NForm,
  NFormItem,
  NInput,
  NLayout,
  NLayoutContent,
  NLayoutHeader,
  NMessageProvider,
  NSpace,
  NSwitch,
} from 'naive-ui'

import App from './App.vue'
import { i18n } from './locales'
import { router } from './router'
import { pinia } from './stores'
import './styles/main.scss'

const naive = create({
  components: [
    NButton,
    NCard,
    NConfigProvider,
    NForm,
    NFormItem,
    NInput,
    NLayout,
    NLayoutContent,
    NLayoutHeader,
    NMessageProvider,
    NSpace,
    NSwitch,
  ],
})

createApp(App).use(pinia).use(router).use(i18n).use(naive).mount('#app')
