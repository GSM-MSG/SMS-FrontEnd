import { useEffect } from 'react'
import reissue from '@features/auth/service/reissue'
import useLocalStorage from '@features/global/hooks/useLocalStorage'
import Token from '@lib/Token'

const useAutoReissue = () => {
  const [access, setAccess] = useLocalStorage<string>(
    Token.ACCESS_TOKEN_EXP,
    ''
  )
  const [refresh, setRefresh] = useLocalStorage<string>(
    Token.REFRESH_TOKEN_EXP,
    ''
  )

  useEffect(() => {
    if (!access && !refresh) return
    if (new Date(refresh) <= new Date()) {
      setAccess('')
      return
    }

    const beforeMinute = access
      ? new Date(access).getTime() - new Date().getTime() - 10000
      : 0

    const timeout = setTimeout(async () => {
      const res = await reissue()
      if (!res) setAccess('')

      setAccess(res?.accessTokenExp || '')
      setRefresh(res?.refreshTokenExp || '')
    }, beforeMinute)

    return () => clearTimeout(timeout)
  }, [access])
}

export default useAutoReissue
