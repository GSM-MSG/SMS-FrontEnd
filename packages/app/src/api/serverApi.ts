import axios from 'axios'
import env from '@lib/env'

/**
 * axios instance
 */
const api = axios.create({ baseURL: env.NEXT_PUBLIC_SERVER_URL })

export default api
