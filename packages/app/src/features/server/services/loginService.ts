import serverApi from '@api/serverApi'
import { TokenResponse } from '@features/auth/type/TokenResponse'

const loginService = async (code: string) => {
  return serverApi.post<TokenResponse>(`${process.env.SERVER_URL}/auth`, {
    code,
  })
}

export default loginService
