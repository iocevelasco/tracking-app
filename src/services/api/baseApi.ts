import { createApi } from '@reduxjs/toolkit/query/react'
import axiosQuery from './axiosBaseQuery'
import { baseUrl } from './api.utils'

export const baseApi = createApi({
  baseQuery: axiosQuery({
    baseUrl,
  }),
  endpoints: () => ({}),
  tagTypes: [],
})
