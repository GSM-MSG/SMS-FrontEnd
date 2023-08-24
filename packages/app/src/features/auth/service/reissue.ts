import { ReissueResponse } from '@features/auth/type/TokenResponse'
import axios from 'axios'

const reissue = async () => {
  try {
    const { data } = await axios.patch<ReissueResponse>('/api/reissue')

    return data
  } catch (e) {
    return
  }
}

export default reissue
