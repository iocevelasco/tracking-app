import axios, { AxiosError } from 'axios'
import type { AxiosBaseQueryConfig, AxiosQueryData } from './api.utils'

function axiosQuery(baseQueryConfig: AxiosBaseQueryConfig) {
  const queryFn: AxiosQueryData = async (axiosConfig) => {
    try {
      const result = await axios({
        ...axiosConfig,
        data: axiosConfig.body,
        url: baseQueryConfig.baseUrl + axiosConfig.url,
      })

      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

  return queryFn
}

export default axiosQuery
