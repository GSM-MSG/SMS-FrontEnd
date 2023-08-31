import axios from 'axios'
import qs from 'qs'
import ParamsFilter from '@lib/ParamsFilter'
import axiosRetry from 'axios-retry'

const axiosApi = axios.create({
  'axios-retry': {
    retries: 3,
    retryCondition: (e) => e.response?.status === 401,
  },
  paramsSerializer: (params) =>
    qs.stringify(ParamsFilter(params), { arrayFormat: 'repeat' }),
})

axiosRetry(axiosApi, {
  retries: 3,
  retryDelay: (retryCount) => {
    return retryCount * 1000
  },
  shouldResetTimeout: true,
  retryCondition: (error) => {
    return (
      axiosRetry.isNetworkOrIdempotentRequestError(error) ||
      error.response?.status === 401
    )
  },
})

export default axiosApi
