import { ReissueResponse } from '@features/auth/type/TokenResponse'
import env from '@lib/env'
import axios from 'axios'

const reissue = async (refreshToken: string) => {
  try {
    const { data } = await axios.patch<ReissueResponse>(
      '/auth',
      {},
      {
        headers: {
          'Refresh-Token': refreshToken,
        },
        baseURL: env.NEXT_PUBLIC_SERVER_URL,
      }
    )

    return data
  } catch (e) {
    return
  }
}

export default reissue
