import axios from 'axios'
import env from '@lib/env'

/**
 * axios instance
 */
const api = axios.create({ baseURL: env.SERVER_URL })

export default api
