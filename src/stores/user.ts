import { defineStore } from 'pinia'

import * as authApi from '@/api/auth'
import type { LoginPayload, UserProfile } from '@/api/auth'

interface UserState {
  profile: UserProfile | null
  initialized: boolean
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    profile: null,
    initialized: false,
  }),
  getters: {
    isLoggedIn: (state) => Boolean(state.profile),
  },
  actions: {
    async login(payload: LoginPayload) {
      await authApi.login(payload)
      await this.fetchProfile()
    },
    async fetchProfile() {
      this.profile = await authApi.getCurrentUser()
      this.initialized = true
    },
    async logout() {
      try {
        await authApi.logout()
      } finally {
        this.profile = null
        this.initialized = true
      }
    },
  },
})
