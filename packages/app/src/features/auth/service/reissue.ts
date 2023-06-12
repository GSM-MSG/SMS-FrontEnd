import { ReissueResponse } from '@features/auth/type/TokenResponse'
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
      }
    )

    return data
  } catch (e) {
    return
  }
}

export default reissue
