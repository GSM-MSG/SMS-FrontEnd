import axios from 'axios'
import env from '@lib/env'

const axiosApi = axios.create({ baseURL: env.NEXT_PUBLIC_SERVER_URL })

export default axiosApi
