import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import { AxiosRequestConfig } from 'axios'
import type { SerializedError } from '@reduxjs/toolkit'

export const baseUrl = 'https://test.dupaco.com/api' as string

export type BackendError = {
  status?: number
  data: string | { ModelState?: Record<string, string[]>; Message?: string }
}

export type APIError = BackendError | SerializedError | undefined

export interface AxiosBaseQueryConfig {
  baseUrl: string
}

export type AxiosQueryData = BaseQueryFn<
  {
    url: string
    method?: AxiosRequestConfig['method']
    body?: AxiosRequestConfig['data']
    params?: AxiosRequestConfig['params']
    headers?: AxiosRequestConfig['headers']
  },
  unknown,
  BackendError
>
