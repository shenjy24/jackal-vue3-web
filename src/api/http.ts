import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios'

import { appConfig } from '@/config/app'

export interface ApiResponse<T = unknown> {
  code: number
  data: T
  message?: string
}

export interface RequestOptions extends AxiosRequestConfig {
  silent?: boolean
}

const http: AxiosInstance = axios.create({
  baseURL: appConfig.apiBaseUrl,
  timeout: appConfig.apiTimeout,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

http.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => response,
  (error: AxiosError<ApiResponse>) => {
    const message = error.response?.data?.message || error.message || 'Request failed'
    return Promise.reject(new Error(message))
  },
)

export async function post<T = unknown, D = Record<string, unknown>>(
  url: string,
  data?: D,
  options?: RequestOptions,
): Promise<T> {
  const response = await http.post<ApiResponse<T>>(url, data ?? {}, options)
  return response.data.data
}

export { http }
