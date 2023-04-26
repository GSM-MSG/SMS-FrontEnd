import { serverApi } from '@api'
import { isAxiosError } from 'axios'

const login = async (code: string) => {
  try {
    await serverApi.post('/auth', { code })
  } catch (e) {
    if (!isAxiosError(e)) alert('알 수 없는 에러 발생')
    alert('관리자 문의 ㄱㄱ')
  }
}

export default login
