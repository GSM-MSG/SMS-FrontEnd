import axios from 'axios'
import qs from 'qs'
import ParamsFilter from '@lib/ParamsFilter'

const axiosApi = axios.create({
  paramsSerializer: (params) =>
    qs.stringify(ParamsFilter(params), { arrayFormat: 'repeat' }),
})

export default axiosApi
