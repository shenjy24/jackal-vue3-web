import { post } from './http'

export interface LoginPayload {
  username: string
  password: string
}

export interface UserProfile {
  id: string
  username: string
  nickname: string
  avatar?: string
}

export function login(payload: LoginPayload) {
  return post<UserProfile, LoginPayload>('/auth/login', payload)
}

export function logout() {
  return post<void>('/auth/logout')
}

export function getCurrentUser() {
  return post<UserProfile>('/auth/profile')
}
