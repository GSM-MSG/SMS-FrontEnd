import serverApi from '@api/serverApi'
import { TokenResponse } from '@features/auth/type/TokenResponse'

const reissueService = async (refreshToken: string) => {
  return serverApi.patch<TokenResponse>(
    `${process.env.SERVER_URL}/auth`,
    {},
    { headers: { 'Refresh-Token': refreshToken } }
  )
}

export default reissueService
